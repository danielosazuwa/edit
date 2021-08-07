function rollOut() {
    document.getElementById("menu").style.width="75%";
    document.getElementById("rollout_bars").style.display="none";
    document.getElementById("rollin_bars").style.display="block";
}

function rollIn() {
    document.getElementById("menu").style.width="0px";
    document.getElementById("rollout_bars").style.display="block";
    document.getElementById("rollin_bars").style.display="none";
}



var myIndex = 0;
        carousel();

        function carousel() {
          var i;
          var x = document.getElementsByClassName("mySlides");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }
          myIndex++;
          if (myIndex > x.length) {
            myIndex = 1;
          }
          x[myIndex - 1].style.display = "block";
          setTimeout(carousel, 3000);
        }

