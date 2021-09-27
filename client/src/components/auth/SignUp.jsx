import { Auth } from 'aws-amplify';

export default function SignUp({ updateFormState, formState, handleChange }) {
  async function signUp() {
    const { username, email, password } = formState;
    await Auth.signUp({ username, password, attributes: { email } });
    updateFormState(() => ({ ...formState, formType: 'confirmSignUp' }));
  }

  return (
    <>
      <button onClick={() => updateFormState(() => ({ ...formState, formType: 'signIn'}))}>Sign In</button>
      <br />
      <input name="username" onChange={handleChange} placeholder="username" />
      <input name="password" type="password" onChange={handleChange} placeholder="password" />
      <input name="email" onChange={handleChange} placeholder="email" />
      <button onClick={signUp}>Sign Up</button>
    </>
  );
}
