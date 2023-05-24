import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Aut from '../../src/containers/AuthForm';
import TextField from '@mui/material/TextField';
function GetAuth() {
    const divStyle = {
    };
    return (
        <form>
            <div>
                <TextField
                id="outlined-password-input"
                label="Login"
                type="text"
                autoComplete="current-password"
                />
                <p></p>
                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                />
                <p></p>
                <Button style={{backgroundColor: '#145ea8'}} href='E:\Lab\src\index.html'>Login</Button>
            </div>
        </form>
    );
  }
  export default GetAuth;
  ReactDOM.createRoot(document.querySelector("#auth")).render(
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <Aut />
      </StyledEngineProvider>
    </React.StrictMode>
  );