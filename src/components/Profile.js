import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { Card, CardSection, Button } from './common';
import { logoutUser, postingCreate, postingCreate2 } from '../actions';
import PostingForm from './PostingForm';
import { Icon } from 'react-native-elements';


class Profile extends Component{
    static navigationOptions = {
        tabBarLabel: 'Upload12',
        tabBarIcon: ({ tintColor }) => <Icon name='add' color={tintColor} size={25} />
    };

    static navigationOptions = {
        tabBarLabel: 'Edit',
        tabBarIcon: ({ tintColor }) => <Icon name='add' color={tintColor} size={25} />
    };

    logOut = () => {
        this.props.logoutUser();
        this.props.screenProps.rootNavigation.navigate('Login')
    }

    onButtonSavePress = () => {
        var data = {
                link: this.props.link, 
                caption: this.props.caption,
                email: this.props.user.email
        }
        this.props.postingCreate(data) 
        this.props.postingCreate2(data);
    }

    render() {
        return (
            <View>
                <Header 
                    containerStyle={{
                        backgroundColor: '#3b5998',
                    }}
                    centerComponent={{text: 'SocMed', style: { color: '#fff', fontSize:20 }}}
                    rightComponent={{
                        icon: 'home',
                        color: '#fff',
                        onPress: this.logOut
                    }}
                />
                <Card>
                    <PostingForm />
                    <CardSection>
                        <Button onPress={this.onButtonSavePress}>
                            Share!
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.auth.user)
    return { 
        user: state.auth.user,
        link: state.postForm.link,
        caption: state.postForm.caption
    }
}

export default connect(mapStateToProps, { logoutUser, postingCreate , postingCreate2 })(Profile);