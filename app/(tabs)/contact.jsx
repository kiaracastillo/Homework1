import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';


export default function contact() {
  return (
    <ScrollView style={StyleSheet.container}>

      <View style={styles.arrow}>
        <Link href="/home" style={{fontFamily: "suse-reg", fontSize: 15, color: '#2e997b', }}><AntDesign name="arrowleft" size={20} color="#2e997b" />Home</Link>
        
      </View>

    <View >
    <Text style={styles.contactTitle}>Contact Us</Text>
    <Text style={styles.contactInfo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio dolor molestias assumenda, quam, ducimus quaerat adipisci aspernatur vel, optio in reiciendis repellat quisquam sit qui nulla beatae excepturi quia tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Text>
    </View>

    <View style={styles.contactSquare}>

      <View style={styles.Square}>
      <Feather name="phone" size={24} color="#2e997b" />
      <Text style={{fontFamily: "suse-bold"}}>Call US</Text>
      <Text style={{color: '#a4a2a4'}}>Our team is on the line Mon-Fri - 9-17</Text>
      </View>
      <View style={styles.Square}>
      <Feather name="phone" size={24} color="#2e997b" />
      <Text style={{fontFamily: "suse-bold"}}>Email Us</Text>
      <Text style={{color: '#a4a2a4'}}>Our team is on the line Mon-Fri - 9-17</Text>
      </View>

    </View>


    <View style={styles.grid}>
    <Text style={{fontFamily: "suse-reg", fontSize: 15, color: '#a4a2a4', marginTop: -15 }}>Contact us in Social Media </Text>

    </View>

    <View style={styles.gridSocial}>
        <View style={styles.social}> 
        <Entypo name="instagram" size={24} color="#f6ca4e" />
        <Text style={{color: '#f6ca4e'}}>Instagram</Text>
        <Entypo name="share-alternative" size={24} color="black" />
        </View>

        <View style={styles.social}> 
        <FontAwesome5 name="telegram-plane" size={24} color="#2e997b" />
        <Text style={{color: '#2e997b'}}>Telegram</Text>
        <Entypo name="share-alternative" size={24} color="black" />
        </View>

        <View style={styles.social}> 
        <Feather name="facebook" size={24} color="#eb3d49" />
        <Text style={{color: '#eb3d49'}}>Facebook</Text>
        <Entypo name="share-alternative" size={24} color="black" />
        </View>
        <View style={styles.social}> 
        <FontAwesome5 name="whatsapp" size={24} color="#eda4b6" />
        <Text style={{color: '#eda4b6'}}>WhatsApp</Text>
        <Entypo name="share-alternative" size={24} color="black" />
        </View>


    </View>

    

    </ScrollView>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "#fff",

    },
    arrow:{
      left: 20, 
      paddingTop: 10,
      justifyContent: 'center',
    },
    contactTitle:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      paddingBottom: 20,
      paddingTop: 15,
    },
    contactInfo: {
      width: "90%",
      backgroundColor: '#fff',
      color: 'black',
      borderRadius: 20,
      height: 130,
      padding: 15,
      left: 20, 
    },

  contactSquare: {

    padding: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
   
  },

  Square: {
    width: 175,
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 20,
    padding: 15,
    marginRight: 10, 

  },

  grid: {
    padding: 10,
    left: 10,
  },

  gridSocial: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,

    
  },

social:{
  left: 20, 
  width: "90%",
  height: 65,
  flexDirection: 'row',
  backgroundColor: '#fff',
  marginBottom: 15,
  alignItems: 'center',
  borderRadius: 20,
  justifyContent: 'space-around',
  

},

  
});