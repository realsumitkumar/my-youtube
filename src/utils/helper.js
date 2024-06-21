// Arrays of common Indian first names and last names
const firstNames = [
  "Aarav",
  "Vihaan",
  "Aditya",
  "Sai",
  "Reyansh",
  "Aryan",
  "Vivaan",
  "Advik",
  "Ayaan",
  "Krishna",
  "Ananya",
  "Aaradhya",
  "Saisha",
  "Anika",
  "Myra",
  "Isha",
  "Pari",
  "Saanvi",
  "Avni",
  "Aisha",
  "Arjun",
  "Aryan",
  "Rudra",
  "Kabir",
  "Veer",
  "Ahaan",
  "Pranav",
  "Atharva",
  "Dhruv",
  "Shaurya",
  "Tanishq",
  "Kavya",
  "Aadhya",
  "Avni",
  "Mahi",
  "Siya",
  "Amaira",
  "Sneha",
  "Prisha",
  "Anvi",
];

const lastNames = [
  "Patel",
  "Sharma",
  "Verma",
  "Gupta",
  "Singh",
  "Kumar",
  "Mehta",
  "Shah",
  "Jain",
  "Chauhan",
  "Reddy",
  "Nair",
  "Iyer",
  "Roy",
  "Sen",
  "Das",
  "Mukherjee",
  "Chatterjee",
  "Dutta",
  "Goswami",
];

// Function to generate a single random Indian name
export default function generateRandomIndianName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

// Array of random comments or phrases
const comments = [
  "Great video, really helpful!",
  "Awesome content, loved it!",
  "Interesting topic, well explained.",
  "Very informative, thanks!",
  "Enjoyed watching this, good job!",
  "Helped me understand better, thanks a lot!",
  "Looking forward to more such content.",
  "Keep up the good work!",
  "Fantastic presentation, clear and concise.",
  "This is exactly what I needed, thanks!",
  "Impressive work, keep it up!",
  "Brilliant explanation, easy to follow.",
  "I appreciate the effort put into this.",
  "Well researched and presented.",
  "Highly recommended, worth watching!",
  "Insightful content, thank you.",
  "Clear and concise, thanks for sharing!",
  "Thoroughly enjoyed this, thank you!",
  "Great job, very informative.",
  "Excellent video, learned a lot!",
  "Amazing content, thank you!",
  "Helpful and well-explained.",
  "Incredible video, thanks for sharing!",
  "Very well done, thank you!",
  "This was exactly what I was looking for.",
  "Really helpful, thanks a bunch!",
  "Impressed with the quality of information.",
  "Very well explained, thank you!",
  "Detailed and informative.",
  "Thank you for this valuable information!",
  "Perfect explanation, thanks!",
  "Wonderful content, loved it!",
  "Exactly what I needed to know.",
  "Clear and insightful, thank you!",
  "Excellent presentation, thank you!",
  "This video is a gem, thank you!",
  "Well-presented and informative.",
  "Top-notch content, thank you!",
  "Well structured and informative.",
  "Helpful video, thank you!",
  "Great insights, thank you!",
  "Awesome explanation, thank you!",
  "This video exceeded my expectations.",
  "Very helpful, thank you!",
  "Superb explanation, thank you!",
  "Loved the way it was presented, thank you!",
  "Exactly what I was looking for, thanks!",
  "Thoroughly explained, thank you!",
  "Outstanding content, thank you!",
  "Excellent work, thank you!",
  "Great tutorial, thank you!",
  "This helped me a lot, thank you!",
  "Brilliant video, thank you!",
  "Helpful and concise, thank you!",
  "Great explanation, thank you!",
  "Very informative video, thank you!",
  "Enjoyed every bit of it, thank you!",
  "Highly informative, thank you!",
  "Well done, thank you!",
  "This is really helpful, thank you!",
  "Loved the content, thank you!",
  "Excellent explanation, thank you!",
  "Very well explained, thank you!",
  "Detailed explanation, thank you!",
  "Awesome video, thank you!",
  "This was very informative, thank you!",
  "Great content, thank you!",
  "Amazing explanation, thank you!",
  "Exactly what I needed, thank you!",
  "Well articulated, thank you!",
  "Informative and interesting, thank you!",
  "Loved the clarity, thank you!",
  "Well structured, thank you!",
  "Highly recommend watching, thank you!",
  "This was very helpful, thank you!",
  "Perfectly explained, thank you!",
  "Insightful and informative, thank you!",
  "Really liked this video, thank you!",
  "Thank you for this valuable content!",
  "Very useful information, thank you!",
  "This video is a must-watch, thank you!",
  "Great insights shared, thank you!",
  "Helpful tutorial, thank you!",
  "Well-presented content, thank you!",
  "Thorough explanation, thank you!",
  "Well explained and helpful, thank you!",
  "Excellent video, thank you!",
  "This is exactly what I was looking for, thank you!",
  "Great job explaining, thank you!",
  "Very insightful, thank you!",
  "Wonderful explanation, thank you!",
  "Very clear and helpful, thank you!",
  "Enjoyed learning from this, thank you!",
  "Impressed with the quality, thank you!",
  "Great video, thank you!",
  "Top-quality content, thank you!",
  "Well worth watching, thank you!",
  "This is really good, thank you!",
  "Very informative and well-explained, thank you!",
  "Excellent tutorial, thank you!",
  "Informative video, thank you!",
  "Exactly what I needed to understand, thank you!",
  "Great content, really enjoyed it, thank you!",
  "Outstanding explanation, thank you!",
  "Detailed and clear explanation, thank you!",
  "Excellent presentation, thank you!",
  "This was really helpful, thank you!",
  "Very well presented, thank you!",
  "Fantastic video, thank you!",
  "Detailed and informative, thank you!",
  "Loved the explanation, thank you!",
];

// Function to generate a random comment
export function generateRandomComment() {
  const randomIndex = Math.floor(Math.random() * comments.length);
  return comments[randomIndex];
}

//Function to check the number is prime
export function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//Function to find the nth prime number
export function findNthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
}
