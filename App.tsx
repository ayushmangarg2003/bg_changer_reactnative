/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [bg, setBg] = useState('#222222');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setBg(color)
  };

  return (
    <>
      <StatusBar backgroundColor={bg} />
      <View style={[styles.container, { backgroundColor: bg }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 4,
    backgroundColor: '#814155',
    paddingVertical: 12,
    paddingHorizontal: 28,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#fff',

  },
});
