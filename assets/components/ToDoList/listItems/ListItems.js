import React from 'react';
import ListItem from '../ListItem/ListItem';


import styles from './ListItem.scss';
export default class ListItems extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount() {
	}

	render(){

		if (this.props.listData.length>0) {

			var listItems = this.props.listData.map((obj, index) =>{
				return (
					<ListItem key={index} text={obj.itemText} id={obj.id} removeHandler= {this.props.removeHandler} />
					);
				}
			);
		}else{
			console.log(this.props);
			return (<li className={styles.bareItem}>{this.props.greating}</li>);
		}


		return(
			<div className={styles[this.constructor.name]}>
				<ul>
					{listItems}
				</ul>
			</div>
		);
	}

}