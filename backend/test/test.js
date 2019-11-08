const User = require('../models/User');
const assert = require('assert');
let userTest = new User({
    name: '',
    password: '2hh',
    email: 'emailes.com'
});

userTest.validate().catch(error => {
    assert.ok(error);
    assert.equal(error.errors['name'].message, 'User name is required');
    assert.equal(error.errors['password'].message, 'Password must have 6 characters or more');
    assert.equal(error.errors['email'].message, 'It is not a valid email');
});
