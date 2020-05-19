/*! @name videojs-google-chromecast @version 0.0.6 @license UNLICENSED */
(function (QUnit, sinon, videojs) {
	'use strict';

	QUnit = QUnit && Object.prototype.hasOwnProperty.call(QUnit, 'default') ? QUnit['default'] : QUnit;
	sinon = sinon && Object.prototype.hasOwnProperty.call(sinon, 'default') ? sinon['default'] : sinon;
	videojs = videojs && Object.prototype.hasOwnProperty.call(videojs, 'default') ? videojs['default'] : videojs;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	var _nodeResolve_empty = {};

	var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': _nodeResolve_empty
	});

	var minDoc = getCjsExportFromNamespace(_nodeResolve_empty$1);

	var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal :
	    typeof window !== 'undefined' ? window : {};


	var doccy;

	if (typeof document !== 'undefined') {
	    doccy = document;
	} else {
	    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }
	}

	var document_1 = doccy;

	var version = "0.0.6";

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var inheritsLoose = _inheritsLoose;

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized;

	var cov_2q58cqsssn = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/tech/chromecast-tech.js',
	      hash = '83acbd6973aa308e33335575d831275087cb6e8b',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/tech/chromecast-tech.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 3,
	          column: 16
	        },
	        end: {
	          line: 3,
	          column: 49
	        }
	      },
	      '1': {
	        start: {
	          line: 4,
	          column: 17
	        },
	        end: {
	          line: 4,
	          column: 51
	        }
	      },
	      '2': {
	        start: {
	          line: 5,
	          column: 13
	        },
	        end: {
	          line: 5,
	          column: 43
	        }
	      },
	      '3': {
	        start: {
	          line: 6,
	          column: 11
	        },
	        end: {
	          line: 6,
	          column: 39
	        }
	      },
	      '4': {
	        start: {
	          line: 8,
	          column: 21
	        },
	        end: {
	          line: 19,
	          column: 1
	        }
	      },
	      '5': {
	        start: {
	          line: 31,
	          column: 4
	        },
	        end: {
	          line: 31,
	          column: 26
	        }
	      },
	      '6': {
	        start: {
	          line: 33,
	          column: 4
	        },
	        end: {
	          line: 33,
	          column: 46
	        }
	      },
	      '7': {
	        start: {
	          line: 34,
	          column: 4
	        },
	        end: {
	          line: 34,
	          column: 54
	        }
	      },
	      '8': {
	        start: {
	          line: 35,
	          column: 4
	        },
	        end: {
	          line: 35,
	          column: 65
	        }
	      },
	      '9': {
	        start: {
	          line: 37,
	          column: 4
	        },
	        end: {
	          line: 37,
	          column: 36
	        }
	      },
	      '10': {
	        start: {
	          line: 39,
	          column: 4
	        },
	        end: {
	          line: 39,
	          column: 24
	        }
	      },
	      '11': {
	        start: {
	          line: 40,
	          column: 4
	        },
	        end: {
	          line: 40,
	          column: 28
	        }
	      },
	      '12': {
	        start: {
	          line: 41,
	          column: 4
	        },
	        end: {
	          line: 41,
	          column: 18
	        }
	      },
	      '13': {
	        start: {
	          line: 43,
	          column: 4
	        },
	        end: {
	          line: 43,
	          column: 24
	        }
	      },
	      '14': {
	        start: {
	          line: 47,
	          column: 6
	        },
	        end: {
	          line: 51,
	          column: 9
	        }
	      },
	      '15': {
	        start: {
	          line: 48,
	          column: 8
	        },
	        end: {
	          line: 48,
	          column: 41
	        }
	      },
	      '16': {
	        start: {
	          line: 49,
	          column: 8
	        },
	        end: {
	          line: 49,
	          column: 35
	        }
	      },
	      '17': {
	        start: {
	          line: 50,
	          column: 8
	        },
	        end: {
	          line: 50,
	          column: 36
	        }
	      },
	      '18': {
	        start: {
	          line: 55,
	          column: 19
	        },
	        end: {
	          line: 55,
	          column: 36
	        }
	      },
	      '19': {
	        start: {
	          line: 56,
	          column: 6
	        },
	        end: {
	          line: 65,
	          column: 7
	        }
	      },
	      '20': {
	        start: {
	          line: 57,
	          column: 32
	        },
	        end: {
	          line: 57,
	          column: 70
	        }
	      },
	      '21': {
	        start: {
	          line: 59,
	          column: 10
	        },
	        end: {
	          line: 59,
	          column: 59
	        }
	      },
	      '22': {
	        start: {
	          line: 60,
	          column: 10
	        },
	        end: {
	          line: 62,
	          column: 13
	        }
	      },
	      '23': {
	        start: {
	          line: 61,
	          column: 14
	        },
	        end: {
	          line: 61,
	          column: 66
	        }
	      },
	      '24': {
	        start: {
	          line: 64,
	          column: 10
	        },
	        end: {
	          line: 64,
	          column: 40
	        }
	      },
	      '25': {
	        start: {
	          line: 67,
	          column: 6
	        },
	        end: {
	          line: 80,
	          column: 7
	        }
	      },
	      '26': {
	        start: {
	          line: 68,
	          column: 10
	        },
	        end: {
	          line: 68,
	          column: 38
	        }
	      },
	      '27': {
	        start: {
	          line: 69,
	          column: 10
	        },
	        end: {
	          line: 77,
	          column: 11
	        }
	      },
	      '28': {
	        start: {
	          line: 70,
	          column: 36
	        },
	        end: {
	          line: 70,
	          column: 75
	        }
	      },
	      '29': {
	        start: {
	          line: 72,
	          column: 14
	        },
	        end: {
	          line: 72,
	          column: 63
	        }
	      },
	      '30': {
	        start: {
	          line: 73,
	          column: 14
	        },
	        end: {
	          line: 75,
	          column: 17
	        }
	      },
	      '31': {
	        start: {
	          line: 74,
	          column: 18
	        },
	        end: {
	          line: 74,
	          column: 70
	        }
	      },
	      '32': {
	        start: {
	          line: 79,
	          column: 10
	        },
	        end: {
	          line: 79,
	          column: 57
	        }
	      },
	      '33': {
	        start: {
	          line: 82,
	          column: 6
	        },
	        end: {
	          line: 94,
	          column: 7
	        }
	      },
	      '34': {
	        start: {
	          line: 83,
	          column: 10
	        },
	        end: {
	          line: 83,
	          column: 38
	        }
	      },
	      '35': {
	        start: {
	          line: 84,
	          column: 10
	        },
	        end: {
	          line: 91,
	          column: 11
	        }
	      },
	      '36': {
	        start: {
	          line: 85,
	          column: 36
	        },
	        end: {
	          line: 85,
	          column: 75
	        }
	      },
	      '37': {
	        start: {
	          line: 87,
	          column: 14
	        },
	        end: {
	          line: 87,
	          column: 63
	        }
	      },
	      '38': {
	        start: {
	          line: 88,
	          column: 14
	        },
	        end: {
	          line: 90,
	          column: 17
	        }
	      },
	      '39': {
	        start: {
	          line: 89,
	          column: 18
	        },
	        end: {
	          line: 89,
	          column: 70
	        }
	      },
	      '40': {
	        start: {
	          line: 93,
	          column: 10
	        },
	        end: {
	          line: 93,
	          column: 57
	        }
	      },
	      '41': {
	        start: {
	          line: 98,
	          column: 15
	        },
	        end: {
	          line: 101,
	          column: 6
	        }
	      },
	      '42': {
	        start: {
	          line: 102,
	          column: 4
	        },
	        end: {
	          line: 102,
	          column: 14
	        }
	      },
	      '43': {
	        start: {
	          line: 106,
	          column: 4
	        },
	        end: {
	          line: 106,
	          column: 328
	        }
	      },
	      '44': {
	        start: {
	          line: 110,
	          column: 4
	        },
	        end: {
	          line: 112,
	          column: 5
	        }
	      },
	      '45': {
	        start: {
	          line: 111,
	          column: 6
	        },
	        end: {
	          line: 111,
	          column: 13
	        }
	      },
	      '46': {
	        start: {
	          line: 113,
	          column: 4
	        },
	        end: {
	          line: 115,
	          column: 5
	        }
	      },
	      '47': {
	        start: {
	          line: 114,
	          column: 6
	        },
	        end: {
	          line: 114,
	          column: 37
	        }
	      },
	      '48': {
	        start: {
	          line: 119,
	          column: 4
	        },
	        end: {
	          line: 119,
	          column: 35
	        }
	      },
	      '49': {
	        start: {
	          line: 120,
	          column: 4
	        },
	        end: {
	          line: 120,
	          column: 27
	        }
	      },
	      '50': {
	        start: {
	          line: 124,
	          column: 4
	        },
	        end: {
	          line: 126,
	          column: 5
	        }
	      },
	      '51': {
	        start: {
	          line: 125,
	          column: 6
	        },
	        end: {
	          line: 125,
	          column: 13
	        }
	      },
	      '52': {
	        start: {
	          line: 128,
	          column: 4
	        },
	        end: {
	          line: 146,
	          column: 5
	        }
	      },
	      '53': {
	        start: {
	          line: 130,
	          column: 6
	        },
	        end: {
	          line: 130,
	          column: 30
	        }
	      },
	      '54': {
	        start: {
	          line: 131,
	          column: 6
	        },
	        end: {
	          line: 131,
	          column: 12
	        }
	      },
	      '55': {
	        start: {
	          line: 133,
	          column: 6
	        },
	        end: {
	          line: 133,
	          column: 33
	        }
	      },
	      '56': {
	        start: {
	          line: 134,
	          column: 6
	        },
	        end: {
	          line: 134,
	          column: 28
	        }
	      },
	      '57': {
	        start: {
	          line: 136,
	          column: 6
	        },
	        end: {
	          line: 136,
	          column: 12
	        }
	      },
	      '58': {
	        start: {
	          line: 138,
	          column: 6
	        },
	        end: {
	          line: 138,
	          column: 28
	        }
	      },
	      '59': {
	        start: {
	          line: 139,
	          column: 6
	        },
	        end: {
	          line: 139,
	          column: 26
	        }
	      },
	      '60': {
	        start: {
	          line: 140,
	          column: 6
	        },
	        end: {
	          line: 140,
	          column: 12
	        }
	      },
	      '61': {
	        start: {
	          line: 142,
	          column: 6
	        },
	        end: {
	          line: 142,
	          column: 30
	        }
	      },
	      '62': {
	        start: {
	          line: 143,
	          column: 6
	        },
	        end: {
	          line: 143,
	          column: 27
	        }
	      },
	      '63': {
	        start: {
	          line: 144,
	          column: 6
	        },
	        end: {
	          line: 144,
	          column: 27
	        }
	      },
	      '64': {
	        start: {
	          line: 145,
	          column: 6
	        },
	        end: {
	          line: 145,
	          column: 12
	        }
	      },
	      '65': {
	        start: {
	          line: 152,
	          column: 4
	        },
	        end: {
	          line: 154,
	          column: 5
	        }
	      },
	      '66': {
	        start: {
	          line: 153,
	          column: 6
	        },
	        end: {
	          line: 153,
	          column: 13
	        }
	      },
	      '67': {
	        start: {
	          line: 155,
	          column: 4
	        },
	        end: {
	          line: 155,
	          column: 36
	        }
	      },
	      '68': {
	        start: {
	          line: 159,
	          column: 22
	        },
	        end: {
	          line: 159,
	          column: 24
	        }
	      },
	      '69': {
	        start: {
	          line: 160,
	          column: 20
	        },
	        end: {
	          line: 160,
	          column: 37
	        }
	      },
	      '70': {
	        start: {
	          line: 161,
	          column: 19
	        },
	        end: {
	          line: 161,
	          column: 37
	        }
	      },
	      '71': {
	        start: {
	          line: 163,
	          column: 4
	        },
	        end: {
	          line: 165,
	          column: 5
	        }
	      },
	      '72': {
	        start: {
	          line: 164,
	          column: 6
	        },
	        end: {
	          line: 164,
	          column: 13
	        }
	      },
	      '73': {
	        start: {
	          line: 167,
	          column: 4
	        },
	        end: {
	          line: 172,
	          column: 5
	        }
	      },
	      '74': {
	        start: {
	          line: 168,
	          column: 20
	        },
	        end: {
	          line: 168,
	          column: 29
	        }
	      },
	      '75': {
	        start: {
	          line: 169,
	          column: 6
	        },
	        end: {
	          line: 171,
	          column: 7
	        }
	      },
	      '76': {
	        start: {
	          line: 170,
	          column: 8
	        },
	        end: {
	          line: 170,
	          column: 49
	        }
	      },
	      '77': {
	        start: {
	          line: 174,
	          column: 4
	        },
	        end: {
	          line: 177,
	          column: 5
	        }
	      },
	      '78': {
	        start: {
	          line: 175,
	          column: 6
	        },
	        end: {
	          line: 175,
	          column: 86
	        }
	      },
	      '79': {
	        start: {
	          line: 176,
	          column: 6
	        },
	        end: {
	          line: 176,
	          column: 51
	        }
	      },
	      '80': {
	        start: {
	          line: 184,
	          column: 22
	        },
	        end: {
	          line: 184,
	          column: 24
	        }
	      },
	      '81': {
	        start: {
	          line: 185,
	          column: 19
	        },
	        end: {
	          line: 185,
	          column: 36
	        }
	      },
	      '82': {
	        start: {
	          line: 187,
	          column: 4
	        },
	        end: {
	          line: 189,
	          column: 5
	        }
	      },
	      '83': {
	        start: {
	          line: 188,
	          column: 6
	        },
	        end: {
	          line: 188,
	          column: 13
	        }
	      },
	      '84': {
	        start: {
	          line: 191,
	          column: 4
	        },
	        end: {
	          line: 197,
	          column: 5
	        }
	      },
	      '85': {
	        start: {
	          line: 192,
	          column: 20
	        },
	        end: {
	          line: 192,
	          column: 29
	        }
	      },
	      '86': {
	        start: {
	          line: 194,
	          column: 6
	        },
	        end: {
	          line: 196,
	          column: 7
	        }
	      },
	      '87': {
	        start: {
	          line: 195,
	          column: 8
	        },
	        end: {
	          line: 195,
	          column: 30
	        }
	      },
	      '88': {
	        start: {
	          line: 199,
	          column: 4
	        },
	        end: {
	          line: 202,
	          column: 5
	        }
	      },
	      '89': {
	        start: {
	          line: 200,
	          column: 6
	        },
	        end: {
	          line: 200,
	          column: 86
	        }
	      },
	      '90': {
	        start: {
	          line: 201,
	          column: 6
	        },
	        end: {
	          line: 201,
	          column: 52
	        }
	      },
	      '91': {
	        start: {
	          line: 206,
	          column: 4
	        },
	        end: {
	          line: 206,
	          column: 38
	        }
	      },
	      '92': {
	        start: {
	          line: 210,
	          column: 4
	        },
	        end: {
	          line: 210,
	          column: 65
	        }
	      },
	      '93': {
	        start: {
	          line: 214,
	          column: 4
	        },
	        end: {
	          line: 214,
	          column: 59
	        }
	      },
	      '94': {
	        start: {
	          line: 218,
	          column: 6
	        },
	        end: {
	          line: 218,
	          column: 19
	        }
	      },
	      '95': {
	        start: {
	          line: 222,
	          column: 4
	        },
	        end: {
	          line: 224,
	          column: 5
	        }
	      },
	      '96': {
	        start: {
	          line: 223,
	          column: 6
	        },
	        end: {
	          line: 223,
	          column: 13
	        }
	      },
	      '97': {
	        start: {
	          line: 225,
	          column: 4
	        },
	        end: {
	          line: 227,
	          column: 5
	        }
	      },
	      '98': {
	        start: {
	          line: 226,
	          column: 6
	        },
	        end: {
	          line: 226,
	          column: 40
	        }
	      },
	      '99': {
	        start: {
	          line: 229,
	          column: 4
	        },
	        end: {
	          line: 229,
	          column: 32
	        }
	      },
	      '100': {
	        start: {
	          line: 233,
	          column: 4
	        },
	        end: {
	          line: 235,
	          column: 5
	        }
	      },
	      '101': {
	        start: {
	          line: 234,
	          column: 6
	        },
	        end: {
	          line: 234,
	          column: 13
	        }
	      },
	      '102': {
	        start: {
	          line: 237,
	          column: 4
	        },
	        end: {
	          line: 239,
	          column: 5
	        }
	      },
	      '103': {
	        start: {
	          line: 238,
	          column: 8
	        },
	        end: {
	          line: 238,
	          column: 43
	        }
	      },
	      '104': {
	        start: {
	          line: 241,
	          column: 4
	        },
	        end: {
	          line: 241,
	          column: 31
	        }
	      },
	      '105': {
	        start: {
	          line: 245,
	          column: 4
	        },
	        end: {
	          line: 245,
	          column: 24
	        }
	      },
	      '106': {
	        start: {
	          line: 249,
	          column: 4
	        },
	        end: {
	          line: 249,
	          column: 55
	        }
	      },
	      '107': {
	        start: {
	          line: 253,
	          column: 6
	        },
	        end: {
	          line: 255,
	          column: 7
	        }
	      },
	      '108': {
	        start: {
	          line: 254,
	          column: 10
	        },
	        end: {
	          line: 254,
	          column: 19
	        }
	      },
	      '109': {
	        start: {
	          line: 256,
	          column: 6
	        },
	        end: {
	          line: 256,
	          column: 51
	        }
	      },
	      '110': {
	        start: {
	          line: 260,
	          column: 15
	        },
	        end: {
	          line: 260,
	          column: 16
	        }
	      },
	      '111': {
	        start: {
	          line: 261,
	          column: 4
	        },
	        end: {
	          line: 263,
	          column: 5
	        }
	      },
	      '112': {
	        start: {
	          line: 262,
	          column: 6
	        },
	        end: {
	          line: 262,
	          column: 18
	        }
	      },
	      '113': {
	        start: {
	          line: 265,
	          column: 4
	        },
	        end: {
	          line: 265,
	          column: 20
	        }
	      },
	      '114': {
	        start: {
	          line: 267,
	          column: 4
	        },
	        end: {
	          line: 267,
	          column: 49
	        }
	      },
	      '115': {
	        start: {
	          line: 268,
	          column: 4
	        },
	        end: {
	          line: 268,
	          column: 47
	        }
	      },
	      '116': {
	        start: {
	          line: 269,
	          column: 4
	        },
	        end: {
	          line: 269,
	          column: 15
	        }
	      },
	      '117': {
	        start: {
	          line: 273,
	          column: 4
	        },
	        end: {
	          line: 273,
	          column: 24
	        }
	      },
	      '118': {
	        start: {
	          line: 281,
	          column: 4
	        },
	        end: {
	          line: 283,
	          column: 5
	        }
	      },
	      '119': {
	        start: {
	          line: 282,
	          column: 6
	        },
	        end: {
	          line: 282,
	          column: 15
	        }
	      },
	      '120': {
	        start: {
	          line: 284,
	          column: 4
	        },
	        end: {
	          line: 284,
	          column: 43
	        }
	      },
	      '121': {
	        start: {
	          line: 288,
	          column: 4
	        },
	        end: {
	          line: 288,
	          column: 29
	        }
	      },
	      '122': {
	        start: {
	          line: 292,
	          column: 4
	        },
	        end: {
	          line: 292,
	          column: 30
	        }
	      },
	      '123': {
	        start: {
	          line: 293,
	          column: 8
	        },
	        end: {
	          line: 293,
	          column: 20
	        }
	      },
	      '124': {
	        start: {
	          line: 297,
	          column: 8
	        },
	        end: {
	          line: 297,
	          column: 35
	        }
	      },
	      '125': {
	        start: {
	          line: 298,
	          column: 8
	        },
	        end: {
	          line: 298,
	          column: 20
	        }
	      },
	      '126': {
	        start: {
	          line: 305,
	          column: 4
	        },
	        end: {
	          line: 307,
	          column: 5
	        }
	      },
	      '127': {
	        start: {
	          line: 306,
	          column: 6
	        },
	        end: {
	          line: 306,
	          column: 13
	        }
	      },
	      '128': {
	        start: {
	          line: 309,
	          column: 4
	        },
	        end: {
	          line: 309,
	          column: 38
	        }
	      },
	      '129': {
	        start: {
	          line: 310,
	          column: 4
	        },
	        end: {
	          line: 310,
	          column: 25
	        }
	      },
	      '130': {
	        start: {
	          line: 311,
	          column: 4
	        },
	        end: {
	          line: 311,
	          column: 24
	        }
	      },
	      '131': {
	        start: {
	          line: 312,
	          column: 4
	        },
	        end: {
	          line: 312,
	          column: 32
	        }
	      },
	      '132': {
	        start: {
	          line: 313,
	          column: 4
	        },
	        end: {
	          line: 313,
	          column: 23
	        }
	      },
	      '133': {
	        start: {
	          line: 314,
	          column: 4
	        },
	        end: {
	          line: 314,
	          column: 52
	        }
	      },
	      '134': {
	        start: {
	          line: 315,
	          column: 4
	        },
	        end: {
	          line: 315,
	          column: 28
	        }
	      },
	      '135': {
	        start: {
	          line: 316,
	          column: 4
	        },
	        end: {
	          line: 316,
	          column: 40
	        }
	      },
	      '136': {
	        start: {
	          line: 320,
	          column: 4
	        },
	        end: {
	          line: 320,
	          column: 23
	        }
	      },
	      '137': {
	        start: {
	          line: 324,
	          column: 4
	        },
	        end: {
	          line: 324,
	          column: 47
	        }
	      },
	      '138': {
	        start: {
	          line: 328,
	          column: 4
	        },
	        end: {
	          line: 328,
	          column: 17
	        }
	      },
	      '139': {
	        start: {
	          line: 332,
	          column: 8
	        },
	        end: {
	          line: 332,
	          column: 19
	        }
	      },
	      '140': {
	        start: {
	          line: 337,
	          column: 8
	        },
	        end: {
	          line: 337,
	          column: 28
	        }
	      },
	      '141': {
	        start: {
	          line: 341,
	          column: 8
	        },
	        end: {
	          line: 341,
	          column: 17
	        }
	      },
	      '142': {
	        start: {
	          line: 345,
	          column: 0
	        },
	        end: {
	          line: 345,
	          column: 41
	        }
	      },
	      '143': {
	        start: {
	          line: 346,
	          column: 0
	        },
	        end: {
	          line: 346,
	          column: 39
	        }
	      },
	      '144': {
	        start: {
	          line: 347,
	          column: 0
	        },
	        end: {
	          line: 349,
	          column: 2
	        }
	      },
	      '145': {
	        start: {
	          line: 348,
	          column: 4
	        },
	        end: {
	          line: 348,
	          column: 16
	        }
	      },
	      '146': {
	        start: {
	          line: 350,
	          column: 0
	        },
	        end: {
	          line: 350,
	          column: 40
	        }
	      },
	      '147': {
	        start: {
	          line: 351,
	          column: 0
	        },
	        end: {
	          line: 351,
	          column: 40
	        }
	      },
	      '148': {
	        start: {
	          line: 352,
	          column: 0
	        },
	        end: {
	          line: 363,
	          column: 2
	        }
	      },
	      '149': {
	        start: {
	          line: 353,
	          column: 23
	        },
	        end: {
	          line: 353,
	          column: 78
	        }
	      },
	      '150': {
	        start: {
	          line: 354,
	          column: 22
	        },
	        end: {
	          line: 354,
	          column: 52
	        }
	      },
	      '151': {
	        start: {
	          line: 356,
	          column: 4
	        },
	        end: {
	          line: 362,
	          column: 5
	        }
	      },
	      '152': {
	        start: {
	          line: 357,
	          column: 8
	        },
	        end: {
	          line: 357,
	          column: 26
	        }
	      },
	      '153': {
	        start: {
	          line: 358,
	          column: 11
	        },
	        end: {
	          line: 362,
	          column: 5
	        }
	      },
	      '154': {
	        start: {
	          line: 359,
	          column: 8
	        },
	        end: {
	          line: 359,
	          column: 23
	        }
	      },
	      '155': {
	        start: {
	          line: 361,
	          column: 8
	        },
	        end: {
	          line: 361,
	          column: 18
	        }
	      },
	      '156': {
	        start: {
	          line: 364,
	          column: 0
	        },
	        end: {
	          line: 371,
	          column: 2
	        }
	      },
	      '157': {
	        start: {
	          line: 365,
	          column: 2
	        },
	        end: {
	          line: 369,
	          column: 3
	        }
	      },
	      '158': {
	        start: {
	          line: 366,
	          column: 4
	        },
	        end: {
	          line: 366,
	          column: 71
	        }
	      },
	      '159': {
	        start: {
	          line: 367,
	          column: 9
	        },
	        end: {
	          line: 369,
	          column: 3
	        }
	      },
	      '160': {
	        start: {
	          line: 368,
	          column: 4
	        },
	        end: {
	          line: 368,
	          column: 70
	        }
	      },
	      '161': {
	        start: {
	          line: 370,
	          column: 2
	        },
	        end: {
	          line: 370,
	          column: 12
	        }
	      },
	      '162': {
	        start: {
	          line: 372,
	          column: 0
	        },
	        end: {
	          line: 374,
	          column: 2
	        }
	      },
	      '163': {
	        start: {
	          line: 373,
	          column: 4
	        },
	        end: {
	          line: 373,
	          column: 25
	        }
	      },
	      '164': {
	        start: {
	          line: 375,
	          column: 0
	        },
	        end: {
	          line: 375,
	          column: 60
	        }
	      },
	      '165': {
	        start: {
	          line: 376,
	          column: 0
	        },
	        end: {
	          line: 376,
	          column: 73
	        }
	      },
	      '166': {
	        start: {
	          line: 377,
	          column: 0
	        },
	        end: {
	          line: 377,
	          column: 54
	        }
	      },
	      '167': {
	        start: {
	          line: 378,
	          column: 0
	        },
	        end: {
	          line: 378,
	          column: 53
	        }
	      },
	      '168': {
	        start: {
	          line: 379,
	          column: 0
	        },
	        end: {
	          line: 379,
	          column: 56
	        }
	      },
	      '169': {
	        start: {
	          line: 380,
	          column: 0
	        },
	        end: {
	          line: 380,
	          column: 57
	        }
	      },
	      '170': {
	        start: {
	          line: 381,
	          column: 0
	        },
	        end: {
	          line: 381,
	          column: 55
	        }
	      },
	      '171': {
	        start: {
	          line: 382,
	          column: 0
	        },
	        end: {
	          line: 382,
	          column: 57
	        }
	      },
	      '172': {
	        start: {
	          line: 383,
	          column: 0
	        },
	        end: {
	          line: 383,
	          column: 58
	        }
	      },
	      '173': {
	        start: {
	          line: 384,
	          column: 0
	        },
	        end: {
	          line: 384,
	          column: 58
	        }
	      },
	      '174': {
	        start: {
	          line: 386,
	          column: 0
	        },
	        end: {
	          line: 386,
	          column: 32
	        }
	      },
	      '175': {
	        start: {
	          line: 389,
	          column: 0
	        },
	        end: {
	          line: 391,
	          column: 1
	        }
	      },
	      '176': {
	        start: {
	          line: 390,
	          column: 2
	        },
	        end: {
	          line: 390,
	          column: 54
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 30,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 30,
	            column: 35
	          },
	          end: {
	            line: 44,
	            column: 3
	          }
	        },
	        line: 30
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 46,
	            column: 2
	          },
	          end: {
	            line: 46,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 46,
	            column: 17
	          },
	          end: {
	            line: 52,
	            column: 3
	          }
	        },
	        line: 46
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 47,
	            column: 25
	          },
	          end: {
	            line: 47,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 47,
	            column: 31
	          },
	          end: {
	            line: 51,
	            column: 7
	          }
	        },
	        line: 47
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 54,
	            column: 2
	          },
	          end: {
	            line: 54,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 54,
	            column: 21
	          },
	          end: {
	            line: 95,
	            column: 3
	          }
	        },
	        line: 54
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 60,
	            column: 29
	          },
	          end: {
	            line: 60,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 60,
	            column: 40
	          },
	          end: {
	            line: 62,
	            column: 11
	          }
	        },
	        line: 60
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 73,
	            column: 33
	          },
	          end: {
	            line: 73,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 73,
	            column: 44
	          },
	          end: {
	            line: 75,
	            column: 15
	          }
	        },
	        line: 73
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 88,
	            column: 33
	          },
	          end: {
	            line: 88,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 88,
	            column: 44
	          },
	          end: {
	            line: 90,
	            column: 15
	          }
	        },
	        line: 88
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 97,
	            column: 2
	          },
	          end: {
	            line: 97,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 97,
	            column: 13
	          },
	          end: {
	            line: 103,
	            column: 3
	          }
	        },
	        line: 97
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 105,
	            column: 2
	          },
	          end: {
	            line: 105,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 105,
	            column: 11
	          },
	          end: {
	            line: 107,
	            column: 3
	          }
	        },
	        line: 105
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 109,
	            column: 2
	          },
	          end: {
	            line: 109,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 109,
	            column: 27
	          },
	          end: {
	            line: 116,
	            column: 3
	          }
	        },
	        line: 109
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 118,
	            column: 2
	          },
	          end: {
	            line: 118,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 118,
	            column: 21
	          },
	          end: {
	            line: 121,
	            column: 3
	          }
	        },
	        line: 118
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 123,
	            column: 2
	          },
	          end: {
	            line: 123,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 123,
	            column: 24
	          },
	          end: {
	            line: 147,
	            column: 3
	          }
	        },
	        line: 123
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 149,
	            column: 2
	          },
	          end: {
	            line: 149,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 149,
	            column: 11
	          },
	          end: {
	            line: 149,
	            column: 13
	          }
	        },
	        line: 149
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 151,
	            column: 2
	          },
	          end: {
	            line: 151,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 151,
	            column: 15
	          },
	          end: {
	            line: 156,
	            column: 3
	          }
	        },
	        line: 151
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 158,
	            column: 2
	          },
	          end: {
	            line: 158,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 158,
	            column: 28
	          },
	          end: {
	            line: 178,
	            column: 3
	          }
	        },
	        line: 158
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 180,
	            column: 2
	          },
	          end: {
	            line: 180,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 180,
	            column: 28
	          },
	          end: {
	            line: 181,
	            column: 3
	          }
	        },
	        line: 180
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 183,
	            column: 2
	          },
	          end: {
	            line: 183,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 183,
	            column: 27
	          },
	          end: {
	            line: 203,
	            column: 3
	          }
	        },
	        line: 183
	      },
	      '17': {
	        name: '(anonymous_17)',
	        decl: {
	          start: {
	            line: 205,
	            column: 2
	          },
	          end: {
	            line: 205,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 205,
	            column: 19
	          },
	          end: {
	            line: 207,
	            column: 3
	          }
	        },
	        line: 205
	      },
	      '18': {
	        name: '(anonymous_18)',
	        decl: {
	          start: {
	            line: 209,
	            column: 2
	          },
	          end: {
	            line: 209,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 209,
	            column: 18
	          },
	          end: {
	            line: 211,
	            column: 3
	          }
	        },
	        line: 209
	      },
	      '19': {
	        name: '(anonymous_19)',
	        decl: {
	          start: {
	            line: 213,
	            column: 2
	          },
	          end: {
	            line: 213,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 213,
	            column: 15
	          },
	          end: {
	            line: 215,
	            column: 3
	          }
	        },
	        line: 213
	      },
	      '20': {
	        name: '(anonymous_20)',
	        decl: {
	          start: {
	            line: 217,
	            column: 2
	          },
	          end: {
	            line: 217,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 217,
	            column: 13
	          },
	          end: {
	            line: 219,
	            column: 3
	          }
	        },
	        line: 217
	      },
	      '21': {
	        name: '(anonymous_21)',
	        decl: {
	          start: {
	            line: 221,
	            column: 2
	          },
	          end: {
	            line: 221,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 221,
	            column: 9
	          },
	          end: {
	            line: 230,
	            column: 3
	          }
	        },
	        line: 221
	      },
	      '22': {
	        name: '(anonymous_22)',
	        decl: {
	          start: {
	            line: 232,
	            column: 2
	          },
	          end: {
	            line: 232,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 232,
	            column: 10
	          },
	          end: {
	            line: 242,
	            column: 3
	          }
	        },
	        line: 232
	      },
	      '23': {
	        name: '(anonymous_23)',
	        decl: {
	          start: {
	            line: 244,
	            column: 2
	          },
	          end: {
	            line: 244,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 244,
	            column: 11
	          },
	          end: {
	            line: 246,
	            column: 3
	          }
	        },
	        line: 244
	      },
	      '24': {
	        name: '(anonymous_24)',
	        decl: {
	          start: {
	            line: 248,
	            column: 2
	          },
	          end: {
	            line: 248,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 248,
	            column: 10
	          },
	          end: {
	            line: 250,
	            column: 3
	          }
	        },
	        line: 248
	      },
	      '25': {
	        name: '(anonymous_25)',
	        decl: {
	          start: {
	            line: 252,
	            column: 2
	          },
	          end: {
	            line: 252,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 252,
	            column: 17
	          },
	          end: {
	            line: 257,
	            column: 3
	          }
	        },
	        line: 252
	      },
	      '26': {
	        name: '(anonymous_26)',
	        decl: {
	          start: {
	            line: 259,
	            column: 2
	          },
	          end: {
	            line: 259,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 259,
	            column: 27
	          },
	          end: {
	            line: 270,
	            column: 3
	          }
	        },
	        line: 259
	      },
	      '27': {
	        name: '(anonymous_27)',
	        decl: {
	          start: {
	            line: 272,
	            column: 2
	          },
	          end: {
	            line: 272,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 272,
	            column: 11
	          },
	          end: {
	            line: 274,
	            column: 3
	          }
	        },
	        line: 272
	      },
	      '28': {
	        name: '(anonymous_28)',
	        decl: {
	          start: {
	            line: 276,
	            column: 2
	          },
	          end: {
	            line: 276,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 276,
	            column: 13
	          },
	          end: {
	            line: 278,
	            column: 3
	          }
	        },
	        line: 276
	      },
	      '29': {
	        name: '(anonymous_29)',
	        decl: {
	          start: {
	            line: 280,
	            column: 2
	          },
	          end: {
	            line: 280,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 280,
	            column: 13
	          },
	          end: {
	            line: 285,
	            column: 3
	          }
	        },
	        line: 280
	      },
	      '30': {
	        name: '(anonymous_30)',
	        decl: {
	          start: {
	            line: 287,
	            column: 2
	          },
	          end: {
	            line: 287,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 287,
	            column: 11
	          },
	          end: {
	            line: 289,
	            column: 3
	          }
	        },
	        line: 287
	      },
	      '31': {
	        name: '(anonymous_31)',
	        decl: {
	          start: {
	            line: 291,
	            column: 4
	          },
	          end: {
	            line: 291,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 291,
	            column: 14
	          },
	          end: {
	            line: 294,
	            column: 5
	          }
	        },
	        line: 291
	      },
	      '32': {
	        name: '(anonymous_32)',
	        decl: {
	          start: {
	            line: 296,
	            column: 4
	          },
	          end: {
	            line: 296,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 296,
	            column: 15
	          },
	          end: {
	            line: 299,
	            column: 5
	          }
	        },
	        line: 296
	      },
	      '33': {
	        name: '(anonymous_33)',
	        decl: {
	          start: {
	            line: 301,
	            column: 2
	          },
	          end: {
	            line: 301,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 301,
	            column: 33
	          },
	          end: {
	            line: 317,
	            column: 3
	          }
	        },
	        line: 301
	      },
	      '34': {
	        name: '(anonymous_34)',
	        decl: {
	          start: {
	            line: 319,
	            column: 2
	          },
	          end: {
	            line: 319,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 319,
	            column: 10
	          },
	          end: {
	            line: 321,
	            column: 3
	          }
	        },
	        line: 319
	      },
	      '35': {
	        name: '(anonymous_35)',
	        decl: {
	          start: {
	            line: 323,
	            column: 2
	          },
	          end: {
	            line: 323,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 323,
	            column: 18
	          },
	          end: {
	            line: 325,
	            column: 3
	          }
	        },
	        line: 323
	      },
	      '36': {
	        name: '(anonymous_36)',
	        decl: {
	          start: {
	            line: 327,
	            column: 2
	          },
	          end: {
	            line: 327,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 327,
	            column: 23
	          },
	          end: {
	            line: 329,
	            column: 3
	          }
	        },
	        line: 327
	      },
	      '37': {
	        name: '(anonymous_37)',
	        decl: {
	          start: {
	            line: 331,
	            column: 4
	          },
	          end: {
	            line: 331,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 331,
	            column: 25
	          },
	          end: {
	            line: 333,
	            column: 5
	          }
	        },
	        line: 331
	      },
	      '38': {
	        name: '(anonymous_38)',
	        decl: {
	          start: {
	            line: 335,
	            column: 4
	          },
	          end: {
	            line: 335,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 335,
	            column: 15
	          },
	          end: {
	            line: 338,
	            column: 5
	          }
	        },
	        line: 335
	      },
	      '39': {
	        name: '(anonymous_39)',
	        decl: {
	          start: {
	            line: 340,
	            column: 4
	          },
	          end: {
	            line: 340,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 340,
	            column: 19
	          },
	          end: {
	            line: 342,
	            column: 5
	          }
	        },
	        line: 340
	      },
	      '40': {
	        name: '(anonymous_40)',
	        decl: {
	          start: {
	            line: 347,
	            column: 29
	          },
	          end: {
	            line: 347,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 347,
	            column: 41
	          },
	          end: {
	            line: 349,
	            column: 1
	          }
	        },
	        line: 347
	      },
	      '41': {
	        name: '(anonymous_41)',
	        decl: {
	          start: {
	            line: 352,
	            column: 49
	          },
	          end: {
	            line: 352,
	            column: 50
	          }
	        },
	        loc: {
	          start: {
	            line: 352,
	            column: 67
	          },
	          end: {
	            line: 363,
	            column: 1
	          }
	        },
	        line: 352
	      },
	      '42': {
	        name: '(anonymous_42)',
	        decl: {
	          start: {
	            line: 364,
	            column: 53
	          },
	          end: {
	            line: 364,
	            column: 54
	          }
	        },
	        loc: {
	          start: {
	            line: 364,
	            column: 71
	          },
	          end: {
	            line: 371,
	            column: 1
	          }
	        },
	        line: 364
	      },
	      '43': {
	        name: '(anonymous_43)',
	        decl: {
	          start: {
	            line: 372,
	            column: 50
	          },
	          end: {
	            line: 372,
	            column: 51
	          }
	        },
	        loc: {
	          start: {
	            line: 372,
	            column: 74
	          },
	          end: {
	            line: 374,
	            column: 1
	          }
	        },
	        line: 372
	      },
	      '44': {
	        name: '(anonymous_44)',
	        decl: {
	          start: {
	            line: 375,
	            column: 45
	          },
	          end: {
	            line: 375,
	            column: 46
	          }
	        },
	        loc: {
	          start: {
	            line: 375,
	            column: 57
	          },
	          end: {
	            line: 375,
	            column: 59
	          }
	        },
	        line: 375
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 30,
	            column: 23
	          },
	          end: {
	            line: 30,
	            column: 33
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 30,
	            column: 31
	          },
	          end: {
	            line: 30,
	            column: 33
	          }
	        }],
	        line: 30
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 56,
	            column: 6
	          },
	          end: {
	            line: 65,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 56,
	            column: 6
	          },
	          end: {
	            line: 65,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 56,
	            column: 6
	          },
	          end: {
	            line: 65,
	            column: 7
	          }
	        }],
	        line: 56
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 69,
	            column: 10
	          },
	          end: {
	            line: 77,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 69,
	            column: 10
	          },
	          end: {
	            line: 77,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 69,
	            column: 10
	          },
	          end: {
	            line: 77,
	            column: 11
	          }
	        }],
	        line: 69
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 84,
	            column: 10
	          },
	          end: {
	            line: 91,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 84,
	            column: 10
	          },
	          end: {
	            line: 91,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 84,
	            column: 10
	          },
	          end: {
	            line: 91,
	            column: 11
	          }
	        }],
	        line: 84
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 110,
	            column: 4
	          },
	          end: {
	            line: 112,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 110,
	            column: 4
	          },
	          end: {
	            line: 112,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 110,
	            column: 4
	          },
	          end: {
	            line: 112,
	            column: 5
	          }
	        }],
	        line: 110
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 113,
	            column: 4
	          },
	          end: {
	            line: 115,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 113,
	            column: 4
	          },
	          end: {
	            line: 115,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 113,
	            column: 4
	          },
	          end: {
	            line: 115,
	            column: 5
	          }
	        }],
	        line: 113
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 124,
	            column: 4
	          },
	          end: {
	            line: 126,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 124,
	            column: 4
	          },
	          end: {
	            line: 126,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 124,
	            column: 4
	          },
	          end: {
	            line: 126,
	            column: 5
	          }
	        }],
	        line: 124
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 128,
	            column: 4
	          },
	          end: {
	            line: 146,
	            column: 5
	          }
	        },
	        type: 'switch',
	        locations: [{
	          start: {
	            line: 129,
	            column: 4
	          },
	          end: {
	            line: 131,
	            column: 12
	          }
	        }, {
	          start: {
	            line: 132,
	            column: 4
	          },
	          end: {
	            line: 136,
	            column: 12
	          }
	        }, {
	          start: {
	            line: 137,
	            column: 4
	          },
	          end: {
	            line: 140,
	            column: 12
	          }
	        }, {
	          start: {
	            line: 141,
	            column: 4
	          },
	          end: {
	            line: 145,
	            column: 12
	          }
	        }],
	        line: 128
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 152,
	            column: 4
	          },
	          end: {
	            line: 154,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 152,
	            column: 4
	          },
	          end: {
	            line: 154,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 152,
	            column: 4
	          },
	          end: {
	            line: 154,
	            column: 5
	          }
	        }],
	        line: 152
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 163,
	            column: 4
	          },
	          end: {
	            line: 165,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 163,
	            column: 4
	          },
	          end: {
	            line: 165,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 163,
	            column: 4
	          },
	          end: {
	            line: 165,
	            column: 5
	          }
	        }],
	        line: 163
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 169,
	            column: 6
	          },
	          end: {
	            line: 171,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 169,
	            column: 6
	          },
	          end: {
	            line: 171,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 169,
	            column: 6
	          },
	          end: {
	            line: 171,
	            column: 7
	          }
	        }],
	        line: 169
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 174,
	            column: 4
	          },
	          end: {
	            line: 177,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 174,
	            column: 4
	          },
	          end: {
	            line: 177,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 174,
	            column: 4
	          },
	          end: {
	            line: 177,
	            column: 5
	          }
	        }],
	        line: 174
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 174,
	            column: 8
	          },
	          end: {
	            line: 174,
	            column: 43
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 174,
	            column: 8
	          },
	          end: {
	            line: 174,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 174,
	            column: 27
	          },
	          end: {
	            line: 174,
	            column: 43
	          }
	        }],
	        line: 174
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 187,
	            column: 4
	          },
	          end: {
	            line: 189,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 187,
	            column: 4
	          },
	          end: {
	            line: 189,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 187,
	            column: 4
	          },
	          end: {
	            line: 189,
	            column: 5
	          }
	        }],
	        line: 187
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 194,
	            column: 6
	          },
	          end: {
	            line: 196,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 194,
	            column: 6
	          },
	          end: {
	            line: 196,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 194,
	            column: 6
	          },
	          end: {
	            line: 196,
	            column: 7
	          }
	        }],
	        line: 194
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 199,
	            column: 4
	          },
	          end: {
	            line: 202,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 199,
	            column: 4
	          },
	          end: {
	            line: 202,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 199,
	            column: 4
	          },
	          end: {
	            line: 202,
	            column: 5
	          }
	        }],
	        line: 199
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 199,
	            column: 8
	          },
	          end: {
	            line: 199,
	            column: 43
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 199,
	            column: 8
	          },
	          end: {
	            line: 199,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 199,
	            column: 27
	          },
	          end: {
	            line: 199,
	            column: 43
	          }
	        }],
	        line: 199
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 222,
	            column: 4
	          },
	          end: {
	            line: 224,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 222,
	            column: 4
	          },
	          end: {
	            line: 224,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 222,
	            column: 4
	          },
	          end: {
	            line: 224,
	            column: 5
	          }
	        }],
	        line: 222
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 225,
	            column: 4
	          },
	          end: {
	            line: 227,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 225,
	            column: 4
	          },
	          end: {
	            line: 227,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 225,
	            column: 4
	          },
	          end: {
	            line: 227,
	            column: 5
	          }
	        }],
	        line: 225
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 233,
	            column: 4
	          },
	          end: {
	            line: 235,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 233,
	            column: 4
	          },
	          end: {
	            line: 235,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 233,
	            column: 4
	          },
	          end: {
	            line: 235,
	            column: 5
	          }
	        }],
	        line: 233
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 237,
	            column: 4
	          },
	          end: {
	            line: 239,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 237,
	            column: 4
	          },
	          end: {
	            line: 239,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 237,
	            column: 4
	          },
	          end: {
	            line: 239,
	            column: 5
	          }
	        }],
	        line: 237
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 253,
	            column: 6
	          },
	          end: {
	            line: 255,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 253,
	            column: 6
	          },
	          end: {
	            line: 255,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 253,
	            column: 6
	          },
	          end: {
	            line: 255,
	            column: 7
	          }
	        }],
	        line: 253
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 261,
	            column: 4
	          },
	          end: {
	            line: 263,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 261,
	            column: 4
	          },
	          end: {
	            line: 263,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 261,
	            column: 4
	          },
	          end: {
	            line: 263,
	            column: 5
	          }
	        }],
	        line: 261
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 281,
	            column: 4
	          },
	          end: {
	            line: 283,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 281,
	            column: 4
	          },
	          end: {
	            line: 283,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 281,
	            column: 4
	          },
	          end: {
	            line: 283,
	            column: 5
	          }
	        }],
	        line: 281
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 301,
	            column: 19
	          },
	          end: {
	            line: 301,
	            column: 31
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 301,
	            column: 26
	          },
	          end: {
	            line: 301,
	            column: 31
	          }
	        }],
	        line: 301
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 305,
	            column: 4
	          },
	          end: {
	            line: 307,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 305,
	            column: 4
	          },
	          end: {
	            line: 307,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 305,
	            column: 4
	          },
	          end: {
	            line: 307,
	            column: 5
	          }
	        }],
	        line: 305
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 356,
	            column: 4
	          },
	          end: {
	            line: 362,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 356,
	            column: 4
	          },
	          end: {
	            line: 362,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 356,
	            column: 4
	          },
	          end: {
	            line: 362,
	            column: 5
	          }
	        }],
	        line: 356
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 358,
	            column: 11
	          },
	          end: {
	            line: 362,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 358,
	            column: 11
	          },
	          end: {
	            line: 362,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 358,
	            column: 11
	          },
	          end: {
	            line: 362,
	            column: 5
	          }
	        }],
	        line: 358
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 365,
	            column: 2
	          },
	          end: {
	            line: 369,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 365,
	            column: 2
	          },
	          end: {
	            line: 369,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 365,
	            column: 2
	          },
	          end: {
	            line: 369,
	            column: 3
	          }
	        }],
	        line: 365
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 367,
	            column: 9
	          },
	          end: {
	            line: 369,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 367,
	            column: 9
	          },
	          end: {
	            line: 369,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 367,
	            column: 9
	          },
	          end: {
	            line: 369,
	            column: 3
	          }
	        }],
	        line: 367
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 389,
	            column: 0
	          },
	          end: {
	            line: 391,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 389,
	            column: 0
	          },
	          end: {
	            line: 391,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 389,
	            column: 0
	          },
	          end: {
	            line: 391,
	            column: 1
	          }
	        }],
	        line: 389
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0,
	      '44': 0,
	      '45': 0,
	      '46': 0,
	      '47': 0,
	      '48': 0,
	      '49': 0,
	      '50': 0,
	      '51': 0,
	      '52': 0,
	      '53': 0,
	      '54': 0,
	      '55': 0,
	      '56': 0,
	      '57': 0,
	      '58': 0,
	      '59': 0,
	      '60': 0,
	      '61': 0,
	      '62': 0,
	      '63': 0,
	      '64': 0,
	      '65': 0,
	      '66': 0,
	      '67': 0,
	      '68': 0,
	      '69': 0,
	      '70': 0,
	      '71': 0,
	      '72': 0,
	      '73': 0,
	      '74': 0,
	      '75': 0,
	      '76': 0,
	      '77': 0,
	      '78': 0,
	      '79': 0,
	      '80': 0,
	      '81': 0,
	      '82': 0,
	      '83': 0,
	      '84': 0,
	      '85': 0,
	      '86': 0,
	      '87': 0,
	      '88': 0,
	      '89': 0,
	      '90': 0,
	      '91': 0,
	      '92': 0,
	      '93': 0,
	      '94': 0,
	      '95': 0,
	      '96': 0,
	      '97': 0,
	      '98': 0,
	      '99': 0,
	      '100': 0,
	      '101': 0,
	      '102': 0,
	      '103': 0,
	      '104': 0,
	      '105': 0,
	      '106': 0,
	      '107': 0,
	      '108': 0,
	      '109': 0,
	      '110': 0,
	      '111': 0,
	      '112': 0,
	      '113': 0,
	      '114': 0,
	      '115': 0,
	      '116': 0,
	      '117': 0,
	      '118': 0,
	      '119': 0,
	      '120': 0,
	      '121': 0,
	      '122': 0,
	      '123': 0,
	      '124': 0,
	      '125': 0,
	      '126': 0,
	      '127': 0,
	      '128': 0,
	      '129': 0,
	      '130': 0,
	      '131': 0,
	      '132': 0,
	      '133': 0,
	      '134': 0,
	      '135': 0,
	      '136': 0,
	      '137': 0,
	      '138': 0,
	      '139': 0,
	      '140': 0,
	      '141': 0,
	      '142': 0,
	      '143': 0,
	      '144': 0,
	      '145': 0,
	      '146': 0,
	      '147': 0,
	      '148': 0,
	      '149': 0,
	      '150': 0,
	      '151': 0,
	      '152': 0,
	      '153': 0,
	      '154': 0,
	      '155': 0,
	      '156': 0,
	      '157': 0,
	      '158': 0,
	      '159': 0,
	      '160': 0,
	      '161': 0,
	      '162': 0,
	      '163': 0,
	      '164': 0,
	      '165': 0,
	      '166': 0,
	      '167': 0,
	      '168': 0,
	      '169': 0,
	      '170': 0,
	      '171': 0,
	      '172': 0,
	      '173': 0,
	      '174': 0,
	      '175': 0,
	      '176': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0,
	      '44': 0
	    },
	    b: {
	      '0': [0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0, 0, 0],
	      '8': [0, 0],
	      '9': [0, 0],
	      '10': [0, 0],
	      '11': [0, 0],
	      '12': [0, 0],
	      '13': [0, 0],
	      '14': [0, 0],
	      '15': [0, 0],
	      '16': [0, 0],
	      '17': [0, 0],
	      '18': [0, 0],
	      '19': [0, 0],
	      '20': [0, 0],
	      '21': [0, 0],
	      '22': [0, 0],
	      '23': [0, 0],
	      '24': [0],
	      '25': [0, 0],
	      '26': [0, 0],
	      '27': [0, 0],
	      '28': [0, 0],
	      '29': [0, 0],
	      '30': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	var Component = (cov_2q58cqsssn.s[0]++, videojs.getComponent('Component'));
	var ControlBar = (cov_2q58cqsssn.s[1]++, videojs.getComponent('ControlBar'));
	var Button = (cov_2q58cqsssn.s[2]++, videojs.getComponent('Button'));
	var Tech = (cov_2q58cqsssn.s[3]++, videojs.getComponent('Tech'));
	var PLAYER_STATE = (cov_2q58cqsssn.s[4]++, {
	  IDLE: 'IDLE',
	  BUFFERING: 'BUFFERING',
	  LOADED: 'LOADED',
	  PLAYING: 'PLAYING',
	  PAUSED: 'PAUSED'
	});

	var ChromecastTech = /*#__PURE__*/function (_Tech) {
	  inheritsLoose(ChromecastTech, _Tech);

	  function ChromecastTech(options, ready) {
	    var _this;

	    if (ready === void 0) {
	      ready = (cov_2q58cqsssn.b[0][0]++, {});
	    }

	    cov_2q58cqsssn.f[0]++;
	    cov_2q58cqsssn.s[5]++;
	    _this = _Tech.call(this, options, ready) || this;
	    cov_2q58cqsssn.s[6]++;
	    _this.castBtn = _this.options_.source.cast_;
	    cov_2q58cqsssn.s[7]++;
	    _this.apiSession = _this.options_.source.apiSession;
	    cov_2q58cqsssn.s[8]++;
	    _this.receiver = _this.apiSession.getCastDevice().friendlyName;
	    cov_2q58cqsssn.s[9]++;
	    _this.castBtn.currentTech = assertThisInitialized(_this);
	    cov_2q58cqsssn.s[10]++;

	    _this.initializeUI();

	    cov_2q58cqsssn.s[11]++;

	    _this.initializeTracks();

	    cov_2q58cqsssn.s[12]++;

	    _this.update();

	    cov_2q58cqsssn.s[13]++;

	    _this.triggerReady();

	    return _this;
	  }

	  var _proto = ChromecastTech.prototype;

	  _proto.initializeUI = function initializeUI() {
	    var _this2 = this;

	    cov_2q58cqsssn.f[1]++;
	    cov_2q58cqsssn.s[14]++;
	    this.on('dispose', function () {
	      cov_2q58cqsssn.f[2]++;
	      cov_2q58cqsssn.s[15]++;
	      console.log("dispose triggered");
	      cov_2q58cqsssn.s[16]++;

	      _this2.onMediaStatusUpdate();

	      cov_2q58cqsssn.s[17]++;

	      _this2.onSessionUpdate(false);
	    });
	  };

	  _proto.initializeTracks = function initializeTracks() {
	    cov_2q58cqsssn.f[3]++;
	    var tracks = (cov_2q58cqsssn.s[18]++, this.textTracks());
	    cov_2q58cqsssn.s[19]++;

	    if (tracks) {
	      cov_2q58cqsssn.b[1][0]++;
	      var changeHandler = (cov_2q58cqsssn.s[20]++, this.handleTextTracksChange.bind(this));
	      cov_2q58cqsssn.s[21]++;
	      tracks.addEventListener('change', changeHandler);
	      cov_2q58cqsssn.s[22]++;
	      this.on('dispose', function () {
	        cov_2q58cqsssn.f[4]++;
	        cov_2q58cqsssn.s[23]++;
	        tracks.removeEventListener('change', changeHandler);
	      });
	      cov_2q58cqsssn.s[24]++;
	      this.handleTextTracksChange();
	    } else {
	      cov_2q58cqsssn.b[1][1]++;
	    }

	    cov_2q58cqsssn.s[25]++;

	    try {
	      cov_2q58cqsssn.s[26]++;
	      tracks = this.audioTracks();
	      cov_2q58cqsssn.s[27]++;

	      if (tracks) {
	        cov_2q58cqsssn.b[2][0]++;

	        var _changeHandler = (cov_2q58cqsssn.s[28]++, this.handleAudioTracksChange.bind(this));

	        cov_2q58cqsssn.s[29]++;
	        tracks.addEventListener('change', _changeHandler);
	        cov_2q58cqsssn.s[30]++;
	        this.on('dispose', function () {
	          cov_2q58cqsssn.f[5]++;
	          cov_2q58cqsssn.s[31]++;
	          tracks.removeEventListener('change', _changeHandler);
	        });
	      } else {
	        cov_2q58cqsssn.b[2][1]++;
	      }
	    } catch (e) {
	      cov_2q58cqsssn.s[32]++;
	      videojs.log('get player audioTracks fail' + e);
	    }

	    cov_2q58cqsssn.s[33]++;

	    try {
	      cov_2q58cqsssn.s[34]++;
	      tracks = this.videoTracks();
	      cov_2q58cqsssn.s[35]++;

	      if (tracks) {
	        cov_2q58cqsssn.b[3][0]++;

	        var _changeHandler2 = (cov_2q58cqsssn.s[36]++, this.handleVideoTracksChange.bind(this));

	        cov_2q58cqsssn.s[37]++;
	        tracks.addEventListener('change', _changeHandler2);
	        cov_2q58cqsssn.s[38]++;
	        this.on('dispose', function () {
	          cov_2q58cqsssn.f[6]++;
	          cov_2q58cqsssn.s[39]++;
	          tracks.removeEventListener('change', _changeHandler2);
	        });
	      } else {
	        cov_2q58cqsssn.b[3][1]++;
	      }
	    } catch (e) {
	      cov_2q58cqsssn.s[40]++;
	      videojs.log('get player videoTracks fail' + e);
	    }
	  };

	  _proto.createEl = function createEl() {
	    cov_2q58cqsssn.f[7]++;
	    var el = (cov_2q58cqsssn.s[41]++, videojs.dom.createEl('div', {
	      id: this.options_.techId,
	      className: 'vjs-tech vjs-tech-chromecast'
	    }));
	    cov_2q58cqsssn.s[42]++;
	    return el;
	  };

	  _proto.update = function update() {
	    cov_2q58cqsssn.f[8]++;
	    cov_2q58cqsssn.s[43]++;
	    this.el_.innerHTML = "<div class=\"casting-image\" style=\"background-image: url('" + this.options_.poster + "')\"></div><div class=\"casting-overlay\"><div class=\"casting-information\"><div class=\"casting-icon\"></div><div class=\"casting-description\"><small>" + this.localize('CASTING TO') + "</small><br>" + this.receiver + "</div></div></div>";
	  };

	  _proto.onSessionUpdate = function onSessionUpdate(isAlive) {
	    cov_2q58cqsssn.f[9]++;
	    cov_2q58cqsssn.s[44]++;

	    if (!this.apiSession) {
	      cov_2q58cqsssn.b[4][0]++;
	      cov_2q58cqsssn.s[45]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[4][1]++;
	    }

	    cov_2q58cqsssn.s[46]++;

	    if (!isAlive) {
	      cov_2q58cqsssn.b[5][0]++;
	      cov_2q58cqsssn.s[47]++;
	      return this.onStopAppSuccess();
	    } else {
	      cov_2q58cqsssn.b[5][1]++;
	    }
	  };

	  _proto.onStopAppSuccess = function onStopAppSuccess() {
	    cov_2q58cqsssn.f[10]++;
	    cov_2q58cqsssn.s[48]++;
	    this.stopTrackingCurrentTime();
	    cov_2q58cqsssn.s[49]++;
	    this.apiSession = null;
	  };

	  _proto.onMediaStatusUpdate = function onMediaStatusUpdate() {
	    cov_2q58cqsssn.f[11]++;
	    cov_2q58cqsssn.s[50]++;

	    if (!this.apiSession) {
	      cov_2q58cqsssn.b[6][0]++;
	      cov_2q58cqsssn.s[51]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[6][1]++;
	    }

	    cov_2q58cqsssn.s[52]++;

	    switch (this.castBtn.playerState) {
	      case PLAYER_STATE.BUFFERING:
	        cov_2q58cqsssn.b[7][0]++;
	        cov_2q58cqsssn.s[53]++;
	        this.trigger('waiting');
	        cov_2q58cqsssn.s[54]++;
	        break;

	      case PLAYER_STATE.IDLE:
	        cov_2q58cqsssn.b[7][1]++;
	        cov_2q58cqsssn.s[55]++;
	        this.trigger('timeupdate');
	        cov_2q58cqsssn.s[56]++;
	        this.trigger('ended');
	        cov_2q58cqsssn.s[57]++;
	        break;

	      case PLAYER_STATE.PAUSED:
	        cov_2q58cqsssn.b[7][2]++;
	        cov_2q58cqsssn.s[58]++;
	        this.trigger('pause');
	        cov_2q58cqsssn.s[59]++;
	        this.paused_ = true;
	        cov_2q58cqsssn.s[60]++;
	        break;

	      case PLAYER_STATE.PLAYING:
	        cov_2q58cqsssn.b[7][3]++;
	        cov_2q58cqsssn.s[61]++;
	        this.trigger('playing');
	        cov_2q58cqsssn.s[62]++;
	        this.trigger('play');
	        cov_2q58cqsssn.s[63]++;
	        this.paused_ = false;
	        cov_2q58cqsssn.s[64]++;
	        break;
	    }
	  };

	  _proto.src = function src(_src) {
	    cov_2q58cqsssn.f[12]++;
	  };

	  _proto.currentSrc = function currentSrc() {
	    cov_2q58cqsssn.f[13]++;
	    cov_2q58cqsssn.s[65]++;

	    if (!this.apiSession) {
	      cov_2q58cqsssn.b[8][0]++;
	      cov_2q58cqsssn.s[66]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[8][1]++;
	    }

	    cov_2q58cqsssn.s[67]++;
	    return this.castBtn.sources.src;
	  };

	  _proto.handleAudioTracksChange = function handleAudioTracksChange() {
	    cov_2q58cqsssn.f[14]++;
	    var trackInfo = (cov_2q58cqsssn.s[68]++, []);
	    var tTracks = (cov_2q58cqsssn.s[69]++, this.textTracks());
	    var tracks = (cov_2q58cqsssn.s[70]++, this.audioTracks());
	    cov_2q58cqsssn.s[71]++;

	    if (!tracks) {
	      cov_2q58cqsssn.b[9][0]++;
	      cov_2q58cqsssn.s[72]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[9][1]++;
	    }

	    cov_2q58cqsssn.s[73]++;

	    for (var i = 0; i < tracks.length; i++) {
	      var track = (cov_2q58cqsssn.s[74]++, tracks[i]);
	      cov_2q58cqsssn.s[75]++;

	      if (track.enabled) {
	        cov_2q58cqsssn.b[10][0]++;
	        cov_2q58cqsssn.s[76]++;
	        trackInfo.push(i + 1 + tTracks.length);
	      } else {
	        cov_2q58cqsssn.b[10][1]++;
	      }
	    }

	    cov_2q58cqsssn.s[77]++;

	    if ((cov_2q58cqsssn.b[12][0]++, this.apiSession) && (cov_2q58cqsssn.b[12][1]++, trackInfo.length)) {
	      cov_2q58cqsssn.b[11][0]++;
	      cov_2q58cqsssn.s[78]++;
	      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
	      cov_2q58cqsssn.s[79]++;
	      console.log('tracks are changing in remote');
	    } else {
	      cov_2q58cqsssn.b[11][1]++;
	    }
	  };

	  _proto.handleVideoTracksChange = function handleVideoTracksChange() {
	    cov_2q58cqsssn.f[15]++;
	  };

	  _proto.handleTextTracksChange = function handleTextTracksChange() {
	    cov_2q58cqsssn.f[16]++;
	    var trackInfo = (cov_2q58cqsssn.s[80]++, []);
	    var tracks = (cov_2q58cqsssn.s[81]++, this.textTracks());
	    cov_2q58cqsssn.s[82]++;

	    if (!tracks) {
	      cov_2q58cqsssn.b[13][0]++;
	      cov_2q58cqsssn.s[83]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[13][1]++;
	    }

	    cov_2q58cqsssn.s[84]++;

	    for (var i = 0; i < tracks.length; i++) {
	      var track = (cov_2q58cqsssn.s[85]++, tracks[i]);
	      cov_2q58cqsssn.s[86]++;

	      if (track.mode === 'showing') {
	        cov_2q58cqsssn.b[14][0]++;
	        cov_2q58cqsssn.s[87]++;
	        trackInfo.push(i + 1);
	      } else {
	        cov_2q58cqsssn.b[14][1]++;
	      }
	    }

	    cov_2q58cqsssn.s[88]++;

	    if ((cov_2q58cqsssn.b[16][0]++, this.apiSession) && (cov_2q58cqsssn.b[16][1]++, trackInfo.length)) {
	      cov_2q58cqsssn.b[15][0]++;
	      cov_2q58cqsssn.s[89]++;
	      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
	      cov_2q58cqsssn.s[90]++;
	      console.log("tracks are requested in remote");
	    } else {
	      cov_2q58cqsssn.b[15][1]++;
	    }
	  };

	  _proto.onTrackSuccess = function onTrackSuccess() {
	    cov_2q58cqsssn.f[17]++;
	    cov_2q58cqsssn.s[91]++;
	    return videojs.log('track added');
	  };

	  _proto.onTrackError = function onTrackError(e) {
	    cov_2q58cqsssn.f[18]++;
	    cov_2q58cqsssn.s[92]++;
	    return videojs.log('Cast track Error: ' + JSON.stringify(e));
	  };

	  _proto.castError = function castError(e) {
	    cov_2q58cqsssn.f[19]++;
	    cov_2q58cqsssn.s[93]++;
	    return videojs.log('Cast Error: ' + JSON.stringify(e));
	  };

	  _proto.controls = function controls() {
	    cov_2q58cqsssn.f[20]++;
	    cov_2q58cqsssn.s[94]++;
	    return false;
	  };

	  _proto.play = function play() {
	    cov_2q58cqsssn.f[21]++;
	    cov_2q58cqsssn.s[95]++;

	    if (!this.apiSession) {
	      cov_2q58cqsssn.b[17][0]++;
	      cov_2q58cqsssn.s[96]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[17][1]++;
	    }

	    cov_2q58cqsssn.s[97]++;

	    if (this.paused_) {
	      cov_2q58cqsssn.b[18][0]++;
	      cov_2q58cqsssn.s[98]++;
	      this.castBtn.playerHandler.play();
	    } else {
	      cov_2q58cqsssn.b[18][1]++;
	    }

	    cov_2q58cqsssn.s[99]++;
	    return this.paused_ = false;
	  };

	  _proto.pause = function pause() {
	    cov_2q58cqsssn.f[22]++;
	    cov_2q58cqsssn.s[100]++;

	    if (!this.apiSession) {
	      cov_2q58cqsssn.b[19][0]++;
	      cov_2q58cqsssn.s[101]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[19][1]++;
	    }

	    cov_2q58cqsssn.s[102]++;

	    if (!this.paused_) {
	      cov_2q58cqsssn.b[20][0]++;
	      cov_2q58cqsssn.s[103]++;
	      this.castBtn.playerHandler.pause();
	    } else {
	      cov_2q58cqsssn.b[20][1]++;
	    }

	    cov_2q58cqsssn.s[104]++;
	    return this.paused_ = true;
	  };

	  _proto.paused = function paused() {
	    cov_2q58cqsssn.f[23]++;
	    cov_2q58cqsssn.s[105]++;
	    return this.paused_;
	  };

	  _proto.ended = function ended() {
	    cov_2q58cqsssn.f[24]++;
	    cov_2q58cqsssn.s[106]++;
	    return chrome.cast.media.IdleReason === "FINISHED";
	  };

	  _proto.currentTime = function currentTime() {
	    cov_2q58cqsssn.f[25]++;
	    cov_2q58cqsssn.s[107]++;

	    if (!this.apiSession) {
	      cov_2q58cqsssn.b[21][0]++;
	      cov_2q58cqsssn.s[108]++;
	      return 0;
	    } else {
	      cov_2q58cqsssn.b[21][1]++;
	    }

	    cov_2q58cqsssn.s[109]++;
	    return this.castBtn.remotePlayer.currentTime;
	  };

	  _proto.setCurrentTime = function setCurrentTime(position) {
	    cov_2q58cqsssn.f[26]++;
	    var time = (cov_2q58cqsssn.s[110]++, 0);
	    cov_2q58cqsssn.s[111]++;

	    if (!this.apiSession) {
	      cov_2q58cqsssn.b[22][0]++;
	      cov_2q58cqsssn.s[112]++;
	      return time;
	    } else {
	      cov_2q58cqsssn.b[22][1]++;
	    }

	    cov_2q58cqsssn.s[113]++;
	    time = position;
	    cov_2q58cqsssn.s[114]++;
	    this.castBtn.remotePlayer.currentTime = time;
	    cov_2q58cqsssn.s[115]++;
	    this.castBtn.remotePlayerController.seek();
	    cov_2q58cqsssn.s[116]++;
	    return time;
	  };

	  _proto.volume = function volume() {
	    cov_2q58cqsssn.f[27]++;
	    cov_2q58cqsssn.s[117]++;
	    return this.volume_;
	  };

	  _proto.buffered = function buffered() {
	    cov_2q58cqsssn.f[28]++;
	  };

	  _proto.duration = function duration() {
	    cov_2q58cqsssn.f[29]++;
	    cov_2q58cqsssn.s[118]++;

	    if (!this.apiSession) {
	      cov_2q58cqsssn.b[23][0]++;
	      cov_2q58cqsssn.s[119]++;
	      return 0;
	    } else {
	      cov_2q58cqsssn.b[23][1]++;
	    }

	    cov_2q58cqsssn.s[120]++;
	    return this.castBtn.player_.duration();
	  };

	  _proto.seeked = function seeked() {
	    cov_2q58cqsssn.f[30]++;
	    cov_2q58cqsssn.s[121]++;
	    console.log("has seekd");
	  };

	  _proto.seeking = function seeking() {
	    cov_2q58cqsssn.f[31]++;
	    cov_2q58cqsssn.s[122]++;
	    console.log('is seeking');
	    cov_2q58cqsssn.s[123]++;
	    return true;
	  };

	  _proto.seekable = function seekable() {
	    cov_2q58cqsssn.f[32]++;
	    cov_2q58cqsssn.s[124]++;
	    console.log('is seekable');
	    cov_2q58cqsssn.s[125]++;
	    return true;
	  };

	  _proto.setVolume = function setVolume(level, mute) {
	    if (mute === void 0) {
	      mute = (cov_2q58cqsssn.b[24][0]++, false);
	    }

	    cov_2q58cqsssn.f[33]++;
	    var request;
	    var volume;
	    cov_2q58cqsssn.s[126]++;

	    if (!this.apiSession) {
	      cov_2q58cqsssn.b[25][0]++;
	      cov_2q58cqsssn.s[127]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[25][1]++;
	    }

	    cov_2q58cqsssn.s[128]++;
	    volume = new chrome.cast.Volume();
	    cov_2q58cqsssn.s[129]++;
	    volume.level = level;
	    cov_2q58cqsssn.s[130]++;
	    volume.muted = mute;
	    cov_2q58cqsssn.s[131]++;
	    this.volume_ = volume.level;
	    cov_2q58cqsssn.s[132]++;
	    this.muted_ = mute;
	    cov_2q58cqsssn.s[133]++;
	    request = new chrome.cast.media.VolumeRequest();
	    cov_2q58cqsssn.s[134]++;
	    request.volume = volume;
	    cov_2q58cqsssn.s[135]++;
	    return this.trigger('volumechange');
	  };

	  _proto.muted = function muted() {
	    cov_2q58cqsssn.f[34]++;
	    cov_2q58cqsssn.s[136]++;
	    return this.muted_;
	  };

	  _proto.setMuted = function setMuted(muted) {
	    cov_2q58cqsssn.f[35]++;
	    cov_2q58cqsssn.s[137]++;
	    return this.setVolume(this.volume_, muted);
	  };

	  _proto.supportsFullScreen = function supportsFullScreen() {
	    cov_2q58cqsssn.f[36]++;
	    cov_2q58cqsssn.s[138]++;
	    return false;
	  };

	  _proto.resetSrc_ = function resetSrc_(callback) {
	    cov_2q58cqsssn.f[37]++;
	    cov_2q58cqsssn.s[139]++;
	    callback();
	  };

	  _proto.dispose = function dispose() {
	    cov_2q58cqsssn.f[38]++;
	    cov_2q58cqsssn.s[140]++;

	    _Tech.prototype.dispose.call(this, this);
	  };

	  _proto.playbackRate = function playbackRate() {
	    cov_2q58cqsssn.f[39]++;
	    cov_2q58cqsssn.s[141]++;
	    return 1;
	  };

	  return ChromecastTech;
	}(Tech);

	cov_2q58cqsssn.s[142]++;
	ChromecastTech.prototype.paused_ = false;
	cov_2q58cqsssn.s[143]++;
	ChromecastTech.prototype.options_ = {};
	cov_2q58cqsssn.s[144]++;

	ChromecastTech.isSupported = function () {
	  cov_2q58cqsssn.f[40]++;
	  cov_2q58cqsssn.s[145]++;
	  return true;
	};

	cov_2q58cqsssn.s[146]++;
	Tech.withSourceHandlers(ChromecastTech);
	cov_2q58cqsssn.s[147]++;
	ChromecastTech.nativeSourceHandler = {};
	cov_2q58cqsssn.s[148]++;

	ChromecastTech.nativeSourceHandler.canPlayType = function (source) {
	  cov_2q58cqsssn.f[41]++;
	  var dashTypeRE = (cov_2q58cqsssn.s[149]++, /^application\/(?:dash\+xml|(x-|vnd\.apple\.)mpegurl)/i);
	  var dashExtRE = (cov_2q58cqsssn.s[150]++, /^video\/(mpd|mp4|webm|m3u8)/i);
	  cov_2q58cqsssn.s[151]++;

	  if (dashTypeRE.test(source)) {
	    cov_2q58cqsssn.b[26][0]++;
	    cov_2q58cqsssn.s[152]++;
	    return 'probably';
	  } else {
	    cov_2q58cqsssn.b[26][1]++;
	    cov_2q58cqsssn.s[153]++;

	    if (dashExtRE.test(source)) {
	      cov_2q58cqsssn.b[27][0]++;
	      cov_2q58cqsssn.s[154]++;
	      return 'maybe';
	    } else {
	      cov_2q58cqsssn.b[27][1]++;
	      cov_2q58cqsssn.s[155]++;
	      return '';
	    }
	  }
	};

	cov_2q58cqsssn.s[156]++;

	ChromecastTech.nativeSourceHandler.canHandleSource = function (source) {
	  cov_2q58cqsssn.f[42]++;
	  cov_2q58cqsssn.s[157]++;

	  if (source.type) {
	    cov_2q58cqsssn.b[28][0]++;
	    cov_2q58cqsssn.s[158]++;
	    return ChromecastTech.nativeSourceHandler.canPlayType(source.type);
	  } else {
	    cov_2q58cqsssn.b[28][1]++;
	    cov_2q58cqsssn.s[159]++;

	    if (source.src) {
	      cov_2q58cqsssn.b[29][0]++;
	      cov_2q58cqsssn.s[160]++;
	      return ChromecastTech.nativeSourceHandler.canPlayType(source.src);
	    } else {
	      cov_2q58cqsssn.b[29][1]++;
	    }
	  }

	  cov_2q58cqsssn.s[161]++;
	  return '';
	};

	cov_2q58cqsssn.s[162]++;

	ChromecastTech.nativeSourceHandler.handleSource = function (source, tech) {
	  cov_2q58cqsssn.f[43]++;
	  cov_2q58cqsssn.s[163]++;
	  tech.src(source.src);
	};

	cov_2q58cqsssn.s[164]++;

	ChromecastTech.nativeSourceHandler.dispose = function () {
	  cov_2q58cqsssn.f[44]++;
	};

	cov_2q58cqsssn.s[165]++;
	ChromecastTech.registerSourceHandler(ChromecastTech.nativeSourceHandler);
	cov_2q58cqsssn.s[166]++;
	ChromecastTech.prototype.featuresVolumeControl = true;
	cov_2q58cqsssn.s[167]++;
	ChromecastTech.prototype.featuresPlaybackRate = true;
	cov_2q58cqsssn.s[168]++;
	ChromecastTech.prototype.movingMediaElementInDOM = true;
	cov_2q58cqsssn.s[169]++;
	ChromecastTech.prototype.featuresTimeupdateEvents = true;
	cov_2q58cqsssn.s[170]++;
	ChromecastTech.prototype.featuresProgressEvents = true;
	cov_2q58cqsssn.s[171]++;
	ChromecastTech.prototype.featuresNativeTextTracks = true;
	cov_2q58cqsssn.s[172]++;
	ChromecastTech.prototype.featuresNativeAudioTracks = true;
	cov_2q58cqsssn.s[173]++;
	ChromecastTech.prototype.featuresNativeVideoTracks = true;
	cov_2q58cqsssn.s[174]++;
	videojs.options.chromecast = {};
	cov_2q58cqsssn.s[175]++;

	if (typeof Tech.getTech('ChromecastTech') === 'undefined') {
	  cov_2q58cqsssn.b[30][0]++;
	  cov_2q58cqsssn.s[176]++;
	  Tech.registerTech('ChromecastTech', ChromecastTech);
	} else {
	  cov_2q58cqsssn.b[30][1]++;
	}

	var cov_1iiyehkoov = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/component/control-bar/chromecast-button.js',
	      hash = 'a42061921fb831a281c06c60aa448607fe3f8c37',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/component/control-bar/chromecast-button.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 4,
	          column: 16
	        },
	        end: {
	          line: 4,
	          column: 49
	        }
	      },
	      '1': {
	        start: {
	          line: 5,
	          column: 17
	        },
	        end: {
	          line: 5,
	          column: 51
	        }
	      },
	      '2': {
	        start: {
	          line: 6,
	          column: 13
	        },
	        end: {
	          line: 6,
	          column: 43
	        }
	      },
	      '3': {
	        start: {
	          line: 7,
	          column: 11
	        },
	        end: {
	          line: 7,
	          column: 39
	        }
	      },
	      '4': {
	        start: {
	          line: 9,
	          column: 23
	        },
	        end: {
	          line: 9,
	          column: 26
	        }
	      },
	      '5': {
	        start: {
	          line: 10,
	          column: 27
	        },
	        end: {
	          line: 10,
	          column: 30
	        }
	      },
	      '6': {
	        start: {
	          line: 12,
	          column: 21
	        },
	        end: {
	          line: 23,
	          column: 1
	        }
	      },
	      '7': {
	        start: {
	          line: 25,
	          column: 18
	        },
	        end: {
	          line: 25,
	          column: 23
	        }
	      },
	      '8': {
	        start: {
	          line: 29,
	          column: 4
	        },
	        end: {
	          line: 29,
	          column: 27
	        }
	      },
	      '9': {
	        start: {
	          line: 31,
	          column: 4
	        },
	        end: {
	          line: 31,
	          column: 22
	        }
	      },
	      '10': {
	        start: {
	          line: 32,
	          column: 4
	        },
	        end: {
	          line: 32,
	          column: 25
	        }
	      },
	      '11': {
	        start: {
	          line: 33,
	          column: 4
	        },
	        end: {
	          line: 33,
	          column: 27
	        }
	      },
	      '12': {
	        start: {
	          line: 34,
	          column: 4
	        },
	        end: {
	          line: 34,
	          column: 25
	        }
	      },
	      '13': {
	        start: {
	          line: 35,
	          column: 4
	        },
	        end: {
	          line: 35,
	          column: 27
	        }
	      },
	      '14': {
	        start: {
	          line: 36,
	          column: 4
	        },
	        end: {
	          line: 36,
	          column: 29
	        }
	      },
	      '15': {
	        start: {
	          line: 38,
	          column: 4
	        },
	        end: {
	          line: 38,
	          column: 22
	        }
	      },
	      '16': {
	        start: {
	          line: 39,
	          column: 4
	        },
	        end: {
	          line: 39,
	          column: 30
	        }
	      },
	      '17': {
	        start: {
	          line: 40,
	          column: 4
	        },
	        end: {
	          line: 43,
	          column: 5
	        }
	      },
	      '18': {
	        start: {
	          line: 41,
	          column: 8
	        },
	        end: {
	          line: 41,
	          column: 25
	        }
	      },
	      '19': {
	        start: {
	          line: 42,
	          column: 8
	        },
	        end: {
	          line: 42,
	          column: 28
	        }
	      },
	      '20': {
	        start: {
	          line: 45,
	          column: 4
	        },
	        end: {
	          line: 45,
	          column: 16
	        }
	      },
	      '21': {
	        start: {
	          line: 47,
	          column: 4
	        },
	        end: {
	          line: 47,
	          column: 33
	        }
	      },
	      '22': {
	        start: {
	          line: 48,
	          column: 4
	        },
	        end: {
	          line: 48,
	          column: 41
	        }
	      },
	      '23': {
	        start: {
	          line: 49,
	          column: 4
	        },
	        end: {
	          line: 49,
	          column: 40
	        }
	      },
	      '24': {
	        start: {
	          line: 51,
	          column: 4
	        },
	        end: {
	          line: 51,
	          column: 29
	        }
	      },
	      '25': {
	        start: {
	          line: 52,
	          column: 4
	        },
	        end: {
	          line: 52,
	          column: 39
	        }
	      },
	      '26': {
	        start: {
	          line: 54,
	          column: 4
	        },
	        end: {
	          line: 54,
	          column: 30
	        }
	      },
	      '27': {
	        start: {
	          line: 55,
	          column: 4
	        },
	        end: {
	          line: 55,
	          column: 28
	        }
	      },
	      '28': {
	        start: {
	          line: 57,
	          column: 4
	        },
	        end: {
	          line: 57,
	          column: 72
	        }
	      },
	      '29': {
	        start: {
	          line: 59,
	          column: 4
	        },
	        end: {
	          line: 59,
	          column: 26
	        }
	      },
	      '30': {
	        start: {
	          line: 61,
	          column: 4
	        },
	        end: {
	          line: 61,
	          column: 28
	        }
	      },
	      '31': {
	        start: {
	          line: 62,
	          column: 4
	        },
	        end: {
	          line: 62,
	          column: 26
	        }
	      },
	      '32': {
	        start: {
	          line: 63,
	          column: 4
	        },
	        end: {
	          line: 63,
	          column: 30
	        }
	      },
	      '33': {
	        start: {
	          line: 68,
	          column: 6
	        },
	        end: {
	          line: 71,
	          column: 7
	        }
	      },
	      '34': {
	        start: {
	          line: 69,
	          column: 10
	        },
	        end: {
	          line: 69,
	          column: 41
	        }
	      },
	      '35': {
	        start: {
	          line: 70,
	          column: 10
	        },
	        end: {
	          line: 70,
	          column: 17
	        }
	      },
	      '36': {
	        start: {
	          line: 73,
	          column: 18
	        },
	        end: {
	          line: 73,
	          column: 22
	        }
	      },
	      '37': {
	        start: {
	          line: 74,
	          column: 20
	        },
	        end: {
	          line: 74,
	          column: 33
	        }
	      },
	      '38': {
	        start: {
	          line: 76,
	          column: 6
	        },
	        end: {
	          line: 80,
	          column: 7
	        }
	      },
	      '39': {
	        start: {
	          line: 77,
	          column: 8
	        },
	        end: {
	          line: 77,
	          column: 35
	        }
	      },
	      '40': {
	        start: {
	          line: 78,
	          column: 13
	        },
	        end: {
	          line: 80,
	          column: 7
	        }
	      },
	      '41': {
	        start: {
	          line: 79,
	          column: 8
	        },
	        end: {
	          line: 79,
	          column: 69
	        }
	      },
	      '42': {
	        start: {
	          line: 82,
	          column: 6
	        },
	        end: {
	          line: 86,
	          column: 7
	        }
	      },
	      '43': {
	        start: {
	          line: 83,
	          column: 10
	        },
	        end: {
	          line: 83,
	          column: 55
	        }
	      },
	      '44': {
	        start: {
	          line: 84,
	          column: 13
	        },
	        end: {
	          line: 86,
	          column: 7
	        }
	      },
	      '45': {
	        start: {
	          line: 85,
	          column: 10
	        },
	        end: {
	          line: 85,
	          column: 71
	        }
	      },
	      '46': {
	        start: {
	          line: 88,
	          column: 6
	        },
	        end: {
	          line: 91,
	          column: 9
	        }
	      },
	      '47': {
	        start: {
	          line: 93,
	          column: 6
	        },
	        end: {
	          line: 105,
	          column: 7
	        }
	      },
	      '48': {
	        start: {
	          line: 94,
	          column: 30
	        },
	        end: {
	          line: 94,
	          column: 55
	        }
	      },
	      '49': {
	        start: {
	          line: 95,
	          column: 25
	        },
	        end: {
	          line: 95,
	          column: 44
	        }
	      },
	      '50': {
	        start: {
	          line: 96,
	          column: 10
	        },
	        end: {
	          line: 96,
	          column: 31
	        }
	      },
	      '51': {
	        start: {
	          line: 97,
	          column: 10
	        },
	        end: {
	          line: 97,
	          column: 27
	        }
	      },
	      '52': {
	        start: {
	          line: 98,
	          column: 10
	        },
	        end: {
	          line: 98,
	          column: 36
	        }
	      },
	      '53': {
	        start: {
	          line: 99,
	          column: 10
	        },
	        end: {
	          line: 104,
	          column: 13
	        }
	      },
	      '54': {
	        start: {
	          line: 100,
	          column: 14
	        },
	        end: {
	          line: 103,
	          column: 15
	        }
	      },
	      '55': {
	        start: {
	          line: 101,
	          column: 18
	        },
	        end: {
	          line: 101,
	          column: 47
	        }
	      },
	      '56': {
	        start: {
	          line: 102,
	          column: 18
	        },
	        end: {
	          line: 102,
	          column: 31
	        }
	      },
	      '57': {
	        start: {
	          line: 107,
	          column: 6
	        },
	        end: {
	          line: 107,
	          column: 60
	        }
	      },
	      '58': {
	        start: {
	          line: 108,
	          column: 6
	        },
	        end: {
	          line: 108,
	          column: 97
	        }
	      },
	      '59': {
	        start: {
	          line: 109,
	          column: 6
	        },
	        end: {
	          line: 114,
	          column: 8
	        }
	      },
	      '60': {
	        start: {
	          line: 112,
	          column: 12
	        },
	        end: {
	          line: 112,
	          column: 39
	        }
	      },
	      '61': {
	        start: {
	          line: 115,
	          column: 6
	        },
	        end: {
	          line: 115,
	          column: 33
	        }
	      },
	      '62': {
	        start: {
	          line: 119,
	          column: 4
	        },
	        end: {
	          line: 119,
	          column: 28
	        }
	      },
	      '63': {
	        start: {
	          line: 120,
	          column: 4
	        },
	        end: {
	          line: 120,
	          column: 35
	        }
	      },
	      '64': {
	        start: {
	          line: 122,
	          column: 4
	        },
	        end: {
	          line: 124,
	          column: 6
	        }
	      },
	      '65': {
	        start: {
	          line: 123,
	          column: 8
	        },
	        end: {
	          line: 123,
	          column: 44
	        }
	      },
	      '66': {
	        start: {
	          line: 126,
	          column: 4
	        },
	        end: {
	          line: 134,
	          column: 6
	        }
	      },
	      '67': {
	        start: {
	          line: 127,
	          column: 8
	        },
	        end: {
	          line: 130,
	          column: 9
	        }
	      },
	      '68': {
	        start: {
	          line: 128,
	          column: 12
	        },
	        end: {
	          line: 128,
	          column: 39
	        }
	      },
	      '69': {
	        start: {
	          line: 129,
	          column: 12
	        },
	        end: {
	          line: 129,
	          column: 19
	        }
	      },
	      '70': {
	        start: {
	          line: 132,
	          column: 8
	        },
	        end: {
	          line: 132,
	          column: 49
	        }
	      },
	      '71': {
	        start: {
	          line: 133,
	          column: 8
	        },
	        end: {
	          line: 133,
	          column: 42
	        }
	      },
	      '72': {
	        start: {
	          line: 136,
	          column: 4
	        },
	        end: {
	          line: 139,
	          column: 6
	        }
	      },
	      '73': {
	        start: {
	          line: 137,
	          column: 8
	        },
	        end: {
	          line: 137,
	          column: 48
	        }
	      },
	      '74': {
	        start: {
	          line: 138,
	          column: 8
	        },
	        end: {
	          line: 138,
	          column: 43
	        }
	      },
	      '75': {
	        start: {
	          line: 141,
	          column: 4
	        },
	        end: {
	          line: 144,
	          column: 6
	        }
	      },
	      '76': {
	        start: {
	          line: 142,
	          column: 8
	        },
	        end: {
	          line: 142,
	          column: 46
	        }
	      },
	      '77': {
	        start: {
	          line: 143,
	          column: 8
	        },
	        end: {
	          line: 143,
	          column: 42
	        }
	      },
	      '78': {
	        start: {
	          line: 146,
	          column: 4
	        },
	        end: {
	          line: 149,
	          column: 6
	        }
	      },
	      '79': {
	        start: {
	          line: 147,
	          column: 8
	        },
	        end: {
	          line: 147,
	          column: 51
	        }
	      },
	      '80': {
	        start: {
	          line: 148,
	          column: 8
	        },
	        end: {
	          line: 148,
	          column: 42
	        }
	      },
	      '81': {
	        start: {
	          line: 151,
	          column: 4
	        },
	        end: {
	          line: 153,
	          column: 6
	        }
	      },
	      '82': {
	        start: {
	          line: 152,
	          column: 8
	        },
	        end: {
	          line: 152,
	          column: 58
	        }
	      },
	      '83': {
	        start: {
	          line: 155,
	          column: 4
	        },
	        end: {
	          line: 162,
	          column: 6
	        }
	      },
	      '84': {
	        start: {
	          line: 156,
	          column: 8
	        },
	        end: {
	          line: 156,
	          column: 69
	        }
	      },
	      '85': {
	        start: {
	          line: 157,
	          column: 8
	        },
	        end: {
	          line: 157,
	          column: 52
	        }
	      },
	      '86': {
	        start: {
	          line: 158,
	          column: 8
	        },
	        end: {
	          line: 158,
	          column: 48
	        }
	      },
	      '87': {
	        start: {
	          line: 160,
	          column: 8
	        },
	        end: {
	          line: 160,
	          column: 35
	        }
	      },
	      '88': {
	        start: {
	          line: 161,
	          column: 8
	        },
	        end: {
	          line: 161,
	          column: 44
	        }
	      },
	      '89': {
	        start: {
	          line: 164,
	          column: 4
	        },
	        end: {
	          line: 166,
	          column: 6
	        }
	      },
	      '90': {
	        start: {
	          line: 165,
	          column: 8
	        },
	        end: {
	          line: 165,
	          column: 64
	        }
	      },
	      '91': {
	        start: {
	          line: 168,
	          column: 4
	        },
	        end: {
	          line: 170,
	          column: 6
	        }
	      },
	      '92': {
	        start: {
	          line: 169,
	          column: 8
	        },
	        end: {
	          line: 169,
	          column: 61
	        }
	      },
	      '93': {
	        start: {
	          line: 172,
	          column: 4
	        },
	        end: {
	          line: 178,
	          column: 6
	        }
	      },
	      '94': {
	        start: {
	          line: 174,
	          column: 8
	        },
	        end: {
	          line: 174,
	          column: 96
	        }
	      },
	      '95': {
	        start: {
	          line: 175,
	          column: 8
	        },
	        end: {
	          line: 175,
	          column: 90
	        }
	      },
	      '96': {
	        start: {
	          line: 177,
	          column: 8
	        },
	        end: {
	          line: 177,
	          column: 51
	        }
	      },
	      '97': {
	        start: {
	          line: 180,
	          column: 4
	        },
	        end: {
	          line: 182,
	          column: 6
	        }
	      },
	      '98': {
	        start: {
	          line: 181,
	          column: 8
	        },
	        end: {
	          line: 181,
	          column: 62
	        }
	      },
	      '99': {
	        start: {
	          line: 184,
	          column: 4
	        },
	        end: {
	          line: 186,
	          column: 6
	        }
	      },
	      '100': {
	        start: {
	          line: 185,
	          column: 8
	        },
	        end: {
	          line: 185,
	          column: 59
	        }
	      },
	      '101': {
	        start: {
	          line: 188,
	          column: 4
	        },
	        end: {
	          line: 190,
	          column: 6
	        }
	      },
	      '102': {
	        start: {
	          line: 189,
	          column: 8
	        },
	        end: {
	          line: 189,
	          column: 55
	        }
	      },
	      '103': {
	        start: {
	          line: 192,
	          column: 4
	        },
	        end: {
	          line: 194,
	          column: 6
	        }
	      },
	      '104': {
	        start: {
	          line: 193,
	          column: 8
	        },
	        end: {
	          line: 193,
	          column: 67
	        }
	      },
	      '105': {
	        start: {
	          line: 196,
	          column: 4
	        },
	        end: {
	          line: 198,
	          column: 6
	        }
	      },
	      '106': {
	        start: {
	          line: 197,
	          column: 8
	        },
	        end: {
	          line: 197,
	          column: 42
	        }
	      },
	      '107': {
	        start: {
	          line: 200,
	          column: 4
	        },
	        end: {
	          line: 202,
	          column: 6
	        }
	      },
	      '108': {
	        start: {
	          line: 201,
	          column: 8
	        },
	        end: {
	          line: 201,
	          column: 44
	        }
	      },
	      '109': {
	        start: {
	          line: 204,
	          column: 4
	        },
	        end: {
	          line: 206,
	          column: 6
	        }
	      },
	      '110': {
	        start: {
	          line: 205,
	          column: 8
	        },
	        end: {
	          line: 205,
	          column: 52
	        }
	      },
	      '111': {
	        start: {
	          line: 208,
	          column: 4
	        },
	        end: {
	          line: 210,
	          column: 6
	        }
	      },
	      '112': {
	        start: {
	          line: 209,
	          column: 8
	        },
	        end: {
	          line: 209,
	          column: 48
	        }
	      },
	      '113': {
	        start: {
	          line: 214,
	          column: 16
	        },
	        end: {
	          line: 214,
	          column: 20
	        }
	      },
	      '114': {
	        start: {
	          line: 216,
	          column: 4
	        },
	        end: {
	          line: 227,
	          column: 5
	        }
	      },
	      '115': {
	        start: {
	          line: 217,
	          column: 6
	        },
	        end: {
	          line: 217,
	          column: 32
	        }
	      },
	      '116': {
	        start: {
	          line: 218,
	          column: 6
	        },
	        end: {
	          line: 220,
	          column: 7
	        }
	      },
	      '117': {
	        start: {
	          line: 219,
	          column: 10
	        },
	        end: {
	          line: 219,
	          column: 36
	        }
	      },
	      '118': {
	        start: {
	          line: 223,
	          column: 6
	        },
	        end: {
	          line: 223,
	          column: 47
	        }
	      },
	      '119': {
	        start: {
	          line: 226,
	          column: 6
	        },
	        end: {
	          line: 226,
	          column: 13
	        }
	      },
	      '120': {
	        start: {
	          line: 229,
	          column: 4
	        },
	        end: {
	          line: 240,
	          column: 7
	        }
	      },
	      '121': {
	        start: {
	          line: 230,
	          column: 8
	        },
	        end: {
	          line: 239,
	          column: 9
	        }
	      },
	      '122': {
	        start: {
	          line: 231,
	          column: 12
	        },
	        end: {
	          line: 231,
	          column: 55
	        }
	      },
	      '123': {
	        start: {
	          line: 232,
	          column: 15
	        },
	        end: {
	          line: 239,
	          column: 9
	        }
	      },
	      '124': {
	        start: {
	          line: 233,
	          column: 12
	        },
	        end: {
	          line: 235,
	          column: 15
	        }
	      },
	      '125': {
	        start: {
	          line: 234,
	          column: 16
	        },
	        end: {
	          line: 234,
	          column: 36
	        }
	      },
	      '126': {
	        start: {
	          line: 236,
	          column: 12
	        },
	        end: {
	          line: 238,
	          column: 15
	        }
	      },
	      '127': {
	        start: {
	          line: 237,
	          column: 16
	        },
	        end: {
	          line: 237,
	          column: 48
	        }
	      },
	      '128': {
	        start: {
	          line: 241,
	          column: 4
	        },
	        end: {
	          line: 252,
	          column: 7
	        }
	      },
	      '129': {
	        start: {
	          line: 242,
	          column: 8
	        },
	        end: {
	          line: 251,
	          column: 9
	        }
	      },
	      '130': {
	        start: {
	          line: 243,
	          column: 12
	        },
	        end: {
	          line: 243,
	          column: 37
	        }
	      },
	      '131': {
	        start: {
	          line: 244,
	          column: 15
	        },
	        end: {
	          line: 251,
	          column: 9
	        }
	      },
	      '132': {
	        start: {
	          line: 245,
	          column: 12
	        },
	        end: {
	          line: 247,
	          column: 15
	        }
	      },
	      '133': {
	        start: {
	          line: 246,
	          column: 16
	        },
	        end: {
	          line: 246,
	          column: 36
	        }
	      },
	      '134': {
	        start: {
	          line: 248,
	          column: 12
	        },
	        end: {
	          line: 250,
	          column: 15
	        }
	      },
	      '135': {
	        start: {
	          line: 249,
	          column: 16
	        },
	        end: {
	          line: 249,
	          column: 41
	        }
	      },
	      '136': {
	        start: {
	          line: 253,
	          column: 4
	        },
	        end: {
	          line: 264,
	          column: 7
	        }
	      },
	      '137': {
	        start: {
	          line: 254,
	          column: 8
	        },
	        end: {
	          line: 263,
	          column: 9
	        }
	      },
	      '138': {
	        start: {
	          line: 255,
	          column: 12
	        },
	        end: {
	          line: 255,
	          column: 39
	        }
	      },
	      '139': {
	        start: {
	          line: 256,
	          column: 15
	        },
	        end: {
	          line: 263,
	          column: 9
	        }
	      },
	      '140': {
	        start: {
	          line: 257,
	          column: 12
	        },
	        end: {
	          line: 259,
	          column: 15
	        }
	      },
	      '141': {
	        start: {
	          line: 258,
	          column: 16
	        },
	        end: {
	          line: 258,
	          column: 36
	        }
	      },
	      '142': {
	        start: {
	          line: 260,
	          column: 12
	        },
	        end: {
	          line: 262,
	          column: 15
	        }
	      },
	      '143': {
	        start: {
	          line: 261,
	          column: 16
	        },
	        end: {
	          line: 261,
	          column: 42
	        }
	      },
	      '144': {
	        start: {
	          line: 265,
	          column: 4
	        },
	        end: {
	          line: 287,
	          column: 7
	        }
	      },
	      '145': {
	        start: {
	          line: 266,
	          column: 8
	        },
	        end: {
	          line: 286,
	          column: 9
	        }
	      },
	      '146': {
	        start: {
	          line: 267,
	          column: 30
	        },
	        end: {
	          line: 267,
	          column: 51
	        }
	      },
	      '147': {
	        start: {
	          line: 268,
	          column: 12
	        },
	        end: {
	          line: 273,
	          column: 13
	        }
	      },
	      '148': {
	        start: {
	          line: 269,
	          column: 16
	        },
	        end: {
	          line: 269,
	          column: 42
	        }
	      },
	      '149': {
	        start: {
	          line: 270,
	          column: 16
	        },
	        end: {
	          line: 270,
	          column: 32
	        }
	      },
	      '150': {
	        start: {
	          line: 272,
	          column: 16
	        },
	        end: {
	          line: 272,
	          column: 44
	        }
	      },
	      '151': {
	        start: {
	          line: 274,
	          column: 12
	        },
	        end: {
	          line: 274,
	          column: 54
	        }
	      },
	      '152': {
	        start: {
	          line: 275,
	          column: 15
	        },
	        end: {
	          line: 286,
	          column: 9
	        }
	      },
	      '153': {
	        start: {
	          line: 276,
	          column: 30
	        },
	        end: {
	          line: 276,
	          column: 51
	        }
	      },
	      '154': {
	        start: {
	          line: 277,
	          column: 12
	        },
	        end: {
	          line: 279,
	          column: 13
	        }
	      },
	      '155': {
	        start: {
	          line: 278,
	          column: 16
	        },
	        end: {
	          line: 278,
	          column: 32
	        }
	      },
	      '156': {
	        start: {
	          line: 280,
	          column: 12
	        },
	        end: {
	          line: 282,
	          column: 15
	        }
	      },
	      '157': {
	        start: {
	          line: 281,
	          column: 16
	        },
	        end: {
	          line: 281,
	          column: 36
	        }
	      },
	      '158': {
	        start: {
	          line: 283,
	          column: 12
	        },
	        end: {
	          line: 285,
	          column: 15
	        }
	      },
	      '159': {
	        start: {
	          line: 284,
	          column: 16
	        },
	        end: {
	          line: 284,
	          column: 42
	        }
	      },
	      '160': {
	        start: {
	          line: 288,
	          column: 4
	        },
	        end: {
	          line: 290,
	          column: 7
	        }
	      },
	      '161': {
	        start: {
	          line: 289,
	          column: 8
	        },
	        end: {
	          line: 289,
	          column: 40
	        }
	      },
	      '162': {
	        start: {
	          line: 291,
	          column: 4
	        },
	        end: {
	          line: 303,
	          column: 7
	        }
	      },
	      '163': {
	        start: {
	          line: 292,
	          column: 8
	        },
	        end: {
	          line: 302,
	          column: 9
	        }
	      },
	      '164': {
	        start: {
	          line: 293,
	          column: 12
	        },
	        end: {
	          line: 293,
	          column: 33
	        }
	      },
	      '165': {
	        start: {
	          line: 294,
	          column: 12
	        },
	        end: {
	          line: 294,
	          column: 24
	        }
	      },
	      '166': {
	        start: {
	          line: 295,
	          column: 15
	        },
	        end: {
	          line: 302,
	          column: 9
	        }
	      },
	      '167': {
	        start: {
	          line: 296,
	          column: 12
	        },
	        end: {
	          line: 298,
	          column: 15
	        }
	      },
	      '168': {
	        start: {
	          line: 297,
	          column: 16
	        },
	        end: {
	          line: 297,
	          column: 36
	        }
	      },
	      '169': {
	        start: {
	          line: 299,
	          column: 12
	        },
	        end: {
	          line: 301,
	          column: 15
	        }
	      },
	      '170': {
	        start: {
	          line: 300,
	          column: 16
	        },
	        end: {
	          line: 300,
	          column: 41
	        }
	      },
	      '171': {
	        start: {
	          line: 307,
	          column: 25
	        },
	        end: {
	          line: 307,
	          column: 75
	        }
	      },
	      '172': {
	        start: {
	          line: 308,
	          column: 6
	        },
	        end: {
	          line: 316,
	          column: 7
	        }
	      },
	      '173': {
	        start: {
	          line: 309,
	          column: 30
	        },
	        end: {
	          line: 309,
	          column: 76
	        }
	      },
	      '174': {
	        start: {
	          line: 310,
	          column: 10
	        },
	        end: {
	          line: 310,
	          column: 93
	        }
	      },
	      '175': {
	        start: {
	          line: 311,
	          column: 10
	        },
	        end: {
	          line: 311,
	          column: 54
	        }
	      },
	      '176': {
	        start: {
	          line: 313,
	          column: 10
	        },
	        end: {
	          line: 315,
	          column: 11
	        }
	      },
	      '177': {
	        start: {
	          line: 314,
	          column: 14
	        },
	        end: {
	          line: 314,
	          column: 57
	        }
	      },
	      '178': {
	        start: {
	          line: 320,
	          column: 18
	        },
	        end: {
	          line: 320,
	          column: 22
	        }
	      },
	      '179': {
	        start: {
	          line: 321,
	          column: 25
	        },
	        end: {
	          line: 321,
	          column: 75
	        }
	      },
	      '180': {
	        start: {
	          line: 322,
	          column: 6
	        },
	        end: {
	          line: 355,
	          column: 7
	        }
	      },
	      '181': {
	        start: {
	          line: 323,
	          column: 30
	        },
	        end: {
	          line: 323,
	          column: 62
	        }
	      },
	      '182': {
	        start: {
	          line: 324,
	          column: 10
	        },
	        end: {
	          line: 324,
	          column: 98
	        }
	      },
	      '183': {
	        start: {
	          line: 325,
	          column: 10
	        },
	        end: {
	          line: 325,
	          column: 54
	        }
	      },
	      '184': {
	        start: {
	          line: 326,
	          column: 10
	        },
	        end: {
	          line: 346,
	          column: 13
	        }
	      },
	      '185': {
	        start: {
	          line: 327,
	          column: 14
	        },
	        end: {
	          line: 327,
	          column: 34
	        }
	      },
	      '186': {
	        start: {
	          line: 328,
	          column: 14
	        },
	        end: {
	          line: 337,
	          column: 15
	        }
	      },
	      '187': {
	        start: {
	          line: 329,
	          column: 38
	        },
	        end: {
	          line: 329,
	          column: 63
	        }
	      },
	      '188': {
	        start: {
	          line: 330,
	          column: 31
	        },
	        end: {
	          line: 330,
	          column: 50
	        }
	      },
	      '189': {
	        start: {
	          line: 331,
	          column: 18
	        },
	        end: {
	          line: 331,
	          column: 40
	        }
	      },
	      '190': {
	        start: {
	          line: 332,
	          column: 18
	        },
	        end: {
	          line: 336,
	          column: 21
	        }
	      },
	      '191': {
	        start: {
	          line: 333,
	          column: 22
	        },
	        end: {
	          line: 335,
	          column: 23
	        }
	      },
	      '192': {
	        start: {
	          line: 334,
	          column: 26
	        },
	        end: {
	          line: 334,
	          column: 55
	        }
	      },
	      '193': {
	        start: {
	          line: 340,
	          column: 14
	        },
	        end: {
	          line: 345,
	          column: 15
	        }
	      },
	      '194': {
	        start: {
	          line: 341,
	          column: 18
	        },
	        end: {
	          line: 344,
	          column: 19
	        }
	      },
	      '195': {
	        start: {
	          line: 342,
	          column: 22
	        },
	        end: {
	          line: 342,
	          column: 63
	        }
	      },
	      '196': {
	        start: {
	          line: 343,
	          column: 22
	        },
	        end: {
	          line: 343,
	          column: 84
	        }
	      },
	      '197': {
	        start: {
	          line: 348,
	          column: 10
	        },
	        end: {
	          line: 354,
	          column: 11
	        }
	      },
	      '198': {
	        start: {
	          line: 349,
	          column: 14
	        },
	        end: {
	          line: 349,
	          column: 57
	        }
	      },
	      '199': {
	        start: {
	          line: 350,
	          column: 25
	        },
	        end: {
	          line: 350,
	          column: 55
	        }
	      },
	      '200': {
	        start: {
	          line: 351,
	          column: 14
	        },
	        end: {
	          line: 351,
	          column: 63
	        }
	      },
	      '201': {
	        start: {
	          line: 352,
	          column: 31
	        },
	        end: {
	          line: 352,
	          column: 92
	        }
	      },
	      '202': {
	        start: {
	          line: 353,
	          column: 14
	        },
	        end: {
	          line: 353,
	          column: 46
	        }
	      },
	      '203': {
	        start: {
	          line: 359,
	          column: 4
	        },
	        end: {
	          line: 359,
	          column: 17
	        }
	      },
	      '204': {
	        start: {
	          line: 361,
	          column: 23
	        },
	        end: {
	          line: 361,
	          column: 92
	        }
	      },
	      '205': {
	        start: {
	          line: 362,
	          column: 6
	        },
	        end: {
	          line: 364,
	          column: 7
	        }
	      },
	      '206': {
	        start: {
	          line: 363,
	          column: 10
	        },
	        end: {
	          line: 363,
	          column: 47
	        }
	      },
	      '207': {
	        start: {
	          line: 366,
	          column: 6
	        },
	        end: {
	          line: 371,
	          column: 7
	        }
	      },
	      '208': {
	        start: {
	          line: 367,
	          column: 10
	        },
	        end: {
	          line: 367,
	          column: 85
	        }
	      },
	      '209': {
	        start: {
	          line: 368,
	          column: 10
	        },
	        end: {
	          line: 370,
	          column: 11
	        }
	      },
	      '210': {
	        start: {
	          line: 369,
	          column: 14
	        },
	        end: {
	          line: 369,
	          column: 51
	        }
	      },
	      '211': {
	        start: {
	          line: 375,
	          column: 4
	        },
	        end: {
	          line: 375,
	          column: 17
	        }
	      },
	      '212': {
	        start: {
	          line: 377,
	          column: 21
	        },
	        end: {
	          line: 377,
	          column: 25
	        }
	      },
	      '213': {
	        start: {
	          line: 378,
	          column: 4
	        },
	        end: {
	          line: 382,
	          column: 5
	        }
	      },
	      '214': {
	        start: {
	          line: 379,
	          column: 8
	        },
	        end: {
	          line: 379,
	          column: 83
	        }
	      },
	      '215': {
	        start: {
	          line: 381,
	          column: 8
	        },
	        end: {
	          line: 381,
	          column: 78
	        }
	      },
	      '216': {
	        start: {
	          line: 384,
	          column: 4
	        },
	        end: {
	          line: 386,
	          column: 5
	        }
	      },
	      '217': {
	        start: {
	          line: 385,
	          column: 8
	        },
	        end: {
	          line: 385,
	          column: 46
	        }
	      },
	      '218': {
	        start: {
	          line: 390,
	          column: 4
	        },
	        end: {
	          line: 392,
	          column: 5
	        }
	      },
	      '219': {
	        start: {
	          line: 391,
	          column: 8
	        },
	        end: {
	          line: 391,
	          column: 73
	        }
	      },
	      '220': {
	        start: {
	          line: 393,
	          column: 4
	        },
	        end: {
	          line: 393,
	          column: 64
	        }
	      },
	      '221': {
	        start: {
	          line: 397,
	          column: 4
	        },
	        end: {
	          line: 398,
	          column: 15
	        }
	      },
	      '222': {
	        start: {
	          line: 398,
	          column: 8
	        },
	        end: {
	          line: 398,
	          column: 15
	        }
	      },
	      '223': {
	        start: {
	          line: 400,
	          column: 4
	        },
	        end: {
	          line: 403,
	          column: 5
	        }
	      },
	      '224': {
	        start: {
	          line: 401,
	          column: 6
	        },
	        end: {
	          line: 401,
	          column: 25
	        }
	      },
	      '225': {
	        start: {
	          line: 402,
	          column: 6
	        },
	        end: {
	          line: 402,
	          column: 25
	        }
	      },
	      '226': {
	        start: {
	          line: 404,
	          column: 4
	        },
	        end: {
	          line: 404,
	          column: 24
	        }
	      },
	      '227': {
	        start: {
	          line: 405,
	          column: 4
	        },
	        end: {
	          line: 405,
	          column: 23
	        }
	      },
	      '228': {
	        start: {
	          line: 409,
	          column: 19
	        },
	        end: {
	          line: 409,
	          column: 23
	        }
	      },
	      '229': {
	        start: {
	          line: 410,
	          column: 6
	        },
	        end: {
	          line: 420,
	          column: 7
	        }
	      },
	      '230': {
	        start: {
	          line: 411,
	          column: 10
	        },
	        end: {
	          line: 417,
	          column: 11
	        }
	      },
	      '231': {
	        start: {
	          line: 412,
	          column: 14
	        },
	        end: {
	          line: 414,
	          column: 15
	        }
	      },
	      '232': {
	        start: {
	          line: 413,
	          column: 18
	        },
	        end: {
	          line: 413,
	          column: 52
	        }
	      },
	      '233': {
	        start: {
	          line: 419,
	          column: 10
	        },
	        end: {
	          line: 419,
	          column: 48
	        }
	      },
	      '234': {
	        start: {
	          line: 421,
	          column: 6
	        },
	        end: {
	          line: 421,
	          column: 28
	        }
	      },
	      '235': {
	        start: {
	          line: 422,
	          column: 6
	        },
	        end: {
	          line: 422,
	          column: 26
	        }
	      },
	      '236': {
	        start: {
	          line: 426,
	          column: 4
	        },
	        end: {
	          line: 426,
	          column: 52
	        }
	      },
	      '237': {
	        start: {
	          line: 428,
	          column: 4
	        },
	        end: {
	          line: 437,
	          column: 5
	        }
	      },
	      '238': {
	        start: {
	          line: 429,
	          column: 6
	        },
	        end: {
	          line: 434,
	          column: 7
	        }
	      },
	      '239': {
	        start: {
	          line: 430,
	          column: 10
	        },
	        end: {
	          line: 430,
	          column: 37
	        }
	      },
	      '240': {
	        start: {
	          line: 431,
	          column: 10
	        },
	        end: {
	          line: 431,
	          column: 35
	        }
	      },
	      '241': {
	        start: {
	          line: 433,
	          column: 10
	        },
	        end: {
	          line: 433,
	          column: 34
	        }
	      },
	      '242': {
	        start: {
	          line: 436,
	          column: 8
	        },
	        end: {
	          line: 436,
	          column: 32
	        }
	      },
	      '243': {
	        start: {
	          line: 444,
	          column: 6
	        },
	        end: {
	          line: 444,
	          column: 47
	        }
	      },
	      '244': {
	        start: {
	          line: 446,
	          column: 6
	        },
	        end: {
	          line: 477,
	          column: 8
	        }
	      },
	      '245': {
	        start: {
	          line: 449,
	          column: 28
	        },
	        end: {
	          line: 449,
	          column: 88
	        }
	      },
	      '246': {
	        start: {
	          line: 450,
	          column: 14
	        },
	        end: {
	          line: 454,
	          column: 15
	        }
	      },
	      '247': {
	        start: {
	          line: 451,
	          column: 18
	        },
	        end: {
	          line: 451,
	          column: 40
	        }
	      },
	      '248': {
	        start: {
	          line: 452,
	          column: 18
	        },
	        end: {
	          line: 452,
	          column: 53
	        }
	      },
	      '249': {
	        start: {
	          line: 453,
	          column: 18
	        },
	        end: {
	          line: 453,
	          column: 25
	        }
	      },
	      '250': {
	        start: {
	          line: 456,
	          column: 26
	        },
	        end: {
	          line: 456,
	          column: 51
	        }
	      },
	      '251': {
	        start: {
	          line: 457,
	          column: 14
	        },
	        end: {
	          line: 461,
	          column: 15
	        }
	      },
	      '252': {
	        start: {
	          line: 458,
	          column: 18
	        },
	        end: {
	          line: 458,
	          column: 40
	        }
	      },
	      '253': {
	        start: {
	          line: 459,
	          column: 18
	        },
	        end: {
	          line: 459,
	          column: 53
	        }
	      },
	      '254': {
	        start: {
	          line: 460,
	          column: 18
	        },
	        end: {
	          line: 460,
	          column: 25
	        }
	      },
	      '255': {
	        start: {
	          line: 463,
	          column: 14
	        },
	        end: {
	          line: 463,
	          column: 40
	        }
	      },
	      '256': {
	        start: {
	          line: 465,
	          column: 14
	        },
	        end: {
	          line: 465,
	          column: 43
	        }
	      },
	      '257': {
	        start: {
	          line: 467,
	          column: 14
	        },
	        end: {
	          line: 469,
	          column: 15
	        }
	      },
	      '258': {
	        start: {
	          line: 468,
	          column: 18
	        },
	        end: {
	          line: 468,
	          column: 104
	        }
	      },
	      '259': {
	        start: {
	          line: 471,
	          column: 14
	        },
	        end: {
	          line: 473,
	          column: 15
	        }
	      },
	      '260': {
	        start: {
	          line: 472,
	          column: 18
	        },
	        end: {
	          line: 472,
	          column: 53
	        }
	      },
	      '261': {
	        start: {
	          line: 475,
	          column: 14
	        },
	        end: {
	          line: 475,
	          column: 49
	        }
	      },
	      '262': {
	        start: {
	          line: 479,
	          column: 6
	        },
	        end: {
	          line: 484,
	          column: 8
	        }
	      },
	      '263': {
	        start: {
	          line: 486,
	          column: 6
	        },
	        end: {
	          line: 495,
	          column: 8
	        }
	      },
	      '264': {
	        start: {
	          line: 489,
	          column: 14
	        },
	        end: {
	          line: 493,
	          column: 15
	        }
	      },
	      '265': {
	        start: {
	          line: 490,
	          column: 18
	        },
	        end: {
	          line: 490,
	          column: 45
	        }
	      },
	      '266': {
	        start: {
	          line: 491,
	          column: 21
	        },
	        end: {
	          line: 493,
	          column: 15
	        }
	      },
	      '267': {
	        start: {
	          line: 492,
	          column: 18
	        },
	        end: {
	          line: 492,
	          column: 44
	        }
	      },
	      '268': {
	        start: {
	          line: 497,
	          column: 6
	        },
	        end: {
	          line: 506,
	          column: 8
	        }
	      },
	      '269': {
	        start: {
	          line: 500,
	          column: 14
	        },
	        end: {
	          line: 504,
	          column: 15
	        }
	      },
	      '270': {
	        start: {
	          line: 501,
	          column: 18
	        },
	        end: {
	          line: 501,
	          column: 44
	        }
	      },
	      '271': {
	        start: {
	          line: 503,
	          column: 18
	        },
	        end: {
	          line: 503,
	          column: 46
	        }
	      },
	      '272': {
	        start: {
	          line: 508,
	          column: 6
	        },
	        end: {
	          line: 514,
	          column: 8
	        }
	      },
	      '273': {
	        start: {
	          line: 511,
	          column: 30
	        },
	        end: {
	          line: 511,
	          column: 59
	        }
	      },
	      '274': {
	        start: {
	          line: 512,
	          column: 14
	        },
	        end: {
	          line: 512,
	          column: 48
	        }
	      },
	      '275': {
	        start: {
	          line: 516,
	          column: 6
	        },
	        end: {
	          line: 521,
	          column: 8
	        }
	      },
	      '276': {
	        start: {
	          line: 519,
	          column: 14
	        },
	        end: {
	          line: 519,
	          column: 47
	        }
	      },
	      '277': {
	        start: {
	          line: 523,
	          column: 6
	        },
	        end: {
	          line: 528,
	          column: 8
	        }
	      },
	      '278': {
	        start: {
	          line: 526,
	          column: 14
	        },
	        end: {
	          line: 526,
	          column: 55
	        }
	      },
	      '279': {
	        start: {
	          line: 530,
	          column: 6
	        },
	        end: {
	          line: 535,
	          column: 8
	        }
	      },
	      '280': {
	        start: {
	          line: 533,
	          column: 14
	        },
	        end: {
	          line: 533,
	          column: 62
	        }
	      },
	      '281': {
	        start: {
	          line: 537,
	          column: 6
	        },
	        end: {
	          line: 542,
	          column: 8
	        }
	      },
	      '282': {
	        start: {
	          line: 540,
	          column: 14
	        },
	        end: {
	          line: 540,
	          column: 53
	        }
	      },
	      '283': {
	        start: {
	          line: 544,
	          column: 6
	        },
	        end: {
	          line: 550,
	          column: 8
	        }
	      },
	      '284': {
	        start: {
	          line: 547,
	          column: 14
	        },
	        end: {
	          line: 547,
	          column: 57
	        }
	      },
	      '285': {
	        start: {
	          line: 548,
	          column: 14
	        },
	        end: {
	          line: 548,
	          column: 51
	        }
	      },
	      '286': {
	        start: {
	          line: 555,
	          column: 25
	        },
	        end: {
	          line: 555,
	          column: 27
	        }
	      },
	      '287': {
	        start: {
	          line: 557,
	          column: 6
	        },
	        end: {
	          line: 562,
	          column: 19
	        }
	      },
	      '288': {
	        start: {
	          line: 558,
	          column: 10
	        },
	        end: {
	          line: 561,
	          column: 11
	        }
	      },
	      '289': {
	        start: {
	          line: 559,
	          column: 14
	        },
	        end: {
	          line: 559,
	          column: 56
	        }
	      },
	      '290': {
	        start: {
	          line: 560,
	          column: 14
	        },
	        end: {
	          line: 560,
	          column: 34
	        }
	      },
	      '291': {
	        start: {
	          line: 564,
	          column: 6
	        },
	        end: {
	          line: 569,
	          column: 19
	        }
	      },
	      '292': {
	        start: {
	          line: 565,
	          column: 10
	        },
	        end: {
	          line: 568,
	          column: 11
	        }
	      },
	      '293': {
	        start: {
	          line: 566,
	          column: 14
	        },
	        end: {
	          line: 566,
	          column: 56
	        }
	      },
	      '294': {
	        start: {
	          line: 567,
	          column: 14
	        },
	        end: {
	          line: 567,
	          column: 35
	        }
	      },
	      '295': {
	        start: {
	          line: 571,
	          column: 6
	        },
	        end: {
	          line: 573,
	          column: 19
	        }
	      },
	      '296': {
	        start: {
	          line: 572,
	          column: 10
	        },
	        end: {
	          line: 572,
	          column: 45
	        }
	      },
	      '297': {
	        start: {
	          line: 576,
	          column: 6
	        },
	        end: {
	          line: 615,
	          column: 19
	        }
	      },
	      '298': {
	        start: {
	          line: 577,
	          column: 10
	        },
	        end: {
	          line: 577,
	          column: 29
	        }
	      },
	      '299': {
	        start: {
	          line: 579,
	          column: 10
	        },
	        end: {
	          line: 579,
	          column: 46
	        }
	      },
	      '300': {
	        start: {
	          line: 581,
	          column: 26
	        },
	        end: {
	          line: 581,
	          column: 94
	        }
	      },
	      '301': {
	        start: {
	          line: 582,
	          column: 10
	        },
	        end: {
	          line: 582,
	          column: 71
	        }
	      },
	      '302': {
	        start: {
	          line: 583,
	          column: 10
	        },
	        end: {
	          line: 583,
	          column: 75
	        }
	      },
	      '303': {
	        start: {
	          line: 584,
	          column: 10
	        },
	        end: {
	          line: 584,
	          column: 44
	        }
	      },
	      '304': {
	        start: {
	          line: 585,
	          column: 10
	        },
	        end: {
	          line: 585,
	          column: 50
	        }
	      },
	      '305': {
	        start: {
	          line: 587,
	          column: 25
	        },
	        end: {
	          line: 587,
	          column: 46
	        }
	      },
	      '306': {
	        start: {
	          line: 588,
	          column: 10
	        },
	        end: {
	          line: 593,
	          column: 11
	        }
	      },
	      '307': {
	        start: {
	          line: 589,
	          column: 14
	        },
	        end: {
	          line: 589,
	          column: 52
	        }
	      },
	      '308': {
	        start: {
	          line: 590,
	          column: 14
	        },
	        end: {
	          line: 592,
	          column: 17
	        }
	      },
	      '309': {
	        start: {
	          line: 595,
	          column: 24
	        },
	        end: {
	          line: 595,
	          column: 68
	        }
	      },
	      '310': {
	        start: {
	          line: 596,
	          column: 10
	        },
	        end: {
	          line: 596,
	          column: 54
	        }
	      },
	      '311': {
	        start: {
	          line: 599,
	          column: 10
	        },
	        end: {
	          line: 603,
	          column: 11
	        }
	      },
	      '312': {
	        start: {
	          line: 600,
	          column: 14
	        },
	        end: {
	          line: 600,
	          column: 39
	        }
	      },
	      '313': {
	        start: {
	          line: 602,
	          column: 14
	        },
	        end: {
	          line: 602,
	          column: 38
	        }
	      },
	      '314': {
	        start: {
	          line: 605,
	          column: 10
	        },
	        end: {
	          line: 614,
	          column: 28
	        }
	      },
	      '315': {
	        start: {
	          line: 607,
	          column: 18
	        },
	        end: {
	          line: 607,
	          column: 38
	        }
	      },
	      '316': {
	        start: {
	          line: 608,
	          column: 18
	        },
	        end: {
	          line: 608,
	          column: 53
	        }
	      },
	      '317': {
	        start: {
	          line: 611,
	          column: 18
	        },
	        end: {
	          line: 611,
	          column: 55
	        }
	      },
	      '318': {
	        start: {
	          line: 612,
	          column: 18
	        },
	        end: {
	          line: 612,
	          column: 93
	        }
	      },
	      '319': {
	        start: {
	          line: 613,
	          column: 18
	        },
	        end: {
	          line: 613,
	          column: 53
	        }
	      },
	      '320': {
	        start: {
	          line: 617,
	          column: 6
	        },
	        end: {
	          line: 632,
	          column: 19
	        }
	      },
	      '321': {
	        start: {
	          line: 618,
	          column: 24
	        },
	        end: {
	          line: 618,
	          column: 84
	        }
	      },
	      '322': {
	        start: {
	          line: 619,
	          column: 10
	        },
	        end: {
	          line: 619,
	          column: 37
	        }
	      },
	      '323': {
	        start: {
	          line: 619,
	          column: 24
	        },
	        end: {
	          line: 619,
	          column: 37
	        }
	      },
	      '324': {
	        start: {
	          line: 621,
	          column: 22
	        },
	        end: {
	          line: 621,
	          column: 47
	        }
	      },
	      '325': {
	        start: {
	          line: 622,
	          column: 10
	        },
	        end: {
	          line: 622,
	          column: 35
	        }
	      },
	      '326': {
	        start: {
	          line: 622,
	          column: 22
	        },
	        end: {
	          line: 622,
	          column: 35
	        }
	      },
	      '327': {
	        start: {
	          line: 624,
	          column: 10
	        },
	        end: {
	          line: 626,
	          column: 11
	        }
	      },
	      '328': {
	        start: {
	          line: 625,
	          column: 14
	        },
	        end: {
	          line: 625,
	          column: 27
	        }
	      },
	      '329': {
	        start: {
	          line: 628,
	          column: 10
	        },
	        end: {
	          line: 628,
	          column: 36
	        }
	      },
	      '330': {
	        start: {
	          line: 631,
	          column: 10
	        },
	        end: {
	          line: 631,
	          column: 22
	        }
	      },
	      '331': {
	        start: {
	          line: 638,
	          column: 6
	        },
	        end: {
	          line: 640,
	          column: 19
	        }
	      },
	      '332': {
	        start: {
	          line: 639,
	          column: 10
	        },
	        end: {
	          line: 639,
	          column: 47
	        }
	      },
	      '333': {
	        start: {
	          line: 646,
	          column: 6
	        },
	        end: {
	          line: 648,
	          column: 19
	        }
	      },
	      '334': {
	        start: {
	          line: 647,
	          column: 10
	        },
	        end: {
	          line: 647,
	          column: 44
	        }
	      },
	      '335': {
	        start: {
	          line: 650,
	          column: 6
	        },
	        end: {
	          line: 687,
	          column: 19
	        }
	      },
	      '336': {
	        start: {
	          line: 651,
	          column: 28
	        },
	        end: {
	          line: 651,
	          column: 88
	        }
	      },
	      '337': {
	        start: {
	          line: 652,
	          column: 10
	        },
	        end: {
	          line: 686,
	          column: 11
	        }
	      },
	      '338': {
	        start: {
	          line: 653,
	          column: 26
	        },
	        end: {
	          line: 653,
	          column: 55
	        }
	      },
	      '339': {
	        start: {
	          line: 654,
	          column: 30
	        },
	        end: {
	          line: 654,
	          column: 41
	        }
	      },
	      '340': {
	        start: {
	          line: 656,
	          column: 31
	        },
	        end: {
	          line: 656,
	          column: 33
	        }
	      },
	      '341': {
	        start: {
	          line: 657,
	          column: 38
	        },
	        end: {
	          line: 657,
	          column: 40
	        }
	      },
	      '342': {
	        start: {
	          line: 658,
	          column: 34
	        },
	        end: {
	          line: 658,
	          column: 36
	        }
	      },
	      '343': {
	        start: {
	          line: 660,
	          column: 14
	        },
	        end: {
	          line: 667,
	          column: 15
	        }
	      },
	      '344': {
	        start: {
	          line: 661,
	          column: 18
	        },
	        end: {
	          line: 661,
	          column: 56
	        }
	      },
	      '345': {
	        start: {
	          line: 662,
	          column: 18
	        },
	        end: {
	          line: 662,
	          column: 70
	        }
	      },
	      '346': {
	        start: {
	          line: 663,
	          column: 18
	        },
	        end: {
	          line: 663,
	          column: 102
	        }
	      },
	      '347': {
	        start: {
	          line: 664,
	          column: 18
	        },
	        end: {
	          line: 664,
	          column: 68
	        }
	      },
	      '348': {
	        start: {
	          line: 665,
	          column: 18
	        },
	        end: {
	          line: 665,
	          column: 62
	        }
	      },
	      '349': {
	        start: {
	          line: 666,
	          column: 18
	        },
	        end: {
	          line: 666,
	          column: 77
	        }
	      },
	      '350': {
	        start: {
	          line: 672,
	          column: 14
	        },
	        end: {
	          line: 672,
	          column: 41
	        }
	      },
	      '351': {
	        start: {
	          line: 674,
	          column: 14
	        },
	        end: {
	          line: 674,
	          column: 35
	        }
	      },
	      '352': {
	        start: {
	          line: 675,
	          column: 25
	        },
	        end: {
	          line: 675,
	          column: 51
	        }
	      },
	      '353': {
	        start: {
	          line: 676,
	          column: 14
	        },
	        end: {
	          line: 676,
	          column: 44
	        }
	      },
	      '354': {
	        start: {
	          line: 677,
	          column: 14
	        },
	        end: {
	          line: 677,
	          column: 65
	        }
	      },
	      '355': {
	        start: {
	          line: 678,
	          column: 14
	        },
	        end: {
	          line: 682,
	          column: 15
	        }
	      },
	      '356': {
	        start: {
	          line: 679,
	          column: 18
	        },
	        end: {
	          line: 681,
	          column: 21
	        }
	      },
	      '357': {
	        start: {
	          line: 680,
	          column: 22
	        },
	        end: {
	          line: 680,
	          column: 49
	        }
	      },
	      '358': {
	        start: {
	          line: 683,
	          column: 14
	        },
	        end: {
	          line: 683,
	          column: 45
	        }
	      },
	      '359': {
	        start: {
	          line: 684,
	          column: 14
	        },
	        end: {
	          line: 684,
	          column: 79
	        }
	      },
	      '360': {
	        start: {
	          line: 689,
	          column: 6
	        },
	        end: {
	          line: 691,
	          column: 19
	        }
	      },
	      '361': {
	        start: {
	          line: 690,
	          column: 10
	        },
	        end: {
	          line: 690,
	          column: 85
	        }
	      },
	      '362': {
	        start: {
	          line: 693,
	          column: 6
	        },
	        end: {
	          line: 695,
	          column: 19
	        }
	      },
	      '363': {
	        start: {
	          line: 694,
	          column: 10
	        },
	        end: {
	          line: 694,
	          column: 82
	        }
	      },
	      '364': {
	        start: {
	          line: 697,
	          column: 6
	        },
	        end: {
	          line: 705,
	          column: 19
	        }
	      },
	      '365': {
	        start: {
	          line: 698,
	          column: 34
	        },
	        end: {
	          line: 698,
	          column: 63
	        }
	      },
	      '366': {
	        start: {
	          line: 699,
	          column: 10
	        },
	        end: {
	          line: 704,
	          column: 11
	        }
	      },
	      '367': {
	        start: {
	          line: 707,
	          column: 6
	        },
	        end: {
	          line: 717,
	          column: 19
	        }
	      },
	      '368': {
	        start: {
	          line: 708,
	          column: 30
	        },
	        end: {
	          line: 708,
	          column: 59
	        }
	      },
	      '369': {
	        start: {
	          line: 709,
	          column: 10
	        },
	        end: {
	          line: 713,
	          column: 11
	        }
	      },
	      '370': {
	        start: {
	          line: 710,
	          column: 14
	        },
	        end: {
	          line: 710,
	          column: 32
	        }
	      },
	      '371': {
	        start: {
	          line: 712,
	          column: 14
	        },
	        end: {
	          line: 712,
	          column: 44
	        }
	      },
	      '372': {
	        start: {
	          line: 715,
	          column: 10
	        },
	        end: {
	          line: 715,
	          column: 56
	        }
	      },
	      '373': {
	        start: {
	          line: 716,
	          column: 10
	        },
	        end: {
	          line: 716,
	          column: 55
	        }
	      },
	      '374': {
	        start: {
	          line: 719,
	          column: 6
	        },
	        end: {
	          line: 723,
	          column: 19
	        }
	      },
	      '375': {
	        start: {
	          line: 720,
	          column: 10
	        },
	        end: {
	          line: 722,
	          column: 11
	        }
	      },
	      '376': {
	        start: {
	          line: 721,
	          column: 14
	        },
	        end: {
	          line: 721,
	          column: 57
	        }
	      },
	      '377': {
	        start: {
	          line: 725,
	          column: 6
	        },
	        end: {
	          line: 729,
	          column: 19
	        }
	      },
	      '378': {
	        start: {
	          line: 726,
	          column: 10
	        },
	        end: {
	          line: 728,
	          column: 11
	        }
	      },
	      '379': {
	        start: {
	          line: 727,
	          column: 14
	        },
	        end: {
	          line: 727,
	          column: 57
	        }
	      },
	      '380': {
	        start: {
	          line: 731,
	          column: 6
	        },
	        end: {
	          line: 733,
	          column: 19
	        }
	      },
	      '381': {
	        start: {
	          line: 732,
	          column: 10
	        },
	        end: {
	          line: 732,
	          column: 43
	        }
	      },
	      '382': {
	        start: {
	          line: 735,
	          column: 6
	        },
	        end: {
	          line: 738,
	          column: 19
	        }
	      },
	      '383': {
	        start: {
	          line: 736,
	          column: 10
	        },
	        end: {
	          line: 736,
	          column: 47
	        }
	      },
	      '384': {
	        start: {
	          line: 737,
	          column: 10
	        },
	        end: {
	          line: 737,
	          column: 45
	        }
	      },
	      '385': {
	        start: {
	          line: 740,
	          column: 6
	        },
	        end: {
	          line: 740,
	          column: 49
	        }
	      },
	      '386': {
	        start: {
	          line: 743,
	          column: 6
	        },
	        end: {
	          line: 745,
	          column: 7
	        }
	      },
	      '387': {
	        start: {
	          line: 744,
	          column: 10
	        },
	        end: {
	          line: 744,
	          column: 36
	        }
	      },
	      '388': {
	        start: {
	          line: 752,
	          column: 6
	        },
	        end: {
	          line: 752,
	          column: 85
	        }
	      },
	      '389': {
	        start: {
	          line: 753,
	          column: 6
	        },
	        end: {
	          line: 757,
	          column: 8
	        }
	      },
	      '390': {
	        start: {
	          line: 760,
	          column: 6
	        },
	        end: {
	          line: 765,
	          column: 7
	        }
	      },
	      '391': {
	        start: {
	          line: 761,
	          column: 10
	        },
	        end: {
	          line: 761,
	          column: 42
	        }
	      },
	      '392': {
	        start: {
	          line: 762,
	          column: 10
	        },
	        end: {
	          line: 762,
	          column: 45
	        }
	      },
	      '393': {
	        start: {
	          line: 764,
	          column: 10
	        },
	        end: {
	          line: 764,
	          column: 36
	        }
	      },
	      '394': {
	        start: {
	          line: 770,
	          column: 25
	        },
	        end: {
	          line: 770,
	          column: 27
	        }
	      },
	      '395': {
	        start: {
	          line: 771,
	          column: 18
	        },
	        end: {
	          line: 771,
	          column: 22
	        }
	      },
	      '396': {
	        start: {
	          line: 773,
	          column: 6
	        },
	        end: {
	          line: 775,
	          column: 8
	        }
	      },
	      '397': {
	        start: {
	          line: 774,
	          column: 10
	        },
	        end: {
	          line: 774,
	          column: 43
	        }
	      },
	      '398': {
	        start: {
	          line: 777,
	          column: 6
	        },
	        end: {
	          line: 779,
	          column: 8
	        }
	      },
	      '399': {
	        start: {
	          line: 778,
	          column: 10
	        },
	        end: {
	          line: 778,
	          column: 44
	        }
	      },
	      '400': {
	        start: {
	          line: 781,
	          column: 6
	        },
	        end: {
	          line: 783,
	          column: 8
	        }
	      },
	      '401': {
	        start: {
	          line: 782,
	          column: 10
	        },
	        end: {
	          line: 782,
	          column: 43
	        }
	      },
	      '402': {
	        start: {
	          line: 785,
	          column: 6
	        },
	        end: {
	          line: 787,
	          column: 19
	        }
	      },
	      '403': {
	        start: {
	          line: 786,
	          column: 10
	        },
	        end: {
	          line: 786,
	          column: 43
	        }
	      },
	      '404': {
	        start: {
	          line: 789,
	          column: 6
	        },
	        end: {
	          line: 792,
	          column: 19
	        }
	      },
	      '405': {
	        start: {
	          line: 790,
	          column: 10
	        },
	        end: {
	          line: 790,
	          column: 29
	        }
	      },
	      '406': {
	        start: {
	          line: 791,
	          column: 10
	        },
	        end: {
	          line: 791,
	          column: 34
	        }
	      },
	      '407': {
	        start: {
	          line: 794,
	          column: 6
	        },
	        end: {
	          line: 800,
	          column: 8
	        }
	      },
	      '408': {
	        start: {
	          line: 795,
	          column: 10
	        },
	        end: {
	          line: 799,
	          column: 11
	        }
	      },
	      '409': {
	        start: {
	          line: 796,
	          column: 14
	        },
	        end: {
	          line: 796,
	          column: 48
	        }
	      },
	      '410': {
	        start: {
	          line: 797,
	          column: 17
	        },
	        end: {
	          line: 799,
	          column: 11
	        }
	      },
	      '411': {
	        start: {
	          line: 798,
	          column: 14
	        },
	        end: {
	          line: 798,
	          column: 49
	        }
	      },
	      '412': {
	        start: {
	          line: 802,
	          column: 6
	        },
	        end: {
	          line: 808,
	          column: 8
	        }
	      },
	      '413': {
	        start: {
	          line: 803,
	          column: 10
	        },
	        end: {
	          line: 807,
	          column: 11
	        }
	      },
	      '414': {
	        start: {
	          line: 804,
	          column: 14
	        },
	        end: {
	          line: 804,
	          column: 45
	        }
	      },
	      '415': {
	        start: {
	          line: 805,
	          column: 17
	        },
	        end: {
	          line: 807,
	          column: 11
	        }
	      },
	      '416': {
	        start: {
	          line: 806,
	          column: 14
	        },
	        end: {
	          line: 806,
	          column: 46
	        }
	      },
	      '417': {
	        start: {
	          line: 810,
	          column: 6
	        },
	        end: {
	          line: 812,
	          column: 8
	        }
	      },
	      '418': {
	        start: {
	          line: 814,
	          column: 6
	        },
	        end: {
	          line: 818,
	          column: 19
	        }
	      },
	      '419': {
	        start: {
	          line: 816,
	          column: 10
	        },
	        end: {
	          line: 816,
	          column: 37
	        }
	      },
	      '420': {
	        start: {
	          line: 817,
	          column: 10
	        },
	        end: {
	          line: 817,
	          column: 66
	        }
	      },
	      '421': {
	        start: {
	          line: 820,
	          column: 6
	        },
	        end: {
	          line: 822,
	          column: 19
	        }
	      },
	      '422': {
	        start: {
	          line: 821,
	          column: 10
	        },
	        end: {
	          line: 821,
	          column: 63
	        }
	      },
	      '423': {
	        start: {
	          line: 824,
	          column: 6
	        },
	        end: {
	          line: 832,
	          column: 19
	        }
	      },
	      '424': {
	        start: {
	          line: 825,
	          column: 34
	        },
	        end: {
	          line: 825,
	          column: 63
	        }
	      },
	      '425': {
	        start: {
	          line: 826,
	          column: 10
	        },
	        end: {
	          line: 831,
	          column: 11
	        }
	      },
	      '426': {
	        start: {
	          line: 834,
	          column: 6
	        },
	        end: {
	          line: 844,
	          column: 8
	        }
	      },
	      '427': {
	        start: {
	          line: 835,
	          column: 10
	        },
	        end: {
	          line: 843,
	          column: 11
	        }
	      },
	      '428': {
	        start: {
	          line: 838,
	          column: 14
	        },
	        end: {
	          line: 842,
	          column: 15
	        }
	      },
	      '429': {
	        start: {
	          line: 839,
	          column: 18
	        },
	        end: {
	          line: 839,
	          column: 61
	        }
	      },
	      '430': {
	        start: {
	          line: 840,
	          column: 21
	        },
	        end: {
	          line: 842,
	          column: 15
	        }
	      },
	      '431': {
	        start: {
	          line: 841,
	          column: 18
	        },
	        end: {
	          line: 841,
	          column: 62
	        }
	      },
	      '432': {
	        start: {
	          line: 846,
	          column: 6
	        },
	        end: {
	          line: 852,
	          column: 8
	        }
	      },
	      '433': {
	        start: {
	          line: 847,
	          column: 10
	        },
	        end: {
	          line: 851,
	          column: 11
	        }
	      },
	      '434': {
	        start: {
	          line: 848,
	          column: 14
	        },
	        end: {
	          line: 848,
	          column: 45
	        }
	      },
	      '435': {
	        start: {
	          line: 849,
	          column: 17
	        },
	        end: {
	          line: 851,
	          column: 11
	        }
	      },
	      '436': {
	        start: {
	          line: 850,
	          column: 14
	        },
	        end: {
	          line: 850,
	          column: 46
	        }
	      },
	      '437': {
	        start: {
	          line: 854,
	          column: 6
	        },
	        end: {
	          line: 860,
	          column: 8
	        }
	      },
	      '438': {
	        start: {
	          line: 855,
	          column: 10
	        },
	        end: {
	          line: 859,
	          column: 11
	        }
	      },
	      '439': {
	        start: {
	          line: 856,
	          column: 14
	        },
	        end: {
	          line: 856,
	          column: 46
	        }
	      },
	      '440': {
	        start: {
	          line: 857,
	          column: 17
	        },
	        end: {
	          line: 859,
	          column: 11
	        }
	      },
	      '441': {
	        start: {
	          line: 858,
	          column: 14
	        },
	        end: {
	          line: 858,
	          column: 47
	        }
	      },
	      '442': {
	        start: {
	          line: 862,
	          column: 6
	        },
	        end: {
	          line: 868,
	          column: 8
	        }
	      },
	      '443': {
	        start: {
	          line: 863,
	          column: 10
	        },
	        end: {
	          line: 867,
	          column: 11
	        }
	      },
	      '444': {
	        start: {
	          line: 864,
	          column: 14
	        },
	        end: {
	          line: 864,
	          column: 41
	        }
	      },
	      '445': {
	        start: {
	          line: 865,
	          column: 17
	        },
	        end: {
	          line: 867,
	          column: 11
	        }
	      },
	      '446': {
	        start: {
	          line: 866,
	          column: 14
	        },
	        end: {
	          line: 866,
	          column: 42
	        }
	      },
	      '447': {
	        start: {
	          line: 870,
	          column: 6
	        },
	        end: {
	          line: 876,
	          column: 8
	        }
	      },
	      '448': {
	        start: {
	          line: 871,
	          column: 10
	        },
	        end: {
	          line: 875,
	          column: 11
	        }
	      },
	      '449': {
	        start: {
	          line: 872,
	          column: 14
	        },
	        end: {
	          line: 872,
	          column: 52
	        }
	      },
	      '450': {
	        start: {
	          line: 873,
	          column: 17
	        },
	        end: {
	          line: 875,
	          column: 11
	        }
	      },
	      '451': {
	        start: {
	          line: 874,
	          column: 14
	        },
	        end: {
	          line: 874,
	          column: 53
	        }
	      },
	      '452': {
	        start: {
	          line: 878,
	          column: 6
	        },
	        end: {
	          line: 878,
	          column: 49
	        }
	      },
	      '453': {
	        start: {
	          line: 880,
	          column: 6
	        },
	        end: {
	          line: 880,
	          column: 72
	        }
	      },
	      '454': {
	        start: {
	          line: 884,
	          column: 6
	        },
	        end: {
	          line: 887,
	          column: 7
	        }
	      },
	      '455': {
	        start: {
	          line: 885,
	          column: 10
	        },
	        end: {
	          line: 885,
	          column: 36
	        }
	      },
	      '456': {
	        start: {
	          line: 886,
	          column: 10
	        },
	        end: {
	          line: 886,
	          column: 36
	        }
	      },
	      '457': {
	        start: {
	          line: 891,
	          column: 4
	        },
	        end: {
	          line: 891,
	          column: 52
	        }
	      },
	      '458': {
	        start: {
	          line: 892,
	          column: 4
	        },
	        end: {
	          line: 892,
	          column: 39
	        }
	      },
	      '459': {
	        start: {
	          line: 901,
	          column: 6
	        },
	        end: {
	          line: 904,
	          column: 7
	        }
	      },
	      '460': {
	        start: {
	          line: 902,
	          column: 10
	        },
	        end: {
	          line: 902,
	          column: 46
	        }
	      },
	      '461': {
	        start: {
	          line: 903,
	          column: 10
	        },
	        end: {
	          line: 903,
	          column: 17
	        }
	      },
	      '462': {
	        start: {
	          line: 906,
	          column: 6
	        },
	        end: {
	          line: 908,
	          column: 7
	        }
	      },
	      '463': {
	        start: {
	          line: 907,
	          column: 10
	        },
	        end: {
	          line: 907,
	          column: 43
	        }
	      },
	      '464': {
	        start: {
	          line: 910,
	          column: 6
	        },
	        end: {
	          line: 910,
	          column: 42
	        }
	      },
	      '465': {
	        start: {
	          line: 914,
	          column: 4
	        },
	        end: {
	          line: 933,
	          column: 5
	        }
	      },
	      '466': {
	        start: {
	          line: 916,
	          column: 8
	        },
	        end: {
	          line: 916,
	          column: 99
	        }
	      },
	      '467': {
	        start: {
	          line: 918,
	          column: 8
	        },
	        end: {
	          line: 918,
	          column: 110
	        }
	      },
	      '468': {
	        start: {
	          line: 920,
	          column: 8
	        },
	        end: {
	          line: 920,
	          column: 115
	        }
	      },
	      '469': {
	        start: {
	          line: 922,
	          column: 8
	        },
	        end: {
	          line: 922,
	          column: 108
	        }
	      },
	      '470': {
	        start: {
	          line: 924,
	          column: 8
	        },
	        end: {
	          line: 924,
	          column: 119
	        }
	      },
	      '471': {
	        start: {
	          line: 926,
	          column: 8
	        },
	        end: {
	          line: 926,
	          column: 124
	        }
	      },
	      '472': {
	        start: {
	          line: 928,
	          column: 8
	        },
	        end: {
	          line: 928,
	          column: 129
	        }
	      },
	      '473': {
	        start: {
	          line: 930,
	          column: 8
	        },
	        end: {
	          line: 930,
	          column: 96
	        }
	      },
	      '474': {
	        start: {
	          line: 932,
	          column: 8
	        },
	        end: {
	          line: 932,
	          column: 21
	        }
	      },
	      '475': {
	        start: {
	          line: 937,
	          column: 4
	        },
	        end: {
	          line: 937,
	          column: 30
	        }
	      },
	      '476': {
	        start: {
	          line: 938,
	          column: 4
	        },
	        end: {
	          line: 938,
	          column: 41
	        }
	      },
	      '477': {
	        start: {
	          line: 939,
	          column: 4
	        },
	        end: {
	          line: 939,
	          column: 30
	        }
	      },
	      '478': {
	        start: {
	          line: 943,
	          column: 4
	        },
	        end: {
	          line: 945,
	          column: 5
	        }
	      },
	      '479': {
	        start: {
	          line: 944,
	          column: 8
	        },
	        end: {
	          line: 944,
	          column: 20
	        }
	      },
	      '480': {
	        start: {
	          line: 947,
	          column: 21
	        },
	        end: {
	          line: 947,
	          column: 26
	        }
	      },
	      '481': {
	        start: {
	          line: 948,
	          column: 4
	        },
	        end: {
	          line: 951,
	          column: 5
	        }
	      },
	      '482': {
	        start: {
	          line: 949,
	          column: 8
	        },
	        end: {
	          line: 949,
	          column: 26
	        }
	      },
	      '483': {
	        start: {
	          line: 950,
	          column: 8
	        },
	        end: {
	          line: 950,
	          column: 24
	        }
	      },
	      '484': {
	        start: {
	          line: 953,
	          column: 16
	        },
	        end: {
	          line: 953,
	          column: 44
	        }
	      },
	      '485': {
	        start: {
	          line: 954,
	          column: 18
	        },
	        end: {
	          line: 954,
	          column: 63
	        }
	      },
	      '486': {
	        start: {
	          line: 955,
	          column: 18
	        },
	        end: {
	          line: 955,
	          column: 73
	        }
	      },
	      '487': {
	        start: {
	          line: 957,
	          column: 4
	        },
	        end: {
	          line: 957,
	          column: 40
	        }
	      },
	      '488': {
	        start: {
	          line: 957,
	          column: 20
	        },
	        end: {
	          line: 957,
	          column: 40
	        }
	      },
	      '489': {
	        start: {
	          line: 958,
	          column: 4
	        },
	        end: {
	          line: 958,
	          column: 46
	        }
	      },
	      '490': {
	        start: {
	          line: 958,
	          column: 22
	        },
	        end: {
	          line: 958,
	          column: 46
	        }
	      },
	      '491': {
	        start: {
	          line: 959,
	          column: 4
	        },
	        end: {
	          line: 959,
	          column: 46
	        }
	      },
	      '492': {
	        start: {
	          line: 959,
	          column: 22
	        },
	        end: {
	          line: 959,
	          column: 46
	        }
	      },
	      '493': {
	        start: {
	          line: 961,
	          column: 4
	        },
	        end: {
	          line: 961,
	          column: 75
	        }
	      },
	      '494': {
	        start: {
	          line: 966,
	          column: 4
	        },
	        end: {
	          line: 966,
	          column: 69
	        }
	      },
	      '495': {
	        start: {
	          line: 967,
	          column: 4
	        },
	        end: {
	          line: 967,
	          column: 63
	        }
	      },
	      '496': {
	        start: {
	          line: 969,
	          column: 4
	        },
	        end: {
	          line: 969,
	          column: 47
	        }
	      },
	      '497': {
	        start: {
	          line: 971,
	          column: 4
	        },
	        end: {
	          line: 975,
	          column: 5
	        }
	      },
	      '498': {
	        start: {
	          line: 972,
	          column: 8
	        },
	        end: {
	          line: 972,
	          column: 54
	        }
	      },
	      '499': {
	        start: {
	          line: 973,
	          column: 11
	        },
	        end: {
	          line: 975,
	          column: 5
	        }
	      },
	      '500': {
	        start: {
	          line: 974,
	          column: 8
	        },
	        end: {
	          line: 974,
	          column: 27
	        }
	      },
	      '501': {
	        start: {
	          line: 980,
	          column: 0
	        },
	        end: {
	          line: 980,
	          column: 47
	        }
	      },
	      '502': {
	        start: {
	          line: 981,
	          column: 0
	        },
	        end: {
	          line: 981,
	          column: 52
	        }
	      },
	      '503': {
	        start: {
	          line: 982,
	          column: 0
	        },
	        end: {
	          line: 982,
	          column: 55
	        }
	      },
	      '504': {
	        start: {
	          line: 983,
	          column: 0
	        },
	        end: {
	          line: 983,
	          column: 120
	        }
	      },
	      '505': {
	        start: {
	          line: 985,
	          column: 0
	        },
	        end: {
	          line: 987,
	          column: 1
	        }
	      },
	      '506': {
	        start: {
	          line: 986,
	          column: 4
	        },
	        end: {
	          line: 986,
	          column: 70
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 28,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 28,
	            column: 31
	          },
	          end: {
	            line: 64,
	            column: 3
	          }
	        },
	        line: 28
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 66,
	            column: 2
	          },
	          end: {
	            line: 66,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 66,
	            column: 18
	          },
	          end: {
	            line: 116,
	            column: 3
	          }
	        },
	        line: 66
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 99,
	            column: 35
	          },
	          end: {
	            line: 99,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 99,
	            column: 53
	          },
	          end: {
	            line: 104,
	            column: 11
	          }
	        },
	        line: 99
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 111,
	            column: 10
	          },
	          end: {
	            line: 111,
	            column: 11
	          }
	        },
	        loc: {
	          start: {
	            line: 111,
	            column: 23
	          },
	          end: {
	            line: 113,
	            column: 11
	          }
	        },
	        line: 111
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 118,
	            column: 2
	          },
	          end: {
	            line: 118,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 118,
	            column: 32
	          },
	          end: {
	            line: 211,
	            column: 3
	          }
	        },
	        line: 118
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 122,
	            column: 35
	          },
	          end: {
	            line: 122,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 122,
	            column: 53
	          },
	          end: {
	            line: 124,
	            column: 5
	          }
	        },
	        line: 122
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 126,
	            column: 30
	          },
	          end: {
	            line: 126,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 126,
	            column: 42
	          },
	          end: {
	            line: 134,
	            column: 5
	          }
	        },
	        line: 126
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 136,
	            column: 31
	          },
	          end: {
	            line: 136,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 136,
	            column: 43
	          },
	          end: {
	            line: 139,
	            column: 5
	          }
	        },
	        line: 136
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 141,
	            column: 30
	          },
	          end: {
	            line: 141,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 141,
	            column: 42
	          },
	          end: {
	            line: 144,
	            column: 5
	          }
	        },
	        line: 141
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 146,
	            column: 30
	          },
	          end: {
	            line: 146,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 146,
	            column: 42
	          },
	          end: {
	            line: 149,
	            column: 5
	          }
	        },
	        line: 146
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 151,
	            column: 39
	          },
	          end: {
	            line: 151,
	            column: 40
	          }
	        },
	        loc: {
	          start: {
	            line: 151,
	            column: 51
	          },
	          end: {
	            line: 153,
	            column: 5
	          }
	        },
	        line: 151
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 155,
	            column: 39
	          },
	          end: {
	            line: 155,
	            column: 40
	          }
	        },
	        loc: {
	          start: {
	            line: 155,
	            column: 51
	          },
	          end: {
	            line: 162,
	            column: 5
	          }
	        },
	        line: 155
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 164,
	            column: 45
	          },
	          end: {
	            line: 164,
	            column: 46
	          }
	        },
	        loc: {
	          start: {
	            line: 164,
	            column: 57
	          },
	          end: {
	            line: 166,
	            column: 5
	          }
	        },
	        line: 164
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 168,
	            column: 42
	          },
	          end: {
	            line: 168,
	            column: 43
	          }
	        },
	        loc: {
	          start: {
	            line: 168,
	            column: 54
	          },
	          end: {
	            line: 170,
	            column: 5
	          }
	        },
	        line: 168
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 172,
	            column: 39
	          },
	          end: {
	            line: 172,
	            column: 40
	          }
	        },
	        loc: {
	          start: {
	            line: 172,
	            column: 51
	          },
	          end: {
	            line: 178,
	            column: 5
	          }
	        },
	        line: 172
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 180,
	            column: 50
	          },
	          end: {
	            line: 180,
	            column: 51
	          }
	        },
	        loc: {
	          start: {
	            line: 180,
	            column: 62
	          },
	          end: {
	            line: 182,
	            column: 5
	          }
	        },
	        line: 180
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 184,
	            column: 47
	          },
	          end: {
	            line: 184,
	            column: 48
	          }
	        },
	        loc: {
	          start: {
	            line: 184,
	            column: 59
	          },
	          end: {
	            line: 186,
	            column: 5
	          }
	        },
	        line: 184
	      },
	      '17': {
	        name: '(anonymous_17)',
	        decl: {
	          start: {
	            line: 188,
	            column: 39
	          },
	          end: {
	            line: 188,
	            column: 40
	          }
	        },
	        loc: {
	          start: {
	            line: 188,
	            column: 55
	          },
	          end: {
	            line: 190,
	            column: 5
	          }
	        },
	        line: 188
	      },
	      '18': {
	        name: '(anonymous_18)',
	        decl: {
	          start: {
	            line: 192,
	            column: 35
	          },
	          end: {
	            line: 192,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 192,
	            column: 67
	          },
	          end: {
	            line: 194,
	            column: 5
	          }
	        },
	        line: 192
	      },
	      '19': {
	        name: '(anonymous_19)',
	        decl: {
	          start: {
	            line: 196,
	            column: 30
	          },
	          end: {
	            line: 196,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 196,
	            column: 42
	          },
	          end: {
	            line: 198,
	            column: 5
	          }
	        },
	        line: 196
	      },
	      '20': {
	        name: '(anonymous_20)',
	        decl: {
	          start: {
	            line: 200,
	            column: 32
	          },
	          end: {
	            line: 200,
	            column: 33
	          }
	        },
	        loc: {
	          start: {
	            line: 200,
	            column: 44
	          },
	          end: {
	            line: 202,
	            column: 5
	          }
	        },
	        line: 200
	      },
	      '21': {
	        name: '(anonymous_21)',
	        decl: {
	          start: {
	            line: 204,
	            column: 33
	          },
	          end: {
	            line: 204,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 204,
	            column: 45
	          },
	          end: {
	            line: 206,
	            column: 5
	          }
	        },
	        line: 204
	      },
	      '22': {
	        name: '(anonymous_22)',
	        decl: {
	          start: {
	            line: 208,
	            column: 32
	          },
	          end: {
	            line: 208,
	            column: 33
	          }
	        },
	        loc: {
	          start: {
	            line: 208,
	            column: 48
	          },
	          end: {
	            line: 210,
	            column: 5
	          }
	        },
	        line: 208
	      },
	      '23': {
	        name: '(anonymous_23)',
	        decl: {
	          start: {
	            line: 213,
	            column: 2
	          },
	          end: {
	            line: 213,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 213,
	            column: 23
	          },
	          end: {
	            line: 304,
	            column: 3
	          }
	        },
	        line: 213
	      },
	      '24': {
	        name: '(anonymous_24)',
	        decl: {
	          start: {
	            line: 229,
	            column: 30
	          },
	          end: {
	            line: 229,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 229,
	            column: 36
	          },
	          end: {
	            line: 240,
	            column: 5
	          }
	        },
	        line: 229
	      },
	      '25': {
	        name: '(anonymous_25)',
	        decl: {
	          start: {
	            line: 233,
	            column: 44
	          },
	          end: {
	            line: 233,
	            column: 45
	          }
	        },
	        loc: {
	          start: {
	            line: 233,
	            column: 60
	          },
	          end: {
	            line: 235,
	            column: 13
	          }
	        },
	        line: 233
	      },
	      '26': {
	        name: '(anonymous_26)',
	        decl: {
	          start: {
	            line: 236,
	            column: 66
	          },
	          end: {
	            line: 236,
	            column: 67
	          }
	        },
	        loc: {
	          start: {
	            line: 236,
	            column: 85
	          },
	          end: {
	            line: 238,
	            column: 13
	          }
	        },
	        line: 236
	      },
	      '27': {
	        name: '(anonymous_27)',
	        decl: {
	          start: {
	            line: 241,
	            column: 28
	          },
	          end: {
	            line: 241,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 241,
	            column: 36
	          },
	          end: {
	            line: 252,
	            column: 5
	          }
	        },
	        line: 241
	      },
	      '28': {
	        name: '(anonymous_28)',
	        decl: {
	          start: {
	            line: 245,
	            column: 44
	          },
	          end: {
	            line: 245,
	            column: 45
	          }
	        },
	        loc: {
	          start: {
	            line: 245,
	            column: 60
	          },
	          end: {
	            line: 247,
	            column: 13
	          }
	        },
	        line: 245
	      },
	      '29': {
	        name: '(anonymous_29)',
	        decl: {
	          start: {
	            line: 248,
	            column: 38
	          },
	          end: {
	            line: 248,
	            column: 39
	          }
	        },
	        loc: {
	          start: {
	            line: 248,
	            column: 57
	          },
	          end: {
	            line: 250,
	            column: 13
	          }
	        },
	        line: 248
	      },
	      '30': {
	        name: '(anonymous_30)',
	        decl: {
	          start: {
	            line: 253,
	            column: 29
	          },
	          end: {
	            line: 253,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 253,
	            column: 37
	          },
	          end: {
	            line: 264,
	            column: 5
	          }
	        },
	        line: 253
	      },
	      '31': {
	        name: '(anonymous_31)',
	        decl: {
	          start: {
	            line: 257,
	            column: 44
	          },
	          end: {
	            line: 257,
	            column: 45
	          }
	        },
	        loc: {
	          start: {
	            line: 257,
	            column: 60
	          },
	          end: {
	            line: 259,
	            column: 13
	          }
	        },
	        line: 257
	      },
	      '32': {
	        name: '(anonymous_32)',
	        decl: {
	          start: {
	            line: 260,
	            column: 37
	          },
	          end: {
	            line: 260,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 260,
	            column: 56
	          },
	          end: {
	            line: 262,
	            column: 13
	          }
	        },
	        line: 260
	      },
	      '33': {
	        name: '(anonymous_33)',
	        decl: {
	          start: {
	            line: 265,
	            column: 36
	          },
	          end: {
	            line: 265,
	            column: 37
	          }
	        },
	        loc: {
	          start: {
	            line: 265,
	            column: 44
	          },
	          end: {
	            line: 287,
	            column: 5
	          }
	        },
	        line: 265
	      },
	      '34': {
	        name: '(anonymous_34)',
	        decl: {
	          start: {
	            line: 280,
	            column: 44
	          },
	          end: {
	            line: 280,
	            column: 45
	          }
	        },
	        loc: {
	          start: {
	            line: 280,
	            column: 60
	          },
	          end: {
	            line: 282,
	            column: 13
	          }
	        },
	        line: 280
	      },
	      '35': {
	        name: '(anonymous_35)',
	        decl: {
	          start: {
	            line: 283,
	            column: 54
	          },
	          end: {
	            line: 283,
	            column: 55
	          }
	        },
	        loc: {
	          start: {
	            line: 283,
	            column: 73
	          },
	          end: {
	            line: 285,
	            column: 13
	          }
	        },
	        line: 283
	      },
	      '36': {
	        name: '(anonymous_36)',
	        decl: {
	          start: {
	            line: 288,
	            column: 38
	          },
	          end: {
	            line: 288,
	            column: 39
	          }
	        },
	        loc: {
	          start: {
	            line: 288,
	            column: 46
	          },
	          end: {
	            line: 290,
	            column: 5
	          }
	        },
	        line: 288
	      },
	      '37': {
	        name: '(anonymous_37)',
	        decl: {
	          start: {
	            line: 291,
	            column: 31
	          },
	          end: {
	            line: 291,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 291,
	            column: 37
	          },
	          end: {
	            line: 303,
	            column: 5
	          }
	        },
	        line: 291
	      },
	      '38': {
	        name: '(anonymous_38)',
	        decl: {
	          start: {
	            line: 296,
	            column: 44
	          },
	          end: {
	            line: 296,
	            column: 45
	          }
	        },
	        loc: {
	          start: {
	            line: 296,
	            column: 60
	          },
	          end: {
	            line: 298,
	            column: 13
	          }
	        },
	        line: 296
	      },
	      '39': {
	        name: '(anonymous_39)',
	        decl: {
	          start: {
	            line: 299,
	            column: 36
	          },
	          end: {
	            line: 299,
	            column: 37
	          }
	        },
	        loc: {
	          start: {
	            line: 299,
	            column: 55
	          },
	          end: {
	            line: 301,
	            column: 13
	          }
	        },
	        line: 299
	      },
	      '40': {
	        name: '(anonymous_40)',
	        decl: {
	          start: {
	            line: 306,
	            column: 2
	          },
	          end: {
	            line: 306,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 306,
	            column: 23
	          },
	          end: {
	            line: 317,
	            column: 3
	          }
	        },
	        line: 306
	      },
	      '41': {
	        name: '(anonymous_41)',
	        decl: {
	          start: {
	            line: 319,
	            column: 2
	          },
	          end: {
	            line: 319,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 319,
	            column: 23
	          },
	          end: {
	            line: 356,
	            column: 3
	          }
	        },
	        line: 319
	      },
	      '42': {
	        name: '(anonymous_42)',
	        decl: {
	          start: {
	            line: 326,
	            column: 50
	          },
	          end: {
	            line: 326,
	            column: 51
	          }
	        },
	        loc: {
	          start: {
	            line: 326,
	            column: 61
	          },
	          end: {
	            line: 346,
	            column: 11
	          }
	        },
	        line: 326
	      },
	      '43': {
	        name: '(anonymous_43)',
	        decl: {
	          start: {
	            line: 332,
	            column: 44
	          },
	          end: {
	            line: 332,
	            column: 45
	          }
	        },
	        loc: {
	          start: {
	            line: 332,
	            column: 62
	          },
	          end: {
	            line: 336,
	            column: 19
	          }
	        },
	        line: 332
	      },
	      '44': {
	        name: '(anonymous_44)',
	        decl: {
	          start: {
	            line: 343,
	            column: 65
	          },
	          end: {
	            line: 343,
	            column: 66
	          }
	        },
	        loc: {
	          start: {
	            line: 343,
	            column: 79
	          },
	          end: {
	            line: 343,
	            column: 82
	          }
	        },
	        line: 343
	      },
	      '45': {
	        name: '(anonymous_45)',
	        decl: {
	          start: {
	            line: 358,
	            column: 2
	          },
	          end: {
	            line: 358,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 358,
	            column: 9
	          },
	          end: {
	            line: 372,
	            column: 3
	          }
	        },
	        line: 358
	      },
	      '46': {
	        name: '(anonymous_46)',
	        decl: {
	          start: {
	            line: 374,
	            column: 2
	          },
	          end: {
	            line: 374,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 374,
	            column: 9
	          },
	          end: {
	            line: 387,
	            column: 3
	          }
	        },
	        line: 374
	      },
	      '47': {
	        name: '(anonymous_47)',
	        decl: {
	          start: {
	            line: 389,
	            column: 2
	          },
	          end: {
	            line: 389,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 389,
	            column: 18
	          },
	          end: {
	            line: 394,
	            column: 3
	          }
	        },
	        line: 389
	      },
	      '48': {
	        name: '(anonymous_48)',
	        decl: {
	          start: {
	            line: 396,
	            column: 2
	          },
	          end: {
	            line: 396,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 396,
	            column: 33
	          },
	          end: {
	            line: 406,
	            column: 3
	          }
	        },
	        line: 396
	      },
	      '49': {
	        name: '(anonymous_49)',
	        decl: {
	          start: {
	            line: 408,
	            column: 2
	          },
	          end: {
	            line: 408,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 408,
	            column: 16
	          },
	          end: {
	            line: 423,
	            column: 3
	          }
	        },
	        line: 408
	      },
	      '50': {
	        name: '(anonymous_50)',
	        decl: {
	          start: {
	            line: 425,
	            column: 2
	          },
	          end: {
	            line: 425,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 425,
	            column: 22
	          },
	          end: {
	            line: 438,
	            column: 3
	          }
	        },
	        line: 425
	      },
	      '51': {
	        name: '(anonymous_51)',
	        decl: {
	          start: {
	            line: 443,
	            column: 2
	          },
	          end: {
	            line: 443,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 443,
	            column: 22
	          },
	          end: {
	            line: 766,
	            column: 3
	          }
	        },
	        line: 443
	      },
	      '52': {
	        name: '(anonymous_52)',
	        decl: {
	          start: {
	            line: 448,
	            column: 10
	          },
	          end: {
	            line: 448,
	            column: 11
	          }
	        },
	        loc: {
	          start: {
	            line: 448,
	            column: 27
	          },
	          end: {
	            line: 476,
	            column: 11
	          }
	        },
	        line: 448
	      },
	      '53': {
	        name: '(anonymous_53)',
	        decl: {
	          start: {
	            line: 481,
	            column: 10
	          },
	          end: {
	            line: 481,
	            column: 11
	          }
	        },
	        loc: {
	          start: {
	            line: 481,
	            column: 27
	          },
	          end: {
	            line: 483,
	            column: 11
	          }
	        },
	        line: 481
	      },
	      '54': {
	        name: '(anonymous_54)',
	        decl: {
	          start: {
	            line: 488,
	            column: 10
	          },
	          end: {
	            line: 488,
	            column: 11
	          }
	        },
	        loc: {
	          start: {
	            line: 488,
	            column: 22
	          },
	          end: {
	            line: 494,
	            column: 11
	          }
	        },
	        line: 488
	      },
	      '55': {
	        name: '(anonymous_55)',
	        decl: {
	          start: {
	            line: 499,
	            column: 10
	          },
	          end: {
	            line: 499,
	            column: 11
	          }
	        },
	        loc: {
	          start: {
	            line: 499,
	            column: 22
	          },
	          end: {
	            line: 505,
	            column: 11
	          }
	        },
	        line: 499
	      },
	      '56': {
	        name: '(anonymous_56)',
	        decl: {
	          start: {
	            line: 510,
	            column: 10
	          },
	          end: {
	            line: 510,
	            column: 11
	          }
	        },
	        loc: {
	          start: {
	            line: 510,
	            column: 22
	          },
	          end: {
	            line: 513,
	            column: 11
	          }
	        },
	        line: 510
	      },
	      '57': {
	        name: '(anonymous_57)',
	        decl: {
	          start: {
	            line: 518,
	            column: 10
	          },
	          end: {
	            line: 518,
	            column: 11
	          }
	        },
	        loc: {
	          start: {
	            line: 518,
	            column: 27
	          },
	          end: {
	            line: 520,
	            column: 11
	          }
	        },
	        line: 518
	      },
	      '58': {
	        name: '(anonymous_58)',
	        decl: {
	          start: {
	            line: 525,
	            column: 10
	          },
	          end: {
	            line: 525,
	            column: 11
	          }
	        },
	        loc: {
	          start: {
	            line: 525,
	            column: 27
	          },
	          end: {
	            line: 527,
	            column: 11
	          }
	        },
	        line: 525
	      },
	      '59': {
	        name: '(anonymous_59)',
	        decl: {
	          start: {
	            line: 532,
	            column: 10
	          },
	          end: {
	            line: 532,
	            column: 11
	          }
	        },
	        loc: {
	          start: {
	            line: 532,
	            column: 27
	          },
	          end: {
	            line: 534,
	            column: 11
	          }
	        },
	        line: 532
	      },
	      '60': {
	        name: '(anonymous_60)',
	        decl: {
	          start: {
	            line: 539,
	            column: 10
	          },
	          end: {
	            line: 539,
	            column: 11
	          }
	        },
	        loc: {
	          start: {
	            line: 539,
	            column: 27
	          },
	          end: {
	            line: 541,
	            column: 11
	          }
	        },
	        line: 539
	      },
	      '61': {
	        name: '(anonymous_61)',
	        decl: {
	          start: {
	            line: 546,
	            column: 10
	          },
	          end: {
	            line: 546,
	            column: 11
	          }
	        },
	        loc: {
	          start: {
	            line: 546,
	            column: 27
	          },
	          end: {
	            line: 549,
	            column: 11
	          }
	        },
	        line: 546
	      },
	      '62': {
	        name: '(anonymous_62)',
	        decl: {
	          start: {
	            line: 557,
	            column: 26
	          },
	          end: {
	            line: 557,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 557,
	            column: 38
	          },
	          end: {
	            line: 562,
	            column: 7
	          }
	        },
	        line: 557
	      },
	      '63': {
	        name: '(anonymous_63)',
	        decl: {
	          start: {
	            line: 564,
	            column: 27
	          },
	          end: {
	            line: 564,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 564,
	            column: 39
	          },
	          end: {
	            line: 569,
	            column: 7
	          }
	        },
	        line: 564
	      },
	      '64': {
	        name: '(anonymous_64)',
	        decl: {
	          start: {
	            line: 571,
	            column: 26
	          },
	          end: {
	            line: 571,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 571,
	            column: 38
	          },
	          end: {
	            line: 573,
	            column: 7
	          }
	        },
	        line: 571
	      },
	      '65': {
	        name: '(anonymous_65)',
	        decl: {
	          start: {
	            line: 576,
	            column: 26
	          },
	          end: {
	            line: 576,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 576,
	            column: 38
	          },
	          end: {
	            line: 615,
	            column: 7
	          }
	        },
	        line: 576
	      },
	      '66': {
	        name: '(anonymous_66)',
	        decl: {
	          start: {
	            line: 606,
	            column: 14
	          },
	          end: {
	            line: 606,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 606,
	            column: 26
	          },
	          end: {
	            line: 609,
	            column: 15
	          }
	        },
	        line: 606
	      },
	      '67': {
	        name: '(anonymous_67)',
	        decl: {
	          start: {
	            line: 610,
	            column: 14
	          },
	          end: {
	            line: 610,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 610,
	            column: 35
	          },
	          end: {
	            line: 614,
	            column: 15
	          }
	        },
	        line: 610
	      },
	      '68': {
	        name: '(anonymous_68)',
	        decl: {
	          start: {
	            line: 617,
	            column: 35
	          },
	          end: {
	            line: 617,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 617,
	            column: 47
	          },
	          end: {
	            line: 632,
	            column: 7
	          }
	        },
	        line: 617
	      },
	      '69': {
	        name: '(anonymous_69)',
	        decl: {
	          start: {
	            line: 638,
	            column: 41
	          },
	          end: {
	            line: 638,
	            column: 42
	          }
	        },
	        loc: {
	          start: {
	            line: 638,
	            column: 53
	          },
	          end: {
	            line: 640,
	            column: 7
	          }
	        },
	        line: 638
	      },
	      '70': {
	        name: '(anonymous_70)',
	        decl: {
	          start: {
	            line: 646,
	            column: 38
	          },
	          end: {
	            line: 646,
	            column: 39
	          }
	        },
	        loc: {
	          start: {
	            line: 646,
	            column: 50
	          },
	          end: {
	            line: 648,
	            column: 7
	          }
	        },
	        line: 646
	      },
	      '71': {
	        name: '(anonymous_71)',
	        decl: {
	          start: {
	            line: 650,
	            column: 35
	          },
	          end: {
	            line: 650,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 650,
	            column: 47
	          },
	          end: {
	            line: 687,
	            column: 7
	          }
	        },
	        line: 650
	      },
	      '72': {
	        name: '(anonymous_72)',
	        decl: {
	          start: {
	            line: 679,
	            column: 45
	          },
	          end: {
	            line: 679,
	            column: 46
	          }
	        },
	        loc: {
	          start: {
	            line: 679,
	            column: 57
	          },
	          end: {
	            line: 681,
	            column: 19
	          }
	        },
	        line: 679
	      },
	      '73': {
	        name: '(anonymous_73)',
	        decl: {
	          start: {
	            line: 689,
	            column: 46
	          },
	          end: {
	            line: 689,
	            column: 47
	          }
	        },
	        loc: {
	          start: {
	            line: 689,
	            column: 58
	          },
	          end: {
	            line: 691,
	            column: 7
	          }
	        },
	        line: 689
	      },
	      '74': {
	        name: '(anonymous_74)',
	        decl: {
	          start: {
	            line: 693,
	            column: 43
	          },
	          end: {
	            line: 693,
	            column: 44
	          }
	        },
	        loc: {
	          start: {
	            line: 693,
	            column: 55
	          },
	          end: {
	            line: 695,
	            column: 7
	          }
	        },
	        line: 693
	      },
	      '75': {
	        name: '(anonymous_75)',
	        decl: {
	          start: {
	            line: 697,
	            column: 35
	          },
	          end: {
	            line: 697,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 697,
	            column: 51
	          },
	          end: {
	            line: 705,
	            column: 7
	          }
	        },
	        line: 697
	      },
	      '76': {
	        name: '(anonymous_76)',
	        decl: {
	          start: {
	            line: 707,
	            column: 31
	          },
	          end: {
	            line: 707,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 707,
	            column: 57
	          },
	          end: {
	            line: 717,
	            column: 7
	          }
	        },
	        line: 707
	      },
	      '77': {
	        name: '(anonymous_77)',
	        decl: {
	          start: {
	            line: 719,
	            column: 26
	          },
	          end: {
	            line: 719,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 719,
	            column: 38
	          },
	          end: {
	            line: 723,
	            column: 7
	          }
	        },
	        line: 719
	      },
	      '78': {
	        name: '(anonymous_78)',
	        decl: {
	          start: {
	            line: 725,
	            column: 28
	          },
	          end: {
	            line: 725,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 725,
	            column: 40
	          },
	          end: {
	            line: 729,
	            column: 7
	          }
	        },
	        line: 725
	      },
	      '79': {
	        name: '(anonymous_79)',
	        decl: {
	          start: {
	            line: 731,
	            column: 29
	          },
	          end: {
	            line: 731,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 731,
	            column: 41
	          },
	          end: {
	            line: 733,
	            column: 7
	          }
	        },
	        line: 731
	      },
	      '80': {
	        name: '(anonymous_80)',
	        decl: {
	          start: {
	            line: 735,
	            column: 28
	          },
	          end: {
	            line: 735,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 735,
	            column: 44
	          },
	          end: {
	            line: 738,
	            column: 7
	          }
	        },
	        line: 735
	      },
	      '81': {
	        name: '(anonymous_81)',
	        decl: {
	          start: {
	            line: 768,
	            column: 2
	          },
	          end: {
	            line: 768,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 768,
	            column: 21
	          },
	          end: {
	            line: 888,
	            column: 3
	          }
	        },
	        line: 768
	      },
	      '82': {
	        name: '(anonymous_82)',
	        decl: {
	          start: {
	            line: 773,
	            column: 26
	          },
	          end: {
	            line: 773,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 773,
	            column: 38
	          },
	          end: {
	            line: 775,
	            column: 7
	          }
	        },
	        line: 773
	      },
	      '83': {
	        name: '(anonymous_83)',
	        decl: {
	          start: {
	            line: 777,
	            column: 27
	          },
	          end: {
	            line: 777,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 777,
	            column: 39
	          },
	          end: {
	            line: 779,
	            column: 7
	          }
	        },
	        line: 777
	      },
	      '84': {
	        name: '(anonymous_84)',
	        decl: {
	          start: {
	            line: 781,
	            column: 26
	          },
	          end: {
	            line: 781,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 781,
	            column: 38
	          },
	          end: {
	            line: 783,
	            column: 7
	          }
	        },
	        line: 781
	      },
	      '85': {
	        name: '(anonymous_85)',
	        decl: {
	          start: {
	            line: 785,
	            column: 26
	          },
	          end: {
	            line: 785,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 785,
	            column: 38
	          },
	          end: {
	            line: 787,
	            column: 7
	          }
	        },
	        line: 785
	      },
	      '86': {
	        name: '(anonymous_86)',
	        decl: {
	          start: {
	            line: 789,
	            column: 35
	          },
	          end: {
	            line: 789,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 789,
	            column: 47
	          },
	          end: {
	            line: 792,
	            column: 7
	          }
	        },
	        line: 789
	      },
	      '87': {
	        name: '(anonymous_87)',
	        decl: {
	          start: {
	            line: 794,
	            column: 41
	          },
	          end: {
	            line: 794,
	            column: 42
	          }
	        },
	        loc: {
	          start: {
	            line: 794,
	            column: 53
	          },
	          end: {
	            line: 800,
	            column: 7
	          }
	        },
	        line: 794
	      },
	      '88': {
	        name: '(anonymous_88)',
	        decl: {
	          start: {
	            line: 802,
	            column: 38
	          },
	          end: {
	            line: 802,
	            column: 39
	          }
	        },
	        loc: {
	          start: {
	            line: 802,
	            column: 50
	          },
	          end: {
	            line: 808,
	            column: 7
	          }
	        },
	        line: 802
	      },
	      '89': {
	        name: '(anonymous_89)',
	        decl: {
	          start: {
	            line: 810,
	            column: 35
	          },
	          end: {
	            line: 810,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 810,
	            column: 47
	          },
	          end: {
	            line: 812,
	            column: 7
	          }
	        },
	        line: 810
	      },
	      '90': {
	        name: '(anonymous_90)',
	        decl: {
	          start: {
	            line: 814,
	            column: 46
	          },
	          end: {
	            line: 814,
	            column: 47
	          }
	        },
	        loc: {
	          start: {
	            line: 814,
	            column: 58
	          },
	          end: {
	            line: 818,
	            column: 7
	          }
	        },
	        line: 814
	      },
	      '91': {
	        name: '(anonymous_91)',
	        decl: {
	          start: {
	            line: 820,
	            column: 43
	          },
	          end: {
	            line: 820,
	            column: 44
	          }
	        },
	        loc: {
	          start: {
	            line: 820,
	            column: 55
	          },
	          end: {
	            line: 822,
	            column: 7
	          }
	        },
	        line: 820
	      },
	      '92': {
	        name: '(anonymous_92)',
	        decl: {
	          start: {
	            line: 824,
	            column: 35
	          },
	          end: {
	            line: 824,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 824,
	            column: 51
	          },
	          end: {
	            line: 832,
	            column: 7
	          }
	        },
	        line: 824
	      },
	      '93': {
	        name: '(anonymous_93)',
	        decl: {
	          start: {
	            line: 834,
	            column: 31
	          },
	          end: {
	            line: 834,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 834,
	            column: 57
	          },
	          end: {
	            line: 844,
	            column: 7
	          }
	        },
	        line: 834
	      },
	      '94': {
	        name: '(anonymous_94)',
	        decl: {
	          start: {
	            line: 846,
	            column: 26
	          },
	          end: {
	            line: 846,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 846,
	            column: 38
	          },
	          end: {
	            line: 852,
	            column: 7
	          }
	        },
	        line: 846
	      },
	      '95': {
	        name: '(anonymous_95)',
	        decl: {
	          start: {
	            line: 854,
	            column: 28
	          },
	          end: {
	            line: 854,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 854,
	            column: 40
	          },
	          end: {
	            line: 860,
	            column: 7
	          }
	        },
	        line: 854
	      },
	      '96': {
	        name: '(anonymous_96)',
	        decl: {
	          start: {
	            line: 862,
	            column: 29
	          },
	          end: {
	            line: 862,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 862,
	            column: 41
	          },
	          end: {
	            line: 868,
	            column: 7
	          }
	        },
	        line: 862
	      },
	      '97': {
	        name: '(anonymous_97)',
	        decl: {
	          start: {
	            line: 870,
	            column: 28
	          },
	          end: {
	            line: 870,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 870,
	            column: 44
	          },
	          end: {
	            line: 876,
	            column: 7
	          }
	        },
	        line: 870
	      },
	      '98': {
	        name: '(anonymous_98)',
	        decl: {
	          start: {
	            line: 890,
	            column: 2
	          },
	          end: {
	            line: 890,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 890,
	            column: 25
	          },
	          end: {
	            line: 893,
	            column: 3
	          }
	        },
	        line: 890
	      },
	      '99': {
	        name: '(anonymous_99)',
	        decl: {
	          start: {
	            line: 895,
	            column: 2
	          },
	          end: {
	            line: 895,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 895,
	            column: 19
	          },
	          end: {
	            line: 898,
	            column: 3
	          }
	        },
	        line: 895
	      },
	      '100': {
	        name: '(anonymous_100)',
	        decl: {
	          start: {
	            line: 900,
	            column: 2
	          },
	          end: {
	            line: 900,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 900,
	            column: 22
	          },
	          end: {
	            line: 911,
	            column: 3
	          }
	        },
	        line: 900
	      },
	      '101': {
	        name: '(anonymous_101)',
	        decl: {
	          start: {
	            line: 913,
	            column: 2
	          },
	          end: {
	            line: 913,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 913,
	            column: 25
	          },
	          end: {
	            line: 934,
	            column: 3
	          }
	        },
	        line: 913
	      },
	      '102': {
	        name: '(anonymous_102)',
	        decl: {
	          start: {
	            line: 936,
	            column: 2
	          },
	          end: {
	            line: 936,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 936,
	            column: 16
	          },
	          end: {
	            line: 940,
	            column: 3
	          }
	        },
	        line: 936
	      },
	      '103': {
	        name: '(anonymous_103)',
	        decl: {
	          start: {
	            line: 942,
	            column: 2
	          },
	          end: {
	            line: 942,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 942,
	            column: 32
	          },
	          end: {
	            line: 962,
	            column: 3
	          }
	        },
	        line: 942
	      },
	      '104': {
	        name: '(anonymous_104)',
	        decl: {
	          start: {
	            line: 964,
	            column: 2
	          },
	          end: {
	            line: 964,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 964,
	            column: 23
	          },
	          end: {
	            line: 976,
	            column: 3
	          }
	        },
	        line: 964
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 40,
	            column: 4
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 40,
	            column: 4
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 40,
	            column: 4
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        }],
	        line: 40
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 40,
	            column: 7
	          },
	          end: {
	            line: 40,
	            column: 59
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 40,
	            column: 7
	          },
	          end: {
	            line: 40,
	            column: 38
	          }
	        }, {
	          start: {
	            line: 40,
	            column: 42
	          },
	          end: {
	            line: 40,
	            column: 59
	          }
	        }],
	        line: 40
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 68,
	            column: 6
	          },
	          end: {
	            line: 71,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 68,
	            column: 6
	          },
	          end: {
	            line: 71,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 68,
	            column: 6
	          },
	          end: {
	            line: 71,
	            column: 7
	          }
	        }],
	        line: 68
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 76,
	            column: 6
	          },
	          end: {
	            line: 80,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 76,
	            column: 6
	          },
	          end: {
	            line: 80,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 76,
	            column: 6
	          },
	          end: {
	            line: 80,
	            column: 7
	          }
	        }],
	        line: 76
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 76,
	            column: 10
	          },
	          end: {
	            line: 76,
	            column: 61
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 76,
	            column: 10
	          },
	          end: {
	            line: 76,
	            column: 37
	          }
	        }, {
	          start: {
	            line: 76,
	            column: 41
	          },
	          end: {
	            line: 76,
	            column: 61
	          }
	        }],
	        line: 76
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 78,
	            column: 13
	          },
	          end: {
	            line: 80,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 78,
	            column: 13
	          },
	          end: {
	            line: 80,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 78,
	            column: 13
	          },
	          end: {
	            line: 80,
	            column: 7
	          }
	        }],
	        line: 78
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 82,
	            column: 6
	          },
	          end: {
	            line: 86,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 82,
	            column: 6
	          },
	          end: {
	            line: 86,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 82,
	            column: 6
	          },
	          end: {
	            line: 86,
	            column: 7
	          }
	        }],
	        line: 82
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 82,
	            column: 10
	          },
	          end: {
	            line: 82,
	            column: 79
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 82,
	            column: 10
	          },
	          end: {
	            line: 82,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 82,
	            column: 50
	          },
	          end: {
	            line: 82,
	            column: 79
	          }
	        }],
	        line: 82
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 84,
	            column: 13
	          },
	          end: {
	            line: 86,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 84,
	            column: 13
	          },
	          end: {
	            line: 86,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 84,
	            column: 13
	          },
	          end: {
	            line: 86,
	            column: 7
	          }
	        }],
	        line: 84
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 93,
	            column: 6
	          },
	          end: {
	            line: 105,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 93,
	            column: 6
	          },
	          end: {
	            line: 105,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 93,
	            column: 6
	          },
	          end: {
	            line: 105,
	            column: 7
	          }
	        }],
	        line: 93
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 93,
	            column: 10
	          },
	          end: {
	            line: 93,
	            column: 62
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 93,
	            column: 10
	          },
	          end: {
	            line: 93,
	            column: 41
	          }
	        }, {
	          start: {
	            line: 93,
	            column: 45
	          },
	          end: {
	            line: 93,
	            column: 62
	          }
	        }],
	        line: 93
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 100,
	            column: 14
	          },
	          end: {
	            line: 103,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 100,
	            column: 14
	          },
	          end: {
	            line: 103,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 100,
	            column: 14
	          },
	          end: {
	            line: 103,
	            column: 15
	          }
	        }],
	        line: 100
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 118,
	            column: 20
	          },
	          end: {
	            line: 118,
	            column: 30
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 118,
	            column: 28
	          },
	          end: {
	            line: 118,
	            column: 30
	          }
	        }],
	        line: 118
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 127,
	            column: 8
	          },
	          end: {
	            line: 130,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 127,
	            column: 8
	          },
	          end: {
	            line: 130,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 127,
	            column: 8
	          },
	          end: {
	            line: 130,
	            column: 9
	          }
	        }],
	        line: 127
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 127,
	            column: 12
	          },
	          end: {
	            line: 127,
	            column: 97
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 127,
	            column: 12
	          },
	          end: {
	            line: 127,
	            column: 50
	          }
	        }, {
	          start: {
	            line: 127,
	            column: 54
	          },
	          end: {
	            line: 127,
	            column: 97
	          }
	        }],
	        line: 127
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 216,
	            column: 4
	          },
	          end: {
	            line: 227,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 216,
	            column: 4
	          },
	          end: {
	            line: 227,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 216,
	            column: 4
	          },
	          end: {
	            line: 227,
	            column: 5
	          }
	        }],
	        line: 216
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 218,
	            column: 6
	          },
	          end: {
	            line: 220,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 218,
	            column: 6
	          },
	          end: {
	            line: 220,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 218,
	            column: 6
	          },
	          end: {
	            line: 220,
	            column: 7
	          }
	        }],
	        line: 218
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 230,
	            column: 8
	          },
	          end: {
	            line: 239,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 230,
	            column: 8
	          },
	          end: {
	            line: 239,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 230,
	            column: 8
	          },
	          end: {
	            line: 239,
	            column: 9
	          }
	        }],
	        line: 230
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 230,
	            column: 12
	          },
	          end: {
	            line: 230,
	            column: 43
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 230,
	            column: 12
	          },
	          end: {
	            line: 230,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 230,
	            column: 28
	          },
	          end: {
	            line: 230,
	            column: 43
	          }
	        }],
	        line: 230
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 232,
	            column: 15
	          },
	          end: {
	            line: 239,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 232,
	            column: 15
	          },
	          end: {
	            line: 239,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 232,
	            column: 15
	          },
	          end: {
	            line: 239,
	            column: 9
	          }
	        }],
	        line: 232
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 232,
	            column: 18
	          },
	          end: {
	            line: 232,
	            column: 58
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 232,
	            column: 18
	          },
	          end: {
	            line: 232,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 232,
	            column: 31
	          },
	          end: {
	            line: 232,
	            column: 58
	          }
	        }],
	        line: 232
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 242,
	            column: 8
	          },
	          end: {
	            line: 251,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 242,
	            column: 8
	          },
	          end: {
	            line: 251,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 242,
	            column: 8
	          },
	          end: {
	            line: 251,
	            column: 9
	          }
	        }],
	        line: 242
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 242,
	            column: 12
	          },
	          end: {
	            line: 242,
	            column: 43
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 242,
	            column: 12
	          },
	          end: {
	            line: 242,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 242,
	            column: 28
	          },
	          end: {
	            line: 242,
	            column: 43
	          }
	        }],
	        line: 242
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 244,
	            column: 15
	          },
	          end: {
	            line: 251,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 244,
	            column: 15
	          },
	          end: {
	            line: 251,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 244,
	            column: 15
	          },
	          end: {
	            line: 251,
	            column: 9
	          }
	        }],
	        line: 244
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 244,
	            column: 18
	          },
	          end: {
	            line: 244,
	            column: 58
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 244,
	            column: 18
	          },
	          end: {
	            line: 244,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 244,
	            column: 31
	          },
	          end: {
	            line: 244,
	            column: 58
	          }
	        }],
	        line: 244
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 254,
	            column: 8
	          },
	          end: {
	            line: 263,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 254,
	            column: 8
	          },
	          end: {
	            line: 263,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 254,
	            column: 8
	          },
	          end: {
	            line: 263,
	            column: 9
	          }
	        }],
	        line: 254
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 254,
	            column: 12
	          },
	          end: {
	            line: 254,
	            column: 43
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 254,
	            column: 12
	          },
	          end: {
	            line: 254,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 254,
	            column: 28
	          },
	          end: {
	            line: 254,
	            column: 43
	          }
	        }],
	        line: 254
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 256,
	            column: 15
	          },
	          end: {
	            line: 263,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 256,
	            column: 15
	          },
	          end: {
	            line: 263,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 256,
	            column: 15
	          },
	          end: {
	            line: 263,
	            column: 9
	          }
	        }],
	        line: 256
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 256,
	            column: 18
	          },
	          end: {
	            line: 256,
	            column: 58
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 256,
	            column: 18
	          },
	          end: {
	            line: 256,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 256,
	            column: 31
	          },
	          end: {
	            line: 256,
	            column: 58
	          }
	        }],
	        line: 256
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 266,
	            column: 8
	          },
	          end: {
	            line: 286,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 266,
	            column: 8
	          },
	          end: {
	            line: 286,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 266,
	            column: 8
	          },
	          end: {
	            line: 286,
	            column: 9
	          }
	        }],
	        line: 266
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 266,
	            column: 12
	          },
	          end: {
	            line: 266,
	            column: 43
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 266,
	            column: 12
	          },
	          end: {
	            line: 266,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 266,
	            column: 28
	          },
	          end: {
	            line: 266,
	            column: 43
	          }
	        }],
	        line: 266
	      },
	      '31': {
	        loc: {
	          start: {
	            line: 268,
	            column: 12
	          },
	          end: {
	            line: 273,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 268,
	            column: 12
	          },
	          end: {
	            line: 273,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 268,
	            column: 12
	          },
	          end: {
	            line: 273,
	            column: 13
	          }
	        }],
	        line: 268
	      },
	      '32': {
	        loc: {
	          start: {
	            line: 275,
	            column: 15
	          },
	          end: {
	            line: 286,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 275,
	            column: 15
	          },
	          end: {
	            line: 286,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 275,
	            column: 15
	          },
	          end: {
	            line: 286,
	            column: 9
	          }
	        }],
	        line: 275
	      },
	      '33': {
	        loc: {
	          start: {
	            line: 275,
	            column: 18
	          },
	          end: {
	            line: 275,
	            column: 58
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 275,
	            column: 18
	          },
	          end: {
	            line: 275,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 275,
	            column: 31
	          },
	          end: {
	            line: 275,
	            column: 58
	          }
	        }],
	        line: 275
	      },
	      '34': {
	        loc: {
	          start: {
	            line: 277,
	            column: 12
	          },
	          end: {
	            line: 279,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 277,
	            column: 12
	          },
	          end: {
	            line: 279,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 277,
	            column: 12
	          },
	          end: {
	            line: 279,
	            column: 13
	          }
	        }],
	        line: 277
	      },
	      '35': {
	        loc: {
	          start: {
	            line: 292,
	            column: 8
	          },
	          end: {
	            line: 302,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 292,
	            column: 8
	          },
	          end: {
	            line: 302,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 292,
	            column: 8
	          },
	          end: {
	            line: 302,
	            column: 9
	          }
	        }],
	        line: 292
	      },
	      '36': {
	        loc: {
	          start: {
	            line: 292,
	            column: 12
	          },
	          end: {
	            line: 292,
	            column: 43
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 292,
	            column: 12
	          },
	          end: {
	            line: 292,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 292,
	            column: 28
	          },
	          end: {
	            line: 292,
	            column: 43
	          }
	        }],
	        line: 292
	      },
	      '37': {
	        loc: {
	          start: {
	            line: 295,
	            column: 15
	          },
	          end: {
	            line: 302,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 295,
	            column: 15
	          },
	          end: {
	            line: 302,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 295,
	            column: 15
	          },
	          end: {
	            line: 302,
	            column: 9
	          }
	        }],
	        line: 295
	      },
	      '38': {
	        loc: {
	          start: {
	            line: 295,
	            column: 18
	          },
	          end: {
	            line: 295,
	            column: 58
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 295,
	            column: 18
	          },
	          end: {
	            line: 295,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 295,
	            column: 31
	          },
	          end: {
	            line: 295,
	            column: 58
	          }
	        }],
	        line: 295
	      },
	      '39': {
	        loc: {
	          start: {
	            line: 308,
	            column: 6
	          },
	          end: {
	            line: 316,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 308,
	            column: 6
	          },
	          end: {
	            line: 316,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 308,
	            column: 6
	          },
	          end: {
	            line: 316,
	            column: 7
	          }
	        }],
	        line: 308
	      },
	      '40': {
	        loc: {
	          start: {
	            line: 313,
	            column: 10
	          },
	          end: {
	            line: 315,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 313,
	            column: 10
	          },
	          end: {
	            line: 315,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 313,
	            column: 10
	          },
	          end: {
	            line: 315,
	            column: 11
	          }
	        }],
	        line: 313
	      },
	      '41': {
	        loc: {
	          start: {
	            line: 322,
	            column: 6
	          },
	          end: {
	            line: 355,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 322,
	            column: 6
	          },
	          end: {
	            line: 355,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 322,
	            column: 6
	          },
	          end: {
	            line: 355,
	            column: 7
	          }
	        }],
	        line: 322
	      },
	      '42': {
	        loc: {
	          start: {
	            line: 328,
	            column: 14
	          },
	          end: {
	            line: 337,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 328,
	            column: 14
	          },
	          end: {
	            line: 337,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 328,
	            column: 14
	          },
	          end: {
	            line: 337,
	            column: 15
	          }
	        }],
	        line: 328
	      },
	      '43': {
	        loc: {
	          start: {
	            line: 333,
	            column: 22
	          },
	          end: {
	            line: 335,
	            column: 23
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 333,
	            column: 22
	          },
	          end: {
	            line: 335,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 333,
	            column: 22
	          },
	          end: {
	            line: 335,
	            column: 23
	          }
	        }],
	        line: 333
	      },
	      '44': {
	        loc: {
	          start: {
	            line: 341,
	            column: 18
	          },
	          end: {
	            line: 344,
	            column: 19
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 341,
	            column: 18
	          },
	          end: {
	            line: 344,
	            column: 19
	          }
	        }, {
	          start: {
	            line: 341,
	            column: 18
	          },
	          end: {
	            line: 344,
	            column: 19
	          }
	        }],
	        line: 341
	      },
	      '45': {
	        loc: {
	          start: {
	            line: 348,
	            column: 10
	          },
	          end: {
	            line: 354,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 348,
	            column: 10
	          },
	          end: {
	            line: 354,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 348,
	            column: 10
	          },
	          end: {
	            line: 354,
	            column: 11
	          }
	        }],
	        line: 348
	      },
	      '46': {
	        loc: {
	          start: {
	            line: 362,
	            column: 6
	          },
	          end: {
	            line: 364,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 362,
	            column: 6
	          },
	          end: {
	            line: 364,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 362,
	            column: 6
	          },
	          end: {
	            line: 364,
	            column: 7
	          }
	        }],
	        line: 362
	      },
	      '47': {
	        loc: {
	          start: {
	            line: 366,
	            column: 6
	          },
	          end: {
	            line: 371,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 366,
	            column: 6
	          },
	          end: {
	            line: 371,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 366,
	            column: 6
	          },
	          end: {
	            line: 371,
	            column: 7
	          }
	        }],
	        line: 366
	      },
	      '48': {
	        loc: {
	          start: {
	            line: 368,
	            column: 10
	          },
	          end: {
	            line: 370,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 368,
	            column: 10
	          },
	          end: {
	            line: 370,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 368,
	            column: 10
	          },
	          end: {
	            line: 370,
	            column: 11
	          }
	        }],
	        line: 368
	      },
	      '49': {
	        loc: {
	          start: {
	            line: 378,
	            column: 4
	          },
	          end: {
	            line: 382,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 378,
	            column: 4
	          },
	          end: {
	            line: 382,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 378,
	            column: 4
	          },
	          end: {
	            line: 382,
	            column: 5
	          }
	        }],
	        line: 378
	      },
	      '50': {
	        loc: {
	          start: {
	            line: 384,
	            column: 4
	          },
	          end: {
	            line: 386,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 384,
	            column: 4
	          },
	          end: {
	            line: 386,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 384,
	            column: 4
	          },
	          end: {
	            line: 386,
	            column: 5
	          }
	        }],
	        line: 384
	      },
	      '51': {
	        loc: {
	          start: {
	            line: 390,
	            column: 4
	          },
	          end: {
	            line: 392,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 390,
	            column: 4
	          },
	          end: {
	            line: 392,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 390,
	            column: 4
	          },
	          end: {
	            line: 392,
	            column: 5
	          }
	        }],
	        line: 390
	      },
	      '52': {
	        loc: {
	          start: {
	            line: 397,
	            column: 4
	          },
	          end: {
	            line: 398,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 397,
	            column: 4
	          },
	          end: {
	            line: 398,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 397,
	            column: 4
	          },
	          end: {
	            line: 398,
	            column: 15
	          }
	        }],
	        line: 397
	      },
	      '53': {
	        loc: {
	          start: {
	            line: 400,
	            column: 4
	          },
	          end: {
	            line: 403,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 400,
	            column: 4
	          },
	          end: {
	            line: 403,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 400,
	            column: 4
	          },
	          end: {
	            line: 403,
	            column: 5
	          }
	        }],
	        line: 400
	      },
	      '54': {
	        loc: {
	          start: {
	            line: 410,
	            column: 6
	          },
	          end: {
	            line: 420,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 410,
	            column: 6
	          },
	          end: {
	            line: 420,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 410,
	            column: 6
	          },
	          end: {
	            line: 420,
	            column: 7
	          }
	        }],
	        line: 410
	      },
	      '55': {
	        loc: {
	          start: {
	            line: 411,
	            column: 10
	          },
	          end: {
	            line: 417,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 411,
	            column: 10
	          },
	          end: {
	            line: 417,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 411,
	            column: 10
	          },
	          end: {
	            line: 417,
	            column: 11
	          }
	        }],
	        line: 411
	      },
	      '56': {
	        loc: {
	          start: {
	            line: 412,
	            column: 14
	          },
	          end: {
	            line: 414,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 412,
	            column: 14
	          },
	          end: {
	            line: 414,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 412,
	            column: 14
	          },
	          end: {
	            line: 414,
	            column: 15
	          }
	        }],
	        line: 412
	      },
	      '57': {
	        loc: {
	          start: {
	            line: 428,
	            column: 4
	          },
	          end: {
	            line: 437,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 428,
	            column: 4
	          },
	          end: {
	            line: 437,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 428,
	            column: 4
	          },
	          end: {
	            line: 437,
	            column: 5
	          }
	        }],
	        line: 428
	      },
	      '58': {
	        loc: {
	          start: {
	            line: 429,
	            column: 6
	          },
	          end: {
	            line: 434,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 429,
	            column: 6
	          },
	          end: {
	            line: 434,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 429,
	            column: 6
	          },
	          end: {
	            line: 434,
	            column: 7
	          }
	        }],
	        line: 429
	      },
	      '59': {
	        loc: {
	          start: {
	            line: 429,
	            column: 10
	          },
	          end: {
	            line: 429,
	            column: 65
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 429,
	            column: 10
	          },
	          end: {
	            line: 429,
	            column: 14
	          }
	        }, {
	          start: {
	            line: 429,
	            column: 18
	          },
	          end: {
	            line: 429,
	            column: 32
	          }
	        }, {
	          start: {
	            line: 429,
	            column: 36
	          },
	          end: {
	            line: 429,
	            column: 65
	          }
	        }],
	        line: 429
	      },
	      '60': {
	        loc: {
	          start: {
	            line: 450,
	            column: 14
	          },
	          end: {
	            line: 454,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 450,
	            column: 14
	          },
	          end: {
	            line: 454,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 450,
	            column: 14
	          },
	          end: {
	            line: 454,
	            column: 15
	          }
	        }],
	        line: 450
	      },
	      '61': {
	        loc: {
	          start: {
	            line: 457,
	            column: 14
	          },
	          end: {
	            line: 461,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 457,
	            column: 14
	          },
	          end: {
	            line: 461,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 457,
	            column: 14
	          },
	          end: {
	            line: 461,
	            column: 15
	          }
	        }],
	        line: 457
	      },
	      '62': {
	        loc: {
	          start: {
	            line: 467,
	            column: 14
	          },
	          end: {
	            line: 469,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 467,
	            column: 14
	          },
	          end: {
	            line: 469,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 467,
	            column: 14
	          },
	          end: {
	            line: 469,
	            column: 15
	          }
	        }],
	        line: 467
	      },
	      '63': {
	        loc: {
	          start: {
	            line: 471,
	            column: 14
	          },
	          end: {
	            line: 473,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 471,
	            column: 14
	          },
	          end: {
	            line: 473,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 471,
	            column: 14
	          },
	          end: {
	            line: 473,
	            column: 15
	          }
	        }],
	        line: 471
	      },
	      '64': {
	        loc: {
	          start: {
	            line: 471,
	            column: 18
	          },
	          end: {
	            line: 471,
	            column: 104
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 471,
	            column: 18
	          },
	          end: {
	            line: 471,
	            column: 59
	          }
	        }, {
	          start: {
	            line: 471,
	            column: 63
	          },
	          end: {
	            line: 471,
	            column: 104
	          }
	        }],
	        line: 471
	      },
	      '65': {
	        loc: {
	          start: {
	            line: 489,
	            column: 14
	          },
	          end: {
	            line: 493,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 489,
	            column: 14
	          },
	          end: {
	            line: 493,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 489,
	            column: 14
	          },
	          end: {
	            line: 493,
	            column: 15
	          }
	        }],
	        line: 489
	      },
	      '66': {
	        loc: {
	          start: {
	            line: 491,
	            column: 21
	          },
	          end: {
	            line: 493,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 491,
	            column: 21
	          },
	          end: {
	            line: 493,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 491,
	            column: 21
	          },
	          end: {
	            line: 493,
	            column: 15
	          }
	        }],
	        line: 491
	      },
	      '67': {
	        loc: {
	          start: {
	            line: 500,
	            column: 14
	          },
	          end: {
	            line: 504,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 500,
	            column: 14
	          },
	          end: {
	            line: 504,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 500,
	            column: 14
	          },
	          end: {
	            line: 504,
	            column: 15
	          }
	        }],
	        line: 500
	      },
	      '68': {
	        loc: {
	          start: {
	            line: 558,
	            column: 10
	          },
	          end: {
	            line: 561,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 558,
	            column: 10
	          },
	          end: {
	            line: 561,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 558,
	            column: 10
	          },
	          end: {
	            line: 561,
	            column: 11
	          }
	        }],
	        line: 558
	      },
	      '69': {
	        loc: {
	          start: {
	            line: 565,
	            column: 10
	          },
	          end: {
	            line: 568,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 565,
	            column: 10
	          },
	          end: {
	            line: 568,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 565,
	            column: 10
	          },
	          end: {
	            line: 568,
	            column: 11
	          }
	        }],
	        line: 565
	      },
	      '70': {
	        loc: {
	          start: {
	            line: 588,
	            column: 10
	          },
	          end: {
	            line: 593,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 588,
	            column: 10
	          },
	          end: {
	            line: 593,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 588,
	            column: 10
	          },
	          end: {
	            line: 593,
	            column: 11
	          }
	        }],
	        line: 588
	      },
	      '71': {
	        loc: {
	          start: {
	            line: 599,
	            column: 10
	          },
	          end: {
	            line: 603,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 599,
	            column: 10
	          },
	          end: {
	            line: 603,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 599,
	            column: 10
	          },
	          end: {
	            line: 603,
	            column: 11
	          }
	        }],
	        line: 599
	      },
	      '72': {
	        loc: {
	          start: {
	            line: 599,
	            column: 14
	          },
	          end: {
	            line: 599,
	            column: 98
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 599,
	            column: 14
	          },
	          end: {
	            line: 599,
	            column: 43
	          }
	        }, {
	          start: {
	            line: 599,
	            column: 47
	          },
	          end: {
	            line: 599,
	            column: 98
	          }
	        }],
	        line: 599
	      },
	      '73': {
	        loc: {
	          start: {
	            line: 619,
	            column: 10
	          },
	          end: {
	            line: 619,
	            column: 37
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 619,
	            column: 10
	          },
	          end: {
	            line: 619,
	            column: 37
	          }
	        }, {
	          start: {
	            line: 619,
	            column: 10
	          },
	          end: {
	            line: 619,
	            column: 37
	          }
	        }],
	        line: 619
	      },
	      '74': {
	        loc: {
	          start: {
	            line: 622,
	            column: 10
	          },
	          end: {
	            line: 622,
	            column: 35
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 622,
	            column: 10
	          },
	          end: {
	            line: 622,
	            column: 35
	          }
	        }, {
	          start: {
	            line: 622,
	            column: 10
	          },
	          end: {
	            line: 622,
	            column: 35
	          }
	        }],
	        line: 622
	      },
	      '75': {
	        loc: {
	          start: {
	            line: 624,
	            column: 10
	          },
	          end: {
	            line: 626,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 624,
	            column: 10
	          },
	          end: {
	            line: 626,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 624,
	            column: 10
	          },
	          end: {
	            line: 626,
	            column: 11
	          }
	        }],
	        line: 624
	      },
	      '76': {
	        loc: {
	          start: {
	            line: 652,
	            column: 10
	          },
	          end: {
	            line: 686,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 652,
	            column: 10
	          },
	          end: {
	            line: 686,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 652,
	            column: 10
	          },
	          end: {
	            line: 686,
	            column: 11
	          }
	        }],
	        line: 652
	      },
	      '77': {
	        loc: {
	          start: {
	            line: 652,
	            column: 14
	          },
	          end: {
	            line: 652,
	            column: 97
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 652,
	            column: 14
	          },
	          end: {
	            line: 652,
	            column: 25
	          }
	        }, {
	          start: {
	            line: 652,
	            column: 29
	          },
	          end: {
	            line: 652,
	            column: 58
	          }
	        }, {
	          start: {
	            line: 652,
	            column: 62
	          },
	          end: {
	            line: 652,
	            column: 97
	          }
	        }],
	        line: 652
	      },
	      '78': {
	        loc: {
	          start: {
	            line: 660,
	            column: 14
	          },
	          end: {
	            line: 667,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 660,
	            column: 14
	          },
	          end: {
	            line: 667,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 660,
	            column: 14
	          },
	          end: {
	            line: 667,
	            column: 15
	          }
	        }],
	        line: 660
	      },
	      '79': {
	        loc: {
	          start: {
	            line: 663,
	            column: 31
	          },
	          end: {
	            line: 663,
	            column: 101
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 663,
	            column: 51
	          },
	          end: {
	            line: 663,
	            column: 88
	          }
	        }, {
	          start: {
	            line: 663,
	            column: 91
	          },
	          end: {
	            line: 663,
	            column: 101
	          }
	        }],
	        line: 663
	      },
	      '80': {
	        loc: {
	          start: {
	            line: 664,
	            column: 31
	          },
	          end: {
	            line: 664,
	            column: 67
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 664,
	            column: 46
	          },
	          end: {
	            line: 664,
	            column: 62
	          }
	        }, {
	          start: {
	            line: 664,
	            column: 65
	          },
	          end: {
	            line: 664,
	            column: 67
	          }
	        }],
	        line: 664
	      },
	      '81': {
	        loc: {
	          start: {
	            line: 666,
	            column: 34
	          },
	          end: {
	            line: 666,
	            column: 76
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 666,
	            column: 52
	          },
	          end: {
	            line: 666,
	            column: 71
	          }
	        }, {
	          start: {
	            line: 666,
	            column: 74
	          },
	          end: {
	            line: 666,
	            column: 76
	          }
	        }],
	        line: 666
	      },
	      '82': {
	        loc: {
	          start: {
	            line: 678,
	            column: 14
	          },
	          end: {
	            line: 682,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 678,
	            column: 14
	          },
	          end: {
	            line: 682,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 678,
	            column: 14
	          },
	          end: {
	            line: 682,
	            column: 15
	          }
	        }],
	        line: 678
	      },
	      '83': {
	        loc: {
	          start: {
	            line: 699,
	            column: 10
	          },
	          end: {
	            line: 704,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 699,
	            column: 10
	          },
	          end: {
	            line: 704,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 699,
	            column: 10
	          },
	          end: {
	            line: 704,
	            column: 11
	          }
	        }],
	        line: 699
	      },
	      '84': {
	        loc: {
	          start: {
	            line: 709,
	            column: 10
	          },
	          end: {
	            line: 713,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 709,
	            column: 10
	          },
	          end: {
	            line: 713,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 709,
	            column: 10
	          },
	          end: {
	            line: 713,
	            column: 11
	          }
	        }],
	        line: 709
	      },
	      '85': {
	        loc: {
	          start: {
	            line: 720,
	            column: 10
	          },
	          end: {
	            line: 722,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 720,
	            column: 10
	          },
	          end: {
	            line: 722,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 720,
	            column: 10
	          },
	          end: {
	            line: 722,
	            column: 11
	          }
	        }],
	        line: 720
	      },
	      '86': {
	        loc: {
	          start: {
	            line: 726,
	            column: 10
	          },
	          end: {
	            line: 728,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 726,
	            column: 10
	          },
	          end: {
	            line: 728,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 726,
	            column: 10
	          },
	          end: {
	            line: 728,
	            column: 11
	          }
	        }],
	        line: 726
	      },
	      '87': {
	        loc: {
	          start: {
	            line: 743,
	            column: 6
	          },
	          end: {
	            line: 745,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 743,
	            column: 6
	          },
	          end: {
	            line: 745,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 743,
	            column: 6
	          },
	          end: {
	            line: 745,
	            column: 7
	          }
	        }],
	        line: 743
	      },
	      '88': {
	        loc: {
	          start: {
	            line: 760,
	            column: 6
	          },
	          end: {
	            line: 765,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 760,
	            column: 6
	          },
	          end: {
	            line: 765,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 760,
	            column: 6
	          },
	          end: {
	            line: 765,
	            column: 7
	          }
	        }],
	        line: 760
	      },
	      '89': {
	        loc: {
	          start: {
	            line: 795,
	            column: 10
	          },
	          end: {
	            line: 799,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 795,
	            column: 10
	          },
	          end: {
	            line: 799,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 795,
	            column: 10
	          },
	          end: {
	            line: 799,
	            column: 11
	          }
	        }],
	        line: 795
	      },
	      '90': {
	        loc: {
	          start: {
	            line: 797,
	            column: 17
	          },
	          end: {
	            line: 799,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 797,
	            column: 17
	          },
	          end: {
	            line: 799,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 797,
	            column: 17
	          },
	          end: {
	            line: 799,
	            column: 11
	          }
	        }],
	        line: 797
	      },
	      '91': {
	        loc: {
	          start: {
	            line: 803,
	            column: 10
	          },
	          end: {
	            line: 807,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 803,
	            column: 10
	          },
	          end: {
	            line: 807,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 803,
	            column: 10
	          },
	          end: {
	            line: 807,
	            column: 11
	          }
	        }],
	        line: 803
	      },
	      '92': {
	        loc: {
	          start: {
	            line: 805,
	            column: 17
	          },
	          end: {
	            line: 807,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 805,
	            column: 17
	          },
	          end: {
	            line: 807,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 805,
	            column: 17
	          },
	          end: {
	            line: 807,
	            column: 11
	          }
	        }],
	        line: 805
	      },
	      '93': {
	        loc: {
	          start: {
	            line: 826,
	            column: 10
	          },
	          end: {
	            line: 831,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 826,
	            column: 10
	          },
	          end: {
	            line: 831,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 826,
	            column: 10
	          },
	          end: {
	            line: 831,
	            column: 11
	          }
	        }],
	        line: 826
	      },
	      '94': {
	        loc: {
	          start: {
	            line: 835,
	            column: 10
	          },
	          end: {
	            line: 843,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 835,
	            column: 10
	          },
	          end: {
	            line: 843,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 835,
	            column: 10
	          },
	          end: {
	            line: 843,
	            column: 11
	          }
	        }],
	        line: 835
	      },
	      '95': {
	        loc: {
	          start: {
	            line: 835,
	            column: 13
	          },
	          end: {
	            line: 835,
	            column: 53
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 835,
	            column: 13
	          },
	          end: {
	            line: 835,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 835,
	            column: 27
	          },
	          end: {
	            line: 835,
	            column: 53
	          }
	        }],
	        line: 835
	      },
	      '96': {
	        loc: {
	          start: {
	            line: 838,
	            column: 14
	          },
	          end: {
	            line: 842,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 838,
	            column: 14
	          },
	          end: {
	            line: 842,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 838,
	            column: 14
	          },
	          end: {
	            line: 842,
	            column: 15
	          }
	        }],
	        line: 838
	      },
	      '97': {
	        loc: {
	          start: {
	            line: 840,
	            column: 21
	          },
	          end: {
	            line: 842,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 840,
	            column: 21
	          },
	          end: {
	            line: 842,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 840,
	            column: 21
	          },
	          end: {
	            line: 842,
	            column: 15
	          }
	        }],
	        line: 840
	      },
	      '98': {
	        loc: {
	          start: {
	            line: 847,
	            column: 10
	          },
	          end: {
	            line: 851,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 847,
	            column: 10
	          },
	          end: {
	            line: 851,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 847,
	            column: 10
	          },
	          end: {
	            line: 851,
	            column: 11
	          }
	        }],
	        line: 847
	      },
	      '99': {
	        loc: {
	          start: {
	            line: 849,
	            column: 17
	          },
	          end: {
	            line: 851,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 849,
	            column: 17
	          },
	          end: {
	            line: 851,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 849,
	            column: 17
	          },
	          end: {
	            line: 851,
	            column: 11
	          }
	        }],
	        line: 849
	      },
	      '100': {
	        loc: {
	          start: {
	            line: 855,
	            column: 10
	          },
	          end: {
	            line: 859,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 855,
	            column: 10
	          },
	          end: {
	            line: 859,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 855,
	            column: 10
	          },
	          end: {
	            line: 859,
	            column: 11
	          }
	        }],
	        line: 855
	      },
	      '101': {
	        loc: {
	          start: {
	            line: 857,
	            column: 17
	          },
	          end: {
	            line: 859,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 857,
	            column: 17
	          },
	          end: {
	            line: 859,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 857,
	            column: 17
	          },
	          end: {
	            line: 859,
	            column: 11
	          }
	        }],
	        line: 857
	      },
	      '102': {
	        loc: {
	          start: {
	            line: 863,
	            column: 10
	          },
	          end: {
	            line: 867,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 863,
	            column: 10
	          },
	          end: {
	            line: 867,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 863,
	            column: 10
	          },
	          end: {
	            line: 867,
	            column: 11
	          }
	        }],
	        line: 863
	      },
	      '103': {
	        loc: {
	          start: {
	            line: 865,
	            column: 17
	          },
	          end: {
	            line: 867,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 865,
	            column: 17
	          },
	          end: {
	            line: 867,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 865,
	            column: 17
	          },
	          end: {
	            line: 867,
	            column: 11
	          }
	        }],
	        line: 865
	      },
	      '104': {
	        loc: {
	          start: {
	            line: 871,
	            column: 10
	          },
	          end: {
	            line: 875,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 871,
	            column: 10
	          },
	          end: {
	            line: 875,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 871,
	            column: 10
	          },
	          end: {
	            line: 875,
	            column: 11
	          }
	        }],
	        line: 871
	      },
	      '105': {
	        loc: {
	          start: {
	            line: 873,
	            column: 17
	          },
	          end: {
	            line: 875,
	            column: 11
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 873,
	            column: 17
	          },
	          end: {
	            line: 875,
	            column: 11
	          }
	        }, {
	          start: {
	            line: 873,
	            column: 17
	          },
	          end: {
	            line: 875,
	            column: 11
	          }
	        }],
	        line: 873
	      },
	      '106': {
	        loc: {
	          start: {
	            line: 884,
	            column: 6
	          },
	          end: {
	            line: 887,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 884,
	            column: 6
	          },
	          end: {
	            line: 887,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 884,
	            column: 6
	          },
	          end: {
	            line: 887,
	            column: 7
	          }
	        }],
	        line: 884
	      },
	      '107': {
	        loc: {
	          start: {
	            line: 901,
	            column: 6
	          },
	          end: {
	            line: 904,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 901,
	            column: 6
	          },
	          end: {
	            line: 904,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 901,
	            column: 6
	          },
	          end: {
	            line: 904,
	            column: 7
	          }
	        }],
	        line: 901
	      },
	      '108': {
	        loc: {
	          start: {
	            line: 901,
	            column: 10
	          },
	          end: {
	            line: 901,
	            column: 132
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 901,
	            column: 10
	          },
	          end: {
	            line: 901,
	            column: 36
	          }
	        }, {
	          start: {
	            line: 901,
	            column: 41
	          },
	          end: {
	            line: 901,
	            column: 101
	          }
	        }, {
	          start: {
	            line: 901,
	            column: 105
	          },
	          end: {
	            line: 901,
	            column: 131
	          }
	        }],
	        line: 901
	      },
	      '109': {
	        loc: {
	          start: {
	            line: 906,
	            column: 6
	          },
	          end: {
	            line: 908,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 906,
	            column: 6
	          },
	          end: {
	            line: 908,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 906,
	            column: 6
	          },
	          end: {
	            line: 908,
	            column: 7
	          }
	        }],
	        line: 906
	      },
	      '110': {
	        loc: {
	          start: {
	            line: 906,
	            column: 10
	          },
	          end: {
	            line: 906,
	            column: 95
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 906,
	            column: 10
	          },
	          end: {
	            line: 906,
	            column: 51
	          }
	        }, {
	          start: {
	            line: 906,
	            column: 55
	          },
	          end: {
	            line: 906,
	            column: 95
	          }
	        }],
	        line: 906
	      },
	      '111': {
	        loc: {
	          start: {
	            line: 914,
	            column: 4
	          },
	          end: {
	            line: 933,
	            column: 5
	          }
	        },
	        type: 'switch',
	        locations: [{
	          start: {
	            line: 915,
	            column: 6
	          },
	          end: {
	            line: 916,
	            column: 99
	          }
	        }, {
	          start: {
	            line: 917,
	            column: 6
	          },
	          end: {
	            line: 918,
	            column: 110
	          }
	        }, {
	          start: {
	            line: 919,
	            column: 6
	          },
	          end: {
	            line: 920,
	            column: 115
	          }
	        }, {
	          start: {
	            line: 921,
	            column: 6
	          },
	          end: {
	            line: 922,
	            column: 108
	          }
	        }, {
	          start: {
	            line: 923,
	            column: 6
	          },
	          end: {
	            line: 924,
	            column: 119
	          }
	        }, {
	          start: {
	            line: 925,
	            column: 6
	          },
	          end: {
	            line: 926,
	            column: 124
	          }
	        }, {
	          start: {
	            line: 927,
	            column: 6
	          },
	          end: {
	            line: 928,
	            column: 129
	          }
	        }, {
	          start: {
	            line: 929,
	            column: 6
	          },
	          end: {
	            line: 930,
	            column: 96
	          }
	        }, {
	          start: {
	            line: 931,
	            column: 6
	          },
	          end: {
	            line: 932,
	            column: 21
	          }
	        }],
	        line: 914
	      },
	      '112': {
	        loc: {
	          start: {
	            line: 916,
	            column: 48
	          },
	          end: {
	            line: 916,
	            column: 97
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 916,
	            column: 68
	          },
	          end: {
	            line: 916,
	            column: 92
	          }
	        }, {
	          start: {
	            line: 916,
	            column: 95
	          },
	          end: {
	            line: 916,
	            column: 97
	          }
	        }],
	        line: 916
	      },
	      '113': {
	        loc: {
	          start: {
	            line: 918,
	            column: 59
	          },
	          end: {
	            line: 918,
	            column: 108
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 918,
	            column: 79
	          },
	          end: {
	            line: 918,
	            column: 103
	          }
	        }, {
	          start: {
	            line: 918,
	            column: 106
	          },
	          end: {
	            line: 918,
	            column: 108
	          }
	        }],
	        line: 918
	      },
	      '114': {
	        loc: {
	          start: {
	            line: 920,
	            column: 64
	          },
	          end: {
	            line: 920,
	            column: 113
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 920,
	            column: 84
	          },
	          end: {
	            line: 920,
	            column: 108
	          }
	        }, {
	          start: {
	            line: 920,
	            column: 111
	          },
	          end: {
	            line: 920,
	            column: 113
	          }
	        }],
	        line: 920
	      },
	      '115': {
	        loc: {
	          start: {
	            line: 922,
	            column: 57
	          },
	          end: {
	            line: 922,
	            column: 106
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 922,
	            column: 77
	          },
	          end: {
	            line: 922,
	            column: 101
	          }
	        }, {
	          start: {
	            line: 922,
	            column: 104
	          },
	          end: {
	            line: 922,
	            column: 106
	          }
	        }],
	        line: 922
	      },
	      '116': {
	        loc: {
	          start: {
	            line: 924,
	            column: 68
	          },
	          end: {
	            line: 924,
	            column: 117
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 924,
	            column: 88
	          },
	          end: {
	            line: 924,
	            column: 112
	          }
	        }, {
	          start: {
	            line: 924,
	            column: 115
	          },
	          end: {
	            line: 924,
	            column: 117
	          }
	        }],
	        line: 924
	      },
	      '117': {
	        loc: {
	          start: {
	            line: 926,
	            column: 73
	          },
	          end: {
	            line: 926,
	            column: 122
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 926,
	            column: 93
	          },
	          end: {
	            line: 926,
	            column: 117
	          }
	        }, {
	          start: {
	            line: 926,
	            column: 120
	          },
	          end: {
	            line: 926,
	            column: 122
	          }
	        }],
	        line: 926
	      },
	      '118': {
	        loc: {
	          start: {
	            line: 928,
	            column: 78
	          },
	          end: {
	            line: 928,
	            column: 127
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 928,
	            column: 98
	          },
	          end: {
	            line: 928,
	            column: 122
	          }
	        }, {
	          start: {
	            line: 928,
	            column: 125
	          },
	          end: {
	            line: 928,
	            column: 127
	          }
	        }],
	        line: 928
	      },
	      '119': {
	        loc: {
	          start: {
	            line: 930,
	            column: 45
	          },
	          end: {
	            line: 930,
	            column: 94
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 930,
	            column: 65
	          },
	          end: {
	            line: 930,
	            column: 89
	          }
	        }, {
	          start: {
	            line: 930,
	            column: 92
	          },
	          end: {
	            line: 930,
	            column: 94
	          }
	        }],
	        line: 930
	      },
	      '120': {
	        loc: {
	          start: {
	            line: 943,
	            column: 4
	          },
	          end: {
	            line: 945,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 943,
	            column: 4
	          },
	          end: {
	            line: 945,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 943,
	            column: 4
	          },
	          end: {
	            line: 945,
	            column: 5
	          }
	        }],
	        line: 943
	      },
	      '121': {
	        loc: {
	          start: {
	            line: 943,
	            column: 8
	          },
	          end: {
	            line: 943,
	            column: 51
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 943,
	            column: 8
	          },
	          end: {
	            line: 943,
	            column: 30
	          }
	        }, {
	          start: {
	            line: 943,
	            column: 34
	          },
	          end: {
	            line: 943,
	            column: 51
	          }
	        }],
	        line: 943
	      },
	      '122': {
	        loc: {
	          start: {
	            line: 948,
	            column: 4
	          },
	          end: {
	            line: 951,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 948,
	            column: 4
	          },
	          end: {
	            line: 951,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 948,
	            column: 4
	          },
	          end: {
	            line: 951,
	            column: 5
	          }
	        }],
	        line: 948
	      },
	      '123': {
	        loc: {
	          start: {
	            line: 957,
	            column: 4
	          },
	          end: {
	            line: 957,
	            column: 40
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 957,
	            column: 4
	          },
	          end: {
	            line: 957,
	            column: 40
	          }
	        }, {
	          start: {
	            line: 957,
	            column: 4
	          },
	          end: {
	            line: 957,
	            column: 40
	          }
	        }],
	        line: 957
	      },
	      '124': {
	        loc: {
	          start: {
	            line: 958,
	            column: 4
	          },
	          end: {
	            line: 958,
	            column: 46
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 958,
	            column: 4
	          },
	          end: {
	            line: 958,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 958,
	            column: 4
	          },
	          end: {
	            line: 958,
	            column: 46
	          }
	        }],
	        line: 958
	      },
	      '125': {
	        loc: {
	          start: {
	            line: 959,
	            column: 4
	          },
	          end: {
	            line: 959,
	            column: 46
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 959,
	            column: 4
	          },
	          end: {
	            line: 959,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 959,
	            column: 4
	          },
	          end: {
	            line: 959,
	            column: 46
	          }
	        }],
	        line: 959
	      },
	      '126': {
	        loc: {
	          start: {
	            line: 961,
	            column: 12
	          },
	          end: {
	            line: 961,
	            column: 33
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 961,
	            column: 25
	          },
	          end: {
	            line: 961,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 961,
	            column: 31
	          },
	          end: {
	            line: 961,
	            column: 33
	          }
	        }],
	        line: 961
	      },
	      '127': {
	        loc: {
	          start: {
	            line: 971,
	            column: 4
	          },
	          end: {
	            line: 975,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 971,
	            column: 4
	          },
	          end: {
	            line: 975,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 971,
	            column: 4
	          },
	          end: {
	            line: 975,
	            column: 5
	          }
	        }],
	        line: 971
	      },
	      '128': {
	        loc: {
	          start: {
	            line: 971,
	            column: 8
	          },
	          end: {
	            line: 971,
	            column: 80
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 971,
	            column: 8
	          },
	          end: {
	            line: 971,
	            column: 34
	          }
	        }, {
	          start: {
	            line: 971,
	            column: 38
	          },
	          end: {
	            line: 971,
	            column: 80
	          }
	        }],
	        line: 971
	      },
	      '129': {
	        loc: {
	          start: {
	            line: 973,
	            column: 11
	          },
	          end: {
	            line: 975,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 973,
	            column: 11
	          },
	          end: {
	            line: 975,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 973,
	            column: 11
	          },
	          end: {
	            line: 975,
	            column: 5
	          }
	        }],
	        line: 973
	      },
	      '130': {
	        loc: {
	          start: {
	            line: 985,
	            column: 0
	          },
	          end: {
	            line: 987,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 985,
	            column: 0
	          },
	          end: {
	            line: 987,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 985,
	            column: 0
	          },
	          end: {
	            line: 987,
	            column: 1
	          }
	        }],
	        line: 985
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0,
	      '44': 0,
	      '45': 0,
	      '46': 0,
	      '47': 0,
	      '48': 0,
	      '49': 0,
	      '50': 0,
	      '51': 0,
	      '52': 0,
	      '53': 0,
	      '54': 0,
	      '55': 0,
	      '56': 0,
	      '57': 0,
	      '58': 0,
	      '59': 0,
	      '60': 0,
	      '61': 0,
	      '62': 0,
	      '63': 0,
	      '64': 0,
	      '65': 0,
	      '66': 0,
	      '67': 0,
	      '68': 0,
	      '69': 0,
	      '70': 0,
	      '71': 0,
	      '72': 0,
	      '73': 0,
	      '74': 0,
	      '75': 0,
	      '76': 0,
	      '77': 0,
	      '78': 0,
	      '79': 0,
	      '80': 0,
	      '81': 0,
	      '82': 0,
	      '83': 0,
	      '84': 0,
	      '85': 0,
	      '86': 0,
	      '87': 0,
	      '88': 0,
	      '89': 0,
	      '90': 0,
	      '91': 0,
	      '92': 0,
	      '93': 0,
	      '94': 0,
	      '95': 0,
	      '96': 0,
	      '97': 0,
	      '98': 0,
	      '99': 0,
	      '100': 0,
	      '101': 0,
	      '102': 0,
	      '103': 0,
	      '104': 0,
	      '105': 0,
	      '106': 0,
	      '107': 0,
	      '108': 0,
	      '109': 0,
	      '110': 0,
	      '111': 0,
	      '112': 0,
	      '113': 0,
	      '114': 0,
	      '115': 0,
	      '116': 0,
	      '117': 0,
	      '118': 0,
	      '119': 0,
	      '120': 0,
	      '121': 0,
	      '122': 0,
	      '123': 0,
	      '124': 0,
	      '125': 0,
	      '126': 0,
	      '127': 0,
	      '128': 0,
	      '129': 0,
	      '130': 0,
	      '131': 0,
	      '132': 0,
	      '133': 0,
	      '134': 0,
	      '135': 0,
	      '136': 0,
	      '137': 0,
	      '138': 0,
	      '139': 0,
	      '140': 0,
	      '141': 0,
	      '142': 0,
	      '143': 0,
	      '144': 0,
	      '145': 0,
	      '146': 0,
	      '147': 0,
	      '148': 0,
	      '149': 0,
	      '150': 0,
	      '151': 0,
	      '152': 0,
	      '153': 0,
	      '154': 0,
	      '155': 0,
	      '156': 0,
	      '157': 0,
	      '158': 0,
	      '159': 0,
	      '160': 0,
	      '161': 0,
	      '162': 0,
	      '163': 0,
	      '164': 0,
	      '165': 0,
	      '166': 0,
	      '167': 0,
	      '168': 0,
	      '169': 0,
	      '170': 0,
	      '171': 0,
	      '172': 0,
	      '173': 0,
	      '174': 0,
	      '175': 0,
	      '176': 0,
	      '177': 0,
	      '178': 0,
	      '179': 0,
	      '180': 0,
	      '181': 0,
	      '182': 0,
	      '183': 0,
	      '184': 0,
	      '185': 0,
	      '186': 0,
	      '187': 0,
	      '188': 0,
	      '189': 0,
	      '190': 0,
	      '191': 0,
	      '192': 0,
	      '193': 0,
	      '194': 0,
	      '195': 0,
	      '196': 0,
	      '197': 0,
	      '198': 0,
	      '199': 0,
	      '200': 0,
	      '201': 0,
	      '202': 0,
	      '203': 0,
	      '204': 0,
	      '205': 0,
	      '206': 0,
	      '207': 0,
	      '208': 0,
	      '209': 0,
	      '210': 0,
	      '211': 0,
	      '212': 0,
	      '213': 0,
	      '214': 0,
	      '215': 0,
	      '216': 0,
	      '217': 0,
	      '218': 0,
	      '219': 0,
	      '220': 0,
	      '221': 0,
	      '222': 0,
	      '223': 0,
	      '224': 0,
	      '225': 0,
	      '226': 0,
	      '227': 0,
	      '228': 0,
	      '229': 0,
	      '230': 0,
	      '231': 0,
	      '232': 0,
	      '233': 0,
	      '234': 0,
	      '235': 0,
	      '236': 0,
	      '237': 0,
	      '238': 0,
	      '239': 0,
	      '240': 0,
	      '241': 0,
	      '242': 0,
	      '243': 0,
	      '244': 0,
	      '245': 0,
	      '246': 0,
	      '247': 0,
	      '248': 0,
	      '249': 0,
	      '250': 0,
	      '251': 0,
	      '252': 0,
	      '253': 0,
	      '254': 0,
	      '255': 0,
	      '256': 0,
	      '257': 0,
	      '258': 0,
	      '259': 0,
	      '260': 0,
	      '261': 0,
	      '262': 0,
	      '263': 0,
	      '264': 0,
	      '265': 0,
	      '266': 0,
	      '267': 0,
	      '268': 0,
	      '269': 0,
	      '270': 0,
	      '271': 0,
	      '272': 0,
	      '273': 0,
	      '274': 0,
	      '275': 0,
	      '276': 0,
	      '277': 0,
	      '278': 0,
	      '279': 0,
	      '280': 0,
	      '281': 0,
	      '282': 0,
	      '283': 0,
	      '284': 0,
	      '285': 0,
	      '286': 0,
	      '287': 0,
	      '288': 0,
	      '289': 0,
	      '290': 0,
	      '291': 0,
	      '292': 0,
	      '293': 0,
	      '294': 0,
	      '295': 0,
	      '296': 0,
	      '297': 0,
	      '298': 0,
	      '299': 0,
	      '300': 0,
	      '301': 0,
	      '302': 0,
	      '303': 0,
	      '304': 0,
	      '305': 0,
	      '306': 0,
	      '307': 0,
	      '308': 0,
	      '309': 0,
	      '310': 0,
	      '311': 0,
	      '312': 0,
	      '313': 0,
	      '314': 0,
	      '315': 0,
	      '316': 0,
	      '317': 0,
	      '318': 0,
	      '319': 0,
	      '320': 0,
	      '321': 0,
	      '322': 0,
	      '323': 0,
	      '324': 0,
	      '325': 0,
	      '326': 0,
	      '327': 0,
	      '328': 0,
	      '329': 0,
	      '330': 0,
	      '331': 0,
	      '332': 0,
	      '333': 0,
	      '334': 0,
	      '335': 0,
	      '336': 0,
	      '337': 0,
	      '338': 0,
	      '339': 0,
	      '340': 0,
	      '341': 0,
	      '342': 0,
	      '343': 0,
	      '344': 0,
	      '345': 0,
	      '346': 0,
	      '347': 0,
	      '348': 0,
	      '349': 0,
	      '350': 0,
	      '351': 0,
	      '352': 0,
	      '353': 0,
	      '354': 0,
	      '355': 0,
	      '356': 0,
	      '357': 0,
	      '358': 0,
	      '359': 0,
	      '360': 0,
	      '361': 0,
	      '362': 0,
	      '363': 0,
	      '364': 0,
	      '365': 0,
	      '366': 0,
	      '367': 0,
	      '368': 0,
	      '369': 0,
	      '370': 0,
	      '371': 0,
	      '372': 0,
	      '373': 0,
	      '374': 0,
	      '375': 0,
	      '376': 0,
	      '377': 0,
	      '378': 0,
	      '379': 0,
	      '380': 0,
	      '381': 0,
	      '382': 0,
	      '383': 0,
	      '384': 0,
	      '385': 0,
	      '386': 0,
	      '387': 0,
	      '388': 0,
	      '389': 0,
	      '390': 0,
	      '391': 0,
	      '392': 0,
	      '393': 0,
	      '394': 0,
	      '395': 0,
	      '396': 0,
	      '397': 0,
	      '398': 0,
	      '399': 0,
	      '400': 0,
	      '401': 0,
	      '402': 0,
	      '403': 0,
	      '404': 0,
	      '405': 0,
	      '406': 0,
	      '407': 0,
	      '408': 0,
	      '409': 0,
	      '410': 0,
	      '411': 0,
	      '412': 0,
	      '413': 0,
	      '414': 0,
	      '415': 0,
	      '416': 0,
	      '417': 0,
	      '418': 0,
	      '419': 0,
	      '420': 0,
	      '421': 0,
	      '422': 0,
	      '423': 0,
	      '424': 0,
	      '425': 0,
	      '426': 0,
	      '427': 0,
	      '428': 0,
	      '429': 0,
	      '430': 0,
	      '431': 0,
	      '432': 0,
	      '433': 0,
	      '434': 0,
	      '435': 0,
	      '436': 0,
	      '437': 0,
	      '438': 0,
	      '439': 0,
	      '440': 0,
	      '441': 0,
	      '442': 0,
	      '443': 0,
	      '444': 0,
	      '445': 0,
	      '446': 0,
	      '447': 0,
	      '448': 0,
	      '449': 0,
	      '450': 0,
	      '451': 0,
	      '452': 0,
	      '453': 0,
	      '454': 0,
	      '455': 0,
	      '456': 0,
	      '457': 0,
	      '458': 0,
	      '459': 0,
	      '460': 0,
	      '461': 0,
	      '462': 0,
	      '463': 0,
	      '464': 0,
	      '465': 0,
	      '466': 0,
	      '467': 0,
	      '468': 0,
	      '469': 0,
	      '470': 0,
	      '471': 0,
	      '472': 0,
	      '473': 0,
	      '474': 0,
	      '475': 0,
	      '476': 0,
	      '477': 0,
	      '478': 0,
	      '479': 0,
	      '480': 0,
	      '481': 0,
	      '482': 0,
	      '483': 0,
	      '484': 0,
	      '485': 0,
	      '486': 0,
	      '487': 0,
	      '488': 0,
	      '489': 0,
	      '490': 0,
	      '491': 0,
	      '492': 0,
	      '493': 0,
	      '494': 0,
	      '495': 0,
	      '496': 0,
	      '497': 0,
	      '498': 0,
	      '499': 0,
	      '500': 0,
	      '501': 0,
	      '502': 0,
	      '503': 0,
	      '504': 0,
	      '505': 0,
	      '506': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0,
	      '44': 0,
	      '45': 0,
	      '46': 0,
	      '47': 0,
	      '48': 0,
	      '49': 0,
	      '50': 0,
	      '51': 0,
	      '52': 0,
	      '53': 0,
	      '54': 0,
	      '55': 0,
	      '56': 0,
	      '57': 0,
	      '58': 0,
	      '59': 0,
	      '60': 0,
	      '61': 0,
	      '62': 0,
	      '63': 0,
	      '64': 0,
	      '65': 0,
	      '66': 0,
	      '67': 0,
	      '68': 0,
	      '69': 0,
	      '70': 0,
	      '71': 0,
	      '72': 0,
	      '73': 0,
	      '74': 0,
	      '75': 0,
	      '76': 0,
	      '77': 0,
	      '78': 0,
	      '79': 0,
	      '80': 0,
	      '81': 0,
	      '82': 0,
	      '83': 0,
	      '84': 0,
	      '85': 0,
	      '86': 0,
	      '87': 0,
	      '88': 0,
	      '89': 0,
	      '90': 0,
	      '91': 0,
	      '92': 0,
	      '93': 0,
	      '94': 0,
	      '95': 0,
	      '96': 0,
	      '97': 0,
	      '98': 0,
	      '99': 0,
	      '100': 0,
	      '101': 0,
	      '102': 0,
	      '103': 0,
	      '104': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0],
	      '9': [0, 0],
	      '10': [0, 0],
	      '11': [0, 0],
	      '12': [0],
	      '13': [0, 0],
	      '14': [0, 0],
	      '15': [0, 0],
	      '16': [0, 0],
	      '17': [0, 0],
	      '18': [0, 0],
	      '19': [0, 0],
	      '20': [0, 0],
	      '21': [0, 0],
	      '22': [0, 0],
	      '23': [0, 0],
	      '24': [0, 0],
	      '25': [0, 0],
	      '26': [0, 0],
	      '27': [0, 0],
	      '28': [0, 0],
	      '29': [0, 0],
	      '30': [0, 0],
	      '31': [0, 0],
	      '32': [0, 0],
	      '33': [0, 0],
	      '34': [0, 0],
	      '35': [0, 0],
	      '36': [0, 0],
	      '37': [0, 0],
	      '38': [0, 0],
	      '39': [0, 0],
	      '40': [0, 0],
	      '41': [0, 0],
	      '42': [0, 0],
	      '43': [0, 0],
	      '44': [0, 0],
	      '45': [0, 0],
	      '46': [0, 0],
	      '47': [0, 0],
	      '48': [0, 0],
	      '49': [0, 0],
	      '50': [0, 0],
	      '51': [0, 0],
	      '52': [0, 0],
	      '53': [0, 0],
	      '54': [0, 0],
	      '55': [0, 0],
	      '56': [0, 0],
	      '57': [0, 0],
	      '58': [0, 0],
	      '59': [0, 0, 0],
	      '60': [0, 0],
	      '61': [0, 0],
	      '62': [0, 0],
	      '63': [0, 0],
	      '64': [0, 0],
	      '65': [0, 0],
	      '66': [0, 0],
	      '67': [0, 0],
	      '68': [0, 0],
	      '69': [0, 0],
	      '70': [0, 0],
	      '71': [0, 0],
	      '72': [0, 0],
	      '73': [0, 0],
	      '74': [0, 0],
	      '75': [0, 0],
	      '76': [0, 0],
	      '77': [0, 0, 0],
	      '78': [0, 0],
	      '79': [0, 0],
	      '80': [0, 0],
	      '81': [0, 0],
	      '82': [0, 0],
	      '83': [0, 0],
	      '84': [0, 0],
	      '85': [0, 0],
	      '86': [0, 0],
	      '87': [0, 0],
	      '88': [0, 0],
	      '89': [0, 0],
	      '90': [0, 0],
	      '91': [0, 0],
	      '92': [0, 0],
	      '93': [0, 0],
	      '94': [0, 0],
	      '95': [0, 0],
	      '96': [0, 0],
	      '97': [0, 0],
	      '98': [0, 0],
	      '99': [0, 0],
	      '100': [0, 0],
	      '101': [0, 0],
	      '102': [0, 0],
	      '103': [0, 0],
	      '104': [0, 0],
	      '105': [0, 0],
	      '106': [0, 0],
	      '107': [0, 0],
	      '108': [0, 0, 0],
	      '109': [0, 0],
	      '110': [0, 0],
	      '111': [0, 0, 0, 0, 0, 0, 0, 0, 0],
	      '112': [0, 0],
	      '113': [0, 0],
	      '114': [0, 0],
	      '115': [0, 0],
	      '116': [0, 0],
	      '117': [0, 0],
	      '118': [0, 0],
	      '119': [0, 0],
	      '120': [0, 0],
	      '121': [0, 0],
	      '122': [0, 0],
	      '123': [0, 0],
	      '124': [0, 0],
	      '125': [0, 0],
	      '126': [0, 0],
	      '127': [0, 0],
	      '128': [0, 0],
	      '129': [0, 0],
	      '130': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	var Component$1 = (cov_1iiyehkoov.s[0]++, videojs.getComponent('Component'));
	var ControlBar$1 = (cov_1iiyehkoov.s[1]++, videojs.getComponent('ControlBar'));
	var Button$1 = (cov_1iiyehkoov.s[2]++, videojs.getComponent('Button'));
	var Tech$1 = (cov_1iiyehkoov.s[3]++, videojs.getComponent('Tech'));
	var DEFAULT_VOLUME = (cov_1iiyehkoov.s[4]++, 0.5);
	var FULL_VOLUME_HEIGHT = (cov_1iiyehkoov.s[5]++, 100);
	var PLAYER_STATE$1 = (cov_1iiyehkoov.s[6]++, {
	  IDLE: 'IDLE',
	  BUFFERING: 'BUFFERING',
	  LOADED: 'LOADED',
	  PLAYING: 'PLAYING',
	  PAUSED: 'PAUSED'
	});
	var hasReceiver = (cov_1iiyehkoov.s[7]++, false);

	var ChromecastButton = /*#__PURE__*/function (_Button) {
	  inheritsLoose(ChromecastButton, _Button);

	  function ChromecastButton(player, options) {
	    var _this2;

	    cov_1iiyehkoov.f[0]++;
	    cov_1iiyehkoov.s[8]++;
	    _this2 = _Button.call(this, player, options) || this;
	    cov_1iiyehkoov.s[9]++;
	    _this2.sources = {};
	    cov_1iiyehkoov.s[10]++;
	    _this2.player = player;
	    cov_1iiyehkoov.s[11]++;
	    _this2.options = options;
	    cov_1iiyehkoov.s[12]++;
	    _this2.casting = false;
	    cov_1iiyehkoov.s[13]++;
	    _this2.apiSession = null;
	    cov_1iiyehkoov.s[14]++;
	    _this2.tryingReconnect = 0;
	    cov_1iiyehkoov.s[15]++;
	    _this2.mDNS = false;
	    cov_1iiyehkoov.s[16]++;
	    _this2.choosenDevice = null;
	    cov_1iiyehkoov.s[17]++;

	    if ((cov_1iiyehkoov.b[1][0]++, _this2.options.mdns !== undefined) && (cov_1iiyehkoov.b[1][1]++, _this2.options.mdns)) {
	      cov_1iiyehkoov.b[0][0]++;
	      cov_1iiyehkoov.s[18]++;
	      _this2.mDNS = true;
	      cov_1iiyehkoov.s[19]++;
	      _this2.receivers = [];
	    } else {
	      cov_1iiyehkoov.b[0][1]++;
	    }

	    cov_1iiyehkoov.s[20]++;

	    _this2.hide();

	    cov_1iiyehkoov.s[21]++;

	    _this2.initPlayerHandler(assertThisInitialized(_this2));

	    cov_1iiyehkoov.s[22]++;
	    _this2.playerState = PLAYER_STATE$1.IDLE;
	    cov_1iiyehkoov.s[23]++;
	    _this2.playerStateBeforeSwitch = null;
	    cov_1iiyehkoov.s[24]++;
	    _this2.remotePlayer = null;
	    cov_1iiyehkoov.s[25]++;
	    _this2.remotePlayerController = null;
	    cov_1iiyehkoov.s[26]++;
	    _this2.currentMediaTime = 0;
	    cov_1iiyehkoov.s[27]++;
	    _this2.mediaDuration = -1;
	    cov_1iiyehkoov.s[28]++;
	    _this2.incrementMediaTimeHandler = _this2.incrementMediaTime.bind(assertThisInitialized(_this2));
	    cov_1iiyehkoov.s[29]++;
	    _this2.mediaInfo = null;
	    cov_1iiyehkoov.s[30]++;

	    _this2.setupLocalPlayer();

	    cov_1iiyehkoov.s[31]++;

	    _this2.addVideoThumbs();

	    cov_1iiyehkoov.s[32]++;

	    _this2.initializeUI(player);

	    return _this2;
	  }

	  var _proto = ChromecastButton.prototype;

	  _proto.initCastPlayer = function initCastPlayer() {
	    cov_1iiyehkoov.f[1]++;
	    cov_1iiyehkoov.s[33]++;

	    if (typeof window.cast === undefined) {
	      cov_1iiyehkoov.b[2][0]++;
	      cov_1iiyehkoov.s[34]++;
	      console.log('it is undefined');
	      cov_1iiyehkoov.s[35]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[2][1]++;
	    }

	    var _this = (cov_1iiyehkoov.s[36]++, this);

	    var options = (cov_1iiyehkoov.s[37]++, _this.options);
	    cov_1iiyehkoov.s[38]++;

	    if ((cov_1iiyehkoov.b[4][0]++, options.appId !== undefined) && (cov_1iiyehkoov.b[4][1]++, options.appId !== '')) {
	      cov_1iiyehkoov.b[3][0]++;
	      cov_1iiyehkoov.s[39]++;
	      this.appId = options.appId;
	    } else {
	      cov_1iiyehkoov.b[3][1]++;
	      cov_1iiyehkoov.s[40]++;

	      if (chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID) {
	        cov_1iiyehkoov.b[5][0]++;
	        cov_1iiyehkoov.s[41]++;
	        this.appId = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
	      } else {
	        cov_1iiyehkoov.b[5][1]++;
	      }
	    }

	    cov_1iiyehkoov.s[42]++;

	    if ((cov_1iiyehkoov.b[7][0]++, options.autoJoinPolicy !== undefined) && (cov_1iiyehkoov.b[7][1]++, options.autoJoinPolicy !== '')) {
	      cov_1iiyehkoov.b[6][0]++;
	      cov_1iiyehkoov.s[43]++;
	      this.autoJoinPolicy = options.autoJoinPolicy;
	    } else {
	      cov_1iiyehkoov.b[6][1]++;
	      cov_1iiyehkoov.s[44]++;

	      if (chrome.cast.AutoJoinPolicy.PAGE_SCOPED) {
	        cov_1iiyehkoov.b[8][0]++;
	        cov_1iiyehkoov.s[45]++;
	        this.autoJoinPolicy = chrome.cast.AutoJoinPolicy.PAGE_SCOPED;
	      } else {
	        cov_1iiyehkoov.b[8][1]++;
	      }
	    }

	    cov_1iiyehkoov.s[46]++;
	    cast.framework.CastContext.getInstance().setOptions({
	      receiverApplicationId: this.appId,
	      autoJoinPolicy: this.autoJoinPolicy
	    });
	    cov_1iiyehkoov.s[47]++;

	    if ((cov_1iiyehkoov.b[10][0]++, this.options.mdns !== undefined) && (cov_1iiyehkoov.b[10][1]++, this.options.mdns)) {
	      cov_1iiyehkoov.b[9][0]++;
	      var ChromecastAPI = (cov_1iiyehkoov.s[48]++, require('chromecast-api'));
	      var client = (cov_1iiyehkoov.s[49]++, new ChromecastAPI());
	      cov_1iiyehkoov.s[50]++;
	      this.client = client;
	      cov_1iiyehkoov.s[51]++;
	      this.mDNS = true;
	      cov_1iiyehkoov.s[52]++;
	      this.choosenDevice = null;
	      cov_1iiyehkoov.s[53]++;
	      this.client.on('device', function (device) {
	        cov_1iiyehkoov.f[2]++;
	        cov_1iiyehkoov.s[54]++;

	        if (device !== undefined) {
	          cov_1iiyehkoov.b[11][0]++;
	          cov_1iiyehkoov.s[55]++;

	          _this.receivers.push(device);

	          cov_1iiyehkoov.s[56]++;

	          _this.show();
	        } else {
	          cov_1iiyehkoov.b[11][1]++;
	        }
	      });
	    } else {
	      cov_1iiyehkoov.b[9][1]++;
	    }

	    cov_1iiyehkoov.s[57]++;
	    this.remotePlayer = new cast.framework.RemotePlayer();
	    cov_1iiyehkoov.s[58]++;
	    this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer);
	    cov_1iiyehkoov.s[59]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, function (e) {
	      cov_1iiyehkoov.f[3]++;
	      cov_1iiyehkoov.s[60]++;
	      this.switchPlayer(e.value);
	    }.bind(this));
	    cov_1iiyehkoov.s[61]++;
	    this.apiInitialized = true;
	  };

	  _proto.initPlayerHandler = function initPlayerHandler(_this) {
	    if (_this === void 0) {
	      _this = (cov_1iiyehkoov.b[12][0]++, {});
	    }

	    cov_1iiyehkoov.f[4]++;
	    cov_1iiyehkoov.s[62]++;
	    this.playerHandler = {};
	    cov_1iiyehkoov.s[63]++;
	    this.playerHandler.target = {};
	    cov_1iiyehkoov.s[64]++;

	    this.playerHandler.setTarget = function (target) {
	      cov_1iiyehkoov.f[5]++;
	      cov_1iiyehkoov.s[65]++;
	      _this.playerHandler.target = target;
	    };

	    cov_1iiyehkoov.s[66]++;

	    this.playerHandler.play = function () {
	      cov_1iiyehkoov.f[6]++;
	      cov_1iiyehkoov.s[67]++;

	      if ((cov_1iiyehkoov.b[14][0]++, _this.playerState == PLAYER_STATE$1.IDLE) || (cov_1iiyehkoov.b[14][1]++, !_this.playerHandler.target.isMediaLoaded())) {
	        cov_1iiyehkoov.b[13][0]++;
	        cov_1iiyehkoov.s[68]++;

	        _this.playerHandler.load();

	        cov_1iiyehkoov.s[69]++;
	        return;
	      } else {
	        cov_1iiyehkoov.b[13][1]++;
	      }

	      cov_1iiyehkoov.s[70]++;
	      _this.playerState = PLAYER_STATE$1.PLAYING;
	      cov_1iiyehkoov.s[71]++;

	      _this.playerHandler.target.play();
	    };

	    cov_1iiyehkoov.s[72]++;

	    this.playerHandler.pause = function () {
	      cov_1iiyehkoov.f[7]++;
	      cov_1iiyehkoov.s[73]++;
	      _this.playerState = PLAYER_STATE$1.PAUSED;
	      cov_1iiyehkoov.s[74]++;

	      _this.playerHandler.target.pause();
	    };

	    cov_1iiyehkoov.s[75]++;

	    this.playerHandler.stop = function () {
	      cov_1iiyehkoov.f[8]++;
	      cov_1iiyehkoov.s[76]++;
	      _this.playerState = PLAYER_STATE$1.IDLE;
	      cov_1iiyehkoov.s[77]++;

	      _this.playerHandler.target.stop();
	    };

	    cov_1iiyehkoov.s[78]++;

	    this.playerHandler.load = function () {
	      cov_1iiyehkoov.f[9]++;
	      cov_1iiyehkoov.s[79]++;
	      _this.playerState = PLAYER_STATE$1.BUFFERING;
	      cov_1iiyehkoov.s[80]++;

	      _this.playerHandler.target.load();
	    };

	    cov_1iiyehkoov.s[81]++;

	    this.playerHandler.isMediaLoaded = function () {
	      cov_1iiyehkoov.f[10]++;
	      cov_1iiyehkoov.s[82]++;
	      return _this.playerHandler.target.isMediaLoaded();
	    };

	    cov_1iiyehkoov.s[83]++;

	    this.playerHandler.prepareToPlay = function () {
	      cov_1iiyehkoov.f[11]++;
	      cov_1iiyehkoov.s[84]++;
	      _this.mediaDuration = _this.playerHandler.getMediaDuration();
	      cov_1iiyehkoov.s[85]++;

	      _this.playerHandler.updateDurationDisplay();

	      cov_1iiyehkoov.s[86]++;
	      _this.playerState = PLAYER_STATE$1.LOADED;
	      cov_1iiyehkoov.s[87]++;

	      _this.playerHandler.play();

	      cov_1iiyehkoov.s[88]++;

	      _this.playerHandler.updateDisplay();
	    };

	    cov_1iiyehkoov.s[89]++;

	    this.playerHandler.getCurrentMediaTime = function () {
	      cov_1iiyehkoov.f[12]++;
	      cov_1iiyehkoov.s[90]++;
	      return _this.playerHandler.target.getCurrentMediaTime();
	    };

	    cov_1iiyehkoov.s[91]++;

	    this.playerHandler.getMediaDuration = function () {
	      cov_1iiyehkoov.f[13]++;
	      cov_1iiyehkoov.s[92]++;
	      return _this.playerHandler.target.getMediaDuration();
	    };

	    cov_1iiyehkoov.s[93]++;

	    this.playerHandler.updateDisplay = function () {
	      cov_1iiyehkoov.f[14]++;
	      cov_1iiyehkoov.s[94]++;
	      _this.playerHandler.currentMediaTime = _this.playerHandler.target.getCurrentMediaTime();
	      cov_1iiyehkoov.s[95]++;
	      _this.playerHandler.mediaDuration = _this.playerHandler.target.getMediaDuration();
	      cov_1iiyehkoov.s[96]++;

	      _this.playerHandler.target.updateDisplay();
	    };

	    cov_1iiyehkoov.s[97]++;

	    this.playerHandler.updateCurrentTimeDisplay = function () {
	      cov_1iiyehkoov.f[15]++;
	      cov_1iiyehkoov.s[98]++;

	      _this.playerHandler.target.updateCurrentTimeDisplay();
	    };

	    cov_1iiyehkoov.s[99]++;

	    this.playerHandler.updateDurationDisplay = function () {
	      cov_1iiyehkoov.f[16]++;
	      cov_1iiyehkoov.s[100]++;

	      _this.playerHandler.target.updateDurationDisplay();
	    };

	    cov_1iiyehkoov.s[101]++;

	    this.playerHandler.setTimeString = function (time) {
	      cov_1iiyehkoov.f[17]++;
	      cov_1iiyehkoov.s[102]++;

	      _this.playerHandler.target.setTimeString(time);
	    };

	    cov_1iiyehkoov.s[103]++;

	    this.playerHandler.setVolume = function (volumeSliderPosition) {
	      cov_1iiyehkoov.f[18]++;
	      cov_1iiyehkoov.s[104]++;

	      _this.playerHandler.target.setVolume(volumeSliderPosition);
	    };

	    cov_1iiyehkoov.s[105]++;

	    this.playerHandler.mute = function () {
	      cov_1iiyehkoov.f[19]++;
	      cov_1iiyehkoov.s[106]++;

	      _this.playerHandler.target.mute();
	    };

	    cov_1iiyehkoov.s[107]++;

	    this.playerHandler.unMute = function () {
	      cov_1iiyehkoov.f[20]++;
	      cov_1iiyehkoov.s[108]++;

	      _this.playerHandler.target.unMute();
	    };

	    cov_1iiyehkoov.s[109]++;

	    this.playerHandler.isMuted = function () {
	      cov_1iiyehkoov.f[21]++;
	      cov_1iiyehkoov.s[110]++;
	      return _this.playerHandler.target.isMuted();
	    };

	    cov_1iiyehkoov.s[111]++;

	    this.playerHandler.seekTo = function (time) {
	      cov_1iiyehkoov.f[22]++;
	      cov_1iiyehkoov.s[112]++;

	      _this.playerHandler.target.seekTo(time);
	    };
	  };

	  _proto.initializeUI = function initializeUI(player) {
	    var _this3 = this;

	    cov_1iiyehkoov.f[23]++;

	    var _this = (cov_1iiyehkoov.s[113]++, this);

	    cov_1iiyehkoov.s[114]++;

	    if (player.controlBar !== undefined) {
	      cov_1iiyehkoov.b[15][0]++;
	      cov_1iiyehkoov.s[115]++;
	      this.createGoogleButton();
	      cov_1iiyehkoov.s[116]++;

	      if (this.mDNS) {
	        cov_1iiyehkoov.b[16][0]++;
	        cov_1iiyehkoov.s[117]++;
	        this.createCustomButton();
	      } else {
	        cov_1iiyehkoov.b[16][1]++;
	      }

	      cov_1iiyehkoov.s[118]++;
	      player.controlBar.chromecastButton = this;
	    } else {
	      cov_1iiyehkoov.b[15][1]++;
	      cov_1iiyehkoov.s[119]++;
	      return;
	    }

	    cov_1iiyehkoov.s[120]++;
	    this.on(player, 'seeked', function () {
	      cov_1iiyehkoov.f[24]++;
	      cov_1iiyehkoov.s[121]++;

	      if ((cov_1iiyehkoov.b[18][0]++, _this3.casting) && (cov_1iiyehkoov.b[18][1]++, _this3.apiSession)) {
	        cov_1iiyehkoov.b[17][0]++;
	        cov_1iiyehkoov.s[122]++;

	        _this3.seekMedia(_this3.player_.currentTime());
	      } else {
	        cov_1iiyehkoov.b[17][1]++;
	        cov_1iiyehkoov.s[123]++;

	        if ((cov_1iiyehkoov.b[20][0]++, _this3.mDNS) && (cov_1iiyehkoov.b[20][1]++, _this3.choosenDevice !== null)) {
	          cov_1iiyehkoov.b[19][0]++;
	          cov_1iiyehkoov.s[124]++;

	          _this3.choosenDevice.on('status', function (status) {
	            cov_1iiyehkoov.f[25]++;
	            cov_1iiyehkoov.s[125]++;
	            console.log(status);
	          });

	          cov_1iiyehkoov.s[126]++;

	          _this3.choosenDevice.seekTo(_this3.player_.currentTime(), function (callback) {
	            cov_1iiyehkoov.f[26]++;
	            cov_1iiyehkoov.s[127]++;
	            console.log("seek to position");
	          });
	        } else {
	          cov_1iiyehkoov.b[19][1]++;
	        }
	      }
	    });
	    cov_1iiyehkoov.s[128]++;
	    this.on(player, 'play', function (el) {
	      cov_1iiyehkoov.f[27]++;
	      cov_1iiyehkoov.s[129]++;

	      if ((cov_1iiyehkoov.b[22][0]++, _this3.casting) && (cov_1iiyehkoov.b[22][1]++, _this3.apiSession)) {
	        cov_1iiyehkoov.b[21][0]++;
	        cov_1iiyehkoov.s[130]++;

	        _this3.playerHandler.play();
	      } else {
	        cov_1iiyehkoov.b[21][1]++;
	        cov_1iiyehkoov.s[131]++;

	        if ((cov_1iiyehkoov.b[24][0]++, _this3.mDNS) && (cov_1iiyehkoov.b[24][1]++, _this3.choosenDevice !== null)) {
	          cov_1iiyehkoov.b[23][0]++;
	          cov_1iiyehkoov.s[132]++;

	          _this3.choosenDevice.on('status', function (status) {
	            cov_1iiyehkoov.f[28]++;
	            cov_1iiyehkoov.s[133]++;
	            console.log(status);
	          });

	          cov_1iiyehkoov.s[134]++;

	          _this3.choosenDevice.resume(function (callback) {
	            cov_1iiyehkoov.f[29]++;
	            cov_1iiyehkoov.s[135]++;
	            console.log("play cast");
	          });
	        } else {
	          cov_1iiyehkoov.b[23][1]++;
	        }
	      }
	    });
	    cov_1iiyehkoov.s[136]++;
	    this.on(player, 'pause', function (el) {
	      cov_1iiyehkoov.f[30]++;
	      cov_1iiyehkoov.s[137]++;

	      if ((cov_1iiyehkoov.b[26][0]++, _this3.casting) && (cov_1iiyehkoov.b[26][1]++, _this3.apiSession)) {
	        cov_1iiyehkoov.b[25][0]++;
	        cov_1iiyehkoov.s[138]++;

	        _this3.playerHandler.pause();
	      } else {
	        cov_1iiyehkoov.b[25][1]++;
	        cov_1iiyehkoov.s[139]++;

	        if ((cov_1iiyehkoov.b[28][0]++, _this3.mDNS) && (cov_1iiyehkoov.b[28][1]++, _this3.choosenDevice !== null)) {
	          cov_1iiyehkoov.b[27][0]++;
	          cov_1iiyehkoov.s[140]++;

	          _this3.choosenDevice.on('status', function (status) {
	            cov_1iiyehkoov.f[31]++;
	            cov_1iiyehkoov.s[141]++;
	            console.log(status);
	          });

	          cov_1iiyehkoov.s[142]++;

	          _this3.choosenDevice.pause(function (callback) {
	            cov_1iiyehkoov.f[32]++;
	            cov_1iiyehkoov.s[143]++;
	            console.log("pause cast");
	          });
	        } else {
	          cov_1iiyehkoov.b[27][1]++;
	        }
	      }
	    });
	    cov_1iiyehkoov.s[144]++;
	    this.on(player, 'volumechange', function (el) {
	      cov_1iiyehkoov.f[33]++;
	      cov_1iiyehkoov.s[145]++;

	      if ((cov_1iiyehkoov.b[30][0]++, _this3.casting) && (cov_1iiyehkoov.b[30][1]++, _this3.apiSession)) {
	        cov_1iiyehkoov.b[29][0]++;
	        var volumeLevel = (cov_1iiyehkoov.s[146]++, _this3.player_.volume());
	        cov_1iiyehkoov.s[147]++;

	        if (_this3.player_.muted()) {
	          cov_1iiyehkoov.b[31][0]++;
	          cov_1iiyehkoov.s[148]++;

	          _this3.playerHandler.mute();

	          cov_1iiyehkoov.s[149]++;
	          volumeLevel = 0;
	        } else {
	          cov_1iiyehkoov.b[31][1]++;
	          cov_1iiyehkoov.s[150]++;

	          _this3.playerHandler.unMute();
	        }

	        cov_1iiyehkoov.s[151]++;

	        _this3.playerHandler.setVolume(volumeLevel);
	      } else {
	        cov_1iiyehkoov.b[29][1]++;
	        cov_1iiyehkoov.s[152]++;

	        if ((cov_1iiyehkoov.b[33][0]++, _this3.mDNS) && (cov_1iiyehkoov.b[33][1]++, _this3.choosenDevice !== null)) {
	          cov_1iiyehkoov.b[32][0]++;
	          var volumeLevel = (cov_1iiyehkoov.s[153]++, _this3.player_.volume());
	          cov_1iiyehkoov.s[154]++;

	          if (_this3.player_.muted()) {
	            cov_1iiyehkoov.b[34][0]++;
	            cov_1iiyehkoov.s[155]++;
	            volumeLevel = 0;
	          } else {
	            cov_1iiyehkoov.b[34][1]++;
	          }

	          cov_1iiyehkoov.s[156]++;

	          _this3.choosenDevice.on('status', function (status) {
	            cov_1iiyehkoov.f[34]++;
	            cov_1iiyehkoov.s[157]++;
	            console.log(status);
	          });

	          cov_1iiyehkoov.s[158]++;

	          _this3.choosenDevice.setVolume(volumeLevel, function (callback) {
	            cov_1iiyehkoov.f[35]++;
	            cov_1iiyehkoov.s[159]++;
	            console.log("pause cast");
	          });
	        } else {
	          cov_1iiyehkoov.b[32][1]++;
	        }
	      }
	    });
	    cov_1iiyehkoov.s[160]++;
	    this.on(player, 'loadedmetadata', function (el) {
	      cov_1iiyehkoov.f[36]++;
	      cov_1iiyehkoov.s[161]++;

	      _this3.onMediaLoadedLocally(_this3);
	    });
	    cov_1iiyehkoov.s[162]++;
	    this.on(player, 'dispose', function () {
	      cov_1iiyehkoov.f[37]++;
	      cov_1iiyehkoov.s[163]++;

	      if ((cov_1iiyehkoov.b[36][0]++, _this3.casting) && (cov_1iiyehkoov.b[36][1]++, _this3.apiSession)) {
	        cov_1iiyehkoov.b[35][0]++;
	        cov_1iiyehkoov.s[164]++;
	        _this3.disposed = true;
	        cov_1iiyehkoov.s[165]++;

	        _this3.stop();
	      } else {
	        cov_1iiyehkoov.b[35][1]++;
	        cov_1iiyehkoov.s[166]++;

	        if ((cov_1iiyehkoov.b[38][0]++, _this3.mDNS) && (cov_1iiyehkoov.b[38][1]++, _this3.choosenDevice !== null)) {
	          cov_1iiyehkoov.b[37][0]++;
	          cov_1iiyehkoov.s[167]++;

	          _this3.choosenDevice.on('status', function (status) {
	            cov_1iiyehkoov.f[38]++;
	            cov_1iiyehkoov.s[168]++;
	            console.log(status);
	          });

	          cov_1iiyehkoov.s[169]++;

	          _this3.choosenDevice.stop(function (callback) {
	            cov_1iiyehkoov.f[39]++;
	            cov_1iiyehkoov.s[170]++;
	            console.log("stop cast");
	          });
	        } else {
	          cov_1iiyehkoov.b[37][1]++;
	        }
	      }
	    });
	  };

	  _proto.createGoogleButton = function createGoogleButton() {
	    cov_1iiyehkoov.f[40]++;
	    var jsControlBar = (cov_1iiyehkoov.s[171]++, document.getElementsByClassName('vjs-control-bar'));
	    cov_1iiyehkoov.s[172]++;

	    if (document.getElementsByClassName('vjs-chromecast-button').length <= 0) {
	      cov_1iiyehkoov.b[39][0]++;
	      var castComponent = (cov_1iiyehkoov.s[173]++, document.createElement('google-cast-launcher'));
	      cov_1iiyehkoov.s[174]++;
	      castComponent.setAttribute('class', 'vjs-chromecast-button vjs-control vjs-button');
	      cov_1iiyehkoov.s[175]++;
	      castComponent.setAttribute('type', 'button');
	      cov_1iiyehkoov.s[176]++;

	      if (jsControlBar.length > 0) {
	        cov_1iiyehkoov.b[40][0]++;
	        cov_1iiyehkoov.s[177]++;
	        jsControlBar[0].appendChild(castComponent);
	      } else {
	        cov_1iiyehkoov.b[40][1]++;
	      }
	    } else {
	      cov_1iiyehkoov.b[39][1]++;
	    }
	  };

	  _proto.createCustomButton = function createCustomButton() {
	    cov_1iiyehkoov.f[41]++;

	    var _this = (cov_1iiyehkoov.s[178]++, this);

	    var jsControlBar = (cov_1iiyehkoov.s[179]++, document.getElementsByClassName('vjs-control-bar'));
	    cov_1iiyehkoov.s[180]++;

	    if (document.getElementsByClassName('vjs-chromecast-button-mdns').length <= 0) {
	      cov_1iiyehkoov.b[41][0]++;
	      var castComponent = (cov_1iiyehkoov.s[181]++, document.createElement('button'));
	      cov_1iiyehkoov.s[182]++;
	      castComponent.setAttribute('class', 'vjs-chromecast-button-mdns vjs-control vjs-button');
	      cov_1iiyehkoov.s[183]++;
	      castComponent.setAttribute('type', 'button');
	      cov_1iiyehkoov.s[184]++;
	      castComponent.addEventListener('click', function () {
	        cov_1iiyehkoov.f[42]++;
	        cov_1iiyehkoov.s[185]++;

	        _this.findSources();

	        cov_1iiyehkoov.s[186]++;

	        if (_this.client === undefined) {
	          cov_1iiyehkoov.b[42][0]++;
	          var ChromecastAPI = (cov_1iiyehkoov.s[187]++, require('chromecast-api'));
	          var client = (cov_1iiyehkoov.s[188]++, new ChromecastAPI());
	          cov_1iiyehkoov.s[189]++;
	          _this.client = client;
	          cov_1iiyehkoov.s[190]++;

	          _this.client.on('device', function (device) {
	            cov_1iiyehkoov.f[43]++;
	            cov_1iiyehkoov.s[191]++;

	            if (device !== undefined) {
	              cov_1iiyehkoov.b[43][0]++;
	              cov_1iiyehkoov.s[192]++;

	              _this.receivers.push(device);
	            } else {
	              cov_1iiyehkoov.b[43][1]++;
	            }
	          });
	        } else {
	          cov_1iiyehkoov.b[42][1]++;
	        }

	        cov_1iiyehkoov.s[193]++;

	        for (var i = 0; i < _this.receivers.length; i++) {
	          cov_1iiyehkoov.s[194]++;

	          if (_this.receivers[i].friendlyName == "Séjour") {
	            cov_1iiyehkoov.b[44][0]++;
	            cov_1iiyehkoov.s[195]++;
	            _this.choosenDevice = _this.receivers[i];
	            cov_1iiyehkoov.s[196]++;

	            _this.receivers[i].play(_this.sources.src, function (err) {
	              cov_1iiyehkoov.f[44]++;
	            });
	          } else {
	            cov_1iiyehkoov.b[44][1]++;
	          }
	        }
	      });
	      cov_1iiyehkoov.s[197]++;

	      if (jsControlBar.length > 0) {
	        cov_1iiyehkoov.b[45][0]++;
	        cov_1iiyehkoov.s[198]++;
	        jsControlBar[0].appendChild(castComponent);
	        var span = (cov_1iiyehkoov.s[199]++, document.createElement('span'));
	        cov_1iiyehkoov.s[200]++;
	        span.setAttribute('class', 'vjs-icon-chromecast');
	        var getCastBtn = (cov_1iiyehkoov.s[201]++, document.getElementsByClassName('vjs-chromecast-button-mdns'));
	        cov_1iiyehkoov.s[202]++;
	        getCastBtn[0].appendChild(span);
	      } else {
	        cov_1iiyehkoov.b[45][1]++;
	      }
	    } else {
	      cov_1iiyehkoov.b[41][1]++;
	    }
	  };

	  _proto.hide = function hide() {
	    cov_1iiyehkoov.f[45]++;
	    cov_1iiyehkoov.s[203]++;

	    _Button.prototype.hide.call(this);

	    var castButton = (cov_1iiyehkoov.s[204]++, castButton = document.getElementsByClassName('vjs-chromecast-button'));
	    cov_1iiyehkoov.s[205]++;

	    if (castButton.length > 0) {
	      cov_1iiyehkoov.b[46][0]++;
	      cov_1iiyehkoov.s[206]++;
	      castButton[0].style.display = 'none';
	    } else {
	      cov_1iiyehkoov.b[46][1]++;
	    }

	    cov_1iiyehkoov.s[207]++;

	    if (this.mDNS) {
	      cov_1iiyehkoov.b[47][0]++;
	      cov_1iiyehkoov.s[208]++;
	      castButton = document.getElementsByClassName('vjs-chromecast-button-mdns');
	      cov_1iiyehkoov.s[209]++;

	      if (castButton.length > 0) {
	        cov_1iiyehkoov.b[48][0]++;
	        cov_1iiyehkoov.s[210]++;
	        castButton[0].style.display = 'none';
	      } else {
	        cov_1iiyehkoov.b[48][1]++;
	      }
	    } else {
	      cov_1iiyehkoov.b[47][1]++;
	    }
	  };

	  _proto.show = function show() {
	    cov_1iiyehkoov.f[46]++;
	    cov_1iiyehkoov.s[211]++;

	    _Button.prototype.show.call(this);

	    var castButton = (cov_1iiyehkoov.s[212]++, null);
	    cov_1iiyehkoov.s[213]++;

	    if (this.mDNS) {
	      cov_1iiyehkoov.b[49][0]++;
	      cov_1iiyehkoov.s[214]++;
	      castButton = document.getElementsByClassName('vjs-chromecast-button-mdns');
	    } else {
	      cov_1iiyehkoov.b[49][1]++;
	      cov_1iiyehkoov.s[215]++;
	      castButton = document.getElementsByClassName('vjs-chromecast-button');
	    }

	    cov_1iiyehkoov.s[216]++;

	    if (castButton.length > 0) {
	      cov_1iiyehkoov.b[50][0]++;
	      cov_1iiyehkoov.s[217]++;
	      castButton[0].style.display = 'block';
	    } else {
	      cov_1iiyehkoov.b[50][1]++;
	    }
	  };

	  _proto.buildCSSClass = function buildCSSClass() {
	    cov_1iiyehkoov.f[47]++;
	    cov_1iiyehkoov.s[218]++;

	    if (this.mDNS) {
	      cov_1iiyehkoov.b[51][0]++;
	      cov_1iiyehkoov.s[219]++;
	      return "vjs-chromecast-button-mdns " + _Button.prototype.buildCSSClass.call(this, this);
	    } else {
	      cov_1iiyehkoov.b[51][1]++;
	    }

	    cov_1iiyehkoov.s[220]++;
	    return "vjs-chromecast-button " + _Button.prototype.buildCSSClass.call(this, this);
	  };

	  _proto.receiverListener = function receiverListener(availability) {
	    cov_1iiyehkoov.f[48]++;
	    cov_1iiyehkoov.s[221]++;

	    if (this.disposed) {
	      cov_1iiyehkoov.b[52][0]++;
	      cov_1iiyehkoov.s[222]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[52][1]++;
	    }

	    cov_1iiyehkoov.s[223]++;

	    if (availability === 'available') {
	      cov_1iiyehkoov.b[53][0]++;
	      cov_1iiyehkoov.s[224]++;
	      hasReceiver = true;
	      cov_1iiyehkoov.s[225]++;
	      return this.show();
	    } else {
	      cov_1iiyehkoov.b[53][1]++;
	    }

	    cov_1iiyehkoov.s[226]++;
	    hasReceiver = false;
	    cov_1iiyehkoov.s[227]++;
	    return this.hide();
	  };

	  _proto.findSources = function findSources() {
	    cov_1iiyehkoov.f[49]++;
	    var source = (cov_1iiyehkoov.s[228]++, null);
	    cov_1iiyehkoov.s[229]++;

	    if (this.player_ === null) {
	      cov_1iiyehkoov.b[54][0]++;
	      cov_1iiyehkoov.s[230]++;

	      if (this.player.cache_ !== undefined) {
	        cov_1iiyehkoov.b[55][0]++;
	        cov_1iiyehkoov.s[231]++;

	        if (this.player.cache_.source != undefined) {
	          cov_1iiyehkoov.b[56][0]++;
	          cov_1iiyehkoov.s[232]++;
	          source = this.player.cache_.source;
	        } else {
	          cov_1iiyehkoov.b[56][1]++;
	        }
	      } else {
	        cov_1iiyehkoov.b[55][1]++;
	      }
	    } else {
	      cov_1iiyehkoov.b[54][1]++;
	      cov_1iiyehkoov.s[233]++;
	      source = this.player_.currentSource();
	    }

	    cov_1iiyehkoov.s[234]++;
	    this.sources = source;
	    cov_1iiyehkoov.s[235]++;
	    return this.sources;
	  };

	  _proto.switchPlayer = function switchPlayer(value) {
	    cov_1iiyehkoov.f[50]++;
	    cov_1iiyehkoov.s[236]++;
	    this.playerStateBeforeSwitch = this.playerState;
	    cov_1iiyehkoov.s[237]++;

	    if (value) {
	      cov_1iiyehkoov.b[57][0]++;
	      cov_1iiyehkoov.s[238]++;

	      if ((cov_1iiyehkoov.b[59][0]++, cast) && (cov_1iiyehkoov.b[59][1]++, cast.framework) && (cov_1iiyehkoov.b[59][2]++, this.remotePlayer.isConnected)) {
	        cov_1iiyehkoov.b[58][0]++;
	        cov_1iiyehkoov.s[239]++;
	        this.playerHandler.pause();
	        cov_1iiyehkoov.s[240]++;
	        this.setupRemotePlayer();
	      } else {
	        cov_1iiyehkoov.b[58][1]++;
	        cov_1iiyehkoov.s[241]++;
	        this.setupLocalPlayer();
	      }
	    } else {
	      cov_1iiyehkoov.b[57][1]++;
	      cov_1iiyehkoov.s[242]++;
	      this.setupLocalPlayer();
	    }
	  };

	  _proto.setupRemotePlayer = function setupRemotePlayer() {
	    cov_1iiyehkoov.f[51]++;
	    cov_1iiyehkoov.s[243]++;
	    console.log(this.remotePlayerController);
	    cov_1iiyehkoov.s[244]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.MEDIA_INFO_CHANGED, function (event) {
	      cov_1iiyehkoov.f[52]++;
	      var session = (cov_1iiyehkoov.s[245]++, cast.framework.CastContext.getInstance().getCurrentSession());
	      cov_1iiyehkoov.s[246]++;

	      if (!session) {
	        cov_1iiyehkoov.b[60][0]++;
	        cov_1iiyehkoov.s[247]++;
	        this.mediaInfo = null;
	        cov_1iiyehkoov.s[248]++;
	        this.playerHandler.updateDisplay();
	        cov_1iiyehkoov.s[249]++;
	        return;
	      } else {
	        cov_1iiyehkoov.b[60][1]++;
	      }

	      var media = (cov_1iiyehkoov.s[250]++, session.getMediaSession());
	      cov_1iiyehkoov.s[251]++;

	      if (!media) {
	        cov_1iiyehkoov.b[61][0]++;
	        cov_1iiyehkoov.s[252]++;
	        this.mediaInfo = null;
	        cov_1iiyehkoov.s[253]++;
	        this.playerHandler.updateDisplay();
	        cov_1iiyehkoov.s[254]++;
	        return;
	      } else {
	        cov_1iiyehkoov.b[61][1]++;
	      }

	      cov_1iiyehkoov.s[255]++;
	      this.apiSession = session;
	      cov_1iiyehkoov.s[256]++;
	      this.mediaInfo = media.media;
	      cov_1iiyehkoov.s[257]++;

	      if (this.mediaInfo) {
	        cov_1iiyehkoov.b[62][0]++;
	        cov_1iiyehkoov.s[258]++;
	        this.isLiveContent = this.mediaInfo.streamType == chrome.cast.media.StreamType.LIVE;
	      } else {
	        cov_1iiyehkoov.b[62][1]++;
	      }

	      cov_1iiyehkoov.s[259]++;

	      if ((cov_1iiyehkoov.b[64][0]++, media.playerState == PLAYER_STATE$1.PLAYING) && (cov_1iiyehkoov.b[64][1]++, this.playerState !== PLAYER_STATE$1.PLAYING)) {
	        cov_1iiyehkoov.b[63][0]++;
	        cov_1iiyehkoov.s[260]++;
	        this.playerHandler.prepareToPlay();
	      } else {
	        cov_1iiyehkoov.b[63][1]++;
	      }

	      cov_1iiyehkoov.s[261]++;
	      this.playerHandler.updateDisplay();
	    }.bind(this));
	    cov_1iiyehkoov.s[262]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.CAN_SEEK_CHANGED, function (event) {
	      cov_1iiyehkoov.f[53]++;
	    }.bind(this));
	    cov_1iiyehkoov.s[263]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED, function () {
	      cov_1iiyehkoov.f[54]++;
	      cov_1iiyehkoov.s[264]++;

	      if (this.remotePlayer.isPaused) {
	        cov_1iiyehkoov.b[65][0]++;
	        cov_1iiyehkoov.s[265]++;
	        this.playerHandler.pause();
	      } else {
	        cov_1iiyehkoov.b[65][1]++;
	        cov_1iiyehkoov.s[266]++;

	        if (this.playerState !== PLAYER_STATE$1.PLAYING) {
	          cov_1iiyehkoov.b[66][0]++;
	          cov_1iiyehkoov.s[267]++;
	          this.playerHandler.play();
	        } else {
	          cov_1iiyehkoov.b[66][1]++;
	        }
	      }
	    }.bind(this));
	    cov_1iiyehkoov.s[268]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED, function () {
	      cov_1iiyehkoov.f[55]++;
	      cov_1iiyehkoov.s[269]++;

	      if (this.remotePlayer.isMuted) {
	        cov_1iiyehkoov.b[67][0]++;
	        cov_1iiyehkoov.s[270]++;
	        this.playerHandler.mute();
	      } else {
	        cov_1iiyehkoov.b[67][1]++;
	        cov_1iiyehkoov.s[271]++;
	        this.playerHandler.unMute();
	      }
	    }.bind(this));
	    cov_1iiyehkoov.s[272]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, function () {
	      cov_1iiyehkoov.f[56]++;
	      var newVolume = (cov_1iiyehkoov.s[273]++, this.remotePlayer.volumeLevel);
	      cov_1iiyehkoov.s[274]++;
	      this.player_.setVolume(newVolume);
	    }.bind(this));
	    cov_1iiyehkoov.s[275]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_PLAYING_BREAK_CHANGED, function (event) {
	      cov_1iiyehkoov.f[57]++;
	      cov_1iiyehkoov.s[276]++;
	      this.isPlayingBreak(event.value);
	    }.bind(this));
	    cov_1iiyehkoov.s[277]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.WHEN_SKIPPABLE_CHANGED, function (event) {
	      cov_1iiyehkoov.f[58]++;
	      cov_1iiyehkoov.s[278]++;
	      this.onWhenSkippableChanged(event.value);
	    }.bind(this));
	    cov_1iiyehkoov.s[279]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.CURRENT_BREAK_CLIP_TIME_CHANGED, function (event) {
	      cov_1iiyehkoov.f[59]++;
	      cov_1iiyehkoov.s[280]++;
	      this.onCurrentBreakClipTimeChanged(event.value);
	    }.bind(this));
	    cov_1iiyehkoov.s[281]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.BREAK_CLIP_ID_CHANGED, function (event) {
	      cov_1iiyehkoov.f[60]++;
	      cov_1iiyehkoov.s[282]++;
	      this.onBreakClipIdChanged(event.value);
	    }.bind(this));
	    cov_1iiyehkoov.s[283]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.LIVE_SEEKABLE_RANGE_CHANGED, function (event) {
	      cov_1iiyehkoov.f[61]++;
	      cov_1iiyehkoov.s[284]++;
	      videojs.log('LIVE_SEEKABLE_RANGE_CHANGED');
	      cov_1iiyehkoov.s[285]++;
	      this.liveSeekableRange = event.value;
	    }.bind(this));
	    var playerTarget = (cov_1iiyehkoov.s[286]++, {});
	    cov_1iiyehkoov.s[287]++;

	    playerTarget.play = function () {
	      cov_1iiyehkoov.f[62]++;
	      cov_1iiyehkoov.s[288]++;

	      if (this.remotePlayer.isPaused) {
	        cov_1iiyehkoov.b[68][0]++;
	        cov_1iiyehkoov.s[289]++;
	        this.remotePlayerController.playOrPause();
	        cov_1iiyehkoov.s[290]++;
	        this.player_.play();
	      } else {
	        cov_1iiyehkoov.b[68][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[291]++;

	    playerTarget.pause = function () {
	      cov_1iiyehkoov.f[63]++;
	      cov_1iiyehkoov.s[292]++;

	      if (!this.remotePlayer.isPaused) {
	        cov_1iiyehkoov.b[69][0]++;
	        cov_1iiyehkoov.s[293]++;
	        this.remotePlayerController.playOrPause();
	        cov_1iiyehkoov.s[294]++;
	        this.player_.pause();
	      } else {
	        cov_1iiyehkoov.b[69][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[295]++;

	    playerTarget.stop = function () {
	      cov_1iiyehkoov.f[64]++;
	      cov_1iiyehkoov.s[296]++;
	      this.remotePlayerController.stop();
	    }.bind(this);

	    cov_1iiyehkoov.s[297]++;

	    playerTarget.load = function () {
	      cov_1iiyehkoov.f[65]++;
	      cov_1iiyehkoov.s[298]++;
	      this.findSources();
	      cov_1iiyehkoov.s[299]++;
	      videojs.log('Loading...' + ' test');
	      var mediaInfo = (cov_1iiyehkoov.s[300]++, new chrome.cast.media.MediaInfo(this.sources.src, this.sources.type));
	      cov_1iiyehkoov.s[301]++;
	      mediaInfo.streamType = chrome.cast.media.StreamType.BUFFERED;
	      cov_1iiyehkoov.s[302]++;
	      mediaInfo.metadata = new chrome.cast.media.TvShowMediaMetadata();
	      cov_1iiyehkoov.s[303]++;
	      mediaInfo.metadata.title = 'test';
	      cov_1iiyehkoov.s[304]++;
	      mediaInfo.metadata.subtitle = 'subtest';
	      var poster = (cov_1iiyehkoov.s[305]++, this.player_.poster());
	      cov_1iiyehkoov.s[306]++;

	      if (poster) {
	        cov_1iiyehkoov.b[70][0]++;
	        cov_1iiyehkoov.s[307]++;
	        image = new chrome.cast.Image(poster);
	        cov_1iiyehkoov.s[308]++;
	        mediaInfo.metadata.images = [{
	          'url': image
	        }];
	      } else {
	        cov_1iiyehkoov.b[70][1]++;
	      }

	      var request = (cov_1iiyehkoov.s[309]++, new chrome.cast.media.LoadRequest(mediaInfo));
	      cov_1iiyehkoov.s[310]++;
	      request.currentTime = this.currentMediaTime;
	      cov_1iiyehkoov.s[311]++;

	      if ((cov_1iiyehkoov.b[72][0]++, !this.playerStateBeforeSwitch) || (cov_1iiyehkoov.b[72][1]++, this.playerStateBeforeSwitch == PLAYER_STATE$1.PAUSED)) {
	        cov_1iiyehkoov.b[71][0]++;
	        cov_1iiyehkoov.s[312]++;
	        request.autoplay = false;
	      } else {
	        cov_1iiyehkoov.b[71][1]++;
	        cov_1iiyehkoov.s[313]++;
	        request.autoplay = true;
	      }

	      cov_1iiyehkoov.s[314]++;
	      cast.framework.CastContext.getInstance().getCurrentSession().loadMedia(request).then(function () {
	        cov_1iiyehkoov.f[66]++;
	        cov_1iiyehkoov.s[315]++;
	        this.casting = true;
	        cov_1iiyehkoov.s[316]++;
	        videojs.log('Remote media loaded');
	      }.bind(this), function (errorCode) {
	        cov_1iiyehkoov.f[67]++;
	        cov_1iiyehkoov.s[317]++;
	        this.playerState = PLAYER_STATE$1.IDLE;
	        cov_1iiyehkoov.s[318]++;
	        videojs.log('Remote media load error: ' + this.getErrorMessage(errorCode));
	        cov_1iiyehkoov.s[319]++;
	        this.playerHandler.updateDisplay();
	      }.bind(this));
	    }.bind(this);

	    cov_1iiyehkoov.s[320]++;

	    playerTarget.isMediaLoaded = function () {
	      cov_1iiyehkoov.f[68]++;
	      var session = (cov_1iiyehkoov.s[321]++, cast.framework.CastContext.getInstance().getCurrentSession());
	      cov_1iiyehkoov.s[322]++;

	      if (!session) {
	        cov_1iiyehkoov.b[73][0]++;
	        cov_1iiyehkoov.s[323]++;
	        return false;
	      } else {
	        cov_1iiyehkoov.b[73][1]++;
	      }

	      var media = (cov_1iiyehkoov.s[324]++, session.getMediaSession());
	      cov_1iiyehkoov.s[325]++;

	      if (!media) {
	        cov_1iiyehkoov.b[74][0]++;
	        cov_1iiyehkoov.s[326]++;
	        return false;
	      } else {
	        cov_1iiyehkoov.b[74][1]++;
	      }

	      cov_1iiyehkoov.s[327]++;

	      if (media.playerState == PLAYER_STATE$1.IDLE) {
	        cov_1iiyehkoov.b[75][0]++;
	        cov_1iiyehkoov.s[328]++;
	        return false;
	      } else {
	        cov_1iiyehkoov.b[75][1]++;
	      }

	      cov_1iiyehkoov.s[329]++;
	      this.apiSession = session;
	      cov_1iiyehkoov.s[330]++;
	      return true;
	    }.bind(this);

	    cov_1iiyehkoov.s[331]++;

	    playerTarget.getCurrentMediaTime = function () {
	      cov_1iiyehkoov.f[69]++;
	      cov_1iiyehkoov.s[332]++;
	      return this.remotePlayer.currentTime;
	    }.bind(this);

	    cov_1iiyehkoov.s[333]++;

	    playerTarget.getMediaDuration = function () {
	      cov_1iiyehkoov.f[70]++;
	      cov_1iiyehkoov.s[334]++;
	      return this.remotePlayer.duration;
	    }.bind(this);

	    cov_1iiyehkoov.s[335]++;

	    playerTarget.updateDisplay = function () {
	      cov_1iiyehkoov.f[71]++;
	      var castSession = (cov_1iiyehkoov.s[336]++, cast.framework.CastContext.getInstance().getCurrentSession());
	      cov_1iiyehkoov.s[337]++;

	      if ((cov_1iiyehkoov.b[77][0]++, castSession) && (cov_1iiyehkoov.b[77][1]++, castSession.getMediaSession()) && (cov_1iiyehkoov.b[77][2]++, castSession.getMediaSession().media)) {
	        cov_1iiyehkoov.b[76][0]++;
	        var media = (cov_1iiyehkoov.s[338]++, castSession.getMediaSession());
	        var mediaInfo = (cov_1iiyehkoov.s[339]++, media.media);
	        var mediaTitle = (cov_1iiyehkoov.s[340]++, '');
	        var mediaEpisodeTitle = (cov_1iiyehkoov.s[341]++, '');
	        var mediaSubtitle = (cov_1iiyehkoov.s[342]++, '');
	        cov_1iiyehkoov.s[343]++;

	        if (mediaInfo.metadata) {
	          cov_1iiyehkoov.b[78][0]++;
	          cov_1iiyehkoov.s[344]++;
	          mediaTitle = mediaInfo.metadata.title;
	          cov_1iiyehkoov.s[345]++;
	          mediaEpisodeTitle = mediaInfo.metadata.episodeTitle;
	          cov_1iiyehkoov.s[346]++;
	          mediaTitle = mediaEpisodeTitle ? (cov_1iiyehkoov.b[79][0]++, mediaTitle + ': ' + mediaEpisodeTitle) : (cov_1iiyehkoov.b[79][1]++, mediaTitle);
	          cov_1iiyehkoov.s[347]++;
	          mediaTitle = mediaTitle ? (cov_1iiyehkoov.b[80][0]++, mediaTitle + ' ') : (cov_1iiyehkoov.b[80][1]++, '');
	          cov_1iiyehkoov.s[348]++;
	          mediaSubtitle = mediaInfo.metadata.subtitle;
	          cov_1iiyehkoov.s[349]++;
	          mediaSubtitle = mediaSubtitle ? (cov_1iiyehkoov.b[81][0]++, mediaSubtitle + ' ') : (cov_1iiyehkoov.b[81][1]++, '');
	        } else {
	          cov_1iiyehkoov.b[78][1]++;
	        }
	      } else {
	        cov_1iiyehkoov.b[76][1]++;
	        cov_1iiyehkoov.s[350]++;
	        this.currentTech.dispose();
	        cov_1iiyehkoov.s[351]++;
	        this.casting = false;
	        var time = (cov_1iiyehkoov.s[352]++, this.player_.currentTime());
	        cov_1iiyehkoov.s[353]++;
	        this.removeClass('connected');
	        cov_1iiyehkoov.s[354]++;
	        this.player_.src(this.player_.options_['sources']);
	        cov_1iiyehkoov.s[355]++;

	        if (!this.player_.paused()) {
	          cov_1iiyehkoov.b[82][0]++;
	          cov_1iiyehkoov.s[356]++;
	          this.player_.one('seeked', function () {
	            cov_1iiyehkoov.f[72]++;
	            cov_1iiyehkoov.s[357]++;
	            return this.player_.play();
	          });
	        } else {
	          cov_1iiyehkoov.b[82][1]++;
	        }

	        cov_1iiyehkoov.s[358]++;
	        this.player_.currentTime(time);
	        cov_1iiyehkoov.s[359]++;
	        this.player_.options_.inactivityTimeout = this.inactivityTimeout;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[360]++;

	    playerTarget.updateCurrentTimeDisplay = function () {
	      cov_1iiyehkoov.f[73]++;
	      cov_1iiyehkoov.s[361]++;
	      this.playerHandler.setTimeString(this.playerHandler.getCurrentMediaTime());
	    }.bind(this);

	    cov_1iiyehkoov.s[362]++;

	    playerTarget.updateDurationDisplay = function () {
	      cov_1iiyehkoov.f[74]++;
	      cov_1iiyehkoov.s[363]++;
	      this.playerHandler.setTimeString(this.playerHandler.getMediaDuration());
	    }.bind(this);

	    cov_1iiyehkoov.s[364]++;

	    playerTarget.setTimeString = function (time) {
	      cov_1iiyehkoov.f[75]++;
	      var currentTimeString = (cov_1iiyehkoov.s[365]++, this.getMediaTimeString(time));
	      cov_1iiyehkoov.s[366]++;

	      if (currentTimeString !== null) {
	        cov_1iiyehkoov.b[83][0]++;
	      } else {
	        cov_1iiyehkoov.b[83][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[367]++;

	    playerTarget.setVolume = function (volumePosition) {
	      cov_1iiyehkoov.f[76]++;
	      var currentVolume = (cov_1iiyehkoov.s[368]++, this.remotePlayer.volumeLevel);
	      cov_1iiyehkoov.s[369]++;

	      if (volumePosition > 1) {
	        cov_1iiyehkoov.b[84][0]++;
	        cov_1iiyehkoov.s[370]++;
	        currentVolume = 1;
	      } else {
	        cov_1iiyehkoov.b[84][1]++;
	        cov_1iiyehkoov.s[371]++;
	        currentVolume = volumePosition;
	      }

	      cov_1iiyehkoov.s[372]++;
	      this.remotePlayer.volumeLevel = currentVolume;
	      cov_1iiyehkoov.s[373]++;
	      this.remotePlayerController.setVolumeLevel();
	    }.bind(this);

	    cov_1iiyehkoov.s[374]++;

	    playerTarget.mute = function () {
	      cov_1iiyehkoov.f[77]++;
	      cov_1iiyehkoov.s[375]++;

	      if (!this.remotePlayer.isMuted) {
	        cov_1iiyehkoov.b[85][0]++;
	        cov_1iiyehkoov.s[376]++;
	        this.remotePlayerController.muteOrUnmute();
	      } else {
	        cov_1iiyehkoov.b[85][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[377]++;

	    playerTarget.unMute = function () {
	      cov_1iiyehkoov.f[78]++;
	      cov_1iiyehkoov.s[378]++;

	      if (this.remotePlayer.isMuted) {
	        cov_1iiyehkoov.b[86][0]++;
	        cov_1iiyehkoov.s[379]++;
	        this.remotePlayerController.muteOrUnmute();
	      } else {
	        cov_1iiyehkoov.b[86][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[380]++;

	    playerTarget.isMuted = function () {
	      cov_1iiyehkoov.f[79]++;
	      cov_1iiyehkoov.s[381]++;
	      return this.remotePlayer.isMuted;
	    }.bind(this);

	    cov_1iiyehkoov.s[382]++;

	    playerTarget.seekTo = function (time) {
	      cov_1iiyehkoov.f[80]++;
	      cov_1iiyehkoov.s[383]++;
	      this.remotePlayer.currentTime = time;
	      cov_1iiyehkoov.s[384]++;
	      this.remotePlayerController.seek();
	    }.bind(this);

	    cov_1iiyehkoov.s[385]++;
	    this.playerHandler.setTarget(playerTarget);
	    cov_1iiyehkoov.s[386]++;

	    if (this.remotePlayer.isMuted) {
	      cov_1iiyehkoov.b[87][0]++;
	      cov_1iiyehkoov.s[387]++;
	      this.playerHandler.mute();
	    } else {
	      cov_1iiyehkoov.b[87][1]++;
	    }

	    cov_1iiyehkoov.s[388]++;
	    this.apiSession = cast.framework.CastContext.getInstance().getCurrentSession();
	    cov_1iiyehkoov.s[389]++;
	    this.player_.loadTech_('ChromecastTech', {
	      cast_: this,
	      apiSession: this.apiSession
	    });
	    cov_1iiyehkoov.s[390]++;

	    if (this.apiSession == cast.framework.SessionState.SESSION_RESUMED) {
	      cov_1iiyehkoov.b[88][0]++;
	      cov_1iiyehkoov.s[391]++;
	      videojs.log('Resuming session');
	      cov_1iiyehkoov.s[392]++;
	      this.playerHandler.prepareToPlay();
	    } else {
	      cov_1iiyehkoov.b[88][1]++;
	      cov_1iiyehkoov.s[393]++;
	      this.playerHandler.load();
	    }
	  };

	  _proto.setupLocalPlayer = function setupLocalPlayer() {
	    cov_1iiyehkoov.f[81]++;
	    var playerTarget = (cov_1iiyehkoov.s[394]++, {});

	    var _this = (cov_1iiyehkoov.s[395]++, this);

	    cov_1iiyehkoov.s[396]++;

	    playerTarget.play = function () {
	      cov_1iiyehkoov.f[82]++;
	      cov_1iiyehkoov.s[397]++;
	      videojs.log("local player play");
	    };

	    cov_1iiyehkoov.s[398]++;

	    playerTarget.pause = function () {
	      cov_1iiyehkoov.f[83]++;
	      cov_1iiyehkoov.s[399]++;
	      videojs.log("local player pause");
	    };

	    cov_1iiyehkoov.s[400]++;

	    playerTarget.stop = function () {
	      cov_1iiyehkoov.f[84]++;
	      cov_1iiyehkoov.s[401]++;
	      videojs.log("local player stop");
	    };

	    cov_1iiyehkoov.s[402]++;

	    playerTarget.load = function () {
	      cov_1iiyehkoov.f[85]++;
	      cov_1iiyehkoov.s[403]++;
	      videojs.log("local player load");
	    }.bind(this);

	    cov_1iiyehkoov.s[404]++;

	    playerTarget.isMediaLoaded = function () {
	      cov_1iiyehkoov.f[86]++;
	      cov_1iiyehkoov.s[405]++;
	      this.findSources();
	      cov_1iiyehkoov.s[406]++;
	      return this.sources.src;
	    }.bind(this);

	    cov_1iiyehkoov.s[407]++;

	    playerTarget.getCurrentMediaTime = function () {
	      cov_1iiyehkoov.f[87]++;
	      cov_1iiyehkoov.s[408]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[89][0]++;
	        cov_1iiyehkoov.s[409]++;
	        return this.player_.currentTime();
	      } else {
	        cov_1iiyehkoov.b[89][1]++;
	        cov_1iiyehkoov.s[410]++;

	        if (_this.player_ !== undefined) {
	          cov_1iiyehkoov.b[90][0]++;
	          cov_1iiyehkoov.s[411]++;
	          return _this.player_.currentTime();
	        } else {
	          cov_1iiyehkoov.b[90][1]++;
	        }
	      }
	    };

	    cov_1iiyehkoov.s[412]++;

	    playerTarget.getMediaDuration = function () {
	      cov_1iiyehkoov.f[88]++;
	      cov_1iiyehkoov.s[413]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[91][0]++;
	        cov_1iiyehkoov.s[414]++;
	        return this.player_.duration();
	      } else {
	        cov_1iiyehkoov.b[91][1]++;
	        cov_1iiyehkoov.s[415]++;

	        if (_this.player_ !== undefined) {
	          cov_1iiyehkoov.b[92][0]++;
	          cov_1iiyehkoov.s[416]++;
	          return _this.player_.duration();
	        } else {
	          cov_1iiyehkoov.b[92][1]++;
	        }
	      }
	    };

	    cov_1iiyehkoov.s[417]++;

	    playerTarget.updateDisplay = function () {
	      cov_1iiyehkoov.f[89]++;
	    };

	    cov_1iiyehkoov.s[418]++;

	    playerTarget.updateCurrentTimeDisplay = function () {
	      cov_1iiyehkoov.f[90]++;
	      cov_1iiyehkoov.s[419]++;
	      this.currentMediaTime += 1;
	      cov_1iiyehkoov.s[420]++;
	      this.playerHandler.setTimeString(this.currentMediaTime);
	    }.bind(this);

	    cov_1iiyehkoov.s[421]++;

	    playerTarget.updateDurationDisplay = function () {
	      cov_1iiyehkoov.f[91]++;
	      cov_1iiyehkoov.s[422]++;
	      this.playerHandler.setTimeString(this.mediaDuration);
	    }.bind(this);

	    cov_1iiyehkoov.s[423]++;

	    playerTarget.setTimeString = function (time) {
	      cov_1iiyehkoov.f[92]++;
	      var currentTimeString = (cov_1iiyehkoov.s[424]++, this.getMediaTimeString(time));
	      cov_1iiyehkoov.s[425]++;

	      if (currentTimeString !== null) {
	        cov_1iiyehkoov.b[93][0]++;
	      } else {
	        cov_1iiyehkoov.b[93][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[426]++;

	    playerTarget.setVolume = function (volumePosition) {
	      cov_1iiyehkoov.f[93]++;
	      cov_1iiyehkoov.s[427]++;

	      if ((cov_1iiyehkoov.b[95][0]++, _this.mDNS) && (cov_1iiyehkoov.b[95][1]++, _this.receivers.length > 0)) {
	        cov_1iiyehkoov.b[94][0]++;
	      } else {
	        cov_1iiyehkoov.b[94][1]++;
	        cov_1iiyehkoov.s[428]++;

	        if (this.player_ !== undefined) {
	          cov_1iiyehkoov.b[96][0]++;
	          cov_1iiyehkoov.s[429]++;
	          return this.player_.volume(volumePosition);
	        } else {
	          cov_1iiyehkoov.b[96][1]++;
	          cov_1iiyehkoov.s[430]++;

	          if (_this.player_ !== undefined) {
	            cov_1iiyehkoov.b[97][0]++;
	            cov_1iiyehkoov.s[431]++;
	            return _this.player_.volume(volumePosition);
	          } else {
	            cov_1iiyehkoov.b[97][1]++;
	          }
	        }
	      }
	    };

	    cov_1iiyehkoov.s[432]++;

	    playerTarget.mute = function () {
	      cov_1iiyehkoov.f[94]++;
	      cov_1iiyehkoov.s[433]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[98][0]++;
	        cov_1iiyehkoov.s[434]++;
	        return this.player_.mute(true);
	      } else {
	        cov_1iiyehkoov.b[98][1]++;
	        cov_1iiyehkoov.s[435]++;

	        if (_this.player_ !== undefined) {
	          cov_1iiyehkoov.b[99][0]++;
	          cov_1iiyehkoov.s[436]++;
	          return _this.player_.mute(true);
	        } else {
	          cov_1iiyehkoov.b[99][1]++;
	        }
	      }
	    };

	    cov_1iiyehkoov.s[437]++;

	    playerTarget.unMute = function () {
	      cov_1iiyehkoov.f[95]++;
	      cov_1iiyehkoov.s[438]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[100][0]++;
	        cov_1iiyehkoov.s[439]++;
	        return this.player_.mute(false);
	      } else {
	        cov_1iiyehkoov.b[100][1]++;
	        cov_1iiyehkoov.s[440]++;

	        if (_this.player_ !== undefined) {
	          cov_1iiyehkoov.b[101][0]++;
	          cov_1iiyehkoov.s[441]++;
	          return _this.player_.mute(false);
	        } else {
	          cov_1iiyehkoov.b[101][1]++;
	        }
	      }
	    };

	    cov_1iiyehkoov.s[442]++;

	    playerTarget.isMuted = function () {
	      cov_1iiyehkoov.f[96]++;
	      cov_1iiyehkoov.s[443]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[102][0]++;
	        cov_1iiyehkoov.s[444]++;
	        return this.player_.mute();
	      } else {
	        cov_1iiyehkoov.b[102][1]++;
	        cov_1iiyehkoov.s[445]++;

	        if (_this.player_ !== undefined) {
	          cov_1iiyehkoov.b[103][0]++;
	          cov_1iiyehkoov.s[446]++;
	          return _this.player_.mute();
	        } else {
	          cov_1iiyehkoov.b[103][1]++;
	        }
	      }
	    };

	    cov_1iiyehkoov.s[447]++;

	    playerTarget.seekTo = function (time) {
	      cov_1iiyehkoov.f[97]++;
	      cov_1iiyehkoov.s[448]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[104][0]++;
	        cov_1iiyehkoov.s[449]++;
	        return this.player_.currentTime(time);
	      } else {
	        cov_1iiyehkoov.b[104][1]++;
	        cov_1iiyehkoov.s[450]++;

	        if (_this.player_ !== undefined) {
	          cov_1iiyehkoov.b[105][0]++;
	          cov_1iiyehkoov.s[451]++;
	          return _this.player_.currentTime(time);
	        } else {
	          cov_1iiyehkoov.b[105][1]++;
	        }
	      }
	    };

	    cov_1iiyehkoov.s[452]++;
	    this.playerHandler.setTarget(playerTarget);
	    cov_1iiyehkoov.s[453]++;
	    this.playerHandler.setVolume(DEFAULT_VOLUME * FULL_VOLUME_HEIGHT);
	    cov_1iiyehkoov.s[454]++;

	    if (this.currentMediaTime > 0) {
	      cov_1iiyehkoov.b[106][0]++;
	      cov_1iiyehkoov.s[455]++;
	      this.playerHandler.load();
	      cov_1iiyehkoov.s[456]++;
	      this.playerHandler.play();
	    } else {
	      cov_1iiyehkoov.b[106][1]++;
	    }
	  };

	  _proto.onMediaLoadedLocally = function onMediaLoadedLocally() {
	    cov_1iiyehkoov.f[98]++;
	    cov_1iiyehkoov.s[457]++;
	    this.player_.currentTime(this.currentMediaTime);
	    cov_1iiyehkoov.s[458]++;
	    this.playerHandler.prepareToPlay();
	  };

	  _proto.addVideoThumbs = function addVideoThumbs() {
	    cov_1iiyehkoov.f[99]++;
	  };

	  _proto.seekMedia = function seekMedia(seekTime) {
	    cov_1iiyehkoov.f[100]++;
	    cov_1iiyehkoov.s[459]++;

	    if ((cov_1iiyehkoov.b[108][0]++, this.mediaDuration == null) || (cov_1iiyehkoov.b[108][1]++, cast.framework.CastContext.getInstance().getCurrentSession()) && (cov_1iiyehkoov.b[108][2]++, !this.remotePlayer.canSeek)) {
	      cov_1iiyehkoov.b[107][0]++;
	      cov_1iiyehkoov.s[460]++;
	      videojs.log('Error - Not seekable');
	      cov_1iiyehkoov.s[461]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[107][1]++;
	    }

	    cov_1iiyehkoov.s[462]++;

	    if ((cov_1iiyehkoov.b[110][0]++, this.playerState === PLAYER_STATE$1.PLAYING) || (cov_1iiyehkoov.b[110][1]++, this.playerState === PLAYER_STATE$1.PAUSED)) {
	      cov_1iiyehkoov.b[109][0]++;
	      cov_1iiyehkoov.s[463]++;
	      this.currentMediaTime = seekTime;
	    } else {
	      cov_1iiyehkoov.b[109][1]++;
	    }

	    cov_1iiyehkoov.s[464]++;
	    this.playerHandler.seekTo(seekTime);
	  };

	  _proto.getErrorMessage = function getErrorMessage(error) {
	    cov_1iiyehkoov.f[101]++;
	    cov_1iiyehkoov.s[465]++;

	    switch (error.code) {
	      case chrome.cast.ErrorCode.API_NOT_INITIALIZED:
	        cov_1iiyehkoov.b[111][0]++;
	        cov_1iiyehkoov.s[466]++;
	        return 'The API is not initialized.' + (error.description ? (cov_1iiyehkoov.b[112][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[112][1]++, ''));

	      case chrome.cast.ErrorCode.CANCEL:
	        cov_1iiyehkoov.b[111][1]++;
	        cov_1iiyehkoov.s[467]++;
	        return 'The operation was canceled by the user' + (error.description ? (cov_1iiyehkoov.b[113][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[113][1]++, ''));

	      case chrome.cast.ErrorCode.CHANNEL_ERROR:
	        cov_1iiyehkoov.b[111][2]++;
	        cov_1iiyehkoov.s[468]++;
	        return 'A channel to the receiver is not available.' + (error.description ? (cov_1iiyehkoov.b[114][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[114][1]++, ''));

	      case chrome.cast.ErrorCode.EXTENSION_MISSING:
	        cov_1iiyehkoov.b[111][3]++;
	        cov_1iiyehkoov.s[469]++;
	        return 'The Cast extension is not available.' + (error.description ? (cov_1iiyehkoov.b[115][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[115][1]++, ''));

	      case chrome.cast.ErrorCode.INVALID_PARAMETER:
	        cov_1iiyehkoov.b[111][4]++;
	        cov_1iiyehkoov.s[470]++;
	        return 'The parameters to the operation were not valid.' + (error.description ? (cov_1iiyehkoov.b[116][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[116][1]++, ''));

	      case chrome.cast.ErrorCode.RECEIVER_UNAVAILABLE:
	        cov_1iiyehkoov.b[111][5]++;
	        cov_1iiyehkoov.s[471]++;
	        return 'No receiver was compatible with the session request.' + (error.description ? (cov_1iiyehkoov.b[117][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[117][1]++, ''));

	      case chrome.cast.ErrorCode.SESSION_ERROR:
	        cov_1iiyehkoov.b[111][6]++;
	        cov_1iiyehkoov.s[472]++;
	        return 'A session could not be created, or a session was invalid.' + (error.description ? (cov_1iiyehkoov.b[118][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[118][1]++, ''));

	      case chrome.cast.ErrorCode.TIMEOUT:
	        cov_1iiyehkoov.b[111][7]++;
	        cov_1iiyehkoov.s[473]++;
	        return 'The operation timed out.' + (error.description ? (cov_1iiyehkoov.b[119][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[119][1]++, ''));

	      default:
	        cov_1iiyehkoov.b[111][8]++;
	        cov_1iiyehkoov.s[474]++;
	        return error;
	    }
	  };

	  _proto.endPlayback = function endPlayback() {
	    cov_1iiyehkoov.f[102]++;
	    cov_1iiyehkoov.s[475]++;
	    this.currentMediaTime = 0;
	    cov_1iiyehkoov.s[476]++;
	    this.playerState = PLAYER_STATE$1.IDLE;
	    cov_1iiyehkoov.s[477]++;
	    this.this.updateDisplay();
	  };

	  _proto.getMediaTimeString = function getMediaTimeString(timestamp) {
	    cov_1iiyehkoov.f[103]++;
	    cov_1iiyehkoov.s[478]++;

	    if ((cov_1iiyehkoov.b[121][0]++, timestamp == undefined) || (cov_1iiyehkoov.b[121][1]++, timestamp == null)) {
	      cov_1iiyehkoov.b[120][0]++;
	      cov_1iiyehkoov.s[479]++;
	      return null;
	    } else {
	      cov_1iiyehkoov.b[120][1]++;
	    }

	    var isNegative = (cov_1iiyehkoov.s[480]++, false);
	    cov_1iiyehkoov.s[481]++;

	    if (timestamp < 0) {
	      cov_1iiyehkoov.b[122][0]++;
	      cov_1iiyehkoov.s[482]++;
	      isNegative = true;
	      cov_1iiyehkoov.s[483]++;
	      timestamp *= -1;
	    } else {
	      cov_1iiyehkoov.b[122][1]++;
	    }

	    var hours = (cov_1iiyehkoov.s[484]++, Math.floor(timestamp / 3600));
	    var minutes = (cov_1iiyehkoov.s[485]++, Math.floor((timestamp - hours * 3600) / 60));
	    var seconds = (cov_1iiyehkoov.s[486]++, Math.floor(timestamp - hours * 3600 - minutes * 60));
	    cov_1iiyehkoov.s[487]++;

	    if (hours < 10) {
	      cov_1iiyehkoov.b[123][0]++;
	      cov_1iiyehkoov.s[488]++;
	      hours = '0' + hours;
	    } else {
	      cov_1iiyehkoov.b[123][1]++;
	    }

	    cov_1iiyehkoov.s[489]++;

	    if (minutes < 10) {
	      cov_1iiyehkoov.b[124][0]++;
	      cov_1iiyehkoov.s[490]++;
	      minutes = '0' + minutes;
	    } else {
	      cov_1iiyehkoov.b[124][1]++;
	    }

	    cov_1iiyehkoov.s[491]++;

	    if (seconds < 10) {
	      cov_1iiyehkoov.b[125][0]++;
	      cov_1iiyehkoov.s[492]++;
	      seconds = '0' + seconds;
	    } else {
	      cov_1iiyehkoov.b[125][1]++;
	    }

	    cov_1iiyehkoov.s[493]++;
	    return (isNegative ? (cov_1iiyehkoov.b[126][0]++, '-') : (cov_1iiyehkoov.b[126][1]++, '')) + hours + ':' + minutes + ':' + seconds;
	  };

	  _proto.incrementMediaTime = function incrementMediaTime() {
	    cov_1iiyehkoov.f[104]++;
	    cov_1iiyehkoov.s[494]++;
	    this.currentMediaTime = this.playerHandler.getCurrentMediaTime();
	    cov_1iiyehkoov.s[495]++;
	    this.mediaDuration = this.playerHandler.getMediaDuration();
	    cov_1iiyehkoov.s[496]++;
	    this.playerHandler.updateDurationDisplay();
	    cov_1iiyehkoov.s[497]++;

	    if ((cov_1iiyehkoov.b[128][0]++, this.mediaDuration == null) || (cov_1iiyehkoov.b[128][1]++, this.currentMediaTime < this.mediaDuration)) {
	      cov_1iiyehkoov.b[127][0]++;
	      cov_1iiyehkoov.s[498]++;
	      this.playerHandler.updateCurrentTimeDisplay();
	    } else {
	      cov_1iiyehkoov.b[127][1]++;
	      cov_1iiyehkoov.s[499]++;

	      if (this.mediaDuration > 0) {
	        cov_1iiyehkoov.b[129][0]++;
	        cov_1iiyehkoov.s[500]++;
	        this.endPlayback();
	      } else {
	        cov_1iiyehkoov.b[129][1]++;
	      }
	    }
	  };

	  return ChromecastButton;
	}(Button$1);

	cov_1iiyehkoov.s[501]++;
	ChromecastButton.prototype.tryingReconnect = 0;
	cov_1iiyehkoov.s[502]++;
	ChromecastButton.prototype.inactivityTimeout = 2000;
	cov_1iiyehkoov.s[503]++;
	ChromecastButton.prototype.controlText_ = 'Chromecast';
	cov_1iiyehkoov.s[504]++;
	ControlBar$1.prototype.options_.children.splice(ControlBar$1.prototype.options_.children.length - 1, 0, 'chromeCastButton');
	cov_1iiyehkoov.s[505]++;

	if (typeof Component$1.getComponent('ChromecastButton') === 'undefined') {
	  cov_1iiyehkoov.b[130][0]++;
	  cov_1iiyehkoov.s[506]++;
	  Component$1.registerComponent('ChromecastButton', ChromecastButton);
	} else {
	  cov_1iiyehkoov.b[130][1]++;
	}

	var cov_2aep3n7mve = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/google-chromecast.js',
	      hash = 'fcccad36360808bcd2b34ba9acfdd89c65240084',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/google-chromecast.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 4,
	          column: 16
	        },
	        end: {
	          line: 4,
	          column: 49
	        }
	      },
	      '1': {
	        start: {
	          line: 5,
	          column: 17
	        },
	        end: {
	          line: 5,
	          column: 51
	        }
	      },
	      '2': {
	        start: {
	          line: 6,
	          column: 13
	        },
	        end: {
	          line: 6,
	          column: 43
	        }
	      },
	      '3': {
	        start: {
	          line: 7,
	          column: 11
	        },
	        end: {
	          line: 7,
	          column: 39
	        }
	      },
	      '4': {
	        start: {
	          line: 11,
	          column: 4
	        },
	        end: {
	          line: 11,
	          column: 27
	        }
	      },
	      '5': {
	        start: {
	          line: 12,
	          column: 27
	        },
	        end: {
	          line: 12,
	          column: 64
	        }
	      },
	      '6': {
	        start: {
	          line: 13,
	          column: 4
	        },
	        end: {
	          line: 17,
	          column: 6
	        }
	      },
	      '7': {
	        start: {
	          line: 14,
	          column: 8
	        },
	        end: {
	          line: 16,
	          column: 9
	        }
	      },
	      '8': {
	        start: {
	          line: 15,
	          column: 12
	        },
	        end: {
	          line: 15,
	          column: 46
	        }
	      },
	      '9': {
	        start: {
	          line: 19,
	          column: 4
	        },
	        end: {
	          line: 21,
	          column: 5
	        }
	      },
	      '10': {
	        start: {
	          line: 20,
	          column: 6
	        },
	        end: {
	          line: 20,
	          column: 41
	        }
	      },
	      '11': {
	        start: {
	          line: 26,
	          column: 0
	        },
	        end: {
	          line: 26,
	          column: 35
	        }
	      },
	      '12': {
	        start: {
	          line: 28,
	          column: 0
	        },
	        end: {
	          line: 28,
	          column: 44
	        }
	      },
	      '13': {
	        start: {
	          line: 30,
	          column: 0
	        },
	        end: {
	          line: 30,
	          column: 58
	        }
	      },
	      '14': {
	        start: {
	          line: 33,
	          column: 0
	        },
	        end: {
	          line: 35,
	          column: 1
	        }
	      },
	      '15': {
	        start: {
	          line: 34,
	          column: 2
	        },
	        end: {
	          line: 34,
	          column: 56
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 10,
	            column: 2
	          },
	          end: {
	            line: 10,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 10,
	            column: 32
	          },
	          end: {
	            line: 23,
	            column: 3
	          }
	        },
	        line: 10
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 13,
	            column: 38
	          },
	          end: {
	            line: 13,
	            column: 39
	          }
	        },
	        loc: {
	          start: {
	            line: 13,
	            column: 61
	          },
	          end: {
	            line: 17,
	            column: 5
	          }
	        },
	        line: 13
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 14,
	            column: 8
	          },
	          end: {
	            line: 16,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 14,
	            column: 8
	          },
	          end: {
	            line: 16,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 14,
	            column: 8
	          },
	          end: {
	            line: 16,
	            column: 9
	          }
	        }],
	        line: 14
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 19,
	            column: 4
	          },
	          end: {
	            line: 21,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 19,
	            column: 4
	          },
	          end: {
	            line: 21,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 19,
	            column: 4
	          },
	          end: {
	            line: 21,
	            column: 5
	          }
	        }],
	        line: 19
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 19,
	            column: 7
	          },
	          end: {
	            line: 19,
	            column: 49
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 19,
	            column: 7
	          },
	          end: {
	            line: 19,
	            column: 33
	          }
	        }, {
	          start: {
	            line: 19,
	            column: 37
	          },
	          end: {
	            line: 19,
	            column: 49
	          }
	        }],
	        line: 19
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 33,
	            column: 0
	          },
	          end: {
	            line: 35,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 33,
	            column: 0
	          },
	          end: {
	            line: 35,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 33,
	            column: 0
	          },
	          end: {
	            line: 35,
	            column: 1
	          }
	        }],
	        line: 33
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	var Component$2 = (cov_2aep3n7mve.s[0]++, videojs.getComponent('Component'));
	var ControlBar$2 = (cov_2aep3n7mve.s[1]++, videojs.getComponent('ControlBar'));
	var Button$2 = (cov_2aep3n7mve.s[2]++, videojs.getComponent('Button'));
	var Tech$2 = (cov_2aep3n7mve.s[3]++, videojs.getComponent('Tech'));

	var Chromecast = /*#__PURE__*/function (_Component) {
	  inheritsLoose(Chromecast, _Component);

	  function Chromecast(player, options) {
	    var _this;

	    cov_2aep3n7mve.f[0]++;
	    cov_2aep3n7mve.s[4]++;
	    _this = _Component.call(this, player, options) || this;
	    var buttonChromecast = (cov_2aep3n7mve.s[5]++, new ChromecastButton(player, options));
	    cov_2aep3n7mve.s[6]++;

	    window['__onGCastApiAvailable'] = function (isAvailable) {
	      cov_2aep3n7mve.f[1]++;
	      cov_2aep3n7mve.s[7]++;

	      if (isAvailable) {
	        cov_2aep3n7mve.b[0][0]++;
	        cov_2aep3n7mve.s[8]++;
	        buttonChromecast.initCastPlayer();
	      } else {
	        cov_2aep3n7mve.b[0][1]++;
	      }
	    };

	    cov_2aep3n7mve.s[9]++;

	    if ((cov_2aep3n7mve.b[2][0]++, options.mdns !== undefined) && (cov_2aep3n7mve.b[2][1]++, options.mdns)) {
	      cov_2aep3n7mve.b[1][0]++;
	      cov_2aep3n7mve.s[10]++;

	      window.__onGCastApiAvailable(true);
	    } else {
	      cov_2aep3n7mve.b[1][1]++;
	    }

	    return _this;
	  }

	  return Chromecast;
	}(Component$2);

	cov_2aep3n7mve.s[11]++;
	Chromecast.prototype.options_ = {};
	cov_2aep3n7mve.s[12]++;
	videojs.options.children.push('chromecast');
	cov_2aep3n7mve.s[13]++;
	videojs.addLanguage('en', {
	  'CASTING TO': 'CASTING TO'
	});
	cov_2aep3n7mve.s[14]++;

	if (typeof Component$2.getComponent('Chromecast') === 'undefined') {
	  cov_2aep3n7mve.b[3][0]++;
	  cov_2aep3n7mve.s[15]++;
	  Component$2.registerComponent('Chromecast', Chromecast);
	} else {
	  cov_2aep3n7mve.b[3][1]++;
	}

	var cov_279kbuek1j = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/plugin.js',
	      hash = 'b3d88247a301c0e1165cb423f83e3bb98837542a',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/plugin.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 14,
	          column: 19
	        },
	        end: {
	          line: 43,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 15,
	          column: 17
	        },
	        end: {
	          line: 15,
	          column: 21
	        }
	      },
	      '2': {
	        start: {
	          line: 17,
	          column: 4
	        },
	        end: {
	          line: 19,
	          column: 5
	        }
	      },
	      '3': {
	        start: {
	          line: 18,
	          column: 8
	        },
	        end: {
	          line: 18,
	          column: 15
	        }
	      },
	      '4': {
	        start: {
	          line: 21,
	          column: 25
	        },
	        end: {
	          line: 21,
	          column: 68
	        }
	      },
	      '5': {
	        start: {
	          line: 22,
	          column: 4
	        },
	        end: {
	          line: 32,
	          column: 7
	        }
	      },
	      '6': {
	        start: {
	          line: 23,
	          column: 8
	        },
	        end: {
	          line: 25,
	          column: 9
	        }
	      },
	      '7': {
	        start: {
	          line: 24,
	          column: 12
	        },
	        end: {
	          line: 24,
	          column: 44
	        }
	      },
	      '8': {
	        start: {
	          line: 27,
	          column: 8
	        },
	        end: {
	          line: 31,
	          column: 9
	        }
	      },
	      '9': {
	        start: {
	          line: 28,
	          column: 12
	        },
	        end: {
	          line: 28,
	          column: 30
	        }
	      },
	      '10': {
	        start: {
	          line: 30,
	          column: 12
	        },
	        end: {
	          line: 30,
	          column: 59
	        }
	      },
	      '11': {
	        start: {
	          line: 34,
	          column: 21
	        },
	        end: {
	          line: 34,
	          column: 25
	        }
	      },
	      '12': {
	        start: {
	          line: 36,
	          column: 4
	        },
	        end: {
	          line: 42,
	          column: 5
	        }
	      },
	      '13': {
	        start: {
	          line: 37,
	          column: 8
	        },
	        end: {
	          line: 39,
	          column: 16
	        }
	      },
	      '14': {
	        start: {
	          line: 38,
	          column: 12
	        },
	        end: {
	          line: 38,
	          column: 57
	        }
	      },
	      '15': {
	        start: {
	          line: 41,
	          column: 8
	        },
	        end: {
	          line: 41,
	          column: 53
	        }
	      },
	      '16': {
	        start: {
	          line: 46,
	          column: 23
	        },
	        end: {
	          line: 46,
	          column: 63
	        }
	      },
	      '17': {
	        start: {
	          line: 49,
	          column: 0
	        },
	        end: {
	          line: 51,
	          column: 1
	        }
	      },
	      '18': {
	        start: {
	          line: 50,
	          column: 2
	        },
	        end: {
	          line: 50,
	          column: 43
	        }
	      },
	      '19': {
	        start: {
	          line: 54,
	          column: 0
	        },
	        end: {
	          line: 54,
	          column: 29
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: 'chromecast',
	        decl: {
	          start: {
	            line: 14,
	            column: 28
	          },
	          end: {
	            line: 14,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 14,
	            column: 48
	          },
	          end: {
	            line: 43,
	            column: 1
	          }
	        },
	        line: 14
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 22,
	            column: 27
	          },
	          end: {
	            line: 22,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 22,
	            column: 42
	          },
	          end: {
	            line: 32,
	            column: 5
	          }
	        },
	        line: 22
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 37,
	            column: 19
	          },
	          end: {
	            line: 37,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 37,
	            column: 29
	          },
	          end: {
	            line: 39,
	            column: 9
	          }
	        },
	        line: 37
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 17,
	            column: 4
	          },
	          end: {
	            line: 19,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 17,
	            column: 4
	          },
	          end: {
	            line: 19,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 17,
	            column: 4
	          },
	          end: {
	            line: 19,
	            column: 5
	          }
	        }],
	        line: 17
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 17,
	            column: 8
	          },
	          end: {
	            line: 17,
	            column: 67
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 17,
	            column: 8
	          },
	          end: {
	            line: 17,
	            column: 25
	          }
	        }, {
	          start: {
	            line: 17,
	            column: 30
	          },
	          end: {
	            line: 17,
	            column: 37
	          }
	        }, {
	          start: {
	            line: 17,
	            column: 41
	          },
	          end: {
	            line: 17,
	            column: 66
	          }
	        }],
	        line: 17
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 23,
	            column: 8
	          },
	          end: {
	            line: 25,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 23,
	            column: 8
	          },
	          end: {
	            line: 25,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 23,
	            column: 8
	          },
	          end: {
	            line: 25,
	            column: 9
	          }
	        }],
	        line: 23
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 27,
	            column: 8
	          },
	          end: {
	            line: 31,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 27,
	            column: 8
	          },
	          end: {
	            line: 31,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 27,
	            column: 8
	          },
	          end: {
	            line: 31,
	            column: 9
	          }
	        }],
	        line: 27
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 36,
	            column: 4
	          },
	          end: {
	            line: 42,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 36,
	            column: 4
	          },
	          end: {
	            line: 42,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 36,
	            column: 4
	          },
	          end: {
	            line: 42,
	            column: 5
	          }
	        }],
	        line: 36
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 36,
	            column: 8
	          },
	          end: {
	            line: 36,
	            column: 50
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 36,
	            column: 8
	          },
	          end: {
	            line: 36,
	            column: 34
	          }
	        }, {
	          start: {
	            line: 36,
	            column: 38
	          },
	          end: {
	            line: 36,
	            column: 50
	          }
	        }],
	        line: 36
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 46,
	            column: 23
	          },
	          end: {
	            line: 46,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 46,
	            column: 23
	          },
	          end: {
	            line: 46,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 46,
	            column: 49
	          },
	          end: {
	            line: 46,
	            column: 63
	          }
	        }],
	        line: 46
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 49,
	            column: 0
	          },
	          end: {
	            line: 51,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 49,
	            column: 0
	          },
	          end: {
	            line: 51,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 49,
	            column: 0
	          },
	          end: {
	            line: 51,
	            column: 1
	          }
	        }],
	        line: 49
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	cov_279kbuek1j.s[0]++;

	var chromecast = function chromecast(options) {
	  cov_279kbuek1j.f[0]++;
	  var player = (cov_279kbuek1j.s[1]++, this);
	  cov_279kbuek1j.s[2]++;

	  if ((cov_279kbuek1j.b[1][0]++, options === false) || (cov_279kbuek1j.b[1][1]++, options) && (cov_279kbuek1j.b[1][2]++, options.enabled === false)) {
	    cov_279kbuek1j.b[0][0]++;
	    cov_279kbuek1j.s[3]++;
	    return;
	  } else {
	    cov_279kbuek1j.b[0][1]++;
	  }

	  var allowedOptions = (cov_279kbuek1j.s[4]++, ["appId", "altSource", "onStop", "onError"]);
	  cov_279kbuek1j.s[5]++;
	  allowedOptions.forEach(function (opt) {
	    cov_279kbuek1j.f[1]++;
	    cov_279kbuek1j.s[6]++;

	    if (player.options_.chromecast === undefined) {
	      cov_279kbuek1j.b[2][0]++;
	      cov_279kbuek1j.s[7]++;
	      player.options_.chromecast = [];
	    } else {
	      cov_279kbuek1j.b[2][1]++;
	    }

	    cov_279kbuek1j.s[8]++;

	    if (player.options_.chromecast[opt] === undefined) {
	      cov_279kbuek1j.b[3][0]++;
	      cov_279kbuek1j.s[9]++;
	      options[opt] = '';
	    } else {
	      cov_279kbuek1j.b[3][1]++;
	      cov_279kbuek1j.s[10]++;
	      options[opt] = player.options_.chromecast[opt];
	    }
	  });
	  var googleCast = (cov_279kbuek1j.s[11]++, null);
	  cov_279kbuek1j.s[12]++;

	  if ((cov_279kbuek1j.b[5][0]++, options.mdns !== undefined) && (cov_279kbuek1j.b[5][1]++, options.mdns)) {
	    cov_279kbuek1j.b[4][0]++;
	    cov_279kbuek1j.s[13]++;
	    setTimeout(function () {
	      cov_279kbuek1j.f[2]++;
	      cov_279kbuek1j.s[14]++;
	      googleCast = new Chromecast(player, options);
	    }, 500);
	  } else {
	    cov_279kbuek1j.b[4][1]++;
	    cov_279kbuek1j.s[15]++;
	    googleCast = new Chromecast(player, options);
	  }
	};

	var registerPlugin = (cov_279kbuek1j.s[16]++, (cov_279kbuek1j.b[6][0]++, videojs.registerPlugin) || (cov_279kbuek1j.b[6][1]++, videojs.plugin));
	cov_279kbuek1j.s[17]++;

	if (typeof videojs.getPlugin('chromecast') === 'undefined') {
	  cov_279kbuek1j.b[7][0]++;
	  cov_279kbuek1j.s[18]++;
	  registerPlugin('chromecast', chromecast);
	} else {
	  cov_279kbuek1j.b[7][1]++;
	}

	cov_279kbuek1j.s[19]++;
	chromecast.VERSION = version;

	var Player = videojs.getComponent('Player');
	QUnit.test('the environment is sane', function (assert) {
	  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
	  assert.strictEqual(typeof sinon, 'object', 'sinon exists');
	  assert.strictEqual(typeof videojs, 'function', 'videojs exists');
	  assert.strictEqual(typeof chromecast, 'function', 'plugin is a function');
	});
	QUnit.module('videojs-google-chromecast', {
	  beforeEach: function beforeEach() {
	    // Mock the environment's timers because certain things - particularly
	    // player readiness - are asynchronous in video.js 5. This MUST come
	    // before any player is created; otherwise, timers could get created
	    // with the actual timer methods!
	    this.clock = sinon.useFakeTimers();
	    this.fixture = document_1.getElementById('qunit-fixture');
	    this.video = document_1.createElement('video');
	    this.fixture.appendChild(this.video);
	    this.player = videojs(this.video);
	  },
	  afterEach: function afterEach() {
	    this.player.dispose();
	    this.clock.restore();
	  }
	});
	QUnit.test('registers itself with video.js', function (assert) {
	  assert.expect(2);
	  assert.strictEqual(typeof Player.prototype.googleChromecast, 'function', 'videojs-google-chromecast plugin was registered');
	  this.player.googleChromecast(); // Tick the clock forward enough to trigger the player to be "ready".

	  this.clock.tick(1);
	  assert.ok(this.player.hasClass('vjs-google-chromecast'), 'the plugin adds a class to the player');
	});

}(QUnit, sinon, videojs));
