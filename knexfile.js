'use strict';

/**
 * Configures the privileged database user for use with Knex. This is useful
 * for running migrations and other operations that we don't really want the
 * application user to be able to perform.
 */

exports.test = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '',
        database: 'name_test',
        timezone: 'UTC',
        charset: 'utf8',
        debug: false
    }
};
