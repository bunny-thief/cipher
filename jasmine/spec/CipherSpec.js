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
    expect(cipherN("ABCDEFGHIJKLM NOPQRSTUVWXYZ -25")).toEqual("BCDEFGHIJKLMN OPQRSTUVWXYZA");
  });
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
    expect(cipherN("abcdefghijklm nopqrstuvwxyz -25")).toEqual("bcdefghijklmn opqrstuvwxyza");
  });
});

describe("Numbers", function() {

  it("should shift by 1", function() {
    expect(cipherN("0123456789 1")).toEqual("1234567890");
  });

  it("should shift by -1", function() {
    expect(cipherN("0123456789 -1")).toEqual("9012345678");
  });

  it("should shift by 13", function() {
    expect(cipherN("0123456789 13")).toEqual("3456789012");
  });

  it("should shift by -13", function() {
    expect(cipherN("0123456789 -13")).toEqual("7890123456");
  });

  it("should shift by 25", function() {
    expect(cipherN("0123456789 25")).toEqual("5678901234");
  });

  it("should shift by -25", function() {
    expect(cipherN("0123456789 -25")).toEqual("5678901234");
  });
});
