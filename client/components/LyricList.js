import React, { Component } from 'react';
import gql from 'graphql-tag';

class LyricList extends Component {
  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li
          key={id}
          className="collection-item"
        >
          {content}
        </li>
      );
    });
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default LyricList;