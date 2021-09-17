import { Card, CardContent, CardHeader, IconButton, Typography,Avatar, makeStyles } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { blue, blueGrey, orange, red } from '@material-ui/core/colors';
const useStyle=makeStyles({
    bgcolor:{
        backgroundColor:(note)=>{
        if(note.category==='todos'){
            return blue[500];
        }
        if(note.category==='money'){
            return red[500];
        }
        if(note.category==='work'){
            return blueGrey[700]
        }
        return orange[700];
    }
    }
})
export default function Note(props) {
    const classes=useStyle(props.note);
    console.log(props)
    return (
        <div style={{marginTop:'58px'}}>
            <Card elevation={1}>
                <CardHeader avatar={<Avatar className={classes.bgcolor}>{props.note.category[0].toUpperCase() }</Avatar>}
                action={<IconButton><DeleteIcon onClick={()=>props.deleteHandler(props.note.id)}/></IconButton>} title={props.note.title} subheader={props.note.category}/>
                <CardContent>
                    <Typography color="textSecondary" variant="body1">
                        {props.note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
