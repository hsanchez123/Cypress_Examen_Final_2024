Feature: Logout en Sauce Demo

    Scenario: Logout exitoso con usuario estandar
        Given me encuentro logueado con "standard_user" y la contraseña "secret_sauce"
        When navego al menu lateral
        Then hago click en logout