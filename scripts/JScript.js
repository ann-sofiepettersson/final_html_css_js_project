
// Create a new list item when clicking on the "Add" button
function newListItem() {
    var list = document.createElement('LI');
    // list.setAttribute("class", "items");
    var newItem = document.getElementById('newTodo').value;
    var l = document.createTextNode(newItem);
    list.appendChild(l);
    if (newItem === '') {
        document.getElementById('newTodo').setAttribute('border', 'red')
    } else {
        document.getElementById('todoList').appendChild(list);
    }
    document.getElementById('newTodo').value = '';

}


// Lägger till ta bort-knapp på varje listrad
var imgDelete = document.getElementsByClassName('items');
for (var i = 0; i < imgDelete.length; i++) {
    var deleteButton = document.createElement('SPAN');
    var img = document.createElement('img');
    img.setAttribute('src', 'images/delete_bin.png');
    img.setAttribute('height', '30px');
    deleteButton.className = 'delete';
    deleteButton.appendChild(img);
    imgDelete[i].appendChild(deleteButton);
}

// Tar bort en rad i listan
var deleteItem = document.getElementsByClassName('delete');
for (var i = 0; i < deleteItem.length; i++) {
    deleteItem[i].onclick = function() {
        var listRow = this.parentElement;
        listRow.style.display = 'none';
    }
}

// Lägger till en checked-symbol
var checkItem = document.querySelector('.todoList');
checkItem.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);




// jQuery

$(document).ready(function () {
    $('#save-event').click(function () {
        $('#event-form').hide(400);
    })
})

// Ändrar färg på text när event är idag eller avslutat
$(document).ready(function () {
    $('.days-left:contains("Idag")').css('color', 'red');
    $('.days-left:contains("Avslutat")').css('color', 'lightgrey');
});

// Skiftar färg vid hover på menyknapparna
$(document).ready(function () {
    $('.nav li a').hover(function () {
        $(this).css('background-color', '#2f2f2f');

    }, function () {
        $(this).css('background-color', '#000000')

    });
});

 $(document).ready(function(){

    $('#add').click(function(){
        $('#event-form').slideToggle();
        $('#aboutSmartEvent').hide(400);
    });
    $('#about').click(function(){
        $('#aboutSmartEvent').slideToggle();
        $('#event-form').hide(400);
    });
});


