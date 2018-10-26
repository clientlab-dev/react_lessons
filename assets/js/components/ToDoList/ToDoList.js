import React from 'react';

import SearchBar from "./SearchBar";
import ListItems from "./ListItems";
import AddBar from "./AddBar";


export default class ToDoList extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<SearchBar />
				<ListItems />
				<AddBar />
			</div>
		);
	}

}

