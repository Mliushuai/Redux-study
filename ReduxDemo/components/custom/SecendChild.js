/**
 *
 */
import React, {Component} from 'react';

import {connect} from 'react-redux';

class SecendChild extends Component{
    constructor(props){
        super(props)
        this.state=({
            nowText:""
        })
    }
    componentWillReceiveProps (){
        console.log(this.props.CustomList,"这是加载结束接收的this.props.CustomList")
    }
    render(){
        console.log(this.props,"这是接收的this.props.CustomList")
        return(
            <div style={{border:"1px solid #f00",marginTop:"6px",padding:"2px"}}>
                <h1>SecendChild组件</h1>
                这是看到的SecendChild组件接收来自CustomList的内容<br/>
                {this.props.CustomList.map((item, index) => {
                    return (
                        <div style={{border: "1px solid #f00", marginBottom: "2px"}}>
                            <span style={{color: "#00f",marginRight:"6px"}}>接收CustomList的ID{item.id}</span>
                            <span style={{color: "#f00",marginRight:"6px"}}>接收CustomList的输入内容{item.text}</span>
                            <span style={{color: "#0f0"}}>接收CustomList的姓名{item.name}</span>
                        </div>
                    )
                })}
            </div>
        )
    }

}
const mapStateForProps =(state)=>{
    return{
        CustomList:state.CustomList,
        SecendChild:state.SecendChild
    }
}
SecendChild =connect(mapStateForProps)(SecendChild)
export default SecendChild