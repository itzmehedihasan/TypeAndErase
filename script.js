// =============== bangla counter and color defind ===============

const counterNumber = document.querySelector(".counterNumber");

  let count = 0;
  const number = counterNumber.dataset.number; 
  const speed = counterNumber.dataset.speed; 
  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "brown", "pink", "aqua"];

  // counterJs Function
  function counterJs() {
    const digit = document.createElement("span");               // create a span tag                  
    digit.textContent = convertToBanglaNumber(count);           // convertToBanglaNumber
    digit.style.color = colors[(count - 1) % colors.length];    // Cycle through colors
    counterNumber.appendChild(digit);                           // counterNumber a digit Append kora hoyeche
  }
 
// convertToBanglaNumber Function
function convertToBanglaNumber(target) {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return target
    .toString()
    .split('')
    .map(item => banglaDigits[item])
    .join('');
}

// interval
const stop = setInterval(() => {
  counterNumber.textContent = "";    // Clear previous content
  count++;
  counterJs();

  if (count == number) {
    count=0;
  }
}, speed);