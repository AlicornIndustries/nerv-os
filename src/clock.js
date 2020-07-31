import React from 'react';

class Clock extends React.Component {
    render() {
        return (
            <div className='clock-face'>
                <p>{this.props.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Clock;