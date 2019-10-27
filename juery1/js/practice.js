
$(document).ready(function(){
    $('button').on('click', function(){
       let user = $('#user').val();
        isUserEmpty(user);
    })
})
function setSuccess(success){
    $(success).addClass('border-success');
    $(success).removeClass('border-danger');
}
function setError(error){
    $(error).addClass('border-danger');
    $(error).removeClass('border-success');
}
function isUserEmpty(u){
    if(u !=""){
        setSuccess("#user");
        $.notify("success", "success");
    }else{
        setError("#user");
        $.notify("error", "error");
    }
}