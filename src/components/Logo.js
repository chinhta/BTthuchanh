import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Logo = () => {
    return (
        <Image
        style={styles.lago2}
        source={require('../../assets/Tako.png')}
      />
    );
};

export default Logo;

const styles = StyleSheet.create({
    lago2: {
        width: 150,
        height: 150,
        BackgroundColor: '#fff',
      },
});

