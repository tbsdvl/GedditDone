const newFormHandler = async (event) => {
  event.preventDefault();

  const jobtitle = document.querySelector('#job-title').value.trim();
  const salary = document.querySelector('#salary').value.trim();
  const description = document.querySelector('#job-desc').value.trim();

  if (firstname && lastname && salary && description) {
    const response = await fetch(`/api/jobs`, {
      method: 'POST',
      body: JSON.stringify({ firstname, lastname, salary, description }),
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
  .querySelector('.new-job-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.job-list')
  .addEventListener('click', delButtonHandler);
