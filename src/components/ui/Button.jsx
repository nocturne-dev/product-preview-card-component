import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={styles.button}>
      <h3 className={styles["button__action"]}>
        {props.details.icon && (
          <img src={props.details.icon.src} alt={props.details.icon.alt} />
        )}{" "}
        {props.details.title}
      </h3>
    </button>
  );
};

export default Button;
