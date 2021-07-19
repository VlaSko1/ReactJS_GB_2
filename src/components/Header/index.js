import styles from './header.module.css';

export function Header() {
  function updatePage() {
    window.location.reload();
  }
  return (
    <header>
      <p>Приветствуем вас в новой социальной сети:</p>
      <h3 onClick={updatePage}>На связи</h3>
    </header>
  )
}