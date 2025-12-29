# 🍔 Burger.IO - Progressive Web App

<div align="center">
  <img src="assets/burgerio_logo.png" alt="Burger.IO Logo" width="200"/>
  
  ### Sistema de Delivery de Hambúrgueres Artesanais
  
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
  
</div>

---

## 📖 Sobre o Projeto

**Burger.IO** é uma Progressive Web App (PWA) moderna e responsiva desenvolvida para delivery de hambúrgueres artesanais. O projeto demonstra habilidades avançadas em desenvolvimento front-end, design de interfaces e implementação de PWAs com foco em performance e experiência do usuário.

### ✨ Destaques Técnicos

- 🎨 **Design Moderno**: Interface clean com gradientes CSS, animações suaves e micro-interações
- 📱 **PWA Completo**: Funciona offline, instalável e com Service Worker implementado
- 🚀 **Performance**: Carregamento rápido com lazy loading de imagens e otimizações
- 📐 **Responsivo**: Layout adaptável para mobile, tablet e desktop (mobile-first)
- ♿ **Acessível**: Semântica HTML5, atributos ARIA e navegação por teclado
- 🔍 **SEO Otimizado**: Meta tags completas, Open Graph e estrutura semântica
- 💬 **Integração WhatsApp**: Pedidos diretos via API do WhatsApp Business

---

## 🛠️ Tecnologias e Ferramentas

### Core
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização avançada com:
  - CSS Variables (Custom Properties)
  - CSS Grid e Flexbox
  - Gradientes e Animações
  - Media Queries responsivas
- **JavaScript ES6+** - Lógica moderna com:
  - Arrow Functions
  - Template Literals
  - Async/Await
  - Modules e encapsulamento

### Bibliotecas e APIs
- **Boxicons** - Biblioteca de ícones vetoriais
- **Google Fonts (Poppins)** - Tipografia moderna e profissional
- **WhatsApp Business API** - Integração para pedidos diretos

### PWA
- **Service Worker** - Cache offline e instalação nativa
- **Web App Manifest** - Configuração PWA completa
- **Cache API** - Armazenamento estratégico de recursos

---

## 📁 Estrutura do Projeto

```
burger-delivery/
│
├── 📂 assets/                 # Recursos estáticos
│   ├── burgerio_logo.png      # Logo da aplicação (PWA icon)
│   ├── x-burger.jpg           # Imagem do X-Burger
│   ├── x-bacon.jpg            # Imagem do X-Bacon
│   ├── double-x.jpg           # Imagem do Double X
│   ├── o-burger-x.jpg         # Imagem do O Burger X
│   ├── x-futuro.jpg           # Imagem do X-Futuro
│   └── x-salada.jpg           # Imagem do X-Salada
│
├── 📂 css/                    # Estilos
│   └── styles.css             # CSS principal (modular e documentado)
│
├── 📂 js/                     # Scripts JavaScript
│   ├── main.js                # Script da página principal (listagem)
│   ├── item-details.js        # Script de detalhes do produto
│   └── confirm-order.js       # Script de confirmação e WhatsApp
│
├── 📄 index.html              # Página principal (catálogo)
├── 📄 item_details.html       # Página de detalhes do produto
├── 📄 confirm_order.html      # Página de confirmação de pedido
│
├── 📄 manifest.json           # Manifesto PWA
├── 📄 serviceWorker.js        # Service Worker para cache
│
├── 📄 .gitignore              # Arquivos ignorados pelo Git
└── 📄 README.md               # Este arquivo
```

---

## 🚀 Como Executar

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Servidor local (recomendado para testar PWA)

### Opção 1: Servidor Local com Python

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/burger-delivery.git
cd burger-delivery

# Inicie o servidor (Python 3)
python -m http.server 8000

# Acesse: http://localhost:8000
```

### Opção 2: Live Server (VS Code)

1. Instale a extensão **Live Server** no VS Code
2. Abra a pasta do projeto no VS Code
3. Clique com botão direito em `index.html`
4. Selecione **"Open with Live Server"**
5. O navegador abrirá automaticamente

### Opção 3: Node.js (http-server)

```bash
# Instale o http-server globalmente
npm install -g http-server

# Execute no diretório do projeto
http-server -p 8080

# Acesse: http://localhost:8080
```

---

## ⚙️ Configuração

### 1. Configurar Número do WhatsApp

Edite o arquivo `js/confirm-order.js` na linha 7:

```javascript
const WHATSAPP_CONFIG = {
  phoneNumber: "5511999999999", // ⚠️ Substitua pelo seu número
  messageTemplate: "Olá! Gostaria de fazer o pedido:\n\n📦 *{name}*\n💰 Valor: *{price}*"
};
```

**Formato do número:**
- Código do país: `55` (Brasil)
- DDD: `11` (2 dígitos)
- Número: `999999999` (8 ou 9 dígitos)
- Exemplo completo: `5511987654321`

### 2. Adicionar/Modificar Produtos

Edite o arquivo `js/main.js` no array de produtos:

```javascript
const products = [
  { 
    name: "Nome do Produto", 
    price: "00.00",              // Formato: "00.00"
    image: "nome-imagem.jpg",    // Arquivo em /assets
    description: "Descrição"
  },
  // Adicione mais produtos aqui
];
```

### 3. Personalizar Cores e Tema

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
  /* Cores Principais */
  --primary-color: #ff6b35;      /* Laranja principal */
  --primary-dark: #e85a28;       /* Laranja escuro */
  --secondary-color: #f7931e;    /* Amarelo/Laranja */
  
  /* Personalize outras cores conforme necessário */
}
```

---

## 📱 Instalando como PWA

### Desktop (Chrome/Edge)

1. Acesse o site no navegador
2. Procure pelo ícone de **instalação** (➕) na barra de endereços
3. Clique em **"Instalar Burger.IO"**
4. Confirme a instalação
5. O app será adicionado ao seu sistema operacional

### Mobile (Android)

1. Abra o site no Chrome
2. Toque no menu (⋮) no canto superior direito
3. Selecione **"Adicionar à tela inicial"**
4. Confirme e personalize o nome se desejar
5. Use como app nativo!

### Mobile (iOS/Safari)

1. Abra o site no Safari
2. Toque no ícone de **Compartilhar** (□↑)
3. Role para baixo e toque em **"Adicionar à Tela de Início"**
4. Confirme e nomeie o app
5. Pronto para usar!

---

## 🎨 Funcionalidades

### ✅ Implementadas

- [x] Catálogo de produtos com grid responsivo
- [x] Sistema de avaliações com estrelas (4.5/5)
- [x] Página de detalhes com informações completas
- [x] Galeria de imagens com lightbox
- [x] Integração completa com WhatsApp
- [x] PWA com Service Worker funcional
- [x] Cache offline de recursos
- [x] Animações e transições suaves
- [x] Design responsivo (mobile-first)
- [x] SEO otimizado com meta tags
- [x] Formatação de preços (R$ 00,00)
- [x] Navegação entre páginas fluida

### 🔜 Melhorias Futuras

- [ ] Carrinho de compras com localStorage
- [ ] Sistema de favoritos persistente
- [ ] Filtros por categoria e preço
- [ ] Busca de produtos
- [ ] Modo escuro/claro (theme switcher)
- [ ] Múltiplos idiomas (PT/EN/ES)
- [ ] Backend com Node.js/Express
- [ ] Autenticação de usuários
- [ ] Histórico de pedidos
- [ ] Sistema de cupons de desconto
- [ ] Avaliações de clientes

---

## 🌐 Deploy

### GitHub Pages (Gratuito)

```bash
# 1. Faça push para o GitHub
git add .
git commit -m "feat: Deploy inicial do Burger.IO"
git push origin main

# 2. Configure GitHub Pages
# Acesse: Settings > Pages
# Source: main branch > root folder > Save
```

Seu site estará disponível em: `https://seu-usuario.github.io/burger-delivery`

### Netlify (Recomendado - Gratuito)

1. Acesse [Netlify](https://www.netlify.com/)
2. Faça login com GitHub
3. Clique em **"New site from Git"**
4. Selecione o repositório
5. Deploy automático! 🚀

**Ou arraste e solte:**
1. Acesse [Netlify Drop](https://app.netlify.com/drop)
2. Arraste a pasta do projeto
3. Pronto! URL instantânea

### Vercel (Gratuito)

```bash
# Instale o Vercel CLI
npm i -g vercel

# Execute no diretório do projeto
vercel

# Siga as instruções no terminal
# Deploy automático em produção!
```

---

## 🧪 Testes e Performance

### Lighthouse (Chrome DevTools)

```bash
# Opção 1: Chrome DevTools
# F12 > Lighthouse > Generate Report

# Opção 2: CLI
npm install -g lighthouse
lighthouse http://localhost:8000 --view
```

**Metas de Performance:**
- ⚡ Performance: > 90
- ♿ Accessibility: > 95
- ✅ Best Practices: > 90
- 🔍 SEO: > 95
- 📱 PWA: 100

### Testes Manuais

- [ ] Navegação entre páginas funciona
- [ ] Imagens carregam corretamente
- [ ] WhatsApp abre com mensagem formatada
- [ ] PWA instala no dispositivo
- [ ] Funciona offline após primeira visita
- [ ] Responsivo em diferentes tamanhos
- [ ] Animações suaves sem travamentos

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/MinhaNovaFeature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m 'feat: Adiciona MinhaNovaFeature'
   ```
4. Push para a branch:
   ```bash
   git push origin feature/MinhaNovaFeature
   ```
5. Abra um **Pull Request** detalhado

### Padrões de Commit (Conventional Commits)

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação de código (sem mudança de lógica)
- `refactor:` Refatoração de código
- `perf:` Melhorias de performance
- `test:` Adição de testes
- `chore:` Tarefas de manutenção

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Isso significa que você pode:

- ✅ Usar comercialmente
- ✅ Modificar o código
- ✅ Distribuir
- ✅ Uso privado

Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Desenvolvido com ❤️ e muito ☕**

- 🐙 GitHub: [@andrearraesDev](https://github.com/andrearraesDev)
- 💼 LinkedIn: [Seu Nome](https://linkedin.com/in/seu-perfil)
- 🌐 Portfolio: [seusite.com](https://seusite.com)
- 📧 Email: contato@exemplo.com

---

## 📞 Suporte

Encontrou algum problema ou tem sugestões?

- 🐛 [Reportar Bug](https://github.com/andrearraesDev/burger-delivery/issues)
- 💡 [Solicitar Feature](https://github.com/andrearraesDev/burger-delivery/issues)
- 💬 [Discussões](https://github.com/andrearraesDev/burger-delivery/discussions)

---

## 🙏 Agradecimentos

- [Boxicons](https://boxicons.com/) - Ícones lindos e gratuitos
- [Google Fonts](https://fonts.google.com/) - Tipografia Poppins
- [MDN Web Docs](https://developer.mozilla.org/) - Documentação incrível
- Comunidade open-source 💙

---

## 📊 Status do Projeto

```
✅ Versão 1.0 - Lançamento inicial
🚀 Em desenvolvimento ativo
📱 PWA funcional
🎨 Design responsivo
```

---

<div align="center">
  
  ### ⭐ Se este projeto foi útil, considere dar uma estrela!
  
  **Burger.IO** © 2025 - Todos os direitos reservados
  
  Feito com 💙 por desenvolvedores, para desenvolvedores
  
</div>
