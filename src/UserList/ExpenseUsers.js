import "./ExpenseUsers.css";

function ExpenseUsers(props) {
  return (
    <div className="user">
      <h2>{props.name}</h2>
      <p>{props.age} years old</p>
    </div>
  );
}

export default ExpenseUsers;
