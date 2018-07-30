import React from 'react';
import PropTypes from 'prop-types';
import { MasterLayout } from '../components/layout';

class ListMusicPage extends React.Component {
  render() {
    const { history, location, match } = this.props;
    return (
      <MasterLayout
        history={history}
        location={location}
        match={match}
      >
      bbbbbbbbbb
      </MasterLayout>
    );
  }
}

ListMusicPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default ListMusicPage;
