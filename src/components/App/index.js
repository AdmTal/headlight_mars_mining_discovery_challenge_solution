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

  renderLegend() {
    return (
      <div>
         Red : BOT - shown with score <br />
         Gray : Node - shown with score <br />
         Green : Lines connecting a BOT to claimed nodes
      </div>
    );
  }

  renderGrid() {
    return (
      <SVGGrid
        cellSizeInPx={35}
        width={20}
        height={20}
        bots={this.state.bots}
        nodes={this.state.nodes}
      />
    );
  }

  renderLeaderBoard() {
    return (
      <LeaderBoard
        bots={this.state.bots}
        nodes={this.state.nodes}
      />
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
            <Col md={4}>
              {this.renderLeaderBoard()}
            </Col>
            <Col md={8}>
              {this.renderLegend()}
              {this.renderGrid()}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
