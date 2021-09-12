import { Container, Grid, Paper } from '@material-ui/core';
import React,{useEffect,useState} from 'react'

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
    let data='';
    if(notes.length > 0){
        data=notes.map((note)=>{
            return (
                    <Grid key={note.id} item md={3} sm={6} xs={12}><Paper>{note.title}</Paper></Grid>
            )
           })
    }
    return (
        <Container>
            <Grid container>
            {
               data
            }
            </Grid>

        </Container>
    )
}
