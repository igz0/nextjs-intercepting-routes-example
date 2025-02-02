# Next.js Intercepting Routes Example

This is a demo blog application showcasing Next.js App Router features, specifically [Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes) and [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes).

![Intercepting Routes Demo](https://github.com/user-attachments/assets/2792fb75-c32f-4962-b7fe-3852358b033d)

## Live Demo

[https://nextjs-intercepting-routes-example-igz0.vercel.app/articles](https://nextjs-intercepting-routes-example-igz0.vercel.app/articles)

## Features

- Article list page with responsive design
- Desktop: Articles open in a sidebar (using Parallel Routes)
- Mobile: Articles open as a full page
- Parallel Routes for sidebar implementation (@sidebar)

## Project Structure

```
src/app/
├── _constants/
│   └── articles.ts         # Article data
├── articles/
│   ├── (list)/            # Article list page
│   │   ├── @sidebar/        # Sidebar implementation
│   │   │   └── (...)articles/[id]/
│   │   └── page.tsx       # List view
│   └── (details)/         # Article detail page
│       └── [id]/
│           └── page.tsx   # Detail view
```

## Technical Details

- Built with Next.js App Router
- Demonstrates modern routing patterns:
  - Intercepting Routes: Sidebar views on desktop
  - Parallel Routes: Sidebar implementation
  - Dynamic Routes: Article pages
