const Sentry = require('@sentry/node');

const { SENTRY_DNS } = process.env;

const sentryInstance = () => {
  Sentry.init({
    dsn: SENTRY_DNS,
    tracesSampleRate: 1.0,
  });
};

module.exports = sentryInstance;
