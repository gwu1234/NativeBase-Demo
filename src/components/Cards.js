import React, { Component } from 'react';
import { View, Dimensions, } from 'react-native';
import { Button, Text, Card, CardItem, Body} from 'native-base';
import { Actions } from 'react-native-router-flux';
const  screenWidth = Dimensions.get('window').width; 
const  screenHeight = Dimensions.get('window').height; 
const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
     greeting: "how are you ?"
  },
  {
    name: 'guoping',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    greeting: "have good day !"
 }
 ]

class Cards extends Component {
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
            <Text style ={{fontSize: 35, fontWeight:"bold", color: "white", paddingTop: 10}} >Card Show Room</Text>
            </View>
            <View style={styles.cardContainer}>
                    <Card>
                    <CardItem header bordered>
                      <Text>NativeBase Crad Header</Text>
                    </CardItem>
                    <CardItem bordered>
                      <Body>
                        <Text>
                          Card Body 1: NativeBase is a free and open source framework that enable
                          developers to build
                          high-quality mobile apps using React Native iOS and Android
                          apps
                          with a fusion of ES6.
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem bordered>
                      <Body>
                        <Text>
                          Card Body 2: NativeBase is a free and open source framework that enable
                          developers to build
                          high-quality mobile apps using React Native iOS and Android
                          apps
                          with a fusion of ES6.
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem bordered>
                      <Body>
                        <Text>
                          Card Body 3: NativeBase is a free and open source framework that enable
                          developers to build
                          high-quality mobile apps using React Native iOS and Android
                          apps
                          with a fusion of ES6.
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem footer bordered>
                      <Text>Card Footer</Text>
                    </CardItem>
                  </Card>
            </View>
            <View style={styles.footer}>
                    <Button bordered light onPress = {()=>Actions.buttons()} style={{backgroundColor:"white"}}>
                        <Text>Buttons</Text>                         
                    </Button>
                    <Button bordered light onPress = {()=>Actions.badges()} style={{backgroundColor:"white"}}>
                        <Text>Badges</Text>                         
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
  cardContainer: {
    marginTop : screenHeight*0.1,
    height: screenHeight*0.8,
    flexDirection: "row",      
  },
  footer : {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    height: screenHeight*0.1,
    backgroundColor: 'green',
    flexDirection: "row", 
    justifyContent: "space-around", 
  },
  user: {
    width: 150,
    height: 150, 
  },
  image: {
    width: 100,
    height: 100, 
  },
  name:{
    fontWeight:"bold",
    color: "black"
  }
};

export default Cards
