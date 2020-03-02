import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {Ionicons} from "@expo/vector-icons";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
         <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 20}}>English</Text>
          <Text style={{position: 'absolute', right: 20, marginTop: 10, fontSize: 16}}>Level 1</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'column'}}>
          <TypeButton
          image={require('../assets/images/icons/food.png')}
          type={1}
          count={0}
          url='Translation'
          label='Food'
          navigation={navigation}
          />
          <TypeButton
              image={require('../assets/images/icons/animals.png')}
              type={2}
              count={0}
              url='Translation'
              label='Animals'
              navigation={navigation}
          />
          <TypeButton
              image={require('../assets/images/icons/abstract.png')}
              type={3}
              count={0}
              url='Translation'
              label='Abstract objects'
              navigation={navigation}
          />
          <TypeButton
              image={require('../assets/images/icons/science.png')}
              type={4}
              count={0}
              url='Translation'
              label='Science'
              navigation={navigation}
          />
          <TypeButton
              image={require('../assets/images/icons/chat.png')}
              type={5}
              count={0}
              url='Translation'
              label='Conversation'
              navigation={navigation}
          />
          <TypeButton
              image={require('../assets/images/icons/art.png')}
              type={6}
              count={0}
              url='Translation'
              label='Colors'
              navigation={navigation}
          />
          <TypeButton
              image={require('../assets/images/icons/up.png')}
              type={7}
              count={0}
              url='Translation'
              label='Economics'
              navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
}
function TypeButton({ image, label,url, type,navigation,count }) {
  return (
      <TouchableOpacity onPress={() => navigation.navigate(url, {type : type})}>
        <View style={{ height: 90, flex: 1,flexDirection: 'row' }}>
          <Image
              style={styles.icon}
              source={image}
          />
          <Text style={{marginTop: 37, fontSize: 16, marginLeft: 20}}>{label}</Text>
          <Text style={{marginTop: 37, fontSize: 16, position: 'absolute', right:30}} >{count}/3</Text>
        </View>
      </TouchableOpacity>
  );
}
HomeScreen.navigationOptions = {
  header: null,
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
        shadowOffset: { width: 0, height: -3 },
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
  }
});
