function (request, state, logger) { 
    logger.info(request.path.indexOf('/items/1'));
    if (request.path.indexOf('/items/1') === 0) { 
      return { statusCode: 404 }; 
    } 
    return {}; 
}