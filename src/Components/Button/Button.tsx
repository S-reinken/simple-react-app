import React, { Component } from 'react';

interface Props {
    buttonText: string;
    buttonClicked(): void;
}

class Button extends Component<Props> {

    constructor(props: Props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.buttonClicked();
    }

    render() {
        return (
            <button type="button" onClick={this.handleClick}>{this.props.buttonText}</button>
        );
    }
}

export default Button;
