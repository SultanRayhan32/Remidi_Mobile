import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { CardSection } from './common';
// import { employeeUpdate } from '../actions'



class EmployeeListItem extends Component {

    // onRowPress = () => {
    //     _.each(this.props.employee, (value, prop) => {
    //         this.props.employeeUpdate(prop, value);
    //     });
    //     // for(const prop in this.props.employee) {
    //     //     this.props.employeeUpdate(prop, this.props.employee[prop])
    //     // }
    //     this.props.navigation.navigate('EditEmployee');
    // }


    render() {

        const { caption } = this.props.post;

        return (
            <TouchableWithoutFeedback>
                <View>
                    <CardSection>
                        <Text style={styles.nameStyle}>{caption}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    nameStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default (EmployeeListItem);
