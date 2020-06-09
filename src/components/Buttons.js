import React, { Component } from 'react';
import { View, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Text, Icon} from 'native-base';
//const  screenWidth = Dimensions.get('window').width; 
const  screenHeight = Dimensions.get('window').height; 

class Buttons extends Component {
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
                  <Text style ={{fontSize: 35, fontWeight:"bold", color: "white", paddingTop: 10}} >Button Show Room</Text>
            </View>
            <View style={styles.buttonContainer}>
                  <View style={styles.left}>
                    <Button light><Text> Light </Text></Button>
                    <Button primary><Text> Primary </Text></Button>
                    <Button success><Text> Success </Text></Button>
                    <Button info><Text> Info </Text></Button>
                    <Button warning><Text> Warning </Text></Button>
                    <Button danger><Text> Danger </Text></Button>
                    <Button dark><Text style={{color:"white"}}> Dark </Text></Button>         
                </View>
                <View style={styles.mid} >
                    <Button transparent light>
                      <Text>Light</Text>
                    </Button>
                    <Button transparent>
                      <Text>Primary</Text>
                    </Button>
                    <Button transparent success>
                      <Text>Success</Text>
                    </Button>
                    <Button transparent info>
                      <Text>Info</Text>
                    </Button>
                    <Button transparent warning>
                      <Text>Warning</Text>
                    </Button>
                    <Button transparent danger>
                      <Text>Danger</Text>
                    </Button>
                    <Button transparent dark>
                      <Text style={{color:"white"}}>Dark</Text>
                    </Button>
                </View>
                <View style={styles.mid2} >
                    <Button iconLeft light>
                      <Icon name='arrow-back' />
                      <Text>Back</Text>
                    </Button>
                    <Button iconRight light>
                      <Text>Next</Text>
                      <Icon name='arrow-forward' />
                    </Button>
                    <Button iconLeft>
                      <Icon name='home' style={{color:'white'}} />
                      <Text>Home</Text>
                    </Button>
                    <Button iconLeft transparent primary>
                      <Icon name='beer' style={{color:'white'}}/>
                      <Text>Pub</Text>
                    </Button>
                    <Button iconLeft dark>
                      <Icon name='cog' style={{color:'white'}}/>
                      <Text style={{color:'white'}}>Settings</Text>
                    </Button>

                </View>
                <View style={styles.right}>
                      <Button bordered light>
                        <Text>Light</Text>
                      </Button>
                      <Button bordered>
                        <Text>Primary</Text>
                      </Button>
                      <Button bordered success>
                        <Text>Success</Text>
                      </Button>
                      <Button bordered info>
                        <Text>Info</Text>
                      </Button>
                      <Button bordered warning>
                        <Text>Warning</Text>
                      </Button>
                      <Button bordered danger>
                        <Text>Danger</Text>
                      </Button>
                      <Button bordered dark>
                        <Text>Dark</Text>
                      </Button> 
                </View>
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
  buttonContainer: {
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
  left: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-around",
    flexDirection: "column",  
  },
  mid: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",  
  },
  mid2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",  
  },
  right: {
    flex: 1,
    alignItems: "flex-start",
    alignContent: "space-around",
    justifyContent: "space-around",
    flexDirection: "column",  
  }
};

export default Buttons
