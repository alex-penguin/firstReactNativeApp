import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from '../components/FlatCards'
import ElevatatedCard from '../components/ElevatatedCard'

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatatedCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})