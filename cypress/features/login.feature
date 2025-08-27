Feature: Login connexion with credentials valid

Background:
  Given je visite le lien "https://www.saucedemo.com/"

  @positif
  Scenario: username correct and password correct
  
    When je saisi username dans le champs username "standard_user"
    And je saisi password dans le champs Password "secret_sauce"
    And je click sur le bouton login
    Then je suis redirige vers la page Dashboard "https://www.saucedemo.com/inventory.html"

  @negatif
  Scenario: username incorrect and password correct
  
    When je saisi username dans le champs username "invalid_username"
    And je saisi password dans le champs Password "secret_sauce"
    And je click sur le bouton login
    Then le message derreur saffiche "Epic sadface: Username and password do not match any user in this service"
  
  @negatif
  Scenario: username correct and password incorrect
  
    When je saisi username dans le champs username "standard_user"
    And je saisi password dans le champs Password "invalid_password"
    And je click sur le bouton login
    Then le message derreur saffiche "Epic sadface: Username and password do not match any user in this service"



