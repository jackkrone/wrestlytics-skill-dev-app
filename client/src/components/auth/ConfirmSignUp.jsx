import React from 'react';
import { Auth } from 'aws-amplify';

export default function ConfirmSignUp({ updateFormState, formState, handleChange }) {
  async function confirmSignUp() {
    const { username, authCode } = formState;
    await Auth.confirmSignUp(username, authCode);
    updateFormState(() => ({ ...formState, formType: 'signIn' }));
  }

  return (
    <>
      <input name="authCode" onChange={handleChange} placeholder="confirmation code" />
      <button onClick={confirmSignUp}>Confirm Sign Up</button>
    </>
  );
}
