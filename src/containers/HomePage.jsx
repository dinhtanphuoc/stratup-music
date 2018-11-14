import React from 'react';
import PropTypes from 'prop-types';

class HomePage extends React.PureComponent {
  render() {
    const { history, location, match } = this.props;
    return (
      <div
        history={history}
        location={location}
        match={match}
      >
      aaaaaaâa
      </div>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default HomePage;
