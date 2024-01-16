import { useSelector } from 'react-redux';
import { Cell } from '../index';
import styles from './field.module.css';
import { selectCells } from '../../selectors';

export const Field = () => {
	const cells = useSelector(selectCells);

	return (
		<div className={styles.field}>
			{cells.map(({ label, value }) => (
				<Cell key={'cell' + label} label={label} value={value} />
			))}
		</div>
	);
};
