# Integração do Google reCAPTCHA v3 com Next.js

Este repositório contém um exemplo prático de como integrar o Google reCAPTCHA v3 em um projeto usando o Next.js com **App Router** e **Server Actions**.

## 📘 Idiomas disponíveis:

- [Inglês 🇺🇸](./README.md)
- [Português Brasileiro 🇧🇷](./README.pt-br.md)

## ✨ Tecnologias utilizadas

- [Next.js 15+ (App Router)](https://nextjs.org/docs/app)
- [Google reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3)
- [TypeScript](https://www.typescriptlang.org/)

## 🚀 Como funciona

1. O formulário é renderizado com um botão de envio.
2. Ao clicar em enviar, o token do reCAPTCHA é gerado no lado do cliente com `grecaptcha.execute`.
3. O token é adicionado ao `FormData` e enviado para uma **Server Action**.
4. A Server Action valida o token usando a API do Google.
5. Se o reCAPTCHA for válido, o servidor processa os dados (envio de e-mail, por exemplo).

## ⚙️ Variáveis de ambiente

Você deve configurar um arquivo `.env.local` com as seguintes variáveis:

```env
NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY=your_site_key
GOOGLE_RECAPTCHA_SECRET_KEY=your_secret_key
```

⚠️ Use o arquivo .env.template como base.

## 🔐 Como obter as chaves do reCAPTCHA

1. Acesse o [Console de Administração do Google reCAPTCHA](https://www.google.com/recaptcha/admin/create)
2. Registre um novo site
3. Adicione seu domínio (ex: example.com)
4. Copie a Chave do Site (Site Key) e a Chave Secreta (Secret Key)
5. Cole os valores no arquivo .env.local conforme mostrado acima

> ⚠️ **Importante:** a validação do reCAPTCHA pode não funcionar corretamente em localhost.
> Para funcionar de forma confiável, publique o projeto em um domínio público (como no Vercel ou Netlify) e registre esse domínio nas configurações do reCAPTCHA.

## ✉️ Integração com serviço de e-mail

No arquivo [`src/actions/send-contact-action.ts`](./src/actions/send-contact-action.ts), há um ponto no código onde o envio de e-mail deve ser implementado após a validação do reCAPTCHA. Esse local está indicado com o seguinte comentário:

```ts
// ✅ Replace this part with sending email with the service of your choice (e.g. Resend, SendGrid)
```

Substitua esse trecho com a integração do seu serviço de envio de e-mails preferido, como por exemplo:

- [SendGrid](https://www.twilio.com/docs/sendgrid/for-developers/sending-email/quickstart-nodejs)
- [Resend](https://resend.com/docs/introduction)

> Não se esqueça de adicionar a chave de API do seu provedor de serviços de e-mail preferido no arquivo .env.local
