//1.Tạo Hello.jsx để hiển thị "Hello, React" và import vào App.js để sử dụng
import React from 'react';

function Hello() {
  return (
  <div>
   <p>Hello, <span style={{ color: 'blue', fontWeight: 'bold'}}>
    React</span></p>
    </div>
    );  
}

export default Hello;