
import {
  HomePage,
  ListMusicPage
} from '../containers';
import App from '../App';

const routes = [
  {
    component: App,
    routes: [
      {
        component: HomePage,
        path: '/'
      },
      {
        component: ListMusicPage,
        path: '/tong-quan'
      }
    ]
  }
];

export default routes;