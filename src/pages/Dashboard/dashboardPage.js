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

let numberOfLikes = 0;
let numberOfDislikes = 30;

function DashboardPage() {
	const [name, setName] = useState('');
	// const [like, setLike] = useState(0);
	// const [dislike, setDislike] = useState(0);
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
					return { ...item, title: name, like: numberOfLikes, dislike: numberOfDislikes }
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
			const newItem = { id: new Date().getTime().toString(), title: name, like: numberOfLikes, dislike: numberOfDislikes };
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
		console.log("clicked: " + liked);
		setIsLiked(true);
		setIsDisliked(false);
		console.log("clicked: " + liked);
		if (disliked === true) {
			setIsDisliked(false);
		}
		console.log("clicked: " + liked);

		liked ? console.log("it is liked") : console.log("it is not liked");
		disliked ? console.log("it is disliked") : console.log("it is not disliked");
		console.log("write this down" + id);
	}

	const dislikeCount = (id) => {
		setIsDisliked(true);
		setIsLiked(false);
		if (liked === true) {
			setIsDisliked(false);
		}

		liked ? console.log("it is liked") : console.log("it is not liked");
		disliked ? console.log("it is disliked") : console.log("it is not disliked");
		console.log("write this down" + id);
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
