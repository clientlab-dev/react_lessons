import React from 'react';

import SearchBar from "./SearchBar";
import ListItems from "./ListItems";
import AddBar from "./AddBar";


export default class ToDoList extends React.Component{
	constructor(props){
		super(props);

		this.addNewItem = this.addNewItem.bind(this);
		this.removeHandler = this.removeHandler.bind(this);
		this.filterHandler = this.filterHandler.bind(this);

		this.state = {
			ListItems:[],
			ListItemsFront:[],
			isShowSearchBar: false
		};
		
		//this.ListItemsBk = '';
	}

	componentDidMount() {
		this.setState({ListItemsFront:this.state.ListItems})
	}


	addNewItem(obj){
		var newListItems = this.state.ListItems;

		if (obj.itemText.trim()!='') {
			newListItems.push(obj);
			this.setState({ListItems: newListItems});
		}

		if (this.state.ListItems.length>5) {
			this.setState({isShowSearchBar:true})
		}else{
			this.setState({isShowSearchBar:false})
		}
		this.setState({ListItemsFront:this.state.ListItems});
	}

	removeHandler(id){
		var newListItems =this.state.ListItems.filter((v)=>{
								if (v.id != id) {
									return v;
								}
							});

		this.setState({ListItems: newListItems});
		this.setState({ListItemsFront:newListItems})
		
	}

	filterHandler(str){

		if (str.trim()!='') {
			var filteredListItems = this.state.ListItems.filter((v)=>{
									if (v.itemText.toUpperCase().indexOf(str.toUpperCase()) >= 0) {
										return v;
									}
								});
			this.setState({ListItemsFront: filteredListItems});
		}else{
			this.setState({ListItemsFront: this.state.ListItems});
		}
	}

	render(){
		return(
			<div>
				<SearchBar filterHandler={this.filterHandler}/>

				<ListItems 
					listData={this.state.ListItemsFront} 
					removeHandler={this.removeHandler}/>
				<AddBar 
					addHandel={this.addNewItem} 
					listData={ this.state.ListItems}/>
			</div>
		);
	}

}

