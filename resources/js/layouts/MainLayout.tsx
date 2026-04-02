import type { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f3f4f6] py-8">
      <div className="mx-auto max-w-5xl px-4">
        <div className="overflow-hidden rounded-md border border-slate-400 bg-white">
          <main>{children}</main>
          <footer className="h-20 bg-[#111a2f]" />
        </div>
      </div>
    </div>
  );
}