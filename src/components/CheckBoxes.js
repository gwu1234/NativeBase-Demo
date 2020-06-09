import React, { Component } from 'react';
import { View, Dimensions, } from 'react-native';
import { Button, Text, ListItem, CheckBox, Body} from 'native-base';
import { Actions } from 'react-native-router-flux';
const  screenHeight = Dimensions.get('window').height; 

class CheckBoxes extends Component {
  constructor() {
      super();
      this.state = {
         checked_1: false,
         checked_2: false,
         checked_3: false,
      }
  }

  buttonPressed =() => {
     console.log("pressed");
  }

  render() {    
      return ( 
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style ={{fontSize: 35, fontWeight:"bold", color: "white", paddingTop: 10}} >Checkbox Show Room</Text>
            </View>
            <View style={styles.checkboxContainer}>
                    <ListItem>
                      <CheckBox checked={this.state.checked_1} onPress={()=>this.setState({checked_1: !this.state.checked_1})}/>
                      <Body>
                        <Text>Daily Stand Up</Text>
                      </Body>
                    </ListItem>
                    <ListItem>
                      <CheckBox checked={this.state.checked_2} onPress={()=>this.setState({checked_2: !this.state.checked_2})}/>
                      <Body>
                        <Text>Discussion with Client</Text>
                      </Body>
                    </ListItem>
                    <ListItem>
                      <CheckBox checked={this.state.checked_3} color="red" onPress={()=>this.setState({checked_3: !this.state.checked_3})}/>
                      <Body>
                        <Text>Finish list Screen</Text>
                      </Body>
                    </ListItem>                     
            </View>
            <View style={styles.footer}>
                   <Button bordered light onPress = {()=>Actions.cards()} style={{backgroundColor:"white"}}>
                        <Text>Cards</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.badges()} style={{backgroundColor:"white"}}>
                        <Text>Badges</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.buttons()} style={{backgroundColor:"white"}}>
                        <Text>Buttons</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.lists()} style={{backgroundColor:"white"}}>
                        <Text>Lists</Text>                      
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
  checkboxContainer: {
    marginTop : screenHeight*0.1,
    height: screenHeight*0.8,
    flexDirection: "column", 
    justifyContent: "space-around", 
    alignItems: "center",   
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

export default CheckBoxes
