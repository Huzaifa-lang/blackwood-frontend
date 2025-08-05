import React from 'react'

function WhatsappIcon() {
  return (
  <div className="h-12 w-12 rounded-full bg-greenCustom fixed bottom-[1rem] right-[2rem] lg:bottom-[1rem] lg:right-[2rem] z-50 flex items-center justify-center shadow-lg lg:hover:animate-blink">
  <a
    href="https://wa.me/923311111127"  // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="h-8 w-8 flex items-center justify-center"
  >
    <img src="/whatsappIcon.svg" alt="WhatsApp" className="h-full w-full" />
  </a>
</div>

  )
}

export default WhatsappIcon