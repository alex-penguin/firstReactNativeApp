import {
    StyleSheet, Text, View, Linking, TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View style={styles.card}>
            <Text style={styles.headingText}>Action Card</Text>
            <Image source={{ uri: 'https://cdn.pixabay.com/photo/2024/05/05/05/55/goose-8740266_1280.jpg' }} style={styles.cardImage} />
            <View style={styles.bodyContainer}>
                <Text numberOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur voluptatum nulla, ipsa quibusdam quas ut cupiditate enim excepturi minus natus est obcaecati labore ratione tempora veritatis eaque sint nemo nesciunt ea.</Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={() => openWebsite('https://www.google.com')}>
                    <Text>Visit Google</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openWebsite('https://www.alexpenman.com.au')}>
                    <Text>Visit My Site</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ActionCard

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
        backgroundColor: 'white',
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
    },
    cardImage: {
        height: 230,
        marginBottom: 10,
    },
    bodyContainer: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
})