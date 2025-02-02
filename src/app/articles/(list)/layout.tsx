import { ReactNode } from 'react';

export default function Layout({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) {
  return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Blog Articles</h1>
        <div className="flex gap-4">
          <div className="flex-1 md:w-1/2">{children}</div>
          <div className="hidden md:block md:w-1/2">{ sidebar }</div>
        </div>
      </div>
  );
}
