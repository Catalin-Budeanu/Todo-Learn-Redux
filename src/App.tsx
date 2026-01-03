import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Todo from './components/Todo';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/login" element={<Navigate to="/auth" replace />} />

        <Route path="/auth" element={<Auth />} />

        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <Todo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
