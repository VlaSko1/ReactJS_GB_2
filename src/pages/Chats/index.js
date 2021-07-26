import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
export function Chats(props) {
  return (
    <>
      <Header />
      <Main messageList={props.messageList} addMessage={props.addMessage} changeText={props.changeText} value={props.value} />
    </>
  )
}