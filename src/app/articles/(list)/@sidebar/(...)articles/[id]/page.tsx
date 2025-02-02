import { articles } from '@/app/_constants/articles';
import { notFound } from 'next/navigation';

export default async function ArticleModal(
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
    <div className="bg-white p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
      <article>
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        <time className="text-gray-500 mb-6 block">{article.date}</time>
        <div className="prose">
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
