describe("scrabbleScore", function(){
   it("should return '1' if the word has letters 'A,E,I,O,U,L,N,R,S,T'", function(){
      scrabbleScore("A").should.equal(1);
   });

   it("should return '2' if word has letters 'D, G'", function(){
      scrabbleScore("D").should.equal(2);
   });

   it("should return '3' if word has letters 'B, C, M, P'", function(){
      scrabbleScore("B").should.equal(3);
   });

   it("should return '4' if word has letters 'F, H, V, W, Y'", function(){
      scrabbleScore("H").should.equal(4);
   });

   it("should return '5' if word has letter 'K'", function(){
      scrabbleScore("K").should.equal(5);
   });

   it("should return '8' if word has letters 'J, X'", function(){
      scrabbleScore("X").should.equal(8);
   });

   it("should return '10' if word has letters 'Q, Z'", function(){
      scrabbleScore("Q").should.equal(10);
   });

   it("should return '5' if word is 'Dog'", function(){
      scrabbleScore("DOG").should.equal(5);
   });

   it("should return '17' if word is 'Jack'", function(){
      scrabbleScore("JACK").should.equal(17);
   });

   it("should return '13' if word is 'Bull shit'", function(){
      scrabbleScore("Bull shit").should.equal(13);
   });
})