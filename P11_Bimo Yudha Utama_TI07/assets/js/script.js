// Menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
    // Jika di klik akan menjalankan fungsi computerchoice
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
);
function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung nilai hasil dari game
    let pilihanComputer = document.querySelectorAll("#result");

    // buat array pilihan untuk computer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk computer
    pilihanComputer.innerHTML =
        choices[Math.round(Math.random() * choices.lenght)];
    pilihanComputer = pilihanComputer.innerHTML;

    // Jika pilihan computer dan pilihan user sama (draw)
    if (pilihanUser == pilihanComputer) {
        alert("DRAW");
    }

    // Jika pilihan user yang menang 
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("YOU WIN");
    } else if (pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("YOU WIN");
    } else if (pilihanUser == "Scissors" && pilihanComputer == "Paper") {
        alert("YOU WIN");
    }

    // JIka pilihan computer menang
    if (pilihanUser == "Rock" && pilihanComputer == "Paper") {
        alert("COMPUTER WIN");
    } else if (pilihanUser == "Paper" && pilihanComputer == "Scissors") {
        alert("COMPUTER WIN");
    } else if (pilihanUser == "Scissors" && pilihanComputer == "Paper") {
        alert("COMPUTER WIN");
    }

}