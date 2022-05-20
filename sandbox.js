jQuery(document).ready(function($) {

        $("#change-season").click(function(){
            $("#title").toggleClass("summer-background");
            $("#leaves").toggleClass("display-block");
            $(".snow-flakes").toggleClass("display-none");
            $("#portfolio-content").toggleClass("summer-background-color");

            // for divider
            $(".divider-for-winter").toggleClass("display-none");
            $(".divider-for-summer").toggleClass("display-block");

            // change text of season

          });
});

