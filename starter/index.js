// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// // Get the <h1> element and its target text
// const h1 = document.querySelector("h1");
// const targetText = h1.dataset.value;

// // Generate a random string of the same length as the target text
// let initialText = "";
// for (let i = 0; i < targetText.length; i++) {
//   initialText += letters[Math.floor(Math.random() * 26)];
// }

// // Set the initial text of the <h1> element
// h1.innerText = initialText;

// // Add the mouseover event listener to animate the text
// h1.onmouseover = event => {
//   let iterations = 0;

//   const interval = setInterval(() => {
//     event.target.innerText = event.target.innerText.split("")
//       .map((letter, index) => {
//         if(index < iterations) {
//           return targetText[index];
//         }

//         return letters[Math.floor(Math.random() * 26)];
//       })
//       .join("");

//     if(iterations >= targetText.length){
//       clearInterval(interval);
//     }
//     iterations += 1 / 3;
//   }, 30);
// };

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Get the <h1> element and its target text
const h1 = document.querySelector("h1");
const targetText = h1.dataset.value;

// Generate a random string of the same length as the target text
let initialText = "";
for (let i = 0; i < targetText.length; i++) {
  initialText += letters[Math.floor(Math.random() * 26)];
}

// Set the initial text of the <h1> element
h1.innerText = initialText;

// Add the mouseover event listener to animate the text
h1.onmouseover = event => {
  let iterations = 0;

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
      .map((letter, index) => {
        if(index < iterations) {
          return targetText[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if(iterations >= targetText.length){
      clearInterval(interval);
      setTimeout(() => {
        window.location.href = "index2.html"; // change the URL to your desired blank white page
      }, 1000); // wait for 1 second before redirecting
    }
    iterations += 1 / 3;
  }, 30);
};
