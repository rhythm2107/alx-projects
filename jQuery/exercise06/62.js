let animationMap = new Map([
        ['ukryj', 'hide'],
        ['pokaz', 'show'],
        ['sDown', 'slideDown'],
        ['sUp', 'slideUp'],
        ['fIn', 'fadeIn'],
        ['fOut', 'fadeOut'],
])


$("p").click(function() {
        let animationFunction = animationMap.get($(this).attr("id"))
        $("#blokTestowy")[animationFunction]("fast")
})