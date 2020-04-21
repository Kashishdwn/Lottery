import React from 'react'
import './LottoBall.css'
class LottoBall extends React.Component{
    render(){
        return(
            <div className="LottoBall">{this.props.num}</div>
        )
    }
}
export default LottoBall;