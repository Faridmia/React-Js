
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LandingContent() {
  const { t } = useTranslation();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </main>
  );
}
