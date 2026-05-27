//1. Poster components hiển thị thông tin bản quyền và liên kết
// đến trang chủ của tác giả: ID, Tên, gmail, Link Github
import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
function Footer({ id, name, email, githubLink }) {
    return (
        <Container fluid className="bg-light text-center py-3">
            <Row>
                <Col>
                    <p>&copy; ID: {id}.</p>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p><a href={githubLink} target="_blank" rel="noopener noreferrer">
                        Github Profile
                    </a></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;