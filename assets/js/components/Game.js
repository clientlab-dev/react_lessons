'use strict'

//https://reactjs.org/docs/handling-events.html

var data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];


function ListItem(props){
	return (
			<div>
				<h3>
				{props.title}
				</h3>
				<p>
				{props.description}
				</p>
				<table>
					<tbody>
					<tr>
						<td>
							{props.age}
						</td>
						<td>
							{props.tel}
						</td>
					</tr>
					</tbody>
				</table>
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

		var listItemsNumbers = [1,2,3,4,5];

		var listItems = data.map((obj, index) =>{
			return <ListItem key={index} title={obj.name } age={obj.age} tel={obj.tel} description={this.state.date.toLocaleTimeString()} />
			}
		);
		return (
			<div>
				{listItems}
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


