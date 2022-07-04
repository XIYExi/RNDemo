import React from 'react'
import { ViewStyle, StyleProp, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { Item, useRadioContext } from '../RadioContext'

interface RadioButtonProps<T> {
  item: Item<T>
  style?: StyleProp<ViewStyle>
}

export default function RadioButton({ item, style }: RadioButtonProps<any>) {
  const [checked, onPress] = useRadioContext(item)

  return (
    <Pressable onPress={onPress} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
      <View style={[styles.container, style]}>
        <Image
          source={checked ? require('./checked.png') : require('./unchecked.png')}
          style={checked ? styles.checkedRadio : styles.radio}
        />
        <Text style={[styles.label, checked ? styles.checkedLabel : undefined]}>{item.label}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    tintColor: '#888888',
  },
  checkedRadio: {
    tintColor: '#448AFF',
  },
  label: {
    color: '#888888',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  checkedLabel: {
    color: '#448AFF',
  },
})
