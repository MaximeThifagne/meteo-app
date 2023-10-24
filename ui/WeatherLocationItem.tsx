import { StyleSheet, View, Text, Image} from 'react-native';
import { WeatherEntry } from '../api/weather';
import { theme } from './theme';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

type Props = WeatherEntry & {
    onPress? : () => void
}

export function WeatherLocationItem({city, country, icon,highest, lowest, description, temperature, onPress} : Props,){
    return <View style={styles.root}>
    <Svg style={styles.decoration} viewBox="0 0 342 175" fill="none">
<Path d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z" fill="url(#paint0_linear_2_337)"/>
<Defs>
    <LinearGradient id="paint0_linear_2_337" x1="0" y1="128" x2="354.142" y2="128" gradientUnits="userSpaceOnUse">
    <Stop stopColor="#5936B4"/>
    <Stop offset="1" stopColor="#362A84"/>
    </LinearGradient>
</Defs>
    </Svg>
    <Image style={styles.icon} source={icon}/>
    <Text style={styles.description}>
      {description}
    </Text>
    <View style={styles.footer}>
      <Text style={styles.infos}>H:{highest}°  L:{lowest}°</Text>
      <Text style={styles.location}>{city}, {country}</Text>
    </View>
    <Text style={styles.temperature}>
      {temperature}°
    </Text>    
  </View>
}

const styles = StyleSheet.create({
    root: {
        alignSelf:'center',
        width: 342,
        height: 184,
        flexShrink: 0,

    },
    decoration:{
        position:'absolute',
        top:10,
        left: 0,
        right: 0,
        bottom:0    
    },
    description: {
        position: 'absolute',
        bottom: 24,
        right:20,
        fontSize: 13,
        lineHeight:18,
        color: theme.colors.primary
    },
    temperature: {
        position: 'absolute',
        top: 29,
        left:20,
        fontSize: 64,
        color: theme.colors.primary
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left:20,
        
    },
    location:{
        fontSize: 17,
        lineHeight:22,
        color: theme.colors.primary
    },
    infos: {
        fontSize: 13,
        lineHeight:18,
        color: theme.colors.primary
    },
    icon:{
        position: 'absolute',
        width:160,
        height: 160,
        right: 4,
        top: -12
    }
  });