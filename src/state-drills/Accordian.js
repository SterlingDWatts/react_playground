import React, { Component } from 'react';

export default class Accordian extends Component {
    static defaultProps = {
        section: []
    }
    state = {
        currentButton: null,
    }
    handleButtonClick(index) {
        this.setState({ currentButton: index })
    }
    renderContent(index) {
        if (index === this.state.currentButton) {
            return (
                <p>{this.props.section[index].content}</p>
            )
        } else {
            return <div></div>
        }
    }
    renderListItems() {
        return this.props.section.map((section, index) => (
            <li key={index}>
                <button key={index} onClick={() => this.handleButtonClick(index)}>{section.title}</button>
                {this.renderContent(index)}
            </li>
        ))
    }
    render() {
        return (
            <ul>
                {this.renderListItems()}
            </ul>
        )
    }
}