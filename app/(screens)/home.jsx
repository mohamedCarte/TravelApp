import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const Home = () => {
  return (
    <SafeAreaView className='bg-[#E5E5E]'> 

    <ScrollView>

  
    <View className='mx-3'>

  
    <View className='flex flex-row justify-between items-center top-6 mb-9'>

      <Text className='bg-gray-300 w-36 px-4 py-4 rounded-xl '>Denpasar, Bali</Text>
      <Image
      source={require('../../assets/images/frame.png')}
    
    />
    
   </View>
   
     <Text className=' px-2 flex justify-center text-[36px] font-bold text-[#333333] mb-3'>Find your Happiness with Us!</Text>
     <View className='mb-6'>
     <TextInput placeholder='Search your destination' className=' flex justify-center items-center  bg-gray-300 py-4 px-3 space-x-2 rounded-xl' />
     </View>
  
    <View className='flex flex-row justify-between items-center'>
    <Text className='text-[#333333] text-[24px] font-semibold'>
       Popular
    </Text>
    <TouchableOpacity>
    <Text className='text-[#5893D8] font-semibold'>
      See All
    </Text>
    </TouchableOpacity>
   
    </View>


    <View className='mt-3 mx-6'>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className='overflow-visible' contentContainerStyle={{
        paddingHorizontal: 15
      }}>
        <View  className=' items-center '>
                   <View className=' gap-2 flex-row flex justify-center items-center'>
                  
                    <Image source={require('../../assets/images/img2.png')} className='rounded-lg'/>
                    
                    <Image source={require('../../assets/images/img3.png')} className='rounded-lg'/>
                    <Image source={require('../../assets/images/img1.png')} className='rounded-lg'/>
                    
                    
                   </View>
                  
              </View>
       
      </ScrollView>
    </View>

    <View className='flex flex-row justify-between items-center my-3'>
    <Text className='text-[#333333] text-[24px] font-semibold'>
     Nearest Places
    </Text>
    <TouchableOpacity>
    <Text className='text-[#5893D8] font-semibold'>
      See All
    </Text>
    </TouchableOpacity>
   
    </View>

    
    <View className='flex flex-row  items-center bg-white shadow-slate-100 rounded-lg p-1 mt-4'>

      <Image source={require('../../assets/images/ims1.png')} className='rounded-lg'/>

      <View className='ml-5'>
      <Text >Bajra Sandhi Monument</Text>
      <Text className=' m-1 text-[#828282]'>Panjer, South Denpasar</Text>
      <Text className='text-[#828282]'>3,3 Km</Text>
      </View>
 
        <Text className='ml-24 bg-[#5893D8] py-3 px-3 rounded-xl text-white font-semibold'>Route</Text>

  
     

    </View>
    <View className='flex flex-row  items-center bg-white shadow-slate-100 rounded-lg p-1 mt-4'>

      <Image source={require('../../assets/images/ims2.png')} className='rounded-lg'/>

      <View className='ml-5'>
      <Text >Bajra Sandhi Monument</Text>
      <Text className=' m-1 text-[#828282]'>Panjer, South Denpasar</Text>
      <Text className='text-[#828282]'>4.7 Km</Text>
      </View>
 
        <Text className='ml-24 bg-[#5893D8] py-3 px-3 rounded-xl text-white font-semibold'>Route</Text>

  
     

    </View>

    <View className='flex flex-row  items-center bg-white shadow-slate-100 rounded-lg p-1 mt-4'>

<Image source={require('../../assets/images/ims3.png')} className='rounded-lg'/>

<View className='ml-5'>
<Text >Sanur Beach</Text>
<Text className=' m-1 text-[#828282]'>Sanur, South Denpasar</Text>
<Text className='text-[#828282]'>7.6 Km</Text>
</View>

  <Text className='ml-24 bg-[#5893D8] py-3 px-3 rounded-xl text-white font-semibold'>Route</Text>




</View>
<View className='flex flex-row  items-center bg-white shadow-slate-100 rounded-lg p-1 mt-4'>

<Image source={require('../../assets/images/ims2.png')} className='rounded-lg'/>

<View className='ml-5'>
<Text >Mertasari Beach</Text>
<Text className=' m-1 text-[#828282]'>Panjer, South Denpasar</Text>
<Text className='text-[#828282]'>8.6 Km</Text>
</View>

  <Text className='ml-24 bg-[#5893D8] py-3 px-3 rounded-xl text-white font-semibold'>Route</Text>




</View>
   </View>

   

   </ScrollView>

   <StatusBar backgroundColor="#000000" barStyle="dark-content" />

   </SafeAreaView>
  )
}

export default Home

