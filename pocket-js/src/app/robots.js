const SITE_URL = 'https://sakinah.app' // à remplacer par ton domaine de production

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
