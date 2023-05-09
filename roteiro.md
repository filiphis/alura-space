# Roteiro do curso

## Aula01

- [x] Acessar o layout no Figma: https://www.figma.com/file/Y1W8HJHKqlUdDFeWi8e4cz/Alura-Space-%7C-React%3A-arquivos-est%C3%A1ticos?node-id=89-4
- [x] Baixar os arquivos do curso.
- [ ] Organizar arquivos e pastas.
- [ ] Criar uma pasta para salvar as páginas.
- [ ] Criar a pagina inicial (PaginaInicial).
- [ ] Criar o componente Cabecalho.
- [ ] **Dica** - Deixar as imagens que o componente utiliza na propria pasta do component.
- [ ] Instalar o pre-processador SASS >> `npm install --save-dev sass`.
- [ ] Utilizar SCSS para estilizar a aplicação.
- [ ] Criar o estilosGlobais.scss com o reset básico.
- [ ] Utilizar [nome].modulo.scss para estilizar os componentes.
- [ ] Alterar o favicon do React pelo ícone da Alura Space.

## Aula02

- [ ] Criar o componente Menu.
- [ ] Criar o componente Banner.

## Aula03

- [ ] Importe um css normalize no estilosGlobais.scss.
- [ ] Estilize o scroll.
- [ ] Importar as fontes noestilosGlobais.scss utilizando @font-face.
- [ ] Criar as variaves de estilos (fonte e cores) no arquivo \_variaveis.scss.

## Aula04

- [ ]

## Aula04-pt2

- [ ] Criar o componente aside Populares e seus estilos.
- [ ] Criar o arquivo **fotos-populares.json** para armazenar o caminho das fotos, o alt e o id.
- [ ]

## Aula05

- [ ] Criar o arquivo **jsconfig.json** com o código abaixo para definir import com caminhos absolutos:

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

- [ ] Criar a funcionalidade para filtrar as fotos por tags.
- [ ] Utilizar um Set para armazenar o resultado de um map, sendo assim, não será armazenado valores repetidos.
- [ ] Criar a tag todas informando o estado inicial das fotos.
