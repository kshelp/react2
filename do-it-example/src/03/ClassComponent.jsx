import React from "react";

class MyComponent extends React.Component {
  componentDidMount() {
    console.log("MyComponent 새로 고침");
  }
  render() {
    return null;
  }
}

class MyPureComponent extends React.PureComponent {
  componentDidMount() {
    console.log("MyPureComponent 새로 고침");
  }
  render() {
    return null;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.listValue = [{ name: "Park" }, { name: "Lee" }];
    this.state = { version: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    setTimeout(() => {
      this.listValue[0].name = "Justin";
      this.setState({ version: 1 });
    }, 100);
    setTimeout(() => {
      this.listValue = [{ name: "Justin" }, { name: "Lee" }];
      this.setState({ version: 2 });
    }, 200);
  }
  render() {
    return (
      <div>
        <MyComponent value={this.listValue} />
        <MyPureComponent vlaue={this.listValue} />
        <button onClick={this.handleClick}>버튼</button>
      </div>
    );
  }
}

export default App;
