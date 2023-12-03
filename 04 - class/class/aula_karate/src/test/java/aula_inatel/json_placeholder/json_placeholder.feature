Feature: Testing Resources from JsonPlaceHolder API

  Background: Execute BEFORE EACH test case
    * def url_base = "https://jsonplaceholder.typicode.com/"
    * def post_element = read('json_test.json')
    * def post_element2 = read('json_test2.json')

  Scenario: Getting elements from response array and testing its type
    Given url url_base
    And path 'posts'
    When method get
    Then status 200
    And match $ == '#[]'
    And match $ == '#[100]'
    And match each $ contains {title:  '#string', userId:  '#number'}

  Scenario: Creating a new element using POST method
    Given url url_base
    And path 'posts'
    When request {title:  'Test title', body: 'Test Body', userId: 1}
    When method post
    Then status 201
    And match $.id == 101
    And match $.title == '#string'
    And match $.body == 'Test Body'
    And match $.userId == '#number'

  Scenario Outline: Creating a new element using POST method
    Given url url_base
    And path 'posts'
    When request <post_element>
    When method post
    Then status 201
    And match $.id == 101
    And match $.title == '#string'
    And match $.body == '<body>'
    And match $.userId == '#number'
    Examples:
      | post_element  |  body        |
      | post_element  |  Test Body   |
      | post_element2 |  Test Body2  |