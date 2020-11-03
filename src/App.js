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

  componentDidMount() {
    const storeItems = localStorage.getItem('toDoItem');
    if (storeItems) {
      this.setState({
        itemToDo: JSON.parse(storeItems)
      });
    }
  }

  updateLocalStorage() {
    localStorage.setItem('toDoItem', JSON.stringify(this.state.itemToDo));
  }

  deleteItem(index) {
    this.state.itemToDo.splice(index, 1);
    this.setState({
      itemToDo: this.state.itemToDo
    });
    this.updateLocalStorage();
  };

  addItem() {
    const itemState = this.state.itemToDo;
    if(this.state.newItem) {
      itemState.push({
        description: this.state.newItem,
        checked: false
      });
  
      this.setState({
        newItem: "",
        itemToDo: itemState
      });
      this.updateLocalStorage();
    }
  };

  toggleCheckbox(index) {
    const itemArray = this.state.itemToDo;
    itemArray[index].checked = !itemArray[index].checked; 

    this.setState({itemToDo: itemArray});
    this.updateLocalStorage();
  }


  render() {
    return (
      <div id="todo-app-container">
        <header>
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
        </header>
        
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
