(function() {
  const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars"
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    },
    {
      quote:
        "The solution is to gradually become free of societal rewards and learn how to substitute for them rewards that are under one's own powers. This is not to say that we should abandon every goal endorsed by society; rather, it means that, in addition to or instead of the goals others use to bribe us with, we develop a set of our own.",
      author: " Mihaly Csikszentmihalyi"
    },
    {
      quote:
        "There's a rule in acting called, \"Don't play the result.\" If you have a character who's going to end up in a certain place, don't play that until you get there. Play each scene and each beat as it comes. And that's what you do in life: You don't play the result.",
      author: " Michael J. Fox"
    },
    {
      quote:
        "In these matters the only certainty is that nothing is certain.",
      author: " Pliny the Elder"
    },
    {
      quote:
        "Inside myself is a place where I live all alone and that's where you renew your springs that never dry up.",
      author: " Pearl Buck"
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();