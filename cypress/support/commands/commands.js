import 'cypress-wait-until';
import { cards_musicas, barra_lateral, barra_superior, Cards_Musicass } from "../pages/elementos"

const Barra_Lateral = new barra_lateral
const Barra_Superior = new barra_superior
const Cards_Musicas = new cards_musicas



Cypress.Commands.add('tela_home', () => {
    cy.visit('https://parodify.vercel.app/')
})

Cypress.Commands.add('validarLogo', () => {
    cy.get('aside img.logo')
        .should('be.visible')
})

Cypress.Commands.add('validar_barra_lateral', () => {
    Barra_Lateral.logo
        .should('be.visible')
    Barra_Lateral.menuHome.
        should('be.visible')
    Barra_Lateral.criarPlaylist
        .should('be.visible')
    Barra_Lateral.favoritos
        .should('be.visible')
    Barra_Lateral.linkByPapito
        .should('be.visible')
})
Cypress.Commands.add('validar_menu_superior_visivel', () => {

    Barra_Superior.headerContainer
        .should('be.visible')
    Barra_Superior.campoBusca
        .should('be.visible')
    Barra_Superior.botaoBuscar
        .should('be.visible')
    Barra_Superior.nomeUsuario
        .should('be.visible')
    Barra_Superior.avatarUsuario
        .should('be.visible')
    Barra_Superior.campoBusca
        .should('have.attr', 'placeholder', 'Buscar pelo nome da música')
    Barra_Superior.botaoBuscar
        .should('be.visible')
        .and('not.be.disabled')
})

Cypress.Commands.add('validar_itens_lista', () => {
    Barra_Lateral.listaPlaylists
        .should('have.length', 8)
})

Cypress.Commands.add('validar_primeiro_card', () => {
    // Aguarda os cards carregarem
    Cards_Musicas.musica.should('have.length.greaterThan', 0)

    // Valida o nome da música
    Cards_Musicas.tituloMusica.first()
        .should('be.visible')
        .and('have.text', 'Bughium')

    // Valida o nome do artista
    Cards_Musicas.artistaMusica.first()
        .should('be.visible')
        .and('have.text', 'Nullvana')

    // Valida o botão play
    Cards_Musicas.botaoPlay.first()
        .should('be.visible')
        .and('not.be.disabled')

})

//começar a partir daqui

const albunsEsperados = [
  { titulo: 'Bughium', artista: 'Nullvana' },
  { titulo: 'Nice Bugs Finish Devs', artista: 'Bugreen Day' },
  { titulo: 'Bug Suede Shoes', artista: 'Elvis Testley' },
  { titulo: 'All The Small Sprints', artista: 'Jira 182' },
  { titulo: "The Devs Aren't Alright", artista: 'The Offsprint' },
  { titulo: 'Symphony of Production', artista: 'Megatest' }
]

Cypress.Commands.add('validar_todos_os_cards', () => {

  // Verifica se há a mesma quantidade de cards
  Cards_Musicas.musica.should('have.length', albunsEsperados.length)

  // Faz a validação de cada card individualmente
  Cards_Musicas.musica.each(($card, index) => {
    const album = albunsEsperados[index]

    // Rolagem até o card para evitar problemas de visibilidade
    cy.wrap($card).scrollIntoView().should('be.visible')

    // Valida o título
    cy.wrap($card).find('.title')
      .should('be.visible')
      .and('have.text', album.titulo)

    // Valida o artista
    cy.wrap($card).find('.artist')
      .should('be.visible')
      .and('have.text', album.artista)

    // Valida o botão de play (agora com rolagem + checagem alternativa)
    cy.wrap($card)
      .find('.play', { timeout: 5000 })
      .scrollIntoView()
      .should('exist')
      .and(($el) => {
        expect($el.prop('disabled')).to.be.false
        const display = $el.css('display')
        const visibility = $el.css('visibility')
        expect(display).not.to.eq('none')
        expect(visibility).not.to.eq('hidden')
      })
  })
})

