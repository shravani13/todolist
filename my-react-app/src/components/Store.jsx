import React,{useRef,useState} from 'react';
import './Store.css';

const Store=(props)=>{
    const storeInpRef=useRef();
    const inputSaveHandler=(event)=>{
        if(event.key==='Enter'){
            let line=storeInpRef.current.value;
            storeInpRef.current.value='';
        // console.log(storeInpRef.current.value);
        // console.log(line)
            let newDo={
                value: line,
                completed: false
            
            }
            props.addToDo(newDo)
        }
        
        
    }


    return (<div>
            <input type="text" placeholder='Write a ToDo and Press Enter to Save' ref={storeInpRef} onKeyDown={inputSaveHandler}/>
    </div>);
}


export default Store