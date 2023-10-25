import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  decrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <p>Counting: {count}</p>
      </div>
    );
  }
}

export default Counter;
