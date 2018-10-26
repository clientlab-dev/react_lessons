import React from 'react';
export default class AddBar extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<textarea value="test" />
				<button>Add</button>

			</div>
		);
	}

}