'use client';

export const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 px-6 md:px-12 lg:px-16 py-6 md:py-8">
      {children}
    </div>
  );
}