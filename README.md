# Medieval Tavern API
Bem-vindo ao Medieval Tavern, um projeto de API que combina duas das minhas maiores paixões: comida e fantasia medieval! Nosso objetivo é compartilhar conhecimento sobre receitas culinárias com temática medieval, embora não se limite apenas a isso. O melhor de tudo? Nossa API é totalmente gratuita para todos os interessados em usá-la e criar seus próprios aplicativos de receitas. E se você quiser contribuir com o projeto, fique à vontade para fazer um fork e enviar um pull request!
## Tecnologias
- Node.js
- Express
- MongoDB
- Mongoose
- Render
## Como instalar
1. Clone o repositório
2. Instale as dependências com `npm install`
3. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias (veja o arquivo `.env.example` para saber quais são)
4. Rode o docker-compose com `docker compose up -d`
5. Inicie o servidor com `npm run dev`
## Build
- Para compilar o projeto, use `npm run build`
- Para iniciar o projeto compilado, use `npm run start`

## Endpoints
- As rotas da API são devididas em as ações que o usuário pode fazer logado e as ações que qualquer pessoa pode utilizar.
- Ações que o Usuário precisam estar logado incluem criar novas receitas, favoritar receitas e visualizar receitas favoritas ou que criou.
- Para rotas que necessitam de autenticação é usado um token quando o usuário faz login: `Authorization: Bearer your-token`
### Rotas de Usuário
- `POST /signup` - Cria um novo usuário
```json
// Request body
/*
    name: string,
    email: string,
    password: string min 6 characters
*/
{
    "name": "John Doe",
    "email": "test@test.com",
    "password": "123456"
}
```
- `POST /signin` - Faz login do usuário
```json
// Request body
/*
    email: string,
    password: string
*/
{
    "email": "test@test.com",
    "password": "123456"
}

// Response body
/*
{
    token: string
}
*/
```
- `POST /recipes` - Cria uma nova receita
```json
// Request body
/*
    name: string,
    origin: string,
    tags: array(string),
    serves: number,
    ingredients: array(string),
    instructions: array(string),
    description: string,
    image: string,
*/
{
  "name": "Amphail Braised Beef",
  "origin": "Culinária Incomum",
  "tags": ["CARNE", "REFEIÇÃO"],
  "serves": 4,
  "ingredients": ["3 libras de carne de paleta bovina, sem excesso de gordura.", "Sal kosher e pimenta-do-reino moída na hora.", "2 colheres de sopa de óleo de sabor neutro, como óleo vegetal, de canola, de cártamo ou de semente de uva.", "5 cebolas amarelas, cortadas em fatias grossas.", "1 colher de chá de tomilho seco, esmagado.", "2 colheres de chá de gengibre em pó.", "1½ colheres de sopa de farinha de trigo.", "1 xícara de sidra espumante alcoólica, de preferência de pera.", "½ xícara de caldo de galinha com baixo teor de sódio.", "3 peras maduras, mas firmes, do tipo Bosc, Bartlett ou Anjou, descascadas, sem sementes e cortadas em pedaços de 1 polegada", "¾ colher de chá de vinagre de maçã.", "¼ xícara de salsa fresca picada."],
  "instructions": ["Acomode a carne em uma tábua de corte, seque-a com papel toalha, amarre-a em um formato uniforme com barbante de cozinha em intervalos de 5 centímetros e polvilhe generosamente com sal e pimenta.", "Em uma panela grande de ferro fundido em fogo médio-alto, aqueça 1 colher de sopa de óleo até começar a brilhar. Adicione a carne e cozinhe, sem mexer, até dourar bem na parte inferior, por 3 a 4 minutos. Vire a carne e continue cozinhando, até dourar bem em cada um dos três lados restantes, por mais 10 a 12 minutos. Transfira a carne para uma tigela grande.", "Retorne a panela ao fogo médio-alto, adicione a colher de sopa de óleo restante e aqueça até começar a brilhar. Adicione as cebolas e 1 colher de chá de sal e cozinhe, mexendo e raspando o fundo da panela ocasionalmente, até que as cebolas comecem a amolecer e liberar algum líquido, cerca de 4 minutos. Ajuste o fogo para médio-baixo e continue cozinhando por 15 minutos, mexendo e raspando o fundo da panela ocasionalmente e ajustando o calor conforme necessário para garantir que as cebolas cozinhem suavemente, sem queimar. Adicione o tomilho, o gengibre e a farinha e continue a cozinhar, mexendo, até que as cebolas fiquem pegajosas e douradas, cerca de mais 5 minutos. Adicione o sidra, o caldo e ½ colher de chá de sal. Mexa e raspe o fundo da panela para soltar e dissolver os pedaços dourados.", "Enquanto isso, pré-aqueça o forno a 150°C com uma prateleira na parte do meio-baixo do forno.", "Acomode a carne nas cebolas (as cebolas e os sucos acumulados devem cobrir cerca de três quartos da altura da carne). Cubra a panela, transfira-a para o forno e cozinhe por 1 hora e 35 minutos. Adicione as peras, encaixando-as nas cebolas, retorne a panela ao forno e continue a cozinhar, coberta, até que a carne esteja extremamente macia (uma faca de legumes deve penetrar facilmente na carne) e atinja 93°C em um termômetro de leitura instantânea, cerca de mais 2 horas e 15 minutos.", "Transfira a carne para uma tábua de corte e, usando uma grande colher de espaguete, coloque as cebolas e peras em um prato de servir; cubra levemente com papel alumínio para manter aquecido. Despeje o líquido acumulado em um copo medidor e deixe descansar até que toda a gordura suba para a superfície, cerca de 10 minutos. Incline o copo medidor e use uma colher de sopa larga e rasa para retirar a gordura da superfície e descartá-la. Adicione o vinagre e a maior parte da salsinha ao líquido desengordurado e mexa para combinar. Prove e ajuste o tempero com sal e pimenta, se necessário.", "Retire o barbante da carne e corte-a contra o grão em fatias de 1 centímetro de espessura (ou desfie-a em pedaços). Coloque a carne no prato com as cebolas e peras, despeje os sucos temperados sobre a carne, polvilhe com a salsinha restante e sirva."],
  "description": "Amphail Braised Beef é uma receita de um delicioso prato de carne cozida lentamente em uma mistura de cebolas, peras e especiarias, resultando em um prato reconfortante e cheio de sabor. A carne é primeiro selada para criar uma crosta dourada, depois cozida em fogo baixo com cebolas caramelizadas, peras suculentas e uma variedade de temperos aromáticos. O resultado é uma carne macia e suculenta, repleta de sabores ricos e um toque adocicado das peras. Servido com uma generosa porção do molho saboroso por cima, esta é uma refeição que certamente encantará os paladares mais exigentes.",
  "image": "https://pbs.twimg.com/media/E6syfIuXsAEb92E?format=jpg&name=4096x4096"
}
```
- `GET /recipes/my-favorites` - Retorna um array com as receitas favoritas do usuário
```json
// Response body
/*
    name: string,
    origin: string,
    tags: array(string),
    serves: number,
    ingredients: array(string),
    instructions: array(string),
    description: string,
    image: string,
*/
{
    "recipes": []
}
```
- `GET /recipes/my` - Retorna um array com as receitas criadas pelo usuário
```json
// Response body
/*
    name: string,
    origin: string,
    tags: array(string),
    serves: number,
    ingredients: array(string),
    instructions: array(string),
    description: string,
    image: string,
*/
{
    "recipes": []
}
```
- `PATCH /recipes/star/:id` - Adiciona ou remove uma receita dos favoritos do usuário
```json
// Request params
/*
    id: string
*/
{
    "message": "A receita x foi adicionada dos favoritos!"
}
```
### Rotas Públicas
- `GET /recipes` - Retorna um array com todas as receitas
```json
// Response body
/*
    name: string,
    origin: string,
    tags: array(string),
    serves: number,
    ingredients: array(string),
    instructions: array(string),
    description: string,
    image: string,
*/
{
    "recipes": []
}
```
- `GET /recipes/:id` - Retorna uma receita específica
```json
// Response body
/*
    name: string,
    origin: string,
    tags: array(string),
    serves: number,
    ingredients: array(string),
    instructions: array(string),
    description: string,
    image: string,
*/
{
    "recipe": {}
}
```
- `GET /recipes/search` - Retorna um array com as receitas que contém a string pesquisada
```json
// Request query
/*
    q: string
*/
{
    "recipes": []
}
```

## Contribuindo
- Se você quiser contribuir com o projeto, fique à vontade para fazer um fork e enviar um pull request!
- Se você encontrou um bug ou quer sugerir uma nova feature, abra uma nova issue!
