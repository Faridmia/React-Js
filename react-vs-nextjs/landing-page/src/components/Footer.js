
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer style={{ padding: '1rem', background: '#eee', textAlign: 'center' }}>
      <p>{t('footer')}</p>
    </footer>
  );
}
