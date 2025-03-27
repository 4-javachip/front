import PageNavBar from '@/components/layouts/header/PageNavBar';

export default function MainMenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageNavBar />
      <div className="pt-14"> {children}</div>
    </>
  );
}
