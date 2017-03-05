import i18n from 'i18next';

i18n
.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        keyWelcome: "Welcome"
      }
    },
    zh: {
      translation: {
        keyWelcome: "歡迎"
      }
    },
    cn: {
      translation: {
        keyWelcome: "欢迎"
      }
    }
  }
 }, (err, t) => {
  // initialized and ready to go!
  const hw = i18n.t('keyWelcome');
  console.log('Initialized: ' + hw);
});

export default i18n;
