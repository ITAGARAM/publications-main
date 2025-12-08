import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'xt55etpi', // find this in sanity.config.ts
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false, 
  token:'skGPx1H7rdCg14dCfUqlNfrbn7ThbPkdAxCgD6Bmipp71Tx0ZqwsCYheQyJFhgnYGK44mIfhO11Tqu2VoHlVxISZfbP58C4tDY1GW9mSP2ItVBoCUlzqbuZQWmAJ0Ql9pPkX76lZstREt8Ns43vuU8rkiCO55EYP3uKGRbjKOnJC2qoMtVuR',
})
