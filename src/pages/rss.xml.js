import rss from '@astrojs/rss';
// https://docs.astro.build/en/guides/rss/#generating-itemseG stomlist of `<item>`s in output xml

export const get = () => rss({
    // `<title>` field in output xml
    title: "Perkedel NTLF+ASTR",
    // `<description>` field in output xml
    description: 'Perkedel Technologies Division NTLF+ASTR',
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: import.meta.glob('./**/*.mdx'),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
    // stylesheet: '/rss/styles.xsl',
    stylesheet: '/rss-styles.xsl',
});