/**
 *
 */

/**
 * 修改习惯项完成状态Action
 * @param customItemId  习惯项的id
 * @return {{type: string, id: *}}
 */
let idCode =0
export const changeCustomItemCompletionStatusAction = (customItemId) => {
    return {
        type: 'CHANGE_CUSTOM_ITEM_COMPLETION_STATUS_ACTION',
        id: customItemId,
    };
};

/**
 * 添加习惯项Action
 * @param customItemText    要添加的习惯项的文本
 * @return {{type: string, text: *}}
 */
let nextId = 1;
export const  addCustomItemAction = (customItemText,customItemName) => {
    console.log(customItemText)
    console.log(customItemName)
    return {
        type: 'ADD_CUSTOM_ITEM_ACTION',
        text: customItemText,
        id: nextId++,
        name:customItemName
    };
};
/**
 * 删除的action
 * @returns {{type: string, text: string, id: number}}
 */
export const deleteCustomItemAction =()=>{
    return{
        type:'DELETE_CUSTOM_ITEM_ACTION',
        text: '',
        id:nextId--,
        name:''
    }
}