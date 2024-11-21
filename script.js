function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function toggleControl(control) {
    document.getElementById(`${control}-button`).classList.toggle('off');
}

function addContact() {
    const login = prompt('Введите логин контакта:');
    const name = prompt('Введите имя контакта:');
    const img = prompt('Введите URL изображения контакта:');
    if (login && name && img) {
        const contactList = document.getElementById('contacts-list');
        const contact = document.createElement('div');
        contact.className = 'contact';
        contact.setAttribute('onclick', `startCall('${name}')`);
        contact.innerHTML = `<img src="${img}" alt="Контакт"><p>${name}</p>`;
        contactList.appendChild(contact);
    }
}

function startCall(contactName) {
    alert(`Начинаем звонок с ${contactName}`);
    showScreen('call-screen');
}

function endCall() {
    alert('Звонок завершен.');
    showScreen('contacts-screen');
}
