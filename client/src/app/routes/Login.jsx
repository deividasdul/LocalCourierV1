import React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Divider,
  Stack,
} from "@mui/material";

export const Login = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Paper
          elevation={12}
          sx={{
            width: "50%",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Typography
            variant={"h2"}
            color={"success"}
            align={"center"}
            gutterBottom
          >
            Login
          </Typography>
          <Stack gap={2}>
            <TextField
              color={"success"}
              required
              label={"Email"}
              placeholder="LocalCourier@gmail.com"
            >
              Email
            </TextField>
            <TextField
              color={"success"}
              required
              label={"Password"}
              placeholder="****************"
              type="password"
            >
              Password
            </TextField>
            <Button
              variant={"contained"}
              color={"success"}
              sx={{
                p: 2,
              }}
            >
              Login
            </Button>
            <Divider />
          </Stack>
        </Paper>
      </Box>
    </>
  );
};
