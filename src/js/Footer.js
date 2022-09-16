import React from 'react';
import  Container from './Container';
import { Avatar, Button } from 'antd';
import '../css/Footer.css'


const Footer = (props) => {
    return <div className='footer'>
        <Container>
            {props.numberOfStudents ? <Avatar size='large'>{props.numberOfStudents}</Avatar> : null}
            <Button type='primary' onClick={() => {console.log("here");props.openModal()}}> Add new student</Button>
        </Container>
    </div>
}

export default Footer;