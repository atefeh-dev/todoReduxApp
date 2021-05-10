const initialState = {
    data : [
        {
            id : 0 , 
            content : 'BE HAPPY :)',
            compelete: false

        }
    ]
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TODO" : {
            return {
                data :[...state.data ,
                    {
                        id : action.payload.id,
                        content : action.payload.todo , 
                        compelete : false
                    }
                ]
            }
        }
        case "TOGGLE_TODO" : {
            return {
                data : state.data.map((todo)=> {
                    if (todo.id === action.payload.id){
                        return {
                            id : todo.id,
                            content : todo.content,
                            compelete : !todo.compelete
                        }
                    }
                    else return todo
                })
            }
        }
        case "DELETE_TODO" : {
            return { 
                 data :state.data.filter(todo => todo.id !== action.payload.id )
            }
        }
        default :return state    
    }
    
}
export default counterReducer;
