import React, { Component } from 'react';

interface Props {
    itemText: string
}

//This is for typescript to understand that the array inside the State is made up of strings and will accept them in calls to setState
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

        //The render() method also passes down relevant data from higher components through property cascading. Thus, we can analyze the data we receive and perform accordingly now
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
                    //The ability to return formatted html from JS calls is the primary advantage of JSX.
                    {this.state.items.map(i => {
                        return (<tr>{i}</tr>)
                    })}
                </table>
            </div>
        )
    }
}

export default List;
