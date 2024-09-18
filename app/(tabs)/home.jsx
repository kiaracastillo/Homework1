import { ScrollView, View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import products from './products';


export default function home() {
  return (
    <ScrollView style={StyleSheet.container}>

    <View style={styles.topHome}>
      <Text style={styles.homeTitle}>Home</Text>
     
      <TextInput  style={styles.input}
               placeholder="Search"><Feather name="search" size={20} color="#2e997b" /> Search</TextInput>

    </View>

    

    <View style={styles.topBanner}>

    <Image style={styles.banner} source={require("../../assets/images/kuromibanner.png")} />
    <Text  style={styles.bannerText}> Sanrio Collection </Text>
    <Link href="/products" style={styles.bannerButton}>
    Buy
      </Link>


    </View>

    <View style={styles.collabs}>
    <Text style={{fontFamily: "suse-bold", fontSize: 20, paddingBottom: 35 }}>Collabs</Text>
    <Link href="/products" style={{fontFamily: "suse-reg", fontSize: 15, textDecorationLine: "underline", left: 240, color: '#2e997b'}}> View All</Link>
   

    <Link href="/products" style={styles.collab} >
    Sanrio </Link>
    <Link href="/products" style={styles.collab} > 
   Pokemon </Link>
    <Link href="/products"  style={styles.collab}> 
    Care Bears </Link>
    <Link href="/products" style={styles.collab} >
    SpongeBob  </Link>

    </View>


<View  style={styles.topNew}>
      <Text style={{fontFamily: "suse-bold", fontSize: 20 }}>New</Text>
      <Link href="/products" style={{fontFamily: "suse-reg", fontSize: 15, textDecorationLine: "underline", left: 305, color: '#2e997b'}}>All</Link>

      <Image style={styles.new} source={require("../../assets/images/crab.jpg")} />
      <Image style={styles.new} source={require("../../assets/images/ballena.jpg")} />
      <Image style={styles.new} source={require("../../assets/images/nutria.jpg")} />
      
    </View> 

    <View style={styles.dino}>
    <Text style={{fontFamily: "suse-bold", fontSize: 20 }}>Dinosaurs </Text>
    <Link href="/products" style={{fontFamily: "suse-reg", fontSize: 15, textDecorationLine: "underline", left: 245, color: '#2e997b'}}>All</Link>
    </View>

<View style={styles.grid}>
    <View style={styles.product} >
    <Image style={styles.productI} source={require("../../assets/images/dinoamarillo.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Dino Taco</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color:'#2e997b' }}> $29.99</Text>
    </View>

    <View style={styles.product} >
    <Image style={styles.productI} source={require("../../assets/images/dinomorado.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Moradin</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color:'#2e997b' }}> $24.99</Text>
    </View>

    <View style={styles.product} >
    <Image style={styles.productI} source={require("../../assets/images/dinonaranja.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Dino Naranja</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $20.00</Text>
    </View>

    <View style={styles.product} >
    <Image style={styles.productI} source={require("../../assets/images/dinorosa.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Dino Loli pop</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $25.99</Text>
    </View>

 
    </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
 
    },
    homeTitle:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      paddingBottom: 20,
      paddingTop: 15,
    },

    input: {
      backgroundColor: "#eaeaea",
      borderRadius: 20,
      width: '90%',
      left: 15, 
      padding: (5, 5),
      marginBottom: 20,
    },

    topBanner: {
      backgroundColor: "#f6ca4e",
      width: "90%",
      borderRadius: 20,
      padding: 20,
      left: 15,     
      flexDirection: 'row',
    },

    banner: {
width: 150,
height: 150,
    },
    bannerText: {
      fontWeight: "bold",
      fontSize: 20,
      alignSelf: 'center',
       
    },
    bannerButton: {
      padding: (5, 5),
        backgroundColor: "#fff",
        textAlign: "center",
        width: '50%',
        height: 30,
        borderRadius: 20,
        marginTop: 100,
        left: -165,
        textDecorationLine: 'underline',
    },


     topNew: {
      
      flexDirection: 'row',
      padding: 15,
      
     },

     new: {
      borderRadius: 20,
      marginTop: 35,
      marginRight: 10,
      width: 150,
      height: 150, 
      right: 60,
      
     },

     collabs: {
      flexDirection: 'row',
      padding: 15,

      
      
     },

     collab: {
      borderRadius: 20,
      marginTop: 35,
      marginRight: 10,
      width: 85,
      height: 30, 
      right: 125,
      backgroundColor: '#fff',
      textAlign: 'center',
      justifyContent: 'center',
      paddingTop: 5,
      fontFamily: 'suse-med',

        
        
     },



     dino: {

      
      padding: 15,
      flexDirection: 'row',
     },

     grid: {
      
      flexDirection: 'row',
      flexWrap: 'wrap',
      left: 20,
      
      
     },

     product: {
      width: 170,
      height: 215,
      
      marginBottom: 25,
      marginRight: 30,

      
      
     },

     productI: {
      width: 170,
      height: 170,
      borderRadius: 20,
      marginBottom: 10,
     },

});