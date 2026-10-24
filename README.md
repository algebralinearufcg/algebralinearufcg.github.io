# Álgebra Linear com Python

Site didático com programas e materiais de apoio para estudar aplicações de Álgebra Linear usando Python. O catálogo reúne 22 notebooks, além de leituras em PDF e links para vídeos e ferramentas complementares.

**Site:** [algebralinearufcg.github.io](https://algebralinearufcg.github.io)

## Conteúdo do repositório

- `index.html` — página inicial.
- `templates/` — páginas de programas, materiais, leituras, vídeos e erro 404.
- `material/` — arquivos PDF para leitura e consulta.
- `img/` — ilustrações, logotipos e ícones usados pelo site.
- `css/` — estilos das páginas, dos cartões, da navegação e dos temas.
- `js/` — comportamento do menu móvel e alternância entre temas claro e escuro.
- `LICENSE` — licença MIT.

Os notebooks são publicados em um repositório GitHub separado e abertos pelo site usando o nbviewer. Os vídeos e alguns materiais complementares também apontam para serviços externos.

## Visualizar localmente

O site é estático: não precisa instalar dependências nem executar uma etapa de build. Com Python 3 instalado, inicie um servidor na raiz do repositório:

```sh
python3 -m http.server 8000
```

Depois, abra [http://localhost:8000](http://localhost:8000). Encerre o servidor com `Ctrl+C` no terminal.

## Atualizar o conteúdo

- Edite os cartões e links dos notebooks em `templates/program-list.html`.
- Edite a página de materiais em `templates/material-list.html`; os cartões de leitura e vídeo ficam em `templates/text-list.html` e `templates/video-list.html`.
- Coloque novos PDFs em `material/` e mantenha os links relativos às páginas em `templates/`.
- Ajuste a identidade visual nos arquivos de `css/` e o comportamento do menu ou do tema em `js/`.

As páginas usam caminhos relativos para funcionar tanto no servidor local quanto no GitHub Pages.
