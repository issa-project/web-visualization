import {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import logo_agritrop from './images/logo_agritrop.png';
import logo_issa from './images/logo_issa.png';
import { Link } from "react-router-dom";

/* For later:
 <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
    <Button variant="outline-light">Search</Button>
</Form> */

class NavBar extends Component {

    render() {
        return (
            <Navbar bg="" variant="">
                <Navbar.Brand href=""></Navbar.Brand>
                <img className="mt-4 mr-4" id="logo_issa" src={logo_issa} alt="ISSA"></img>
                <div className="mt-4 mr-4 col-sm-3" >
                    This interface developed by the <a href="https://issa.cirad.fr/">ISSA</a>  project demonstrates the enriched
                    visualization of <a href="https://agritrop.cirad.fr/">Agritrop</a> documents.
                </div>
                <img className="mt-4 mx-3" id="logo_agritrop" src={logo_agritrop} alt="Agritrop"></img>
                <Nav className="mr-auto">
                    <ul>
                        <li>
                            <Link to="/document">Document</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                    </ul>
                </Nav>
            </Navbar>
    )}
}

export default NavBar;
