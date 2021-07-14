import './App.css';
import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import List from './List';
import Alert from './Alert';



const getLocalStorage = () => {
	let myList = localStorage.getItem('list');
	if (myList) {
		return JSON.parse(myList);
	}
	else {
		return [];
	}
}



function DashboardPage() {


	const [name, setName] = useState('');
	const [isEditing, SetIsEditing] = useState(false);
	const [list, setList] = useState(getLocalStorage());
	const [editId, setEditId] = useState(null);
	const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
	// console.log(alert.show)
	const onSubmitForm = (e) => {
		e.preventDefault();
		if (!name) {
			showAlert(true, 'danger', 'please enter text')
		}
		else if (name && isEditing) {
			setList(list.map((item) => {
				if (item.id === editId) {
					return { ...item, title: name }
				}
				return item;
			}))
			showAlert(true, 'success', 'edit successfully')
			setName('');
			SetIsEditing(false);
			setEditId(null);
		}
		else {
			showAlert(true, 'success', 'list added successfully')
			const newItem = { id: new Date().getTime().toString(), title: name };
			setList([...list, newItem]);
			setName('');
		}
	}

	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	}

	const deleteItem = (id) => {
		showAlert(true, 'danger', 'item deleted');
		setList(list.filter((item) => item.id !== id));

	}

	const editItem = (id) => {
		let itemEdit = list.find((item) => item.id === id);
		SetIsEditing(true);
		setEditId(itemEdit.id);
		setName(itemEdit.title);
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
					{
						alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />
					}
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
						<List items={list} deleteItem={deleteItem} editItem={editItem} />
					</div>
				}

			</section>
		</div>
	);
}
export default DashboardPage;
