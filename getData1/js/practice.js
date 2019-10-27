$(document).ready(function(){
   // var url ="https://jsonplaceholder.typicode.com/users";
    $.getJSON(
        url='https://jsonplaceholder.typicode.com/users',
        function(data){
            var result = "";
            data.forEach(element => {
                result +=`
                    <tr>
                        <td>${element.id}</td>
                        <td>${element.email}</td>
                        <td>${element.name}</td>
                    </tr>
                `
            });
            $('.table').append(result);
        }   
    );
});