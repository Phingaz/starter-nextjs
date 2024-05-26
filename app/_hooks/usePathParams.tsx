import { usePathname, useSearchParams } from 'next/navigation';

const usePathParams = () => {
  const path = usePathname();
  const viewType = useSearchParams().get('vt');

  return {
    path,
    viewType,
  };
};

export default usePathParams;
