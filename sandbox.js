jQuery(document).ready(function($) {

        $("#change-season").click(function(){
            $("#title").toggleClass("summer-background");
            $("#leaves").toggleClass("display-block");
            $(".snow-flakes").toggleClass("display-none");
          });

});

