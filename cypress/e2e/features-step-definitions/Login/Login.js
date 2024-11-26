import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import InventoryPage from '../../pages/InventoryPage'
import LoginPage from '../../pages/LoginPage'

// Paso para abrir la página de Sauce Demo
Given('que abro la página de Sauce Demo', () => {
  LoginPage.visit()
  cy.screenshot('Login/Sauce Demo')
})

// Paso para ingresar un usuario y contraseña
When('ingreso el usuario {string} y la contraseña {string}', (usuario, password) => {
  LoginPage.enterUsername(usuario)
  LoginPage.enterPassword(password)
  cy.screenshot('Login/Credentials')
  LoginPage.clickLogin()
})

// Paso para verificar que la página de productos se carga
Then('debería ver la página de productos', () => {
  InventoryPage.assertUrlInventory()
  cy.screenshot('Login/Landing Page')
})
