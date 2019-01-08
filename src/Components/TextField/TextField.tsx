import React, { Component } from 'react';

interface Props {
    textChanged(input: string): void;
}

class TextField extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.inputChanged = this.inputChanged.bind(this);
    }

    inputChanged(e: { target: HTMLInputElement }) {
        this.props.textChanged(e.target.value);
    }

    render() {
        return (
            <div className="TextField">
                <form>
                    <input type="text" onChange={this.inputChanged}></input>
                </form>
            </div>
        )
    }
}

export default TextField;
