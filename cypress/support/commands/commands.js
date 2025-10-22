import 'cypress-wait-until';
import { nome_musicas, lista_albuns, barra_lateral, barra_superior, lista_Musicas } from "../pages/elementos"

const Barra_Lateral = new barra_lateral
const Barra_Superior = new barra_superior
//const albunsEsperados = new lista_Musicas
const Nome_Musica = new nome_musicas



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

Cypress.Commands.add('validar_titulos_albuns', () => {
    Nome_Musica.musica ({ timeout: 10000 })
      .should('have.length', albunsEsperados.length)
      .each(($titulo, index) => {
        cy.wrap($titulo)
          .should('be.visible')
          .and('have.text', albunsEsperados[index])
      })
})