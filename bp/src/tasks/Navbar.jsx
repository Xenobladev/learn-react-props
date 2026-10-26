function Navbar({ user, notifications = 0 }) {
  return (
    <nav className="navbar">
      <span className="logo">MyApp</span>
      {/* your conditional parts go here */}
      {user ? <p>Hi, {user.name}, Log out</p> : <p>Log in</p>}
      {user && user.role === 'Admin' ? <a>Admin Dashboard</a> : null}
      {notifications > 0 ? <p>🔔 {notifications > 9 ? '9+' : notifications}</p> : null}
    </nav>
  )
}
 
export default Navbar