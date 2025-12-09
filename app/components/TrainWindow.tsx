import styles from "./TrainWindow.module.css";

export function TrainWindow() {
  return (
    <div className={styles.window} aria-hidden>
      <div className={styles.skyGradient} />
      <div className={styles.sun} />
      <div className={styles.breeze} />
      <div className={styles.train}>
        <div className={styles.carriage}>
          <div className={styles.windowFrame}>
            <div className={styles.policeSilhouette}>
              <div className={styles.cap} />
              <div className={styles.face} />
              <div className={styles.arm} />
            </div>
          </div>
        </div>
        <div className={`${styles.carriage} ${styles.second}`}>
          <div className={styles.windowFrame}>
            <div className={styles.mangoVendor}>
              <div className={styles.turban} />
              <div className={styles.smile} />
              <div className={styles.basket}>
                <div className={styles.basketMango} />
                <div className={styles.basketMango} />
                <div className={styles.basketMango} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.platform} />
      <div className={styles.track} />
    </div>
  );
}
