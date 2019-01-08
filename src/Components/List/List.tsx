import React, { Component } from 'react';

interface Props {
    itemText: string
}

type State = {
    items: string[]
};

class List extends Component<Props> {

    state: State = { items: []};

    constructor(props: Props) {
        super(props);
        this.state = { items: [] };
    }
    
    render() {

        if (!this.state.items.includes(this.props.itemText))
        {
            let newList = this.state.items;
            newList.unshift(this.props.itemText);

            this.setState({
                items: newList
            });
        }

        return (
            <div className="List">
                <table>
                    {this.state.items.map(i => {
                        return (<tr>{i}</tr>)
                    })}
                </table>
            </div>
        )
    }
}

export default List;
