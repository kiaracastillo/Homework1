import { ScrollView, View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react';
import { Link } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

export default function products() {
  return (
    <ScrollView style={StyleSheet.container}>

    
<View >
      <Text style={styles.productTitle}>Plushies</Text>
     
      <TextInput  style={styles.input}
               placeholder="Search"><Feather name="search" size={20} color="#2e997b" /> Search</TextInput>

    </View>

    <View style={styles.table}>
    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/ballena.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Willy</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color:'#2e997b' }}> $26.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/bear.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Pardo </Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color:'#2e997b' }}> $18.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/capibara.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Capi</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $25.00</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/cinnaroll.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Cinnamoroll</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $30.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/clownrana.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Art Frog</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color:'#2e997b' }}> $29.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/conejo.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Angel</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color:'#2e997b' }}> $24.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images//conejogris.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Lili</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $20.00</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/crab.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Crab</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $25.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images//dinoamarillo.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Dino Taco</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color:'#2e997b' }}> $29.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/dinomorado.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Moradin</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color:'#2e997b' }}> $24.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/dinonaranja.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Dino Naranja</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $20.00</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/dinorosa.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Dino Loli Pop</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $25.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/dinorojo.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Dino Fire</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color:'#2e997b' }}> $29.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/dinoturquesa.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Azulin</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color:'#2e997b' }}> $24.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/dinoverde.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Dino Aguacate</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $20.00</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/dogburger.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Dog Burger</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $27.00</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/dogcafe.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Chocolate</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $24.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/ferrt.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Pinky</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $25.99</Text>

    </View>
    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/gallina.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Lola La Gallina</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $28.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/gato.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Katy</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $18.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/kirby.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Kirby</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $30.00</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/kuromi.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Kuromi</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $35.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/nutria.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Juan La Nutri</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $27.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/pinguidino.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Pinguinin</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $21.00</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/rata.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Chefsito</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $22.99</Text>
    </View>

    <View style={styles.productInfo} >
    <Image style={styles.productImg} source={require("../../assets/images/tortuga.jpg")} />
    <Text style={{fontFamily: "suse-bold", fontSize: 15 }}> Chiquitin</Text>
    <Text style={{fontFamily: "suse-med", fontSize: 15, color: '#2e997b' }}> $28.99</Text>
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
    productTitle:{
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

    table: {
      
      flexDirection: 'row',
      flexWrap: 'wrap',
      left: 20,
      
      
     },

     productInfo: {
      width: 170,
      height: 215,
      
      marginBottom: 25,
      marginRight: 30,

      
      
     },

     productImg: {
      width: 170,
      height: 170,
      borderRadius: 20,
      marginBottom: 10,
     },
  
});