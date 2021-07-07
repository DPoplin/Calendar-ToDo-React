import React, {useState, Component} from "react";
import ScheduleItems from "./ScheduleItems.jsx";
import Button from 'react-bootstrap/Button';
import "../Schedule.css";
import ls from 'local-storage';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem : "",
      list: []
    };
    // this.addItem = this.addItem.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
    // add event listener to save state to localStorage
   // when user leaves/refreshes the page
   window.addEventListener(
     "beforeunload",
     this.saveStateToLocalStorage.bind(this)
   );
 }

 componentWillUnmount() {
   window.removeEventListener(
     "beforeunload",
     this.saveStateToLocalStorage.bind(this)
   );

   // saves if component has a chance to unmount
   this.saveStateToLocalStorage();
}

hydrateStateWithLocalStorage() {
// for all items in state
for (let key in this.state) {
  // if the key exists in localStorage
  if (localStorage.hasOwnProperty(key)) {
    // get the key's value from localStorage
    let value = localStorage.getItem(key);

    // parse the localStorage string and setState
    try {
      value = JSON.parse(value);
      this.setState({ [key]: value });
    } catch (e) {
      // handle empty string
      this.setState({ [key]: value });
    }
  }
}
}

saveStateToLocalStorage() {
   // for every item in React state
   for (let key in this.state) {
     // save to localStorage
     localStorage.setItem(key, JSON.stringify(this.state[key]));
   }
 }

  updateInput(key, value) {
      // update react state
      this.setState({ [key]: value });
      // update local LocalStorage
      localStorage.setItem(key, value);
    }

    addItem() {
      // create a new item
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };

      // copy current list of items
      const list = [...this.state.list];

      // add the new item to the list
      list.push(newItem);

      // update state with new list, reset the new item input
      this.setState({
        list,
        newItem: ""
      });

    }

    deleteItem(id) {
      // copy current list of items
      const list = [...this.state.list];
      // filter out the item being deleted
      const updatedList = list.filter(item => item.id !== id);

      this.setState({ list: updatedList });

    }


    render() {
      return (

          <div class="scheduleMain">
          <h3 class="header">Add an item to the list</h3>
            <br />
            <form>
            <input
              type="text"
              placeholder="Type item here"
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}
              className="btn btn-dark"
            >
              Add
            </button>
            </form>
            <br /> <br />
            <ul className="theList">
              {this.state.list.map(item => {
                return (
                  <div className="items">
                  <li key={item.id} onClick={() => this.deleteItem(item.id)}>
                    {item.value}
                  </li>
                  </div>
                );
              })}
            </ul>
          </div>
      );
    }
  }

export default Schedule;
