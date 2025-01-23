import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <Alert variant="outlined" severity="error">
        <AlertTitle>404 Not Found</AlertTitle>
        This page does not exist
      </Alert>
      <Button
        variant="outlined"
        sx={{
          color: "#f2f2f2",
          backgroundColor: "#19324D",
          borderColor: "#2D5886",
          borderWidth: "1px",
          borderStyle: "solid",
          boxShadow: "0 0 5px 0 #2D5886",
          borderRadius: "5px",
          padding: "0.5rem 1rem",
          margin: "1rem 2.5rem",
          textDecoration: "none",
        }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
    </section>
  );
};

export default NotFoundPage;
