import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress}) => {
  return (
    
   <TouchableOpacity
   onPress={handlePress}
   className='bg-[#5893D8] flex flex-row rounded-xl min-h-[62px] justify-center items-center mt-[350px] w-[330px] mx-14'>
      <Text className={`text-primary font-bold text-[24px] text-center text-white `}>{title}</Text>
   </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})