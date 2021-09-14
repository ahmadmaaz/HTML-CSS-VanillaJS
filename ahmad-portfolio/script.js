
$('.nav-link').click(function(){
    if ($(this).text()=='About Me'){
        $('#about-me-info').slideDown()}
    else if($(this).text()=='Projects'){
        $('#project-field').slideDown()
    }
    
})
$('#about-me').click(function(){
    $('#about-me-info').slideToggle()
})
$('#project-toggle').click(function(){
    $('#project-field').slideToggle()
})
$("#about-me-info").hide()
$('#project-field').hide()