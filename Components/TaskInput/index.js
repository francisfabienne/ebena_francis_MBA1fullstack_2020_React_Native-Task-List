import React, {Component} from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'





class TaskInput extends Component{
    /*On a donc besoin du state pour pouvoir modifier la valeur de l'input*/
    state = {
        taskSubject: ' '
    }

    /* Enfin on a besoin de la methode createNewTask afin de parametrer le state
       pour pouvoir mettre à jour la valeur de notre input
    */
    handleChangeText = (newTaskSubject) =>{
        
        this.setState({
            taskSubject: newTaskSubject
        });
    };

    AddTask = () => {
        
        if( this.state.taskSubject.length > 0 ) {
            this.props.fillTaskListbyTask(this.state.taskSubject);
            this.setState({
                taskSubject: ''
            })
        } else {
            return;
        }
    };
    
    render() {
        return(
            
            <View>
                <View style={styles.container}>
                    <TextInput 
                       /*value est valeur qui sera afficher*/
                       /*handleChangeText est la methode qui sera appelé*/
                       style={{padding: 10, border: "0.5px solid #333", borderRadius: 5}}
                       placeholder="Veuillez saisr une Tâche"
                       defaultValue={this.state.taskSubject}
                       onChangeText={this.handleChangeText}
                    />
                    <Button
                       title="Ajouter"
                       color="blue"
                       onPress={this.AddTask}
                    ></Button>
                </View>
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    BoxForm: {
        marginBottom: 15
    }
})
export default TaskInput;
