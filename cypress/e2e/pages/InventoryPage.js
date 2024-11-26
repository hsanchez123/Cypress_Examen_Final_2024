class InventoryPage {
  menuButton = '.bm-burger-button'
  logoutLink = '#logout_sidebar_link'
  addCartBtn = ':nth-child(3) > .pricebar > .btn_primary'
  cartIcon = '#shopping_cart_container'

  openMenu() {
    cy.get(this.menuButton).click()
  }

  clickLogout() {
    cy.get(this.logoutLink).click()
  }

  addToCart() {
    cy.get(this.addCartBtn).click()
  }

  goToCart() {
    cy.get(this.cartIcon).click()
  }

  logout() {
    this.openMenu()
    this.clickLogout()
  }
  assertUrlInventory() {
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
  }
}

export default new InventoryPage()
