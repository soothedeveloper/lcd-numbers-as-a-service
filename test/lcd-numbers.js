require('chai').should()

const {numberToLcd} = require('../app/number-to-lcd')

describe('Number to LCD', () => {
    it('converts 0', () => {
        numberToLcd(0).should.equal(`
###
# #
# #
# #
###
`)
    })

    it('converts 1', () => {
        numberToLcd(1).should.equal(`
  #
  #
  #
  #
  #
`)
    })

    it('converts 2', () => {
        numberToLcd(2).should.equal(`
###
  #
###
#  
###
`)
    })

    it('converts 3', () => {
        numberToLcd(3).should.equal(`
###
  #
###
  #
###
`)
    })

    xit('converts 4', () => {
        numberToLcd(4).should.equal(`
# #
# #
###
  #
  #
`)
    })

    xit('converts 5', () => {
        numberToLcd(5).should.equal(`
###
#  
###
  #
###
`)
    })

    xit('converts 6', () => {
        numberToLcd(6).should.equal(`
###
#  
###
# #
###
`)
    })

    xit('converts 7', () => {
        numberToLcd(7).should.equal(`
###
  #
 # 
 # 
 # 
`)
    })

    xit('converts 8', () => {
        numberToLcd(8).should.equal(`
###
# #
###
# #
###
`)
    })

    xit('converts 9', () => {
        numberToLcd(9).should.equal(`
###
# #
###
  #
###
`)
    })
})