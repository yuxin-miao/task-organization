import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <span role="img" aria-label="metal hand emoji">
        {String.fromCodePoint(Number(0x1f3b9))}
      </span>
      <span role="img" aria-label="musical keyboard emoji">
        Piano
      </span>
      <span role="img" aria-label="musical notes emoji">
        {String.fromCodePoint(Number(0x1f3b9))}
      </span>
    </h1>
  );
};
