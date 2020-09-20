import React from 'react';
import Games from '../components/Games';
import Footer from '../components/Footer'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
//import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Main() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative" >
                <Toolbar>
                    {/* <CameraIcon className={classes.icon} /> */}
                    <Typography variant="h6" color="inherit" noWrap>
                        <img src={require('../images/logo.png')} />
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <img src={require('../images/logo2.png')} align="center" />

                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            GameCloud에 오신 걸 환영합니다. <br />
                            본 게임은 전연령 게임으로써 모두가 이용할 수 있습니다 :)


                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        ABOUT GameCloud
                  </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Review
                  </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Games></Games>
            </main>
            <Footer />
        </React.Fragment>
    );
}