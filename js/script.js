// section
const dashboardContent = {
	title: "Dashboard",
	content: [
		{
			name: "Users",
			count: "1000",
			icon: "icons8-users-100.png",
		},
		{
			name: "Revenue",
			count: "$80,000",
			icon: "icons8-sales-balance-100.png",
		},
		{
			name: "Daily Hits",
			count: "280",
			icon: "icons8-statistics-100.png",
		},
	],
};

//Tags page content
const tagContent = {
	title: "Manage Tags",
	content: "Enter the Tag Name",
};

const blogPageContent = {
    title: "Blog",
    content: [
	{
		title: "The Effective Way to Use AI as a Software Developer",
		image: "ai.jpg",
		description: `In the rapidly evolving landscape of software development, Artificial Intelligence (AI) has emerged as a transformative force, offering new possibilities and efficiencies for developers. Incorporating AI into your workflow as a software developer can significantly enhance productivity, streamline processes, and open doors to innovative solutions. Here's a guide on the effective ways to leverage AI in your software development journey.

        One of the primary applications of AI in software development is automated code generation. Tools powered by machine learning algorithms can analyze patterns in your codebase, understand your coding style, and suggest or generate code snippets. This not only accelerates development but also helps reduce the likelihood of errors, allowing developers to focus on higher-level problem-solving and creative aspects of coding.`,
		author: "Joseph Moses",
		date: "22-03-2023",
	},
	{
		title: "Canoe Cruising - The Fun Part",
		image: "canoe-cruising.jpg",
		description: `One of the most enticing aspects of canoe cruising is the sheer diversity of environments you can explore. From tranquil lakes surrounded by lush forests to winding rivers that meander through picturesque landscapes, each waterway presents its own set of challenges and rewards. Paddling through these natural wonders allows you to connect with the environment in a way that few other activities can offer.

        The rhythmic sound of paddles dipping into the water creates a soothing melody that accompanies canoeists on their journey. As you glide across the water, the sense of peace and tranquility envelops you. The slow pace of canoe cruising allows for a deeper connection with the surroundings – the rustling leaves, the gentle lapping of water against the canoe, and the symphony of birdsong overhead.`,
		author: "Joseph Moses",
		date: "22-03-2023",
	},
]
}

;

// display the dashboard content with page loads
document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		// call the displayTitle and displayDashboard functions
		const { title } = dashboardContent;
		const { content } = dashboardContent;
		displayTitle(title);
		displayDashboard(content);
	}
});

// Content Replacement
document
	.getElementById("sidebarList")
	.addEventListener("click", function (event) {
		if (event.target.tagName === "li") {
			document.getElementById(
				"content1"
			).innerHTML = `<h2>${event.target.innerText}</h2><p>New content for ${event.target.innerText}</p>`;
		}
	});

// Style Alteration
const changeColorBtn = document.querySelector(".change-color-scheme");
changeColorBtn.addEventListener("click", (event) => {
	console.log("changing color");
	changeColorScheme();
});

// change the
const changeColorScheme = () => {
	document.body.style.backgroundColor = getRandomColor();
	document.body.style.color = getRandomColor();
};

// get random color
function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	console.log("color", color);
	return color;
}

// Element Creation and Deletion
function addItem() {
	const newItem = document.querySelector("#itemName").value;
	if (newItem) {
		const sidebarList = document.getElementById("sidebarList");
		const li = document.createElement("li");
		li.textContent = newItem;
		sidebarList.appendChild(li);
	}
}
// remove the items from the sidebar
function removeItem() {
	const selectedItem = prompt("Enter the item to remove:");
	if (selectedItem) {
		const sidebarList = document.getElementById("sidebarList");
		const items = sidebarList.getElementsByTagName("li");
		for (let i = 0; i < items.length; i++) {
			if (items[i].textContent === selectedItem) {
				sidebarList.removeChild(items[i]);
				break;
			}
		}
	}
}

//

// Event Handling
document.querySelector("header").addEventListener("mouseover", () => {
	alert("Welcome to the Dynamic Web Page!");
});

// get the list of all the li elements on the sidebar and use it to display the page content
document.querySelectorAll(".sidebar-list-item").forEach((li) => {
	li.addEventListener("click", (event) => {
		console.log("event", event.target.dataset.page);
		//get selected page
		const selectedPage = event.target.dataset.page;
		if (selectedPage === "dashboard") {
			const { title } = dashboardContent;
			const { content } = dashboardContent;
			displayTitle(title);
			displayDashboard(content);
		}
		if (selectedPage === "tags") {
			const { title } = tagContent;
			const { content } = tagContent;
			displayTitle(title);
			displayTagContent(content);
		}
		if (selectedPage == "blog") {
			const { title } = blogPageContent;
			const { content } = blogPageContent;
			displayTitle(title);
			displayBlogContent(content);
		}
	});
});

// display page title
const displayTitle = (title) => {
	let pageTitle = (document.querySelector("#page-title").innerText = title);
};

// display dashboard content
const displayDashboard = (content) => {
	document.getElementById(
		"page-content"
	).innerHTML = `<section class="dashboard-list-wrap">
    <div class="dashboard-box">
        <img src="./assets/images/${content[0].icon}" alt="">
        <h3>${content[0].name}</h3>
        <p>${content[0].count}</p>
    </div>
    <div class="dashboard-box">
        <img src="./assets/images/${content[1].icon}" alt="">
        <h3>${content[1].name}</h3>
        <p>${content[1].count}</p>
    </div>
    <div class="dashboard-box">
        <img src="./assets/images/${content[2].icon}" alt="">
        <h3>${content[2].name}</h3>
        <p>${content[2].count}</p>
    </div>
</section>`;
};

const displayTagContent = (content) => {
	document.getElementById(
		"page-content"
	).innerHTML = `<section class="contact-form-wrap">
    <form action="#">
        <label for="itemName"
            >${content}</label
        >
        <input type="text" name="itemName" id="itemName" />
    </form>
    <section class="buttons-wrap">
        <button onclick="addItem()">Add Item</button>
        <button onclick="removeItem()">Remove Item</button>
    </section>
</section>`;
};

const displayBlogContent = (content) => {
	let mainBox = document.getElementById("page-content");
	let blogPageWrap = document.createElement("section");
	blogPageWrap.classList.add("blog-page-wrap");
	const blogContainer = document.querySelector(".blog-container");
	console.log("blogContainer", blogContainer);
	let allBlogContent = "";
	blogPageContent['content'].forEach((blog) => {
		console.log("this blog", blog);
		allBlogContent += dashboardContentBox(blog);
	});
	blogPageWrap.innerHTML = "";
	// console.log("allBlogContent", allBlogContent);
	blogPageWrap.innerHTML = allBlogContent;
	// Remove all children
	while (mainBox.firstChild) {
		mainBox.removeChild(mainBox.firstChild);
	}

	mainBox.appendChild(blogPageWrap);
};

const dashboardContentBox = (blog) => {
	return `<section class="blog-container">
    <img class="blog-image" src="assets/images/${blog.image}" alt="">
    <div class="blog-content-wrap">
        <h2 class="blog-title">${blog.title}</h2>
        <p class="blog-description">${blog.description} </p>
        <h5>Author: ${blog.author}</h5>
        <h5 class="blog-date">Published: ${blog.date}</h>
    </div>
</section>`;
};
