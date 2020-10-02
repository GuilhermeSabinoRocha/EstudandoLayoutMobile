import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
// import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <Icon name="close" size={30} style={styles.closeIcon} />
        <Text style={styles.textHeader}>Insira os seus dados</Text>
      </View>

      <TextInput style={styles.textInput1} placeholder="  Usuário ou email" />

      <TextInput style={styles.textInput2} placeholder="  Senha" />

      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.esqueciTextView}>
        <Text style={styles.esqueciText}>ESQUECI A SENHA</Text>
      </View>

      <View style={styles.socialmedia}>
        <TouchableOpacity style={styles.buttonIconStyle}>
          <Image
            source={{
              uri:
                'https://findicons.com/files/icons/1982/social_me/60/facebook.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View />
          <Text style={styles.buttonTextStyle}>FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIconStyle}>
          <Image
            source={{
              uri:
                'https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo-thumbnail.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View />
          <Text style={styles.buttonTextStyle}>GOOGLE</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textFooter}>
        Ao entrar no Duolingo, você concorda com os nossos Termos e Política de
        Privacidade.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fefefc',
  },

  header: {
    //width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontFamily: 'CreteRound-Regular',
    backgroundColor: '#fefefc',
  },

  closeIcon: {
    marginLeft: '2%',
    marginTop: '1.3%',
    color: '#b7b8b6',
  },

  textHeader: {
    marginLeft: '30%',
    color: '#b7b8b6',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: '0.9%',
  },

  textInput1: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#f7f7f7',
    marginTop: '3.5%',
    marginLeft: '2%',
    marginRight: '2%',
    borderColor: '#b7b8b6',
    borderWidth: 1,
  },

  textInput2: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#f7f7f7',
    marginLeft: '2%',
    marginRight: '2%',
    borderColor: '#b7b8b6',
    borderWidth: 1,
  },

  loginButton: {
    backgroundColor: '#e4e4e4',
    borderRadius: 15,
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '3.5%',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },

  loginButtonText: {
    color: '#afafaf',
    fontSize: 13,
    fontWeight: 'bold',
  },

  esqueciTextView: {
    alignItems: 'center',
    marginBottom: 250,
  },

  esqueciText: {
    color: '#46a4e3',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: '3.5%',
    justifyContent: 'center',
  },

  socialmedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 300,
  },

  buttonIconStyle: {
    flexDirection: 'row',
    paddingHorizontal: 73,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#fefefc',
    borderWidth: 1,
    borderColor: '#b7b8b6',
    height: 40,
    borderRadius: 15,
    marginTop: '5.5%',
    marginLeft: '2%',
    marginRight: '2%',
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    marginLeft: '4%',
    height: 25,
    width: 25,
    backgroundColor: '#485a96',
  },
  buttonTextStyle: {
    color: '#4a589e',
    fontWeight: 'bold',
    fontSize: 12.5,
    marginBottom: 3,
    marginTop: 2,
    marginLeft: 10,
  },

  textFooter: {
    marginLeft: '3%',
    color: '#b7b8b6',
    fontSize: 12,
    marginTop: '2%',
  },
});

export default LoginScreen;
