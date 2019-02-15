import React from 'react';
import PropTypes from 'prop-types'
import TodoList from './TodoList';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);

    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        }
        return false;
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
// check props type
TodoItem.propTypes = {
    test: PropTypes.string,
    index: PropTypes.number
}

// set default value of props (if props were undefined)
TodoItem.defaultProps = {
    test: 'test'
}

export default TodoItem;