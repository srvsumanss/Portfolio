import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Experiences.module.css';

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className={styles.experiences}>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Experience
			</h1>
			<div className={styles.borderBottom} />

			<div className={styles.container}>
				<div className={styles.position}>
				Production Engineer  | Mechanical Engineering{' '}
					<a href=''>  Aerotech Machines</a>
				</div>
				<div className={styles.date}>July-2019 - Aug-2021</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<li>
							My role was to  Maintain Sheet-Metal-Manufacturing Plant & manufacture Eicher- Break-Pressure tank . 
                           </li>
						<li>
						Linear Welding & Circular Welding of Air-Tank. 
						</li>
						<li>
						Manage Mechanical & Hydrolic Press Shop .
							</li>
							<li>
							Customer Relation
							</li>
					
					</ul>
				</fieldset>
			</div>

		</div>
	);
};

export default Experiences;
