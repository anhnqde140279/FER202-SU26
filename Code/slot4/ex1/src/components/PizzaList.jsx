//Hiển thị danh sách các loại pizza trong một component PizzaList,
// sử dụng dữ liệu từ một mảng Pizzas trong App.js.
// Gọi component Pizza
import React from 'react';
import Pizza from './Pizza';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import {pizzaDatas} from '../data/pizzasData';

function PizzaList() {
    return (
        <Container className="my-4">
            <Row>
                {pizzaDatas.map(pizza => (
                    <Col key={pizza.id} md={4} className="mb-4">
                        <Pizza pizza={pizza} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}   
export default PizzaList;

                    