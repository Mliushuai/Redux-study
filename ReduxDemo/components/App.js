/**
 *
 */
import React, {Component} from 'react';
import CustomList from './custom/CustomList'
import SecendChild from './custom/SecendChild'

class App extends Component{
    render(){
        return(
            <div>
                <h1 style={{marginBottom:"20px"}}>用来包裹的父级组件</h1>
                <CustomList/>
                <SecendChild/>
            </div>
        )
    }

}
export default App