import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContextProvider, PrivateRoute } from 'entities/auth';
import { Main } from 'pages/main';
import { Auth } from 'pages/auth';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="login" element={<Auth/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path="app/*" element={<Main/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/app" replace={true}/>}/>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

