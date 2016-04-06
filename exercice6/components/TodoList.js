import React    from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'yolo'};
  }
  change() {
    this.setState({value: 'test' });
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

module.exports = TodoList;
