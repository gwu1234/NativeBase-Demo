import React, { Component } from 'react';
import { View, Dimensions, } from 'react-native';
import { Button, Text, Badge, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';
const  screenHeight = Dimensions.get('window').height; 

class Badges extends Component {
  constructor() {
      super();
  }

  buttonPressed =() => {
     console.log("pressed");
  }

  render() {    
      return ( 
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style ={{fontSize: 35, fontWeight:"bold", color: "white", paddingTop: 10}} >Badge Show Room</Text>
            </View>
            <View style={styles.badgeContainer}>
                    <Badge>
                    <Text>2</Text>
                  </Badge>
                  <Badge primary>
                    <Text>2</Text>
                  </Badge>
                  <Badge success>
                    <Text>2</Text>
                  </Badge>
                  <Badge info>
                    <Text>2</Text>
                  </Badge>
                  <Badge warning>
                    <Text>2</Text>
                  </Badge>
                  <Badge danger>
                    <Text>2</Text>
                  </Badge>
                  <Badge primary>
                  <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>
                  </Badge>
                  <Badge style={{ backgroundColor: 'black' }}>
                    <Text style={{ color: 'white' }}>1866</Text>
                  </Badge>          
            </View>
            <View style={styles.footer}>
                    <Button bordered light onPress = {()=>Actions.cards()} style={{backgroundColor:"white"}}>
                        <Text>Cards</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.buttons()} style={{backgroundColor:"white"}}>
                        <Text>Buttons</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.checkboxes()} style={{backgroundColor:"white"}}>
                        <Text>CheckBoxes</Text>                         
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
  badgeContainer: {
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

export default Badges
