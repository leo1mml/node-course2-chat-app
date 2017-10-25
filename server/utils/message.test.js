var expect = require('expect')

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen'
        var text =  'some message'
        var message = generateMessage(from, text)
        
        expect(message.createdAt).toBeA('number')
        expect(message).toInclude({from, text})
    })
})

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        var from = "Leonel"
        var longitude = 123
        var latitude = 321

        var locationMessage = generateLocationMessage(from, latitude, longitude)

        expect(locationMessage.createdAt).toBeA('number')
        expect(locationMessage.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`)

    })
})