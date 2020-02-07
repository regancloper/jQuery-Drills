$('#btnSubmit').on("click", function (e) {
    e.preventDefault();
    let $val = $('input[type="text"]').val();
    // $('div').append('<h2>' + $val + '</h2>');
    $('ul').append('<li>' + $val + '</li>');
    addListListener();
    addRemoveListener();
});

$('input[type="text"]').keyup(function () {
    let $val = $('input[type="text"]').val();
    if ($val.length > 0) {
        $('#btnSubmit').removeAttr('disabled');
    } else {
        $('#btnSubmit').attr('disabled', 'disabled');
    }
});


$('body').append('<ul></ul>');


function addListListener() {
    $('li').click(function() {
        $(this).css('color', assignRandomColor());
    });
}

function addRemoveListener() {
    $('li').dblclick(function() {
        $(this).remove();
    });
}

function assignRandomColor() {
    let r = generateRandomNumber();
    let g = generateRandomNumber();
    let b = generateRandomNumber();
    color = "rgb(" + r + ", " + g + ", " + b +")";
    return color;
}

function generateRandomNumber() {
    return (Math.floor(Math.random() * 255));
}

