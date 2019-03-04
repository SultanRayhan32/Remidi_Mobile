import React, { Component } from 'react';
import { View, Text, Image , TouchableWithoutFeedback , ScrollView} from 'react-native';
import { Card, CardSection } from './common';
import {connect} from 'react-redux';
import { getAllPostMine } from '../actions';
import _ from 'lodash';


class GetProfile extends Component {

    componentDidMount(){
        this.props.getAllPostMine()
    }

    // onRowPress = () => {
    //     _.each(this.props.post, (value, prop) => {
    //         this.props.postingUpdate(prop, value);
    //     });
    //     // for(const prop in this.props.employee) {
    //     //     this.props.employeeUpdate(prop, this.props.employee[prop])
    //     // }
    //     this.props.navigation.navigate('EditEmployee');
    // }

    renderRow = () =>{
        const { 
            thumbnailStyle, 
            headerContentStyle, 
            headerTextStyle, 
            thumbnailContainerStyle,
            imageStyle,
            emailStyle 
        } = styles;
        const listJSX = this.props.postlist.map((item) => {
            return (
                <TouchableWithoutFeedback>
                <View>
                    <Card>
                        <CardSection>
                            <View style={thumbnailContainerStyle} >
                                <Image 
                                    source={{ uri: item.link }} 
                                    style={thumbnailStyle} 
                                />
                            </View>
                            <View style={headerContentStyle}>
                                <Text style={headerTextStyle}>{item.email}</Text>
                            </View>
                        </CardSection>
                        <CardSection>
                            <Image 
                                source={{ uri: item.link }}
                                style={imageStyle}
                            />
                        </CardSection>
                        <CardSection>
                            <Text style={emailStyle}>{item.email}</Text>
                            <Text>{item.caption}</Text>
                        </CardSection>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
            );
        });
        return listJSX;
    }

    render() {
        const { link, caption, email } = this.props.postlist;
        const { 
            thumbnailStyle, 
            headerContentStyle, 
            headerTextStyle, 
            thumbnailContainerStyle,
            imageStyle,
            emailStyle 
        } = styles;
        return (
            // <TouchableWithoutFeedback>
            //     <View>
            //         <Card>
            //             <CardSection>
            //                 <View style={thumbnailContainerStyle} >
            //                     <Image 
            //                         source={{ uri: link }} 
            //                         style={thumbnailStyle} 
            //                     />
            //                 </View>
            //                 <View style={headerContentStyle}>
            //                     <Text style={headerTextStyle}>{email}</Text>
            //                 </View>
            //             </CardSection>
            //             <CardSection>
            //                 <Image 
            //                     source={{ uri: link }}
            //                     style={imageStyle}
            //                 />
            //             </CardSection>
            //             <CardSection>
            //                 <Text style={emailStyle}>{email}</Text>
            //                 <Text>{caption}</Text>
            //             </CardSection>
            //         </Card>
            //     </View>
            // </TouchableWithoutFeedback>
            <ScrollView>
                {this.renderRow()}
            </ScrollView>
            
            
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

const mapStateToProps = (state) => {
    const postlist = _.map(state.postlist2, (val,uid) => {
        return { ...val, uid }
    });
    console.log(postlist);
    console.log(state.auth.user)
    return { 
        user: state.auth.user,
        uid : state.auth.uid,
        postlist
    }
}

export default connect(mapStateToProps , { getAllPostMine }) (GetProfile);
