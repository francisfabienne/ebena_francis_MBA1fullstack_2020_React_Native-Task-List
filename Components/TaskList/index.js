import React from 'react'
import { View, Text, FlatList} from 'react-native'
import Task from '../Task'


function TaskList ({taches,handleSwitchStatus, deleteTask}) {
    const displayTask = ({ item }) => 
        <Task  subject={item.subject} DoneStatus={item.DoneStatus} id={item.id}  deleteTask={deleteTask} handleSwitchStatus={handleSwitchStatus}>{item.subject}</Task>
    /*
        vu qu'on dois afficher les taches dans la liste, on a besoin de donner des props 
        à la list afin de la faire heriter cette proprieté, d'où le besoin d'importer 
        la liste dans le Taskblock afin de passer ces proprietés
     */
    return (
        <FlatList
            data={taches}
            renderItem={displayTask}
            keyExtractor={item => item.id}
        />    
        
    )
}
export default TaskList
