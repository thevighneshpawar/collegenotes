var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// navbar


  const navLinks = document.getElementById('company-links');
  const togglebtn = document.getElementById('nav-toggle');
  // console.log('Button clicked!');
  togglebtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
  });

  // Function to toggle a specific dropdown by ID
function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId + "Dropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    closeAllDropdowns(); // Close all other open dropdowns
    dropdown.style.display = "block";
  }
}

// drop2

function toggleDropdown1(dropdownId) {
  var dropdown = document.getElementById(dropdownId + "Dropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    // closeAllDropdowns(); // Close all other open dropdowns
    dropdown.style.display = "block";
  }
}

// Function to close all open dropdowns
function closeAllDropdowns() {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.style.display === "block") {
      openDropdown.style.display = "none";
    }
  }
}

// Close all dropdowns when clicking outside of them
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    closeAllDropdowns();
  }
}
