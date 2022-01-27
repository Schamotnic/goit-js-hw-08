
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function(data) {
        playerSecond = data.seconds
        localStorage.setItem("videoplayer-current-time",playerSecond); 
        
        
    });
    
    player.setCurrentTime().then(function(playerSecond) {
    
  });

       

        

   
