document.addEventListener('DOMContentLoaded', function () {


    const cancelButton = document.querySelector('.cancel-button');
    cancelButton.addEventListener('click', clearForm);
});

function setCookies() {
    const formFields = document.querySelectorAll('.form-field');
    formFields.forEach((field) => {
        document.cookie = `${field.id}=${field.value}`;
    });
}

function clearForm() {
    const formFields = document.querySelectorAll('.form-field');
    formFields.forEach((field) => {
        field.value = '';

        // Uncheck checkboxes
        document.querySelectorAll('.form-checkbox').forEach(function (checkbox) {
            checkbox.checked = false;
        });

        // Uncheck radio buttons
        document.querySelectorAll('.form-radio').forEach(function (radio) {
            radio.checked = false;
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Other script code

    // Function to handle the submit action
    function handleSubmit() {
        // Set cookies
        document.querySelectorAll('.form-field').forEach(function (field) {
            document.cookie = field.id + '=' + field.value + ';path=/';
        });

        // Display success modal
        var successModal = document.createElement('div');
        successModal.className = 'success-modal';
        successModal.innerHTML = 'Success!';
        document.body.appendChild(successModal);

        // Close success modal after a few seconds
        setTimeout(function () {
            successModal.style.display = 'none';
        }, 2000);

        // Clear input fields one by one after the modal closes
        setTimeout(function () {
            document.querySelectorAll('.form-field').forEach(function (field) {
                field.value = '';
            });
        }, 2500);
    }

    // Event listener for the Submit button
    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', handleSubmit);

});


document.addEventListener('DOMContentLoaded', function () {
    // List of field names
    const fieldNames = [
        "Your second email",
        "What day is today?",
        "Last 4 digits of Pi",
        "42 or not 42",
        "What were you doing on 23 June 2007 at 16:52?"
    ];

    // List of checkbox names
    const checkboxNames = [
        "I want coffee",
        "I like this task!",
        "I'll change my email after I sign up",
        "I'm really just a script"
    ];

    // Function to create a div with the given class and ID
    function createDiv(classname, id) {
        const div = document.createElement('div');
        div.className = classname;
        if (id) {
            div.id = id;
        }
        return div;
    }

    // Function to randomly pick and add/remove elements
    function updateElements() {
        // Pick random field and checkbox names
        const randomFieldName = fieldNames[Math.floor(Math.random() * fieldNames.length)];
        const randomCheckboxName = checkboxNames[Math.floor(Math.random() * checkboxNames.length)];

        // Check if the field and checkbox exist
        const fieldExists = document.getElementById(randomFieldName);
        const checkboxExists = document.querySelector(`input[type="checkbox"][value="${randomCheckboxName}"]`);

        // If they exist, remove them along with labels and line breaks
        if (fieldExists) {
            fieldExists.parentNode.removeChild(fieldExists);
        }
        if (checkboxExists) {
            const checkboxLabel = checkboxExists.nextElementSibling;
            if (checkboxLabel && checkboxLabel.tagName.toLowerCase() === 'label') {
                const brTagId = `${randomCheckboxName}-br`;
                const brTag = document.getElementById(brTagId);
                if (brTag) {
                    brTag.parentNode.removeChild(brTag);
                }
                checkboxLabel.parentNode.removeChild(checkboxLabel);
            }
            checkboxExists.parentNode.removeChild(checkboxExists);
        }

        // If they don't exist, add them to the bottom of the form and checkbox group
        else {
            // Create a div with class "form-group" and ID based on the field name
            const newFieldGroup = createDiv('form-group', randomFieldName);

            // Create new input field
            const newField = document.createElement('input');
            newField.type = 'text';
            newField.id = randomFieldName;
            newField.placeholder = randomFieldName;
            newField.className = 'form-field';
            newField.required = true;

            // Append new field to the form group
            newFieldGroup.appendChild(newField);

            // Append the form group to the form
            document.getElementById('inputs-container').appendChild(newFieldGroup);

            // Create a div with class "form-group" and ID based on the checkbox name
            const newCheckboxGroup = createDiv('form-group', randomCheckboxName);

// Create new checkbox
            const newCheckbox = document.createElement('input');
            newCheckbox.type = 'checkbox';
            newCheckbox.value = randomCheckboxName;
            newCheckbox.required = true;

            // Create line break with ID for the checkbox
            const brTagId = `${randomCheckboxName}-br`;
            const lineBreak = document.createElement('br');
            lineBreak.id = brTagId;

            // Create label for the checkbox
            const checkboxLabel = document.createElement('label');
            checkboxLabel.appendChild(document.createTextNode(randomCheckboxName));

            // Append line break, new checkbox, and label to the checkbox group
            document.getElementById('checkboxes-group').appendChild(lineBreak);
            document.getElementById('checkboxes-group').appendChild(newCheckbox);
            document.getElementById('checkboxes-group').appendChild(checkboxLabel);
        }
    }

    // Execute updateElements every 2 seconds
    setInterval(updateElements, 2000);
});


