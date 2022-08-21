function myFunction() {
    var text1 = document.getElementById('text');
    text1.select();
    text1.setSelectionRange(0, 1000);
    navigator.clipboard.writeText(text1.value)
}

// $(document).ready(function(){
//     $('#btn').click(function(){
//         $('#inputuser').select()
//         document.execCommand("copy");
//     });
// });

