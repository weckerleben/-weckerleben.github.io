/*
Author       : Abubakar Siddique
Template Name: Prince - Personal CV/Resume Template
Version      : 1.0
*/
(function($)
{
	"use strict";
	
	//========================= preloader ================
	$(window).on('load', function() {
		preloader();
	})
	
	//JQuery for page scrolling feature - requires JQuery Easing plugin
	$(document).on('ready', function () {
		Boxlayout.init();	
	});
	
	// Video player
	$('.player').mb_YTPlayer();
	
	//============= Preload ============ 
	function preloader(){
		$(".preloaderimg").fadeOut();
		$(".preloader").delay(200).fadeOut("slow").delay(200, function(){
			$(this).remove();
		});
	}
		
})(jQuery);	

var language = "es";
/************************** Language Button *************************/
$('.main-lang-btn').hover(function(){
	$('.lang-btn').addClass('lang-see-animation');
	$('.main-lang-btn').addClass('main-lang-btn-hover');
})
$('.lang-container').mouseleave(function(){
	$('.lang-btn').removeClass('lang-see-animation');
	$('.main-lang-btn').removeClass('main-lang-btn-hover')
})


/************************** Language Script *************************/
$(document).ready(function(){
  var selector = '#translate-es';
  $(selector).on('click', function(e){
    e.preventDefault();
    startLang( $(this) );
  });
  var startLang = function(el){
    var el = $(el);
    var text = el.attr('data-text');
    var file = el.attr('data-file');
    file = file.split(',');
    text = text.split(',');
    var index = el.attr('data-index');
    if(index >= file.length){
      index = 0;
    }
    changeName(el, text[index]);
    changeIndex(el, index);
    loadLang(file[index]);
    $('html').attr('lang', file[index]);
  };

  var changeName = function(el, name){
    $(el).html( name );
  };

  var changeIndex = function(el, index){
    $(el).attr('data-index', ++index);
  };

  var loadLang = function(lang){
    var processLang = function(data){
      var arr = data.split('\n');
      for(var i in arr){
        if( lineValid(arr[i]) ){
          var obj = arr[i].split('=>');
          assignText(obj[0], obj[1]);
        }
        language = "es";
        $('.lang-es').removeClass('lang-flag');
        $('.lang-pt').addClass('lang-flag');
        $('.lang-en').addClass('lang-flag');
        $('.lang-zh').addClass('lang-flag');
      }
    };
    var assignText = function(key, value){
      $('[data-lang="'+key+'"]').each(function(){
        var attr = $(this).attr('data-destine');
        if(typeof attr !== 'undefined'){
          $(this).attr(attr, value);
        }else{
          $(this).html(value);
        }
      });
    };
    var lineValid = function(line){
      return (line.trim().length > 0);
    };
    $('.loading-lang').addClass('show');
    $.ajax({
      url: 'lang/'+lang+'.txt',
      error:function(){
        alert('No se cargó traducción');
      },
      success: function(data){
        $('.loading-lang').removeClass('show');
        processLang(data);
      }
    });
  }; 
});

$(document).ready(function(){
  var selector = '#translate-pt';
  $(selector).on('click', function(e){
    e.preventDefault();
    startLang( $(this) );
  });
  var startLang = function(el){
    var el = $(el);
    var text = el.attr('data-text');
    var file = el.attr('data-file');
    file = file.split(',');
    text = text.split(',');
    var index = el.attr('data-index');
    if(index >= file.length){
      index = 0;
    }
    changeName(el, text[index]);
    changeIndex(el, index);
    loadLang(file[index]);
    $('html').attr('lang', file[index]);
  };

  var changeName = function(el, name){
    $(el).html( name );
  };

  var changeIndex = function(el, index){
    $(el).attr('data-index', ++index);
  };

  var loadLang = function(lang){
    var processLang = function(data){
      var arr = data.split('\n');
      for(var i in arr){
        if( lineValid(arr[i]) ){
          var obj = arr[i].split('=>');
          assignText(obj[0], obj[1]);
        }
        language = "pt";
        $('.lang-es').addClass('lang-flag');
        $('.lang-pt').removeClass('lang-flag');
        $('.lang-en').addClass('lang-flag');
        $('.lang-zh').addClass('lang-flag');
      }
		
    };
    var assignText = function(key, value){
      $('[data-lang="'+key+'"]').each(function(){
        var attr = $(this).attr('data-destine');
        if(typeof attr !== 'undefined'){
          $(this).attr(attr, value);
        }else{
          $(this).html(value);
        }
      });
    };
    var lineValid = function(line){
      return (line.trim().length > 0);
    };
    $('.loading-lang').addClass('show');
    $.ajax({
      url: 'lang/'+lang+'.txt',
      error:function(){
        alert('No se cargó traducción');
      },
      success: function(data){
        $('.loading-lang').removeClass('show');
        processLang(data);
      }
    });
  };  
});

$(document).ready(function(){
  var selector = '#translate-en';
  $(selector).on('click', function(e){
    e.preventDefault();
    startLang( $(this) );
  });
  var startLang = function(el){
    var el = $(el);
    var text = el.attr('data-text');
    var file = el.attr('data-file');
    file = file.split(',');
    text = text.split(',');
    var index = el.attr('data-index');
    if(index >= file.length){
      index = 0;
    }
    changeName(el, text[index]);
    changeIndex(el, index);
    loadLang(file[index]);
    $('html').attr('lang', file[index]);
  };

  var changeName = function(el, name){
    $(el).html( name );
  };

  var changeIndex = function(el, index){
    $(el).attr('data-index', ++index);
  };

  var loadLang = function(lang){
    var processLang = function(data){
      var arr = data.split('\n');
      for(var i in arr){
        if( lineValid(arr[i]) ){
          var obj = arr[i].split('=>');
          assignText(obj[0], obj[1]);
        }
        language = "en";
		$('.lang-es').addClass('lang-flag');
		$('.lang-pt').addClass('lang-flag');
		$('.lang-en').removeClass('lang-flag');
		$('.lang-zh').addClass('lang-flag');
      }
    };
    var assignText = function(key, value){
      $('[data-lang="'+key+'"]').each(function(){
        var attr = $(this).attr('data-destine');
        if(typeof attr !== 'undefined'){
          $(this).attr(attr, value);
        }else{
          $(this).html(value);
        }
      });
    };
    var lineValid = function(line){
      return (line.trim().length > 0);
    };
    $('.loading-lang').addClass('show');
    $.ajax({
      url: 'lang/'+lang+'.txt',
      error:function(){
        alert('No se cargó traducción');
      },
      success: function(data){
        $('.loading-lang').removeClass('show');
        processLang(data);
      }
    });
  };  
});

$(document).ready(function(){
  var selector = '#translate-zh';
  $(selector).on('click', function(e){
    e.preventDefault();
    startLang( $(this) );
  });
  var startLang = function(el){
    var el = $(el);
    var text = el.attr('data-text');
    var file = el.attr('data-file');
    file = file.split(',');
    text = text.split(',');
    var index = el.attr('data-index');
    if(index >= file.length){
      index = 0;
    }
    changeName(el, text[index]);
    changeIndex(el, index);
    loadLang(file[index]);
    $('html').attr('lang', file[index]);
  };

  var changeName = function(el, name){
    $(el).html( name );
  };

  var changeIndex = function(el, index){
    $(el).attr('data-index', ++index);
  };

  var loadLang = function(lang){
    var processLang = function(data){
      var arr = data.split('\n');
      for(var i in arr){
        if( lineValid(arr[i]) ){
          var obj = arr[i].split('=>');
          assignText(obj[0], obj[1]);
        }
        language = "zh";
		$('.lang-es').addClass('lang-flag');
		$('.lang-pt').addClass('lang-flag');
		$('.lang-en').addClass('lang-flag');
		$('.lang-zh').removeClass('lang-flag');
      }
    };
    var assignText = function(key, value){
      $('[data-lang="'+key+'"]').each(function(){
        var attr = $(this).attr('data-destine');
        if(typeof attr !== 'undefined'){
          $(this).attr(attr, value);
        }else{
          $(this).html(value);
        }
      });
    };
    var lineValid = function(line){
      return (line.trim().length > 0);
    };
    $('.loading-lang').addClass('show');
    $.ajax({
      url: 'lang/'+lang+'.txt',
      error:function(){
        alert('No se cargó traducción');
      },
      success: function(data){
        $('.loading-lang').removeClass('show');
        processLang(data);
      }
    });
  };  
});


