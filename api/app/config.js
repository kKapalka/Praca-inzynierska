const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://tomaszskiba:Tskiba6!@ds123963.mlab.com:23963/lab8',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
