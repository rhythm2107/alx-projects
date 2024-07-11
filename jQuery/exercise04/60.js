$("input[type=text]").keyup(function() {
        let value = $(this).val()
        $("#klon").html(value)
})