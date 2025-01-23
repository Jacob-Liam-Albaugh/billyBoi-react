import CheckIcon from "@mui/icons-material/Check";
import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../app.css";
import { Person } from "../types";

const AddPersonPage = ({
  addPersonSubmit,
}: {
  addPersonSubmit: (person: Person) => void;
}) => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoName, setPhotoName] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("Ph.D. Student");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("Purdue University");
  const [googleScholar, setGoogleScholar] = useState("");
  const [researchGate, setResearchGate] = useState("");
  const [personalGithub, setPersonalGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [researchAreas, setResearchAreas] = useState<string[]>([]);
  const navigate = useNavigate();

  const savePhoto = async (photo: File) => {
    const formData = new FormData();
    formData.append("photo", photo, photoName);

    try {
      const response = await fetch("/upload/photo", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload photo");
      }

      console.log("Photo uploaded successfully");
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPerson: Person = {
      photoName,
      name,
      position,
      email,
      university,
      googleScholar,
      researchGate,
      personalGithub,
      linkedin,
      researchAreas,
    };
    addPersonSubmit(newPerson);
    if (photo) {
      savePhoto(photo);
    }
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Person added successfully
    </Alert>;
    navigate("/people");
  };
  return (
    <section>
      <h1 className="text-center text-2xl font-bold">Add Person</h1>
      <div className="container m-auto max-w-2xl py-24">
        <form className="selector" onSubmit={submitForm}>
          <div className="mb-4">
            <label>Name</label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. John Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* <div className="mb-4">
            <label>Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              className="border rounded w-full py-2 px-3 mb-2"
              onChange={(e) => {
                setPhoto(e.target.files?.[0] || null);
                setPhotoName(e.target.files?.[0]?.name || "");
              }}
            />
          </div> */}

          <div className="mb-4">
            <FormControl
              variant="filled"
              sx={{ color: "white", width: "100%" }}
            >
              <InputLabel sx={{ color: "white" }} id="position-label">
                Position
              </InputLabel>
              <Select
                className="selector"
                sx={{ color: "#b3cfe5" }}
                labelId="position-label"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                autoWidth
                label="Position"
              >
                <MenuItem value="Postdoctoral Researcher">Postdoc</MenuItem>
                <MenuItem value="Ph.D. Student">Ph.D. Student</MenuItem>
                <MenuItem value="Master Student">Master Student</MenuItem>
                <MenuItem value="Undergraduate Student">
                  Undergraduate Student
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mb-4">
            <label>University</label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Purdue University"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label>Email</label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. johndoe@purdue.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label>Google Scholar</label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. https://scholar.google.com/citations?user=1234567890"
              value={googleScholar}
              onChange={(e) => setGoogleScholar(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label>Research Gate</label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. https://www.researchgate.net/profile/John_Doe"
              value={researchGate}
              onChange={(e) => setResearchGate(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label>Personal Github</label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. https://github.com/JohnDoe"
              value={personalGithub}
              onChange={(e) => setPersonalGithub(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label>Linkedin</label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. https://www.linkedin.com/in/JohnDoe"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label>Research Areas</label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Machine Learning, Deep Learning, etc"
              required
              value={researchAreas}
              onChange={(e) => {
                const areasArray = e.target.value
                  .split(",")
                  .map((area) => area.trim());
                setResearchAreas(areasArray);
              }}
            />
          </div>
          <div>
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Person
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddPersonPage;
