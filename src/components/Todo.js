import {useRef} from 'react';
import {connect} from 'react-redux';
import {toggleTodo , deleteTodo} from '../actions' ; 

const Todo = props => {
    const DeleteX = useRef(null) ;

   const onClick =()=>{
       props.toggleTodo( props.data.id);
   }

   const onHover =()=> {
    DeleteX.current.style.display ="block"
   }
   const onLeave =()=>{
    DeleteX.current.style.display="none"
   }
   const onClickDelete = () => {
        if (props.tasks.length!== 0){
           props.del(props.data.id);
   }
}
     return (
        <div 
            className="item" 
            onMouseEnter ={onHover}
            onMouseLeave = {onLeave}>
                <i
                 className= { props.data.compelete ?  "check circle outline icon ":"circle outline icon"  }
                onClick ={onClick} >
                </i>
            <div
              className="content"
              style={ props.data.compelete ?{textAlign:'left', textDecoration:"line-through", color:'gray'}:{textAlign:'left'}} >
                {props.data.content}

                <div className="right floated content" ref ={DeleteX}  style={{display:'none' , color:'black'}}>
                <span >
                 <i className="trash alternate outline icon"
                 onClick = {onClickDelete}
                 ></i>
                </span>
             </div>
             </div>
            </div>

            
    );
};

const mapDispatchToProps = dispatch => {

    return {

        toggleTodo : (id) => dispatch(toggleTodo(id)),
        del: (id) => dispatch(deleteTodo(id))

    };
}
const mapStateToProps = state =>{
    return {
        tasks : state.todo.data
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Todo);
