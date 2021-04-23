'use strict';

module.exports = options => {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = 'Get the hell out of here!';
    } else {
      await next();
    }
  };
};
