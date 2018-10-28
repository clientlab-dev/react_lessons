import React from 'react';
export default class AddBar extends React.Component{
	constructor(props){
		super(props);

		this.addClickHandle = this.addClickHandle.bind(this);
		this.addNewItem = this.addNewItem.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);

		this.state = {value: ''};
	}


	addNewItem(props){

		if (this.state.value!='') {
			var id = this.props.listData.length+1;
			this.props.addHandel({
				itemText: this.state.value,
				id: id
			});
			this.setState({value: ''});
		}

	}

	addClickHandle(props){
		this.addNewItem(props);
	}

	handleChange (event){
		 this.setState({value: event.target.value});
	}

	handleKeyUp (event){

		if (event.keyCode===13 &&  event.shiftKey === true) {
			this.addNewItem(this.props);
		}
	}

	render(){
		var addBtn = "";
		if(this.state.value!=''){
			addBtn = <button onClick={this.addClickHandle} >Add</button>;
		}

		return(
			<div>
				<textarea onKeyUp={this.handleKeyUp} onChange={this.handleChange} value={this.state.value} />
				{addBtn}
			</div>
		);
	}

}