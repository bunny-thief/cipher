describe("Uppercase", function() {

  it("should shift by 1", function() {
    expect(cipherN("ABCDEFGHIJKLM NOPQRSTUVWXYZ 1")).toEqual("BCDEFGHIJKLMN OPQRSTUVWXYZA");
  });

  it("should shift by -1", function() {
    expect(cipherN("ABCDEFGHIJKLM NOPQRSTUVWXYZ -1")).toEqual("ZABCDEFGHIJKL MNOPQRSTUVWXY");
  });

  it("should shift by 13", function() {
    expect(cipherN("ABCDEFGHIJKLM NOPQRSTUVWXYZ 13")).toEqual("NOPQRSTUVWXYZ ABCDEFGHIJKLM");
  });

  it("should shift by -13", function() {
    expect(cipherN("ABCDEFGHIJKLM NOPQRSTUVWXYZ -13")).toEqual("NOPQRSTUVWXYZ ABCDEFGHIJKLM");
  });

  it("should shift by 25", function() {
    expect(cipherN("ABCDEFGHIJKLM NOPQRSTUVWXYZ 25")).toEqual("ZABCDEFGHIJKL MNOPQRSTUVWXY");
  });

  it("should shift by -25", function() {
    expect(cipherN("ABCDEFGHIJKLM NOPQRSTUVWXYZ 25")).toEqual("BCDEFGHIJKLMN OPQRSTUVWXYZA");
  });


  // beforeEach(function() {
  //   player = new Player();
  //   song = new Song();
  // });
  //   //demonstrates use of custom matcher
  //   expect(player).toBePlaying(song);
  // });
});

describe("Lowercase", function() {

  it("should shift by 1", function() {
    expect(cipherN("abcdefghijklm nopqrstuvwxyz 1")).toEqual("bcdefghijklmn opqrstuvwxyza");
  });

  it("should shift by -1", function() {
    expect(cipherN("abcdefghijklm nopqrstuvwxyz -1")).toEqual("zabcdefghijkl mnopqrstuvwxy");
  });

  it("should shift by 13", function() {
    expect(cipherN("abcdefghijklm nopqrstuvwxyz 13")).toEqual("nopqrstuvwxyz abcdefghijklm");
  });

  it("should shift by -13", function() {
    expect(cipherN("abcdefghijklm nopqrstuvwxyz -13")).toEqual("nopqrstuvwxyz abcdefghijklm");
  });

  it("should shift by 25", function() {
    expect(cipherN("abcdefghijklm nopqrstuvwxyz 25")).toEqual("zabcdefghijkl mnopqrstuvwxy");
  });

  it("should shift by -25", function() {
    expect(cipherN("abcdefghijklm nopqrstuvwxyz 25")).toEqual("bcdefghijklmn opqrstuvwxyza");
  });
});
