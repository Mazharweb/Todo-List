import React,{useState} from 'react'
import './Todo.css'
const Todo1 = () => {

    const[input,setInput]=useState("")
    const[items,setItems]=useState([])

    const addItems = () =>{
        if(!input){

        }else{
          setItems([...items,input]);
          setInput("");
        }
    }


    const enterKey = (e) =>{
        if(e.key==="Enter"){
            setItems([...items,input]);
            setInput("");
        }
    }

    const deleteItems = (id) =>{
        const UpdateData = items.filter((itemVal,ind) =>{
              return ind!==id;
        })
        setItems(UpdateData)
    }

    const remove = () =>{
        setItems([])
    }
    return (
        <>
             <div className="main-div">
                 <div className="child-div">
                     <figure>
                         <img src="Images/Todo2.jpg" alt="my pic"/>
                         <figcaption>Add Your list Here🤞</figcaption>
                     </figure>

                     <div className="addItems">
                         <input type="text"
                         onChange={(e) => setInput(e.target.value)}
                         value={input}
                         onKeyPress={enterKey}
                          placeholder="✍Enter your Intrest" />
                         <i class="fa fa-plus add-btn"
                          title="Add items"
                          onClick={addItems}
                          
                         >
                         </i>
                         

                     </div>

                      <div className="showItems">
                    {
                        items.map((itemVal,ind) =>{
                                 return(
                                    <div className="eachItem" key={ind}>
                            <h3>{itemVal}</h3>
                            <i class="far fa-trash-alt add-btn " title="Delete-item" onClick={() =>deleteItems(ind)}></i>
                        </div>
                                 )
                        })
                    }        
                        
                    </div>
                       
                    <div className="show-Items">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={remove}><span>CHECK LIST</span></button>
                    </div>


                 </div>
             </div>
        </>
    )
}

export default Todo1