// Массив всех кнопок
const buttons = [
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4"),
    document.getElementById("5"),
    document.getElementById("6"),
    document.getElementById("7"),
    document.getElementById("8"),
    document.getElementById("9")
];

// Функция для проверки, не занята ли ячейка
function isButtonFree(button) {
    return button.textContent.trim() !== "x" && button.textContent.trim() !== "o";
}

// Функция для проверки победы
function checkWin(player) {
    // Проверяем горизонтальные линии
    const winningCombinations = [
        [buttons[0], buttons[1], buttons[2]], // 1, 2, 3
        [buttons[3], buttons[4], buttons[5]], // 4, 5, 6
        [buttons[6], buttons[7], buttons[8]], // 7, 8, 9
        [buttons[0], buttons[3], buttons[6]], // 1, 4, 7
        [buttons[1], buttons[4], buttons[7]], // 2, 5, 8
        [buttons[2], buttons[5], buttons[8]], // 3, 6, 9
        [buttons[0], buttons[4], buttons[8]], // 1, 5, 9
        [buttons[2], buttons[4], buttons[6]]  // 3, 5, 7
    ];

    // Проверяем все комбинации на победу
    for (let combination of winningCombinations) {
        if (combination[0].textContent === player && 
            combination[1].textContent === player && 
            combination[2].textContent === player) {
            return true; // Если нашли выигрышную комбинацию
        }
    }
    return false; // Победы нет
}

// Обработчик клика для кнопок 1-9
buttons.forEach(button => {
    button.addEventListener("click", function() {
        if (button.textContent.trim() === "") {
            button.innerText = "x";
            button.disabled = true; // Деактивируем кнопку после клика

            // Проверка на победу для игрока "x"
            if (checkWin("x")) {
                document.getElementById("log").innerText = "Игрок X выйграл!"
                return; // Завершаем игру
            }

            // Случайный выбор для "o"
            let availableButtons = buttons.filter(isButtonFree);
            let randomButton = availableButtons[Math.floor(Math.random() * availableButtons.length)];

            if (randomButton) {
                randomButton.innerText = "o";
                randomButton.disabled = true; // Деактивируем кнопку с "o"
            }

            // Проверка на победу для игрока "o"
            if (checkWin("o")) {
                document.getElementById("log").innerText = "Игрок 0 выйграл!";
            }
        }
    });
});
