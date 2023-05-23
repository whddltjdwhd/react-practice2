import {useState} from "react";

function ShowForm(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        AbleToSubmit();
        const id = Math.floor(Math.random() * 1000) + 1
        
        const newUser = {
            name: name,
            age: age,
            id: id
        }

        props.newData(newUser);

        setAge('');
        setName('');
    }

    const AbleToSubmit = () => {
        if(name.trim().length === 0 || age.length === 0) {
            alert("빈칸을 채워주십시오.");
            return;
        } else if(age < 0) {
            alert("음수 이상의 나이를 입력하십시오.");
            return;
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