const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//THESE AR THE LOGOS 

let navImage = document.querySelector("#logo-img");
navImage.setAttribute('src', siteContent["nav"]["img-src"])

//logo2 

let ctaImage = document.querySelector("#cta-img")
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])


//logo3

let middleImage = document.querySelector("#middle-img")
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);





//THIS IS THE NAVIGATION BAR

  const navLinks = document.querySelectorAll('a');
  navLinks[0].textContent = siteContent['nav']['nav-item-1'];
  navLinks[1].textContent = siteContent['nav']['nav-item-2'];
  navLinks[2].textContent = siteContent['nav']['nav-item-3'];
  navLinks[3].textContent = siteContent['nav']['nav-item-4'];
  navLinks[4].textContent = siteContent['nav']['nav-item-5'];
  navLinks[5].textContent = siteContent['nav']['nav-item-6'];
  
  navLinks.forEach( (element) => {
    element.style.color = "green"
  })



//ADDING TO THE NAVBAR

//PREPEND
const newNav = document.createElement ("a"); 
newNav.textContent = "Home";
const parentElement = document.querySelector ('nav');
parentElement.prepend(newNav);
newNav.style.color = "green";

//APPEND
const newNavTwo = document.createElement ("a");
newNavTwo.textContent = "FAQ";
const newElement = document.querySelector ('nav');
newElement.append(newNavTwo);
newNavTwo.style.color = "green";



//H1 HEADING

const h1 = document.querySelector('h1');
h1.textContent = siteContent ['cta']['h1']



//BUTTON 
let mainButton = document.querySelector('button')
mainButton.innerText = "Get Started"




//this is going to be ALL the H4

//features
const h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];
h4[5].textContent = siteContent['contact']['contact-h4'];


//this is going to be ALL the PARAGRAPHS

const p = document.querySelectorAll('p');
p[0].textContent = siteContent ['main-content']['features-content'];
p[1].textContent = siteContent ['main-content']['about-content'];
p[2].textContent = siteContent ['main-content']['services-content'];
p[3].textContent = siteContent ['main-content']['product-content'];
p[4].textContent = siteContent ['main-content']['vision-content'];
p[5].textContent = siteContent ['contact']['address'];
p[6].textContent = siteContent ['contact']['phone'];
p[7].textContent = siteContent ['contact']['email'];
p[8].textContent = siteContent ['footer']['copyright']


