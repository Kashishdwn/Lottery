import React from 'react'
import LottoBall from './LottoBall';
import './Lottery.css'
class Lottery extends React.Component{
    static defaultProps={
        title:'Lotto',
        maxNum:40,
        maxBalls:6
    }
    constructor(props){
        super(props);
        this.state={
            num:Array.from({length:this.props.maxBalls})
        }
    }
    generate=()=>{
        this.setState(currState=>
            ({num:currState.num.map(
                n=>Math.floor(Math.random()*this.props.maxNum)+1
            )}));
        
    }
    render(){
        return(
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.num.map(n=><LottoBall num={n}/>)}
                </div>
                <button onClick={this.generate}>Generate</button>
            </section>
        )
    }
}
export default Lottery;