/**
 *  main.js
 *  @author John O'Grady
 *  @date 10/11/2015
 *  @note controls ajax calls
 */

function caesar() {

}

$(function(){
    /**
     *  @note prevent default on forms on submit event to stop page refreshing on submit.
     **/
    $('form').each(function(index) {
        $(this).submit(function(event) {
            event.preventDefault();
        });
    });

    $('#encrypt-form').submit(function() {
        console.log('submitted');
        var formData = ($(this).serializeArray());
        $.post('/test', formData, function(data) {
            $('#output-panel').html("<h2>Your encrypted message is:</h2><p>" + data + "</p>");
        });
    });
});
