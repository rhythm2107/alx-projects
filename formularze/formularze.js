document.querySelector("input[value=zapisz]").onclick = function(){
    
    let imie = document.querySelector("#imie").value;
    let miasto = document.querySelector("select").value;
    let opis = document.querySelector("textarea").value;
    let kolor = document.querySelectorAll("input[type=radio]");
  
    // for(let x of kolor){
    //     if(x.checked){
    //         console.log(x.value);
    //         break;
    //     }
    // }


    // let danie = document.querySelectorAll("input[type=checkbox]");
    // for(let x of danie){
    //     if(x.checked){
    //         console.log(x.value);
    //     }
    // }
    
    // let txt = "<ul>";
    // for(let i=0; i<=100; i++){
    //     txt += `<li>${i}</li>`;
    // }
    // txt += "</ul>";

    document.querySelector("div").innerHTML = txt;

}

