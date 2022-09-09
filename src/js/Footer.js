import React from 'react';
import  Container from './Container';
import { Avatar, Button } from 'antd';
import '../css/Footer.css'

const Footer = (props) => {
    return <div class='footer'>
        <Container>
            {props.numberOfStudents ? <Avatar size='large'>{props.numberOfStudents}</Avatar> : null}
            <Button type='primary'> Add new student</Button>
        </Container>
    </div>
}

export default Footer;