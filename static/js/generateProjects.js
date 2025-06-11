fetch("static/json/projects.json")
.then(response => response.json())
.then(data => {
    const container = document.getElementById("contentDiv");
    console.log(data)
    data.forEach(project => {
        const div = document.createElement("div");
        div.classList.add("project");
        div.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <small>${project.year}</small>
        `;
        container.appendChild(div);
    });
})
.catch(error => console.error("Error loading JSON:", error));
