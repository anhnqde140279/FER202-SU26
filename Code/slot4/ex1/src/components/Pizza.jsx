//1.Pizza component hiển thị thông tin của 1 pizza,
// gồm: id, name, price, description, imageUrl, originalPrice,
// salePrice, tag
//Hiển thị thông tin của pizza trong một card,
// sử dụng react-bootstrap để tạo giao diện đẹp mắt và dễ đọc.
//CSS cho card để nó có nền sáng, chữ màu tối và được căn giữa.
import React from 'react';
import { Card, Button } from 'react-bootstrap';
function Pizza({pizza}) {
    return (
        <Card style={{ width: '18rem', margin: '20px auto', backgroundColor: '#f8f9fa', color: '#343a40' }}>
            <Card.Img variant="top" src={pizza.imageUrl} alt={pizza.name} />
            <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>
                    {pizza.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Pizza;