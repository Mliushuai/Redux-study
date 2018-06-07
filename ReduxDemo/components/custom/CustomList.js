/**
 *
 */

import React, {Component} from 'react';
import {addCustomItemAction,deleteCustomItemAction} from '../../ReduxGather/custom/action';
// 引入connect函数用来生成Redux组件
import {connect} from 'react-redux';
import custom from "../../ReduxGather/index";

class CustomList extends Component{
    constructor(props){
        super(props)
        this.state={
            text:""
        }
    }
    render(){
        console.log(this.props.CustomList,"this.propsthis.props")
        return(
            <div>
                <div>
                    {this.props.CustomList.map((customItem, index) =>
                        <div key={index}>
                            <span style={{color:"#f00",marginRight:"10px"}}>id:{customItem.id}</span>
                            <span>学号:{customItem.text}</span>
                        </div>
                    )}
                </div>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={(e) => {  // 监听用户输入
                        this.setState({
                            text: e.target.value
                        });
                    }}/>
                <button
                    onClick={() => {
                        console.log('添加 click');
                        // 发送添加习惯项Action
                        this.props.dispatch(addCustomItemAction(this.state.text));
                        // 把输入置为空
                        this.setState({
                            text: ''
                        });
                    }}>
                    添加
                </button>

                <button
                    onClick={() => {
                        console.log('删除 click');
                        // 发送添加习惯项Action
                        this.props.dispatch(deleteCustomItemAction(this.state.text));
                        // 把输入置为空
                        this.setState({
                            text: ''
                        });
                    }}>
                    删除
                </button>
            </div>
        )
    }
}
// 关联习惯列表的props与state，不关联的话全局的state.customList就没法作为props属性传进来
const mapStateForProps =(state)=>{
    return{
        CustomList:state.CustomList
    }
}
// 这个方法是用来绑定dispatch的，这里直接在组件里调用dispatch了，所以就没有用到这个方法
// const mapDispatchToProps = {};

// 使用connect函数包裹组件，从而获得store上下文，可以在组件里使用this.props.dispatch访问到dispatch方法
CustomList =connect(mapStateForProps)(CustomList)
//暴露组件 CustomList
export default CustomList