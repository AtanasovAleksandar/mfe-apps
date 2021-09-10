import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import User from './User';
import { getUsers } from '../services/usersApi';
import { Users } from '../models/User';

const useStyles = makeStyles({
	container: {
		margin: '30px',
	},
});

const UserList: React.FC = () => {
	const classes = useStyles();
	const [users, setUsers] = useState<Users[]>([]);
	const [showNoResults, setShowNoResults] = useState<boolean>(false);

	const filterUsers = (value): void => {
		let result = null;
		if (value.length >= 3) {
			result = usersFilter(value)
		}
		if (result) {
			setUsers([result]);
			setShowNoResults(false);
		}

		if (!result && value.length >= 3) {
			setShowNoResults(true);
		}

		if (value.length === 0) {
			setShowNoResults(false);
			getUsersList();
		}
	}

	const usersFilter = (value) => {
		const filterUsers = users.find(user => {
			return user.name.toLowerCase() === value.toLowerCase()
		});
		return filterUsers;
	}

	const sortByAge = () => {
		const sortedArray =	users.sort((a, b) => {
			if ( a.age < b.age ){
				return -1;
			}
			if ( a.age > b.age ){
				return 1;
			}
			return 0;
		});
		setUsers(sortedArray);
	}

	const getUsersList = () => {
		getUsers()
			.then((result) => {
				setUsers(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		getUsersList();
	}, [])

	useEffect(() => {
		console.log(users)
	}, [users])

	return (
		<div className={classes.container}>
			<Header
				valueForFilter={(val) => filterUsers(val)}
				sortUserByAge={() => sortByAge()}
			/>
			<div>
				{showNoResults ? (
					<Typography>
						results are empty
					</Typography>
				) : (
					users.map((user) => {
						return <User
							key={user.id}
							user={user}
						/>
					})
				)}
			</div>
		</div>
	)
}

export default UserList;
