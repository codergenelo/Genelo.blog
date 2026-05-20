function goBlog() {
  window.location.href = "blog.html";
}

function goHome() {
  window.location.href = "index.html";
}

// Blog data
const blogs = [
  {
    title: "Genelo AI Revolution",
    desc: "AI is changing everything in web development."
  },
  {
    title: "Future of Coding",
    desc: "Developers will work with AI more than ever."
  },
  {
    title: "Smart Web Apps",
    desc: "Modern apps are faster and smarter."
  }
];

// Load blogs
function loadBlogs(data = blogs) {
  const container = document.getElementById("blogList");
  if (!container) return;

  container.innerHTML = data.map(b => `
    <div class="card">
      <h3>${b.title}</h3>
      <p>${b.desc}</p>
    </div>
  `).join("");
}

// Search function
function searchBlog() {
  const value = document.getElementById("search").value.toLowerCase();

  const filtered = blogs.filter(b =>
    b.title.toLowerCase().includes(value)
  );

  loadBlogs(filtered);
}

// Auto load on blog page
loadBlogs();
