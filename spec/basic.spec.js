var fs = require('fs');
var regex = require('./../dist/javascript/index.js');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;


jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
        displayPending: true
    }
}));

var re = new RegExp('^(?:' + regex.regex + ')$');

var testEmoji = function(title, emoji) {

    it(title, function() {
        expect(emoji).toMatch(re);
    });
};

describe('Singles:', function() {

    var dataObj = JSON.parse(fs.readFileSync('./spec/data/emoji-text.json', 'utf8'));

    for(var k in dataObj) {

        testEmoji(dataObj[k].title + ' (' + dataObj[k].code_point + ')', dataObj[k].emoji);
    }

    console.log(regex.regex);
});