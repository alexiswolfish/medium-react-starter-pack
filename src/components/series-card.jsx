import React, { Component } from 'react';

class SeriesCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.series.title}</div>
  }
}

export default SeriesCard;