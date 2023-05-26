import {useState} from "react";


function ShowForm(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        
        setAge('');
        setName('');

        if(!AbleToSubmit()) return;

        const id = Math.floor(Math.random() * 1000) + 1
        
        const newUser = {
            name: name,
            age: age,
            id: id
        }

        props.newData(newUser);
    }

    const AbleToSubmit = () => {
        if(name.trim().length === 0 || age.length === 0 || age < 0) {
            props.checkAlert(false);
            return false;
        } else {
            props.checkAlert(true);
            return true;
        }
    }

    const nameChangeHandler = e => setName(e.target.value);
    const ageChangeHandler = e => setAge(e.target.value);

    
    return (
        <form onSubmit={submitHandler}>
            <label>UserName</label>
            <input type="text" value={name} onChange={nameChangeHandler}></input>

            <label>Age</label>
            <input type="number" value={age} onChange={ageChangeHandler}></input>

            <button>Add User</button>
        </form>
    )
}

export default ShowForm;