// // Pogrubienie
// $('#bold .dodaj').click(function () {
//         $('#napisTestowy').addClass("bold")
// });

// $('#bold .usun').click(function () {
//         $('#napisTestowy').removeClass("bold")
// });

// // Ramka na dole
// $('#borderBottom .dodaj').click(function () {
//         $('#napisTestowy').addClass("borderBottom")
// });

// $('#borderBottom .usun').click(function () {
//         $('#napisTestowy').removeClass("borderBottom")
// });

// // Powiekszenie czcionki
// $('#fontSize30 .dodaj').click(function () {
//         $('#napisTestowy').addClass("fontSize30")
// });

// $('#fontSize30 .usun').click(function () {
//         $('#napisTestowy').removeClass("fontSize30")
// });

// // Kolor
// $('#colorRed .dodaj').click(function () {
//         $('#napisTestowy').addClass("colorRed")
// });

// $('#colorRed .usun').click(function () {
//         $('#napisTestowy').removeClass("colorRed")
// });


$(".dodaj").click(function() {
        let id = ($(this).parent().attr("id"))
        $("#napisTestowy").addClass(id)
})

$(".usun").click(function() {
        let id = ($(this).parent().attr("id"))
        $("#napisTestowy").removeClass(id)
})