$(document).ready(function(){
    $('#text').on('keyup', function() {
        let text = $('#text').val();
        $('.text-success').html(text);
    })
    
    $('#select').on('click', function(){
        let select = $('#select').val();
        $('.text-danger').html(select);
    })

    $('#description').on('keyup',function(){
        let description = $('#description').val();
        $('.text-dark').html(description);
    })

    $('.gender').on('click',function(){
        let gender = $('.gender:checked').val();
        $('.text-info').html(gender);
    })

    $('.fruit').on('click',function(){
        let fruit = "";
        $('.fruit:checked').each(function(){
            fruit += $(this).val() + "<br>";
        })
        let counter = $('[type="checkbox"]:checked').length;
        $('.text-primary').html(fruit +"" + counter);
    })
});
