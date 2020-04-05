// React native and others libraries imports
import React, { Component } from 'react';
import { Alert, TextInput, ImageBackground, View, Dimensions, TouchableOpacity, Image, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import { Container, Content, Text, Button, Left, } from 'native-base';
import { Avatar, Icon, } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import {
    BarIndicator,
}
    from 'react-native-indicators';

const URL = require("../../components/server");

import color from '../../components/color';



export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: false,
            email: '',
            password: '',
            userInfo: {},
            gettingLoginStatus: true,
        };
    }

    componentDidMount() {


    }


    render() {

        return (
            <Container style={{ backgroundColor: 'black' }}>
                <Content>
                    <View style={styles.body}>
                        <ImageBackground
                            source={require('../../images/head_bg.png')}
                            style={styles.header}
                            resizeMode="cover"
                        >
                            <View style={styles.headerContent}>
                                <Text style={{ color: '#FFF', margin: 15, fontWeight: '900', fontSize: 16, }}>Create New Account </Text>
                                <TouchableOpacity onPress={()=> Actions.login({type: 'replace'})} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>

                                    <View style={{ marginRight: 15, transform: [{ rotate: "180deg" }] }}>
                                        <Icon type='ionicon' name='ios-airplane' size={30} color='#fff' />
                                    </View>

                                    <Text style={{ color: '#FFF', fontWeight: '900', fontSize: 12, }}>Go Back to Login </Text>
                                </TouchableOpacity>
                            </View>

                        </ImageBackground>

                        <ImageBackground
                            source={require('../../images/main_bg.png')}
                            style={styles.mainsection}
                            resizeMode="cover"
                        >
                            <ScrollView style={{ flex: 1, }}>
                                <View style={{ flex: 1, marginTop: 6, marginLeft: 30, marginRight: 30, paddingTop: 40 }}>

                                    <Text style={{ color: '#403C3B', marginBottom: 7, marginTop: 10, fontWeight: '400', fontSize: 13, }}> Email</Text>
                                    <View style={styles.oneRowTextInput}>
                                        <View style={styles.textInputIconContainer}>
                                            <Icon type='entypo' name='email' size={30} color='#fff' />
                                        </View>
                                        <View style={styles.textInputContainer}>
                                            <TextInput
                                                placeholder={"Email"}
                                                placeholderTextColor={'#403C3B'}
                                                returnKeyType="next"
                                                onSubmitEditing={() => this.passwordInput.focus()}
                                                keyboardType='email-address'
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                inlineImageLeft='ios-call'
                                                style={{ flex: 1, fontSize: 13 }}

                                            />

                                        </View>

                                    </View>


                                    <Text style={{ color: '#403C3B', marginBottom: 7, marginTop: 10, fontWeight: '400', fontSize: 13, }}> Phone Number </Text>
                                    <View style={styles.oneRowTextInput}>
                                        <View style={styles.textInputIconContainer}>
                                            <View style={{ transform: [{ rotateX: "180deg" }] }}>
                                                <Icon type='foundation' name='key' size={30} color='#fff' />
                                            </View>
                                        </View>
                                        <View style={styles.textInputContainer}>
                                            <TextInput
                                                placeholder={"Phone number"}
                                                placeholderTextColor={'#403C3B'}
                                                secureTextEntry
                                                returnKeyType="next"
                                                onSubmitEditing={() => this.passwordInput.focus()}
                                                keyboardType='password'
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                inlineImageLeft='ios-call'
                                                style={{ flex: 1, fontSize: 13 }}

                                            />

                                        </View>

                                    </View>


                                    <Text style={{ color: '#403C3B', marginBottom: 7, marginTop: 10, fontWeight: '400', fontSize: 13, }}> First Name </Text>
                                    <View style={styles.oneRowTextInput}>
                                        <View style={styles.textInputIconContainer}>
                                            <View >
                                            <Icon type='antdesign' name='user' size={30} color='#fff' />
                                            </View>
                                        </View>
                                        <View style={styles.textInputContainer}>
                                            <TextInput
                                                placeholder={"First Name"}
                                                placeholderTextColor={'#403C3B'}
                                                secureTextEntry
                                                returnKeyType="next"
                                                onSubmitEditing={() => this.passwordInput.focus()}
                                                keyboardType='password'
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                inlineImageLeft='ios-call'
                                                style={{ flex: 1, fontSize: 13 }}

                                            />

                                        </View>

                                    </View>

                                    <Text style={{ color: '#403C3B', marginBottom: 7, marginTop: 10, fontWeight: '400', fontSize: 13, }}> Last Name </Text>
                                    <View style={styles.oneRowTextInput}>
                                        <View style={styles.textInputIconContainer}>
                                            <View >
                                            <Icon type='antdesign' name='user' size={30} color='#fff' />
                                            </View>
                                        </View>
                                        <View style={styles.textInputContainer}>
                                            <TextInput
                                                placeholder={"Last Name"}
                                                placeholderTextColor={'#403C3B'}
                                                secureTextEntry
                                                returnKeyType="next"
                                                onSubmitEditing={() => this.passwordInput.focus()}
                                                keyboardType='password'
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                inlineImageLeft='ios-call'
                                                style={{ flex: 1, fontSize: 13 }}

                                            />

                                        </View>

                                    </View>


                                    <TouchableOpacity onPress={()=> Actions.regtwo({type: 'replace'})}  style={styles.actionButton}>

                                          <View style={{ marginLeft: 20, }}>
                                                <Icon type='ionicon' name='ios-airplane' size={30} color='#01215B' />
                                            </View>

                                        <View style={{ flexDirection: 'row', flex:1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{ color: '#FFF', fontWeight: '900', fontSize: 16, }}>Proceed </Text>
                                             
                                        </View>


                                        <View style={{ marginLeft: 20, }}>
                                                <Icon type='ionicon' name='ios-airplane' size={30} color='#fff' />
                                            </View>

                                    </TouchableOpacity>




                                </View>
                            </ScrollView>

                        </ImageBackground>

                    </View>
                </Content>
            </Container>

        );
    }



    itemClicked(item) {
        Actions.product();
    }



}
const styles = StyleSheet.create({
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    body: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    header: {
        flex: 1,
    },
    headerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainsection: {
        flex: 4
    },
    oneRowTextInput: {
        flexDirection: 'row',
    },

    textInputIconContainer: {
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        marginRight: 7,
        height: 45,
        width: 45,
        backgroundColor: '#3B424E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputContainer: {
        flex: 1,
        borderColor: '#B8B8B8',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
        height: 45
    },
    actionButton:{ 
        flexDirection: 'row',
        marginTop:20, 
        backgroundColor:'#01215B', 
        justifyContent:'flex-end', 
        borderRadius:10, 
        padding:15 ,
        shadowColor: '#1044A4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
    }

});

