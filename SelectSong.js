import React, { Component, } from 'react'
import {
  View,
  TextInput,
  Text,
  StyleSheet
} from 'react-native'

class SelectSong extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }
  
  saveAndContinue(saveValues, nextStep) {
    // Get values via this.refs
    var data = {
      title     : "Futuro",
      artist : "Cafe Tacuba",
    }
    saveValues(data);
    nextStep();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(artist) => {this.setState({artist})}}
          placeholder={'Artist'}
        />
        <TextInput
          style={styles.textInput}
          placeholder={'Song Title'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(title) => {this.setState({title})}}
        />
          </View>
        <View 
          style={{
            height: 50,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
        <Text 
          style={{
            fontSize: 20,
            color: 'white',
          }}
          onPress={() => this.props.saveValues({title: this.state.title, artist: this.state.artist})}
          >Submit</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 30, 
    width: 100,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.5)",
   },
});

export default SelectSong