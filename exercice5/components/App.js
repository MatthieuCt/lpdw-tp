import React from 'react';

// class App extends React.Component {
//     render() {
//         return <input type="text" value=""/> <div> {this.props.value} </div>;
//     }
// }
//
// App.defaultProps = { value: "jjze" };
//
// module.exports = App;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
  }
  change(e) {
    console.log(this.value);
    this.setState({value: e.target.value });
  }
  render() {
    return (
      <div>
        <input onChange={this.change.bind(this)}/>
        {this.state.value}
      </div>
    );
  }
}

module.exports = App;
