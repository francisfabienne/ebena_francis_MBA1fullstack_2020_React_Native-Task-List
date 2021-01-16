import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const jours = ["Dimanche", "Lundi", "Mardi", "Mrecredi", "Jeudi", "Vendredi", "Samedi"];
const Mois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
];

 function Header() {
 const day = new Date();
    return (
        <View style ={Styles.container}>
            <Text style = {Styles.date}>{jours[day.getDay()] + " " + day.getDate() + " " + Mois[day.getMonth()]}</Text>
        </View>
    )
}
    
    const Styles =StyleSheet.create({
        container: {
            marginTop: 15,
            marginBottom: 15
        },
        date: {
            fontSize: 20,
        }

    })

export default Header;  
