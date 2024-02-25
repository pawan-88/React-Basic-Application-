import styles from "./SportsInput.module.css";

const SportsInput = ({ handleKeyDown }) => {
  return (
    <input
      className={styles.input}
      placeholder="Enter New Sports Here"
      type="text"
      onKeyDown={handleKeyDown}
    />
  );
};

export default SportsInput;
