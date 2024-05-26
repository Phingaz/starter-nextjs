import { useCycle } from 'framer-motion';
import React, { createContext } from 'react';

import { QueriesCtxProvider } from './Queries';
import useWindowDimensions from '../_hooks/useMediaQuery';

export type TMainCtx = {};

const Main = createContext<TMainCtx>({
  isMobile: false,
  mobileNav: false,
  toggleMobileNav: () => {},
});

export function MainCtxProvider({ children }: React.PropsWithChildren<{}>) {
  const currentWindowWidth = useWindowDimensions();

  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const isMobile = currentWindowWidth.currentWindowWidth < 1024;

  const contextValue = {
    isMobile,
    mobileNav,
    toggleMobileNav,
  };

  return (
    <Main.Provider value={contextValue}>
      <QueriesCtxProvider>{children}</QueriesCtxProvider>
    </Main.Provider>
  );
}

export default Main;
