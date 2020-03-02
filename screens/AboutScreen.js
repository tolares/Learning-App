import * as React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function AboutScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <OptionButton
            icon="ios-information-circle"
            label="Info"
            onPress={() => Alert.alert(
                'Made with love by HAJJAR Khaled & LAGARDE Henry',
                'Check the code on our Github',
                {cancelable: false},
            )}
            />

            <OptionButton
                icon="logo-github"
                label="HAJJAR Khaled"
                onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
            />
            <OptionButton
                icon="logo-github"
                label="LAGARDE Henry"
                onPress={() => WebBrowser.openBrowserAsync('https://github.com/tolares')}
            />
        </ScrollView>
    );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
    return (
        <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                    <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
                </View>
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>{label}</Text>
                </View>
            </View>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    contentContainer: {
        paddingTop: 15,
    },
    optionIconContainer: {
        marginRight: 12,
    },
    option: {
        backgroundColor: '#fdfdfd',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
        borderColor: '#ededed',
    },
    lastOption: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginTop: 1,
    },
});
