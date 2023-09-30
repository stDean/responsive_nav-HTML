//Create function to select elements
const someEle = (ele) => document.querySelector(ele);

//Open and close nav on click
someEle(".menu-icons").addEventListener("click", () => {
  someEle("nav").classList.toggle("active");
});

Array.forEach((ele) => {
  console.log(ele);
});
