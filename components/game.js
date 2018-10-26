'use strict'

//https://reactjs.org/docs/handling-events.html

function ListItem(props){
	return (
			<div>
				<h3>
				{props.title}
				</h3>
				<p>
				{props.description}
				</p>
			</div>
		);
}


class Btn extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			isToggleOn: false
		}
		this.handleClick = this.handleClick.bind(this);

	}


	handleClick(e){
		

		this.props.handler(this.state.isToggleOn);
		

		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));

		//this.props.handler(this.props.isToggleOn);
	}

	render(){
		return(
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		);
	}

}

class TodoList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
		this.i = 0;
		this._status = true;
		this.handler = this.handler.bind(this);
	}

		componentDidMount() {
			this.timerID = setInterval(
				() => this.tick(),
				1000
			);
		}

		componentWillUnmount() {
			clearInterval(this.timerID);
			this.setState({status:false});
		}

		tick(i) {
			this.i = this.i+1;
		   this.setState({
		     date: new Date(),
		     i: this.i
		   });
		 }

		handler(_status) {
			if (_status) {
				this.setState({
					i: "start"
				});
				this.componentDidMount();
			}else{
				this.setState({
					i: "stoped"
				});
				clearInterval(this.timerID);
			}
		}

	render(){
		return (
			<div>
				<ListItem title={this.state.i} description={this.state.date.toLocaleTimeString()} />
				<Btn handler = {this.handler} />
			</div>
			);
	};
}




// ========================================




ReactDOM.render(
	<div>
	<TodoList />
	</div>,
	document.getElementById('app')
);
/*ReactDOM.render(
  <Btn />,
  document.getElementById('Controls')
);*/


