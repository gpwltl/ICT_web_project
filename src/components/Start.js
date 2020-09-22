import React, { useState } from 'react';
import About from './About'
import Review from './Review'
import Games from './Games'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Start = () => {
    const classes = useStyles();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReview, setIsReview] = useState(false);
    const [isGame, setIsGame] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const clickReview = () => {
        setIsReview(!isReview);
    }

    const closeReview = () => {
        setIsReview(false);
    }

    const clickGame = () => {
        setIsGame(!isGame);
    }

    const closeGame = () => {
        setIsGame(false);
    }


    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <img src={require('../images/logo2.png')} align="center" />

                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        GameCloud에 오신 걸 환영합니다. <br />
                            본 게임은 전연령 게임으로써 모두가 이용할 수 있습니다 :)


                        </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={3} justify="center">
                            <Grid item>
                                <Button variant="outlined" color="primary" onClick={clickReview}>
                                    Review
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button variant="contained" color="primary" onClick={clickGame}>
                                    Start Game=3
                                </Button>

                            </Grid>

                            <Grid item>
                                <Button variant="outlined" color="primary" onClick={openModal}>
                                    ABOUT
                                </Button>
                                <About isOpen={isModalOpen} close={closeModal} />
                            </Grid>
                        </Grid>
                        <Review isOpen={isReview} close={closeReview} />
                        <Games isOpen={isGame} close={closeGame} />
                    </div>
                </Container>
            </div>
        </main>
    );
};

export default Start;
