import { useCallback, useEffect, useState } from 'react';
import { generateTime } from '../../utils/myFunc';
import faker from 'faker';
import joshuaraichur_128 from '../../asset/joshuaraichur_128.jpg';
import { scrollFunc } from '../../utils/myFunc';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Chats } from "../../pages/Chats";
import { Profile } from "../../pages/Profile";

function getChats() {
  const initChats = {};
  let countChats = Math.ceil((Math.random() + 1) * 3);
  for (let i = 0; i < countChats; i++) {
    let id = faker.datatype.uuid();
    initChats[id] = {
      name: faker.random.word(),
      messages: getMessages(),
    };
  }
  return initChats;
}

function getMessages() {
  let messages = [];
  const countMessages = Math.ceil((Math.random() + 1) * 5);
  for (let i = 0; i < countMessages; i++) {
    messages.push(getMessage());
  }
  return messages;
}
function  getMessage() {
  let countWords = + Math.ceil((Math.random() + 1) * 4);
  let text = faker.random.words(countWords);
  const Author = {};
  Author.name = faker.name.firstName();
  Author.id = faker.datatype.uuid();
  Author.avatar = faker.image.avatar();
  let id = faker.datatype.uuid();
  let date = faker.date.past();
  return {
    text,
    Author,
    id,
    date,
  } 
}

function App() {
  let chats = getChats();
  //console.log(chats)

  const [messageList, setMessageList] = useState([]);
  //const [chatsList, setChatList] = useState(chats);
  const [text, setText] = useState('');

  const asyncAnswer = useCallback((time) => {
    return setTimeout(() => {
      setMessageList([...messageList, {
        id: faker.datatype.uuid(),
        Author: {
          name: 'Robot',
          id: 9999999,
          avatar: joshuaraichur_128
        },
        text: "Привет! Я робот!",
        date: new Date()
      }]);
    }, time)
  }, [messageList]);


  useEffect(() => {
    if (messageList.length !== 0) {
      if (messageList[messageList.length - 1].Author.name !== "Robot") {
        let timer = asyncAnswer(generateTime());
        return () => {
          clearTimeout(timer);
        }
      }
    }
  }, [messageList, asyncAnswer])

  useEffect(() => {
    if (messageList.length !== 0) {
      scrollFunc();
    }
  }, [messageList])

  const addMessage = (e) => {
    e.preventDefault();
    if (text !== '') {
      setMessageList([...messageList, {
        id: faker.datatype.uuid(),
        Author: {
          name: faker.name.firstName(),
          id: faker.datatype.uuid(),
          avatar: faker.image.avatar(),
        },
        text,
        date: new Date()
      }]);
      setText('');
    }
  };

  const changeText = (e) => {

    setText(e.target.value);

  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route  path='/chats/:idChat?'>
          <Chats messageList={messageList} addMessage={addMessage} changeText={changeText} value={text} />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


