/**
 *
 */

import React, {Component} from 'react';
import {addCustomItemAction, deleteCustomItemAction} from '../../ReduxGather/Reducers/action';
// 引入connect函数用来生成Redux组件
import {connect} from 'react-redux';
import custom from "../../ReduxGather/index";
import SecendChild from './SecendChild'

class CustomList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            name: ""
        }
    }

    render() {
        console.log(this.props.SecendChild, "this.props.CustomList")
        return (
            <div style={{border: "1px sold #0f0"}}>
                <h2 style={{color: "#f0f"}}>这个是CustomList组价，产生当前的reducer</h2>
                <div>
                    {this.props.CustomList.map((customItem, index) =>
                        <div key={index}>
                            <span style={{color: "#f00", marginRight: "10px"}}>id:{customItem.id}</span>
                            <span>学号:{customItem.text}</span>
                            <span>姓名:{customItem.name}</span>
                        </div>
                    )}
                </div>
                <span>学号</span>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={(e) => {  // 监听用户输入
                        this.setState({
                            text: e.target.value
                        });
                    }}/>
                <span>姓名</span>
                <input type="text"
                       value={this.state.name}
                       onChange={(e) => {  // 监听用户输入
                           this.setState({
                               name: e.target.value
                           });
                       }}/>

                <button
                    onClick={() => {
                        console.log('触发add的action');
                        // 发送添加的action
                        this.props.dispatch(addCustomItemAction(this.state.text,this.state.name));
                        //添加完 将输入框清空
                        this.setState({
                            text: '',
                            name: ''
                        });
                    }}>
                    添加
                </button>

                <button
                    onClick={() => {
                        console.log('删除 click');
                        // 发送添加习惯项Action
                        this.props.dispatch(deleteCustomItemAction(this.state.card));
                        // 把输入置为空
                        this.setState({
                            text: '',
                            card:''
                        });
                    }}>
                    删除
                </button>
            </div>
        )
    }
}

// 关联习惯列表的props与state，不关联的话全局的state.customList就没法作为props属性传进来
const mapStateToProps = (state) => {
    console.log(state,"adada")
    return {
        CustomList: state.CustomList,
        SecendChild:state.SecendChild
    }
}

// 使用connect函数包裹组件，从而获得store上下文，可以在组件里使用this.props.dispatch访问到dispatch方法
CustomList = connect(mapStateToProps)(CustomList)
//暴露组件 CustomList
export default CustomList