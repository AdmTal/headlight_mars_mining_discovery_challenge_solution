import React, { Component } from 'react';

export default class Legend extends Component {
  render() {
    return (
      <svg width="400" height="100">
        <circle
          className="node-circle"
          cx="25"
          cy="25"
          r="18"
        />
        <text
          className="node-circle-text"
          x="25"
          y="25"
          dy=".3em"
          font-size="12px"
        >
          Value
        </text>
        <text
          x="50"
          y="25"
          dy=".3em"
          font-size="12"
        >
          -- Node with current value
        </text>
        <circle
          className="bot-circle"
          cx="225"
          cy="25"
          r="18"
        />
        <text
          className="bot-circle-text"
          x="225"
          y="25"
          dy=".3em"
          font-size="12"
        >
          Score
        </text>
        <text
          x="250"
          y="25"
          dy=".3em"
          font-size="12"
        >
          -- Bot with current Score
        </text>
        <circle
          className="bot-circle"
          cx="25"
          cy="75"
          r="18"
        />
        <circle
          className="node-circle"
          cx="80"
          cy="75"
          r="18"
        />
        <line
          className="bot-claim-line"
          x1="36"
          y1="75"
          x2="69"
          y2="75"
        />
        <text
          x="110"
          y="75"
          dy=".3em"
          font-size="12"
        >
          -- Bot with Claim on Node
        </text>
      </svg>
    );
  }
}
