  audioPlayer = document.getElementById('audio');

  function setLetterSound(letterVariable) {
    var mp3Source = document.getElementById('mp3Source');
    mp3Source.src = 'sounds/LettersNumbers/' + letterVariable +'.mp3';
  }

  function setGenericSound() {
    var mp3Source = document.getElementById('mp3Source');
    mp3Source.src = 'sounds/LettersNumbers/glass.mp3';
  }



  function runAudioPlayer() {
    audioPlayer.load();
    audioPlayer.play();
  }

  document.getElementById('hide-button').onclick = function() {
    document.getElementById('about-cont').style.display = "none";
  }
  document.getElementById('about-button').onclick = function() {
    document.getElementById('about-cont').style.display = "block";
  }


  document.onkeypress = function(event){ 

   let letterOnScreen = document.getElementById('big-char');
    console.log(event.charCode);
    if (
      event.charCode === 13||
      event.charCode === 32||
      event.charCode === 92||
      event.charCode === 96||
      event.charCode === 61||
      event.charCode === 43||
      event.charCode === 45||
      event.charCode === 33||
      event.charCode === 64||
      event.charCode === 35||
      event.charCode === 36||
      event.charCode === 37||
      event.charCode === 94||
      event.charCode === 38||
      event.charCode === 42||
      event.charCode === 40||
      event.charCode === 41||
      event.charCode === 95||
      event.charCode === 91||
      event.charCode === 93||
      event.charCode === 34||
      event.charCode === 39||
      event.charCode === 47||
      event.charCode === 63||
      event.charCode === 62||
      event.charCode === 44||
      event.charCode === 60||
      event.charCode === 46||
      event.charCode === 59||
      event.charCode === 58||
      event.charCode === 123||
      event.charCode === 124||
      event.charCode === 125||
      event.charCode === 126
      ) {
      if (event.charCode === 13) { // getting the Enter key
        letterOnScreen.innerHTML = "Enter";
      } else if (event.charCode === 32) {
        letterOnScreen.innerHTML = "Space";
      } else {
        letterOnScreen.innerHTML = String.fromCharCode(event.charCode);
      }
      setGenericSound();
      runAudioPlayer(); 
    } else {
      letterOnScreen.innerHTML = String.fromCharCode(event.charCode); // getting the pressed character
      let pressedLetter = String.fromCharCode(event.charCode).toLocaleUpperCase(); // passing the pressed letter to the function to add it to sources
      setLetterSound(pressedLetter);
      runAudioPlayer(); // Play sound
    }

    

  }


  // Mute button
  document.getElementById('mute-button').onclick = function() {
    if (audioPlayer.muted === false) {
      audioPlayer.muted = true;
      document.getElementById('mute-button').innerHTML = "Unmute Sounds";
    } else {
      audioPlayer.muted = false;
      document.getElementById('mute-button').innerHTML = "Mute Sounds";
    }
  }
  /*-------------------------------------------------------------------------*/
  let imgArray=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9']
  let section=document.getElementById('slider');
  for(let a=0;a<imgArray.length;a++){
    let img=document.createElement('img');
    img.src=`./letters-numbers/${imgArray[a]}.png`;
    img.style.width='200px';
    img.style.height='300px';
    img.style.flex='0 0 300px';
    img.style.cursor='pointer';
    img.style.margin='5px';
    img.style.transform='scale(.95)';
    img.style.transition='all 0.3s ';
    img.onmouseover=function(){
      this.style.transform='scale(1.1)';
    }
    img.onmouseout=function(){
      this.style.transform='scale(.95)';
    }
    img.setAttribute('class','thumpnail');
    img.setAttribute('id',imgArray[a]);
    img.setAttribute('name',imgArray[a]);
    section.appendChild(img);
  } 
  for(let x=0;x<imgArray.length;x++){
    let image=document.getElementById(imgArray[x])
  image.onclick=function(){order(imgArray[x]);}}
  function order(variable){setLetterSound(variable); runAudioPlayer();}

  let thumpnail=document.getElementsByClassName('thumpnail');
  let slider=document.getElementById('slider');
  let buttonRight=document.getElementById('slide-right');
  let buttonLeft=document.getElementById('slide-left');
  buttonLeft.addEventListener('click',()=>{
slider.scrollLeft-=125;
  })
  buttonRight.addEventListener('click',()=>{
    slider.scrollLeft+=125;
      });

      const maxScrollLeft=slider.scrollWidth-slider.clientWidth;
      //auto plau slider
      function autoPlay(){
        if(slider.scrollLeft>(maxScrollLeft-1)){
          slider.scrollLeft-=maxScrollLeft;
          alert(slider.maxScrollLeft);
        }
        else{slider.scrollLeft+=1;}
      }
      let play=setInterval(autoPlay,50);
      //pause the slider on hover
      /*for(let i=0;i<thumpnail.length;i++){
        thumpnail[i].addEventListener("mouseover",()=>{
          clearInterval(play);
        })
        thumpnail[i].addEventListener('mouseout',()=>{
          return play=setInterval(autoPlay,50);
        })
      }*/