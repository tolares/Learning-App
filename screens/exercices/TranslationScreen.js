import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import AnswerButton from '../../components/AnswerButton';
import {ScrollView} from "react-native-gesture-handler";
import {Alert} from "react-native-web";
import {LinearGradient} from 'expo-linear-gradient';
import data from '../../assets/data/words.json';
import ReturnButton from "../../components/ReturnButton";


export default function TranslationScreen({route, navigation}) {
    const { type } = route.params;
    var { count } = route.params;
    var words;
    switch (type) {
        case 1 :
            words = shuffle(data.food);
            break;
        case 2 :
            words = shuffle(data.animals);
            break;
    }
    return (
        <RenderExercice count={count} words={words} navigation={navigation} type={type}  />
    );
}
function RenderExercice({count, words, navigation, type}){
    if(count === 3){
        return(
            <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View>
                    <LinearGradient
                        colors={['#78B5FA', '#9586FD']}
                        start={[0, 0]}
                        end={[1, 0]}
                        style={{borderRadius: 10, marginTop: 20, marginHorizontal: 10}}
                    >
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Sentence', {type : type, count: count})}
                        >
                            <Text style={{textAlign: 'center', lineHeight: 30, fontSize: 20, paddingHorizontal: 10, textTransform: 'capitalize'}}>
                                {"Next Exercice !"}
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

            </ScrollView>

        </View>);
    }else{
        return (<View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 18, color: 'grey'}}>Choose the correct
                        translation {count}</Text>
                </View>
                <ScrollView style={{marginTop: 60}}>
                    <Text style={{textAlign: 'center', fontSize: 25, textTransform: 'capitalize'}}>
                        {words[0][0]}
                    </Text>
                    <Text style={{textAlign: 'center', fontSize: 20, color: 'grey', marginTop: 10}}>
                        in French
                    </Text>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', height: 100}}>
                        <Randomize
                            data={words.slice(0, 3)}
                            word={words[0]}
                            navigation={navigation}
                            count={count}
                            type={type}
                        />
                    </View>
                </ScrollView>
            </ScrollView>

        </View>)
    }
}
function Randomize({data, word, navigation, count, type}){
    data = shuffle(data);
    count = count +1;
    var i = -1;
    return(
        data.map(function (item) {
            i++;
            return (
                    <AnswerButton name={item[1]} onPress={(word == item)? () => navigation.navigate('Translation', {type : type, count : count}) : () => Alert.alert('false')} />

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
TranslationScreen.navigationOptions = {
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