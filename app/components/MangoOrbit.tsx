import styles from "./MangoOrbit.module.css";

export function MangoOrbit() {
  return (
    <div className={styles.wrapper} aria-hidden>
      <div className={styles.sunHalo} />
      <div className={styles.cloudOne} />
      <div className={styles.cloudTwo} />
      <div className={styles.mango}>
        <div className={styles.mangoHighlight} />
        <div className={styles.leaf} />
      </div>
      <div className={styles.sparkle} />
      <div className={styles.sparkleTwo} />
    </div>
  );
}
