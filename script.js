function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".mert-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener('play', function(e) {
  var audios = document.getElementsByTagName('audio');

  for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
          audios[i].pause();
      }
  }
}, true);
