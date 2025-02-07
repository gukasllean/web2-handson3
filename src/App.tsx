
import './App.css';

function App() {
  return (
    <>
      <p className="hello-world">Hello world</p>
      <table className="info-table" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Nim</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lukas Glean</td>
            <td>2381027</td>
            <td>Unai</td>
            <td>2381027@unai.edu</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;