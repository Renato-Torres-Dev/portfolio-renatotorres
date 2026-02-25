# Configuração do EmailJS

Siga estes passos para configurar o envio de emails do formulário de contato:

## 1. Criar conta EmailJS
- Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
- Crie uma conta gratuita

## 2. Criar Serviço de Email
- Vá para "Email Services" no dashboard
- Adicione seu serviço de email (Gmail, Outlook, etc.)
- Anote o **Service ID**

## 3. Criar Template de Email
- Vá para "Email Templates"
- Crie um novo template com estas variáveis:
  ```
  {{from_name}} - Nome do remetente
  {{from_email}} - Email do remetente  
  {{message}} - Mensagem
  {{to_name}} - Seu nome
  ```
- Anote o **Template ID**

## 4. Obter Public Key
- Vá para "Account" → "API Keys"
- Copie sua **Public Key**

## 5. Atualizar arquivo de configuração
Edite o arquivo `lib/emailjs.ts` com seus dados:

```typescript
const EMAILJS_PUBLIC_KEY = 'SUA_PUBLIC_KEY_AQUI';
const EMAILJS_SERVICE_ID = 'SEU_SERVICE_ID_AQUI';
const EMAILJS_TEMPLATE_ID = 'SEU_TEMPLATE_ID_AQUI';
```

## 6. Exemplo de Template

```
Olá {{to_name}},

Você recebeu uma nova mensagem do seu portfólio:

Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Enviado do formulário de contato
```

## 7. Testar
- Após configurar, teste o formulário no seu site
- Verifique se recebe o email na sua caixa de entrada

## Limitações Plano Gratuito
- 200 emails por mês
- 2 emails por dia para testes
- Sem anexos

Para mais emails, considere upgrade para plano pago.
