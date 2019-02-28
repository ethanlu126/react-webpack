import React, { Fragment } from 'react';
// import TodoListCss from './TodoList.scss'
// import TodoItem from './TodoItem';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import stroe from '../Store/index.js'
import store from '../Store/index.js';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }

        this.state = stroe.getState();

        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);

        this.handleStroeChange = this.handleStroeChange.bind(this);
        store.subscribe(this.handleStroeChange);
    }

    render() {
        return (
            <div style={{ 'marginLeft': '10px', 'marginTop': '10px' }}>
                <div>
                    <Input
                        value={this.state.inputValue}
                        placeholder={'???'}
                        style={{ 'width': '300px', 'marginRight': '10px' }}
                        onChange={this.handleInputValue}
                    >
                    </Input>
                    <Button
                        type="primary"
                        onClick={this.handleButtonClick}
                    >
                        confirm
                    </Button>

                    <List style={{ 'width': '300px', 'marginTop': '10px' }}
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index) => (<List.Item onClick={this.handleDeleteItem.bind(this,index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }

    componentDidMount() {
        //better to use axios at here
    }

    handleStroeChange() {
        this.setState(store.getState());
    }

    handleInputValue(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }

    handleButtonClick() {
        const action = {
            type: 'add_todo_item'
        }
        store.dispatch(action);
    }

    handleDeleteItem(index) {
        const action = {
            type: 'delete_todo_item',
            index
        }
        stroe.dispatch(action);
    }
}

export default TodoList;