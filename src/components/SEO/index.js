import { Helmet } from 'react-helmet';

export default function SEO({ title, description }){
    return (
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="theme-color" content="#008f68" />
        </Helmet>
    );
};