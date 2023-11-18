Feature: Testing API Pokemon

  Background: Executa antes de cada teste
    * def url_base = "https://pokeapi.co/api/v2/"
    * def url_bulbasaur = "https://pokeapi.co/api/v2/pokemon/bulbasaur/"


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

####    Testes
  Scenario: Testing reponse for pokemon bulbassaur and verifying Json
    Given url url_bulbasaur
    When method GET
    Then status 200
    And match $.id == 1
    And match $.name == "bulbasaur"
    And match $.weight == 69

  Scenario: Testing reponse for pokemon bulbassaur, entering in url for ability and verifying Json
    Given url url_bulbasaur
    When method GET
    Then status 200
    And def ability_url = $.abilities[1].ability.url
    And url ability_url
    When method GET
    Then status 200
    And match $.id == 34
    And match $.is_main_series == true
    And match $.effect_entries[0].language.name == "de"

  Scenario: Testing reponse for pokemon bulbassaur, entering in url for stat and verifying Json
    Given url url_bulbasaur
    When method GET
    Then status 200
    And match $.stats[1].stat.name == "attack"
    And def stat_url = $.stats[1].stat.url
    And url stat_url
    When method GET
    Then status 200
    And def names = $.names[4]
    And match names.name == "Angriff"


