import { useNavigate } from "react-router-dom";

function ParentLogin() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Parent Login</h2>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button onClick={() => navigate("/parent/dashboard")}>
        Login
      </button>
    </div>
  );
}

export default ParentLogin;