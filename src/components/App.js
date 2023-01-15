import React, { useState } from 'react';
import { Note } from './Note';
import { Footer } from './Footer';
import { Header } from './Header';
import { CreateArea } from './CreateArea';

function App() {
  const [notes,setNotes]=useState([])
  function addItem(item){
      setNotes(prevNotes=>{
        return [...prevNotes,item]
      })
  }

  function deleteNote(id){
      setNotes(prevNotes=>{
        return prevNotes.filter((note,index)=>(index!==id))
      })
  }

  return (
    <div >
      <Header />
      <CreateArea addItem={addItem} />
      {notes.map((note,index)=> (<Note key={index} title={note.title} content={note.content} id={index} deleteNote={deleteNote}/>) )}
      
      <Footer />
    </div>
  );
}

export default App;

