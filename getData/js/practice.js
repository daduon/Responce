
$(document).ready(function(){
    $.ajax({
        dataType: "json",
        url: "https://reqres.in/api/users?page=2",
        success: function(result){
            var get = "";
            result.data.forEach(element => {
                count = {id,email,first_name,last_name,avatar} = element;
                get += `
                    <tr>
                        <td>${id}</td>
                        <td>${email}</td>
                        <td>${first_name}</td>
                        <td>${last_name}</td>
                        <td><img src="${avatar}" with="30" height="50"></td>
                    </tr>
                `
            });
            $('.table').append(get);
        }
    });
});