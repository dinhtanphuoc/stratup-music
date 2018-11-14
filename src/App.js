import React from 'react';
import { RenderRoutes } from './route';
import PropTypes from 'prop-types';
import { MasterLayout } from './components/layout';

class App extends React.PureComponent {
  render() {
    const { routes } = this.props;
    return (
      <MasterLayout {...this.props}>
        <RenderRoutes routes={routes}/>
      </MasterLayout>
    )
  }
}

App.propTypes = {
  routes: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default App;