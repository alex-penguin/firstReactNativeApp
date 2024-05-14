import { StyleSheet, Text, View, Button,
    Alert, TextInput} from 'react-native'
import React, {useState} from 'react'

const InputCard = () => {
    const [text, setText] = useState('')
    const handleInputChange = (text: string) => {
        setText(text)
    }
    const handleSubmit = () => {
        Alert.alert('You entered:', text)
    }
  return (
    <View>
      <Text style={styles.headingText}>InputCard</Text>
        <TextInput style={styles.input} placeholder='placeholder' onChangeText={handleInputChange} value={text} />
        <Button title='Submit' onPress={handleSubmit} />
    </View>
  )
}

export default InputCard

const styles = StyleSheet.create({
    headingText: {
        marginLeft: 20,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 25,
    },
    input: {
        height: 90,
        margin: 12,
        fontSize: 30,
        borderWidth: 1,
        padding: 10,
    }
})