import React from 'react';
import {useState , useRef} from 'react';
import {connect} from 'react-redux' ; 
import {addItem} from '../actions';
import TodoList from '../components/TodoList'

const TodoForm = props => {
    const [task , setTask] = useState("What Is Next?");
    const inputel = useRef(task);


    const onSubmitForm =(e) => {
        e.preventDefault();
        inputel.current.value = " ";

    }

    const onButtonClick = () => {
      if (task !==" " && task!="What Is Next?"){
        props.addItem(task);
        setTask(" ");
      }

    };
    

    
    return (
        <div className="ui container center aligned" > 
          <div className="ui black segment"> 
          <form
          onSubmit ={onSubmitForm}
           className="ui form">
          <h1> Today</h1>
            <h6 style={{marginTop:'-8px'}}> {new Date().toLocaleDateString()}</h6>
            <div className="ui action input">
                <input 
                    ref = {inputel}
                    type="text"
                    onChange={(e)=>setTask(e.target.value)}
                    placeholder={task}  />
                <button 
                    type ="submit"
                    className="ui button"
                    onClick ={onButtonClick}
                    >
                    ADD 
                </button>
                </div>
          </form>
          </div>
          <TodoList />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    
    return {
      addItem: e => dispatch(addItem(e))
    };
  };



export default connect(null , mapDispatchToProps) (TodoForm);