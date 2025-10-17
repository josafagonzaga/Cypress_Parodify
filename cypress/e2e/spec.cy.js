context('Projeto - Buger Eats', () => 
{
	let contexto = 1;
	let cenario = 1;
	let teste = 1;

	context('Tela Home', () => 
	{
		context(`${contexto} - Critérios de aceite.`, () => 
		{
			let complemento = 1;
			describe(`${cenario} - Validações Visuais.`, () => 
			{
				beforeEach(() => {
          cy.tela_home()
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});

				
				it(`${teste}.${complemento} - Valida que todos os links estão visíveis na barra lateral`, () => 
				{
          cy.validar_barra_lateral()
				});

        it(`${teste}.${++complemento} - Valida que todos os links estão visíveis na barra superior`, () => 
				{
          cy.validar_menu_superior_visivel()
				});

        it(`${teste}.${++complemento} - Valida que a lista de playlists contém 8 itens`, () => 
				{
          cy.validar_itens_lista()
				});
			});

			describe(`${++cenario} - Validações Comportamentais.`, () => 
			{
				beforeEach(() => {
				});

				afterEach(() => {
					cy.clearAllLocalStorage();
					cy.clearAllCookies();
					cy.clearAllSessionStorage();
				});
			
					it(`${++teste}.${complemento} - Validar redirecionamento do link.`, () => 
					{
					});
			});
		});
	});
});