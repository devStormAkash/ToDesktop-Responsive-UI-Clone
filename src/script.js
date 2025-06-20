function handleMenu() {
  const element = document.getElementById("hidden_card");
  element.classList.toggle("hidden")
}

const initialTranslateLtoR = -20 * 4
const initialTranslateRtoL = 16 * 4;


function scrollElements(element, isLeftToRight, speed) {
  
  function callback(entries) {
    if (entries[0].isIntersecting) {
      document.addEventListener('scroll', ()=>handleScroll(isLeftToRight))
    }
    else {
      console.log(false,element);
      document.removeEventListener("scroll", () => handleScroll(isLeftToRight))
    }
    
  }

  function handleScroll(isLtoR) {
    const totalTranslate = (window.innerHeight - element.getBoundingClientRect().top)*speed
    if (isLtoR) {
      element.style.transform = `translateX(${totalTranslate + initialTranslateLtoR}px)`
    } else {
      element.style.transform = `translateX(-${totalTranslate+initialTranslateRtoL}px)`;
    }
  }
  const observer =  new IntersectionObserver(callback)
  observer.observe(element)
}

const line1 = document.getElementById("line1")
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");


scrollElements(line1, true, 0.12)
scrollElements(line2, false, 0.12);
scrollElements(line3, true, 0.12);
scrollElements(line4, true, 0.7);

const pc2 = document.getElementById('price-card-2');
const pc3 = document.getElementById("price-card-3");

const pc2AmountElement = pc2.children[2].children[0]
const pc3AmountElement = pc3.children[3].children[0]


const changeColor = () => {
  const float1 = document.getElementById("float1");
  const float2 = document.getElementById("float2");

  float1.classList.toggle("bg-blue-100");
  float1.classList.toggle("border");
  float1.classList.toggle("border-gray-300");

  float2.classList.toggle("bg-blue-100");
  float2.classList.toggle("border");
  float2.classList.toggle("border-gray-300");

  pc2AmountElement.innerHTML =
    pc2AmountElement.innerHTML === '$100' ? '$125' : '$100';
  pc3AmountElement.innerHTML =
    pc3AmountElement.innerHTML === "$240" ? "$300" : "$240";

};


const dtElements = document.getElementsByTagName('dt')
const arrayDtElements = Array.from(dtElements)
arrayDtElements.forEach((element) => {
  element.addEventListener("click", () => {
    element.nextElementSibling.classList.toggle("hidden");
    element.children[1].classList.toggle("-rotate-180");
  });
});

