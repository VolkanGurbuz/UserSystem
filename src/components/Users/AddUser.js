import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = props => {
    const [enteredUsername, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const errorHandle = () => {
        setError(null);
    };

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({title: 'valid input', message: "Please enter a valid name and age (non-empty values)"})
            return;
        }
        //number with +
        if (+enteredAge < 1) {
            setError({title: 'Invalid age', message: "Please enter a valid age"})
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        console.log(enteredUsername, enteredAge)
        setEnteredUserName('');
        setEnteredAge('');
    };

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    //which label belongs to which inputs for screen readers htmlFor
    return (
        <div>
            {error && <ErrorModel onConfirm={errorHandle} title={error.title} message={error.message}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={enteredUsername} onChange={userNameChangeHandler} type="text"/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" value={enteredAge} onChange={ageChangeHandler} type="number"/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card></div>);

};


export default AddUser;
