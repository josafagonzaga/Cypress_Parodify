context('Projeto - Buger Eats', () => {
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context('Tela Home', () => {
		context(`${contexto} - Critérios de aceite.`, () => {
			let complemento = 1;
			describe(`${cenario} - Validações Visuais.`, () => {
				beforeEach(() => {
					cy.tela_home()
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});


				it(`${teste}.${complemento} - Valida que todos os links estão visíveis na barra lateral`, () => {
					cy.validar_barra_lateral()
				});

				it(`${teste}.${++complemento} - Valida que todos os links estão visíveis na barra superior`, () => {
					cy.validar_menu_superior_visivel()
				});

				it(`${teste}.${++complemento} - Valida que a lista de playlists contém 8 itens`, () => {
					cy.validar_itens_lista()
				});

				it.only(`${teste}.${++complemento} - Validar exibição das capa dos albuns`, () => {
					cy.get('.song .cover') // espera até 10s se necessário
						.should('have.length.at.least', 1) // garante que existe pelo menos 1 capa
						.each(($img) => {
							cy.wrap($img)
								.scrollIntoView() // garante que a imagem entre na viewport
								.should('be.visible') // valida que está visível
								.and('have.attr', 'src') // valida que tem o atributo src
								.and('not.be.empty') // e que não está vazio
						})
				});
			});

			describe(`${++cenario} - Validações Comportamentais.`, () => {
				beforeEach(() => {
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});

				it(`${++teste}.${complemento} - Validar redirecionamento do link.`, () => {

				});
			});
		});
	});
});