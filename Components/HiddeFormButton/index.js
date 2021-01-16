import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

class HiddeFormButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.getTaskInput} style={{position: "absolute", bottom: 15, right: 15, width: 55, height: 55, borderRadius: 100, backgroundColor: "yellow"}}>
                <Text style={{display: 'block', position: "relative", top: 14, left: 21, fontWeight: 'bold', color: "white", fontSize: 25}}>+</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 15,
        right: 15,
        width: 55,
        height: 55,
        borderRadius: 100,
        background: "yellow"

    }
})
export default HiddeFormButton
