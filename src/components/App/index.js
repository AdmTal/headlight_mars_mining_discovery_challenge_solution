import React, { Component } from 'react';
import SVGGrid from '../SVGGrid'
import LeaderBoard from '../LeaderBoard'
import Store from '../../data/Store';
import {getData} from '../../data/Actions';

import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

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
    setInterval(getData, 1000);
  }

  componentWillUnmount() {
    Store.removeListener("storeUpdated", this.setStateFromStore);
  }

  renderHeader() {
    return (
      <PageHeader>
        <center>
          Real Time Bot Locations
        </center>
      </PageHeader>
    );
  }

  renderGrid() {
    return (
      <div>
        <h2>Visualized Minefield</h2>
        <SVGGrid
          cellSizeInPx={30}
          width={20}
          height={20}
          bots={this.state.bots}
          nodes={this.state.nodes}
        />
      </div>
    );
  }

  renderLeaderBoard() {
    return (
      <div>
        <h2>Bot LeaderBoard</h2>
        <LeaderBoard
          bots={this.state.bots}
          nodes={this.state.nodes}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              {this.renderHeader()}
            </Col>
          </Row>
          <Row>
            <Col md={8} lg={7}>
              {this.renderGrid()}
            </Col>
            <Col md={4} lg={5}>
              {this.renderLeaderBoard()}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
