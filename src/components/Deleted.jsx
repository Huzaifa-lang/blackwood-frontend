import React, { useEffect, useState } from 'react';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import { Search, Menu, Phone, Twitter } from 'lucide-react';

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

  <>
  <Navbar
    expand="lg"
    className={`fixed-top border-b border-transparent font-jakarta transition-all duration-300  ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}
   style={{paddingTop: "30px", paddingBottom: "30px"}}
  >
    <Container className="flex justify-between items-center">
      {/* Desktop Left */}
        
      {/* Mobile Left - Hamburger */}
      <div className="flex  items-center space-x-12 ">
        <Menu className={`${isScrolled ? 'text-greenCustom' : 'text-white'} text-xl cursor-pointer `} onClick={handleShow} size={28} />
        <Search
          className={`${isScrolled ? 'text-greenCustom' : 'text-white'} cursor-pointer`}
          size={28}
        />
      </div>

      {/* <div className="hidden md:flex items-center space-x-12">
        <Search
          className={`${isScrolled ? 'text-greenCustom' : 'text-white'} cursor-pointer`}
          size={28}
        />
        <a
          href="#property"
          className={`${isScrolled ? 'text-black' : 'text-white'} text-custom12 tracking-wider no-underline border-b border-transparent hover:border-black transition-all duration-300 uppercase font-bold`}
        >
          list a property
        </a>
        <a
          href="#services"
          className={`${isScrolled ? 'text-black' : 'text-white'} text-custom12 tracking-wider no-underline border-b border-transparent hover:border-black transition-all duration-300 uppercase font-bold`}
        >
          contact
        </a>
      </div> */}


      {/* Center Logo */}
      <Navbar.Brand href="/" className=''>
        <img
          src="/static/logo_white-f2e74f1e2d3757d5ccb6593bdc623ea0.svg"
          alt="logo"
          className="h-8"
        />
    
      </Navbar.Brand>

      {/* Right side */}
      <div className="flex items-center space-x-12 ">
        <div className=" md:flex items-center  justify-center space-x-12 ">
          <button className='bg-greenCustom py-[10px] px-[25px] text-custom12 tracking-wider font-bold uppercase min-w-[113px] text-white'>Pakistan</button>
          <button className='bg-greenCustom py-[10px] px-[25px] text-custom12 tracking-wider font-bold uppercase min-w-[113px] text-white'>Dubai</button>
        </div>
        {/* <a href="https://wa.me/97148762333" target="_blank" rel="noopener noreferrer">
          <Twitter
            className={`${isScrolled ? 'text-greenCustom' : 'text-white'} cursor-pointer`}
            size={28}
          />
        </a> */}
        {/* <a href="tel:+97148762333" className="md:hidden">
          <Phone
            className={`${isScrolled ? 'text-greenCustom' : 'text-white'} cursor-pointer`}
            size={28}
          />
        </a> */}
      </div>
    </Container>
  </Navbar>

  {/* Bootstrap Offcanvas for mobile full-screen menu */}
  <Offcanvas
    show={show}
    onHide={handleClose}
    placement="start"
    className="w-full"
    backdrop="true"
  >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title className="text-lg" >
        Menu
      </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body
      className="flex flex-col items-center justify-center space-y-4"
      style={{ fontFamily: 'Lucida Sans, sans-serif' }}
    >
      <Nav.Link href="#property" onClick={handleClose} className="text-gray-700 text-xl">
        Property
      </Nav.Link>
      <Nav.Link href="#services" onClick={handleClose} className="text-gray-700 text-xl">
        Services
      </Nav.Link>
      <Nav.Link href="#about" onClick={handleClose} className="text-gray-700 text-xl">
        About
      </Nav.Link>
      <Nav.Link href="#contact" onClick={handleClose} className="text-gray-700 text-xl">
        Contact
      </Nav.Link>
    </Offcanvas.Body>
  </Offcanvas>
</>



  );
};

export default CustomNavbar;
