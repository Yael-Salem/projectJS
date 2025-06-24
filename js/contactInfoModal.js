'use strict';
/*שמות מגישים:
ליאון מברין
יאיל סאלם*/

// Array of each contact's information
const contactsInfo =
    [
        {
            name: 'Bertie Yates',
            phoneNum: '111111',
            email: 'B.yates@gmail.com',
            address: 'Tel Aviv',
            age: '37'
        },

        {
            name: 'Lindsey Joyner',
            phoneNum: '222222',
            email: 'Linn@hotmail.com',
            address: 'Haifa',
            age: '26'
        },

        {
            name: 'Yusef Grant',
            phoneNum: '3333333',
            email: 'GrYusef@gmail.com',
            address: 'Nazareth',
            age: '42'
        }
    ];


const modalContent = document.querySelector('.modal-content');

// Span to contain relevant contact's information
const contactModaInfo = document.createElement('span');

// Function to fill the modal with the relevant contact info
function fillPopup(index) {

    // Resetting the info displayed in order to display one contact's info at a time
    contactModaInfo .innerHTML = '';


    contactModaInfo.innerHTML =
        `<h2 class="contactName">${contactsInfo[index].name}</h2>
         <p class="contactDetails age">Age: ${contactsInfo[index].age}</p>
         <p class="contactDetails phoneNumber">Phone Number: ${contactsInfo[index].phoneNum}</p>
         <p class="contactDetails contactAddress">Address: ${contactsInfo[index].address}</p>`;

    modalContent.append(contactModaInfo);

};


const contactModal = document.querySelector('.modal');

const contactInfoList = document.getElementById('contacts');

// Opening the modal and displaying the revelant info
contactInfoList.addEventListener('click', e => {

    const infoBtn = e.target.closest('.infoButton');

    if (infoBtn) {

        contactModal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        fillPopup(Number(infoBtn.getAttribute('data-id')));
    }
});

const close = document.getElementById('closeModal');

const modal = document.querySelector('.modal');

// Closing the modal
modal.addEventListener('click', e => {

    // If the user clicks either outside the main body of the modal (i.e where the contact info is displayed) or on the close button
    if (e.target === modal || e.target === close) {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});