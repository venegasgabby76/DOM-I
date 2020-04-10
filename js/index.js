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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//this is the navigation bar
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



//this is the cta 

//DomIsAwesome
document.getElementsByClassName('cta-text')[0].textContent = siteContent['cta']['h1']

//logo2 
//let logo2 = document.getElementById("cta");
//logo2.setAttribute('src', siteContent ["cta"]["img-src"])


//this is going to be the middle content 

//features
document.querySelectorAll('.text-content h4')[0].textContent = siteContent['main-content']['features-h4']
document.querySelectorAll('.text-content p')[1].textContent = siteContent['main-content']['features-content']

//image
//let logo3 = document.getElementById("middle-img");
//logo3.setAttribute('src', siteContent["main-content"]["img-src"])

//about
document.querySelectorAll('.text-content h4')[2].textContent = siteContent['main-content']['about-h4']
document.querySelectorAll('.text-content p')[3].textContent = siteContent['main-content']['about-content']




//this is the bottom content 

//this is the footer content 