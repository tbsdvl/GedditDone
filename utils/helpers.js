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