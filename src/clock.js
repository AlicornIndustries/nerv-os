import React from 'react';

// https://openclassrooms.com/en/courses/4286486-build-web-apps-with-reactjs/4286711-build-a-ticking-clock-component
class Clock extends React.Component {
    // componentDidMount() {
    //     // Refresh at intervals
    //     this.intervalID = setInterval(
    //         () => this.tick(),
    //         1000
    //     );
    // }
    // componentWillUnmount() {
    //     clearInterval(this.intervalID);
    // }
    // tick() {
    //     this.setState({
    //         time: new Date()
    //     });
    // }
    render() {
        return (
            <div className='clock-display'>
                <p>{this.props.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Clock;