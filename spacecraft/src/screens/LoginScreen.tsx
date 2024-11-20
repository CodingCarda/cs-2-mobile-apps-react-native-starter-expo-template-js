
import React from 'react';
import { AppRegistry, Text, View, TouchableHighlight, TextInput, Dimensions, StyleSheet, ImageBackground, Image, ScrollView, SafeAreaView,} from 'react-native';


// You can import supported modules from npm
import { Card, Checkbox} from 'react-native-paper';



let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function LoginScreen() {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [checked, onCheck] = React.useState(true)
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.purple}>
        <Text style={styles.paragraph}>
        SPACECRAFT
        </Text>
      </View>
      <View>
        <TextInput
        style={styles.textinput}
        placeholder='Email'
        onChangeText={onChangeEmail}
        />
        <TextInput
        style={styles.textinput}
        placeholder='Password'
        onChangeText={onChangePassword}
        secureTextEntry={checked}
        />
      </View>
     
<Checkbox.Item  position='leading' status={checked ? "unchecked" : 'checked'} label="Show Password" onPress={() => onCheck(!checked)}/>
      
      <TouchableHighlight
        onPress={() => {
                        alert('Welcome!');
                    }}
        style={styles.button}
      >
      <Text style={styles.login}>
        Login
      </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
                        alert('Nothin yet');
                    }}
        style={styles.termsView}
      >
      
      <View >
        <Text style={styles.terms}>
          Read terms and conditions
        </Text>
      </View>
      </TouchableHighlight>
      
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    
  },
  paragraph: {
    color: 'white',
    fontSize: deviceHeight/20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  login: {
    color: 'white',
    fontSize: deviceHeight/55,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  purple: {
    backgroundColor: '#6750A4',
    height: deviceHeight/3,
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    
    marginBottom: deviceHeight/33
  },
  textinput: {
    margin: deviceHeight/70,
    borderColor: '#88809e',
    borderWidth: 1,
    height: deviceHeight/15,
    width: deviceWidth*7/8,
    padding: 8,
    color: 'black',
    fontSize: deviceHeight/42,
    borderRadius: 4.2
  },
  button: {
    backgroundColor: '#6750A4',
    height: deviceHeight/16,
    width: deviceWidth*5/6,
    alignItems: 'center',
    justifyContent: 'center',
    
    marginTop: deviceHeight/20,
    borderRadius: 35,
  },
  terms: {
    color: 'grey',
    fontSize: deviceHeight/40,
  },
  termsView: {
    marginTop: deviceHeight/25
  },
  
});
