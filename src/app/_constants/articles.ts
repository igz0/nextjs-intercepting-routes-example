export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Example Article 1",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    excerpt: "This is a sample article demonstrating the blog layout.",
    date: "2025-02-01"
  },
  {
    id: "2",
    title: "Example Article 2",
    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.`,
    excerpt: "Another example article with some placeholder content.",
    date: "2025-02-01"
  },
  {
    id: "3",
    title: "Example Article 3",
    content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.

Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.

Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`,
    excerpt: "A third example article showing the blog's functionality.",
    date: "2025-02-01"
  }
];
