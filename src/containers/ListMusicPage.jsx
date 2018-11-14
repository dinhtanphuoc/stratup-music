import React from 'react';
import PropTypes from 'prop-types';

class ListMusicPage extends React.PureComponent {
  render() {
    const { history, location, match } = this.props;
    return (
      <div
        history={history}
        location={location}
        match={match}
      >
      bbbbbbbbbb
      </div>
    );
  }
}

ListMusicPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default ListMusicPage;
