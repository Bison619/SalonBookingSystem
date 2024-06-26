/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId)
  
    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        // Show navbar
        nav.classList.toggle('showa')
  
        // Change icon
        toggle.classList.toggle('bx-x')
  
        // Add padding to body
        bodypd.classList.toggle('body-pd')
  
        // Add padding to header
        headerpd.classList.toggle('body-pd')
  
        // Fix the toggle after click
        if (nav.classList.contains('showa')) {
          toggle.style.position = 'fixed'
        } else {
          toggle.style.position = 'relative'
        }
      })
    }
  }
  
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
