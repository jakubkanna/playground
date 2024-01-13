import { useState } from "react";

export default function Person() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Travolta");
  const [age, setAge] = useState(18);

  const fullName = firstName + " " + lastName;

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setAge call): ", age);
    setAge(age + 1);
  };

  const handleFirstNameChange = (event) => {
    const newFirstName = event.target.value;
    setFirstName(newFirstName);
  };

  const handleLastNameChange = (event) => {
    const newLastName = event.target.value;
    setLastName(newLastName);
  };

  return (
    <>
      <CustomInput
        placeholder="First-name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <CustomInput
        placeholder="Last-name"
        value={lastName}
        onChange={handleLastNameChange}
      />

      <h1>{fullName}</h1>
      <h2>{age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

function CustomInput({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
