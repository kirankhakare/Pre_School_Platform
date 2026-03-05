import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Later backend connect
    navigate("/admin/dashboard");
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;