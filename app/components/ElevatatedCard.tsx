import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ElevatatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>Elevated Card</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>Elevated Card</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>Elevated Card</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>Elevated Card</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>Elevated Card</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>Elevated Card</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>Elevated Card</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>Elevated Card</Text>
        </View>
        </ScrollView>
    </View>
  )
}

export default ElevatatedCard

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
        marginRight: 20,
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
    elevatedCard: {
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
    
})