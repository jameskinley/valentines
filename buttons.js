$(document).ready(function(){
    $('#btn-yes').hide();
    $('#btn-no').hide();

    $(".spoiler").click(function(){
        $(".spoiler").css("color", "black");
        $(".spoiler").css("background-size", "0% 100%");
        $('#btn-yes').show();
        $('#btn-no').show();
    });
    $('#btn-no').click(function(){
        let btn = $(this);
        
        // Get the current width, height, and font size in pixels
        let newWidth = parseInt(btn.css('width')) * 0.9;
        let newHeight = parseInt(btn.css('height')) * 0.9;
        let newFontSize = parseInt(btn.css('font-size')) * 0.9;
    
        // Override all CSS, including min-width, min-height, and box-sizing
        btn.attr('style', `width: ${newWidth}px !important; height: ${newHeight}px !important; font-size: ${newFontSize}px !important; min-width: 0 !important; min-height: 0 !important; box-sizing: border-box !important; padding: 0 !important; border: none !important;`);
    });    
});