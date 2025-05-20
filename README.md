# Next.js + Tailwind CSS + Contentful Starter

This is a starter project for a coding test. The app is built using:

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Contentful CMS](https://www.contentful.com)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

Create a `.env.local` file in the root directory and add:

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

3. Run the development server:

```bash
npm run dev
```

4. Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Notes

- Replace `yourContentTypeId` in `pages/index.js` with your actual Contentful content type ID.
- Make sure the content type has fields like `title` and `description` as used in the UI.

Sample UI you should see by running the app

![Screenshot 2025-05-20 at 10 20 29 am](https://github.com/user-attachments/assets/4487b877-870e-45f3-a0b1-4b5031f21295)
