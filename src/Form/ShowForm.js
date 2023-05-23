import {useState} from "react";

function ShowForm(props) {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    
    const submitHandler = (e) => {
        e.preventDefault();

        const id = Math.floor(Math.random() * 1000) + 1
        
        const newUser = {
            userName: name,
            userAge: age,
            userId: id
        }

        props.newData(newUser);
    }

    const nameChangeHandler = e => setName(e.target.value);
    const ageChangeHandler = e => setAge(e.target.value);

    
    return (
        <form onSubmit={submitHandler}>
            <label>UserName</label>
            <input type="text" onChange={nameChangeHandler}></input>

            <label>Age</label>
            <input type="number" onChange={ageChangeHandler}></input>

            <button>Add User</button>
        </form>
    )
}

export default ShowForm;