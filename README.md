# Meu Portfólio

Página de perfil pessoal desenvolvida como atividade acadêmica, reunindo informações sobre mim, projetos de portfólio, habilidades e um formulário de contato. O site é feito com **HTML, CSS e JavaScript**.

**Autor:** Pedro Eduardo da Silva Vieira
**Repositório:** [github.com/vieira-pedro/Projeto-web](https://github.com/vieira-pedro/Projeto-web)

\---

## Seções da página

|Seção|O que apresenta|
|-|-|
|**Sobre mim**|Foto, nome e uma breve apresentação com formação, interesses e objetivos profissionais.|
|**Portfólio (Todos os projetos citados são fictícios)**|Cinco projetos fictícios, cada um com logo, nome e descrição: **StudyNova** (estudos online), **FitTrack** (atividades físicas), **PetCare** (cuidado com pets), **TravelGo** (viagens) e **FinanZen** (controle financeiro pessoal).|
|**Habilidades**|HTML, CSS, JavaScript, Banco de Dados, UI/UX Design e Python, cada uma com ícone, categoria e barra de nível.|
|**Contato**|Mapa com a localização (cidade e estado, sem endereço pessoal) e formulário de contato com validação.|
|**Rodapé**|Links de contato e direitos autorais.|

\---

## Tecnologias

* **HTML5**: estrutura semântica.
* **CSS3**: estilização, cores, layout e responsividade.
* **JavaScript**: interatividade e validação do formulário de contato.
* [**Formspree**](https://formspree.io): serviço que recebe os dados do formulário e os encaminha por e-mail.
* **Google Maps (iframe)**: mapa incorporado na seção de contato.

\---

## Estrutura de pastas

```
Projeto-web/
├── index.html
├── css/
│   └── style.css
├── javascript/
│   └── script.js
├── imagens/
│   ├── perfil.jpeg
│   ├── studynova.png
│   ├── fittrack.png
│   ├── petcare.png
│   ├── travelgo.png
│   ├── finanzen.png
│   ├── html.png
│   ├── css.png
│   ├── javascript.png
│   ├── bancodedados.png
│   ├── figma.png
│   └── python.png
└── README.md
```

\---

## Funcionalidades

### Formulário de contato

* Campos **Nome**, **E-mail** e **Mensagem**, todos obrigatórios.
* **Validação em JavaScript:** verifica se nenhum campo está vazio e se o e-mail tem formato válido (`texto@texto.texto`).
* Mensagens de erro, de envio e de sucesso exibidas na própria página.
* Envio feito pelo Formspree, que encaminha a mensagem para o e-mail do autor.

### Habilidades

* Cada habilidade tem um **ícone**, uma **etiqueta de categoria** (Frontend, Dados, Design, Backend) e uma **barra de progresso** com o nível.

### Mapa

* Localização apenas no nível de **cidade e estado** (Aracaju - SE), sem endereço comercial ou residencial.

### Cópia de segurança dos arquivos

O CSS, o JavaScript e as imagens são carregados primeiro da própria pasta do projeto. Se algum deles falhar, o site tenta carregar uma cópia do repositório no GitHub, via [jsDelivr](https://www.jsdelivr.com).

\---

## Design e responsividade

* **Paleta de cores** definida em variáveis CSS no início do `style.css`, o que permite mudar o tema em um só lugar.
* **Layout responsivo** com Flexbox e CSS Grid:
* Fontes e imagens com tamanho adaptável.
* Cards com sombra suave e efeito ao passar o mouse.

\---

## Observações

* Os cinco projetos do portfólio são **fictícios**, criados para fins de demonstração, assim como suas logos.
* O envio do formulário depende do serviço Formspree. O primeiro e-mail recebido pode pedir a confirmação do endereço de destino.

