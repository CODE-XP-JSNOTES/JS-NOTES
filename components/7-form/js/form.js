var items = [];


function adicionarItens() {

    event.preventDefault();

    var item = {
        titulo: document.getElementById('titulo').value,
        teste: 32
    };

    items.push(item);

    // alert(item.titulo);

    var div = document.createElement('div');
    div.id = "item";

    

    var template = "";
    template += '<div class = "form__item"> ITEM </div>';
    template += '<div class="form__item-num">' + items.length + '</div>';
    template += ' <div> <input type="text" class="form__item-add"></div>';
    template += '<div class="form__button-itemremove">-</div>';
   

    div.innerHTML = template;

    document.getElementById("lista-itens").appendChild(div);
}


function validarForm(){

    var template = "";

     template += '<button type = "submit" class="form__button"> Cadastrar c/ DOM </button>';
     template += '<button type = "submit" class="form__button"> Cadastrar s/ DOM </button>';
     template += '<button type = "submit" class="form__button"> Limpar </button>';

     document.getElementById("form__buttons").innerHTML=template;

}

function removerItems(){


}


/*
    <div class = "form__item"> ITEM </div>
            <div class="form__item-num"> 0 </div>
            <div> <input type="text" class="form__item-add"> </div>
            <div onclick="teste()" class="form__button-itemremove">-</div>*/

