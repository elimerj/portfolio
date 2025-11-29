import { formspreeApi } from '@/api/formspreeApi';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendContactFormAction = async (data: ContactFormData) => {
  const resp = await formspreeApi.post('', data);
  return console.log(resp.data);
};
