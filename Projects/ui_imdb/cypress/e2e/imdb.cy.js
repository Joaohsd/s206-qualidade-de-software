// Adding intellisense for cypress commands
/// <reference types="cypress"/> 

const EMAIL = 's206.teste@gmail.com'
const PASSWORD = 'qualidadeteste'
const USER = 'Teste'

function visitTop250MoviesList(){
  cy.get('#imdbHeader-navDrawerOpen').click()
  cy.get('.navlinkcat__item').contains("Movies").click()
  cy.get('[href="/chart/top/?ref_=nv_mv_250"] > .ipc-list-item__text').click()
}

function visitMoviesGenreList(){
  cy.get('#imdbHeader-navDrawerOpen').click()
  cy.get('.navlinkcat__item').contains("Movies").click()
  cy.get('[href="/feature/genre/?ref_=nv_ch_gr"] > .ipc-list-item__text').click()
}

function visitWhatToWatch(){
  cy.get('#imdbHeader-navDrawerOpen').click()
  cy.get('.navlinkcat__item').contains("Watch").click()
  cy.get('[href="/what-to-watch/?ref_=nv_watch"] > .ipc-list-item__text').click()
}

function visitHelpPage(){
  cy.get('#imdbHeader-navDrawerOpen').click()
  cy.get('.navlinkcat__item').contains("Community").click()
  cy.get('[href="https://help.imdb.com/imdb?ref_=cons_nb_hlp"] > .ipc-list-item__text').click()
}

describe('Test Scenario: Testing IMDB site about movies', () => {
  
  it('Test Case: Testing correct Log in IMDB site', () => {
    // given
    const expectedText = USER

    // when
    cy.login(EMAIL, PASSWORD)
    
    // then
    cy.get('.ipc-btn__text > .imdb-header__account-toggle--logged-in').should('have.text', expectedText)
  })

  it('Test Case: Testing Log out from IMDB site', () => {
    // given 
    const expectedText = 'Sign In'

    // when
    cy.login(EMAIL, PASSWORD)
    cy.get('.ipc-btn__text > .imdb-header__account-toggle--logged-in').click()
    cy.get('.imdb-header-account-menu__sign-out').click()

    // then
    cy.get('.nav__userMenu > .ipc-btn > .ipc-btn__text').should('have.text', expectedText)
  })

  it('Test Case: Testing correct table with Top 250 Movies', () => {
    // given
    const expectedMessageTitle = 'IMDb Top 250 Movies'
    const expectedMessageNumber = '250 Titles'

    // when
    cy.login(EMAIL, PASSWORD)
    visitTop250MoviesList()

    // then
    cy.get('[data-testid="chart-layout-sidebar-title-container"] > .ipc-title--section-title > hgroup > .ipc-title__text').should('contain.text', expectedMessageTitle)
    cy.get('[data-testid="chart-layout-total-items"]').should('have.text', expectedMessageNumber)
    cy.get('.ipc-metadata-list').children().should('have.length', 250);
  })

  it('Test Case: Testing if genre filter list appears for movies', () => {
    // given
    const expectedMovieMessage = 'Popular movies by genre'
    const expectedMinNumberGenre = 10

    // when
    cy.login(EMAIL, PASSWORD)
    visitMoviesGenreList()

    // then
    cy.get('#movie').should('have.text', expectedMovieMessage)
    cy.get(':nth-child(3) > .ipc-chip-list--base > .ipc-chip-list__scroller').children().should('have.length.above',expectedMinNumberGenre)
  })

  it('Test Case: What to watch works correctly', () => {
    // given
    const expectedText = 'What to Watch'

    // when
    cy.login(EMAIL, PASSWORD)
    visitWhatToWatch()
    
    // then
    cy.get('h1.ipc-title__text').should('contain.text', expectedText)
  })

  it('Test Case: Testing if help page is reachable', () => {
    // given
    const expectedMessage = 'Help Center'

    // when
    cy.login(EMAIL, PASSWORD)
    visitHelpPage()

    // then
    cy.get('.a-section > .a-size-extra-large').should('contain.text', expectedMessage)
  })

  it('Test Case: Testing if Log In in help page is working (BUG)', () => {
    // given

    // when
    cy.visit('https://www.imdb.com/')
    visitHelpPage()
    cy.get('#loginSelector').click()
    cy.get('.a-span-last > .a-align-center').click()
    
    // then
    cy.get('[href="https://www.imdb.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.imdb.com%2Fregistration%2Fap-signin-handler%2Fimdb_us&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=imdb_us&openid.mode=checkid_setup&siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl91cyIsInJlZGlyZWN0VG8iOiJodHRwczovL3d3dy5pbWRiLmNvbS8_cmVmXz1sb2dpbiJ9&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&tag=imdbtag_reg-20"] > .auth-provider-text').should('not.exist')
  })

  it('Test Case: Testing incorrect Log in IMDB site because of the PASSWORD', () => {
    // given 
    const incorrectPassword = PASSWORD+'teste'
    var expectedMessage = ''
    
    // when
    cy.login(EMAIL, incorrectPassword)

    // then
    // Check for the presence of the password error message
    cy.get('span.a-size-large').then(($errorElement) => {
      if ($errorElement.length) {
          // Password error message is present
          cy.log('Password is incorrect');
          // You can perform additional actions or assertions for this case
      } else {
          // Password error message is not present, check for the puzzle
          cy.get('.a-list-item').then(($puzzleElement) => {
              if ($puzzleElement.length) {
                  // Puzzle is present
                  cy.log('Puzzle needs to be solved');
                  // You can perform actions to interact with and solve the puzzle
              } else {
                  // Neither password error nor puzzle, possibly successful login
                  cy.log('Login successful');
                  // You can perform additional actions or assertions for successful login
              }
          });
      }
    });
  })
})