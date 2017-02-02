import React, { Component, } from 'react'
import { View, ListView, Text, TouchableOpacity} from 'react-native'


class SelectFriends extends Component {

  static propTypes = {}

  static defaultProps = {}

constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {name: 'james', picture: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg'},
        {name: 'jared', picture: 'https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg'}
      ]),
      selectedFriends: {}
    };
  }
toggleSelectedUser(rowID, rowData) {
    selectedFriends = this.state.selectedFriends;
    if (rowID in selectedFriends) {
        delete selectedFriends[rowID];
      } else {
        selectedFriends[rowID] = rowData;
      }
    console.log(Object.values(this.state.selectedFriends))
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          style={{flex: 1}}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
        <Text 
          style={{height: 100, backgroundColor: 'green', color: 'white', alignItems: 'center'}} 
          onPress={() => this.props.saveValues({selectedFriends: Object.values(this.state.selectedFriends)})}
          >Submit
        </Text>
      </View>
    )
  }
  
  _renderRow = (rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) => {
    return (
      <TouchableOpacity>
        <Text onPress={() => this.toggleSelectedUser(rowID, rowData)}>{parseInt(rowID) + 1}: {rowData.name}</Text>
      </TouchableOpacity>
    );
  }


}

export default SelectFriends