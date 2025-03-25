import PageNavBar from '@/components/layouts/header/PageNavBar';

export default function MainMenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageNavBar />
      {children}
    </>
  );
}
