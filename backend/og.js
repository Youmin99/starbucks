//index.js

import axios from 'axios';
import cheerio from 'cheerio';

export async function opengraph(site) {
    const url = `https://www.${site}`;

    const result = await axios.get(url);

    let title = '';
    let image = '';
    let description = '';
    const $ = cheerio.load(result.data);
    $('meta').each((i, el) => {
        if ($(el).attr('property')) {
            if ($(el).attr('property').includes('og:title')) {
                title = $(el).attr('content');
            }
            if ($(el).attr('property').includes('og:image')) {
                image = $(el).attr('content');
            }
            if ($(el).attr('property').includes('og:description')) {
                description = $(el).attr('content');
            }
        }
    });
    return { title, image, description };
}
