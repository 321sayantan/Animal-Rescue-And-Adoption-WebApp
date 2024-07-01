// toaster variants
export const toasterVariants = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

export const petCategList = [
  'Cat',
  'Dog',
  'Fish',
  'Birds',
  'Amphibians',
  'Guinea Pig',
  'Horse',
  'Rabbit',
  'Chameleon',
  'Snake',
  'Turtle',
  'Hamster',
  'Chicken',
  'Rats',
  'Cow',
  'Ferret',
  'Goat',
  'Sheep',
  'Mammals'
]

export const rescueCategList = [
  'Cat',
  'Dog',
  'Fish',
  'Birds',
  'Amphibians',
  'Guinea Pig',
  'Horse',
  'Rabbit',
  'Chameleon',
  'Snake',
  'Turtle',
  'Hamster',
  'Chicken',
  'Rats',
  'Cow',
  'Rodent',
  'Goat',
  'Sheep',
  'Elephant',
  'Mammals'
]

export const location = [
  {
    _id: '1',
    address: "Address 1",
    lat: 59.955413,
    lng: 30.337844,
  },
  {
    _id: '2',
    address: "Address 2",
    lat: 59.824465,
    lng: 30.180211,
  },
  {
    _id: '3',
    address: "Address 3",
    lat: 59.724465,
    lng: 30.0801211,
  },
];


export const rescue_works = [
  {
    date_captured: 'Aug 1, 2021',
    src: 'https://images.pexels.com/photos/5487067/pexels-photo-5487067.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1'
  },
  {
    date_captured: 'Jan 6, 2021',
    src: 'https://images.pexels.com/photos/5486952/pexels-photo-5486952.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1'
  },
  {
    date_captured: 'Jan 12, 2022',
    src: 'https://images.pexels.com/photos/5486958/pexels-photo-5486958.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1'
  },
  {
    date_captured: 'Mar 30, 2021',
    src: 'https://images.pexels.com/photos/5486957/pexels-photo-5486957.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1'
  },
  {
    date_captured: 'Aug 21, 2023',
    src: 'https://images.pexels.com/photos/1774927/pexels-photo-1774927.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1'
  },
  {
    date_captured: 'Feb 28, 2021',
    src: 'https://images.pexels.com/photos/16209069/pexels-photo-16209069/free-photo-of-rescue-dog-on-footpath.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1'
  },
  {
    date_captured: 'Oct 31, 2023',
    src: 'https://images.pexels.com/photos/20499824/pexels-photo-20499824/free-photo-of-little-rodent-on-a-rock.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1'
  },
  {
    date_captured: 'Apr 25, 2022',
    src: 'https://images.pexels.com/photos/5487072/pexels-photo-5487072.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1'
  },
  {
    date_captured: 'Dec 25, 2023',
    src: 'https://images.pexels.com/photos/20507445/pexels-photo-20507445/free-photo-of-child-with-kitten.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1'
  },
  {
    date_captured: 'Dec 3, 2023',
    src: 'https://images.pexels.com/photos/5486951/pexels-photo-5486951.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1'
  },
  {
    date_captured: 'Jun 17, 2021',
    src: 'https://images.pexels.com/photos/7945944/pexels-photo-7945944.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1'
  },
];


export const rescuePosts = [
  {
    _id: '1',
    vet_category: 'Dog',
    image: 'https://images.pexels.com/photos/16209069/pexels-photo-16209069/free-photo-of-rescue-dog-on-footpath.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1',
    address: '321/4/E, ABC Street, Alinagar, Noida, Delhi',
    vet_health_status: ['Needs medical attention']
  },
  {
    _id: '2',
    vet_category: 'Rabbit',
    image: 'https://images.pexels.com/photos/7945944/pexels-photo-7945944.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1',
    address: '12, Ballygaunge Palace, Park Street, Kolkata',
    vet_health_status: ['Vaccinated']
  },
  {
    _id: '3',
    vet_category: 'Rodent',
    image: 'https://images.pexels.com/photos/20499824/pexels-photo-20499824/free-photo-of-little-rodent-on-a-rock.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1',
    address: '41/S, Camac Street, Kakurgachi, Kolkata',
    vet_health_status: ['Needs medical attention', 'heavily-injured']
  },
  {
    _id: '4',
    vet_category: 'Cat',
    image: 'https://images.pexels.com/photos/20507445/pexels-photo-20507445/free-photo-of-child-with-kitten.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1',
    address: '331, BE Crossing More, Cossipor Bazar, Ludhiana, Punjab',
    vet_health_status: ['Vaccinated', 'heavily-injured']
  }
]

export const adoptPosts = [
  {
    _id: '1',
    vet_name: 'Jimmy',
    vet_category: 'Dog',
    image: 'https://images.pexels.com/photos/16209069/pexels-photo-16209069/free-photo-of-rescue-dog-on-footpath.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1',
    address: '321/4/E, ABC Street, Alinagar, Noida, Delhi',
  },
  {
    _id: '2',
    vet_name: 'Poppy',
    vet_category: 'Rabbit',
    image: 'https://images.pexels.com/photos/7945944/pexels-photo-7945944.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1',
    address: '12, Ballygaunge Palace, Park Street, Kolkata',
  },
  {
    _id: '3',
    vet_name: 'Moly',
    vet_category: 'Rodent',
    image: 'https://images.pexels.com/photos/20499824/pexels-photo-20499824/free-photo-of-little-rodent-on-a-rock.jpeg?auto=compress&cs=tinysrgb&w=650&h=400&dpr=1',
    address: '41/S, Camac Street, Kakurgachi, Kolkata',
  },
]

export function maxDateFinder() {
  var dtToday = new Date();

  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10)
    month = '0' + month.toString();
  if (day < 10)
    day = '0' + day.toString();
  var maxDate = year + '-' + month + '-' + day;

  return maxDate;
}

export function loadGoogleMapsScript(apiKey) {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
};