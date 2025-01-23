import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ButtonComponent = ({ text, path }: { text: string; path: string }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      sx={{
        color: "#f2f2f2",
        transition: "color 0.01s ease",
        textDecoration: "none",
        backgroundColor: "#19364d",
        borderColor: "#2d5e86",
        borderWidth: "1px",
        borderStyle: "solid",
        boxShadow: "0 0 5px 0 #2d5e86",
        borderRadius: "5px",
        padding: "0.5rem 1rem",
        margin: "1rem 2.5rem",
      }}
      onClick={() => navigate(path)}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
