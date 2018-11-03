import React, { Component } from 'react';
import TestComponent from '../TestComponent'
import Store from '../../data/Store';
import {testAction} from '../../data/Actions';

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = Store.getValuesFromStore();
  }
  
  setStateFromStore = () => {
    this.setState(Store.getValuesFromStore());
  }
  
  componentDidMount() {
    Store.on("storeUpdated", this.setStateFromStore);
  }

  componentWillUnmount() {
    Store.removeListener("storeUpdated", this.setStateFromStore);
  }

  render() {
    return (
      <div>
        <TestComponent onClick={testAction}/>
      </div>
    );
  }
}
