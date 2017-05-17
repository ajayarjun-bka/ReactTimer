import React from 'react';
import Clock from 'Clock';

const Timer = React.createClass({
    render:function()
    {
        return(
            <div>
                <Clock totalSeconds={615}/>
            </div>
        );
    }
}); 

module.exports =Timer;