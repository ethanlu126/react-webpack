import React, { Fragment } from 'react';
// import TodoListCss from './TodoList.scss'
// import TodoItem from './TodoItem';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import stroe from '../Store/index.js'
import store from '../Store/index.js';


class TodoListUI extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div style={{ 'marginLeft': '10px', 'marginTop': '10px' }}>
                <div>
                    <Input
                        value={this.props.inputValue}
                        placeholder={'???'}
                        style={{ 'width': '300px', 'marginRight': '10px' }}
                        onChange={this.props.handleInputValue}
                    >
                    </Input>
                    <Button
                        type="primary"
                        onClick={this.props.handleButtonClick}
                    >
                        confirm
                    </Button>

                    <List style={{ 'width': '300px', 'marginTop': '10px' }}
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (<List.Item onClick={() => this.props.handleDeleteItem(index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }

    componentDidMount() {
        //better to use axios at here
    }
}

export default TodoListUI;