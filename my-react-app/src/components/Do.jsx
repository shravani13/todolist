import React,{useState} from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import './Do.css';


const Do=(props)=>{
    
    const deleteHandler=()=>{
        // console.log(props.value)
        props.deleteValue(props.value);
    
    }
    const markedHandler=()=>{
        // console.log(props.value,props.completed);
        props.markedValue(props.value);
        task();   
    }
    let nextElement,firstElement;
    function task(){
        if(props.completed===true){
            firstElement=<span style={{'text-decoration':'line-through'}}>{props.value}</span>
            nextElement=<CheckCircleIcon onClick={markedHandler} />
        }
        else{
            firstElement=<span>{props.value}</span>
            nextElement=<CheckCircleOutlineIcon  onClick={markedHandler}/>
        }
    }
    task();
    
    return <div>
        <li >
            {firstElement}
            <span>
            {nextElement}
            <DeleteIcon onClick={deleteHandler}/>
            </span>
        </li>
    </div>;
}
export default Do
