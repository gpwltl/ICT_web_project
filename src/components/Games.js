import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import image from '../images/logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const tileData = [
    {
        img: image,
        title: 'gugudan',
        author: 'dd',
    },
    {
        img: image,
        title: 'gugudan',
        author: 'dd',
    },
    {
        img: image,
        title: 'gugudan',
        author: 'dd',
    },
    {
        img: image,
        title: 'gugudan',
        author: 'dd',
    },
    {
        img: image,
        title: 'gugudan',
        author: 'dd',
    },
    {
        img: image,
        title: 'gugudan',
        author: 'dd',
    },
];

const Games = ({ isOpen, close }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            {
                isOpen ?
                    <div align="center">
                        <br /><p>hello, games</p>
                        <div className={classes.root}>
                            <GridList cellHeight={180} className={classes.gridList}>
                                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                    <ListSubheader component="div">Game List</ListSubheader>
                                </GridListTile>
                                {tileData.map((tile) => (
                                    <GridListTile key={tile.img}>
                                        <img src={tile.img} alt={tile.title} />
                                        <GridListTileBar
                                            title={tile.title}
                                            subtitle={<span>by: {tile.author}</span>}
                                            actionIcon={
                                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                                    <InfoIcon />
                                                </IconButton>
                                            }
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                        <button onClick={close}>돌아가기</button> </div>

                    : null
            }
        </React.Fragment>
    )
}
export default Games;