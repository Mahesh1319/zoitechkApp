import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from './Colors';
import Font from './Font'

const Styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: 80,
        backgroundColor: Colors.primaryColour,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"space-around"
    },
    headerIconRight:{
        justifyContent:"center",
        alignItems:"flex-end",
        height:60,
        width:60,
        color:Colors.white,
        alignSelf:"flex-end"
    },
    headerText:{
        fontWeight:"bold",
        fontSize:Font.HEADER,
        color:Colors.white,
        letterSpacing:1,
    
    },
    homeContainer:{
        flex:1
    },
    container: {
        flex: 1,
        margin: 10,
        justifyContent: "center",
    },
    modalContainer: {
        borderRadius: 20,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: Colors.backgroundPrimary,
        flex: 1
    },
    modalViewContainer: {
        flex: 1,
        margin: "10%",
        marginTop: "30%",
        marginBottom: "30%",
        borderRadius: 20,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: Colors.backgroundPrimary,
        padding: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: "40%"
    },
    iconView: {
        width: 25,
        height: 25,
        color: Colors.white,
        
       
    },
    logoInitial: {
        width: 120,
        height: 120,
        alignSelf: "center"
    },
    titleText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },
    textCopyrights: {
        fontSize: Font.NORMAL_FONT_SIZE,
        fontFamily: 'Poppins-Medium',
        alignSelf: "center",
        width: "40%",
        color: Colors.black,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: -5,
        fontWeight: "bold"
    },
    innerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "30%"
    },
    loginContainer: {
        //padding:"20%",
        marginLeft: "20%",
        alignContent: "flex-start",
        justifyContent: "flex-start",

    },
    labels: {
        fontSize: Font.NORMAL_FONT_SIZE,
        fontFamily: 'Poppins-Medium',
        //alignSelf:"center",
        color: Colors.black,
        justifyContent: "center",
        //alignItems:"center",
        fontWeight: "600",
        marginTop: 10
    },
    textInput: {
        borderBottomColor: Colors.primaryColour,
        borderBottomWidth: 1,
        width: 250,
        color: Colors.black,
        fontSize: Font.SUB_TITLE_SIZE

    },
    validationLabel:{
        fontSize:Font.SMALL_FONT_SIZE,
        fontFamily:"Poppins-MediumItalic",
        color:Colors.danger,
        width:250
    }



})
export default Styles;

