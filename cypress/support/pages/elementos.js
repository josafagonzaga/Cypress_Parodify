export class barra_lateral {
  
  // 🔹 Logo e cabeçalho
  get logo() {
    return cy.get('aside img.logo')
  }

  // 🔹 Menu principal (parte superior)
  get menuHome() {
    return cy.get('nav:first-of-type ul li a').contains('Home')
  }

  // 🔹 Seção "Criar playlist" e "Favoritos"
  get criarPlaylist() {
    return cy.get('nav:nth-of-type(2) ul li a').contains('Criar playlist')
  }

  get favoritos() {
    return cy.get('nav:nth-of-type(2) ul li a').contains('Favoritos')
  }

  // 🔹 Lista de playlists (terceiro <nav>)
  get listaPlaylists() {
    return cy.get('nav:nth-of-type(3) ul li a')
  }

  // 🔹 Itens específicos da lista
  get playlistBackInTest() {
    return cy.contains('a', 'Back in Test')
  }

  get playlistBugMeTender() {
    return cy.contains('a', 'Bug Me Tender')
  }

  get playlistBugSuedeShoes() {
    return cy.contains('a', 'Bug Suede Shoes')
  }

  get playlistNoTest() {
    return cy.contains('a', 'No Test')
  }

  get playlistNiceBugs() {
    return cy.contains('a', 'Nice Bugs Finish Devs')
  }

  get playlistTheDevsArentAlright() {
    return cy.contains('a', "The Devs Aren't Alright")
  }

  get playlistSymphonyOfProduction() {
    return cy.contains('a', 'Symphony of Production')
  }

  get playlistAllTheSmallSprints() {
    return cy.contains('a', 'All The Small Sprints')
  }

  // 🔹 Rodapé
  get linkByPapito() {
    return cy.contains('a', 'by Papito')
  }
}


export class barra_superior {
    
    // Campo de busca
  get campoBusca() {
    return cy.get('#search-input')
  }

  // Botão de buscar
  get botaoBuscar() {
    return cy.get('nav.search button').contains('Buscar')
  }

  // Ícone da lupa (label)
  get iconeLupa() {
    return cy.get('label[for="search-input"] svg')
  }

  // Imagem do usuário logado (avatar)
  get avatarUsuario() {
    return cy.get('button img[alt="Parodify"]')
  }

  // Nome do usuário logado
  get nomeUsuario() {
    return cy.get('.logged-user')
  }

  // Botão de menu do usuário (abre dropdown)
  get botaoMenuUsuario() {
    return cy.get('button[id^="headlessui-menu-button"]')
  }

  // Container principal do header
  get headerContainer() {
    return cy.get('nav.search')
  }
}

export class lista_Musicas {

  // 🎵 Container da lista de músicas
  get listaDeMusicas() {
    return cy.get('.songlist')
  }

  // 🎧 Cada card individual de música
  get musica() {
    return cy.get('.song')
  }

  // 🖼️ Capa da música (imagem)
  get capaMusica() {
    return cy.get('.song .cover')
  }

  // ▶️ Botão de play da música
  get botaoPlay() {
    return cy.get('.song .play')
  }

  // 🎶 Título da música
  get tituloMusica() {
    return cy.get('.song .title')
  }

  // 🧑‍🎤 Nome do artista
  get artistaMusica() {
    return cy.get('.song .artist')
  }

  // 👉 Retorna o card de música pelo nome do título
  musicaPorTitulo(titulo) {
    return cy.get('.song').contains('.title', titulo).parents('.song')
  }

  // 👉 Retorna o card de música pelo nome do artista
  musicaPorArtista(artista) {
    return cy.get('.song').contains('.artist', artista).parents('.song')
  }
}
