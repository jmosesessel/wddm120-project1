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

const tagContent = {
	title: "Manage Tags",
	content: "Enter the Tag Name",
};

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

// const dashboardContentBox = (content) => {
//     return `<div class="dashboard-box">
//     <img src="./assets/images/${content.icon}" alt="">
//     <h3>${content.name}</h3>
//     <p>${content.count}</p>
// </div>`
// }
