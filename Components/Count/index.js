import React, { Component } from 'react'
import { Text, View } from 'react-native'


class Count extends Component {
    render() {
        return (
            <View>
                <Text style={{fontWeight: 'bold'}}> {this.props.tasks} </Text>
                <Text style={{color: "#333"}}> {this.props.detail} </Text>
            </View>
        )
    }
}
export default Count;
