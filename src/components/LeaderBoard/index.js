import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import _ from 'lodash';

export default class LeaderBoard extends Component {

  renderRows() {
    const rows = [];
    const sortedBots = _.orderBy(this.props.bots, ['Score'], ['desc']);

    sortedBots.forEach((bot, index) => {
      rows.push(
        <tr>
          <td>{index + 1}</td>
          <td>{bot.Id}</td>
          <td>{bot.Score}</td>
          <td>{bot.Claims.length}</td>
        </tr>
      );
    });

    return rows;
  }

  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Place</th>
            <th>Bot ID</th>
            <th>Score</th>
            <th># of Claims</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </Table>
    );
  }
}
