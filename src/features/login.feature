Feature: Login

  Scenario: Login exitoso
    Given el usuario navega a la página de login
    When ingresa credenciales válidas
    Then debería ver la página de productos