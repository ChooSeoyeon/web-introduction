document.getElementById('registerButton').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var count = 0;

    if (document.getElementById('movie1').checked) count++;
    if (document.getElementById('movie2').checked) count++;

    window.alert(name + '님, 저와 ' + count + '개의 취향이 같으시네요!');
});