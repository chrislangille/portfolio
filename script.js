const text = "Connect with me...";
let i = 0;
const element = document.getElementById('typing');
function typeWriter() {
  if (i < text.length) {
    element.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
    i++;
    setTimeout(typeWriter, 150);
  } else {
    setTimeout(() => {
      element.innerHTML = '<span class="cursor">|</span>';
      i = 0;
      typeWriter();
    }, 2000);
  }
}
window.onload = typeWriter;
