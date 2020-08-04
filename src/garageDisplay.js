import React from 'react';

class GarageDisplay extends React.Component {
    // FUTURE: Optimize the way this interacts with index.js to avoid wasted re-renders?
    render() {
        let listItems = [];
        for(var idCode in this.props.mechas) {
            // listItems.push(<li key={idCode}>{this.props.mechas[idCode].name}</li>)
            listItems.push(
                <li key={idCode}><MechaCard mecha={this.props.mechas[idCode]}/></li>
                );
        }
        return(
            <div id='garage-display'>
                {listItems}
            </div>
        )
    }
}

class MechaCard extends React.Component {
    render() {
        return (
            <button className='mecha-card'
                onClick={() => 
                    {
                        alert(this.props.mecha.name)
                    }
                }
            >
                {this.props.mecha.name}
            </button>
        )
    }
}

export {GarageDisplay, MechaCard}