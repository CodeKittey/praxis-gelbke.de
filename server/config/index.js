/**
 * Created by makraus on 10/09/2015.
 */
'use strict';

var path = require('path');

module.exports = {
    // Environment
    env: process.env.NODE_ENV,

    // Root path of server
    root: path.normalize(path.join(__dirname, '../..')),

    // Server port
    port: 9000
};