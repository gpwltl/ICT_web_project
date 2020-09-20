import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LanguageIcon from '@material-ui/icons/Language';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {'Yo_onHJ '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({

    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <footer className={classes.footer}>

                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Contact me <br />
                    <Link color="inherit" href="https://github.com/gpwltl">
                        <GitHubIcon />
                        Github{'   '}
                    </Link>
                    <MailIcon /> abc@gmail.com{'   '}
                    <Link color="inherit" href="https://yoonhj97.tistory.com/">
                        <LanguageIcon />
                    Blog
                    </Link>
                </Typography>

                <Copyright />
            </footer>
        </>
    );
};

export default Footer;