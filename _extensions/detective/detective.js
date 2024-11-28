window.RevealDetective = function () {
  return {
    id: "RevealDetective",
    init: function (deck) {
      document.addEventListener("DOMContentLoaded", function () {
        const dectectiveBlocks = document.querySelectorAll(".detective");

        dectectiveBlocks.forEach((block) => {
          const detectedWords = block.getAttribute("data-detective-search");
          const detectedColor =
            block.getAttribute("data-detective-bg-color") || "yellow";
          const detectedCodeColor =
            block.getAttribute("data-detective-code-color") || "black";

          if (!detectedWords) return;
          console.log(detectedWords);
          const wordsArray = detectedWords
            .split(",")
            .map((word) => word.trim());

          const regex = new RegExp(`\\b(${wordsArray.join("|")})\\b`, "g");

          const pre = block.querySelector("pre");
          if (!pre) return;

          const html = pre.innerHTML;

          const highlightedHtml = html.replace(
            regex,
            `<span style="background-color: ${detectedColor};color: ${detectedCodeColor}">$1</span>`
          );

          pre.innerHTML = highlightedHtml;
        });
      });
    },
  };
};
