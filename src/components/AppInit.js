import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { alreadyLogin, notLoginYet } from '../actions'
import Main from './Main';



class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
    // var config = {
    //   apiKey: 'AIzaSyDQAAsYiGiVGnbue3eBimw_jAeKHsIQMA0',
    //   authDomain: 'managerapp-84816.firebaseapp.com',
    //   databaseURL: 'https://managerapp-84816.firebaseio.com',
    //   projectId: 'managerapp-84816',
    //   storageBucket: 'managerapp-84816.appspot.com',
    //   messagingSenderId: '369346300985'
    // };
    // var config = {
    //   apiKey: "AIzaSyDlk0iUHx4nDN8mkSiSXC8X75P8yA5FcR4",
    //   authDomain: "manager-sultan.firebaseapp.com",
    //   databaseURL: "https://manager-sultan.firebaseio.com",
    //   projectId: "manager-sultan",
    //   storageBucket: "manager-sultan.appspot.com",
    //   messagingSenderId: "466239990411"
    // };
    var config = {
      apiKey: "AIzaSyB_O7pJKcZceXng38xBDMW9jqZihejl6jk",
      authDomain: "uploadimage123-702fa.firebaseapp.com",
      databaseURL: "https://uploadimage123-702fa.firebaseio.com",
      projectId: "uploadimage123-702fa",
      storageBucket: "uploadimage123-702fa.appspot.com",
      messagingSenderId: "201631952650"
    };
    firebase.initializeApp(config);
      
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            this.props.alreadyLogin(user);
        }
        else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return(
          <Main />
    );
  }
}



export default connect(null, { alreadyLogin, notLoginYet })(AppInit);
