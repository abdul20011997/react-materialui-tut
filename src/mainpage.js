import { Container} from '@material-ui/core';
import React,{useEffect,useState} from 'react'
import Note from "./Note";
import Masonry from 'react-masonry-css'
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
                    <div key={note.id}><Note note={note} deleteHandler={deleteHandler}/></div>
            )
           })
    }
    const breakpoints={
        default:3,
        1100:2,
        700:1
    }
    return (
        <Container >
            <Masonry breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {
               data
            }
            </Masonry>

        </Container>
    )
}
