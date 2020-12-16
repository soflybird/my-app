import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Name from './Name';
import ThingsILike from './ThingsILike';
import FunFacts from './FunFacts';
import Crystal from './Crystal';
import Something from './Something';
import Example from './Example';


function App() {
  return (
    <div className="App">
      <h1>Hello I am Robin</h1>
      <h2>I am learning to code</h2>

    <MyComponent />
    <Name customName="RobinE"/>
    <ThingsILike />
    <FunFacts />
    <Crystal />
    <Something />
    <Example />

    </div>
  );
}

export default App;
