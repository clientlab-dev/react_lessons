import React from 'react';

import ListItem from "./ListItem";

export default class ListItems extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount() {
	}

	render(){
		var listItems = this.props.listData.map((obj, index) =>{
			return (
				<ListItem key={index} text={obj.itemText} id={obj.id} removeHandler= {this.props.removeHandler} />
				);
			}
		);
		return(
			<div>
				<ul>
					{listItems}
				</ul>
			</div>
		);
	}

}