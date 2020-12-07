import './App.css';
import HeaderComponent from './components/HeaderComponent';
import TypingComponent from "./components/TypingComponent.js";

function App() {

  return (
    <div className="App unselectable">
      <HeaderComponent/>
      <TypingComponent />
    </div>
  );
}

export default App;
