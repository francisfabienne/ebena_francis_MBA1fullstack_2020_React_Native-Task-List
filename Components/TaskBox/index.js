import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TaskList from '../TaskList'
import TaskInput from '../TaskInput'
import uuid from 'react-native-uuid'
import DisplayCount from '../DisplayCount'
import HiddeFormButton from '../HiddeFormButton'

// const uuid = uuid.v1();

class TaskBox extends Component{
    state = {
        taches : [{    
            subject: " nouvelle taches",
            DoneStatus: true,
            id: uuid.v1()
        }],
        formVisible: true
                                                                                                                                    
    }


    fillTaskListbyTask = (subject) => {
        const newTask = {subject: subject, DoneStatus: false, id: uuid.v1()}
    
        this.setState({
            taches : [newTask, ...this.state.taches]
        })
         
        // console.log(this.state.taches)
    }

    
    deleteTask = (id) => {
            var newTaskArray = this.state.taches.filter(tache => tache.id !== id)
        this.setState({
            taches: newTaskArray
        })
    }
        
    handleSwitchStatus = (id) => {
        var tachesAjoutées = [];
        var toggleDoneStatus = !this.state.taches.DoneStatus;

        this.state.taches.forEach(tache => {

         tache.id === id? (
             tachesAjoutées.push({subject: tache.subject, DoneStatus: toggleDoneStatus, id: id})
         ) : (
            tachesAjoutées.push(tache)
         )
         console.log(tachesAjoutées)
     });

     this.setState({
         taches: tachesAjoutées
     })
     }

    showDoneTasks = () => {
        var doneTaskNumber = 0;

        this.state.taches.forEach(tache => {
            if(tache.doneStatus){
                doneTaskNumber++
            }
            console.log( doneTaskNumber)
        })
         return doneTaskNumber
    }

    getTaskInput = () => {
        this.setState({
            formVisible: !formVisible
        })
        console.log("oui")
    }

    render(){
        return(
            <View style={{flex: 1}}>
                
                {this.state.formVisible ?  <TaskInput fillTaskListbyTask={this.fillTaskListbyTask}/> : null }

                <DisplayCount 
                  allTask={this.state.taches.length} 
                  allDoneTask={() => this.showDoneTasks()}
                />
                <TaskList 
                  taches={this.state.taches}  
                  deleteTask={this. deleteTask} 
                  handleSwitchStatus={this.handleSwitchStatus}
                />
                <View 
                  style={{height: 570, position: "absolute", top: 0, left: 0, bottom: 0, right: 0, zIndex: -2}}>
                    <HiddeFormButton 
                      getTaskInput={this.getgetTaskInput}
                   />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        background: 'red',
        flex:1,
        position: 'relative'
    }
});
export default TaskBox;
