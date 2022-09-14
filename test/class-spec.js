const chai = require("chai");
const expect = chai.expect;

const  Word  = require("../class");

describe("Word class", function () {
 
    let user1;
    let user2;
	beforeEach(() =>{
	user1=new Word("whothegoat")
	user2= new Word("metheboy");
	});
       





	describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(user1).to.exist;
      expect(user2).to.exist;

    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(user1.word).to.equal("whothegoat");
       expect(user2.word).to.equal("metheboy");
    });
  });
    

	/* It was at this point that a fella knew he needed help, llucky the fella was able to vibe with the help not copy this time around*/
  describe("removeVowels function", function () {
  	  it("should return a the word with all vowels removed", function () {
     const consonantWord1 = user1.removeVowels();
     const consonantWord2 = user2.removeVowels();
     
		  expect(consonantWord1).to.equal("whthgt")
		  expect(consonantWord2).to.equal("mthby");


	  });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
     
    const vowelWord1= user1.removeConsonants();
 	    const vowelWord2 = user2.removeConsonants();
    
    expect(vowelWord1).to.equal("oeoa");
	    expect(vowelWord2).to.equal("eeo");
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
    const plWord1 = user1.pigLatin();
	    const plWord2 = user2.pigLatin();

      expect(plWord1).to.equal("othegoatwhay");
	    expect(plWord2).to.equal("etheboymay");

    });
  });
});
