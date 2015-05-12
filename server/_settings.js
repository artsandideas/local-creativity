// Provide defaults for Meteor.settings
//
// To configure your own Twitter keys, see:
//   https://github.com/meteor/meteor/wiki/Configuring-Twitter-in-Local-Market
if (typeof Meteor.settings === 'undefined')
  Meteor.settings = {};

_.defaults(Meteor.settings, {
  twitter: {
    consumerKey: "aZZdIlJbaLOFPY7OFcANUHIj6", 
    secret: "WMVxwnrmO3CltwdTQBbLVSWKTPDfSpzHBj1Df0QuJx3cxJMs1P"
  }
});

ServiceConfiguration.configurations.remove({
  service: "twitter"
});
ServiceConfiguration.configurations.insert({
  service: "twitter",
  consumerKey: Meteor.settings.twitter.consumerKey,
  secret: Meteor.settings.twitter.secret
});
