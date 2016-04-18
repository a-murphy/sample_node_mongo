var superagent = require("superagent"),
    moucha = require("mocha");

describe("test", function () {
  it.only('should default the new user to active, but unconfirmed', function (done) {
    User.forge()
        .save({ email: 'test@test.com', password: 'password' })
        .then(function (savedUser) {
            return savedUser.fetch();
        })
        .then(function (user) {
            console.log(user);
            user.get('email').should.eql('test@test.com');
            Number(user.get('active')).should.eql(1);
            Number(user.get('confirmed')).should.eql(0);

            done();
        });
});
