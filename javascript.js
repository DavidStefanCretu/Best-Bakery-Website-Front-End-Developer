function Message(text)
{
    alert(text);
}

const getUserSelectedText = () =>{
    return window.getSelection().toString();
}

window.onscroll = () =>{
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){
        return ("You are at the bottom of the page!")
    }
}

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.cookie-consent-modal');
  const acceptBtn = document.querySelector('.btn.accept');
  const cancelBtn = document.querySelector('.btn.cancel');


  function showModal() {
      modal.style.display = 'flex';
  }


  function hideModal() {
      modal.style.display = 'none';
  }


  showModal();


  acceptBtn.addEventListener('click', function() {

      hideModal();
      console.log('Cookies accepted');
  });

  cancelBtn.addEventListener('click', function() {

      hideModal();
      console.log('Cookies declined');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.nav-link');


  function highlightActiveLink() {
      links.forEach(link => {
          if (link.href === window.location.href) {
              link.classList.add('active');
          } else {
              link.classList.remove('active');
          }
      });
  }


  highlightActiveLink();

 
  links.forEach(link => {
      link.addEventListener('click', function() {
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('infoForm');

  
  function displayMessage(message) {
      alert(message);
  }


  form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      displayMessage('Information submitted!!!');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  function displayMessage(message) {
      alert(message);
  }

  const submitButton = document.querySelector('input[type="button"]');
  submitButton.addEventListener('click', function() {
      displayMessage('Answers submitted');
  });
});



function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.details').forEach(detail => {
        detail.style.display = 'none';
    });
});

