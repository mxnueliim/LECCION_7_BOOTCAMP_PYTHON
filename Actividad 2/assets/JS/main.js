document.addEventListener('DOMContentLoaded', function () {
  var btnTop = document.getElementById('btnTop');
  if (!btnTop) return;

  btnTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
