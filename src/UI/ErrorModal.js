import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  const onClickHandler = () => props.showFunc();
  return (
    <div>
      <div className={classes.backdrop} onClick={onClickHandler}/>

      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={classes.content}>
          <p>{props.content}</p>
        </div>
        
        <footer className={classes.actions}>
          <Button onClick={onClickHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
