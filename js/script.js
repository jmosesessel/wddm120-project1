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

document.querySelector('#sidebarList li').addEventListener((event)=>{
    console.log(event.target)
})


const displayDashboard = ()=>{
    const {title} = dashboardContent 
    document.getElementById('content2').innerHTML = `<section class="dashboard-list-wrap">
    <div class="dashboard-box">
        <img src="./assets/images/icons8-users-100.png" alt="">
        <h3>Users</h3>
        <p>Count: 333</p>
    </div>
    <div class="dashboard-box">
        <img src="./assets/images/icons8-statistics-100.png" alt="">
        <h3>Revenue</h3>
        <p>Count: $877</p>
    </div>
    <div class="dashboard-box">
        <img src="./assets/images/icons8-sales-balance-100.png" alt="">
        <h3>Daily Hits</h3>
        <p>Count: $877</p>
    </div>
</section>`
}
