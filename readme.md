# Spreadsheet to Form

## Overview

The **Spreadsheet to Form** project is a Google Apps Script that automates the process of transferring questions and options from a Google Spreadsheet to a Google Form. This script allows users to easily create forms based on data stored in a spreadsheet.

## Features

- Reads questions from a specified range in a Google Spreadsheet.
- Supports multiple-choice questions with options defined in separate columns.
- Automatically adds questions and options to a Google Form.
- Allows for customization of the form title and question types.

## Setup

1. **Create a Google Spreadsheet:**
   - Create a new Google Spreadsheet.
   - In the first column (A), list your questions.
   - In subsequent columns (B, C, D, etc.), list the options for each question.

   Example:
   ```
   | Question                          | Option 1 | Option 2 | Option 3 |
   |-----------------------------------|----------|----------|----------|
   | What is your favorite color?     | Red      | Blue     | Green    |
   | What is your favorite animal?     | Dog      | Cat      | Bird     |
   ```

2. **Create a Google Form:**
   - Create a new Google Form where you want to add the questions.
   - Note the Form ID from the URL (the part after `/d/` and before `/edit`).

3. **Open Google Apps Script:**
   - In your Google Spreadsheet, go to **Extensions** > **Apps Script**.

4. **Copy the Script:**
   - Replace the default code in the Apps Script editor with the contents of `spreadsheet-to-form.js`.

5. **Modify the Script:**
   - Replace `YOUR_FORM_ID_HERE` in the script with the actual ID of your Google Form.
   - the Form ID is from the form's URL (the part after `/d/` and before `/edit`).

6. **Save and Run the Script:**
   - Save the script and run the function to add questions to your Google Form.
   - Authorize the script to access your Google Sheets and Forms when prompted.

## Usage

- After running the script, check your Google Form to see if the questions and options have been added successfully.
- You can modify the script to customize the question types or add additional features as needed.

## Google Apps Script Forms Service Reference

For how to create different types of questions, see the [Google Apps Script Forms Service](https://developers.google.com/apps-script/reference/forms)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.