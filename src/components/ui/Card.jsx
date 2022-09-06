import styles from "./Card.module.scss";
import { button } from "../../data/button";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles["card__image"]} />
      <div className={styles["card__details"]}>
        <p className={styles["card__type"]}>{props.info.type}</p>
        <h1 className={styles["card__title"]}>{props.info.title}</h1>
        <p className={styles["card__description"]}>{props.info.description}</p>
        <h1 className={styles["card__discount"]}>{props.info.discount}</h1>
        <p className={styles["card__original"]}>{props.info.original}</p>
        <Button details={button} />
      </div>
    </div>
  );
};

export default Card;
