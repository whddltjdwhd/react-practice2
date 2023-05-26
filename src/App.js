import { useState } from "react";
import ShowForm from "./Form/ShowForm";
import User from "./UserList/User";
import ShowAlert from "./Form/ShowAlert";

function App() {
  const DUMMY = [
    {
      name: "RUNE",
      age: "18",
      id: "g1",
    },
    { 
      name: "SUNGJONG",
      age: "21",
      id: "g2" 
    }
  ];

  const [users, setUsers] = useState(DUMMY);
  const [content, setContent] = useState("");

  const createData = (inputData) => {
    setUsers((prevData) => {
      return [inputData, ...prevData];
    });
  };

  const checkShowAlert = (check, type) => {
    if (!check)
      setContent(<ShowAlert showFunc={showContent} AlertType={type} />);
  };

  const showContent = () => setContent("");

  console.log(users);
  return (
    <div>
      <ShowForm newData={createData} checkAlert={checkShowAlert} />
      <div>
        <User list={users} />
      </div>
      {content}
    </div>
  );
}

export default App;
