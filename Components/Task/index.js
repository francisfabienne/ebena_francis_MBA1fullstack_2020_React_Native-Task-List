import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function Task({ subject, DoneStatus, id, handleSwitchStatus,  deleteTask }) {
   
    return (<ScrollView>
            <TouchableOpacity onPress={() => handleSwitchStatus(id)}>
                <View style={styles.boxTask}>
                    <View style={styles.middleContainer}>
                    {
                        DoneStatus ? (
                            <AntDesign name="checkcircleo" size={18} color="green" />
                       ): (
                           <Feather name="circle" size={18} color="green" />
                       )
                    }
                        <Text style={{paddingLeft: 10, color: DoneStatus ? 'lightgrey': 'black'}}>{ subject }</Text>
                    </View>
                    <TouchableOpacity onPress={() =>  deleteTask(id)}>
                        <AntDesign name="delete" size={18} color="black" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            </ScrollView>
    )
};


const styles = StyleSheet.create({
   boxTask: {
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-between",
       alignItems: "center",
       padding: 10,
    // backgroundColor: "blue",
       borderRadius: 5,
       border: "1px solid grey",
       marginBottom: 10
   },
   middleContainer: {
       display: "flex",
       flexDirection: "row",
       justifyContent: "flex-start",
       alignItems: "center",
   }
})
export default Task;
