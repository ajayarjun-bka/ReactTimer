import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm'; 



class Countdown extends React.Component
{   
    constructor(props)
    {
        super(props);
        this.handleResult =this.handleResult.bind(this);
        this.startTimer =this.startTimer.bind(this);
        this.state={
            count:0,
            countdownStatus:'stopped' 
        }
    }

    startTimer()
    {
        this.timer=setInterval(()=>{
            let newCount = this.state.count-1;
            this.setState({count:newCount >=0?newCount:0})
        },1000);
    }

    componentDidUpdate(prevProps,prevState)
    {
        if(this.state.countdownStatus !== prevState.countdownStatus)
        {
            switch(this.state.countdownStatus){
                case 'started':
                    {
                        this.startTimer();
                        break;
                    }
            }
        }
    }

    handleResult(seconds)
    {
       this.setState({count:seconds,
           countdownStatus:'started'
       });
    }
    render()
    {
        let seconds = this.state.count;
        return(
            <div>
                <Clock totalSeconds={seconds}/>
                <CountdownForm onSetCountdown={this.handleResult}/>
            </div>
        );
    }
}



module.exports =Countdown;