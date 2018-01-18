var items = [];


function teste() {

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
    template += '<div onclick="teste()" class="form__button-itemremove">-</div>';

    div.innerHTML = template;

    document.getElementById("itens").appendChild(div);
}


/*
    <div class = "form__item"> ITEM </div>
            <div class="form__item-num"> 0 </div>
            <div> <input type="text" class="form__item-add"> </div>
            <div onclick="teste()" class="form__button-itemremove">-</div>*/

