import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { connect} from 'react-redux';
import { Header } from 'react-native-elements';
import {  employeeSave ,employeeDelete , employeeSave2 , employeeDelete2} from '../actions'
import { CardSection , Card , Button } from './common';
import PostingForm from './PostingForm'
// import { stat } from 'fs';

class EditList extends Component {

    static navigationOptions = {
        drawerLabel: () => null
    };

    onButtonSavePress = () =>{
        var caption = this.props.caption;
        var link = this.props.link;
        var uid = this.props.uid;
        var email = this.props.user.email
        this.props.employeeSave(caption,link,uid , email);
        this.props.employeeSave2(caption , link ,uid , email);
    }

    onButtonFirePress = () => {
        Alert.alert(
            'Are you sure to delete?',
            '',
            [
              { text: 'No', onPress: () => {}, style: 'cancel' },
              { text: 'Yes', onPress: this.onAccept },
            ],
            { cancelable: false }
        );
    }

    onAccept = () => {
        this.props.employeeDelete(this.props.uid);
        this.props.employeeDelete2(this.props.uid);
    }

    render(){
        return(
        <View>
            <Header 
                    containerStyle={{
                        backgroundColor: '#3b5998',
                    }}
                    centerComponent={{text: 'SocMed', style: { color: '#fff', fontSize:20 }}}
                />
            <Card>
                <PostingForm/>
                    <CardSection>
                        <Button onPress={this.onButtonSavePress}>
                            Save
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonFirePress}>
                            DELETE
                        </Button>
                    </CardSection>
            </Card>
        </View>)
    }
}

const mapStateToProps = (state) => {
    console.log(state.auth.user)
    return { 
        user: state.auth.user,
        link: state.postForm.link,
        caption: state.postForm.caption,
        uid : state.postForm.uid,
        email : state.auth.email
    }
}

export default connect(mapStateToProps,{employeeSave,employeeDelete, employeeSave2,employeeDelete2})(EditList);