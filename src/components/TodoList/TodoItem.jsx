import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);

    }

    render() {
        return (<li
            key={this.props.index}
            onClick={this.handleOnClick}
        >
            {this.props.content}
        </li>)
    }

    handleOnClick() {
        this.props.handleDeleteItem(this.props.index);
    }
}

export default TodoItem;