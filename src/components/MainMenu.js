import { createBottomTabNavigator } from 'react-navigation';
import Homepage from './Homepage';
import Profile from './Profile';
import EditList from './EditList'
import GetProfile from './GetProfile'

export default createBottomTabNavigator(
    {
        Homepage: {
            screen: Homepage
        },
        Profile: {
            screen: Profile
        },
        EditEmployee : {
            screen : EditList
        },
        MyProfile : {
            screen : GetProfile
        }
    },
    {
        initialRouteName: 'Homepage',
        headerMode: 'none', 

        tabBarOptions: {
            activeTintColor: '#FFF',
            inactiveTintColor: '#8e8d8d',
            labelStyle: {
              fontSize: 15,
            },
            style: {
              backgroundColor: '#3b5998'
            },
        }

    }
);