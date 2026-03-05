import { useNavigate } from "react-router-dom";

function TeacherLogin() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Teacher Login</h2>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button onClick={() => navigate("/teacher/dashboard")}>
        Login
      </button>
    </div>
  );
}

export default TeacherLogin;