import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Count from '../Count'

class DisplayCount extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Count 
                   tasks={this.props.allTask}
                   detail={'All Task'} 
                />
                    {console.log(this.props.allTask)}
                <Count 
                    tasks={this.props.allDoneTask}

                    detail={'All Done Task'}
                 />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        paddingBottom: 15,
        justifyContent: "space-around"
    }
})
export default DisplayCount;
