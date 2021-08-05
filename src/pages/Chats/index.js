import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { MainNoChat } from "../../components/MainNoChat";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getChatsArr } from '../../store/chats';


export function Chats(props) {
  const { idChat } = useParams();
  const chats = useSelector(getChatsArr);
  
  
  
  if (!idChat || chats[idChat] === undefined) {
    return (
      <>
      <Header />
      <MainNoChat/>
      </>
    )
  }
  return (
    <>
      <Header />
      <Main />
    </>
  )
}