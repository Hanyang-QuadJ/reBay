import React, {Component} from 'react';
import {TextInput, AsyncStorage, View} from 'react-native';
import {connect} from 'react-redux';
import {Container, Text, Content, Button} from 'native-base';
import FooterButton from '../../../Components/FooterButtonComponent/FooterButtonComponent';
import styles from './style';
import * as ItemAction from '../../../Actions/ItemAction'
import { DotIndicator } from 'react-native-indicators';
import * as commonStyle from '../../../Constants/commonStyle';


const mapStateToProps = state => {
    return {
        item_id: state.ItemReducer.item_id
    };
};

class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            sub_content: "pending",
            tag: "",
            posting:false,
        }

    }

    parseTag = () => {
        let split = this.state.tag.split('#', 100);
        let myArray = split.filter(v => v !== '');
        let myArray2 = [];
        let Tag = [];
        for (let i = 0; i < myArray.length; i++) {
            myArray2[i] = myArray[i].trim();
        }
        let finalTag = myArray2.filter(v => v !== '');
        for (let i = 0; i < finalTag.length; i++) {
            Tag[i] = "#" + finalTag[i];
        }
        return Tag;

    };



     postItem = async ()  => {
         this.setState({posting:true});
        let token = await AsyncStorage.getItem("ACCESS_TOKEN");
        let pic_list = this.props.pic_list;
        let price = this.props.price;
        let item_name = this.props.item_name;
        let brand_id = this.props.brand_id;
        let size = this.props.size;
        let season = this.props.season;
        let category_1 = this.props.category_1;
        let category_2 = this.props.category_2;
        let item_status = this.props.item_status;
        let fullbox = this.props.fullbox;
        let warantee = this.props.warantee;
        let domestic = this.props.domestic;
        let refund = this.props.refund;
        let content = this.state.content;
        let sub_content = this.state.sub_content;

        let tags = await this.parseTag();
        await this.props.dispatch(ItemAction.postItem(token,
            pic_list,
            item_name,
            price,
            brand_id,
            size,
            season,
            category_1,
            category_2,
            item_status,
            fullbox,
            warantee,
            domestic,
            refund,
            content,
            sub_content,
            tags)).then(value => {
                this.setState({posting:false})
        });
        await this.props.navigator.push({
            screen:"Item",
            title:item_name
        })


    };


    componentDidUpdate() {
    }

    render() {
        if(this.state.posting === true){
            return(
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <DotIndicator color={commonStyle.PRIMARY_COLOR} />
                </View>

            )

        }
        else{
            return (
                <Container style={{backgroundColor: 'white'}}>
                    <Content contentContainerStyle={{flex:1}}>

                        <TextInput
                            multiline={true}
                            numberOfLines={10}
                            placeholder="제품상세설명"
                            onChangeText={(content) => this.setState({content})}
                            style={styles.textArea}
                        />

                        <TextInput
                            autoCorrect={false}
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={(tag) => this.setState({tag})}
                            placeholder="태그"
                            style={styles.textArea}
                        />
                    </Content>
                    <FooterButton leftText="임시저장" rightText="다음으로" onPress={this.postItem}/>
                </Container>
            )

        }


    }

}

export default (DetailScreen = connect(mapStateToProps)(DetailScreen));
