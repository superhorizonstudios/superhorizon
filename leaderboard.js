let currentPage = 1;
const rowsPerPage = 10;

const leaderboardData = [
    { rank: 1, player: "Player1", score: 1500, game: "game1" },
    { rank: 2, player: "Player2", score: 1400, game: "game1" },
    { rank: 3, player: "Player3", score: 1300, game: "game1" },
    { rank: 4, player: "Player4", score: 1200, game: "game2" },
    { rank: 5, player: "Player5", score: 1100, game: "game2" },
    { rank: 6, player: "Player6", score: 1000, game: "game2" },
    { rank: 7, player: "Player7", score: 950, game: "game1" },
    { rank: 8, player: "Player8", score: 900, game: "game2" },
    { rank: 9, player: "Player9", score: 850, game: "game2" },
    { rank: 10, player: "Player10", score: 800, game: "game1" },
    // Add more players as needed
];

function displayLeaderboard(page) {
    const tableBody = document.querySelector("table tbody");
    const start = (page - 1) * rowsPerPage;
    const end = page * rowsPerPage;
    const rows = leaderboardData.slice(start, end);

    tableBody.innerHTML = '';

    rows.forEach((row, index) => {
        const tr = document.createElement("tr");
        if (index < 3) tr.classList.add("top-3");

        tr.innerHTML = `
            <td>${row.rank}</td>
            <td>${row.player}</td>
            <td>${row.score}</td>
            <td>${row.game}</td>
        `;
        tableBody.appendChild(tr);
    });
}

function sortTable(columnIndex) {
    const table = document.getElementById("leaderboard-table");
    const rows = Array.from(table.rows).slice(1);
    const isAscending = table.querySelectorAll("th")[columnIndex].classList.toggle("asc");
    
    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();
        const scoreA = parseInt(cellA, 10);
        const scoreB = parseInt(cellB, 10);
        return (isAscending ? scoreA - scoreB : scoreB - scoreA);
    });

    rows.forEach(row => table.appendChild(row));
}

function loadMore() {
    currentPage++;
    displayLeaderboard(currentPage);
}

function filterLeaderboard() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("table tbody tr");
    rows.forEach(row => {
        const playerName = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
        if (playerName.includes(searchQuery)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function filterByGame() {
    const selectedGame = document.getElementById("game-filter").value;
    const rows = document.querySelectorAll("table tbody tr");
    rows.forEach(row => {
        if (selectedGame === "all" || row.querySelector("td:nth-child(4)").textContent === selectedGame) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function shareLeaderboard() {
    const leaderboardUrl = window.location.href;
    window.open(`https://twitter.com/share?url=${leaderboardUrl}`, '_blank');
}

displayLeaderboard(currentPage);
