import React, { Component, useState } from "react";
import FlipMove from "react-flip-move";
import "../Schedule.css";


class ScheduleItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }
  createTasks(item) {
  return <li onClick={() => this.delete(item.id)}
              key={item.id}>{item.value}</li>
}

  render() {
    var scheduleEntries = this.props.entries;
    console.log(scheduleEntries);
    var listItems;
    // var listItems = scheduleEntries.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};

export default ScheduleItems;
