const p = document.getElementById("sayings");
const span = document.getElementById("sayer");
const btn = document.getElementById("btn");
const quotes = {
quote1: {"saying":" Don't cry because it is over, smile because it happened.", "says":"- Dr. Seuss"},
quote2: {"saying":" Start writing, no matter what. The water does not flow until the faucet is turned on.", "says":"- Louis L’Amour"},
quote3: {"saying":" The first draft is just you telling yourself the story.", "says":"- Terry Pratchett"},
quote4: {"saying":" Start before you’re ready.", "says":"- Steven Pressfield"},
quote5: {"saying":" You can always edit a bad page. You can’t edit a blank page", "says":"- Jodi Picoult"},
quote6: {"saying":" You can’t wait for inspiration. You have to go after it with a club.", "says":"- Jack London"}
}

const randomProperty = function (obj) {
    const keys = Object.keys(obj);
    const random =obj[keys[ keys.length * Math.random() << 0]];
    const saying = random.saying;
    const says = random.says;
    p.innerText = saying;
    span.innerText = says;
    console.log(saying)
    console.log(says)
};
 randomProperty(quotes)

btn.addEventListener("click", function() {
  randomProperty(quotes)
});