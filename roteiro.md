# Roteiro do curso

## Aula01

- [x] Acessar o layout no Figma: https://www.figma.com/file/Y1W8HJHKqlUdDFeWi8e4cz/Alura-Space-%7C-React%3A-arquivos-est%C3%A1ticos?node-id=89-4
- [x] Baixar os arquivos do curso.
- [x] Organizar arquivos e pastas.
- [x] Criar uma pasta para salvar as páginas.
- [x] Criar a pagina inicial (PaginaInicial).
- [x] Criar o componente Cabecalho.
- [x] **Dica** - Deixar as imagens que o componente utiliza na propria pasta do component.
- [x] Instalar o pre-processador SASS >> `npm install --save-dev sass`.
- [x] Utilizar SCSS para estilizar a aplicação.
- [x] Criar o estilosGlobais.scss com o reset básico.
- [x] Utilizar [nome].module.scss para estilizar os componentes.
- [x] Alterar o favicon do React pelo ícone da Alura Space.

## Aula02

- [x] Criar o componente Menu.
- [x] Criar o componente Banner.

## Aula03

- [x] Importe um css normalize no estilosGlobais.scss.
- [x] Estilize o scroll.
- [x] Importar as fontes noestilosGlobais.scss utilizando @font-face.
- [x] Criar as variaves de estilos (fonte e cores) no arquivo **\_variaveis.scss**.

## Aula04

- [x] Criar o componente Galeria.
- [x] Criar o componente Tags, resposavel por conter as tags da galeria
- [x] Criar um arquivo **fotos.json** para exibir os itens na galeria. Neste caso as imagens ficarão na pasta public.
- [x] Criar o componente Cards para listar os itens.
- [x] Criar o componente Card.
- [ ] Criar o componente aside Populares e seus estilos.
- [ ] Criar o arquivo **fotos-populares.json** para armazenar o caminho das fotos, o alt e o id.

## Aula05

- [x] Criar o arquivo **jsconfig.json** com o código abaixo para definir import com caminhos absolutos:

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

- [x] Criar a funcionalidade para filtrar as fotos por tags.
- [x] Utilizar um Set para armazenar o resultado de um map, sendo assim, não será armazenado valores repetidos.
- [x] Criar a tag todas informando o estado inicial das fotos.
