import React from 'react';

class Clock extends React.Component {
    render() {
        return (
            <div className='glowing-text'>
                <p>{this.props.time.toLocaleString()}</p>
            </div>
        );
    }
}

export default Clock;