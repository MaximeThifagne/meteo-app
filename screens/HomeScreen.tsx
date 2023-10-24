import * as React from 'react';
import { View, StyleSheet, Image, useWindowDimensions, Text, Button } from 'react-native';
import { RootStackParamList } from '../type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AddButtonNavigation, HomeBackGround, NavigationRectangle } from '../ui/icons';
import { Blur, Canvas, Rect,} from '@shopify/react-native-skia';
import { BlurView } from 'expo-blur';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export function HomeScreen({navigation} : Props){
    return (
      <View style={styles.view}>
        <Background/>
        <Navigation />
          <Text>Home Screen</Text>
          <Button
          title="Go to location lists"
          onPress={() => navigation.navigate('LocationList')}
        />
        </View>
      );
}

function Background () {
  const {width, height} = useWindowDimensions();
  return <View style={styles.background}>
    <Image style={{resizeMode:'cover', flex:2}} source={HomeBackGround}/>
  </View>
}

function Navigation() {
  const {width, height} = useWindowDimensions();
  return <View style={styles.navigation}>
            <Image style={styles.navigationbottom} source={NavigationRectangle}/>
            <Image style={styles.navigationadd} source={AddButtonNavigation}/>
        </View>
}

const styles = StyleSheet.create({
    view: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    background:{
      position: 'absolute',
      top:0,
      bottom:0,
      right:0,
      left:0,
    },
    navigation:{
      position:'absolute',
      bottom:0,
      left:0,
      right:0
    },
    navigationbottom:{
      position:'absolute',
      bottom:0,
    },
    navigationadd:{
      left:66,
      bottom: -12
    }
  });