import { View, Text, ActivityIndicator, FlatList, StyleSheet, useWindowDimensions, Pressable, SafeAreaView } from 'react-native';
import { RootStackParamList } from '../type';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import { getLocationList } from '../api/weather';
import React from 'react';
import { Canvas, Rect, LinearGradient, vec, SweepGradient, Circle, Blur } from '@shopify/react-native-skia';
import { WeatherLocationItem } from '../ui/WeatherLocationItem';
import { BlurView } from 'expo-blur';
import { SearchBar } from 'react-native-screens';


type Props = NativeStackScreenProps<RootStackParamList, 'LocationList'>

export function LocationListScreen({navigation}: Props){
    const {data, isLoading} = useQuery({
        queryKey: ['aa'],
        queryFn: () => getLocationList()
        
    })

    if(isLoading){
        return(
        <View style={styles.loader}>
            <Background/>
            <ActivityIndicator/>
        </View>
        );
    }

    return (
        <View style={styles.view}>  
                <Background/>
            <FlatList
                contentContainerStyle={{ paddingBottom: 205}}                
                style={styles.list}
                data={data} 
                ItemSeparatorComponent={Gap}
                renderItem={({item}) => 
                <Pressable onPress={() => navigation.navigate("Home")} key={item.id}>
                    <WeatherLocationItem {...item} />
                </Pressable>
                }
                />
                <Header/>
        </View>
    )
}

function Gap(){
    return <View style={{height:20}} />
}

function Header(){
    return <SafeAreaView style={styles.container}>
        <BlurView  blurReductionFactor={10} tint='dark'  intensity={40} style={styles.header}/>     
    </SafeAreaView>  
}

function Background () {
        const {height, width} = useWindowDimensions();
        const circleRadius = (width - 40) /2
        const topCircleCenter = vec(circleRadius,circleRadius + 80)
        const bottomCircleCenter = vec(width - 100, height -circleRadius - 9)
        return (
          <Canvas style={styles.background}>
            <Rect x={0} y={0} width={width} height={height}>
                <LinearGradient
                    start={vec(0,0)}
                    end={vec(256,256)}
                    colors={["#2E335A", "#1C1B33"]}
                />                
            </Rect>
            <Circle 
                c={topCircleCenter} 
                r={circleRadius} 
                origin={topCircleCenter}
                transform={[{rotate: Math.PI /2}]}
            >
                <SweepGradient
                c={topCircleCenter}
                colors={["rgba(97, 47, 171, .35)","rgba(97, 47, 171, 0)", "rgba(97, 47, 171, 1)","rgba(97, 47, 171, 0)","rgba(97, 47, 171, 1)","rgba(97, 47, 171, .35)"]}
                positions={[0,.13,.38,.6,.75,1]}
                />
                <Blur blur={90}/>
            </Circle>
            <Circle 
                c={bottomCircleCenter} 
                r={circleRadius} 
                origin={bottomCircleCenter}
                transform={[{rotate: Math.PI /2}]}
            >
                <SweepGradient
                c={bottomCircleCenter}
                colors={["rgba(97, 47, 171, .35)","rgba(97, 47, 171, 0)", "rgba(97, 47, 171, 1)","rgba(97, 47, 171, 0)","rgba(97, 47, 171, 1)","rgba(97, 47, 171, .35)"]}
                positions={[0,.13,.38,.6,.75,1]}
                />
                <Blur blur={90}/>
            </Circle>
          </Canvas>
        );
};

const styles = StyleSheet.create({
    container:{
       height:155,
       position:'absolute',
       top:0,
       left:0,
       right:0
    },
    view: {
      flex: 1,
    },
    loader:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        color:'white'
    },
    header:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        height:155
    },
    list:{
        paddingTop: 175
    },
    background: {
        position: 'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
    }
  });
  