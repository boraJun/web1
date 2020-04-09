var Body = {
  setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBgColor:function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function setAllAtagColor(c){
  // var allList = document.querySelectorAll('a');
  //
  // for(var i = 0; i < allList.length; i++)
  //   allList[i].style.color = c;
  $('a').css('color', c);
}
function nightdayHandler(self){
  //var target = document.querySelector('body').style;

  if(self.value === 'day'){
    self.value = 'night';
    Body.setBgColor('black');
    Body.setColor('white');

    setAllAtagColor('powderblue');
  }
  else if(self.value === 'night'){
    self.value = 'day';
    Body.setBgColor('white');
    Body.setColor('black');

    setAllAtagColor('blue');
  }
}
