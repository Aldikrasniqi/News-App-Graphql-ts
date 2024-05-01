import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs.navigator';
import StoryDetails from './StoryDetails';
import { RootStackParamList } from '../types/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="StoryDetails"
        component={StoryDetails}
        options={({ route }) => ({
          presentation: 'modal',
          title: route.params.title,
        })}
      />
    </RootStack.Navigator>
  );
};
