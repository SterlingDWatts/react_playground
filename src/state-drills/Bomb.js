import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            count: 0,
            word: 'tick',
        }
    }
    tickTockOrBoom = () => {
        if (this.state.count % 8 === 0) {
            this.setState({ word: 'BOOM!!!!' });
            clearInterval(this.interval);
        } else if (this.state.count % 2 === 0) {
            this.setState({ word: 'tick' })
        } else {
            this.setState({ word: 'tock' })
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1});
            this.tickTockOrBoom();
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div><p>{this.state.word}</p></div>
        )
    }
}

export default Bomb;