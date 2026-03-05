function Register() {
  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <select>
        <option>Parent</option>
        <option>Teacher</option>
        <option>Staff</option>
      </select>
      <button>Submit</button>
    </div>
  );
}
export default Register;