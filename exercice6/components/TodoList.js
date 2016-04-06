import React    from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 0,
          label: 'Faire la vaisselle',
          done: false
        },
        {
          id: 1,
          label: 'Aller chercher le pain',
          done: false
        },
        {
          id: 2,
          label:'Acheter des fleurs pour sa/son bien aimé(e)',
          done: true
        }
      ]
    };
  }
  update(e) {


   var newList = this.state.list;
   newList[e.target.id].done=  e.target.checked;
   this.setState({ list: newList });


  }
  render() {
    return (
      <table>
      <thead>TODO</thead>
      <tbody onChange={this.update.bind(this)}>
      {this.state.list.map(function(item) {
        return <TodoItem key={item.id} id={item.id} label={item.label} done={item.done} />;
      })}
      </tbody>
      </table>
    );
  }
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.done){
      this.state = { decoration: 'line-through'};
    }else{
      this.state = { decoration: ''};
    }
  }
  change(e) {
    if(e.target.checked)
    {
      this.setState({decoration: 'line-through' });
    } else {
      this.setState({decoration: '' });
    }
  }
  render() {
    return (
      <tr>
      <td style={{ 'textDecoration': this.state.decoration }} id={this.props.label}>
      {this.props.label}
      </td>
      <td>
      <input type="checkbox" id={this.props.id} label={this.props.label} checked={this.props.done} onChange={this.change.bind(this)}/>
      </td>
      </tr>
    );
  }
}

module.exports = TodoList;
