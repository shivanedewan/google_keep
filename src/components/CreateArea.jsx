import React, { useState } from 'react'

export const CreateArea = ({addItem}) => {
    const [note,setNote]=useState({title:"", content:""})
    
    function update(e){
    const {name,value}=e.target
    setNote(prevNote=>{
            return {
                ...prevNote,
                [name]:value
            }
        })
        
        }

    function submit(e){
        addItem(note)
        setNote({title:"",content:""})
        e.preventDefault();
        
    }

  return (
    <div>
        <form onSubmit={submit} className="create-note" >
        <input name="title" placeholder="Title" onChange={update} value={note.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={update} value={note.content} />
        <button>Add</button>
      </form>
    </div>
  )
}
