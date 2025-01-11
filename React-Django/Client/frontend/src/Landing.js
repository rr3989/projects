import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Home from "./Home";
import Accounts from "./Accounts";
import Register from "./Register";
import Users from "./Users";


function Landing() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <Home/>
    break;
    case "/About":
      component = <About/>
    break;
    case "/Contact":
      component = <Contact/>
      break;
    case "/Login":
      component = <Login/>
      break;
    case "/Accounts":
      component = <Accounts/>
      break;
    case "/Register":
        component = <Register/>
        break;
    case "/Users":
            component = <Users/>
            break;
        default:  
      component = <Home/>
}


  return(
  <>
  <Nav/>
  <div className="Container">{component}</div>
  </>

  )
  
}
export default Landing;
