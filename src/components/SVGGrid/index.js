import React, { Component } from 'react';
import _ from 'lodash';
import './style.scss';
import Legend from './legend';

const padding_in_cell = 2;

export default class SVGGrid extends Component {

  /**
   * Helper function to scale font size for given cellSizeInPx
   */
  getFontSize() {
    return (this.props.cellSizeInPx / 2.77) + 'px';
  }

  /**
   * Renders the BORDER around the GRID
   */
  renderBorder() {
    const {cellSizeInPx, width, height} = this.props;
    const maxX = cellSizeInPx * width;
    const maxY = cellSizeInPx * height;

    return [
        <line x1="0" y1="0" x2={maxX} y2="0" />,
        <line x1="0" y1="0" x2="0" y2={maxY} />,
        <line x1="0" y1="0" x2="0" y2={maxY} />,
        <line x1={maxX} y1={maxY} x2={maxX} y2="0" />,
        <line x1={maxX} y1={maxY} x2="0" y2={maxY} />,
    ];
  }

  /**
   * Renders the LINEs of the GRID
   */
  renderGridLines() {
    const {cellSizeInPx, width, height} = this.props;
    const maxX = cellSizeInPx * width;
    const maxY = cellSizeInPx * height;

    const gridLines = [];

    for(let i = 0; i < width; i++) {
      gridLines.push(
        <line x1="0" y1={i * cellSizeInPx} x2={maxX} y2={i * cellSizeInPx} />
      )
    }

    for(let i = 0; i < height; i++) {
      gridLines.push(
        <line y1="0" x1={i * cellSizeInPx} y2={maxY} x2={i * cellSizeInPx} />
      )
    }

    return gridLines;
  }

  /**
   * Renders the NODEs on the GRID
   */
  renderNodes() {
    const {cellSizeInPx, nodes} = this.props;

    if (nodes.length === 0) {
      return;
    }

    const nodeCells = [];

    nodes.forEach((node) => {
      const {X, Y} = node.Location;

      // Calculate grid position in pixels
      const radius = (cellSizeInPx / 2) - padding_in_cell;
      const cx = ((X+1) * cellSizeInPx - radius) - padding_in_cell;
      const cy = ((Y+1) * cellSizeInPx - radius) - padding_in_cell;

      nodeCells.push(
        <circle
          className="node-circle"
          cx={cx}
          cy={cy}
          r={radius}
        />
      );

      nodeCells.push(
        <text
          className="node-circle-text"
          x={cx}
          y={cy}
          font-size={this.getFontSize()}
          dy=".3em"
        >
          {node.Value}
        </text>
      );
    });

    return nodeCells;
  }

  /**
   * Renders the BOTs on the GRID
   */
  renderBots() {
    const {cellSizeInPx, bots} = this.props;

    if (bots.length === 0) {
      return;
    }

    const botCells = [];

    bots.forEach((bot) => {
      const {X, Y} = bot.Location;

      // Calculate grid position in pixels
      const radius = (cellSizeInPx / 2) - padding_in_cell;
      const cx = ((X+1) * cellSizeInPx - radius) - padding_in_cell;
      const cy = ((Y+1) * cellSizeInPx - radius) - padding_in_cell;

      botCells.push(
        <circle
          className="bot-circle"
          cx={cx}
          cy={cy}
          r={radius}
        />
      );

      botCells.push(
        <text
          className="bot-circle-text"
          x={cx}
          y={cy}
          font-size={this.getFontSize()}
          dy=".3em"
        >
          {bot.Score}
        </text>
      );
    });

    return botCells;
  }

  /**
   * A helper function to find a given NODE by it's ID
   */
  findNodeById(id) {
    return _.find(this.props.nodes, (node) => node.Id === id);
  }

  /**
   * Draws lines beteen BOTs and any NODEs that they have a claim on
   */
  renderBotClaims() {
    const {cellSizeInPx, bots} = this.props;

    const botClaimLines = [];

    bots.forEach((bot) => {
      if (bot.Claims.length === 0) {
        return;
      }

      const {X, Y} = bot.Location;
      const radius = (cellSizeInPx / 2);
      const nodeX = (X+1) * cellSizeInPx - radius;
      const nodeY = (Y+1) * cellSizeInPx - radius;

      bot.Claims.forEach((claim) => {
        const node = this.findNodeById(claim);
        const botX = (node.Location.X+1) * cellSizeInPx - radius;
        const botY = (node.Location.Y+1) * cellSizeInPx - radius;

        // Shorten + Center the line between the circles a little bit
        const xSlope = nodeX - botX;
        const ySlope = nodeY - botY;
        const lineOffset = .85;

        botClaimLines.push(
          <line
            className="bot-claim-line"
            x1={botX + (lineOffset * xSlope)}
            y1={botY + (lineOffset * ySlope)}
            x2={nodeX - (lineOffset * xSlope)}
            y2={nodeY - (lineOffset * ySlope)}
          />
        );
      });
    });

    return botClaimLines;
  }

  render() {
    const {cellSizeInPx, width, height} = this.props;

    return (
      <div>
        <Legend />
        <svg
          width={width * cellSizeInPx}
          height={height * cellSizeInPx}
        >
          {this.renderBorder()}
          {this.renderGridLines()}
          {this.renderNodes()}
          {this.renderBots()}
          {this.renderBotClaims()}
        </svg>
      </div>
    );
  }

}
