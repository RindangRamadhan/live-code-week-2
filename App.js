import React from 'react'
import {createStackNavigator} from 'react-navigation'
import LoginPage from './pages/Login'
import SnakePage from './pages/Snake'

const RootStack = createStackNavigator({
	Login: {
		screen: LoginPage
	},
	Snake: {
		screen: SnakePage
	}
},{
	initialRouteName: 'Login'
})


export default RootStack
