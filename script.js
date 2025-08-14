// Blog posts data
const posts = [
  { 
    title: "The Future of AI", 
    category: "Tech", 
    date: "2025-08-01", 
    description: "Exploring AI trends in the next decade.", 
    image: "images/AI.png" 
  },
  {
    title:"Top 10 Players in Premier League 24/25",
    category: "Sports",
    date: "2025-06-01",
    description: "The Most exciting and outstanding players in the 24/25 season",
    image: "images/Players.png"
  },
  { 
    title: "Top 10 Travel Destinations", 
    category: "Travel", 
    date: "2025-07-20", 
    description: "Places you must visit this year.", 
    image: "images/TravelDestination.png" 
  },
  { 
    title: "Healthy Recipes for Summer", 
    category: "Food", 
    date: "2025-07-10", 
    description: "Delicious and healthy meals for hot days.", 
    image: "images/HealthyFood.png" 
  },

  { 
    title: "Programming Tips & Tricks", 
    category: "Tech", 
    date: "2025-06-15", 
    description: "Write cleaner and faster code.", 
    image: "images/Coding.png" 
  },
  { 
    title: "Exploring Saint-Catherine", 
    category: "Travel", 
    date: "2025-05-25", 
    description: "An adventure in the mountains of saint-catherine", 
    image: "images/Saint-catherine.png" 
  },
  { 
    title: "Quick Breakfast Ideas", 
    category: "Food", 
    date: "2025-05-12", 
    description: "Start your day with these quick meals.", 
    image: "images/Breakfast.png" 
  },
  { 
    title: "Understanding React Hooks", 
    category: "Tech", 
    date: "2025-04-30", 
    description: "A beginner’s guide to hooks.", 
    image: "images/React.png" 
  }
];


let filteredPosts = posts;
let currentPage = 1;
const postsPerPage = 3;

// DOM Elements
const postsContainer = document.getElementById("postsContainer");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("searchInput");

// Show posts on page
function displayPosts() {
  postsContainer.innerHTML = "";
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToShow = filteredPosts.slice(startIndex, endIndex);

  postsToShow.forEach(post => {
    const postCard = document.createElement("div");
    postCard.classList.add("post-card");
    postCard.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="content">
        <h2>${post.title}</h2>
        <p><small>${post.date} | ${post.category}</small></p>
        <p>${post.description}</p>
      </div>
    `;
    postsContainer.appendChild(postCard);
  });

  showPagination();
}

// Show pagination buttons
function showPagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", function () {
      currentPage = i;
      displayPosts();
    });
    pagination.appendChild(btn);
  }
}

// Filter by category
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", function () {
    const category = this.dataset.category;
    if (category === "All") {
      filteredPosts = posts;
    } else {
      filteredPosts = posts.filter(post => post.category === category);
    }
    currentPage = 1;
    displayPosts();
  });
});

// Search by title
searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  filteredPosts = posts.filter(post => post.title.toLowerCase().includes(keyword));
  currentPage = 1;
  displayPosts();
});

// Initial load
displayPosts();
