import './App.css';
import { Message } from '../message/Message';

function App() {
  const textMessage = "Привет, React";
  return (
    <div className="App">
      <header className="App-header">
        <Message text={textMessage}/>

      </header>
    </div>
  );
}

export default App;
