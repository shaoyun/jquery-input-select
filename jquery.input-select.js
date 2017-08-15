/*
 * jQuery Input Select
 * https://github.com/shaoyun/jquery-input-select
 *
 * Copyright (c) 2017 Shaoyun
 */

(function($) {
    $.fn.inputSelect = function(options) {
        var defaults = {
            closedCss: "input-select-closed",
        };
        var opts = $.extend(defaults,options);

        var closeItems = function($elem) {
            var $root = $elem.find(".input-select-items");
            if(!$root.hasClass(opts.closedCss)) {
                $root.addClass(opts.closedCss);
            }
        };

        $(this).each(function(){
            var $elem     = $(this);
            var $input = $elem.find("input");
            var $items = $elem.find(".input-select-items");
            $items.find(".input-select-item").click(function(){
                $input.val($(this).data("val"));
                closeItems($elem);
            });
            $elem.find("button").click(function(){
                if($items.hasClass(opts.closedCss)) {
                    $items.removeClass(opts.closedCss);
                } else {
                    $items.addClass(opts.closedCss);
                }
            });
            $items.css("width", $elem.width() + "px");
        });
        $("html").click(function(e){
            var target  = $(e.target);
            if(target.closest(".input-select").length == 0){  
                $(".input-select").each(function(){
                    var $root = $(this).find(".input-select-items");
                    if(!$root.hasClass(opts.closedCss)) {
                        $root.addClass(opts.closedCss);
                    }
                });
            }
        });
    }
})(jQuery);