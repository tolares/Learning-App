import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import {Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

export default function ReturnButton({navigation, url, name, food}) {
    return (
        <LinearGradient
            colors={['#78B5FA', '#9586FD']}
            start={[0, 0]}
            end={[1, 0]}
            style={{borderRadius: 10, marginTop: 20, marginHorizontal: 10}}
        >
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(url, {food : food})}
            >
                <Text style={{textAlign: 'center', lineHeight: 30, fontSize: 20, paddingHorizontal: 10, textTransform: 'capitalize'}}>
                    {name} {food}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 0.5,
        borderRadius: 10,

    }
});
