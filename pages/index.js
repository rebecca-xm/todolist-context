import 'bootstrap/dist/css/bootstrap.min.css';
import Notes from '../components/Notes';
import styles from '../styles/Home.module.css'
import TodosProvider from '../context/store';

export default function Home() {
  return (
    <div className={styles.container}>
      <TodosProvider>
        <Notes />
      </TodosProvider>
    </div>
  )
}
