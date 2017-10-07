  $(document).ready(function() {
    var angleUp = $(".fa-angle-up");
    var angleDown = $(".fa-angle-down");
    $("#exampleFormControlSelect2").change(function(){
        document.location.href = $(this).val();
    });
    
  });
    setInterval( function() {
      var widthScreen = $(window).width();
        $(".flex-size").css("font-size","14px");
        $(".carousel-item").find("h1").css({"position":"absolute","top":"90px", "left":"120px", "color":"#FFF", "font-size":"40px", "font-weight":"300"});
        $(".row-tab").find(".nav-link").css({"width":"230px", "height":"80px", "margin-bottom":"-15px"});
        $("#carouselExampleIndicators").find("ol").css("margin-bottom", "0px");
        $(".col-change-size").css("font-size","15px");
        $(".list-group-item").find("span").css("font-size", "17px");
        $(".list-group-item").find("p").css({"margin-top":"5px", "font-size":"13px", "color":"#1F6ED4"});
        $(".justify-content-center").find("h4").css("font-size","25px");
        $(".document-image-bg1").find("h5").css({"font-size":"17px","bottom":"80px","left":"50px"});
        $(".document-image-bg2").find("h5").css({"font-size":"17px","bottom":"80px","left":"30px"});
        $(".car-button").css({"font-size":"18px", "height":"20px","bottom":"70px","left":"80px", "padding":"15px", "line-height":"0.3" });
        $(".shadow-img").find("img").css("height","120px");
        $("#carousel-recommend").addClass("carousel-recommend-size-change");
        $("#leftMenu").css({"top":"105px","left":"55px"});
      if (widthScreen<1100){
        $("#leftMenu").css({"top":"105px","left":"0px"});
        $(".carusel-logo").addClass("carousel slide");
        $(".carusel-document").addClass("carousel slide");
        $(".car-item").addClass("carousel-item");
        $(".hide-control").show();
        $(".hide-collapse").hide();
        $(".fa-question, #dropdownMenuLink").hide();
        $("#searchInput").css("width", "100px");
        $(".logo-carusel-row").addClass("justify-content-center").removeClass("justify-content-around");
        $(".card").css("width","16rem");
      }else{
        $(".fa-question, #dropdownMenuLink").show();
        $("#searchInput").css("width", "270px");
        $(".flex-width").css("width","256px");
        $(".hide-collapse").show();
        $(".carusel-logo").removeClass("carousel slide");
        $(".car-item").removeClass("carousel-item");
        $(".logo-carusel-row").removeClass("justify-content-center").addClass("justify-content-around");
        $(".carusel-document").removeClass("carousel slide");
        $(".hide-control").hide();
      }
      if (widthScreen<750){
        $(".justify-content-center").find("h4").css("font-size","16px");
        $(".row-tab").find(".nav-link").css({"width":"131px", "height":"100px", "font-size":"14px"});
        $(".carousel-item").find("h1").css({"top":"60px", "left":"150px", "font-size":"20px", "font-weight":"300"});
        $(".fa-question, #dropdownMenuLink").show();
        $("#searchInput").css("width", "270px");
        $(".flex-size").css("font-size","12px");
        $(".list-group-item").find("p").css("font-size","10px");
        $(".list-group-item").find("img").css({"margin-top":"0px","margin-left":"0px" });
        $(".document-image-bg1").find("h5").css({"font-size":"8px","bottom":"40px","left":"25px"});
        $(".document-image-bg2").find("h5").css({"font-size":"8px","bottom":"40px","left":"20px"});
        $(".car-button").css({"font-size":"8px", "height":"15px","bottom":"45px","left":"35px", "line-height":"0.3", "padding": "5px"});
        $(".shadow-img").find("img").css("height","60px");
        $("#carousel-recommend").removeClass("carousel-recommend-size-change");
        $("#show-group").css("font-size","10px");
        $("#show-group").find("i").css("font-size","10px");
      }
      if (widthScreen<450){
        $(".list-group-item").find("h6").css({"font-size":"11px","padding-top":"10px"});
        $(".list-group-item").find("p").css({"margin-top":"5px", "font-size":"5px"});
        $(".list-group-item").find("img").css({"margin-top":"0px","margin-left":"0px" });
        $(".col-change-size").css({"font-size":"6px", "margin-top":"-11px", "margin-left":"6px"});
        $(".justify-content-center").find("h4").css("font-size","7px");
        $("#carouselExampleIndicators").find("ol").css("margin-bottom", "-5px");
        $(".carousel-item").find("h1").css({"top":"30px", "left":"70px", "font-size":"10px"});
        $(".flex-size").css("font-size","5px");
        $(".row-tab").find(".nav-link").css({"width":"80px", "height":"100px", "font-size":"12px"});
        $(".document-image-bg1").find("h5").css({"font-size":"5px","bottom":"30px","left":"7px"});
        $(".document-image-bg2").find("h5").css({"font-size":"4px","bottom":"30px","left":"5px"});
        $(".car-button").css({"font-size":"5px", "height":"5px","bottom":"40px","left":"13px", "line-height":"0.2", "padding": "4px"});
        $(".shadow-img").find("img").css("height","40px");
        $(".card").css({"width":"7rem","height":"8rem"});
        $(".advertisement-card").css({"width":"7rem","height":"8rem"});
        $(".card-title").addClass("card-title-change");
        $(".rounded-circle").removeClass("circle-size").addClass("circle-change-size");
        $(".btn-down").addClass("btn-down-change");
        $(".card-text").find("h6").css("font-size","6px");
        $(".card-text").find("p").css("font-size","4px");
        $(".top-footer").find("p").css({"font-size":"9px"});
        $(".top-footer").find("input").css("font-size","7px");
        $(".footer-link").find("a").css({"font-size":"5px","margin":"0px"});
        $("#show-group").css("font-size","6px");
        $("#show-group").find("i").css("font-size","10px");
        $("#family").find("h6").css("font-size","5px");
        $("#family").find("p").css("font-size","4px");
      }else {
        $(".card-text").find("h6").css("font-size","14px");
        $(".card-text").find("p").css("font-size","12px");
        $(".card").css({"width":"17rem","height":"17rem"});
        $(".advertisement-card").css({"width":"12rem","height":"14rem"});
        $(".card-title").removeClass("card-title-change");
        $(".rounded-circle").removeClass("circle-change-size").addClass("circle-size");
        $(".btn-down").removeClass("btn-down-change");
        $(".col-change-size").css({"font-size":"15px", "margin-top":"10px", "margin-left":"-25px"});
        $(".list-group-item").find("h6").css({"font-size":"15px","padding-top":"0px"});
        $(".footer-link").find("a").css({"font-size":"14px","margin":"0px"});
        $(".top-footer").find("p").css({"font-size":"15px"});
        $(".top-footer").find("input").css("font-size","14px");
        $("#show-group").css("font-size","14px");
        $("#show-group").find("i").css("font-size","20px");
      }
    }, 100);
