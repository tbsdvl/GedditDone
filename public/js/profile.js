const newFormHandler = async (event) => {
    event.preventDefault();
  
    const jobtitle = document.querySelector('#job-title').value.trim();
    const salary = document.querySelector('#salary').value.trim();
    const description = document.querySelector('#job-desc').value.trim();
    const city = document.querySelector('#theCity').value.trim();
    const state = document.querySelector('#state').value.trim();
  
    if (jobtitle && salary && description && city && state) {
      const response = await fetch(`/api/jobs`, {
        method: 'POST',
        body: JSON.stringify({ jobtitle, salary, description, city, state }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create job posting');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/job/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete job post');
      }
    }
  };
  
  document
    .getElementById('create-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.delete-form')
  //   .addEventListener('DELETE', delButtonHandler);
  
  
    