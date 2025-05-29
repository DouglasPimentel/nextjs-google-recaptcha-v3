# Google reCAPTCHA v3 Integration with Next.js

This repository provides a practical example of how to integrate Google reCAPTCHA v3 into a Next.js project using **App Router** and **Server Actions**.

## 📘 Available languages:

- [English 🇺🇸](./README.md)
- [Português Brasileiro 🇧🇷](./README.pt-br.md)

## ✨ Technologies used

- [Next.js 15+ (App Router)](https://nextjs.org/docs/app)
- [Google reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3)
- [TypeScript](https://www.typescriptlang.org/)

## 🚀 How it works

1. The contact form is rendered on the client.
2. When submitted, a reCAPTCHA token is generated using `grecaptcha.execute`.
3. The token is appended to `FormData` and sent to a **Server Action**.
4. The Server Action verifies the token via the Google API.
5. If valid, the server processes the request (e.g., sends an email).

## ⚙️ Environment variables

Create a `.env.local` file with the following keys:

```env
NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY=your_site_key
GOOGLE_RECAPTCHA_SECRET_KEY=your_secret_key
```

⚠️ Use .env.template as a reference.

## 🔐 How to get your reCAPTCHA keys

1. Go to the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Register a new site
3. Choose reCAPTCHA v3
4. Add your domain (e.g., example.com)
5. Copy the Site Key and Secret Key
6. Paste them into the .env.local file as shown above

> ⚠️ **Important:** reCAPTCHA validation may not work properly on localhost.
> For accurate validation, deploy your project to a public domain like Vercel or Netlify and register that domain in reCAPTCHA settings.
