import React from 'react';
import styles from './ListItem.scss'

export default class ListItem extends React.Component{
	constructor(props){
		super(props);

		this.removeHandler = this.removeHandler.bind(this);
		this.doneHandler = this.doneHandler.bind(this);
		this.state = {
			isDone:""
		};

	}

	removeHandler(props){
		this.props.removeHandler(this.props.id);
	}

	doneHandler(event){
		if (this.state.isDone=="") {
			this.setState({'isDone': styles.isDone});
		}else{
			this.setState({'isDone':''});
		}
	}

	render(){
		return(
			<li id={"listItem_"+this.props.id} ref={this.myRef} onClick={this.doneHandler} className={styles[this.constructor.name]+" "+ this.state.isDone }>
				{this.props.text}
				<button className={styles['remove-btn']} onClick={this.removeHandler}>Remove</button>
			</li>
		);
	}

}