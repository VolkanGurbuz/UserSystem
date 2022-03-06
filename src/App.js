import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {

    const [usersList, setUserList] = useState([]);
    // all elements from prev,pulls all elements
    const addUserHandler = (userName, uAge) => {
        setUserList((prevUserList) => {
            return [...prevUserList, {name: userName, age: uAge, id: Math.random().toString()}];
        });
    };


    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    );
}

export default App;
