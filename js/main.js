function redirectTopSearch() {
    var topSearchInd = document.createElement('input');
    topSearchInd.setAttribute('type', 'hidden');
    topSearchInd.setAttribute('name', 'btnI');
    topSearchInd.setAttribute('value', '1');

    var form = document.getElementById('form');
    form.appendChild(topSearchInd);
    form.submit();
}