$(function(){
    // scroll event ===========================================
    const MainWorkWrap = $(".MainWorkWrap");
    const WorkFlex = $(".WorkFlex");
    const WorkFlexTitle_paragraph = $(".WorkFlexTitle_paragraph");
    const WorkFlexTitle_name =   $(".WorkFlexTitle_name");
    const mousewheel_up = (index) =>{
        if(MainWorkWrap.eq(index).offset().top > $(document).scrollTop()){
            WorkFlex.eq(index).css({width : "80%", height : "80%"});
            WorkFlexTitle_paragraph.eq(index).css({fontSize : "1rem"})
            WorkFlexTitle_name.eq(index).css({fontSize : "0.8rem"})
        }
    }
    const mousewheel_down = (index) =>{
        WorkFlex.eq(index).css({width : "100%", height : "100%"});
        WorkFlexTitle_paragraph.eq(index).css({fontSize : "1.3rem"})
        WorkFlexTitle_name.eq(index).css({fontSize : "1rem"});
    }
    $(window).mousewheel(function(e, delta){
        if(delta > 0){
            mousewheel_up(0)
            mousewheel_up(1)
            mousewheel_up(2)
        }
        else if(delta < 0){
           if(300 < $(document).scrollTop()){
                mousewheel_down(0)
           } 
           if(MainWorkWrap.eq(0).offset().top < $(document).scrollTop()){
                mousewheel_down(1)
           }
           if(MainWorkWrap.eq(1).offset().top < $(document).scrollTop()){
                mousewheel_down(2)
           }
        }
    })

    // Darkmode / Lightmode btn click =========================
    const Mode = $(".Mode");
    Mode.find(".ModeBtn").click(function(){
        console.log("ok")
        if($(this).hasClass("Dark")){
            $(this).removeClass("Dark").addClass("Light");
            $(this).stop().animate({left : "65%"}, 300);
            Mode.removeClass("Dark").addClass("Light");
            $("header").addClass("light")
            $("body").css({backgroundColor : "#e8e8e8"});
            $(".Blog").css("background" , "url(../img/tstory_01.svg)");
            $(".Github").css("background" , "url(../img/github_01.svg)");
            $("a").addClass("light");
            $("div").addClass("light");
            $("ul").addClass("light");
            $("span").addClass("light");
            $("strong").addClass("light");
            $("p").addClass("light");
            $("li").addClass("light");
            $("h2").addClass("light");
            $("h3").addClass("light");
        }
        else if($(this).hasClass("Light")){
            $(this).removeClass("Light").addClass("Dark");
            $(this).stop().animate({left : "8%"}, 300)
            Mode.removeClass("Light").addClass("Dark");
            $("body").css({backgroundColor : "#111313"});
            $(".Blog").css("background" , "url(../img/tstorylogo.svg)");
            $(".Github").css("background" , "url(../img/githublogo.svg)");
            $("a").removeClass("light");
            $("div").removeClass("light");
            $("ul").removeClass("light");
            $("span").removeClass("light");
            $("strong").removeClass("light");
            $("p").removeClass("light");
            $("li").removeClass("light");
            $("h2").removeClass("light");
            $("h3").removeClass("light");
        }
    })

    // Profile Grid click ======================================
    const ProfileGrid_cate_list = $(".ProfileGrid_cate_list");
    const ProfileGrid = $(".ProfileGrid");
    
    ProfileGrid_cate_list.find(".ProfileGrid_cate_item").click(function(){
        ProfileGrid_cate_list.find(".ProfileGrid_cate_item").removeClass("on")
        $(this).addClass("on")
        ProfileGrid_cate_list.find(".ProfileGrid_cate_item").find(".icon").removeClass("on")
        $(this).find(".icon").addClass("on")
    })

    // 카테고리에 따른 게시물 보여주기 ------------------------------

    const cate_on_off = (index) => {
        ProfileGrid_cate_list.find(".ProfileGrid_cate_item").eq(index).click(function(){
            ProfileGrid.find(".Grid_cate").removeClass("on");
            ProfileGrid.find(".Grid_cate").eq(index).addClass("on")
        })
    }

    cate_on_off(0);
    cate_on_off(1);
    cate_on_off(2);


    // Work slide clone create ===================================
    const WorkSlideWrap = $(".WorkSlideWrap");
    const WorkSlideWrap_list = $(".WorkSlideWrap_list")
    const WorkSlideWrap_list_clone = WorkSlideWrap_list.clone()
    WorkSlideWrap_list_clone.appendTo(".WorkSlideWrap");
    
    WorkSlideWrap.find(".WorkSlideWrap_list").eq(1).addClass("clone");

    // Notice animate =============================================
    const Notice_item = $(".Notice div");
    Notice_item.eq(0).stop().animate({top: "12%" , opacity : "1"}, 1000);
    Notice_item.eq(1).stop().delay(600).animate({top: "23%"  , opacity : "1"}, 1000);
    Notice_item.eq(2).stop().delay(1200).animate({top: "47%"  , opacity : "1"}, 1000);
    Notice_item.eq(3).stop().delay(1800).animate({bottom: "5%"  , opacity : "1"}, 1000);

    // Skill Stack percent bar ====================================
    const StackList = $(".StackList");
    StackList.find(".StackItem").eq(0).find(".PercentBar").animate({right : "-22rem" , width : "22rem"}, 1000, "linear").css({display : "block"});
    StackList.find(".StackItem").eq(1).find(".PercentBar").delay(200).animate({right : "-25rem" , width : "25rem"}, 1000, "linear").css({display : "block"});
    StackList.find(".StackItem").eq(2).find(".PercentBar").delay(400).animate({right : "-20rem" , width : "20rem"}, 1000, "linear").css({display : "block"});
    StackList.find(".StackItem").eq(3).find(".PercentBar").delay(600).animate({right : "-17rem" , width : "17rem"}, 1000, "linear").css({display : "block"});
    StackList.find(".StackItem").eq(4).find(".PercentBar").delay(800).animate({right : "-16rem" , width : "16rem"}, 1000, "linear").css({display : "block"});

    
    // WorkSLide Interval ==================================================

    const WorkFlexImg_list = $(".WorkFlexImg_list");

    const WorkSlide = (index, position) =>{
        WorkFlexImg_list.eq(index).find("li").eq(0).css({transform : "translateX(" + position +")"});
        WorkFlexImg_list.eq(index).find("li").eq(2).css({transition : "all 1s"});
        setTimeout(()=>{
            WorkFlexImg_list.eq(index).find("li").eq(0).appendTo(WorkFlexImg_list.eq(index));
            setTimeout(()=>{
                WorkFlexImg_list.eq(index).find("li").eq(2).css({transform : "translateX(0%)"});
                WorkFlexImg_list.eq(index).find("li").eq(2).css({transition : "none"});
            }, 300)
        }, 500)
    }
    setInterval(WorkSlide, 3000, 0, "-200%");
    setInterval(WorkSlide, 3000, 1, "200%");
    setInterval(WorkSlide, 3000, 2, "-200%");

})