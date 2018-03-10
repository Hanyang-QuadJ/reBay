import React, {Component} from 'react';
import { connect } from 'react-redux';
import {AsyncStorage, View, Image,Text,FlatList, TouchableOpacity, ActivityIndicator, InteractionManager} from 'react-native';
import {Container,  Content, Button, Footer } from 'native-base';
import FooterButtonComponent from '../../../Components/FooterButtonComponent/FooterButtonComponent';
import ImagePicker from 'react-native-image-picker';


import styles from './style';

const mapStateToProps = state => {
    return {
    };
};

class PictureScreen extends Component {
    static navigatorButtons = {
        leftButtons:[
            {
                title:'Back',
                id:'back'
            }
        ]


    };


    static navigatorStyle = {
        tabBarHidden:true,


    };
    constructor(props) {
        super(props);
        this.state = {
            image1: null,
            image2: null,
            image3: null,
            image4: null,
            image5: null,
            image6: null,
            image7: null,
            image8: null,
            image9: null,
            base1: null,
            base2: null,
            base3: null,
            base4: null,
            base5: null,
            base6: null,
            base7: null,
            base8: null,
            base9: null,
            base64:[],
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type === 'NavBarButtonPress') { // this is the event type for button presses
            if(event.id === 'back'){
                this.props.navigator.dismissModal({
                    animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
                });

            }


        }
    };

    imagePicker (imageNumber) {
        let options = {
            title: '사진 선택',
            cancelButtonTitle:"취소",
            takePhotoButtonTitle:"사진촬영",
            chooseFromLibraryButtonTitle:"앨범에서 선택",
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, async (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }

            else {
                if (imageNumber === 1) {
                    this.setState({image1: response.uri, base1: response.data});

                }
                else if (imageNumber === 2) {
                    this.setState({image2: response.uri, base2: response.data});
                }
                else if (imageNumber === 3) {
                    this.setState({image3: response.uri, base3: response.data});
                }
                else if (imageNumber === 4) {
                    this.setState({image4: response.uri, base4: response.data});
                }
                else if (imageNumber === 5) {
                    this.setState({image5: response.uri, base5: response.data});
                }
                else if (imageNumber === 6) {
                    this.setState({image6: response.uri, base6: response.data});
                }
                else if (imageNumber === 7) {
                    this.setState({image7: response.uri, base7: response.data});
                }
                else if (imageNumber === 8) {
                    this.setState({image8: response.uri, base8: response.data});
                }
                else if (imageNumber === 9) {
                    this.setState({image9: response.uri, base9: response.data});
                }
                const baseArray = await this.parseBase();
                this.setState({
                    base64:baseArray
                })


            }
        });

    }
    parseBase () {

        let {base1, base2, base3, base4, base5, base6, base7, base8, base9} = this.state;
        let baseArray = [base1,base2,base3,base4, base5, base6, base7, base8, base9];

        function filter_array(arr) {
            arr = arr.filter(isEligible);
            return arr;
        }
        function isEligible(value) {
            if(value !== false || value !== null || value !== 0 || value !== "") {
                return value;
            }
        }
        return filter_array(baseArray);

    };
    goToBrand () {

        this.props.navigator.push({
            screen:'Brand',
            title:'브랜드 선택',
            passProps:{
                base64:this.state.base64
            }

        });
        // if(baseArray.length <3 ){
        //     Alert.alert(
        //         '잠깐!',
        //         '최소 3장 이상의 상품사진을 입력하세요',
        //         [
        //             {text: 'OK'},
        //         ],
        //     )
        // }
        // else{
        //     this.props.navigation.navigate('Brand',{base64:baseArray});
        // }
    };


    render() {
        let {image1, image2, image3, image4, image5, image6, image7, image8, image9} = this.state;


        return (
            <Container style={{backgroundColor: 'white'}}>
                <View style={styles.container}>
                    <View style={styles.progress}>
                    </View>
                    <View style={styles.inform}>
                        <Text style={styles.informText}>최소 3장 이상의 사진을 등록해주세요</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={this.imagePicker.bind(this,1)}>
                                {image1 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image1 && <Image source={{uri: image1}} style={styles.image}/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.imagePicker.bind(this,2)}>
                                {image2 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image2 && <Image source={{uri: image2}} style={styles.image}/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.imagePicker.bind(this,3)}>
                                {image3 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image3 && <Image source={{uri: image3}} style={styles.image}/>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={this.imagePicker.bind(this,4)}>
                                {image4 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image4 && <Image source={{uri: image4}} style={styles.image}/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.imagePicker.bind(this,5)}>
                                {image5 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image5 && <Image source={{uri: image5}} style={styles.image}/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.imagePicker.bind(this,6)}>
                                {image6 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image6 && <Image source={{uri: image6}} style={styles.image}/>}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={this.imagePicker.bind(this,7)}>
                                {image7 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image7 && <Image source={{uri: image7}} style={styles.image}/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.imagePicker.bind(this,8)}>
                                {image8 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image8 && <Image source={{uri: image8}} style={styles.image}/>}
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.imagePicker.bind(this,9)}>
                                {image9 === null ?
                                    <Image style={styles.image} source={require('../../../Assets/pic1.jpg')}/> :
                                    image9 && <Image source={{uri: image9}} style={styles.image}/>}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <FooterButtonComponent leftText="임시저장" rightText="다음으로" onPress={this.goToBrand.bind(this)}/>
            </Container>
        )
    }
}

export default (PictureScreen = connect(mapStateToProps)(PictureScreen));
