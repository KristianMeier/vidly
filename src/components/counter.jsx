import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tags1", "tags2", "tags3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // Dette er et workaround til at man kan bruge "this" som et enkeltstående objekt. Uuden dette får man undefined.
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    console.group("Increment Clicked", this);
  };

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "New tag"}
        {this.renderTags()}
        <span className={this.getBudgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement} //Denne method kaldes ikke. Det er blot en reference. Modsat Vanilla Javascript.
          className="btn bton-secondary btn-sm"
        >
          {"Icrement"}
        </button>
      </div>
    );
  }

  getBudgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; // Dette er objek dekonstruering. Man napper count ud af objektet. SUper elegenat.
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
