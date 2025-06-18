
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { i18n, t } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header style={{ padding: '1rem', background: '#eee' }}>
      <h2>{t('language')}</h2>
      <select onChange={handleChange} value={i18n.language}>
        <option value="en">English</option>
        <option value="bn">বাংলা</option>
      </select>
    </header>
  );
}
