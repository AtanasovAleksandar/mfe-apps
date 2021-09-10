import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Users } from '../models/User';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '15px 0px'
    },
    heading: {
        flexBasis: '33.33%',
        flexShrink: 0,
    },
}));

interface User {
    user: Users;
}

const User: React.FC<User> = ({ user }) => {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState<boolean | string>(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    
    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography
                        className={classes.heading}>
                            <strong>Name: </strong>
                            {user.name}
                    </Typography>
                    <Typography className={classes.heading}><strong>Age:</strong>{user.age}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <strong>Details:</strong>  {user.details}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default User;