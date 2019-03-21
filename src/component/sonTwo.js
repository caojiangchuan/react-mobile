import React ,{Component}from 'react';

export  default  class sonTwo extends Component{
    render() {
        return(
            <div>
                我是sonTwo
                <button style={{width:"100px",height:"50px"}} onClick={this.props.go}>返回</button>
            </div>
        )
    }
}


