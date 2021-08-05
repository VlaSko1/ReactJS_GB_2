import { useState } from 'react';
import { generateTime } from '../../utils/myFunc';
import { getObjectTextChats } from '../../utils/myFunc';
import { getChats } from '../../utils/myFunc';
import joshuaraichur_128 from '../../asset/joshuaraichur_128.jpg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Chats } from "../../pages/Chats";
import { Profile } from "../../pages/Profile";
import { store } from '../../store';



function App() {
  let chats = getChats();
  let objTextChats = getObjectTextChats(chats);
  
  const [chatsList, setChatList] = useState(chats);
  const [textChats, setTextChats] = useState(objTextChats);

  /*const asyncAnswer = useCallback((time) => {
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
  }, [messageList]);*/


  /*useEffect(() => {
    if (messageList.length !== 0) {
      if (messageList[messageList.length - 1].Author.name !== "Robot") {
        let timer = asyncAnswer(generateTime());
        return () => {
          clearTimeout(timer);
        }
      }
    }
  }, [messageList, asyncAnswer])*/


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route  path='/chats/:idChat?'>
          <Chats textChats={textChats} setTextChats={setTextChats}  setChats={setChatList} chats={chatsList}   />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;


