$(function(){

    // Darkmode / Lightmode btn click =========================
    const Mode = $(".Mode");
    Mode.find(".ModeBtn").click(function(){
        if($(this).hasClass("Dark")){
            $(this).removeClass("Dark").addClass("Light");
            $(this).stop().animate({left : "65%"}, 300);
            Mode.removeClass("Dark").addClass("Light");
            $("body").css({backgroundColor : "#fafafa"});
        }
        else if($(this).hasClass("Light")){
            $(this).removeClass("Light").addClass("Dark");
            $(this).stop().animate({left : "8%"}, 300)
            Mode.removeClass("Light").addClass("Dark");
            $("body").css({backgroundColor : "#111313"});
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
    
    WorkSlideWrap.find(".WorkSlideWrap_list").eq(1).addClass("clone")
})