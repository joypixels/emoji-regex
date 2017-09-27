var fs = require('fs');
var request = require('request');

function convert(unicode) {
    if(unicode.indexOf(" ") > -1) {
        var parts = [];
        var s = unicode.split(' ');
        for(var i = 0; i < s.length; i++) {
            var part = parseInt(s[i], 16);
            if(part >= 0x10000 && part <= 0x10FFFF) {
                var hi = Math.floor((part - 0x10000) / 0x400) + 0xD800;
                var lo = ((part - 0x10000) % 0x400) + 0xDC00;
                part = (String.fromCharCode(hi) + String.fromCharCode(lo));
            }
            else {
                part = String.fromCharCode(part);
            }
            parts.push(part);
        }
        return parts.join('').trim();
    }
    else {
        var s = parseInt(unicode, 16);
        if(s >= 0x10000 && s <= 0x10FFFF) {
            var hi = Math.floor((s - 0x10000) / 0x400) + 0xD800;
            var lo = ((s - 0x10000) % 0x400) + 0xDC00;
            return (String.fromCharCode(hi) + String.fromCharCode(lo));
        }
        else {
            return String.fromCharCode(s);
        }
    }
}

request.get('http://unicode.org/Public/emoji/5.0/emoji-test.txt', function(error, response, body) {

        if(!error && response.statusCode == 200) {

            var dataObj = [];

            body.split("\n").forEach(function(line, index, array) {

                if((line) && (line.substring(0, 1) !== "#")) {

                    dataObj.push({
                        title: line.substring(line.indexOf("#") + 2).replace(/[^\w\s]/g,'').trim(),
                        code_point: line.substring(0, line.indexOf(";")).trim(),
                        emoji: convert(line.substring(0, line.indexOf(";")).trim())
                    });
                }
            });

            fs.writeFileSync("./spec/data/emoji-text.json", JSON.stringify(dataObj));
        }
    }
);