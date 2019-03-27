const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://tomaszskiba:zaq12wss@ds157834.mlab.com:57834/projekt',
  //'mongodb://tomaszskiba:zaq12wss@ds119795.mlab.com:19795/trial',//'mongodb://konitest:konitest1@ds149344.mlab.com:49344/konitest',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
