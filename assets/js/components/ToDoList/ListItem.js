import React from 'react';
export default class ListItems extends React.Component{
	constructor(props){
		super(props);

		this.removeHandler = this.removeHandler.bind(this);
	}


	removeHandler(event){
		console.log(event);
		console.log(this.props);
	}

	render(){

//		console.log(this.props.removeHandler);
		return(
			<li>
				{this.props.text}

				<button onClick={this.removeHandler}>Remove</button>
			</li>
		);
	}

}