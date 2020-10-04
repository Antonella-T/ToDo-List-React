import React from "react";
import './App.css';

class App extends React.Component {  
  constructor() {
    super();
    this.state = {
      newItem: "",
      itemToDo: []
    };
  }


  deleteItem(index) {
    this.state.itemToDo.splice(index, 1);
    this.setState({
      itemToDo: this.state.itemToDo
    });
  };

  addItem() {
    const itemState = this.state.itemToDo;
    itemState.push({
      description: this.state.newItem,
      checked: false
    });

    this.setState({
      newItem: "",
      itemToDo: itemState
    })
  };

  toggleCheckbox(index) {
    const itemArray = this.state.itemToDo;
    itemArray[index].checked = !itemArray[index].checked; 

    this.setState({itemToDo: itemArray})
  }


  render() {
    return (
      <div id="todo-app-container">
        <h1>To Do App</h1>
        <div className="add-item">
          <input type="text" 
                 placeholder="Type something..."
                 value={this.state.newItem} 
                 onChange={(e) => {
                   this.setState({newItem:e.target.value});
                 }}>
          </input>
          <button onClick={() => this.addItem()}>ADD</button>
        </div>
        
        {this.state.itemToDo.map((item, index) => {
          return <div key={index} className="item">
          <div className="item-list">
            <input checked={item.checked} 
                   type="checkbox" 
                   onChange={() => this.toggleCheckbox(index)}>
            </input>
            <span>{item.description}</span>
          </div>
          <button onClick={() => this.deleteItem(index)}>x</button>
        </div>
        })}
      </div>
    );
  }
}

export default App;
