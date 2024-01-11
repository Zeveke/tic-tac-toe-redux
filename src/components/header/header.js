import styles from './header.module.css';
import { store } from '../../store';

export const Header = () => {
	const { sym, victory } = store.getState();

	return (
		<div className={victory ? styles.header : styles.los}>
			{victory ? `Победитель : ${sym}` : `Текущий ход : ${sym}`}
		</div>
	);
};
