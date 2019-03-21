import React ,{Component}from 'react';

export  default  class SonOne extends Component{
   render() {
       return(
           <div>
               我是sonOne
               <span style={{color:'red'}}> {this.props.msg}</span>
           </div>
       )
   }
}


