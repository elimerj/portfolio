import axios from 'axios';

const FORM_ID = import.meta.env.VITE_FORM_ID;

const formspreeApi = axios.create({
  baseURL: `https://formspree.io/f/${FORM_ID}`,
  headers: {
    Accept: 'application/json',
  },
});

export { formspreeApi };
