import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from '../components/FlatCards'

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})