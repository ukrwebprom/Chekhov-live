import TelegramAPI from 'telegram-api';

const api = new TelegramAPI({
    apiId: '21352098',
    apiHash: '491c1ad30d79c2924a37d88c8afee2b2'
  });

export const Telegram = () => {

    api.auth().then(() => {
        console.log('Authenticated with Telegram API');
      }).catch((err) => {
        console.error('Error authenticating with Telegram API:', err);
      });

}