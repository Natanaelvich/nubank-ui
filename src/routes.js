import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './pages/Main';

export default createAppContainer(
  createSwitchNavigator({
    Main,
  }),
);
