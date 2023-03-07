function progress(){
  var percent = document.querySelector('.percent');
  var progress = document.querySelector('.progress');
  var text = document.querySelector('.text');
  var progressBar = document.querySelector('.progress-bar');

  var per = 5;
  var loading = setInterval(animate, 75);

  function animate(){
    if( per == 195){
      progressBar.style.display = "none";
      text.style.display = "block";
      clearInterval(loading);
    }else{
      per = per + 2;
      progress.style.width = per + 'px';
      percent.textContent = count + '%';
    }
  }
}
progress();
