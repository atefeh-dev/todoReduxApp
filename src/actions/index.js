let id = 1 ;

export const addItem = task => {
    return {
        type : 'ADD_TODO' ,
        payload : {
            todo : task,
            id : id++
        }
    }
};

export const toggleTodo = id => {
    return {
        type : 'TOGGLE_TODO' , 
        payload :{
            id
        }
    }
};

export const deleteTodo = id => {
    return {
        type : 'DELETE_TODO', 
        payload:{
            id
        }
    }
}
