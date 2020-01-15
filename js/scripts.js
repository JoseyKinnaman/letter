$(document).ready(function() {
    $("#form").submit(function(event) {
        var inputName = $("input#name").val();
        $(".personName").text(inputName);
        $(".card").show();
    event.preventDefault();
    });
});