import React, { Component } from 'react';
import { View, Dimensions, } from 'react-native';
import { Button, Text, ListItem, Body, Icon, Left, Right, Switch} from 'native-base';
import { Actions } from 'react-native-router-flux';
const  screenHeight = Dimensions.get('window').height; 


class Lists extends Component {
  constructor() {
      super();
  }

  render() {    
      return ( 
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style ={{fontSize: 35, fontWeight:"bold", color: "white", paddingTop: 10}} >List Show Room</Text>
            </View>
            <View style={styles.listContainer}>                  
                    <ListItem icon>
                    <Left>
                      <Button style={{ backgroundColor: "#FF9501" }}>
                        <Icon active name="airplane" />
                      </Button>
                    </Left>
                    <Body>
                      <Text>Airplane Mode</Text>
                    </Body>
                    <Right>
                      <Switch value={false} />
                    </Right>
                  </ListItem>
                  <ListItem icon>
                    <Left>
                      <Button style={{ backgroundColor: "#007AFF" }}>
                        <Icon active name="wifi" />
                      </Button>
                    </Left>
                    <Body>
                      <Text>Wi-Fi</Text>
                    </Body>
                    <Right>
                      <Text>GeekyAnts</Text>
                      <Icon active name="arrow-forward" />
                    </Right>
                  </ListItem>
                  <ListItem icon>
                    <Left>
                      <Button style={{ backgroundColor: "#007AFF" }}>
                        <Icon active name="bluetooth" />
                      </Button>
                    </Left>
                    <Body>
                      <Text>Bluetooth</Text>
                    </Body>
                    <Right>
                      <Text>On</Text>
                      <Icon active name="arrow-forward" />
                    </Right>
                  </ListItem>                    
            </View>
            <View style={styles.footer}>
                    <Button bordered light onPress = {()=>Actions.cards()} style={{backgroundColor:"white"}}>
                        <Text>Cards</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.badges()} style={{backgroundColor:"white"}}>
                        <Text>Badges</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.checkboxes()} style={{backgroundColor:"white"}}>
                        <Text>CheckBoxes</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.buttons()} style={{backgroundColor:"white"}}>
                        <Text>Buttons</Text>                      
                    </Button>
                    <Button bordered light onPress = {()=>Actions.forms()} style={{backgroundColor:"white"}}>
                        <Text>forms</Text>  
                    </Button>
                    <Button bordered light onPress = {()=>Actions.hooks()} style={{backgroundColor:"white"}}>
                        <Text>Hooks</Text>  
                    </Button>                  
             </View>  
          </View>   
        );
      }
  }

const styles = {
  container: {
    flex: 1 ,     
  }, 
  header : {
    position: 'absolute',
    top: 0,
    width: "100%",
    height: screenHeight*0.1,
    backgroundColor: '#EE5407',
    alignItems: "center",
  },
  listContainer: {
    marginTop : screenHeight*0.1,
    height: screenHeight*0.8,
    flexDirection: "column", 
    justifyContent: "space-around", 
    alignItems: "center", 
    overflow: "scroll"  
  },
  footer : {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    height: screenHeight*0.1,
    backgroundColor: 'green',
    flexDirection: "row", 
    justifyContent: "space-around", 
  }
};

export default Lists
