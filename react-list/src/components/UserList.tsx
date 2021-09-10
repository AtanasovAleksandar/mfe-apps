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
	usersFound: {
		fontWeight: 700,
		fontSize: '18px',
		marginBottom: '20px',
		border: '1px solid',
		padding: '5px',
		width: '200px',
	}
});

const UserList: React.FC = () => {
	const classes = useStyles();
	const [users, setUsers] = useState<Users[]>([]);
	const [showNoResults, setShowNoResults] = useState<boolean>(false);
	const [isSortAsc, setIsSortAsc] = useState<boolean>(true);
	const [isSearched, setIsSearched] = useState<boolean>(false);

	const filterUsers = (value): void => {
		let filtered;
		if (value.length >= 3) {
			setIsSearched(true);
			filtered = users.filter((data: any) => {
				setShowNoResults(false);
				return JSON.stringify(data).toLowerCase().includes(value);
			  });
			  setUsers(filtered);

			  if (filtered.length === 0) {
				  setShowNoResults(true);
				  setIsSearched(false);
			  }
		}
		  if (!filtered && value.length < 3) {
			  getUsersList()
			  setIsSearched(false);
			  setShowNoResults(false);

		  }
	}

	const sortByAge = () => {
		setIsSortAsc(!isSortAsc);
		const updatedUsers = [...users];
		let sortedArray;
		if (isSortAsc) {
			sortedArray = updatedUsers.sort((a, b) => (a.age > b.age) ? 1 : -1)
		} else {
			sortedArray = updatedUsers.sort((a, b) => (a.age < b.age) ? 1 : -1)
		}
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
			{isSearched && (
			<div>
    			<Typography className={classes.usersFound}>Users found: {users.length}</Typography>
			</div>
			)}
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
