import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, TextInput} from 'react-native';
import AnswerButton from '../../components/AnswerButton';
import {ScrollView} from "react-native-gesture-handler";
import {Alert} from "react-native-web";
import {LinearGradient} from 'expo-linear-gradient';
import data from '../../assets/data/words.json';
import ReturnButton from "../../components/ReturnButton";


export default function SentenceScreen({route, navigation}) {
    const { type } = route.params;
    var { count } = route.params;
    var array = shuffle(data.sentence);
    var sentence = array[0][0];
    var word = array[0][1];

    return (
        <RenderExercice count={count} word={word} navigation={navigation} sentence={sentence} type={type} />
    );
}
function RenderExercice({count, word, navigation, type, sentence}){
    const [value, onChangeText] = React.useState('');

    if(count === 6){
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
                    <Text style={{textAlign: 'center', fontSize: 18, color: 'grey'}}>Insert the correct
                         {count}</Text>
                </View>
                <ScrollView style={{marginTop: 60}}>
                    <Text style={{textAlign: 'center', fontSize: 25, textTransform: 'capitalize'}}>
                        {sentence}
                    </Text>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'space-around'}}>
                        <TextInput
                            style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'space-around'}}>
                        <AnswerButton name="Check your answer" onPress={(word.indexOf(value.toLowerCase()) > -1)? () => navigation.navigate('Sentence', {type : type, count : count + 1}) : () => Alert.alert('False')} />
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
SentenceScreen.navigationOptions = {
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