'use strict';

function ListItem(props) {
  return React.createElement("div", null, React.createElement("h3", null, props.title), React.createElement("p", null, props.description));
}

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('this', this);
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    })); //this.handler;
  }

  render() {
    return React.createElement("button", {
      onClick: this.props.handler
    }, this.state.isToggleOn ? 'ON' : 'OFF');
  }

}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.i = 0;
    this.handler = this.handler.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    /*var that = this;
    this.timerID = setInterval(function(){
    	that.tick()
    },1000);*/
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick(i) {
    this.i = this.i + 1;
    this.setState({
      date: new Date(),
      i: this.i
    });
  }

  handler(e) {
    //e.preventDefault();
    console.log('handler');
    this.setState({
      i: "Has stoped"
    });
    clearInterval(this.timerID);
  }

  render() {
    return React.createElement("div", null, React.createElement(ListItem, {
      title: this.state.i,
      description: this.state.date.toLocaleTimeString()
    }), React.createElement(Btn, {
      handler: this.handler
    }));
  }

} // ========================================


ReactDOM.render(React.createElement(TodoList, null), document.getElementById('app'));
/*ReactDOM.render(
  <Btn />,
  document.getElementById('Controls')
);*/