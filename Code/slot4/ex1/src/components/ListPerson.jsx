//2. Hiển thị thông tin của từng người trong một danh sách gồm 10 người, 
// mỗi người có tên và tuổi ra danh sách ul
import React from 'react';
function ListPerson() {
    const people = [
        { name: 'Alice', age: 15 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'Avid', age: 40 },
        { name: 'Eve', age: 18 },
        { name: 'Frank', age: 18 },
        { name: 'Grace', age: 55 },
        { name: 'Ceidi', age: 20 },
        { name: 'Ivan', age: 25 },
        { name: 'Budy', age: 50 }   
    ];
    //3. Tìm người đầu tiên trong mảng people là thanh thiếu niên 
    // (tuổi từ 13 đến 19) và hiển thị thông tin của người đó
    const firstTeenager = people.find(person => person.age >= 13 
        && person.age <= 19);
    return (
        <>
        <h1>1.List of People</h1>
        <div>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person.name} - {person.age} years old</li>
                ))}
            </ul>
        </div>
        <h3>2.Find the first person off the people array is teenager</h3>
        <div>
            {firstTeenager ? (
                <p>{firstTeenager.name} - {firstTeenager.age} years old</p>
            ) : (<p>No teenager found.</p>)}
        </div>
        <h3>4.Check if every person of the people array is teenager</h3>
        <div>
            <p>{people.every(person => person.age >= 13 && person.age <= 19) ? 'Yes, every person is a teenager.' : 'No, not every person is a teenager.'}</p>
        </div>
        <h3>5.Check if any person of the people array is teenager</h3>
        <div>
            <p>{people.some(person => person.age >= 13 && person.age <= 19) ? 'Yes, there is at least one teenager.' : 'No, there are no teenagers.'}</p>
        </div>
        </>
        
        
    );
}
export default ListPerson;