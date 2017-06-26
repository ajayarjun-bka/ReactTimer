import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm'; 
import Controls from 'Controls';



class Countdown extends React.Component
{   
    constructor(props)
    {
        super(props);
        this.handleSetCountdown =this.handleSetCountdown.bind(this);
        this.startTimer =this.startTimer.bind(this);
        this.renderControls =this.renderControls.bind(this);
        this.handleStatusChange =this.handleStatusChange.bind(this);              
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
                case 'stopped':
                    {
                        this.setState({
                            count:0
                        })
                    }
                case 'paused':
                {
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                }
            }
        }
    }

    componentWillUnmount()
    {
        console.log('====================================');
        console.log("Component Did Unmount");
        console.log('====================================');
    }

    handleStatusChange(newStatus)
    {
        this.setState({
            countdownStatus:newStatus
        });
    }
    handleSetCountdown(seconds)
    {
       this.setState({count:seconds,
           countdownStatus:'started'
       });
    }

    renderControls(){
            let {countdownStatus} = this.state;
            if(countdownStatus!=="stopped")
            {
                return(<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}></Controls>)
            }
            else if(countdownStatus==="stopped")
             {
                return(<CountdownForm onSetCountdown={this.handleSetCountdown}></CountdownForm>)
            }
        }

    render()
    {
        let seconds = this.state.count;
        return(
            <div>
                <Clock totalSeconds={seconds}/>
                {this.renderControls()}
            </div>
        );
    }
}



module.exports =Countdown;