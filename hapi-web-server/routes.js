const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hompage'
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page galih'
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method selain GET';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "galih"} = request.params;
            const { lang} = request.query;

            if(lang == 'id') {
                return `Hai, ${name}!`;
            }
            return `Hello, ${name}`;
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman yang anda cari tidak ditemukan';
        },
    },
];

module.exports = routes;