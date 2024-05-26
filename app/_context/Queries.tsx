/* eslint-disable no-unused-vars */
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import React, { createContext } from 'react';

import { useHandleMutation } from '../_hooks/useHandleMutation';

export type TQueriesCtx = {};

const Queries = createContext<TQueriesCtx>({});

export function QueriesCtxProvider({ children }: React.PropsWithChildren<{}>) {
  const contextValue = {};

  return <Queries.Provider value={contextValue}>{children}</Queries.Provider>;
}

export default Queries;
