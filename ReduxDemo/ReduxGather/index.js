
/**
 *合并多个Reducer成为一个专用的Reducer在
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */

// 需要调用redux中的combineReducers 生成一个整体的Reducer
import {combineReducers} from 'redux';
//对应操作的
import CustomListReducer from './Reducers/CustomListReducer'
import SecendChildReducer from "./Reducers/SecendChildReducer";


const custom = combineReducers({
    CustomList: CustomListReducer,
    SecendChild:SecendChildReducer
})

export default custom