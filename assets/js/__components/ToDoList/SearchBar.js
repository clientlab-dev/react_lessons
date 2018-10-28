import React from 'react';

export default class SearchBar extends React.Component{
	constructor(props){
		super(props);

		this.onChangehandler = this.onChangehandler.bind(this);

		this.state = {
			value:''
		}
	}


	onChangehandler(event){
		this.props.filterHandler(event.target.value);
		this.setState({
			value:event.target.value
		});
	}


	render(){
		 
			return(
				<div>
					<input value={this.state.value} onChange={this.onChangehandler}/>
				</div>
			);
		 
	}

}

