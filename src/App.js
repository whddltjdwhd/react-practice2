import {useState} from "react";
import ShowForm from "./Form/ShowForm";
import User from "./UserList/User";

function App() {
  const DUMMY = [{
    name: "RUNE",
    age: "18",
    id: "g1"}, 
    {name: "SUNGJONG",
    age: "21",
    id: "g2"
}];

const [users, setUsers] = useState(DUMMY);

const createData = (inputData) => {
  setUsers((prevData) => {
    return [inputData, ...prevData];
  })
}
console.log(users);
  return (
    <div>
      <ShowForm newData={createData}/>
      <User list={users}/>
    </div>
  );
}

export default App;
