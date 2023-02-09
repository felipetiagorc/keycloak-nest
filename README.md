KeyCloak:
Permite conectar em outro servidor de autenticação - Ex: Azure, Google Cloud, LDAP
Voce consegue transformar o Keycloak no cara que centraliza tudo

1. Tem que pegar os usuarios q vc ja tem e transferir para o keyCloak (pode até replicar)

Front-end - Next.js
Back-end - Nest.js
Os dois se autenticam no KeyCloak que gera token jwt

- autenticação unica, com um padrão - Open ID Connect

Open ID Connect vs SAML2

Open ID usa o OAuth2
Exemplo: spotify.
Vc faz login via facebook, 1a vez o Face pergunta se AUTORIZA o Spotfy.

Então OAuth2 - não é padrão de autenticação é padrão de Autorização.. ele só preve COMO o Facebook (no caso 'Resource Server') vai permitir que a aplicação CLIENTE acesse através dele.

Pilares:
Resource Server: usando o Facebook pra fazer login, ele é chamado de 'Resource Server'
Resource Owner: sempre é o usuário que está acessando, no caso o 'Luiz'
Client: a aplicação que quer a AUTORIZAÇÃO pra permitir que essse usuário acesse, mas vai pedir para o Facebook, no caso o Client é o Spotify.

Nesse momento ainda não consigo saber a identidade do Usuário.
O Facebook retorna apenas o Access Token. "Autorizado"
Então não tenho o login acontecendo, só tenho a permissão de acesso.
O Login vai acabar acontecendo tb pq o Facebook implementa o OpenIdConnect.

OpenIdConnect = OAuth2 + login acontecendo
OpenId é um padrão em cima do OAuth2, uma camada que estabelece a identidade do Usuário.

- Ele que vai permitir que várias aplicações diferentes usem a mesma autenticação ja feita pelo nosso servidor de autenticação.
