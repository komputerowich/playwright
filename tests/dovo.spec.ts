import {test, expect} from "@playwright/test";
import { faker } from '@faker-js/faker';

test.only("Registration", async ({page}) => {
    await page.goto("https://stagedovo.dovo.com/")
    await page.getByRole('button', {name: 'Accept Cookies'}).click()
    await page.getByRole('link', {name: 'Login'}).click()
    await expect(page.url()).toEqual('https://stagedovo.dovo.com/en/customer/account/login/referer/aHR0cHM6Ly9zdGFnZWRvdm8uZG92by5jb20vZW4vY3VzdG9tZXIvYWNjb3VudC9pbmRleC8%2C/')
    await page.getByRole('link', {name: 'Create an Account'}).click()
    await page.getByRole('textbox', {name: 'First Name*'}).fill(faker.internet.userName( {firstName:'Test'}))
    await page.getByRole('textbox', {name: 'Last Name*'}).fill('Levie')
    await page.getByRole('textbox', {name: 'Email*'}).fill('bomberka228@gmail.com')
    await page.getByRole('textbox', {name: 'Password*'}).fill('8558585585Zin2')
    await page.getByRole('textbox', {name: 'Confirm Password *'}).fill('8558585585Zin2')
    await page.getByRole('checkbox', {name: 'I have read and accept the privacy policy *'}).check()
    await page.getByRole('button', {name: 'Create an Account'}).click()
    await page.waitForTimeout(3000)
})

test("RegistrationMouse", async ({page}) => {
    await page.goto("https://stagedovo.dovo.com/")
    await page.getByRole('button', {name: 'Accept Cookies'}).click()
    await page.mouse.move(1515, 21)
    await page.mouse.click(1000, 21)
    await expect(page.url()).toEqual('https://stagedovo.dovo.com/en/customer/account/login/referer/aHR0cHM6Ly9zdGFnZWRvdm8uZG92by5jb20vZW4vY3VzdG9tZXIvYWNjb3VudC9pbmRleC8%2C/')
    await page.getByRole('link', {name: 'Create an Account'}).click()
    await page.getByRole('textbox', {name: 'First Name*'}).fill(faker.internet.userName( {firstName:'Test'}))
    await page.getByRole('textbox', {name: 'Last Name*'}).fill('Levie')
    await page.getByRole('textbox', {name: 'Email*'}).fill('bomberka228@gmail.com')
    await page.getByRole('textbox', {name: 'Password*'}).fill('8558585585Zin2')
    await page.getByRole('textbox', {name: 'Confirm Password *'}).fill('8558585585Zin2')
    await page.getByRole('checkbox', {name: 'I have read and accept the privacy policy *'}).check()
    await page.getByRole('button', {name: 'Create an Account'}).click()
})

test.only('Purchase', async ({page}) => {
    await page.goto('https://stagedovo.dovo.com/')
    await page.getByRole('button', {name: 'Allow all Cookies'}).click()
    await page.getByText("Razors Shaving Supplies").hover()
    await page.getByRole('navigation').getByRole('link', { name: 'Straight Razors' }).click()
})

test.only('Purchase-copy', async ({page}) => {
    await page.goto('https://stagedovo.dovo.com/')
    await page.getByRole('button', {name: 'Allow all Cookies'}).click()
    await page.getByText("Razors Shaving Supplies").hover()
    await page.getByRole('navigation').getByRole('link', { name: 'Straight Razors' }).click()
})


// test.beforeAll(async ({page}) =>{
//     await page.goto('https://dovo.com/')
//     await page.getByRole('button', {name: 'Accept Cookies'}).click()
//


// })