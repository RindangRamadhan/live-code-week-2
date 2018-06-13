import React, {Component} from 'react'
import {StyleSheet, View, Text, Button, TextInput} from 'react-native'

  class SnakePage extends React.Component {
    static navigationOptions = {
      title: 'Snake Page',
    };

    constructor(){
  		super()
  		this.state = {
        nilaiDadu: 0
  		}
      this.putarDadu = this.putarDadu.bind(this)
  	}

    putarDadu = () => {
      this.setState({nilaiDadu: Math.floor((Math.random() * 6) + 1)})
    }

    render() {
      const { navigation } = this.props;
      const player = navigation.getParam('player', 'Guest Player');
      const papan = []

      return (
        <View style={styles.container}>

          {/* User Login */}
          <Text style={{ alignItems: 'center', justifyContent: 'center'}}>
            { player == "" ? "Halo Guest Player" : `Halo ${player}` }
          </Text>

          {/* Papan Ular Tangga */}
          <View style={styles.viewChild} />

          {/* Nilai dari Putar Dadu */}
          <Text> {this.state.nilaiDadu} </Text>

          {/* Tombol Putar Dadu */}
          <Button style={ {fontSize: 15} } title="Putar Dadu" onPress={this.putarDadu}/>
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
    viewChild: {
      width: 50,
      height: 50,
      backgroundColor: 'skyblue',
      justifyContent: 'center',
      margin: 2
    }
  });

export default SnakePage
