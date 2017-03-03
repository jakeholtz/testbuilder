var FILL_ME_IN = 'Fill this value in';

describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
         
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
         
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
         
});

describe('Discover', function() {
  var expect = chai.expect;
         
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6500567890123456')).to.equal('Discover');
  });
         
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6500567890123456789')).to.equal('Discover');
  });
         
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
     
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
         expect(detectNetwork(prefix + '4567890123456')).to.equal('Discover');
      });
     
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '4567890123456789')).to.equal('Discover');
      });
     
    })(prefix)
  }
  
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011567890123456')).to.equal('Discover');
  });
         
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011567890123456789')).to.equal('Discover');
  });
         
});

describe('Maestro', function() {
  var expect = chai.expect;
         
  for (var leng = 12; leng <= 19; leng++) {
    (function(leng) {
      var extra = (leng - 12);
      var extraLetters = '';
      for (var i = 0; i < extra; i++) {
        extraLetters += 'X';
      }
     
      it('has a prefix of 5018 and a length of ' + leng, function() {
         expect(detectNetwork('501856789012' + extraLetters)).to.equal('Maestro');
      });
     
      it('has a prefix of 5020 and a length of ' + leng, function() {
         expect(detectNetwork('502056789012' + extraLetters)).to.equal('Maestro');
      });
     
      it('has a prefix of 5038 and a length of ' + leng, function() {
         expect(detectNetwork('503856789012' + extraLetters)).to.equal('Maestro');
      });
     
      it('has a prefix of 6304 and a length of ' + leng, function() {
         expect(detectNetwork('630456789012' + extraLetters)).to.equal('Maestro');
      });
     
    })(leng)
  }
         
});

describe('China UnionPay', function() {
  var expect = chai.expect;

  for (var i = 624; i <= 626; i++) {
    (function(i) {
    var pre = i;
    it('has a prefix of ' + pre + ' and a length of 16', function() {
       expect(detectNetwork(pre + '4567890123456')).to.equal('China UnionPay');
    });

    it('has a prefix of ' + pre + ' and a length of 17', function() {
       expect(detectNetwork(pre + '45678901234567')).to.equal('China UnionPay');
    });

    it('has a prefix of ' + pre + ' and a length of 18', function() {
       expect(detectNetwork(pre + '456789012345678')).to.equal('China UnionPay');
    });
         
    it('has a prefix of ' + pre + ' and a length of 19', function() {
       expect(detectNetwork(pre + '4567890123456789')).to.equal('China UnionPay');
       });
    })(i)
  }
         
  for (var i = 6282; i <= 6288; i++) {
    (function(i) {
    var pre2 = i;
    it('has a prefix of ' + pre2 + ' and a length of 16', function() {
       expect(detectNetwork(pre2 + '567890123456')).to.equal('China UnionPay');
    });

    it('has a prefix of ' + pre2 + ' and a length of 17', function() {
       expect(detectNetwork(pre2 + '5678901234567')).to.equal('China UnionPay');
    });

    it('has a prefix of ' + pre2 + ' and a length of 18', function() {
       expect(detectNetwork(pre2 + '56789012345678')).to.equal('China UnionPay');
    });
         
    it('has a prefix of ' + pre2 + ' and a length of 19', function() {
       expect(detectNetwork(pre2 + '567890123456789')).to.equal('China UnionPay');
       });
    })(i)
  }
         
  for (var i = 622126; i <= 622925; i++) {
    (function(i) {
    var pre3 = i;
    it('has a prefix of ' + pre3 + ' and a length of 16', function() {
       expect(detectNetwork(pre3 + '7890123456')).to.equal('China UnionPay');
    });
         
    it('has a prefix of ' + pre3 + ' and a length of 17', function() {
       expect(detectNetwork(pre3 + '78901234567')).to.equal('China UnionPay');
    });
    
    it('has a prefix of ' + pre3 + ' and a length of 18', function() {
       expect(detectNetwork(pre3 + '789012345678')).to.equal('China UnionPay');
    });

    it('has a prefix of ' + pre3 + ' and a length of 19', function() {
       expect(detectNetwork(pre3 + '7890123456789')).to.equal('China UnionPay');
       });
    })(i)
  }
         
});

describe('Switch', function() {
  var expect = chai.expect;
  var prefix4Array = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var prefix6Array = ['564182', '633110'];

  for (var i = 0; i < prefix4Array.length; i++) {
    (function(i) {
    it('has a prefix of ' + prefix4Array[i] + ' and a length of 16', function() {
       expect(detectNetwork(prefix4Array[i] + '567890123456')).to.equal('Switch');
    });
    
    it('has a prefix of ' + prefix4Array[i] + ' and a length of 18', function() {
       expect(detectNetwork(prefix4Array[i] + '56789012345678')).to.equal('Switch');
    });
         
    it('has a prefix of ' + prefix4Array[i] + ' and a length of 19', function() {
       expect(detectNetwork(prefix4Array[i] + '567890123456789')).to.equal('Switch');
       });
    })(i)
  }

  for (var j = 0; j < prefix6Array.length; j++) {
    (function(j) {
    var temporary2 = prefix6Array[j];
    it('has a prefix of ' + prefix6Array[j] + ' and a length of 16', function() {
       expect(detectNetwork(prefix6Array[j] + '7890123456')).to.equal('Switch');
    });
    
    it('has a prefix of ' + prefix6Array[j] + ' and a length of 18', function() {
       expect(detectNetwork(prefix6Array[j] + '789012345678')).to.equal('Switch');
    });
         
    it('has a prefix of ' + prefix6Array[j] + ' and a length of 19', function() {
       expect(detectNetwork(prefix6Array[j] + '7890123456789')).to.equal('Switch');
       });
    })(j)
  }
         
});
