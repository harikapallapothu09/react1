
import './App.css';

function App() {

  let name = "harika";
  let age = 29;
  let city = 'hyderabad';
  function welcome(userName) {
    return `hello, ${userName} , ${age}`
  }

  let num = [1, 2, 3];
  let myage = 15;
  let mul = [];
  for (let i = 0; i < num.length; i++) {
    mul.push(num[i] * 2);
  }

  let isAdult = false;
  if(myage>=18){
    isAdult = true;
  }
  let status = isAdult? 'Major': 'Minor';

  return (
    <div className="App">
      <h2>This is heading</h2>
      <h1> Name is {name}</h1>
      <p>Age is  {29} and city is {city}</p>

      <p>{welcome(name)}</p>

      <ul>
        {mul.map((n) => (
          <li>{n}</li>
        )

        )}
      </ul>

      <p>Your vote status is: {status}</p>
    </div>
  );
}

export default App;
