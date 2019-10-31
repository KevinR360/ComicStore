import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Comics from './pages/Comics';
import Characters from './pages/Characters';
import Details from './pages/Details';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Characters,
      Comics,
      Details,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerTransparent: true,
        headerTintColor: '#fff',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      },
    }
  )
);

export default Routes;
