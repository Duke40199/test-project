import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '@/components/Navigation'; // Import the types
import { GridItem, ItemDataType } from '@/components/GridView'
import HomeScreen from './index'
import TabTwoScreen from './explore';
import ItemInfoScreen from './item_info';
const Stack = createStackNavigator();

export default function TestNewTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GridItemScreen"
        options={{ title: 'Grid Item Screen', headerShown: false }}
        component={GridItemScreen}
      />
      <Stack.Screen
        name="HomeScreen"
        options={{ title: 'Home Screen', headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="TabTwoScreen"
        options={{ title: 'Tab Screen', headerShown: false }}
        component={TabTwoScreen}
      />
      <Stack.Screen
        name="ItemInfoScreen"
        options={{ title: 'ItemInfoScreen', headerShown: false }}
        component={ItemInfoScreen}
      />
    </Stack.Navigator>
  );
}

// A new screen component that contains the ParallaxScrollView
const GridItemScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={{ width: 100, height: 100 }}
        />
      }
    >
      <GridItem itemData={itemData} />
    </ParallaxScrollView>
  );
};

const itemData: ItemDataType[] = [{
  icon: (
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri:
          'https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png',
      }}
    />
  ),
  link: 'HomeScreen', // Ensure this matches a key in RootStackParamList
  component: undefined,
},
{
  icon: (
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri:
          'https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png',
      }}
    />
  ),
  link: 'TabTwoScreen', // Ensure this matches a key in RootStackParamList
  component: undefined,
},
{
  icon: (
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri:
          'https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png',
      }}
    />
  ),
  link: 'ItemInfoScreen', // Ensure this matches a key in RootStackParamList
  component: undefined,
},
];


const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

