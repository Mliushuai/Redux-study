/**
 *redux demod
 */

import React, {Component} from 'react';
//引入redux
// 需要使用redux的createStore方法创建store
import {createStore} from 'redux'
// 需要使用react-redux封装好的控件Provider包裹App组件
import {Provider} from 'react-redux'
// 导入合并好的全局reducer
import ReduxGather from './ReduxGather'
// view 层显示组件
import App from './components/App'
// 创建一个全局store用来保存全局状态
const store = createStore(ReduxGather);

class ReduxDemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <App/>
                </Provider>
            </div>
        )
    }
}

export default ReduxDemo
