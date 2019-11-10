import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = { who: 'world' }
    }

    handleWorldClick = () => {
        this.setState({ who: 'world!' })
    }

    handleReactClick = () => {
        this.setState({ who: 'React!'})
    }

    handleFriendClick = () => {
        this.setState({ who: 'friend!'})
    }

    render() {
        return (
            <div>
                <p>
                    Hello, {this.state.who}
                </p>
                <button onClick={this.handleWorldClick}>World</button>
                <button onClick={this.handleReactClick}>React</button>
                <button onClick={this.handleFriendClick}>Friend</button>
            </div>
        )
    }
}

export default HelloWorld;