import styles from './WelcomeMesage.module.css';
import { TodoItemsContext } from '../store/todoitems-store';

const WelcomeMessage = () => {
    const {todoItems} = useContext(TodoItemsContext);

    return todoItems.length === 0 && (
            <p className={styles.welcome}>Welcome To My Todo App....
            Enjoy your day</p>

    );
};

export default WelcomeMessage;