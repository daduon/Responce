$(document).ready(function(){
    $('.form-check-input').on('click',function(){
        let check = "";
        let input1 = $('#striped');
        let input2 = $('#dark');

        $('.form-check-input:checked').each(function(){
            check += $(this).val() +" ";
        });
        if(input1.prop("checked") == true){;
            addData(check);
        }
        if(input1.prop("checked") == false){
            $('.table').removeClass("table-striped");

        }
        if(input2.prop("checked") == true){
            addData(check);
        }
        if(input2.prop("checked") == false){
            $('.table').removeClass("table-dark");
        }

    });
});

function addData(data){
    $('.table').addClass(data);
}