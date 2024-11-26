Feature: Login en Sauce Demo

    Background: Login
        Given que abro la página de Sauce Demo
        When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
        Then debería ver la página de productos

    Scenario: Agregar un producto al carrito
        Given agrego un producto al carrito
        When voy al carrito de compras
        Then hago click en checkout
        When lleno la informacion
        Then verifico el overview y finalizo
