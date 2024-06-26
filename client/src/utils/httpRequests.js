import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();


// for adopt requests
export async function fetchFilteredPosts({ signal, searchTerm, max }) {
  let url = `http://localhost:5000/adopt/filter`;

  if (searchTerm && max) {
    url = `http://localhost:5000/adopt/filter?search=${searchTerm}&max=${max}`;
  }
  else if (searchTerm) {
    url = `http://localhost:5000/adopt/filter?search=${searchTerm}`;
  }
  else if (max) {
    url = `http://localhost:5000/adopt/filter?max=${max}`;
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
  let url = `http://localhost:5000/rescue/filter`;

  if (searchTerm && max) {
    url = `http://localhost:5000/rescue/filter?search=${searchTerm}&max=${max}`;
  }
  else if (searchTerm) {
    url = `http://localhost:5000/rescue/filter?search=${searchTerm}`;
  }
  else if (max) {
    url = `http://localhost:5000/rescue/filter?max=${max}`;
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


// export async function createNewEvent(eventData) {
//   const response = await fetch(`http://localhost:5000/events`, {
//     method: 'POST',
//     body: JSON.stringify(eventData),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     const error = new Error('An error occurred while creating the event!');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   const { event } = await response.json();

//   return event;
// }


// export async function fetchSelectableImages({ signal }) {
//   const response = await fetch(`http://localhost:5000/events/images`, { signal });

//   if (!response.ok) {
//     const error = new Error('An error occurred while fetching the images!');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   const { images } = await response.json();

//   return images;
// }


// export async function fetchEventDetails({ id, signal }) {
//   const response = await fetch(`http://localhost:5000/events/${id}`, { signal });

//   if (!response.ok) {
//     const error = new Error('An error occurred while fetching the event!');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   const { event } = await response.json();

//   return event;
// }


// export async function deleteEvent({ id }) {
//   const response = await fetch(`http://localhost:5000/events/${id}`, {
//     method: 'DELETE',
//   });

//   if (!response.ok) {
//     const error = new Error('An error occurred while deleting the event!');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   return response.json();
// }

// export async function updateEvent({ id, event }) {
//   const response = await fetch(`http://localhost:5000/events/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({ event }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     const error = new Error('An error occurred while updating the event');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   return response.json();
// }