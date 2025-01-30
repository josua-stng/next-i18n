import HeaderPage from '@/features/header/views';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';

const LocaleLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) => {
  const { lang } = await params;
  const messages = await getMessages();
  return (
      <NextIntlClientProvider messages={messages} locale={lang}>
        <HeaderPage />
        {children}
      </NextIntlClientProvider>
  );
};

export default LocaleLayout;
