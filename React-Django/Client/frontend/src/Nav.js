export default function Nav() {

  return(
  <div>
  <nav className="nav">
  <center><a href="./Home" className="site-title"><h1>Welcome to the Bank Home Page</h1></a> </center>
  <ul>
    <li><a href="./Login">Login</a></li>
    <li><a href="./Register">Register</a></li> 
    <li><a href="./Users">Registered Users</a></li>
    <li><a href="./Accounts">Accounts</a></li> 
    <li><a href="./Facecapture">FaceCapture</a></li> 
    <li><a href="./Contact">Contact</a></li>
    <li><a href="./About">About</a></li>
  </ul>
 
  </nav>
</div>
)
}