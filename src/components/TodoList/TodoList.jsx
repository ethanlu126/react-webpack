import React, { Fragment } from 'react';
import TodoListCss from './TodoList.scss'
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }

        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div className={TodoListCss.input}>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputValue}>
                    </input>
                    <button
                        onClick={this.handleButtonClick}>
                        confirm
                    </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <TodoItem
                                    className={TodoListCss.list_item}
                                    content={item}
                                    index={index}
                                    key={index}
                                    handleDeleteItem={this.handleDeleteItem}
                                >
                                </TodoItem>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    componentDidMount() {
        //better to use axios at here
    }

    handleInputValue(e) {
        const value = e.target.value;
        // this.setState({
        //     inputValue: value
        // });
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleButtonClick() {
        // const list = [...this.state.list, this.state.inputValue];
        // this.setState({
        //     inputValue: '',
        //     list: list
        // })

        this.setState((prevState) => ({
            inputValue: '',
            list: [...prevState.list, prevState.inputValue]
        }))
    }

    handleDeleteItem(index) {
        // const list = [...this.state.list];
        // list.splice(index, 1);
        // this.setState({
        //     list: list
        // })

        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return { list: list }
        })
    }
}

export default TodoList;