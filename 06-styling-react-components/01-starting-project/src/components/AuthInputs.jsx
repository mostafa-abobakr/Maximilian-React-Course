import { useState } from 'react';
import { styled } from "styled-components";
import Input from './Input';
import Button from './Button';

const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-md p-8 my-0 mx-auto rounded-lg shadow-md bg-linear-to-b from-stone-700 to-stone-800 text-white'>
      <ControlDiv>
        <Input
          title="Email"
          invalid={emailNotValid}
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <Input
          title="Password"
          invalid={passwordNotValid}
          type="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </ControlDiv>
      <div className="mt-8 flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500 transition cursor-pointer">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
        
      </div>
    </div>
  );
}
