import '../css/App.css';
import { Component } from "react";
import Container from "./Container";
import Footer from './Footer';
import { getAllStudents } from "./client";
import {Table, Avatar, Spin, Modal} from 'antd'
import AddStudentForm from './forms/AddStudentForm'

class App extends Component {

    state = {
        students: [],
        isFetching : false,
        isAddStudentModalVisible: false
    }

    componentDidMount() {
        this.fetchStudents()
    }

    openAddStudentModal = () => {this.setState({isAddStudentModalVisible: true})}

    closeAddStudentModal = () => this.setState({isAddStudentModalVisible: false})

    fetchStudents = () => {
        this.setState({
            isFetching : true
        })
        getAllStudents()
            .then(res => res.json()
                .then(result => {
                    this.setState({
                        students : result,
                        isFetching : false
                    })
                }))
    }

    render() {
        const {students, isFetching, isAddStudentModalVisible} = this.state

        const columns = [
            {
                title: '',
                key: 'avatar',
                render: (text,student) =>(
                    <Avatar size='large'>
                        {`${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
                    </Avatar>
                ),
            },
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

        if(isFetching){
            return <Spin size="large" style={ {position: 'fixed',top: '50%',left: '50%',}}/>
        }

        if (students && students.length) {
           return <Container>
                    <Table dataSource={students} columns={columns} rowKey='studentId' pagination={false}/>
                    <Modal title="Add new students"  visible={isAddStudentModalVisible} onOk={this.closeAddStudentModal} onCancel={this.closeAddStudentModal} width={1000}><AddStudentForm/></Modal>
                    <Footer openModal={this.openAddStudentModal} numberOfStudents={students.length} />
                  </Container>
        } else
            return <h1>No Students Found</h1>
    }
}

export default App;
