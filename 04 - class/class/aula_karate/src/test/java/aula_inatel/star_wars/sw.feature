Feature: Testing API StarWars

Scenario: Testing reponse for people/1/
        Given url "https://swapi.dev/api/people/1/"
        When method GET
        Then status 200

Scenario: Testing reponse for people/1234/
        Given url "https://swapi.dev/api/people/1234/"
        When method GET
        Then status 404

Scenario: Testing reponse for planets/2/
        Given url "https://swapi.dev/api/planets/2/"
        When method GET
        Then status 200

Scenario: Testing reponse for planets/1234/
        Given url "https://swapi.dev/api/planets/1234/"
        When method GET
        Then status 404

Scenario: Testing reponse for starships/2/
        Given url "https://swapi.dev/api/starships/2/"
        When method GET
        Then status 200

Scenario: Testing reponse for starships/1/
        Given url "https://swapi.dev/api/starships/1/"
        When method GET
        Then status 404
