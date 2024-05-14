import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from '../components/FlatCards'
import ElevatatedCard from '../components/ElevatatedCard'
import FancyCard from '../components/FancyCard'
import ActionCard from '../components/ActionCard'
import InputCard from '../components/InputCard'

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatatedCard />
        <FancyCard />
        <ActionCard />
        <InputCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})