import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { useParams } from "react-router-dom";
export function Chats(props) {
  const { chatId } = useParams();
  console.log(chatId);
  return (
    <>
      <Header />
      <Main messageList={props.messageList} chatId={chatId} addMessage={props.addMessage} changeText={props.changeText} value={props.value} />
    </>
  )
}