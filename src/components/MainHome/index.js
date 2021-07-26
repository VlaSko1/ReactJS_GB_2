import styles from './mainHome.module.scss';
import { Footer } from "../Footer";

export function MainHome(props) {
  return (
    <main>
      <p className={styles.main__text}>Приветствую, уважаемый пользователь, на главной странице нашей социальной сети: &nbsp;<span>"На связи"</span>.</p>
      <Footer/>
    </main>
  )
}