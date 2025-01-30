import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';

const useHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  const onSelectChange = (nextLocale: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    router.replace(`${pathname}?${newSearchParams.toString()}`, {
      locale: nextLocale as Locale,
    });
  };

  return {
    locale,
    onSelectChange,
  };
};

export default useHeader;
