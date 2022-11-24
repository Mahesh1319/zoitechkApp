import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, ImageBackground, ScrollView, BackHandler, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Left, Right, Icon, Card, CardItem, cardBody, Header, Title, Body, NativeBaseProvider } from 'native-base';
import Colors from '../asset/Colors';
import Styles from '../asset/Styles';
import Font from '../asset/Font';
import CustomAlert from '../components/CustomAlert';
import { useRoute } from '@react-navigation/native';

const Home = ({ navigation }) => {

  const [listView, setListView] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const route = useRoute()

  const dataSource = [
    {
      id: 1,
      fileName: 'File One',
      fileType: 'txt',
      fileSize: '236 KB',
      imageURL: '../asset/image/black.png'
    },
    {
      id: 2,
      fileName: 'File Two',
      fileType: 'video',
      fileSize: '4.7 MB',
      imageURL: '../asset/image/black.png'
    },
    {
      id: 3,
      fileName: 'File Three',
      fileType: 'txt',
      fileSize: '236 KB',
      imageURL: '../asset/image/black.png'
    },
    {
      id: 4,
      fileName: 'File Four',
      fileType: 'video',
      fileSize: '4.7 MB',
      imageURL: '../asset/image/black.png'
    }
  ]

  //Function for change view type of datas (grid or list view)
  const changeViewFunction = () => {
    setListView(!listView)
  }

  //function for alert message while press back button
  const backButtonFunctionCall = () => {
    setShowAlert(!showAlert)
    return false
  }

  //Function toclose the application when press yes
  const exitAppFunction = () => {
    setShowAlert(!showAlert)
    console.log("Exit Function called")
    if (route.name == 'Home') {
      BackHandler.removeEventListener()
      BackHandler.exitApp()
      return true
    }
    return false
  }

  //Function call when press back button
  useEffect(() => {
    const backButtonFunction = () => {
      setShowAlert(!showAlert)
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backButtonFunction)
    return () => backHandler.remove()
  },[])




  return (
    <NativeBaseProvider>
      <View style={Styles.homeContainer}>

        <CustomAlert
          visible={showAlert}
          tiltle={'Exit App'}
          messsageText={Colors.black}
          message={"Are you sure, you want to exit this app?"}
          positiveTextColor={Colors.black}
          negativeTextColor={Colors.black}
          negativeButton={"No"}
          negativeButtonColor={Colors.danger}
          negativeBorderColor={Colors.primaryColour}
          negativeBorderWidth={1}
          positiveButton={"Yes"}
          onNegativeButtonPress={() => setShowAlert(false)}
          onNPositiveButtonPress={() => exitAppFunction()}
        />


        <View style={Styles.headerContainer}>
          <TouchableOpacity onPress={() => backButtonFunctionCall()}>
            <Image source={require('../asset/image/backArrow.png')} style={[Styles.iconView, { alignSelf: "flex-start", marginRight: "25%" }]} />
          </TouchableOpacity>

          <Text style={Styles.headerText}>View Files</Text>

          {listView ?
            <TouchableOpacity onPress={() => changeViewFunction()}>
              <Image source={require('../asset/image/listView.png')} style={[Styles.iconView, { marginLeft: "25%", alignSelf: "flex-end" }]} />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => changeViewFunction()}>
              <Image source={require('../asset/image/gridView.png')} style={[Styles.iconView, { marginLeft: "25%", alignSelf: "flex-end" }]} />
            </TouchableOpacity>}
        </View>

        {listView ?
          <ScrollView >
            <View>
              <FlatList
                key={'_'}
                numColumns={2}
                data={dataSource}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles.flatlistGridContainer}>
                      <View style={{ flex: 0.3, margin: 5 }}>
                        <ImageBackground
                          source={require('../asset/image/black.png')}
                          style={[styles.imageLarge]}
                        >
                          {item.fileType == 'video' ?
                            <Image source={require('../asset/image/play.png')} style={[styles.smallPlayIcon]} /> : null}
                        </ImageBackground>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 0.5, padding: 10 }}>
                          <Text style={styles.itemName}>
                            {item.fileName}
                          </Text>
                          <Text style={styles.itemType}>
                            {item.fileType}
                          </Text>
                        </View>

                        <View style={{ flex: 0.2, padding: 10 }}>
                          <Text style={styles.itemSize}>
                            {item.fileSize}
                          </Text>
                        </View>
                      </View>

                    </View>
                  )
                }}
                keyExtractor={item => item.id}
              />
            </View>
          </ScrollView>

          :

          <ScrollView >
            <View>
              <FlatList
                key={'#'}
                numColumns={1}
                data={dataSource}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles.flatlistListContainer}>
                      <View style={{ flex: 0.3, margin: 5, borderRadius: 10 }}>
                        <ImageBackground
                          source={require('../asset/image/black.png')}
                          style={[styles.imageSmall, { justifyContent: "center", alignItems: "center", alignContent: "center" }]}
                        >
                          {item.fileType == 'video' ?
                            <Image source={require('../asset/image/play.png')} style={[styles.smallPlayIcon, { alignSelf: "center", width: 30, height: 30 }]} /> : null}
                        </ImageBackground>
                      </View>
                      <View style={{ flex: 0.5, padding: 10, marginLeft: 10 }}>
                        <Text style={styles.itemName}>
                          {item.fileName}
                        </Text>
                        <Text style={styles.itemType}>
                          {item.fileType}
                        </Text>
                      </View>

                      <View style={{ flex: 0.2, padding: 10 }}>
                        <Text style={styles.itemSize}>
                          {item.fileSize}
                        </Text>
                      </View>

                    </View>
                  )
                }}
                keyExtractor={item => item.id}
              />
            </View>
          </ScrollView>}

      </View>
    </NativeBaseProvider>
  )
}

export default Home

const styles = StyleSheet.create({
  imageLarge: {
    width: 130,
    height: 100,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderRadius: 10
  },
  imageSmall: {
    height: 100,
    width: 120,
    borderRadius: 10
  },
  smallPlayIcon: {
    height: 25,
    width: 25,
    alignSelf: "flex-start",
    justifyContent: "flex-end",
    margin: 5
  },
  flatlistListContainer: {
    flexDirection: "row",
    margin: 10,
    flex: 1
  },
  flatlistGridContainer: {
    margin: 10,
    flex: 1
  },
  itemName: {
    fontWeight: "bold",
    color: Colors.black,
    fontSize: Font.NORMAL_FONT_SIZE,
    marginTop: 2,
    marginBottom: 2
  },
  itemType: {
    fontSize: Font.NORMAL_FONT_SIZE,
    color: Colors.black,
    marginTop: 2,
    marginBottom: 2
  },
  itemSize: {
    fontSize: Font.NORMAL_FONT_SIZE,
    color: Colors.grey,
    marginTop: 2,
    marginBottom: 2
  }
})