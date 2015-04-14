Polymer('caesar-cipher', {
  publish: {
    input: 'abc',
    output: '',
    offset: 3,
    mode: 'encrypt'
  },

  crypt: function(string, offset) {
    /**
     * An array of each letter of the string
     *
     * @type {Array}
     */
    var letters = string.split('');

    /**
     * An array of each crypted letter of the string
     *
     * @type {Array}
     */
    var cryptedLetters = [];

    /**
     * The ascii code of the letter
     *
     * @type {Number}
     */
    var ascii;

    /**
     * The ascii code calculated
     *
     * @type {Number}
     */
    var calculatedAscii;

    letters.map(function(letter) {
      ascii = letter.charCodeAt(0);

      if(ascii >= 97 && ascii <= 123) {
        calculatedAscii = (ascii + offset + 26 - 97) % 26 + 97;
      }

      if(ascii >= 65 && ascii <= 90) {
        calculatedAscii = (ascii + offset + 26 - 65) % 26 + 65;
      }

      cryptedLetters.push(String.fromCharCode(calculatedAscii));
    });

    return cryptedLetters.join('');
  },

  encrypt: function() {
    var input = this.input;
    var offset = Number(this.offset);

    this.output = this.crypt(input, offset);
  },

  decrypt: function() {
    var input = this.input;
    var offset = 0 - Number(this.offset);

    this.output = this.crypt(input, offset);
  }
});
