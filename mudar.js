
// 1ª Função (Ela altera o estado Ativo/Desativo)
function toggleMenu() {
    var menuToggle = document.querySelector('.toggle'); // Cria uma variável e seleciona classe (.toggle)
    var links =document.querySelector('.links'); // Cria uma variável e seleciona classe (.links)
    menuToggle.classList.toggle('active') // Troca o estado da classe (.toggle) para ativo
    links.classList.toggle('active') // Troca o estado da classe (.links) para ativo
}