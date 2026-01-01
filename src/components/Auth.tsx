import { useState } from 'react';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      <div>
        <div>
          <h2>{isRegister ? 'Register' : 'Login'}</h2>
          <button type="submit"> {isRegister ? 'Register' : 'Login'}</button>
          <p onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Ai deja cont? Login' : 'Nu ai cont? Register'}
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
