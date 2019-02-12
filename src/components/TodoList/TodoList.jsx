import React, { Fragment } from 'react';
import TodoListCss from './TodoList.scss'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div className={TodoListCss.input}>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputValue.bind(this)}>
                    </input>
                    <button
                        onClick={this.handleButtonClick.bind(this)}>
                        confirm
                    </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li
                                className={TodoListCss.list_item}
                                key={index}
                                onClick={this.handleDeleteItem.bind(this, index)}
                            >
                                {item}
                            </li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputValue(e) {
        let value = e.target.value;
        this.setState({
            inputValue: value
        });
    }

    handleButtonClick() {
        const list = [...this.state.list, this.state.inputValue];
        this.setState({
            inputValue: '',
            list: list
        })
    }

    handleDeleteItem(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default TodoList;