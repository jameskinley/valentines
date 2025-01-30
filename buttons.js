let messages = 
[
    "don't be silly",
    "think of the presents!",
    "come on now",
    "pleaseeee",
    "i promise it will be worth it!",
    "i'm taking you somewhere nice!",
    "pleeeeeeeeeeeeeeeeeeeeeeeeease",
    "pretty please!!!!"
];
let messageIndex = 0;

function displayNextMessage() {
    $('#message').show();
    $('#message').text(messages[messageIndex]);

    messageIndex++;
    if(messageIndex === messages.length)
    {
        messageIndex = 0;
    }
}

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
        displayNextMessage();
        let btn = $(this);
        
        // Get the current width, height, and font size in pixels
        let newWidth = parseInt(btn.css('width')) * 0.9;
        let newHeight = parseInt(btn.css('height')) * 0.9;
        let newFontSize = parseInt(btn.css('font-size')) * 0.9;
    
        // Override all CSS, including min-width, min-height, and box-sizing
        btn.attr('style', `width: ${newWidth}px !important; height: ${newHeight}px !important; font-size: ${newFontSize}px !important; min-width: 0 !important; min-height: 0 !important; box-sizing: border-box !important; padding: 0 !important; border: none !important;`);
    });    

    $('#btn-yes').click(function(){
        $('#yes-popup').modal('show');
    });
    $('#yes-popup').on('hidden.bs.modal', function () {
        $('#question-container').html('<h3 class="text-center">YIPPEE</h3>')
        $('#message').hide();
        $('#btn-yes').hide();
        $('#btn-no').hide();
    });  
});