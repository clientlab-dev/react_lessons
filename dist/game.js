'use strict'; //https://reactjs.org/docs/handling-events.html

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var data = [{
  name: "Laex",
  age: 18,
  tel: '12121223233'
}, {
  name: "Fill",
  age: 20,
  tel: '12121223233'
}, {
  name: "Mask",
  age: 52,
  tel: '12121223233'
}, {
  name: "Luna",
  age: 33,
  tel: '12121223233'
}, {
  name: "Kate",
  age: 34,
  tel: '12121223233'
}];

function ListItem(props) {
  return React.createElement("div", null, React.createElement("h3", null, props.title), React.createElement("p", null, props.description), React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, props.age), React.createElement("td", null, props.tel)))));
}

var Btn =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Btn, _React$Component);

  function Btn(props) {
    var _this;

    _classCallCheck(this, Btn);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Btn).call(this, props));
    _this.state = {
      isToggleOn: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Btn, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.props.handler(this.state.isToggleOn);
      this.setState(function (state) {
        return {
          isToggleOn: !state.isToggleOn
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("button", {
        onClick: this.handleClick
      }, this.state.isToggleOn ? 'ON' : 'OFF');
    }
  }]);

  return Btn;
}(React.Component);

var TodoList =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(TodoList, _React$Component2);

  function TodoList(props) {
    var _this2;

    _classCallCheck(this, TodoList);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this, props));
    _this2.state = {
      date: new Date()
    };
    _this2.i = 0;
    _this2._status = true;
    _this2.handler = _this2.handler.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }

  _createClass(TodoList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.timerID = setInterval(function () {
        return _this3.tick();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
      this.setState({
        status: false
      });
    }
  }, {
    key: "tick",
    value: function tick(i) {
      this.i = this.i + 1;
      this.setState({
        date: new Date(),
        i: this.i
      });
    }
  }, {
    key: "handler",
    value: function handler(_status) {
      if (_status) {
        this.setState({
          i: "start"
        });
        this.componentDidMount();
      } else {
        this.setState({
          i: "stoped"
        });
        clearInterval(this.timerID);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var listItemsNumbers = [1, 2, 3, 4, 5];
      var listItems = data.map(function (obj, index) {
        return React.createElement(ListItem, {
          key: index,
          title: obj.name,
          age: obj.age,
          tel: obj.tel,
          description: _this4.state.date.toLocaleTimeString()
        });
      });
      return React.createElement("div", null, listItems, React.createElement(Btn, {
        handler: this.handler
      }));
    }
  }]);

  return TodoList;
}(React.Component); // ========================================


ReactDOM.render(React.createElement("div", null, React.createElement(TodoList, null)), document.getElementById('app'));
/*ReactDOM.render(
  <Btn />,
  document.getElementById('Controls')
);*/