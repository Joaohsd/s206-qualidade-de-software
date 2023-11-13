Feature: Testing API StarWars

Scenario: Testing reponse for people/1/
        Given url "https://swapi.dev/api/people/1/"
        When method GET
        Then status 200

Scenario: Testing reponse for people/1234/
        Given url "https://swapi.dev/api/people/1234/"
        When method GET
        Then status 404
