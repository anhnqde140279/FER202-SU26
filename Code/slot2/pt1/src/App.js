import './App.css';

function App() {

  const person = {
    id: 1,
    name: "Ngô Quỳnh Anh",
    age: 22,
    address: "23/3 Nguyễn Văn Huề, Thanh Khê, Đà Nẵng"
  };

  const chao1 = (name) => {
    alert(`Xin chào, ${name}!`);
  };

  return (
    <div className="App">
      <h1>Xin chào, đây là bài tập trong React</h1>

      <h2>Tôi là Anh Anh</h2>

      <button onClick={() => chao1(person.name)}>
        Gọi hàm Chao1
      </button>

      <div className="card">
        <h3>Thông tin Person</h3>

        <p><strong>ID:</strong> {person.id}</p>

        <p><strong>Name:</strong> {person.name}</p>

        <p><strong>Age:</strong> {person.age}</p>

        <p><strong>Address:</strong> {person.address}</p>
      </div>
    </div>
  );
}

export default App;