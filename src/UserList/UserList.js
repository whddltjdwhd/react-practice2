import User from "./User";


function UserList(props) {


    return(
        <div>
            <User list={props.list}/>
        </div>
    );
}

export default UserList;