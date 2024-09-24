import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function  BasicExample() {
  return (
    <>
    
    
     <Navbar expand="lg" className="bg-body-white">
      <Container>
        <Navbar.Brand href="#home" className="logo">TOOTH <span className="logo-clr">SY</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="li" href="#home">Home</Nav.Link>
            <Nav.Link className="li" href="#link">Services</Nav.Link>
            <Nav.Link className="li" href="#link">About</Nav.Link>
            <Nav.Link className="li" href="#link"> Doctors</Nav.Link>
            <Nav.Link className="li" href="#link">Testimonials</Nav.Link>
            <Nav.Link className="li" href="#link"> Blog</Nav.Link>
            <Nav.Link className="li" href="#link"> Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className='main'>
                <div>
               <p className='parah'> Welcome To Toothsy</p>
                <h1 className='heading'> We Care For Your Smile</h1>
                <p className='div-1'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod modi, eius minus hic illum perspiciatis! Voluptate facere tempore, libero enim fugit, temporibus non dolor nostrum iure ad. Dolorem, explicabo!</p>
                <button className='btn-contact'> contact Us</button>
</div>
<div>
    <img src="img/bg-1.jpg" alt="" />
</div>

     </div> 

</>

  );
}

export default BasicExample;