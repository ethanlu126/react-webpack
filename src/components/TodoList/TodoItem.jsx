import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);

    }

    render() {
        const { index, content } = this.props;
        return (<li
            key={index}
            onClick={this.handleOnClick}
        >
            {content}
        </li>)
    }

    handleOnClick() {
        const { index, handleDeleteItem } = this.props;
        handleDeleteItem(this.props.index);
    }
}

export default TodoItem;