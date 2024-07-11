$("p").click(function() {
        const colorMap = new Map([
                ['zielony', 'green'],
                ['niebieski', 'blue'],
                ['zolty', 'yellow']
        ])
        
        let thisColor = $(this).attr("id")
        let color = colorMap.get(thisColor)
        $("div").css("background-color", color)
})