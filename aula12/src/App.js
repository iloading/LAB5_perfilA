//Ex1
import Database from "./DatabaseUsers";
import Ex2 from "./Ex2";
function App() {
  //contruir um obj da class Database
  let database1 = new Database();
  return (
    <div className="App">
      {database1.data.map((user) => (
        <div>
          <h5>User {user.id}</h5>
          <ul>
            <li>{user.id}</li>
            <li>{user.nome}</li>
            <li>{user.username}</li>
            <li>{user.gn}</li>
            <li>{user.tlf}</li>
          </ul>
        </div>
      ))}

      <Ex2 />
    </div>
  );
}

export default App;
