import React, { Component } from 'react';

//Typescript requires that the types for all properties be defined in an interface like this
interface Props {
    textChanged(input: string): void;
}

class TextField extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.inputChanged = this.inputChanged.bind(this);
    }

    //The specific form of the event here ensures that e.target.value will reflect what we want
    inputChanged(e: { target: HTMLInputElement }) {
        //Rather than handling the event locally, it passes it upwards until it reaches a component that has all relevant components beneath it
        this.props.textChanged(e.target.value);
    }

    render() {
        return (
            <div className="TextField">
                <form>
                    <input type="text" onChange={this.inputChanged}></input>
                </form>
            </div>
        );
    }
}

//Don't forget this line!
export default TextField;
