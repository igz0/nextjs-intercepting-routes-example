import { articles } from '@/app/_constants/articles';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ArticlePage(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;
  const article = articles.find((article) => article.id === params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link href="/articles" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to Articles
      </Link>
      <article className="mt-6">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <time className="text-gray-500 mb-8 block">{article.date}</time>
        <div className="prose lg:prose-xl">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
