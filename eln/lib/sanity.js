import { createClient } from 'next-sanity';
export const client = createClient({
    projectId: 'xt55etpi', // find this in sanity.config.ts
    dataset: 'production',
    apiVersion: '2024-09-03', // use the latest version date
    useCdn: false,
    token:'skGPx1H7rdCg14dCfUqlNfrbn7ThbPkdAxCgD6Bmipp71Tx0ZqwsCYheQyJFhgnYGK44mIfhO11Tqu2VoHlVxISZfbP58C4tDY1GW9mSP2ItVBoCUlzqbuZQWmAJ0Ql9pPkX76lZstREt8Ns43vuU8rkiCO55EYP3uKGRbjKOnJC2qoMtVuR',});


