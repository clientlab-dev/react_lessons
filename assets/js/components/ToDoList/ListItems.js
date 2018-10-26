import React from 'react';

import ListItem from "./ListItem";

export default class ListItems extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<ul>
					<li>
						<ListItem />
					</li>
				</ul>
			</div>
		);
	}

}