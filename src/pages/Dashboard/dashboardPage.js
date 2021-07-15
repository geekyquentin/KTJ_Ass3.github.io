import './App.css';
import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import List from './List';
import Alert from '../../Alert';

const getLocalStorage = () => {
	let myList = localStorage.getItem('list');
	if (myList) {
		console.log(myList);
		return JSON.parse(myList);
	}
	else {
		return [];
	}
}

function DashboardPage() {
	const [name, setName] = useState('');
	let [likeNumber, setLikeNumber] = useState(0);
	let [dislikeNumber, setDislikeNumber] = useState(0);
	let [liked, setIsLiked] = useState(false);
	let [disliked, setIsDisliked] = useState(false);
	const [isEditing, SetIsEditing] = useState(false);
	const [list, setList] = useState(getLocalStorage());
	const [editId, setEditId] = useState(null);
	const [alert, setAlert] = useState({ show: false, msg: '' });
	// console.log(alert.show)
	const onSubmitForm = (e) => {
		e.preventDefault();
		if (!name) {
			showAlert(true, 'Please enter text')
		}
		else if (name && isEditing) {
			setList(list.map((item) => {
				if (item.id === editId) {
					return { ...item, title: name, like: likeNumber, dislike: dislikeNumber }
				}
				return item;
			}))
			showAlert(true, 'Edited successfully')
			setName('');
			SetIsEditing(false);
			setEditId(null);
		}
		else {
			showAlert(true, 'List added successfully')
			const newItem = { id: new Date().getTime().toString(), title: name, like: likeNumber, dislike: dislikeNumber };
			setList([...list, newItem]);
			setName('');
		}
	}

	const showAlert = (show = false, msg = "") => {
		setAlert({ show, msg });
	}

	const deleteItem = (id) => {
		showAlert(true, 'Item deleted');
		setList(list.filter((item) => item.id !== id));

	}

	const editItem = (id) => {
		let itemEdit = list.find((item) => item.id === id);
		SetIsEditing(true);
		setEditId(itemEdit.id);
		setName(itemEdit.title);
	}

	const likeCount = (id) => {
		let likeCount = list.find((item) => item.id === id);
		if (liked === true) {
			likeNumber -= 1;
			setIsLiked(false);
		}
		else {
			setIsLiked(true);
			likeNumber += 1;
		}
		console.log("Like count: " + likeNumber);
		setLikeNumber(likeCount.likeNumber);
		setIsDisliked(false);
	}

	const dislikeCount = (id) => {
		let dislikeCount = list.find((item) => item.id === id);
		if (disliked === true) {
			dislikeNumber -= 1;
			console.log("Dislike number: " + dislikeNumber);
			setIsDisliked(false);
		}
		else {
			dislikeNumber += 1;
			console.log("Dislike number: " + dislikeNumber);
			setIsDisliked(true);
		}
		setDislikeNumber(dislikeCount.dislikeNumber);
		setIsLiked(false);
	}

	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list])
	return (
		<div>
			<Helmet>
				<title>Messaging Mafia | Dashboard</title>
			</Helmet>
			<div className="dashboardTitleText">Dashboard</div>
			<section className='section-center'>

				<form className='form' onSubmit={onSubmitForm}>
					<div className="postHeadingAndSubmitBtn">
						<div className="postHeading">
							What's on your mind?
						</div>
						<button className='btn'>
							{isEditing ? 'Edit' : 'Share'}
						</button>
					</div>

					<div className="grow-wrap">
						<textarea type='text' className="userPost" value={name}
							placeholder="Write your post here..."
							onChange={(e) => setName(e.target.value)}>
						</textarea>
					</div>
				</form>
				{
					list.length > 0 && <div className='grocery-container'>
						<List items={list} deleteItem={deleteItem} editItem={editItem} likeCount={likeCount} dislikeCount={dislikeCount} />
					</div>
				}
				<div className="postAlert">
					{
						alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />
					}
				</div>
			</section>
		</div>
	);
}
export default DashboardPage;
