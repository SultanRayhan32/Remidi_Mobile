import React, { Component } from 'react';
import { View, Text, Image , TouchableWithoutFeedback } from 'react-native';
import { Card, CardSection } from './common';
import {connect} from 'react-redux';
import {employeeSave , postingUpdate } from '../actions';
import _ from 'lodash';

class PostDetail extends Component {

    onRowPress = () => {
        _.each(this.props.post, (value, prop) => {
            this.props.postingUpdate(prop, value);
        });
        // for(const prop in this.props.employee) {
        //     this.props.employeeUpdate(prop, this.props.employee[prop])
        // }
        this.props.navigation.navigate('EditEmployee');
    }

    render() {
        const { link, caption, email } = this.props.post;
        const { 
            thumbnailStyle, 
            headerContentStyle, 
            headerTextStyle, 
            thumbnailContainerStyle,
            imageStyle,
            emailStyle 
        } = styles;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress}>
                <View>
                    <Card>
                        <CardSection>
                            <View style={thumbnailContainerStyle} >
                                <Image 
                                    source={{ uri: link }} 
                                    style={thumbnailStyle} 
                                />
                            </View>
                            <View style={headerContentStyle}>
                                <Text style={headerTextStyle}>{email}</Text>
                            </View>
                        </CardSection>
                        <CardSection>
                            <Image 
                                source={{ uri: link }}
                                style={imageStyle}
                            />
                        </CardSection>
                        <CardSection>
                            <Text style={emailStyle}>{email}</Text>
                            <Text>{caption}</Text>
                        </CardSection>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
            
        );
    }
}

const styles = {
    emailStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 10
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 370,
        width: '100%'
    }
};

export default connect(null , {employeeSave , postingUpdate}) (PostDetail);
