import React from 'react';
import './index.css';

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
        // If mecha has no pilot
        if(!this.props.mecha.hasPilot()) {
            return (
                <div className="card">
                    {/* img or icon */}
                    <p>TEST</p>
                    <div className="cardContainer">
                        <p>{this.props.mecha.name}</p>
                        <p>armor status</p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <button className="card">
                    <p>{this.props.mecha.name}</p>
                    <p style={{textIndent:'20px', fontSize:'50%', padding: '0px',}}>↳{this.props.mecha.pilot.fullName}</p>
                </button>
            )
        }





    }



    // render() {
    //     return (
    //         <button className='mecha-card'
    //             onClick={() => 
    //                 {
    //                     alert(this.props.mecha.name)
    //                 }
    //             }
    //         >
    //             {this.props.mecha.name}
    //         </button>
    //     )
    // }
}

export {GarageDisplay, MechaCard}