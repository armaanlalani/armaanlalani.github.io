// Navigation toggle functionality
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

if (navBarToggle) {
    navBarToggle.addEventListener("click", function() {
        mainNav.classList.toggle("active");
    });
}

// Close mobile menu when clicking on a nav link
if (mainNav) {
    const navLinks = mainNav.querySelectorAll('.nav-links');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
            }
        });
    });
}

// Course toggle functions
function toggleCourse(courseId) {
    const courseContent = document.getElementById(courseId);
    if (courseContent.style.display === "none" || courseContent.style.display === "") {
        courseContent.style.display = "block";
    } else {
        courseContent.style.display = "none";
    }
}

// Initialize all course contents to be hidden
document.addEventListener('DOMContentLoaded', function() {
    const allCourseContents = document.querySelectorAll('.course-content');
    allCourseContents.forEach(content => {
        content.style.display = 'none';
    });
});

function myFunction_ob() {
  var moreText = document.getElementById("more_ob");
  var btnText = document.getElementById("moreBtn_ob");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  }
}

function myFunction_th() {
  var moreText = document.getElementById("more_th");
  var btnText = document.getElementById("moreBtn_th");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  }
}

function myFunction_pm() {
  var moreText = document.getElementById("more_pm");
  var btnText = document.getElementById("moreBtn_pm");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  }
}

function myFunction_op() {
  var moreText = document.getElementById("more_op");
  var btnText = document.getElementById("moreBtn_op");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  }
}

function myFunction_ut() {
  var moreText = document.getElementById("more_ut");
  var btnText = document.getElementById("moreBtn_ut");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  }
}

function myFunction_cor() {
  var moreText = document.getElementById("more_cor");
  var btnText = document.getElementById("moreBtn_cor");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  }
}

function myFunction_td() {
  var moreText = document.getElementById("more_td");
  var btnText = document.getElementById("moreBtn_td");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  }
}

function myFunction_gai() {
  var moreText = document.getElementById("more_gai");
  var btnText = document.getElementById("moreBtn_gai");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  }
}

function myFunction_gp() {
  var moreText = document.getElementById("more_gp");
  var btnText = document.getElementById("moreBtn_gp");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  }
}

function myFunction_ia() {
  var moreText = document.getElementById("more_ia");
  var btnText = document.getElementById("moreBtn_ia");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  }
}

function myFunction_p3() {
  var moreText = document.getElementById("more_p3");
  var btnText = document.getElementById("moreBtn_p3");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  }
}

function myFunction_be() {
  var moreText = document.getElementById("more_be");
  var btnText = document.getElementById("moreBtn_be");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  }
}

function myFunction_p2() {
  var moreText = document.getElementById("more_p2");
  var btnText = document.getElementById("moreBtn_p2");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    btnText.innerHTML = "Read Less"; 
    moreText.style.display = "inline";
  } else {
    btnText.innerHTML = "Read More"; 
    moreText.style.display = "none";
  }
}

// Initialize Read More sections and prevent transition flicker on page load
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.remove('preload');
  
  // Initialize all Read More sections to be hidden
  const readMoreSections = [
    'more_ob', 'more_th', 'more_pm', 'more_op', 'more_ut', 
    'more_cor', 'more_td', 'more_gai', 'more_gp', 'more_ia', 'more_p3', 
    'more_be', 'more_p2'
  ];
  
  readMoreSections.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'none';
    }
  });

});

// Contact form submission to Google Sheets
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxql4Ce8NkX6M2T1U2aKwhMbVIg7PhPI-JfO7geZ9PxFL2US7TmAms5Oebkkp4DJaRPcg/exec'; // Replace with your Google Apps Script Web App URL

document.getElementById('contact-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitButton = form.querySelector('input[type="submit"]');
  const formStatus = document.getElementById('form-status');
  
  // Get form data
  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
    timestamp: new Date().toISOString()
  };
  
  // Disable button and show loading state
  submitButton.disabled = true;
  submitButton.value = 'SENDING...';
  
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    // With no-cors mode, we won't get a proper response, so assume success
    formStatus.style.display = 'block';
    formStatus.style.backgroundColor = '#d4edda';
    formStatus.style.color = '#155724';
    formStatus.style.padding = '1rem';
    formStatus.style.borderRadius = '8px';
    formStatus.style.marginTop = '1rem';
    formStatus.textContent = 'Message received! Thank you for reaching out. I\'ll review your message soon.';
    
    // Reset form
    form.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formStatus.style.display = 'none';
    }, 5000);
    
  } catch (error) {
    // Error
    formStatus.style.display = 'block';
    formStatus.style.backgroundColor = '#f8d7da';
    formStatus.style.color = '#721c24';
    formStatus.style.padding = '1rem';
    formStatus.style.borderRadius = '8px';
    formStatus.style.marginTop = '1rem';
    formStatus.textContent = 'Failed to submit message. Please try again later.';
    
    console.error('Form Error:', error);
  } finally {
    // Re-enable button
    submitButton.disabled = false;
    submitButton.value = 'SUBMIT';
  }
});
