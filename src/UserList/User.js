import ExpenseUsers from "./ExpenseUsers";
import "./ExpenseUsers.css";

function User(props) {
  const user = props.list;

  return (
    <div className="userContainer">
      {user.map((person) => {
        return (
          <ExpenseUsers key={person.id} name={person.name} age={person.age} />
        );
      })}
    </div>
  );
}

export default User;
