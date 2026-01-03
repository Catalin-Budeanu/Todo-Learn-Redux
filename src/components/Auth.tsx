import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, setLoading } from '../feature/authReducer';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;

    if (!isValidEmail(email)) {
      setErrorEmail('Invalid email address.');
      valid = false;
    }

    if (password.length < 4) {
      setErrorPassword('Password must be contain 4 numbers');
      valid = false;
    }

    if (!valid) return;

    dispatch(setLoading(true));

    const user = {
      id: Date.now(),
      name: email.split('@')[0],
      email,
    };

    localStorage.setItem('authUser', JSON.stringify(user));

    dispatch(login(user));
    dispatch(setLoading(false));

    navigate('/todo');
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            {isRegister ? 'Create an account' : 'Welcome back'}
          </h2>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorEmail) setErrorEmail('');
                }}
                placeholder="abc@gmail.com"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errorEmail ? (
                <p className="text-red-700 text-xs">{errorEmail}</p>
              ) : (
                ''
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorPassword) return setErrorPassword('');
                }}
                placeholder="Your password"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-700 text-xs">{errorPassword}</p>
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              {isRegister ? 'Register' : 'Login'}
            </button>

            <p
              onClick={() => setIsRegister((prev) => !prev)}
              className="text-sm text-center text-blue-600 cursor-pointer hover:underline mt-2"
            >
              {isRegister
                ? 'You have an account? Login'
                : "You don't have an account? Register"}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
