import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Forgot from '../pages/Forgot';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator screenOptions={{headerShown: false}}>
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="Forgot" component={Forgot} />
  </Auth.Navigator>
);
export default AuthRoutes;
