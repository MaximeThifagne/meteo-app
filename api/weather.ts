import { faker } from '@faker-js/faker';
import { MoonRainIcon, MoonWindIcon, SunCloudMidRainIcon, SunCloudRainIcon, TornadoIcon } from '../ui/icons';
import { ImageSourcePropType } from 'react-native';

export type WeatherEntry = {
    id: string,
    icon: ImageSourcePropType,
    description: string,
    temperature: number,
    highest : number,
    lowest: number,
    city: string,
    country: string
}

async function wait(seconds: number): Promise<void>{
    await new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

export async function getLocationList(){
    await wait (2);
    return new Array(5).fill(1).map((_, k) => ({
        id: faker.string.uuid(),
        icon: faker.helpers.arrayElement([
            MoonRainIcon,
            MoonWindIcon,
            SunCloudMidRainIcon,
            SunCloudRainIcon,
            TornadoIcon
        ]),
        description: faker.lorem.words(2),
        temperature: faker.number.int({ min: -10, max: 40 }),
        highest: faker.number.int({ min: -5, max: 45 }),
        lowest: faker.number.int({ min: -15, max: 35 }),
        city: faker.location.city(),
        country: faker.location.country()
    }))
}

