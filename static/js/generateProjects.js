document.addEventListener('DOMContentLoaded', function() {
    fetch('static//csv/projects.csv')
        .then(response => response.text())
        .then(data => processCSV(data));
});

function processCSV(data) {
    const rows = data.split('\n');
    const projects = rows.map(row => {
        const [name, image, year, description] = row.split(',');
        return { name, image, year, description };
    });

    generateMainContent(projects);
}

function generateMainContent(projects) {
    const mainContent = document.getElementById('contentDiv');
    const gridContainer = document.createElement('ul');
    gridContainer.className = 'gridContainer';

    projects.forEach(project => {
        const gridItem = document.createElement('li');
        gridItem.className = 'gridItem';

        const descBox = document.createElement('descBox');


        const name = document.createElement('p');
        name.className = 'font28';
        name.textContent = project.name;

        const description = document.createElement('p');
        description.className = 'description font14';
        description.textContent = project.description;

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.name;

        descBox.appendChild(name);
        descBox.appendChild(description);

        gridItem.appendChild(descBox);
        gridItem.appendChild(img);

        gridContainer.appendChild(gridItem);
    });
})
.catch(error => console.error("Error loading JSON:", error));
