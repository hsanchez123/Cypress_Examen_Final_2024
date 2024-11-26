import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import InventoryPage from '../../pages/InventoryPage'
import LoginPage from '../../pages/LoginPage'

// Paso para abrir la página e ingresar un usuario y contraseña
Given('me encuentro logueado con {string} y la contraseña {string}', (usuario, password) => {
  LoginPage.visit()
  LoginPage.login(usuario, password)
  cy.screenshot('/Logout/Verificando acceso')
})

// Paso para acceder al menú lateral
When('navego al menu lateral', () => {
  InventoryPage.openMenu()
  cy.screenshot('/Logout/Menu Lateral')
})

// Paso para clickear en logout
Then('hago click en logout', () => {
  InventoryPage.clickLogout()
  cy.screenshot('/Logout/Logout exitoso')
})
