import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, TextInput} from 'react-native';
import AnswerButton from '../../components/AnswerButton';
import {ScrollView} from "react-native-gesture-handler";
import {Alert} from "react-native-web";
import {LinearGradient} from 'expo-linear-gradient';
import data from '../../assets/data/words.json';
import ReturnButton from "../../components/ReturnButton";


export default function PictureScreen({route, navigation}) {
    const { type } = route.params;
    var { count } = route.params;
    var array = shuffle(data["exercice-photos"]);
    var img;
    var word = array[0][1];
    switch (word) {
        case 'bear':
            img = require('../../assets/images/exercice/bear.png');
            break;
        case 'bee':
            img = require('../../assets/images/exercice/bee.png');
            break;
        case 'bird':
            img = require('../../assets/images/exercice/bird.png');
            break;
        case 'bull':
            img = require('../../assets/images/exercice/bull.png');
            break;
        case 'cat':
            img = require('../../assets/images/exercice/cat.png');
            break;
        case 'chicken':
            img = require('../../assets/images/exercice/chicken.png');
            break;
        case 'dog':
            img = require('../../assets/images/exercice/dog.png');
            break;
        case 'fly':
            img = require('../../assets/images/exercice/fly.png');
            break;
        case 'giraffe':
            img = require('../../assets/images/exercice/giraffe.png');
            break;
        case 'gorilla':
            img = require('../../assets/images/exercice/gorilla.png');
            break;
        case 'horse':
            img = require('../../assets/images/exercice/horse.png');
            break;
        case 'lion':
            img = require('../../assets/images/exercice/lion.png');
            break;
        case 'monkey':
            img = require('../../assets/images/exercice/monkey.png');
            break;
        case 'pangolin':
            img = require('../../assets/images/exercice/pangolin.png');
            break;
        case 'rabbit':
            img = require('../../assets/images/exercice/rabbit.png');
            break;
        case 'shark':
            img = require('../../assets/images/exercice/shark.png');
            break;
        case 'snake':
            img = require('../../assets/images/exercice/snake.png');
            break;
        case 'spider':
            img = require('../../assets/images/exercice/spider.png');
            break;
        case 'whale':
            img = require('../../assets/images/exercice/whale.png');
            break;
        case 'wolf':
            img = require('../../assets/images/exercice/wolf.png');
            break;

    }

    return (
        <RenderExercice count={count} word={word} navigation={navigation} type={type} img={img} />
    );
}
function RenderExercice({count, word, navigation, type, img}){
    const [value, onChangeText] = React.useState('');

    if(count === 9){
        return(<View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View>
                    <ReturnButton name={'Return to the Home Page'} url={'Home'} navigation={navigation} food={count}/>
                </View>

            </ScrollView>

        </View>);
    }else{
        return (<View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 18, color: 'grey'}}>Insert the correct {word}
                         {count}</Text>
                </View>
                <ScrollView style={{marginTop: 60}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'no-wrap', flex: 1}}>
                        <Image source={img}
                               style={{height: 100, width: 200}} />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'space-around'}}>
                        <TextInput
                            style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'space-around'}}>
                        <AnswerButton name="Check your answer" onPress={(word === value.toLowerCase())? () => navigation.navigate('Picture', {type : type, count : count + 1}) : () => Alert.alert('False')} />
                    </View>
                </ScrollView>
            </ScrollView>

        </View>)
    }
}
function Randomize({data, word, navigation, count, type}){
    data = shuffle(data);
    count = count +1;
    var i =-1;
    return(
        data.map(function (item) {
            i++;
            return (
                <AnswerButton key={i} name={item[1]} onPress={(word == item)? () => navigation.navigate('Translation', {type : type, count : count}) : () => Alert.alert('false')} />
            );}
        )
    )
}
function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};
function Rand(arr, n, word){
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len+1);
    taken[len+1] = word;
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;

}
PictureScreen.navigationOptions = {
    title: "Excercices",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    icon: {
        height: 52,
        width: 52,
        marginTop: 19,
        marginLeft: 20,
    },
    button: {
        flex: 0.4,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,

    }
});