//cursor personalizado//
$(document).ready(function(e) {
  
    $('body').on({'mousemove' : function(e){
      console.clear()
      let clientX = e.originalEvent.clientX
      let clientY = e.originalEvent.clientY
      $('#cursor').css({
        'left' :(clientX - 30) + 'px',
        'top' : (clientY  - 30)+ 'px'
      })
    }})

    $('.a').on({
      'mouseover': function(){
        $('#cursor').addClass('mini')
      },
      'mouseout': function(){
        $('#cursor').removeClass('mini')
      },
    })
  })

  $('.icon-github').on({
    'mouseover': function(){
      $('#cursor').addClass('mini')
    },
    'mouseout': function(){
      $('#cursor').removeClass('mini')
    },
  })

  $('.icon-linkedin').on({
    'mouseover': function(){
      $('#cursor').addClass('mini')
    },
    'mouseout': function(){
      $('#cursor').removeClass('mini')
    },
  })
  

  $('.icon-mail').on({
    'mouseover': function(){
      $('#cursor').addClass('mini')
    },
    'mouseout': function(){
      $('#cursor').removeClass('mini')
    },
  })

  $('.pro1').on({
    'mouseover': function(){
      $('#cursor').addClass('mini')
    },
    'mouseout': function(){
      $('#cursor').removeClass('mini')
    },
  })

  
  $('.button').on({
    'mouseover': function(){
      $('#cursor').addClass('mini')
    },
    'mouseout': function(){
      $('#cursor').removeClass('mini')
    },
  })

  $('.icon-back').on({
    'mouseover': function(){
      $('#cursor').addClass('mini')
    },
    'mouseout': function(){
      $('#cursor').removeClass('mini')
    },
  })





  




//menu-barra de navegación//
menuButton = document.querySelector('#menu');
menuList = document.querySelector('.menu');
menuButton.addEventListener(
    'click', () => { 
    menuList.classList.toggle('active');
    menuList.classList.contains('active') ? menuButton.innerHTML = '&times;' :
      menuButton.innerHTML = '&equiv;'
  })

  
  