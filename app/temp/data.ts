
const des = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`



const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`

export const loggedUser = { id: 1, name: 'Johan Doe', email: '@Johan Doe', image: '/02.jpg', about: des, profileCompleted: 70.0 }

export const peopleToFollow = [
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    isVerified: false,
    profileUrl: "/05.jpg"
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    isVerified: true,
    profileUrl: "/03.jpg"
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bobbrown@example.com",
    isVerified: true,
    profileUrl: "/04.jpg"
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charliedavis@example.com",
    isVerified: false,
    profileUrl: "/08.jpg"
  },
  {
    id: 6,
    name: "Diana Evans",
    email: "dianaevans@example.com",
    isVerified: true,
    profileUrl: "/07.jpg"
  }
];


export const teams = [
  { id: 1, name: 'Team 1', url: '/marketplace.png' },
  { id: 2, name: 'Team 2', url: '/marketplace-1.png' },
  { id: 3, name: 'Team 3', url: '/marketplace-2.png' }
];



const generateImageUrls = (count: number) => {
  return Array.from({ length: count }, (_, index) => {
    const paddedIndex = String(index + 1).padStart(2, '0');
    return `/${paddedIndex}.jpg`;
  });
};

export const comments = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  name: `Commenter ${index + 1}`, 
  url: generateImageUrls(6)[index],
  datePosted: new Date(),
  post:`Comment ${index +1}`
}));

export const logged_user_posts = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`, 
  url: generateImageUrls(8)[index],
  description: description,
  isVerified: Math.random() > 0.5,
  datePosted: new Date(),
  likes: Math.floor(Math.random() * 100),
  comments: comments.slice(0, Math.floor(Math.random() * 6)), 
  is_commnet_allowed:  Math.random() > 0.5,
}));


const getRandomDateWithinPastDays = (days:number) => {
  const now = new Date();
  const pastDate = new Date(now);
  pastDate.setDate(now.getDate() - Math.floor(Math.random() * days));
  return pastDate; 
}; 

export const friend_list = Array.from({length:100},(_,index)=> ({
  id:index+1,
  name: `User ${index+1}`,
  url:generateImageUrls(8)[index % 8], 
  friendId: Math.floor(Math.random() *8) +1,
  isActive: getRandomDateWithinPastDays(3)
}))