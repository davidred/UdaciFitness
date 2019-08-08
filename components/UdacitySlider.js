import React from 'react'
import { View, Text, Slider, StyleSheet } from 'react-native'
import { grey } from '../utils/colors'

export default function UdacitySlider ({ onChange, value, max, unit, step }) {
  return(
    <View style={styles.sliderContainer}>
      <Slider
        value={value}
        onValueChange={onChange}
        maximumValue={max}
        minimumValue={0}
        step={step}
        style={{flex: 1}} />
        <View style={styles.metricCounter}>
          <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
          <Text style={{fontSize: 18, color: grey}}>{unit}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
