import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { NewGroup } from '../screens/NewGroup';
import { AddFriend } from '../screens/AddFriend';
import { Expenses } from '../screens/Expenses';
import { AddItem } from '../screens/AddItem';
import { Payment } from '../screens/Payment';
import { Finalization } from '../screens/Finalization';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home"
    >
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="newGroup"
        component={NewGroup}
      />
      <Screen
        name="addFriend"
        component={AddFriend}
      />
      <Screen
        name="expenses"
        component={Expenses}
      />
      <Screen
        name="addItem"
        component={AddItem}
      />
      <Screen
        name="payment"
        component={Payment}
      />
      <Screen
        name="finalization"
        component={Finalization}
      />
    </Navigator>
  );
}
