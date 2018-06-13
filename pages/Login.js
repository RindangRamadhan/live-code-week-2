import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class LoginPage extends React.Component {
	static navigationOptions = {
		title: 'Login Page'
	}
	constructor(){
		super()
		this.state = {
      playerName: ''
		}
	}


	render() {
		const {playerName} = this.state

		return (
			<View style={styles.container}>
        <Text style={ {fontSize: 20} }>Silakan Login Permainan</Text>

				<TextInput
        style={ styles.inputBox }
        onChangeText={(playerName) => this.setState({playerName})}
        value={this.state.playerName}/>

				<Button
        style={ {fontSize: 15} }
				title="Login"
				onPress={() => this.props.navigation.navigate("Snake", { player: playerName})}/>
			</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 10
	},
	inputBox: {
		width: '100%',
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 6,
		padding: 12,
		margin: 6
	}
});
