import React from 'react';

class Controls extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }
    render()
    {
        let {countdownStatus} = this.props;

        let onStatusChange=(newStatus)=>{
            return(
                ()=>{
                    this.props.onStatusChange(newStatus);
                }
            );
        }   

        let renderStartStopButton = () =>{
            if(countdownStatus === 'started')
            {
                return(<button className="button secondary" onClick={onStatusChange("paused")}>Pause</button>);
            }
            else if(countdownStatus==="paused")
            {
                 return(<button className="button primary" onClick={onStatusChange("started")}>Start</button>);   
            }
        }
        return(<div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={onStatusChange("stopped")}>Clear</button>  
        </div>);
    }
}

Controls.propTypes ={
    countdownStatus:React.PropTypes.string.isRequired,
    onStatusChange:React.PropTypes.func.isRequired
}

module.exports = Controls;