# Functional Test Cases
| **TC ID** | **Title** | **Steps** | **Expected Result** | **Type** | **Automation Type** | 
|---|-----------------------------|---------------------------------------------------------------------------|--------------------------------------------------|------------|----------------------- | 
| TC-01 | Valid Login | Enter username `student`, password `Password123`, click Submit. | User is logged in, message: _Logged In Successfully_. | Positive   | Automated | 
| TC-02  | Case-Insensitive Username | Enter username `STUDENT`, password `Password123`, click Submit. | Display Error as : Your username is invalid! | Positive   | Not Automated       | 
| TC-03 | Enter + Press Enter | Enter valid creds, press Enter instead of clicking "Submit" button. | No change on the screen + No login                                 | Positive   | Not Automated     |
| TC-04 | verify "Logout" functionality | Enter username `student`, password `Password123`, click Submit, verify "Logout" button, click logout button | User should be logged out and navigate back to login page | Positive   | Automated | 
| TC-05 | Navigation Back After Login | 1. Log in successfully 2. Use browser “Back” button | The user should be able to go back to login page | Positive   | Not Automated      |
| TC-06 | Invalid Username | Enter invalid username, valid password, click Submit. | Display Error as : Your username is invalid! | Negative | Automated | 
| TC-07 | Invalid Password | Enter valid username, invalid password, click Submit. | Display Error as : Your password is invalid! | Negative | Automated |
| TC-08 | Empty Credentials | Leave username & password blank, click Submit. | Display Error as : Your username is invalid! | Negative | Automated | 
| TC-09 | Pass one only(Username Only / Password Only) | Enter username only, leave password blank or vice versa, click Submit. | Error displayed based on the blank field | Negative   | Not Automated | 
| TC-10 |  Field validation - Make the fields empty when failed to login | Leave username blank, enter password only, click Submit. | Display Error as : Your username is invalid! | Negative | Automated | 
| TC-11 |  Validate error on page refresh | Leave username blank, enter password only, click Submit and refresh the page. | No error should be displayed/retained | Positive   | Automated | 

---