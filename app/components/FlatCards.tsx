import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.redCard]}> 
        <Text>Red Card</Text>
        </View>
        <View style={[styles.card,styles.blueCard]}> 
        <Text>Blue Card</Text>
        </View>
        <View style={[styles.card,styles.greenCard]}> 
        <Text>Green Card</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText: {
        marginLeft: 20,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 25,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 10,
    },
    redCard: {
        backgroundColor: 'red',
    },
    blueCard: {
        backgroundColor: 'blue',
    },
    greenCard: {
        backgroundColor: 'green',
    }

})


// div, span = View
// text = <h1-h6, p>
//<button>Click me</button> = <button><text>Click me</text></button>
// Styles statically
