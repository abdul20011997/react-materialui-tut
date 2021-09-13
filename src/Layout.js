import { Drawer, makeStyles } from '@material-ui/core'

const drawerWidth=240;
const useStyles=makeStyles({
    page:{
        width:'100%',
        background:'#f9f9f9'
    },
    drawer:{
        width:drawerWidth
    },
    drawerPaper:{
        width:drawerWidth
    },
    root:{
        display:'flex'
    }
})
export default function Layout(props) {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <Drawer className={classes.drawer} variant="permanent" anchor="left" classes={{
            paper: classes.drawerPaper,
                }}>
                <div>
                    The Drawer
                </div>
            </Drawer>
            <div className={classes.page}>
            {props.children}
            </div>
        </div>
    )
}
