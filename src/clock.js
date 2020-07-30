import React from 'react';

// https://openclassrooms.com/en/courses/4286486-build-web-apps-with-reactjs/4286711-build-a-ticking-clock-component
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }
    componentDidMount() {
        // Refresh at intervals
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            time: new Date()
        });
    }
    render() {
        // TODO: Fix formatting (so seconds dispaly as :06, not :6)
        return (
            <div className='clock-display'>
                <p>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</p>
            </div>
        );
    }
}

export default Clock;