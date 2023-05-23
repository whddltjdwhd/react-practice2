import {useState} from "react";
import ShowForm from "./Form/ShowForm";
import UserList from "./UserList/UserList";

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
  return (
    <div>
      <ShowForm/>
      <UserList list={users}/>
    </div>
  );
}

export default App;
