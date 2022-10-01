function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");

}




window.onload = function(){
  let open_btn = document.getElementById('open_btn');
  let p = document.getElementById('p');
  let games = ['다같이 한잔','꽝','당신만 한잔']
  open_btn.addEventListener('click',function(){
    var randomGames = games[Math.floor(Math.random()*games.length)]
    p.innerHTML = randomGames;});
};
