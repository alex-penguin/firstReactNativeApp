import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
        <Text style={styles.headingText}>Fancy Card</Text>
        <View style={[styles.card,styles.cardElevated]}>
            <Image source={{uri: 'https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg'}} style={styles.cardImage}/>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>My Card</Text>
          <Text style={styles.cardLabel}>My Card Label</Text>
          <Text style={styles.cardDescription}>My Card 
          Description. This is my card that I created.
          I created it by myself but also with the help 
          of my coding teacher.</Text>
          <Text style={styles.cardFooter}>My Card Footer</Text>
        </View>
        </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        marginLeft: 20,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 25,
    },
    card: {
      height: 400,
      width: 380,
      borderRadius: 20,
      marginVertical: 14,
      marginHorizontal: 18,
      alignSelf: "center",  
    },
    cardElevated: {
      backgroundColor: 'white',
      elevation: 3,
      shadowOffset: { width: 1, height: 1 },

    },
    cardImage: {
        height: 230,
        marginBottom: 10,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,

    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'lobster',
    },
    cardLabel: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 16,
        color: 'lightpurple',
        fontStyle: 'italic',
    },
    cardFooter: {
        fontSize: 16,
        color: 'blue',
        fontWeight: 'bold',
    }
  

})