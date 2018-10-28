import React from 'react';

import styles from './SearchBar.scss'
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
				<div className={styles[this.constructor.name]}>
					<input placeholder="Search" value={this.state.value} onChange={this.onChangehandler}/>
				</div>
			);
		 
	}

}

