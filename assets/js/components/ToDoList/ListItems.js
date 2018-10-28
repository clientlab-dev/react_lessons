import React from 'react';

import ListItem from "./ListItem";

export default class ListItems extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);

		//console.log(this.props);
	}


	tick(i) {
			this.setState({});
		}


	render(){

		var listItems = this.props.listData.map((obj, index) =>{
			return (
				<ListItem key={index} text={obj.itemText} id={obj.id} />
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