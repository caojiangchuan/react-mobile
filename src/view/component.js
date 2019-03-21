import React ,{Component}from 'react';
import SonOne from '../component/SonOne'
import SonTwo from '../component/sonTwo'

export  default  class component extends Component{
    constructor(props) {
        super(props);
        this.state={
           message:'我是父组件传来的消息'
        }
        this.faGo=this.faGo.bind(this)
    }
     faGo=()=>{
        alert(1)
    }

    render() {
        return(
            <div>
                component
                <SonOne msg={this.state.message}/>
                <SonTwo go={this.faGo} />

            </div>
        )
    }

}
