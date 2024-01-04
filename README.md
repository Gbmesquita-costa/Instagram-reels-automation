# Automação de Publicação de Reels no Instagram

## Descrição do Projeto
Este projeto em Node.js utiliza Puppeteer para automatizar a publicação/agendamento de Reels no Instagram. O script interage com a interface do Instagram, permitindo ao usuário configurar detalhes como email, senha, caminho do arquivo de vídeo, foto de capa, tempo de cliques, hashtags, data e hora de publicação, e formato do vídeo.

## Pré-requisitos
- [Node.js](https://nodejs.org/) instalado no seu sistema.

## Configuração Inicial
1. Clone este repositório para o seu ambiente local.

    ```bash
    git clone https://github.com/seu-usuario/nome-do-projeto.git
    ```

2. Navegue até o diretório do projeto.

    ```bash
    cd nome-do-projeto
    ```

3. Instale as dependências necessárias.

    ```bash
    npm install
    ```

## Execução
1. Execute o script principal.

    ```bash
    node main.js
    ```

2. O script solicitará as informações necessárias via terminal. Insira as informações conforme solicitado.

## Detalhes das Entradas
- **Email e Senha:** Informe suas credenciais do Instagram.
- **Caminho do Arquivo de Vídeo:** Caminho completo para o arquivo de vídeo, ex: `C:\Users\admin\Documents\file.mp4`.
- **Caminho da Foto de Capa:** Caminho completo para a foto de capa, ex: `C:\Users\admin\Documents\foto de capa.jpg`.
- **Tempo de Cliques (em milissegundos):** Tempo recomendado é 2500 milissegundos por clique.
- **Hashtags:** Informe as hashtags separadas por espaços, ex: `#programador #node`.
- **Data e Hora de Publicação:** Informe a data e hora no formato especificado, ex: `dia: 10, mês: 08, ano: 2024, hora: 15, minuto: 10`.
- **Formato do Vídeo:** Escolha entre três opções: `Ícone de corte em formato quadrado`, `Ícone de corte em formato retrato`, `Ícone de corte em formato paisagem`.

## Notas Adicionais
- Certifique-se de manter suas credenciais em um local seguro e não compartilhá-las.
- Este projeto é apenas para fins educacionais e não deve ser usado para atividades maliciosas ou violação de termos de serviço.
