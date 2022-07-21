// Add your custom JS here.


var $j = jQuery.noConflict();


  // Remove the # from the hash, as different browsers may or may not include it
  $j(document).ready(function() {
    // get the anchor link buttons
    const menuBtn = $j('.nav-link');
    // when each button is clicked
    menuBtn.click(()=>{	
      // set a short timeout before taking action
      // so as to allow hash to be set
      setTimeout(()=>{
        // call removeHash function after set timeout
        removeHash();
      }, 5); // 5 millisecond timeout in this case
    });
  
    // removeHash function
    // uses HTML5 history API to manipulate the location bar
    function removeHash(){
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }
  });

$j('#menu-item-63').click(function() { // #menu-item-63 for local #menu-item-31 for production
    $j('#primary').show(800);
    setTimeout(function(){
        $j('#primary').hide(800);
    },10000);
  });

  $j('#menu-item-85').click(function() { // #menu-item-63 for local #menu-item-31 for production
    $j('#web_primary').show(800);
    setTimeout(function(){
        $j('#web_primary').hide(800);
    },10000);
  });

$j('#menu-item-52').click(function() { // #menu-item-52 for local #menu-item-30 for production
    $j('#about_me').show();
    setTimeout(function(){
      $j('#about_me').hide(800);
    },15000);
});

let logoTiles = $j('.logo-tile');


logoTiles.each(function(){
  $j(this).click(function(){
    let currentTile = $j(this);
    let currentTileDesc =  currentTile.find('.not-yet');
    currentTileDesc.show(800);
    setTimeout(function(){
      $j(currentTileDesc).hide(1000);
    },3000);
  });
});

let logoClosers = $j('.btn');

logoClosers.each(function(){
  $j(this).click(function() {
   let par = $j(this).parent();
    par.hide(800);
  });
});
