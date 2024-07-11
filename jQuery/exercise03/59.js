$("img").mouseover((function () {
        let counter = 0;
        return function () {
                $("#licznik").html(++counter);
        };
})());
