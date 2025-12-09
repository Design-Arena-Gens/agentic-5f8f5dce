import styles from "./ScenePanel.module.css";

export interface Scene {
  id: number;
  title: string;
  subtitle: string;
  narration: string;
  backdrop: "station" | "gust" | "mango" | "goodbye";
}

interface ScenePanelProps {
  scene: Scene;
  index: number;
  total: number;
}

export function ScenePanel({ scene, index, total }: ScenePanelProps) {
  return (
    <section
      className={`${styles.scene} ${styles["backdrop-" + scene.backdrop]}`}
      aria-labelledby={`scene-${scene.id}`}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.counter}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className={styles.total}>/{String(total).padStart(2, "0")}</span>
        </div>
        <div className={styles.text}>
          <h2 id={`scene-${scene.id}`}>{scene.title}</h2>
          <h3>{scene.subtitle}</h3>
          <p>{scene.narration}</p>
        </div>
      </div>
      <div className={styles.railway} aria-hidden>
        <div className={styles.railLine} />
        <div className={styles.track} />
        <div className={styles.track} />
      </div>
      <div className={styles.mangoGlow} />
    </section>
  );
}
