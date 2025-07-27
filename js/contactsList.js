'use strict';
/*שמות מגישים:
ליאון מברין
יאיל סאלם*/

// Contacts array used across all of the JS files
let contacts =
    [
        {
            name: 'Bertie Yates',
            phoneNum: '111111',
            email: 'B.yates@gmail.com',
            address: 'Tel Aviv',
            age: '37',
            image: './images/contact1.jpg'
        },

        {
            name: 'Lindsey Joyner',
            phoneNum: '222222',
            email: 'Linn@hotmail.com',
            address: 'Haifa',
            age: '26',
            image: './images/contact2.jpg'
        },

        {
            name: 'Yusef Grant',
            phoneNum: '3333333',
            email: 'GrYusef@gmail.com',
            address: 'Nazareth',
            age: '42',
            image: './images/contact3.png'
        }
    ];

// Creating and displaying a list element with each person's contact info
const contactList = document.getElementById('contactList');

const buildContactList = (contactsArr) => {

    // Ressetting the contacts list before building the new contact
    contactList.innerHTML = "";

    contactsArr.map((elem, index) => {
        const li = document.createElement('li');

        li.innerHTML =
            `<div class="contact">
            <img src="${elem.image}" class="contactPhoto">
            <h2>${elem.name}</h2>
            <p>E-Mail: ${elem.email}</p>
            <p>Phone Number: ${elem.phoneNum}</p>
            <button data-id="${index}" class="infoButton">
            <img src="./images/infoIcon.png" alt="Info" title="View contact information">
            </button>
            <button data-id="${index}" class="editButton">
            <img src="./images/editIcon.png" alt="Edit" title="Edit contact">
            </button>
             <button data-id="${index}" class="removeButton">
            <img src="./images/deleteContact.png" alt="Remove" title="Remove contact">
            </button>
        </div>`

        contactList.append(li);
    });
};

buildContactList(contacts);

// Changing background color of contact when hovering over them
contactList.addEventListener('mouseover', e => {

    const currentContact = e.target.closest('li');
    if (currentContact)
        currentContact.classList.add('selected');
});

contactList.addEventListener('mouseout', e => {

    const currentContact = e.target.closest('li');

    if (currentContact)
        currentContact.classList.remove('selected');
});

// Button to delete all contacts
const delteAllBtn = document.getElementById('deleteAll');

delteAllBtn.addEventListener('click', () => {
    contactList.remove();
});

// Opening the modal to add a new contact
const newContactBtn = document.getElementById('addContact');

const newContactModal = document.getElementById('newContact');

newContactBtn.addEventListener('click', () => {
    newContactModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Closing the modal
const closeNewContact = () => {
    newContactModal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

document.getElementById('cancelBtn').addEventListener('click', () => {
    closeNewContact();
});

// Saving the new contact and adding them to the array and list displayed to the user
document.getElementById('saveBtn').addEventListener('click', e => {
    e.preventDefault();

    // Getting data from fields
    const name = document.getElementById('contactName');
    const phoneNum = document.getElementById('phoneNum');
    const mail = document.getElementById('mail');
    const address = document.getElementById('address');
    const age = document.getElementById('age');
    const image = document.getElementById('image');

    // Checking if the user has filled out the contact's name and phone number
    if (name.value && phoneNum.value) {
        // Setting a default photo for the contact is the user didn't provide one
        if (!image.value) {
            image.value = './images/defaultPhoto.png';
        }

        // Creating the new contact object and adding to the array
        const newContact = {
            name: name.value.trim(),
            phoneNum: phoneNum.value.trim(),
            email: mail.value.trim(),
            address: address.value.trim(),
            age: age.value.trim(),
            image: image.value.trim()
        };

        contacts.push(newContact);
        name.value = '';
        phoneNum.value = '';
        mail.value = '';
        address.value = '';
        age.value = '';
        image.value = '';

        // Closing the popup and rebuilding the contact list
        closeNewContact();

        buildContactList(contacts);
    } else {
        alert('Contact must contain both name and phone number!');
    }

});