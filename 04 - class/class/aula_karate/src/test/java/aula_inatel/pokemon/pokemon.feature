Feature: Testing API Pokemon

  Background: Executa antes de cada teste
    * def url_base = "https://pokeapi.co/api/v2/"


  Scenario: Testing reponse for pokemon/pikachu
    Given url "https://pokeapi.co/api/v2/pokemon/pikachu"
    When method GET
    Then status 200

  Scenario: Testing reponse for pokemon/chocolate
    Given url "https://pokeapi.co/api/v2/pokemon/chocolate"
    When method GET
    Then status 404

  Scenario: Testing reponse for pokemon/pikachu and verifying Json
    Given url url_base
    And path "pokemon/pikachu"
    When method GET
    Then status 200
    And match response.id == 25
    And match response.name == "pikachu"

  Scenario: Testing reponse for pokemon red, entering in url inside of return and verifying Json
    Given url url_base
    And path "version/1"
    When method GET
    Then status 200
    And def idioma = $.names[5].language.url
    And print idioma
    And url idioma
    When method GET
    Then status 200
    And match $.id == 7
    And match $.name == "es"
