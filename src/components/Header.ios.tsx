import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

type ThemeProps = {
  theme: boolean
}

export function Header({ theme }: ThemeProps) {
  return (
    <SafeAreaView style={theme ? styles.dark : styles.light}>
      <View style={[styles.header, theme ? styles.dark : styles.light]}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  dark: {
    backgroundColor: '#191932',
  },

  light: {
    backgroundColor: '#273FAD',
  },

  header: {
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
