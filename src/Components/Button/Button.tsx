import React, { Component } from 'react';

//Passing in a function as a property is the primary way to send signals back up the composition chain. Data should be flowing down, events andsignals to change data can flow back up
interface Props {
    buttonText: string;
    buttonClicked(): void;
}

//Very generic Button component.  It can be used in almost any application. Notice it can't handle events locally, nor should it.
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
