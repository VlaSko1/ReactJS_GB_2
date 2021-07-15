import './App.css';
import { Message } from '../message/Message';

function App() {
  const textMessage = "Привет, React";
  return (
    <div className="app">
      <header className="app__header">
        <Message text={textMessage}/>

      </header>
    </div>
  );
}

export default App;
