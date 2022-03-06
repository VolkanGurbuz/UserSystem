import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = props => {

    const [enteredUsername, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge)

    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    //which label belongs to which inputs for screen readers htmlFor
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" onChange={userNameChangeHandler} type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" onChange={ageChangeHandler} type="number"/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>);

};


export default AddUser;
