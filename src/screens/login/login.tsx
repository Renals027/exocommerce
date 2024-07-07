import { Box, Button, TextField, Typography } from "@mui/material";
import { LoginStyles } from "./loginStyle";
import { useState } from "react";

export const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const validate = () => {
    if (state.email.length === 0 || state.password.length === 0) {
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validate()) {
      const payload = {
        email: state.email,
        password: state.password,
      };
      console.log("payload", payload);
    }
  };
  return (
    <Box>
      <Box sx={LoginStyles?.loginBox}>
        <Typography>Login</Typography>
        <TextField
          value={state.email}
          onChange={(e) => handleChange("email", e.target.value)}
          label="Email"
          variant="outlined"
          size="small"
        />
        <TextField
          value={state.password}
          label="Password"
          type="password"
          variant="outlined"
          size="small"
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <Button
          variant="contained"
          size="small"
          sx={{ mt: "10px", display: "block" }}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};
