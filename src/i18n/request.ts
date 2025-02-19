import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const languageCookie = cookieStore.get('language');
  // Default to 'en' if no cookie exists
  var locale = languageCookie?.value || 'en';
  if (locale == null) {
    locale = 'en';
  }
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});