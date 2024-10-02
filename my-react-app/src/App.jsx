import { useState } from 'react'
import './App.css';
import Do from './components/Do';
import Store from './components/Store';

function App() {
  let initialArray=[{value: 'Buy Groceries', completed: false},{value: 'Do Laundry', completed: false}]
  const [array,setArray]=useState(initialArray);
  
  function addToDo(newDo){
    
    setArray([...array,newDo]);
    console.log("added array",array);

  }
  function markedValue(value){
    for(let index in array){
      if(array[index].value===value){
        if(array[index].completed===false){
          array[index].completed=true;
        }
        else{
          array[index].completed=false;
        }
        setArray([...array]);
        break;
        // console.log(array);
        
      }
    }
  }
  function deleteValue(value){
    let newArray=[]
  
    for(let index in array){
      if(array.length == 1 && array[index].value==value){
        setArray([]);
      }
      if(array[index].value!==value){
        newArray.push(array[index]);
        // console.log(newArray)
        setArray([...newArray]);
        // console.log(array);
        
      }
      
    }
  }
  let element;
  if(array.length>0){
     element= array.map((ele,idx)=>{
      return <div>
        <Do key={idx} value={ele.value} completed={ele.completed} deleteValue={deleteValue} markedValue={markedValue}/>
        </div>
    })
  }
  else{
      console.log("array length is 0",array.length);
      element=<div></div>
  }
  
  return( 
  <div>
    <h1>To-do List</h1>
    <Store addToDo={addToDo}/>
    {/* {array.map((ele,idx) => {
      return <div>
        <Do key={idx} value={ele.value} deleteValue={deleteValue}/>
        </div>
    })} */}
    {element}
  </div>)
}

export default App
