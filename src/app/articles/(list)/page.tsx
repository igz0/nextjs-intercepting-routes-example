import Link from 'next/link';
import { articles } from '@/app/_constants/articles';

export default function ArticlesPage() {
  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <main key={article.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className='hidden md:block'>
            <Link href={`/articles/${article.id}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">{article.title}</h2>
              <p className="text-gray-600 mb-2">{article.excerpt}</p>
              <time className="text-sm text-gray-500">{article.date}</time>
            </Link>
          </div>
          <div className='block md:hidden'>
            <a href={`/articles/${article.id}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">{article.title}</h2>
              <p className="text-gray-600 mb-2">{article.excerpt}</p>
              <time className="text-sm text-gray-500">{article.date}</time>
            </a>
          </div>
        </main>
      ))}
    </div>
  );
}
