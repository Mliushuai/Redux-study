
/**
 *合并多个Reducer成为一个专用的Reducer在
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */

// 需要调用redux中的combineReducers 生成一个整体的Reducer
import {combineReducers} from 'redux';
//对应操作的
import CustomListReducer from './custom/CustomListReducer'


const custom = combineReducers({
    CustomList: CustomListReducer
})

export default custom