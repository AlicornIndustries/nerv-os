import React from 'react';

class FinancesDisplay extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.funds}</p>
            </div>
        )
    }
}

export default FinancesDisplay;