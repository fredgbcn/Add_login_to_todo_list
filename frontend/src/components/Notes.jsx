import React, {useEffect, useState} from "react";

    const Notes = () => {
        const[notes, setNotes] = useState([{  //constante notes, fonction setNotes
            title:'',
            content:''
        }]) 

        useEffect(()=>{
 /*            fetch("/notes").then(res=>{
                if(res.ok){
                    return res.json()
                }
            }).then(jsonRes => setNotes(jsonRes)); */
            fetch("/notes").then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json().then(jsonRes => setNotes(jsonRes));
    } else {
      console.log("Oops, nous n'avons pas du JSON!");
    }
  }, []);
        })
        return <div>
            <h1>Notes</h1>
            {notes.map(note =>
            <div key ={note._id}>
                <h1>{note.title}</h1>
                <p>{note.content}</p>
            </div>
            )}
        </div>
        
        }

export default Notes;