import React, { Component, } from 'react'
import {
  View,
  TextInput,
  Text,
  ListView,
  Image,
} from 'react-native'
import SelectSong from './SelectSong.js'
import SelectFriends from './SelectFriends.js'

let recommendationValues = {
  title: null,
  artist: null,
  selectedFriends: []
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  
class SendRecommendation extends Component {

  static propTypes = {}

  static defaultProps = {}
  
  constructor(props) {
    super(props)
    this.state = {step: 1, recommendationValues: {}}
  }
  
  saveValues(fields) {
    this.setState({
      recommendationValues: Object.assign({}, this.state.recommendationValues, fields),
      step: this.state.step + 1
    })
}

nextStep() {
  this.setState({
    step : this.state.step + 1
  })
}

// Same as nextStep, but decrementing
previousStep() {
  this.setState({
    step : this.state.step - 1
  })
}

  render() {
    switch(this.state.step) {
      case 1:
        return (<SelectSong 
                  fieldValues={this.state.recommendationValues}
                  saveValues={(fields) => this.saveValues(fields)}
                  />);
        case 2:
        return (<SelectFriends 
                  fieldValues={this.state.recommendationValues}
                  saveValues={(fields) => this.saveValues(fields)}
                  />)
        case 3:
        return (
          <View>
            <Text onPress={()=>this.setState({step: 1})}>Success!</Text>
            <Text>Title: {this.state.recommendationValues.title}</Text>
            <Text>Artist: {this.state.recommendationValues.artist}</Text>
            <ListView 
              dataSource={ds.cloneWithRows(this.state.recommendationValues.selectedFriends)}
              renderRow={(rowData) => <View><Text>{rowData.name}</Text><Image 
                                                                         style={{
                                                                           width: 300,
                                                                           height: 200,
                                                                         }}
                                                                         resizeMode={"contain"}
                                                                         source={{uri:rowData.picture}}
                                                                       /></View>}>
            </ListView>
          </View>
        )
    }
  }
}

export default SendRecommendation