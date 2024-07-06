import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import QRCode from 'react-native-qrcode-svg';

const QrShow = () => {

  let logoFile = require('./logo.png');

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center',margin:hp(2) }}>
      <QRCode
        value="https://www.nexalink.co"
        size={hp(25)}
        logo={logoFile}
        logoSize={hp(9)}
      />
    </View>
  );
}

const App = () => {

  const [qrFlag, setQrFlag] = useState(true);
  const [qrBtnIcon, setQrBtnIcon] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

      {/*"Share my card" button*/}

      <TouchableOpacity style={styles.btn} onPress={() => { setQrFlag(!qrFlag); setQrBtnIcon(!qrBtnIcon) }}>
        <MIcon name={qrBtnIcon ? 'chevron-down' : 'chevron-up'} color='white' size={hp(3)} />
        <Text style={styles.txt}>Share my card</Text>
      </TouchableOpacity>

      {/* Show qr code */}

      {
        qrFlag ? <QrShow /> : null
      }

      {/* Other Navigation options */}

      <View style={{ width: wp(90), alignSelf: 'center', borderRadius: 10, backgroundColor: '#f0f0f0', padding: hp(1.5),marginVertical:hp(4) }}>

        {/* Share my card */}
        <TouchableOpacity style={styles.btn2}>

          <MIcon name='export' color='#696969' size={hp(3.2)} />
          <Text style={[styles.txt, { color: '#696969' }]}>Share my card</Text>

        </TouchableOpacity>

        {/* Add card to wallet */}
        <TouchableOpacity style={styles.btn2}>

          <MIcon name='wallet-outline' color='#696969' size={hp(3.2)} />
          <Text style={[styles.txt, { color: '#696969' }]}>Add card to wallet</Text>

        </TouchableOpacity>

        {/* Add card to homescreen*/}
        <TouchableOpacity style={styles.btn2}>

          <MIcon name='cellphone-text' color='#696969' size={hp(3.2)} />
          <Text style={[styles.txt, { color: '#696969' }]}>Add card to homescreen</Text>

        </TouchableOpacity>

        {/* Create Email signature */}
        <TouchableOpacity style={styles.btn2}>

          <MIcon name='email-multiple-outline' color='#696969' size={hp(3.2)} />
          <Text style={[styles.txt, { color: '#696969' }]}>Create Email signature</Text>

        </TouchableOpacity>

        {/* Create virtual background */}
        <TouchableOpacity style={styles.btn2}>

          <MIcon name='image-outline' color='#696969' size={hp(3.2)} />
          <Text style={[styles.txt, { color: '#696969' }]}>Create virtual background</Text>

        </TouchableOpacity>

      </View>

      {/*"Share with AirDrop" button*/}

      <TouchableOpacity style={styles.btn}>
        <MIcon name='broadcast' color='white' size={hp(3)} />
        <Text style={styles.txt}>Share with AirDrop</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#ff6e23",
    margin: hp(2),
    padding: hp(1.2),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowRadius: 10,
    elevation: 10,
  },
  txt: {
    color: 'white',
    fontSize: hp(2.2),
    fontWeight: 'bold',
    marginLeft: wp(2)
  },
  btn2: {
    padding: hp(1),
    alignItems: 'center',
    flexDirection: 'row',
  }
});

export default App;