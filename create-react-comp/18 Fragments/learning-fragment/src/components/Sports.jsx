import styles from "./Sports.module.css";

const Sports = ({ sportGame, bought, handlePlayButtonClick }) => {
  return (
    <li
      className={`${styles["ps-game"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["ps-span"]}>{sportGame}</span>
      <button
        className={`btn btn-info ${styles.button}`}
        onClick={handlePlayButtonClick}
      >
        Play
      </button>
    </li>
  );
};

export default Sports;
