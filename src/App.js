import React from 'react';

import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';
import Calendar from './calendar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: JSON.parse(window.sessionStorage.getItem('todos')) || [],
    };

    this.osc = this.osc.bind(this)
  }

  componentWillMount() {
    window.addEventListener('storage', this.osc);
  }

  osc() {
    this.setState({
      items: JSON.parse(window.sessionStorage.getItem('todos')) || [],
    })
  }

  render() {
    return (
      <div className="App">
        <TodoAddForm items={ this.state.items } onAfterAdd={ this.osc } />
        <TodoList items={ this.state.items } onChange={ this.osc } />
        <Calendar/>
      </div>
    );
  }
}

export default App;
