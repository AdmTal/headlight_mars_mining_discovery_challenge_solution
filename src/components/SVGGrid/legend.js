import React, { Component } from 'react';

export default class Legend extends Component {
  render() {
    return (
      <svg width="400" height="110">
        <circle cx="25" cy="25" r="18" fill="#aeaeae" />
        <text x="25" y="25" text-anchor="middle" fill="black" dy=".3em" font-family="Arial" font-size="12px">
          Value
        </text>
        <text x="50" y="25" fill="black" dy=".3em" font-family="Arial" font-size="12">
          -- Node with current value
        </text>
        <circle cx="225" cy="25" r="18" fill="red" />
        <text x="225" y="25" text-anchor="middle" fill="white" dy=".3em" font-family="Arial" font-size="12">
          Score
        </text>
        <text x="250" y="25" fill="black" dy=".3em" font-family="Arial" font-size="12">
          -- Bot with current Score
        </text>
        <circle cx="25" cy="75" r="18" fill="red" />
        <circle cx="80" cy="75" r="18" fill="#aeaeae" />
        <line className="bot-claim-line" x1="25" y1="75" x2="80" y2="75"/>
        <text x="110" y="75" fill="black" dy=".3em" font-family="Arial" font-size="12">
          -- Bot with Claim on Node
        </text>
      </svg>
    );
  }
}
