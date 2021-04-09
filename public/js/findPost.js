const findPostFormHandler = async (event) => {
    event.preventDefault();

const findAJob = document.querySelector('.find-job').value.trim();
const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  const postAJob = document.querySelector('.post-job').value.trim();


  if (findAJob && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/api/jobs');
    } else {
      alert(response.statusText);
    }
  };


  if (postAJob && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }};

document
  .querySelector('.find-job')
  .addEventListener('click', findPostFormHandler);

document
  .querySelector('.post-job')
  .addEventListener('click', findPostFormHandler);