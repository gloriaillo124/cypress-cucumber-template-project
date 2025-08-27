Feature: Login connexion
  @tc-001
  @integration
  @recette
  Scenario: valid credentials
    Given jaccede au lien "<url>"
    When je saisi le username dans le champs Username "<username>"
    And je saisi le password dans le champs Password "<password>"
    And je clique sur le bouton login
    Then je vois le titre du site admin "Django administration"

    @integration
    Examples:
      | url                            | username       | password           |
      | http://192.168.1.95:8000/admin | qa_integration | logwire-consulting |

    @recette
    Examples:
      | url                            | username   | password    |
      | http://192.168.1.95:8001/admin | qa_recette | efi-academy |
