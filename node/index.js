/********************************************************************************
 * Copyright (c) 2015-2016 GE Digital. All rights reserved.                     *
 *                                                                              *
 * The copyright to the computer software herein is the property of GE Digital. *
 * The software may be used and/or copied only with the written permission of   *
 * GE Digital or in accordance with the terms and conditions stipulated in the  *
 * agreement/contract under which the software has been supplied.               *
 ********************************************************************************/

/**
 * Created by benoitlaurent on 29/07/16.
 */

var express = require('express');
var winston = require('winston');
var logger = require("./logger");

var router = require('./express-router');
var app = express();


logger.debug("Overriding 'Express' logger");
app.use(require('morgan')('combined', {"stream": logger.stream}));

app.use(router); // notice how the router goes after the logger.

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});