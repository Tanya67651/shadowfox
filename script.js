const sidemenu = document.querySelector('#sidemenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
function openmenu(){
   sidemenu.style.transform = 'translateX(-16rem)';
}

function closemenu(){
   sidemenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
   if(scrollY > 50) {
    navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 
      'shadom-sm'); 
      navLinks.classList.remove('bg-white', 'shadom-sm', 'bg-opacity-50' );  
   } else{
      navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 
      'shadom-sm');  
       navLinks.classList.add('bg-white', 'shadom-sm', 'bg-opacity-50' );  
   }
})

// Light mode Dark mode 
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia
// ('(prefers-color-scheme: dark)').matches)) {
//    document.documentElement.classList.add('dark')
// } else {
//    document.documentElement.classList.remove('dark')
// }

// function toggleTheme(){
//    document.documentElement.classList.toggle('dark'); 

//  if(document.documentElement.classList.contains('dark')){
//    localStorage.theme = 'dark';
//  } else{
//    localStorage.theme = 'light';
//  }
// }