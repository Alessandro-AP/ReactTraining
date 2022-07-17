import '../css/App.css';
import { Component } from "react";
import Container from "./Container";
import { getAllStudents } from "./client";
import {Table} from 'antd'

class App extends Component {

    state = {
        students: []
    }

    componentDidMount() {
        this.fetchStudents()
    }

    fetchStudents = () => {
        getAllStudents()
            .then(res => res.json()
                .then(result => {
                    this.setState({
                        students : result
                    })
                }))
    }

    render() {
        const {students} = this.state

        const columns = [
            {
                title: 'ID',
                dataIndex: 'studentId',
                key: 'studentId',
            },
            {
                title: 'First Name',
                dataIndex: 'firstName',
                key: 'firstName',
            },
            {
                title: 'Last Name',
                dataIndex: 'lastName',
                key: 'lastName',
            },
            {
                title: 'Gender',
                dataIndex: 'gender',
                key: 'gender',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
        ];

        if (students && students.length) {
           return <Container><Table dataSource={students} columns={columns} rowKey='studentId' pagination={false}/></Container>
        } else
            return <h1>No Students Found</h1>
    }
}

export default App;
