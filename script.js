// ==================== data-text 1 line run ======================

let text = document.querySelectorAll(".text");
let nodefromArr = Array.from(text);

// map
nodefromArr.map((item) => {
  let text1 = item.dataset.text1; 
  let text2 = item.dataset.text2;  
  let speed = item.dataset.speed;
  let startPoint = -1;
  
  function typejs() {
    if (startPoint < text1.length) {
      item.innerHTML += text1.charAt(startPoint);
      startPoint++;
      textSplit = item.innerHTML.split("");
    }else {
      textSplit.pop();
      item.innerHTML = textSplit.join("");
      if (textSplit.length == 0) {
        startPoint = 0;
      }
    }

  }

  // interval
  let stop = setInterval(() => {
    typejs();
  }, speed);
});

// ================ data-text Switch  =================

// let text = document.querySelectorAll(".text");
// let nodefromArr = Array.from(text);

// nodefromArr.map((item) => {
//   let text1 = item.dataset.text1; 
//   let text2 = item.dataset.text2; 
//   let speed = item.dataset.speed
//   let startPoint = 0; 
//   let isTyping = true; 
//   let currentText = text1; 

//   function typejs() {
//     if (isTyping) {
//       // Typing phase
//       if (startPoint < currentText.length) {
//         item.innerHTML += currentText.charAt(startPoint);
//         startPoint++;
//       } else {
//         isTyping = false; 
//       }
//     } else {
//       let textSplit = item.innerHTML.split("");
//       textSplit.pop(); 
//       item.innerHTML = textSplit.join("");
//       if (textSplit.length === 0) {
//         isTyping = true;
//         startPoint = 0;
//         // Switch between text1 and text2
//         currentText = currentText === text1 ? text2 : text1;
//       }
//     }
//   }

//   let intervalId = setInterval(typejs, speed);
  
// });

  // ============= data-text 1&2 line run ==================

  // let textElements = document.querySelectorAll(".text");

  // textElements.forEach((item) => {
  //   let text1 = item.dataset.text1;
  //   let text2 = item.dataset.text2;
  //   let speed = item.dataset.speed; 
  //   let startPoint1 = 0;
  //   let startPoint2 = 0;
  //   let isDeleting1 = false;
  //   let isDeleting2 = false;
  
  //   function typeEffect() {
  //     // Line 1 effect
  //     let currentText1 = text1;
  //     if (!isDeleting1) {
  //       item.innerHTML = currentText1.slice(0, startPoint1 + 1);
  //       startPoint1++;
  //       if (startPoint1 === currentText1.length) {
  //         isDeleting1 = true;
  //       }
  //     } else {
  //       item.innerHTML = currentText1.slice(0, startPoint1 - 1);
  //       startPoint1--;
  //       if (startPoint1 === 0) {
  //         isDeleting1 = false;
  //       }
  //     }
  
  //     // Line 2 effect
  //    let currentText2 = text2;
  //     if (!isDeleting2) {
  //       let line1 = item.innerHTML.split("<br>")[0] || "";
  //       item.innerHTML = line1 + "<br>" + currentText2.slice(0, startPoint2 + 1);
  //       startPoint2++;
  //       if (startPoint2 === currentText2.length) {
  //         isDeleting2 = true;
  //       }
  //     } else {
  //       let line1 = item.innerHTML.split("<br>")[0] || "";
  //       item.innerHTML = line1 + "<br>" + currentText2.slice(0, startPoint2 - 1);
  //       startPoint2--;
  //       if (startPoint2 === 0) {
  //         isDeleting2 = false;
  //       }
  //     }

  //   }

  //   // Start the interval
  //   let intervalId = setInterval(typeEffect, speed);
  // });
  