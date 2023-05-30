import classes from "./User.module.css";
import Card from "../UI/Card";

function User(props) {
  const user = props.list;

  return (
    <Card className={classes.users}>
      <ul>
        {user.map((person) => {
          return (
            <li key={person.id}>
              {person.name} ({person.age} years old.)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default User;
