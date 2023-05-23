function ExpenseUsers(props) {
    console.log(props.name);
    return <div>
        <h2>{props.name}</h2>
        <p>{props.age}</p>
    </div>
}

export default ExpenseUsers;