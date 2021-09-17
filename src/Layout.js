import { AppBar, Drawer, makeStyles, Toolbar, Typography,Avatar } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {  AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';
const drawerWidth=240;
const useStyles=makeStyles(
    (theme)=>{
        return    {
            page:{
                width:'100%',
                background:'#f9f9f9',
                padding:theme.spacing(3)
            },
            drawer:{
                width:drawerWidth
            },
            drawerPaper:{
                width:drawerWidth
            },
            root:{
                display:'flex'
            },
            active:{
                background:'#f5f5f5'
            },
            title:{
                padding:theme.spacing(2)
            },
            appbar:{
                width:`calc(100% - ${drawerWidth}px)`
            },
            heading:{
                flexGrow:1
            },
            toolbar:theme.mixins.toolbar
        }
    }
)
export default function Layout(props) {
    const classes=useStyles();
    const history=useHistory();
    const location=useLocation();
    const menuItems=[
        {
            title:'My Notes',
            path:'/',
            icon:<SubjectOutlined color="secondary"/>
        },
        {
            title:'Create Note',
            path:'/create',
            icon:<AddCircleOutlineOutlined color="secondary"/>
        }
    ]
    const redirect=(path)=>{
        history.push(path)
    }
    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appbar} elevation={0}>
                <Toolbar >
                    <Typography className={classes.heading}> Hello Everyone!!</Typography>
                    <Typography> Abdul</Typography>
                    <Avatar alt="Remy Sharp" src="/Mario.png"/>

                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer} variant="permanent" anchor="left" classes={{
            paper: classes.drawerPaper,
                }}>
                <Typography className={classes.title} variant="h5">
                    The Blog Site
                </Typography>
                <List>
                    {
                        menuItems.map(item =>{
                            return (
                                <ListItem key={item.title} button onClick={()=>redirect(item.path)} className={item.path==location.pathname ? classes.active :null}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText>{item.title}</ListItemText>
                                </ListItem>
                            )
                        })

                    }
                
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
