import React, {Component} from 'react';
/**
 *
 * hello 测试
 * @class Hello
 * @extends {Component}
 */
class Hello extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      clicked: false
    };
  }

  handleClick(e) {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    const text = this.state.clicked
      ? 'clicked'
      : 'haven\'t clicked';
    return (
      <div >
        Hello, World!<br/>
        <button onClick={this
          .handleClick
          .bind(this)}>点击</button><br/>
        You {text}
        this. Click to toggle.
      </div>
    )
  }
}

export default Hello;