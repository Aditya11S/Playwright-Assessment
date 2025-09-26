import {test,expect} from '@playwright/test';

//Declaration of constants
const LOGIN_URL = 'https://practicetestautomation.com/practice-test-login/';
const LOGGED_URL = 'https://practicetestautomation.com/logged-in-successfully/';

//Function to enter credentials
async function enterCredentials(page, username, password) {
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click('#submit');
}

//Main function to test the login functionality with assertions
// This is a test case for valid login as well.
test('Testing the web login', async ({page}) =>{
    await page.goto(LOGIN_URL);
    
    await enterCredentials(page, 'student', 'Password123');
    
    //Locating and storing the scuccess message
    const successMessage = page.locator('h1.post-title');
    const logoutButton = page.locator('a[href="https://practicetestautomation.com/practice-test-login/"]');

    //Validation
    //await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText('Logged In Successfully');
    await expect(page).toHaveURL(LOGGED_URL);
    await expect(logoutButton).toBeVisible();

    //Page close
    await page.close();

});

//Automated test cases - Positive
test('TC-04: verify Logout functionality', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await enterCredentials(page, 'student', 'Password123');
    const logoutButton = page.getByRole('link', { name: 'Log out' });
    await expect(logoutButton).toBeVisible();
    await expect(logoutButton).toHaveText('Log out');
    await logoutButton.click();
    await expect(page).toHaveURL(LOGIN_URL);
  });

//Automated test cases - Negative
  test('TC-06: Invalid Username', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await enterCredentials(page, 'wrongUser', 'Password123');
    await expect(page.locator('#error')).toHaveText('Your username is invalid!');
  });

  test('TC-07: Invalid Password', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await enterCredentials(page, 'student', 'wrongPass');
    await expect(page.locator('#error')).toHaveText('Your password is invalid!');
  });

  test('TC-08: Empty Credentials', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.click('#submit');
    await expect(page.locator('#error')).toHaveText('Your username is invalid!');
  });

  test('TC-10: Field validation - Make the fields empty when failed to login', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await enterCredentials(page, 'student', 'wrongPass');
    await expect(page.locator('#error')).toHaveText('Your password is invalid!');
    await expect(page.locator('#username')).toHaveValue('');
    await expect(page.locator('#password')).toHaveValue('');
  });

  test('TC-11: Validate error on page refresh', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await enterCredentials(page, 'student', 'wrongPass');
    await expect(page.locator('#error')).toBeVisible();
    await page.reload();
    await expect(page.locator('#error')).not.toHaveClass('show');
    await expect(page.locator('#username')).toBeEmpty();
    await expect(page.locator('#password')).toBeEmpty();
  });