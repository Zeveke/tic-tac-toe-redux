import { useSelector } from 'react-redux';
import styles from './header.module.css';
import { selectSym, selectVictory } from '../../selectors';

export const Header = () => {
	const sym = useSelector(selectSym);
	const victory = useSelector(selectVictory);

	return (
		<div className={styles.header}>
			{victory ? `Победитель ${sym}` : `Текущий ход ${sym}`}
		</div>
	);
};
