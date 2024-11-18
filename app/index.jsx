import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import CustomButton from './components/customButton'
import { router } from 'expo-router'

const index = () => {
  return (
    <ImageBackground
    source={require('../assets/images/splash.png')}
    style={{ width: '100%', height: '100%', }}
    className='object-cover'
  >
    <SafeAreaView>
    <ScrollView contentContainerStyle={{height: '100%'}}>

      <View>
        <Text className='text-lg text-white ml-5 mt-5 font-bold'>
          GT.
        </Text>
      </View>
      <View className='flex justify-center items-center mt-[110px]'>
        <Text className="text-[70px] font-semibold text-white  ">Vacation</Text>
      </View>

     <CustomButton
       title='Start'
       handlePress={()=> router.push('/home')}
     />


      </ScrollView>
      <StatusBar backgroundColor="#000" style="light"  />

    </SafeAreaView>

  </ImageBackground>
);

  
}

export default index

const styles = StyleSheet.create({})