import React from 'react';

import SearchBar from "./SearchBar";
import ListItems from "./ListItems";
import AddBar from "./AddBar";


export default class ToDoList extends React.Component{
	constructor(props){
		super(props);

		this.addNewItem = this.addNewItem.bind(this);
		this.removeHandler = this.removeHandler.bind(this);

		this.listData = [];
	}


	addNewItem(obj){
		this.listData.push(obj);
	}

	removeHandler(event){
		console.log(event);
	}

	render(){
		return(
			<div>
				<ListItems listData={this.listData} />
				<AddBar addHandel={this.addNewItem} removeHandler={this.removeHandler} listData={this.listData} />
			</div>
		);
	}

}

