import { useState } from "react";
import './ShowForm.css';

function ShowForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setAge("");
    setName("");

    if (!AbleToSubmit()) return;

    const id = Math.floor(Math.random() * 1000) + 1;

    const newUser = {
      name: name,
      age: age,
      id: id,
    };

    props.newData(newUser);
  };

  const AbleToSubmit = () => {
    if (name.trim().length === 0 || age.length === 0) {
      props.checkAlert(false, "입력칸이 비어있음.");
      return false;
    } else if (age < 0) {
      props.checkAlert(false, "나이가 음수임.");
      return false;
    }

    props.checkAlert(true);
    return true;
  };

  const nameChangeHandler = (e) => setName(e.target.value);
  const ageChangeHandler = (e) => setAge(e.target.value);

  return (
    <form onSubmit={submitHandler} className="form">
      <label className="nameLabel">UserName</label>
      <input type="text" value={name} onChange={nameChangeHandler}></input>

      <label className="ageLabel">Age</label>
      <input type="number" value={age} onChange={ageChangeHandler}></input>

      <button>Add User</button>
    </form>
  );
}

export default ShowForm;
