import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();


// for adopt requests
export async function fetchFilteredPosts({ signal, searchTerm, max }) {
  // let url = `http://localhost:5000/adopt/filter`;
  let url = `https://adopet-backend.onrender.com/adopt/filter`;

  if (searchTerm && max) {
    // url = `http://localhost:5000/adopt/filter?search=${searchTerm}&max=${max}`;
    url = `https://adopet-backend.onrender.com/adopt/filter?search=${searchTerm}&max=${max}`;
  }
  else if (searchTerm) {
    // url = `http://localhost:5000/adopt/filter?search=${searchTerm}`;
    url = `https://adopet-backend.onrender.com/adopt/filter?search=${searchTerm}`;
  }
  else if (max) {
    // url = `http://localhost:5000/adopt/filter?max=${max}`;
    url = `https://adopet-backend.onrender.com/adopt/filter?max=${max}`;
  }

  const response = await fetch(url, {
    signal: signal
  });

  if (!response.ok) {
    const error = new Error('failed fetching the events!');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const result = await response.json();
  // console.log(result)
  return result;
}


// for rescue requests
export async function fetchRescueFilteredPosts({ signal, searchTerm, max }) {
  // let url = `http://localhost:5000/rescue/filter`;
  let url = `https://adopet-backend.onrender.com/rescue/filter`;

  if (searchTerm && max) {
    // url = `http://localhost:5000/rescue/filter?search=${searchTerm}&max=${max}`;
    url = `https://adopet-backend.onrender.com/rescue/filter?search=${searchTerm}&max=${max}`;
  }
  else if (searchTerm) {
    // url = `http://localhost:5000/rescue/filter?search=${searchTerm}`;
    url = `https://adopet-backend.onrender.com/rescue/filter?search=${searchTerm}`;
  }
  else if (max) {
    // url = `http://localhost:5000/rescue/filter?max=${max}`;
    url = `https://adopet-backend.onrender.com/rescue/filter?max=${max}`;
  }

  const response = await fetch(url, {
    signal: signal
  });

  if (!response.ok) {
    const error = new Error('failed fetching the events!');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const result = await response.json();
  // console.log(result)
  return result;
}

