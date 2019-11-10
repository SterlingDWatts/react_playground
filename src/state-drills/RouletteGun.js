import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8,
    }
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        }
    }
    getRandomChamber = () => {
        const min = Math.ceil(1);
        const max = Math.floor(8);
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    handleTriggerClick = () => {
        this.setState({ spinningTheChamber: true })
        setTimeout(() => {
            this.setState({ 
                chamber: this.getRandomChamber(),
                spinningTheChamber: false
            })
            console.log(this.state.chamber)
        }, 2000)
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <p>
                    spinning the chamber and pulling the trigger!
                </p>
                <button onClick={this.handleTriggerClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;