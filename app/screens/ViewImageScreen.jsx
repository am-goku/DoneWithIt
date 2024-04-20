import React from 'react'
import { Image, StyleSheet } from 'react-native'

function ViewImageScreen() {
  return (
    <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')} />
  )
}

export default ViewImageScreen



const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    }
})