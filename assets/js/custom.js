var font = ["Hina+Mincho", "Indie+Flower", "Knewave", "Marck+Script", "Playfair+Display", "Scheherazade"];
var indexFont = 0;

jQuery("body").ready(function(){
    jQuery('head').append('<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">');
    jQuery("#cloudtag .tag").css({"font-family":'Roboto'});
    jQuery('.right-categorie .block-all').scrollTop(jQuery('.right-categorie .block-all')[0].scrollHeight)
});

jQuery("#cloudController").on("click", "button.fontCloud, button.colorCloud",function(){
    if (jQuery(this).hasClass("fontCloud")) {
        jQuery('head').append('<link href="https://fonts.googleapis.com/css2?family='+font[indexFont]+'&display=swap" rel="stylesheet">');
        jQuery("#cloudtag .tag").css({"font-family":font[indexFont].replaceAll("+"," ")});
        indexFont += 1 ;
        if(indexFont >= font.length){
            indexFont = 0;
        }
    }
    if (jQuery(this).hasClass("colorCloud")) {
        jQuery("#cloudtag .tag.color-5").removeClass("color-5").addClass("color-0");
        jQuery("#cloudtag .tag.color-4").removeClass("color-4").addClass("color-5");
        jQuery("#cloudtag .tag.color-3").removeClass("color-3").addClass("color-4");
        jQuery("#cloudtag .tag.color-2").removeClass("color-2").addClass("color-3");
        jQuery("#cloudtag .tag.color-1").removeClass("color-1").addClass("color-2");
        jQuery("#cloudtag .tag.color-0").removeClass("color-0").addClass("color-1");
    }
});
