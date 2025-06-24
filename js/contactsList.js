'use strict';
/*שמות מגישים:
ליאון מברין
יאיל סאלם*/

// Contacts array
const contacts =
    [
        {
            name: 'Bertie Yates',
            phoneNum: '111111',
            email: 'B.yates@gmail.com',
            image: './images/contact1.jpg'
        },

        {
            name: 'Lindsey Joyner',
            phoneNum: '222222',
            email: 'Linn@hotmail.com',
            image: './images/contact2.jpg'
        },

        {
            name: 'Yusef Grant',
            phoneNum: '3333333',
            email: 'GrYusef@gmail.com',
            image: './images/contact3.png'
        }
    ];

// Creating and displaying a list element with each person's contact info
const contactList = document.getElementById('contactList');

contacts.forEach((elem, index) => {
    const li = document.createElement('li');

    const contactDiv = document.createElement('div');

    contactDiv.className = 'contact';

    // Creating the edit, view and delete icons for each contact
    const removeBtn = document.createElement('button');
    removeBtn.className = 'removeButton';
    removeBtn.innerHTML = '<img src="./images/deleteContact.png" alt="Remove" title="Remove contact">';
    contactDiv.prepend(removeBtn);

    const editBtn = document.createElement('button');
    editBtn.className = 'editButton';
    editBtn.innerHTML = '<img src="./images/editIcon.png" alt="Edit" title="Edit contact">';
    contactDiv.prepend(editBtn);

    const infoBtn = document.createElement('button');
    infoBtn.className = 'infoButton';
    infoBtn.innerHTML = '<img src="./images/infoIcon.png" alt="Info" title="View contact information">';
    infoBtn.setAttribute('data-id', index);
    contactDiv.prepend(infoBtn);

    //Creating the paragraph for contact's phone number
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Phone Number: ' + elem.phoneNum;
    contactDiv.prepend(phoneNumber);

    // Contact Email
    const emailAdd = document.createElement('p');
    emailAdd.textContent = 'E-mail: ' + elem.email;
    contactDiv.prepend(emailAdd);

    // Contact Name
    const contactName = document.createElement('h2');
    contactName.textContent = elem.name;
    contactDiv.prepend(contactName);

    // Contact photo
    const contactPhoto = document.createElement('img');
    contactPhoto.setAttribute('src', elem.image);
    contactPhoto.className = 'contactPhoto'
    contactDiv.prepend(contactPhoto);

    li.prepend(contactDiv);

    contactList.append(li);
});

// Button to delete all contacts
const delteAllBtn = document.getElementById('deleteAll');

delteAllBtn.addEventListener('click', () => {
    contactList.remove();
});