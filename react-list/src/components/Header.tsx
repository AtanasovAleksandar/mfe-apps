import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Box, Switch } from '@material-ui/core';

const useStyles = makeStyles({
    headerContainer: {
        marginBottom: '20px',
    },
    title: {
        width: '100%',
        textAlign: 'center',
    },
    input: {
        backgroundColor: 'white',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    filterButton: {
        height: '55px',
        width: '150px',
    },
    desc: {
        marginTop: '10px',
    },
});

interface Header {
    valueForFilter: (value: string) => void;
    sortUserByAge: () => void;
}

const Header: React.FC<Header> = ({ valueForFilter, sortUserByAge }) => {
    const classes = useStyles();
    const [filterValue, setFilterValue] = useState<string>('');

    const handleFilterValueChange = (value) => {
        setFilterValue(value);
        setValueForFilter(value)
    }

    const setValueForFilter = (value) => {
        valueForFilter(value);
    }

    return (
        <div className={classes.headerContainer}>
            <Typography className={classes.title} variant="h5" component="h5">
                React User List
            </Typography>
            <Box className={classes.header}>
                <TextField
                    classes={{root: classes.input}}
                    id="outlined-basic"
                    label="Filter users by name"
                    placeholder="Type a name..."
                    variant="outlined"
                    value={filterValue}
                    onChange={(event) => handleFilterValueChange(event.target.value)}
                />
                <div>
                <Typography className={classes.desc}>
                    Sort users List
                </Typography> 
                <Switch 
                    inputProps={{ 'aria-label': 'primary checkbox' }} 
                    onChange={() => sortUserByAge()}  
                />
                   <span>Sort ASC</span>
                </div>
            </Box>
        </div>
    )
}

export default Header;
