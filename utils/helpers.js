module.exports = {
<<<<<<< HEAD
  get_emoji: () => {
    const randomNum = Math.random();
    let book = "📗";

    if (randomNum > 0.7) {
      book = "📘";
    } else if (randomNum > 0.4) {
      book = "📙";
    }

    return `<span for="img" aria-label="book">${book}</span>`;
  },
};
=======
    gt: (context, limit) => {
        if(context > limit){
            return context
        }
    }
}
>>>>>>> 7c37c00917cb3c4c4e9d87a1c4a75b5f19fe4dbf
