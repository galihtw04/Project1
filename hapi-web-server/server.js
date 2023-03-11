// console.log('Halo, kita akan belajar membuat server Hapi');
const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route([
        {
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hompage';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        },
    },
]);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();