import React, { useEffect, useState } from 'react';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import { Search, Menu, Phone, Twitter , Instagram, Mail , MapPin, Facebook} from 'lucide-react';
import { Link } from "react-router";
import { useLocation } from "../context/LocationContext.jsx";



const CustomNavbar = () => {
  const { location, setLocation , handleLocationChange } = useLocation();

  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
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
  className={`fixed-top flex flex-col border-b border-transparent font-jakarta transition-all duration-500 ease-in-out pt-0
    ${isScrolled ? 'bg-lightWhite shadow-md translate-y-0' : 'bg-transparent -translate-y-0'}
  `}
  style={{paddingBottom: "30px" }}
>
<div className='bg-greenCustom h-8 w-full mb-4 flex items-center'    >
  <div className='h-full w-full flex items-center p-4 justify-between'>
  <div className="hidden lg:flex items-center gap-4">
  <a href="https://www.facebook.com/bBlackWoodMarketing/" target="_blank" rel="noopener noreferrer" className="h-6 w-6 transition-transform duration-300 ease-in-out hover:scale-90">
    <img src="icons8-facebook.svg" alt="Facebook" className="h-full w-full" />
  </a>
  <a href="https://www.instagram.com/blackwood_marketing/" target="_blank" rel="noopener noreferrer" className="h-6 w-6 transition-transform duration-300 ease-in-out hover:scale-90">
    <img src="icons8-instagram.svg" alt="Instagram" className="h-full w-full" />
  </a>
  <a href="https://www.tiktok.com/@blackwoodmarketing" target="_blank" rel="noopener noreferrer" className="h-6 w-6 transition-transform duration-300 ease-in-out hover:scale-90">
    <img src="icons8-tiktok.svg" alt="TikTok" className="h-full w-full" />
  </a>
  <a href="https://www.youtube.com/@BlackWoodMarketing" target="_blank" rel="noopener noreferrer" className="h-6 w-6 transition-transform duration-300 ease-in-out hover:scale-90">
    <img src="icons8-youtube.svg" alt="YouTube" className="h-full w-full" />
  </a>
</div>
<div className='flex items-center gap-4'>
    <div className='flex items-center gap-2'>
      <img src="icons8-phone.svg" alt="" className='h-6 w-6' />
      <span className='font-medium text-white text-[0.8rem]'>+923311111127</span>

    </div>
    <div className='flex items-center gap-2'>
      <img src="icons8-email-30.png" alt="" className='h-6 w-6' />
      <span className='font-medium text-white text-[0.8rem]'>info@ inspectify-sa.com</span>

    </div>
</div>
</div>  
</div>

    <Container className="flex justify-between items-center">
      {/* Desktop Left */}
        
      {/* Mobile Left - Hamburger */}
      <div className="flex  items-center justify-start space-x-2 lg:space-x-12 ">
        <Menu className={`${isScrolled ? 'text-black' : 'text-white'} text-xl cursor-pointer `} onClick={handleShow} size={28} />
             <Link to="/" className=''>
        <img
          src={`/${isScrolled ? 'Blackwoodgreenblack1.webp' : 'Blakcwoodgreenwhite1.webp'}`}
          alt="logo"
          className="h-6 md:h-12 lg:h-12"
        />
    
      </Link>

      </div>




      {/* Center Logo */}

      {/* Custom btns  */}
      <div className="flex items-center space-x-12 ">
            <div className="relative flex w-[180px] lg:w-[280px] h-8  bg-[#f0f0f2]   items-center  border border-white  rounded-lg">
      {/* Sliding indicator */}
      <div 
        className={`absolute top-[-1.5px] w-1/2 h-8 bg-greenCustom border-2 border-white  rounded-lg shadow transition-all duration-300 ease-in-out ${
          location === 'pakistan' ? 'left-[0%]' : 'left-[50%]'
        }`}
        style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
      />
      
      {/* Pakistan Button */}
      <button
        className={` flex items-center justify-center z-10 text-custom12 tracking-wider font-bold uppercase  w-[50%] cursor-pointer select-none transition-opacity  ${
          location === 'pakistan' ? 'opacity-100 text-white ' : 'opacity-70 '
        }`}
        onClick={() => handleLocationChange('pakistan')} 
      >
        Pakistan
      </button>
      
      {/* Dubai Button */}
      <button
        className={`flex items-center justify-center z-10 text-custom12 tracking-wider font-bold uppercase  w-[50%] cursor-pointer select-none transition-opacity ${

          location === 'dubai' ? 'opacity-100 text-white' : 'opacity-70'
        }`}
        onClick={() => handleLocationChange('dubai')}
      >
        Dubai
      </button>
        </div>
       
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
        MENU
      </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body
      className="flex flex-col items-start justify-start space-y-4"
      
    >
      <Link
to={`/properties-list/${location}/buy`}
  onClick={handleClose}
  className="!font-medium block !capitalize text-[1.1rem] !border-b w-full pb-2 !border-lightBlack text-black"
>
  Buy Property
</Link>
      <Link
to={`/properties-list/${location}/rent`}
  onClick={handleClose}
  className="!font-medium block !capitalize text-[1.1rem] !border-b w-full pb-2 !border-lightBlack text-black"
>
  Rent Property
</Link>

      <Link
  to="/about"
  onClick={handleClose}
  className="!font-medium block !capitalize text-[1.1rem] !border-b w-full pb-2 !border-lightBlack text-black"
>
  About Us
</Link>

      <Link
  to="/contact"
  onClick={handleClose}
  className="!font-medium block !capitalize text-[1.1rem] !border-b w-full pb-2 !border-lightBlack text-black"
>
  List Your Property
</Link>
      
    </Offcanvas.Body>
  </Offcanvas>
</>



  );
};

export default CustomNavbar;
