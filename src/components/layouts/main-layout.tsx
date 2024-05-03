import { PropsWithChildren } from 'react';
import { Header } from './header';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default MainLayout;
