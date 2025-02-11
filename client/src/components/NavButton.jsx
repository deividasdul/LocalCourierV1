import { Button } from "@mui/material";

export const NavButton = ({ href, startIcon, text }) => {
  return (
    <Button href={href} startIcon={startIcon}>
      {text}
    </Button>
  );
};
