import ExpenseUsers from "./ExpenseUsers";

function User(props) {
  const user = props.list;

  return (
    <div>
      {user.map((person) => {
        return (
          <ExpenseUsers key={person.id} name={person.name} age={person.age} />
        );
      })}
    </div>
  );
}

export default User;
