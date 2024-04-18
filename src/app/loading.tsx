import styles from "./page.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <p>잠시만 기다려주세요..</p>
    </div>
  );
}
