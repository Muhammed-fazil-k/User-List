import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import "./UserForm.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function UserForm() {
  const [list, setList] = useContext(UserContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  // const [isValid,setIsValid] =useState(true);
  const [error, setError] = useState();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    //let name = event.target[0].value;
    //let age = event.target[1].value;
    if (name.trim().length === 0 || age.trim().length === 0) {
      //setIsValid(false);
      setError({
        title:'Invalid Input',
        message:'Please enter valid name and length (non-empty values)'
      })
      return;
    }
    if (+age < 1) {
      //setIsValid(false);
      setError({
        title:'Invalid Input',
        message:'Please enter valid age(>0)'
      })
      return;
    }
    let newUser = {
      id: list.length + 1,
      name: name,
      age: age,
    };
    //setIsValid(true);
    setList([...list, newUser]);
    setAge("");
    setName("");
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const dismissHandler = ()=>{
    setError(null);
  }
  return (
    <div>
      {error && (
        <ErrorModal
        onDismiss = {dismissHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className="form-container">
        <form onSubmit={formSubmitHandler}>
          <div className="input-item">
            <label>Username</label>
            <input type="text" value={name} onChange={nameHandler} />
          </div>

          <div className="input-item">
            <label>Age(Years)</label>
            <input type="number" value={age} onChange={ageHandler} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default UserForm;
