const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];

const btn = document.querySelector('button');
const search = document.getElementById('search');
const para = document.querySelector('p');

para.innerHTML = `<b>Search by this name : </b>` + contacts;

btn.addEventListener('click', function () {
    const inputVal = search.value.toLowerCase();
    inputVal.value = '';
    inputVal.focus;
    para.textContent = ''
    for (const contact of contacts) {
        const splitContact = contact.split(':')
        const contactVal = splitContact[0].toLowerCase();
        if (inputVal == contactVal) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        }
    }
    if (para.textContent === '') {
        para.textContent = 'Contact not found.';
    }
})


