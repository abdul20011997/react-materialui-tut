import React ,{useState} from 'react'
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Container, RadioGroup,Radio, FormControl,FormLabel} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';

const useStyle=makeStyles({
 field:{
     marginTop:20,
     marginBottom:20,
     display:'block',

 }
})
export default function CreatePage() {
    const classes=useStyle();
    const [title,setTitle]=useState('');
    const [detail,setDetail]=useState('');
    const [category,setCategory]=useState('');
    const [titleerror,setTitleerror]=useState(false);
    const [detailerror,setDetailerror]=useState(false);
    const history=useHistory();
    const addNotes=(e)=>{
        e.preventDefault();
        setTitleerror(false)
        setDetailerror(false)

        if(title===''){
            setTitleerror(true)
        }
        if(detail===''){
            setDetailerror(true)
        }
        if(title && detail && category){
            fetch('http://localhost:9000/notes',{
                method:'POST',
                body:JSON.stringify({
                    title:title,
                    details:detail,
                    category:category
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(res=>{
                return res.json();
            }).then(data=>{
                history.push('/')
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
    const getTitle=(e)=>{
        setTitle(e.target.value)
    }
    const getDetail=(e)=>{
        setDetail(e.target.value)
    }
    const getCategory=(e)=>{
        setCategory(e.target.value)
    }

    return (
        <Container>
            <Typography className={classes.text} variant="h6" component="h2" color="secondary" gutterBottom>
                Create a New Note
            </Typography>
            <form autoComplete="off" noValidate>
            <TextField className={classes.field} id="outlined-basic" label="Note Title" color="parimary" variant="outlined" required fullWidth error={titleerror} value={title} onChange={getTitle}/>
            <TextField className={classes.field} id="outlined-basic1" label="Details" color="parimary" variant="outlined" required fullWidth multiline rows={5} error={detailerror} value={detail} onChange={getDetail}/>
            <FormControl className={classes.field}>
                <FormLabel>Note Category</FormLabel>
                <RadioGroup value={category} onChange={getCategory}>
                <FormControlLabel control={<Radio />}  value="money" label="Money"/>
                <FormControlLabel control={<Radio />}  value="todos" label="Todos"/>
                <FormControlLabel control={<Radio />}  value="reminders" label="Reminders"/>
                <FormControlLabel control={<Radio />}  value="work" label="Work"/>
                </RadioGroup>
            </FormControl>
            <Button className={classes.btn} color="secondary" variant="contained" endIcon={<ArrowForwardIosIcon/>} onClick={addNotes}>Submit</Button>
            </form>

            
        </Container>
    )
}
