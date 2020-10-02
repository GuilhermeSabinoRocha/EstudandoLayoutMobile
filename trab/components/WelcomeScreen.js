import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const WelcomeScreen = () => {
  return (
    <View style={styles.maincontainer}>
      <View>
        <Icon name="arrow-back" size={30} style={styles.arrowIcon} />
        <TouchableOpacity style={styles.greenButton} />
      </View>

      <Text style={styles.escolhaText}>Escolha um caminho</Text>

      <View style={styles.owlIcons}>
        <TouchableOpacity style={styles.buttonIconStyle}>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/3b/19/fa/3b19fa45c93aed82380e99a288e22869.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View />

          <View>
            <Text style={styles.TextStyle1}>
              Vai aprender alemão pela primeira vez?
            </Text>
            <Text style={styles.TextStyle2}>Comece do zero!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIconStyle}>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/3b/19/fa/3b19fa45c93aed82380e99a288e22869.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View />
          <View>
            <Text style={styles.TextStyle1}>Já sabe um pouco de alemão?</Text>
            <Text style={styles.TextStyle2}>Descubra o seu nível aqui!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fefefc',
  },

  header: {
    flexDirection: 'row',
    //width: 100,
  },

  greenButton: {
    backgroundColor: '#68cd19',
    borderRadius: 15,
    marginLeft: '2%',
    marginRight: '2%',
    marginTop: '3.5%',
    alignItems: 'center',
    height: 20,
    justifyContent: 'center',
  },

  arrowIcon: {
    marginLeft: '2%',
    marginTop: '1.3%',
    color: '#b7b8b6',
  },

  escolhaText: {
    color: '#000000',
    marginLeft: '2%',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: '4%',
    justifyContent: 'center',
  },

  owlIcons: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 250,
  },

  buttonIconStyle: {
    flexDirection: 'row',
    paddingHorizontal: 33,
    paddingVertical: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b7b8b6',
    height: 100,
    borderRadius: 15,
    marginTop: '3.5%',
    marginLeft: '2%',
    marginRight: '2%',
  },

  buttonImageIconStyle: {
    padding: 30,
    margin: 15,
    marginLeft: '1.5%',
    height: 25,
    width: 25,
  },
  TextStyle1: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 3,
    marginTop: 2,
    marginLeft: 10,
  },

  TextStyle2: {
    color: '#b7b8b6',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 3,
    marginTop: 2,
    marginLeft: 10,
  },
});

export default WelcomeScreen;
