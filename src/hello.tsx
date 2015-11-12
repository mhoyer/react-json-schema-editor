/// <reference path="../typings/tsd.d.ts" />
import * as React from 'react'

export default class Hello extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  changed(ev) {
      this.setState({ name: ev.target.value });
  }

  render() {
      return <div>
        Hello {this.state.name}!<br />
        <input placeholder="Enter your name" 
               value={this.state.name}
               onChange={this.changed.bind(this)} />
      </div>;
	}
}
