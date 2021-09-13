import { Container, Grid} from '@material-ui/core';
import React,{useEffect,useState} from 'react'
import Note from "./Note";
export default function Mainpage() {
    const [notes,setNotes]=useState('');
    useEffect(() => {
        fetch('http://localhost:9000/notes')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data);
           setNotes(data);
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    const deleteHandler=(id)=>{
        const newdata=notes.filter((note)=>{
            return note.id!==id
        })
        fetch('http://localhost:9000/notes/' + id,{
            method:'DELETE',
        }).then(res=>{
            return res.json();
        }).then(data=>{
            setNotes(newdata)
        }).catch(err=>{
            console.log(err)
        })
    }
    let data='';
    if(notes.length > 0){
        data=notes.map((note)=>{
            return (
                    <Grid key={note.id} item md={3} sm={6} xs={12}><Note note={note} deleteHandler={deleteHandler}/></Grid>
            )
           })
    }
    return (
        <Container >
            <Grid container spacing={3}>
            {
               data
            }
            </Grid>

        </Container>
    )
}
