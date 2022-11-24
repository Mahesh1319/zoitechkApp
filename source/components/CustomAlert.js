import React from 'react';
import { View, Modal, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Icon, Button } from 'native-base'

import Colors from '../asset/Colors';
import Font from '../asset/Font';
//import CustomButton from './CustomButton';

function CustomAlert(props) {
    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={props.visible}
                onRequestClose={() => { }}
            >
                <View style={styles.centeredView}>
                    <View style={[
                        styles.modalView,
                        {
                            height: props.alertType == "CONTAINER" ?

                                Dimensions.get('screen').height / 2.5
                                :

                                Dimensions.get('screen').height / 4
                        }
                    ]}>
                        <View style={styles.headerConatiner}>
                            <Text style={styles.headerText}>
                                {props.tiltle}
                            </Text>
                            <Icon
                                type={props.iconType ? props.iconType : 'Ionicons'}
                                name={props.iconName ? props.iconName : 'notifications-circle'}
                                style={styles.icon} />
                        </View>

                        <Text style={styles.messageText}>
                            {props.message}
                        </Text>
                        {props.children}
                        <View style={styles.buttonContainer}>
                            <Button
                                margin={10}
                                width={100}
                                height={35}
                                color={props.negativeTextColor}
                                backgroundColor={props.negativeButtonColor ? props.negativeButtonColor : Colors.danger}

                                onPress={() => props.onNegativeButtonPress()}
                                title={props.negativeButton} >
                                {props.negativeButton}
                            </Button>
                            <Button
                                margin={10}
                                width={100}
                                height={35}
                                color={props.positiveTextColor}
                                backgroundColor={props.positiveButtonColor ? props.positiveButtonColor : Colors.sucess}
                                onPress={() => props.onNPositiveButtonPress()}
                                title={props.positiveButton} >
                                {props.positiveButton}</Button>
                        </View>



                    </View>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalView: {
        margin: 20,
        width: "87%",
        backgroundColor: Colors.primaryColour,
        borderRadius: 7,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 8,
    },
    headerConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: Colors.primaryColour
    },
    headerText: {
        alignContent: "flex-start",
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.white,
        marginBottom: 5
    },
    messageText: {
        flex: 2,
        width: '100%',
        fontSize: Font.MAIN_HEADER,
        color: Colors.white,
        padding: 30,
        letterSpacing: 1
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: "space-between",
        width: '105%',
        paddingVertical: 5
    },
    icon: {
        color: Colors.primaryColour,
        fontSize: 20
    }

})

export default CustomAlert;