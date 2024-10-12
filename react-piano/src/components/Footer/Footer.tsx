import styles from "./Footer.module.css";
export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<a href="https://github.com/yuxin-miao">Github</a>
			<br />
			{currentYear}
		</footer>
	);
};
