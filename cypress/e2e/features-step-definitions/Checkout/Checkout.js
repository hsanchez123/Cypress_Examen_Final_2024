import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import InventoryPage from '../../pages/InventoryPage'
import LoginPage from '../../pages/LoginPage'
import CartPage from '../../pages/CartPage'
import YourInformationPage from '../../pages/YourInformationPage'
import OverviewPage from '../../pages/OverviewPage'

// Paso para abrir la página de Sauce Demo
Given('que abro la página de Sauce Demo', () => {
  LoginPage.visit()
})

// Paso para ingresar un usuario y contraseña
When('ingreso el usuario {string} y la contraseña {string}', (usuario, contraseña) => {
  LoginPage.login(usuario, contraseña)
})
Then('debería ver la página de productos', () => {
  InventoryPage.assertUrlInventory()
})

// Agregando un producto al carrito
Given('agrego un producto al carrito', function () {
  InventoryPage.addToCart()
  cy.screenshot('Checkout/Adding to Cart')
})

// Paso para ir al carrito de compras
When('voy al carrito de compras', () => {
  InventoryPage.goToCart()
  cy.screenshot('Checkout/Cart View')
})

// Paso para hacer checkout del producto
Then('hago click en checkout', () => {
  CartPage.clickCheckout()
  cy.screenshot('Checkout/Filling Form')
})

// Paso para rellenar el formulario
When('lleno la informacion', () => {
  YourInformationPage.fillForm()
  cy.screenshot('Checkout/Overview')
})

// Paso para finalizar todo el proceso de checkout
Then('verifico el overview y finalizo', () => {
  OverviewPage.finishCheckout()
  cy.screenshot('Checkout/Finishing checkout')
})
