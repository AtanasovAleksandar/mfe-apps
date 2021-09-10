import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Box } from '@material-ui/core';

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
                    className={classes.input}
                    id="outlined-basic"
                    label="Filter Users by Name"
                    placeholder="Type a name..."
                    variant="outlined"
                    value={filterValue}
                    onChange={(event) => handleFilterValueChange(event.target.value)}
                />
                <Typography className={classes.desc}>
                    Тo find a user you need to enter the full name
                </Typography>
                <Button
                    className={classes.filterButton}
                    variant="contained"
                    color="primary"
                    onClick={() => sortUserByAge()}
                >
                    Sort by age
                </Button>
            </Box>
        </div>
    )
}

export default Header;
