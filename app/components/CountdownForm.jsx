import React from 'react';

class CountdownForm extends React.Component
{
     constructor(props){
        super(props);
        this.handleSubmission=this.handleSubmission.bind(this);
    }
    handleSubmission(e)
    {
        e.preventDefault();
        let seconds = this.refs.seconds.value;
        if(seconds.match(/^[0-9]*$/)&&seconds.length>0)
        {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(seconds,10));
        }

        
    }
    render()
    {
        return(<div>
        <form ref="form" className="countdown-form" onSubmit={this.handleSubmission}>
        <input type="text" ref="seconds" placeholder="Enter the time"/>
        <button className="hollow button expanded">Start</button>
        </form>
        </div>);
        
    }
} 


module.exports = CountdownForm;