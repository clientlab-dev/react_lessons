import React from 'react';
export default class ListItems extends React.Component{
	constructor(props){
		super(props);

		this.removeHandler = this.removeHandler.bind(this);
	}


	removeHandler(props){
		this.props.removeHandler(this.props.id);
	}

	render(){
		return(
			<li>
				{this.props.text}
				<button onClick={this.removeHandler}>Remove</button>
			</li>
		);
	}

}