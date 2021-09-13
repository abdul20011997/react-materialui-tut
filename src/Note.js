import { Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
export default function Note(props) {
    console.log(props)
    return (
        <div>
            <Card elevation={1}>
                <CardHeader action={<IconButton><DeleteIcon onClick={()=>props.deleteHandler(props.note.id)}/></IconButton>} title={props.note.title} subheader={props.note.category}/>
                <CardContent>
                    <Typography color="textSecondary" variant="body1">
                        {props.note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
