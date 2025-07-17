# Site de Doações - Sophia 💝

Um site de doações profissional criado para arrecadar fundos para o tratamento da Sophia, uma menina de 5 anos. O site utiliza técnicas avançadas de copywriting, modelo AIDA e gatilhos mentais para maximizar as conversões.

## 🎯 Características Principais

### Design e UX
- **Design responsivo** que funciona perfeitamente em desktop, tablet e mobile
- **Paleta de cores emotiva** (azul esperança, rosa suave, laranja urgência)
- **Tipografia profissional** com Google Fonts (Playfair Display + Inter)
- **Animações suaves** que melhoram a experiência do usuário
- **Acessibilidade** com contraste adequado e navegação por teclado

### Estrutura AIDA
- **Atenção**: Hero section impactante com título persuasivo
- **Interesse**: História emocional da Sophia com citações marcantes
- **Desejo**: Benefícios claros da doação e transparência no uso dos recursos
- **Ação**: Formulário otimizado com múltiplas opções de valores

### Gatilhos Mentais
- ✅ **Urgência**: "Cada segundo conta na jornada de recuperação"
- ✅ **Escassez**: Barra de progresso da meta de arrecadação
- ✅ **Prova Social**: Contador de doadores e valor arrecadado
- ✅ **Autoridade**: Informações médicas e transparência
- ✅ **Reciprocidade**: "Sua doação será retribuída em esperança"
- ✅ **Compromisso**: "Seja parte da história de superação"

### Funcionalidades
- **Seleção de valores**: R$ 25, R$ 50, R$ 100, R$ 200 + valor personalizado
- **Validação em tempo real** dos campos do formulário
- **Modal de confirmação** com feedback personalizado
- **Botão fixo de doação** sempre visível durante o scroll
- **Preparação para gateway de pagamento**

## 📁 Estrutura de Arquivos

```
sophia_donation_site/
├── index.html                 # Página principal
├── css/
│   ├── style.css             # Estilos principais
│   ├── responsive.css        # Media queries para responsividade
│   └── animations.css        # Animações e efeitos visuais
├── js/
│   ├── main.js              # Funcionalidades gerais
│   ├── donation-form.js     # Lógica do formulário de doação
│   └── animations.js        # Animações avançadas
├── images/
│   ├── sophia-hero.jpg      # Imagem principal da hero section
│   └── sophia-story.jpg     # Imagem da seção história
├── planejamento.md          # Documentação do planejamento
├── copywriting.md           # Textos e estratégias de copy
├── teste_resultados.md      # Resultados dos testes realizados
└── README.md               # Este arquivo
```

## 🚀 Como Usar

### 1. Visualização Local
Abra o arquivo `index.html` em qualquer navegador moderno:
```bash
# No terminal (Linux/Mac)
open index.html

# Ou simplesmente clique duas vezes no arquivo
```

### 2. Hospedagem Web
Para colocar o site online, você pode usar:
- **GitHub Pages** (gratuito)
- **Netlify** (gratuito)
- **Vercel** (gratuito)
- Qualquer servidor web tradicional

### 3. Integração com Gateway de Pagamento
O site está preparado para integração com gateways como:
- **PagSeguro**
- **Mercado Pago**
- **PayPal**
- **Stripe**

#### Pontos de Integração:
1. **Função `processDonation()`** em `js/donation-form.js`
2. **Dados coletados** são armazenados em `sessionStorage`
3. **Modal de confirmação** pode redirecionar para o gateway

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `css/style.css`:
```css
:root {
    --primary-blue: #4A90E2;      /* Cor principal */
    --secondary-pink: #F8BBD9;    /* Cor secundária */
    --accent-orange: #FF6B35;     /* Cor de destaque */
}
```

### Textos
Todos os textos podem ser editados diretamente no `index.html` ou consulte o arquivo `copywriting.md` para referência.

### Imagens
Substitua as imagens na pasta `images/` mantendo os mesmos nomes:
- `sophia-hero.jpg` (recomendado: 1200x800px)
- `sophia-story.jpg` (recomendado: 600x400px)

### Valores de Doação
Edite os valores em `index.html` e `js/donation-form.js`:
```html
<button class="amount-btn" data-amount="25">
    <span class="amount">R$ 25</span>
    <span class="description">Um dia de medicação</span>
</button>
```

## 📊 Analytics e Otimização

### Google Analytics
Adicione o código de tracking antes do `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Eventos de Conversão
O site já possui eventos configurados para tracking:
- Clique nos botões de valor
- Preenchimento do formulário
- Clique no botão de doação
- Abertura do modal de confirmação

### A/B Testing
Elementos prontos para teste:
- Títulos da hero section
- Valores de doação sugeridos
- Cores dos botões
- Textos dos CTAs

## 🔧 Manutenção

### Atualizações de Estatísticas
Edite os valores em `js/main.js`:
```javascript
const stats = {
    donors: 247,        // Número de doadores
    raised: 12500       // Valor arrecadado
};
```

### Meta de Arrecadação
Altere em `index.html` e `js/main.js`:
```javascript
const targetAmount = 50000; // Meta em reais
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## ♿ Acessibilidade

Recursos implementados:
- Contraste adequado (WCAG AA)
- Navegação por teclado
- Alt text em imagens
- ARIA labels
- Screen reader friendly

## 🔒 Segurança

Medidas implementadas:
- Validação client-side e server-side
- Sanitização de inputs
- HTTPS recomendado
- Proteção contra XSS

## 📈 Métricas de Sucesso

KPIs para monitorar:
- **Taxa de conversão**: Visitantes → Doadores
- **Valor médio de doação**
- **Tempo de permanência na página**
- **Taxa de abandono no formulário**
- **Origem do tráfego mais convertedor**

## 🆘 Suporte

Para dúvidas ou problemas:
1. Consulte a documentação em `planejamento.md`
2. Verifique os resultados dos testes em `teste_resultados.md`
3. Analise o código comentado nos arquivos JS

## 📄 Licença

Este projeto foi criado especificamente para a campanha da Sophia. Todos os direitos reservados à família.

---

**Desenvolvido com ❤️ para ajudar a Sophia**

*"Sua doação é um ato de amor que se traduz em esperança e cura."*

