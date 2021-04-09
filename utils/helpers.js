<<<<<<< HEAD
// module.exports = {
//   get_emoji: () => {
//     const randomNum = Math.random();
//     let book = "📗";

//     if (randomNum > 0.7) {
//       book = "📘";
//     } else if (randomNum > 0.4) {
//       book = "📙";
//     }

//     return `<span for="img" aria-label="book">${book}</span>`;
//   },
// };
=======
module.exports = {
    get_emoji: () => {
        const randomNum = Math.random();

        // Return a random emoji
        if (randomNum > 0.7) {
            return `<span for="img" aria-label="lightbulb">💡</span>`;
        } else if (randomNum > 0.4) {
            return `<span for="img" aria-label="laptop">💻</span>`;
        } else {
            return `<span for="img" aria-label="gear">⚙️</span>`;
        }
    },
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    created_at: (date) => {
        return `${new Date(date)}`
    }
};
>>>>>>> 5a6af5de19c269d86c95a6b7921d532ec35019bd
