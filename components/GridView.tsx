import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // React Navigation hook
import { RootStackParamList } from './Navigation';

type NavigationProps = NavigationProp<RootStackParamList>;

// Styles
const gridS = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    width: 400,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    flex: 10,
    minWidth: 100,
    maxWidth: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',

    // Visual styles; not important for grid
    padding: 10,
    backgroundColor: 'rgba(249, 180, 45, 0.25)',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  app:{

  }
});


// Define the type for itemData
export type ItemDataType = {
  icon: JSX.Element;
  link: keyof RootStackParamList; // link should be a key of RootStackParamList
  component: undefined;
};

// GridItem component to display a single item with navigation
export const GridItem = ({ itemData }: { itemData: ItemDataType[] }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={gridS.app}>
      {itemData.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={gridS.item}
          onPress={() => navigation.navigate(item.link)}
        >
          {item.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Exporting Grid as a function
export function Grid({ data }: { data: { icon: JSX.Element; link: string }[] }) {
  return (
    <View style={gridS.container}>
      {data.map((item, index) => (
        <GridItem key={index} icon={item.icon} link={item.link} />
      ))}
    </View>
  );
}