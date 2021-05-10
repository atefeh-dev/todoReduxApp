import React from 'react';
import {connect} from 'react-redux' ;
import Todo from './Todo' ;

const TodoList = props => {
    const renderList =  props.Tasks.data.map((task , index)=> {
        return < Todo key = {index} 
        data = {task}/>
    });

    return (
       <div className="ui middle aligned divided list"> {renderList} </div>
    );
};

const mapStateToProps = state => {
    return {
        Tasks  : state.todo
    }
}

export default connect(mapStateToProps)(TodoList);