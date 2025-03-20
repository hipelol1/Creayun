document.querySelectorAll('[data-href]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.contentFrame').src = link.dataset.href;
    document.querySelector('.contentFrame').style.display = 'block';
    document.querySelector('.content').style.display = 'none';
  });
  link.style.cursor = 'pointer';
});

document.getElementById("credits-button").addEventListener("click", function() {
  document.querySelector('.contentFrame').src = "/credits.html";
  document.querySelector('.contentFrame').style.display = 'block';
  document.querySelector('.content').style.display = 'none';
});
