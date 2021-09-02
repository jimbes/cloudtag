jQuery("#cloudController select").on("change",function(){
    var value = jQuery(this).val();
    if(value !== undefined && value !== "") {
        if (jQuery(this).hasClass("fontCloud")) {
            jQuery('head').append('<link href="https://fonts.googleapis.com/css2?family='+value+':ital@1&display=swap" rel="stylesheet">');
            jQuery("#cloudtag .tag").css({"font-family":value});
        }
        if (jQuery(this).hasClass("colorCloud")) {
            jQuery("#cloudtag .tag").removeClass("red").removeClass("blue").removeClass("green");
            jQuery("#cloudtag .tag").addClass(value);
        }
    }
})
