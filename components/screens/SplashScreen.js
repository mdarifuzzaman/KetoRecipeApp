import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SplashScreen(props) {
    
    let performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { 
                resolve('result');
                console.log("Resolve result..");
                props.navigation.navigate('NavigationContainerScreen');
            },
            2000
          )
        )
    }

    performTimeConsumingTask();

    return (
        <View style={styles.viewStyles}>
            <Text style={styles.textStyles}>
            Blitz Reading
            </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
      },
      textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
      }
});
