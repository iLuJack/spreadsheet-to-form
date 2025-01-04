function addQuestionsToForm() {
    const formId = ''; // Replace with your Google Form ID
    const form = FormApp.openById(formId);

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(); // current spreadsheet
    const data = sheet.getRange('A2:F3' + sheet.getLastRow()).getValues(); 
    // Adjust range as needed 
    // e.g., A2:F3 will get the data from A2 to F3 

    data.forEach(function(row) { // for each row in the data
        const questionText = row[2]; 
        // e.g., if we want to get the question text from column C, then we can use row[2]
        const options = row.slice(3).filter(option => option); 
        // get options from all the columns after column C, and filter out empty values
        // e.g., if we want to get the options from column D, E, F and so on, then we can use row.slice(3)
        if (questionText) { // make sure the question is not empty
            form.addMultipleChoiceItem() // add a multiple choice item to the form
                .setTitle(questionText) // set the question of the multiple choice item
                .setChoiceValues(options) // set the options of the multiple choice item
                .showOtherOption(true); // show the other option
        }
    });
}

