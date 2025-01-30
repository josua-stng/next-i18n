import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('HomePage');
  return (
    <div>
      <p>Home Page</p>
      <p>{t('about')}</p>
    </div>
  );
};

export default Home;
