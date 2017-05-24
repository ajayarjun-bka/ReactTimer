import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm'; 

class Timer extends React.Component
{   
    constructor(props)
    {
        super(props);
        this.handleResult =this.handleResult.bind(this);
        this.state={
            seconds:0
        }
    }
    handleResult(input)
    {
       this.setState({seconds:input});
    }
    render()
    {
        let seconds = this.state.seconds;
        return(
            <div>
                <Clock totalSeconds={seconds}/>
                <CountdownForm onSetCountdown={this.handleResult}/>
            </div>
        );
    }
}

module.exports =Timer;