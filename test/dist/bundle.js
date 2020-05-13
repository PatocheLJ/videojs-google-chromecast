/*! @name videojs-google-chromecast @version 0.0.1 @license UNLICENSED */
(function (QUnit, sinon, videojs$1) {
	'use strict';

	QUnit = QUnit && Object.prototype.hasOwnProperty.call(QUnit, 'default') ? QUnit['default'] : QUnit;
	sinon = sinon && Object.prototype.hasOwnProperty.call(sinon, 'default') ? sinon['default'] : sinon;
	videojs$1 = videojs$1 && Object.prototype.hasOwnProperty.call(videojs$1, 'default') ? videojs$1['default'] : videojs$1;

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

	var version = "0.0.1";

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized;

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var inheritsLoose = _inheritsLoose;

	var cov_1iiyehkoov = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/component/control-bar/chromecast-button.js',
	      hash = '627582a8a520d8adaa22bec4ee131ae1725e4518',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/component/control-bar/chromecast-button.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 4,
	          column: 26
	        },
	        end: {
	          line: 4,
	          column: 72
	        }
	      },
	      '1': {
	        start: {
	          line: 5,
	          column: 21
	        },
	        end: {
	          line: 5,
	          column: 41
	        }
	      },
	      '2': {
	        start: {
	          line: 6,
	          column: 19
	        },
	        end: {
	          line: 6,
	          column: 45
	        }
	      },
	      '3': {
	        start: {
	          line: 7,
	          column: 18
	        },
	        end: {
	          line: 7,
	          column: 43
	        }
	      },
	      '4': {
	        start: {
	          line: 8,
	          column: 15
	        },
	        end: {
	          line: 8,
	          column: 37
	        }
	      },
	      '5': {
	        start: {
	          line: 10,
	          column: 18
	        },
	        end: {
	          line: 10,
	          column: 23
	        }
	      },
	      '6': {
	        start: {
	          line: 14,
	          column: 8
	        },
	        end: {
	          line: 14,
	          column: 31
	        }
	      },
	      '7': {
	        start: {
	          line: 15,
	          column: 8
	        },
	        end: {
	          line: 15,
	          column: 20
	        }
	      },
	      '8': {
	        start: {
	          line: 16,
	          column: 8
	        },
	        end: {
	          line: 16,
	          column: 29
	        }
	      },
	      '9': {
	        start: {
	          line: 17,
	          column: 8
	        },
	        end: {
	          line: 20,
	          column: 9
	        }
	      },
	      '10': {
	        start: {
	          line: 18,
	          column: 12
	        },
	        end: {
	          line: 18,
	          column: 43
	        }
	      },
	      '11': {
	        start: {
	          line: 19,
	          column: 12
	        },
	        end: {
	          line: 19,
	          column: 50
	        }
	      },
	      '12': {
	        start: {
	          line: 21,
	          column: 8
	        },
	        end: {
	          line: 21,
	          column: 57
	        }
	      },
	      '13': {
	        start: {
	          line: 22,
	          column: 8
	        },
	        end: {
	          line: 22,
	          column: 33
	        }
	      },
	      '14': {
	        start: {
	          line: 24,
	          column: 8
	        },
	        end: {
	          line: 28,
	          column: 11
	        }
	      },
	      '15': {
	        start: {
	          line: 25,
	          column: 12
	        },
	        end: {
	          line: 27,
	          column: 13
	        }
	      },
	      '16': {
	        start: {
	          line: 26,
	          column: 16
	        },
	        end: {
	          line: 26,
	          column: 55
	        }
	      },
	      '17': {
	        start: {
	          line: 30,
	          column: 8
	        },
	        end: {
	          line: 34,
	          column: 11
	        }
	      },
	      '18': {
	        start: {
	          line: 31,
	          column: 12
	        },
	        end: {
	          line: 33,
	          column: 13
	        }
	      },
	      '19': {
	        start: {
	          line: 32,
	          column: 16
	        },
	        end: {
	          line: 32,
	          column: 49
	        }
	      },
	      '20': {
	        start: {
	          line: 38,
	          column: 8
	        },
	        end: {
	          line: 38,
	          column: 64
	        }
	      },
	      '21': {
	        start: {
	          line: 46,
	          column: 25
	        },
	        end: {
	          line: 46,
	          column: 77
	        }
	      },
	      '22': {
	        start: {
	          line: 47,
	          column: 24
	        },
	        end: {
	          line: 47,
	          column: 80
	        }
	      },
	      '23': {
	        start: {
	          line: 48,
	          column: 8
	        },
	        end: {
	          line: 50,
	          column: 9
	        }
	      },
	      '24': {
	        start: {
	          line: 49,
	          column: 12
	        },
	        end: {
	          line: 49,
	          column: 19
	        }
	      },
	      '25': {
	        start: {
	          line: 51,
	          column: 8
	        },
	        end: {
	          line: 59,
	          column: 9
	        }
	      },
	      '26': {
	        start: {
	          line: 52,
	          column: 12
	        },
	        end: {
	          line: 52,
	          column: 51
	        }
	      },
	      '27': {
	        start: {
	          line: 53,
	          column: 12
	        },
	        end: {
	          line: 56,
	          column: 13
	        }
	      },
	      '28': {
	        start: {
	          line: 54,
	          column: 16
	        },
	        end: {
	          line: 54,
	          column: 58
	        }
	      },
	      '29': {
	        start: {
	          line: 55,
	          column: 16
	        },
	        end: {
	          line: 55,
	          column: 39
	        }
	      },
	      '30': {
	        start: {
	          line: 57,
	          column: 12
	        },
	        end: {
	          line: 57,
	          column: 74
	        }
	      },
	      '31': {
	        start: {
	          line: 58,
	          column: 12
	        },
	        end: {
	          line: 58,
	          column: 19
	        }
	      },
	      '32': {
	        start: {
	          line: 61,
	          column: 8
	        },
	        end: {
	          line: 61,
	          column: 47
	        }
	      },
	      '33': {
	        start: {
	          line: 62,
	          column: 8
	        },
	        end: {
	          line: 62,
	          column: 87
	        }
	      },
	      '34': {
	        start: {
	          line: 63,
	          column: 8
	        },
	        end: {
	          line: 63,
	          column: 63
	        }
	      },
	      '35': {
	        start: {
	          line: 64,
	          column: 8
	        },
	        end: {
	          line: 64,
	          column: 135
	        }
	      },
	      '36': {
	        start: {
	          line: 65,
	          column: 8
	        },
	        end: {
	          line: 65,
	          column: 107
	        }
	      },
	      '37': {
	        start: {
	          line: 70,
	          column: 20
	        },
	        end: {
	          line: 73,
	          column: 9
	        }
	      },
	      '38': {
	        start: {
	          line: 75,
	          column: 8
	        },
	        end: {
	          line: 92,
	          column: 9
	        }
	      },
	      '39': {
	        start: {
	          line: 85,
	          column: 16
	        },
	        end: {
	          line: 85,
	          column: 39
	        }
	      },
	      '40': {
	        start: {
	          line: 86,
	          column: 16
	        },
	        end: {
	          line: 86,
	          column: 22
	        }
	      },
	      '41': {
	        start: {
	          line: 88,
	          column: 16
	        },
	        end: {
	          line: 88,
	          column: 22
	        }
	      },
	      '42': {
	        start: {
	          line: 90,
	          column: 16
	        },
	        end: {
	          line: 90,
	          column: 42
	        }
	      },
	      '43': {
	        start: {
	          line: 91,
	          column: 16
	        },
	        end: {
	          line: 91,
	          column: 22
	        }
	      },
	      '44': {
	        start: {
	          line: 93,
	          column: 8
	        },
	        end: {
	          line: 93,
	          column: 73
	        }
	      },
	      '45': {
	        start: {
	          line: 97,
	          column: 8
	        },
	        end: {
	          line: 101,
	          column: 9
	        }
	      },
	      '46': {
	        start: {
	          line: 98,
	          column: 12
	        },
	        end: {
	          line: 98,
	          column: 24
	        }
	      },
	      '47': {
	        start: {
	          line: 100,
	          column: 12
	        },
	        end: {
	          line: 100,
	          column: 24
	        }
	      },
	      '48': {
	        start: {
	          line: 102,
	          column: 8
	        },
	        end: {
	          line: 102,
	          column: 42
	        }
	      },
	      '49': {
	        start: {
	          line: 106,
	          column: 8
	        },
	        end: {
	          line: 109,
	          column: 9
	        }
	      },
	      '50': {
	        start: {
	          line: 107,
	          column: 12
	        },
	        end: {
	          line: 107,
	          column: 38
	        }
	      },
	      '51': {
	        start: {
	          line: 108,
	          column: 12
	        },
	        end: {
	          line: 108,
	          column: 53
	        }
	      },
	      '52': {
	        start: {
	          line: 110,
	          column: 8
	        },
	        end: {
	          line: 110,
	          column: 45
	        }
	      },
	      '53': {
	        start: {
	          line: 114,
	          column: 8
	        },
	        end: {
	          line: 120,
	          column: 9
	        }
	      },
	      '54': {
	        start: {
	          line: 115,
	          column: 12
	        },
	        end: {
	          line: 115,
	          column: 31
	        }
	      },
	      '55': {
	        start: {
	          line: 116,
	          column: 12
	        },
	        end: {
	          line: 116,
	          column: 31
	        }
	      },
	      '56': {
	        start: {
	          line: 118,
	          column: 12
	        },
	        end: {
	          line: 118,
	          column: 32
	        }
	      },
	      '57': {
	        start: {
	          line: 119,
	          column: 12
	        },
	        end: {
	          line: 119,
	          column: 31
	        }
	      },
	      '58': {
	        start: {
	          line: 124,
	          column: 8
	        },
	        end: {
	          line: 124,
	          column: 64
	        }
	      },
	      '59': {
	        start: {
	          line: 125,
	          column: 8
	        },
	        end: {
	          line: 129,
	          column: 9
	        }
	      },
	      '60': {
	        start: {
	          line: 126,
	          column: 12
	        },
	        end: {
	          line: 126,
	          column: 107
	        }
	      },
	      '61': {
	        start: {
	          line: 128,
	          column: 12
	        },
	        end: {
	          line: 128,
	          column: 58
	        }
	      },
	      '62': {
	        start: {
	          line: 140,
	          column: 8
	        },
	        end: {
	          line: 140,
	          column: 34
	        }
	      },
	      '63': {
	        start: {
	          line: 141,
	          column: 23
	        },
	        end: {
	          line: 141,
	          column: 46
	        }
	      },
	      '64': {
	        start: {
	          line: 142,
	          column: 21
	        },
	        end: {
	          line: 142,
	          column: 47
	        }
	      },
	      '65': {
	        start: {
	          line: 144,
	          column: 8
	        },
	        end: {
	          line: 144,
	          column: 109
	        }
	      },
	      '66': {
	        start: {
	          line: 146,
	          column: 8
	        },
	        end: {
	          line: 146,
	          column: 66
	        }
	      },
	      '67': {
	        start: {
	          line: 147,
	          column: 8
	        },
	        end: {
	          line: 147,
	          column: 74
	        }
	      },
	      '68': {
	        start: {
	          line: 149,
	          column: 8
	        },
	        end: {
	          line: 154,
	          column: 9
	        }
	      },
	      '69': {
	        start: {
	          line: 150,
	          column: 12
	        },
	        end: {
	          line: 150,
	          column: 55
	        }
	      },
	      '70': {
	        start: {
	          line: 151,
	          column: 12
	        },
	        end: {
	          line: 151,
	          column: 65
	        }
	      },
	      '71': {
	        start: {
	          line: 152,
	          column: 15
	        },
	        end: {
	          line: 154,
	          column: 9
	        }
	      },
	      '72': {
	        start: {
	          line: 153,
	          column: 12
	        },
	        end: {
	          line: 153,
	          column: 64
	        }
	      },
	      '73': {
	        start: {
	          line: 155,
	          column: 8
	        },
	        end: {
	          line: 162,
	          column: 9
	        }
	      },
	      '74': {
	        start: {
	          line: 156,
	          column: 12
	        },
	        end: {
	          line: 156,
	          column: 66
	        }
	      },
	      '75': {
	        start: {
	          line: 157,
	          column: 12
	        },
	        end: {
	          line: 160,
	          column: 13
	        }
	      },
	      '76': {
	        start: {
	          line: 158,
	          column: 16
	        },
	        end: {
	          line: 158,
	          column: 33
	        }
	      },
	      '77': {
	        start: {
	          line: 159,
	          column: 16
	        },
	        end: {
	          line: 159,
	          column: 48
	        }
	      },
	      '78': {
	        start: {
	          line: 164,
	          column: 23
	        },
	        end: {
	          line: 164,
	          column: 45
	        }
	      },
	      '79': {
	        start: {
	          line: 165,
	          column: 8
	        },
	        end: {
	          line: 168,
	          column: 9
	        }
	      },
	      '80': {
	        start: {
	          line: 166,
	          column: 12
	        },
	        end: {
	          line: 166,
	          column: 50
	        }
	      },
	      '81': {
	        start: {
	          line: 167,
	          column: 12
	        },
	        end: {
	          line: 167,
	          column: 48
	        }
	      },
	      '82': {
	        start: {
	          line: 170,
	          column: 23
	        },
	        end: {
	          line: 170,
	          column: 49
	        }
	      },
	      '83': {
	        start: {
	          line: 171,
	          column: 31
	        },
	        end: {
	          line: 171,
	          column: 65
	        }
	      },
	      '84': {
	        start: {
	          line: 172,
	          column: 21
	        },
	        end: {
	          line: 172,
	          column: 23
	        }
	      },
	      '85': {
	        start: {
	          line: 173,
	          column: 16
	        },
	        end: {
	          line: 173,
	          column: 17
	        }
	      },
	      '86': {
	        start: {
	          line: 176,
	          column: 22
	        },
	        end: {
	          line: 176,
	          column: 23
	        }
	      },
	      '87': {
	        start: {
	          line: 178,
	          column: 8
	        },
	        end: {
	          line: 196,
	          column: 9
	        }
	      },
	      '88': {
	        start: {
	          line: 179,
	          column: 12
	        },
	        end: {
	          line: 190,
	          column: 13
	        }
	      },
	      '89': {
	        start: {
	          line: 180,
	          column: 16
	        },
	        end: {
	          line: 180,
	          column: 46
	        }
	      },
	      '90': {
	        start: {
	          line: 181,
	          column: 16
	        },
	        end: {
	          line: 181,
	          column: 116
	        }
	      },
	      '91': {
	        start: {
	          line: 182,
	          column: 16
	        },
	        end: {
	          line: 182,
	          column: 26
	        }
	      },
	      '92': {
	        start: {
	          line: 183,
	          column: 16
	        },
	        end: {
	          line: 183,
	          column: 95
	        }
	      },
	      '93': {
	        start: {
	          line: 184,
	          column: 16
	        },
	        end: {
	          line: 184,
	          column: 105
	        }
	      },
	      '94': {
	        start: {
	          line: 185,
	          column: 16
	        },
	        end: {
	          line: 185,
	          column: 73
	        }
	      },
	      '95': {
	        start: {
	          line: 186,
	          column: 16
	        },
	        end: {
	          line: 186,
	          column: 43
	        }
	      },
	      '96': {
	        start: {
	          line: 187,
	          column: 16
	        },
	        end: {
	          line: 187,
	          column: 50
	        }
	      },
	      '97': {
	        start: {
	          line: 188,
	          column: 16
	        },
	        end: {
	          line: 188,
	          column: 40
	        }
	      },
	      '98': {
	        start: {
	          line: 189,
	          column: 16
	        },
	        end: {
	          line: 189,
	          column: 35
	        }
	      },
	      '99': {
	        start: {
	          line: 191,
	          column: 12
	        },
	        end: {
	          line: 191,
	          column: 78
	        }
	      },
	      '100': {
	        start: {
	          line: 192,
	          column: 12
	        },
	        end: {
	          line: 192,
	          column: 65
	        }
	      },
	      '101': {
	        start: {
	          line: 193,
	          column: 12
	        },
	        end: {
	          line: 193,
	          column: 67
	        }
	      },
	      '102': {
	        start: {
	          line: 194,
	          column: 12
	        },
	        end: {
	          line: 194,
	          column: 96
	        }
	      },
	      '103': {
	        start: {
	          line: 195,
	          column: 12
	        },
	        end: {
	          line: 195,
	          column: 104
	        }
	      },
	      '104': {
	        start: {
	          line: 198,
	          column: 8
	        },
	        end: {
	          line: 214,
	          column: 9
	        }
	      },
	      '105': {
	        start: {
	          line: 199,
	          column: 12
	        },
	        end: {
	          line: 199,
	          column: 51
	        }
	      },
	      '106': {
	        start: {
	          line: 200,
	          column: 12
	        },
	        end: {
	          line: 211,
	          column: 13
	        }
	      },
	      '107': {
	        start: {
	          line: 201,
	          column: 16
	        },
	        end: {
	          line: 210,
	          column: 17
	        }
	      },
	      '108': {
	        start: {
	          line: 202,
	          column: 20
	        },
	        end: {
	          line: 202,
	          column: 50
	        }
	      },
	      '109': {
	        start: {
	          line: 203,
	          column: 20
	        },
	        end: {
	          line: 203,
	          column: 30
	        }
	      },
	      '110': {
	        start: {
	          line: 204,
	          column: 20
	        },
	        end: {
	          line: 204,
	          column: 100
	        }
	      },
	      '111': {
	        start: {
	          line: 205,
	          column: 20
	        },
	        end: {
	          line: 205,
	          column: 41
	        }
	      },
	      '112': {
	        start: {
	          line: 206,
	          column: 20
	        },
	        end: {
	          line: 206,
	          column: 47
	        }
	      },
	      '113': {
	        start: {
	          line: 207,
	          column: 20
	        },
	        end: {
	          line: 207,
	          column: 54
	        }
	      },
	      '114': {
	        start: {
	          line: 208,
	          column: 20
	        },
	        end: {
	          line: 208,
	          column: 44
	        }
	      },
	      '115': {
	        start: {
	          line: 209,
	          column: 20
	        },
	        end: {
	          line: 209,
	          column: 39
	        }
	      },
	      '116': {
	        start: {
	          line: 213,
	          column: 12
	        },
	        end: {
	          line: 213,
	          column: 59
	        }
	      },
	      '117': {
	        start: {
	          line: 216,
	          column: 8
	        },
	        end: {
	          line: 218,
	          column: 9
	        }
	      },
	      '118': {
	        start: {
	          line: 217,
	          column: 12
	        },
	        end: {
	          line: 217,
	          column: 38
	        }
	      },
	      '119': {
	        start: {
	          line: 220,
	          column: 8
	        },
	        end: {
	          line: 220,
	          column: 67
	        }
	      },
	      '120': {
	        start: {
	          line: 222,
	          column: 8
	        },
	        end: {
	          line: 222,
	          column: 36
	        }
	      },
	      '121': {
	        start: {
	          line: 223,
	          column: 8
	        },
	        end: {
	          line: 223,
	          column: 61
	        }
	      },
	      '122': {
	        start: {
	          line: 225,
	          column: 8
	        },
	        end: {
	          line: 225,
	          column: 109
	        }
	      },
	      '123': {
	        start: {
	          line: 226,
	          column: 8
	        },
	        end: {
	          line: 226,
	          column: 75
	        }
	      },
	      '124': {
	        start: {
	          line: 230,
	          column: 8
	        },
	        end: {
	          line: 234,
	          column: 11
	        }
	      },
	      '125': {
	        start: {
	          line: 236,
	          column: 8
	        },
	        end: {
	          line: 236,
	          column: 28
	        }
	      },
	      '126': {
	        start: {
	          line: 237,
	          column: 8
	        },
	        end: {
	          line: 237,
	          column: 73
	        }
	      },
	      '127': {
	        start: {
	          line: 238,
	          column: 8
	        },
	        end: {
	          line: 238,
	          column: 52
	        }
	      },
	      '128': {
	        start: {
	          line: 239,
	          column: 8
	        },
	        end: {
	          line: 239,
	          column: 38
	        }
	      },
	      '129': {
	        start: {
	          line: 240,
	          column: 8
	        },
	        end: {
	          line: 240,
	          column: 35
	        }
	      },
	      '130': {
	        start: {
	          line: 241,
	          column: 8
	        },
	        end: {
	          line: 241,
	          column: 34
	        }
	      },
	      '131': {
	        start: {
	          line: 245,
	          column: 8
	        },
	        end: {
	          line: 247,
	          column: 9
	        }
	      },
	      '132': {
	        start: {
	          line: 246,
	          column: 12
	        },
	        end: {
	          line: 246,
	          column: 19
	        }
	      },
	      '133': {
	        start: {
	          line: 248,
	          column: 8
	        },
	        end: {
	          line: 250,
	          column: 9
	        }
	      },
	      '134': {
	        start: {
	          line: 249,
	          column: 12
	        },
	        end: {
	          line: 249,
	          column: 43
	        }
	      },
	      '135': {
	        start: {
	          line: 254,
	          column: 8
	        },
	        end: {
	          line: 254,
	          column: 97
	        }
	      },
	      '136': {
	        start: {
	          line: 258,
	          column: 8
	        },
	        end: {
	          line: 258,
	          column: 29
	        }
	      },
	      '137': {
	        start: {
	          line: 259,
	          column: 19
	        },
	        end: {
	          line: 259,
	          column: 45
	        }
	      },
	      '138': {
	        start: {
	          line: 260,
	          column: 8
	        },
	        end: {
	          line: 260,
	          column: 38
	        }
	      },
	      '139': {
	        start: {
	          line: 261,
	          column: 8
	        },
	        end: {
	          line: 261,
	          column: 59
	        }
	      },
	      '140': {
	        start: {
	          line: 262,
	          column: 8
	        },
	        end: {
	          line: 266,
	          column: 9
	        }
	      },
	      '141': {
	        start: {
	          line: 263,
	          column: 12
	        },
	        end: {
	          line: 265,
	          column: 15
	        }
	      },
	      '142': {
	        start: {
	          line: 264,
	          column: 16
	        },
	        end: {
	          line: 264,
	          column: 43
	        }
	      },
	      '143': {
	        start: {
	          line: 267,
	          column: 8
	        },
	        end: {
	          line: 267,
	          column: 39
	        }
	      },
	      '144': {
	        start: {
	          line: 268,
	          column: 8
	        },
	        end: {
	          line: 268,
	          column: 73
	        }
	      },
	      '145': {
	        start: {
	          line: 269,
	          column: 8
	        },
	        end: {
	          line: 269,
	          column: 38
	        }
	      },
	      '146': {
	        start: {
	          line: 273,
	          column: 8
	        },
	        end: {
	          line: 273,
	          column: 28
	        }
	      },
	      '147': {
	        start: {
	          line: 274,
	          column: 8
	        },
	        end: {
	          line: 278,
	          column: 9
	        }
	      },
	      '148': {
	        start: {
	          line: 275,
	          column: 12
	        },
	        end: {
	          line: 275,
	          column: 38
	        }
	      },
	      '149': {
	        start: {
	          line: 277,
	          column: 12
	        },
	        end: {
	          line: 277,
	          column: 35
	        }
	      },
	      '150': {
	        start: {
	          line: 282,
	          column: 0
	        },
	        end: {
	          line: 282,
	          column: 47
	        }
	      },
	      '151': {
	        start: {
	          line: 284,
	          column: 0
	        },
	        end: {
	          line: 284,
	          column: 52
	        }
	      },
	      '152': {
	        start: {
	          line: 286,
	          column: 0
	        },
	        end: {
	          line: 286,
	          column: 55
	        }
	      },
	      '153': {
	        start: {
	          line: 287,
	          column: 0
	        },
	        end: {
	          line: 287,
	          column: 120
	        }
	      },
	      '154': {
	        start: {
	          line: 288,
	          column: 0
	        },
	        end: {
	          line: 290,
	          column: 1
	        }
	      },
	      '155': {
	        start: {
	          line: 289,
	          column: 4
	        },
	        end: {
	          line: 289,
	          column: 70
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 13,
	            column: 4
	          },
	          end: {
	            line: 13,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 13,
	            column: 38
	          },
	          end: {
	            line: 35,
	            column: 5
	          }
	        },
	        line: 13
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 24,
	            column: 37
	          },
	          end: {
	            line: 24,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 24,
	            column: 43
	          },
	          end: {
	            line: 28,
	            column: 9
	          }
	        },
	        line: 24
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 30,
	            column: 35
	          },
	          end: {
	            line: 30,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 30,
	            column: 41
	          },
	          end: {
	            line: 34,
	            column: 9
	          }
	        },
	        line: 30
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 37,
	            column: 4
	          },
	          end: {
	            line: 37,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 37,
	            column: 20
	          },
	          end: {
	            line: 39,
	            column: 5
	          }
	        },
	        line: 37
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 41,
	            column: 4
	          },
	          end: {
	            line: 41,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 41,
	            column: 21
	          },
	          end: {
	            line: 66,
	            column: 5
	          }
	        },
	        line: 41
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 68,
	            column: 4
	          },
	          end: {
	            line: 68,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 68,
	            column: 26
	          },
	          end: {
	            line: 94,
	            column: 5
	          }
	        },
	        line: 68
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 96,
	            column: 4
	          },
	          end: {
	            line: 96,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 96,
	            column: 21
	          },
	          end: {
	            line: 103,
	            column: 5
	          }
	        },
	        line: 96
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 105,
	            column: 4
	          },
	          end: {
	            line: 105,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 105,
	            column: 36
	          },
	          end: {
	            line: 111,
	            column: 5
	          }
	        },
	        line: 105
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 113,
	            column: 4
	          },
	          end: {
	            line: 113,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 113,
	            column: 36
	          },
	          end: {
	            line: 121,
	            column: 5
	          }
	        },
	        line: 113
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 123,
	            column: 4
	          },
	          end: {
	            line: 123,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 123,
	            column: 16
	          },
	          end: {
	            line: 130,
	            column: 5
	          }
	        },
	        line: 123
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 132,
	            column: 4
	          },
	          end: {
	            line: 132,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 132,
	            column: 31
	          },
	          end: {
	            line: 227,
	            column: 5
	          }
	        },
	        line: 132
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 229,
	            column: 4
	          },
	          end: {
	            line: 229,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 229,
	            column: 30
	          },
	          end: {
	            line: 242,
	            column: 5
	          }
	        },
	        line: 229
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 244,
	            column: 4
	          },
	          end: {
	            line: 244,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 244,
	            column: 30
	          },
	          end: {
	            line: 251,
	            column: 5
	          }
	        },
	        line: 244
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 253,
	            column: 4
	          },
	          end: {
	            line: 253,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 253,
	            column: 19
	          },
	          end: {
	            line: 255,
	            column: 5
	          }
	        },
	        line: 253
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 257,
	            column: 4
	          },
	          end: {
	            line: 257,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 257,
	            column: 24
	          },
	          end: {
	            line: 270,
	            column: 5
	          }
	        },
	        line: 257
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 263,
	            column: 39
	          },
	          end: {
	            line: 263,
	            column: 40
	          }
	        },
	        loc: {
	          start: {
	            line: 263,
	            column: 51
	          },
	          end: {
	            line: 265,
	            column: 13
	          }
	        },
	        line: 263
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 272,
	            column: 4
	          },
	          end: {
	            line: 272,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 272,
	            column: 19
	          },
	          end: {
	            line: 279,
	            column: 5
	          }
	        },
	        line: 272
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 4,
	            column: 26
	          },
	          end: {
	            line: 4,
	            column: 72
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 4,
	            column: 26
	          },
	          end: {
	            line: 4,
	            column: 51
	          }
	        }, {
	          start: {
	            line: 4,
	            column: 55
	          },
	          end: {
	            line: 4,
	            column: 72
	          }
	        }],
	        line: 4
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 13,
	            column: 24
	          },
	          end: {
	            line: 13,
	            column: 36
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 13,
	            column: 34
	          },
	          end: {
	            line: 13,
	            column: 36
	          }
	        }],
	        line: 13
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 17,
	            column: 8
	          },
	          end: {
	            line: 20,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 17,
	            column: 8
	          },
	          end: {
	            line: 20,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 17,
	            column: 8
	          },
	          end: {
	            line: 20,
	            column: 9
	          }
	        }],
	        line: 17
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 25,
	            column: 12
	          },
	          end: {
	            line: 27,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 25,
	            column: 12
	          },
	          end: {
	            line: 27,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 25,
	            column: 12
	          },
	          end: {
	            line: 27,
	            column: 13
	          }
	        }],
	        line: 25
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 25,
	            column: 16
	          },
	          end: {
	            line: 25,
	            column: 51
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 25,
	            column: 16
	          },
	          end: {
	            line: 25,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 25,
	            column: 32
	          },
	          end: {
	            line: 25,
	            column: 51
	          }
	        }],
	        line: 25
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 31,
	            column: 12
	          },
	          end: {
	            line: 33,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 31,
	            column: 12
	          },
	          end: {
	            line: 33,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 31,
	            column: 12
	          },
	          end: {
	            line: 33,
	            column: 13
	          }
	        }],
	        line: 31
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 31,
	            column: 16
	          },
	          end: {
	            line: 31,
	            column: 47
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 31,
	            column: 16
	          },
	          end: {
	            line: 31,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 31,
	            column: 32
	          },
	          end: {
	            line: 31,
	            column: 47
	          }
	        }],
	        line: 31
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 46,
	            column: 25
	          },
	          end: {
	            line: 46,
	            column: 77
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 46,
	            column: 25
	          },
	          end: {
	            line: 46,
	            column: 41
	          }
	        }, {
	          start: {
	            line: 46,
	            column: 45
	          },
	          end: {
	            line: 46,
	            column: 71
	          }
	        }, {
	          start: {
	            line: 46,
	            column: 75
	          },
	          end: {
	            line: 46,
	            column: 77
	          }
	        }],
	        line: 46
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 47,
	            column: 24
	          },
	          end: {
	            line: 47,
	            column: 80
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 47,
	            column: 24
	          },
	          end: {
	            line: 47,
	            column: 49
	          }
	        }, {
	          start: {
	            line: 47,
	            column: 53
	          },
	          end: {
	            line: 47,
	            column: 80
	          }
	        }],
	        line: 47
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 48,
	            column: 8
	          },
	          end: {
	            line: 50,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 48,
	            column: 8
	          },
	          end: {
	            line: 50,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 48,
	            column: 8
	          },
	          end: {
	            line: 50,
	            column: 9
	          }
	        }],
	        line: 48
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 48,
	            column: 12
	          },
	          end: {
	            line: 48,
	            column: 82
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 48,
	            column: 12
	          },
	          end: {
	            line: 48,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 48,
	            column: 26
	          },
	          end: {
	            line: 48,
	            column: 49
	          }
	        }, {
	          start: {
	            line: 48,
	            column: 53
	          },
	          end: {
	            line: 48,
	            column: 82
	          }
	        }],
	        line: 48
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 51,
	            column: 8
	          },
	          end: {
	            line: 59,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 51,
	            column: 8
	          },
	          end: {
	            line: 59,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 51,
	            column: 8
	          },
	          end: {
	            line: 59,
	            column: 9
	          }
	        }],
	        line: 51
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 51,
	            column: 12
	          },
	          end: {
	            line: 51,
	            column: 52
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 51,
	            column: 12
	          },
	          end: {
	            line: 51,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 51,
	            column: 28
	          },
	          end: {
	            line: 51,
	            column: 52
	          }
	        }],
	        line: 51
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 53,
	            column: 12
	          },
	          end: {
	            line: 56,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 53,
	            column: 12
	          },
	          end: {
	            line: 56,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 53,
	            column: 12
	          },
	          end: {
	            line: 56,
	            column: 13
	          }
	        }],
	        line: 53
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 62,
	            column: 16
	          },
	          end: {
	            line: 62,
	            column: 86
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 62,
	            column: 16
	          },
	          end: {
	            line: 62,
	            column: 35
	          }
	        }, {
	          start: {
	            line: 62,
	            column: 39
	          },
	          end: {
	            line: 62,
	            column: 86
	          }
	        }],
	        line: 62
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 75,
	            column: 8
	          },
	          end: {
	            line: 92,
	            column: 9
	          }
	        },
	        type: 'switch',
	        locations: [{
	          start: {
	            line: 76,
	            column: 12
	          },
	          end: {
	            line: 76,
	            column: 59
	          }
	        }, {
	          start: {
	            line: 77,
	            column: 12
	          },
	          end: {
	            line: 77,
	            column: 57
	          }
	        }, {
	          start: {
	            line: 78,
	            column: 12
	          },
	          end: {
	            line: 78,
	            column: 64
	          }
	        }, {
	          start: {
	            line: 79,
	            column: 12
	          },
	          end: {
	            line: 79,
	            column: 57
	          }
	        }, {
	          start: {
	            line: 80,
	            column: 12
	          },
	          end: {
	            line: 80,
	            column: 57
	          }
	        }, {
	          start: {
	            line: 81,
	            column: 12
	          },
	          end: {
	            line: 81,
	            column: 60
	          }
	        }, {
	          start: {
	            line: 82,
	            column: 12
	          },
	          end: {
	            line: 82,
	            column: 53
	          }
	        }, {
	          start: {
	            line: 83,
	            column: 12
	          },
	          end: {
	            line: 83,
	            column: 53
	          }
	        }, {
	          start: {
	            line: 84,
	            column: 12
	          },
	          end: {
	            line: 86,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 87,
	            column: 12
	          },
	          end: {
	            line: 88,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 89,
	            column: 12
	          },
	          end: {
	            line: 91,
	            column: 22
	          }
	        }],
	        line: 75
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 97,
	            column: 8
	          },
	          end: {
	            line: 101,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 97,
	            column: 8
	          },
	          end: {
	            line: 101,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 97,
	            column: 8
	          },
	          end: {
	            line: 101,
	            column: 9
	          }
	        }],
	        line: 97
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 106,
	            column: 8
	          },
	          end: {
	            line: 109,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 106,
	            column: 8
	          },
	          end: {
	            line: 109,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 106,
	            column: 8
	          },
	          end: {
	            line: 109,
	            column: 9
	          }
	        }],
	        line: 106
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 114,
	            column: 8
	          },
	          end: {
	            line: 120,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 114,
	            column: 8
	          },
	          end: {
	            line: 120,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 114,
	            column: 8
	          },
	          end: {
	            line: 120,
	            column: 9
	          }
	        }],
	        line: 114
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 125,
	            column: 8
	          },
	          end: {
	            line: 129,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 125,
	            column: 8
	          },
	          end: {
	            line: 129,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 125,
	            column: 8
	          },
	          end: {
	            line: 129,
	            column: 9
	          }
	        }],
	        line: 125
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 149,
	            column: 8
	          },
	          end: {
	            line: 154,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 149,
	            column: 8
	          },
	          end: {
	            line: 154,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 149,
	            column: 8
	          },
	          end: {
	            line: 154,
	            column: 9
	          }
	        }],
	        line: 149
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 152,
	            column: 15
	          },
	          end: {
	            line: 154,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 152,
	            column: 15
	          },
	          end: {
	            line: 154,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 152,
	            column: 15
	          },
	          end: {
	            line: 154,
	            column: 9
	          }
	        }],
	        line: 152
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 155,
	            column: 8
	          },
	          end: {
	            line: 162,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 155,
	            column: 8
	          },
	          end: {
	            line: 162,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 155,
	            column: 8
	          },
	          end: {
	            line: 162,
	            column: 9
	          }
	        }],
	        line: 155
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 165,
	            column: 8
	          },
	          end: {
	            line: 168,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 165,
	            column: 8
	          },
	          end: {
	            line: 168,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 165,
	            column: 8
	          },
	          end: {
	            line: 168,
	            column: 9
	          }
	        }],
	        line: 165
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 178,
	            column: 8
	          },
	          end: {
	            line: 196,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 178,
	            column: 8
	          },
	          end: {
	            line: 196,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 178,
	            column: 8
	          },
	          end: {
	            line: 196,
	            column: 9
	          }
	        }],
	        line: 178
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 181,
	            column: 32
	          },
	          end: {
	            line: 181,
	            column: 115
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 181,
	            column: 32
	          },
	          end: {
	            line: 181,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 181,
	            column: 50
	          },
	          end: {
	            line: 181,
	            column: 79
	          }
	        }, {
	          start: {
	            line: 181,
	            column: 83
	          },
	          end: {
	            line: 181,
	            column: 115
	          }
	        }],
	        line: 181
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 184,
	            column: 39
	          },
	          end: {
	            line: 184,
	            column: 104
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 184,
	            column: 55
	          },
	          end: {
	            line: 184,
	            column: 72
	          }
	        }, {
	          start: {
	            line: 184,
	            column: 75
	          },
	          end: {
	            line: 184,
	            column: 104
	          }
	        }],
	        line: 184
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 200,
	            column: 12
	          },
	          end: {
	            line: 211,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 200,
	            column: 12
	          },
	          end: {
	            line: 211,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 200,
	            column: 12
	          },
	          end: {
	            line: 211,
	            column: 13
	          }
	        }],
	        line: 200
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 216,
	            column: 8
	          },
	          end: {
	            line: 218,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 216,
	            column: 8
	          },
	          end: {
	            line: 218,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 216,
	            column: 8
	          },
	          end: {
	            line: 218,
	            column: 9
	          }
	        }],
	        line: 216
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 245,
	            column: 8
	          },
	          end: {
	            line: 247,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 245,
	            column: 8
	          },
	          end: {
	            line: 247,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 245,
	            column: 8
	          },
	          end: {
	            line: 247,
	            column: 9
	          }
	        }],
	        line: 245
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 248,
	            column: 8
	          },
	          end: {
	            line: 250,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 248,
	            column: 8
	          },
	          end: {
	            line: 250,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 248,
	            column: 8
	          },
	          end: {
	            line: 250,
	            column: 9
	          }
	        }],
	        line: 248
	      },
	      '31': {
	        loc: {
	          start: {
	            line: 262,
	            column: 8
	          },
	          end: {
	            line: 266,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 262,
	            column: 8
	          },
	          end: {
	            line: 266,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 262,
	            column: 8
	          },
	          end: {
	            line: 266,
	            column: 9
	          }
	        }],
	        line: 262
	      },
	      '32': {
	        loc: {
	          start: {
	            line: 274,
	            column: 8
	          },
	          end: {
	            line: 278,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 274,
	            column: 8
	          },
	          end: {
	            line: 278,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 274,
	            column: 8
	          },
	          end: {
	            line: 278,
	            column: 9
	          }
	        }],
	        line: 274
	      },
	      '33': {
	        loc: {
	          start: {
	            line: 288,
	            column: 0
	          },
	          end: {
	            line: 290,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 288,
	            column: 0
	          },
	          end: {
	            line: 290,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 288,
	            column: 0
	          },
	          end: {
	            line: 290,
	            column: 1
	          }
	        }],
	        line: 288
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
	      '155': 0
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
	      '16': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0, 0],
	      '8': [0, 0],
	      '9': [0, 0],
	      '10': [0, 0, 0],
	      '11': [0, 0],
	      '12': [0, 0],
	      '13': [0, 0],
	      '14': [0, 0],
	      '15': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	      '16': [0, 0],
	      '17': [0, 0],
	      '18': [0, 0],
	      '19': [0, 0],
	      '20': [0, 0],
	      '21': [0, 0],
	      '22': [0, 0],
	      '23': [0, 0],
	      '24': [0, 0],
	      '25': [0, 0, 0],
	      '26': [0, 0],
	      '27': [0, 0],
	      '28': [0, 0],
	      '29': [0, 0],
	      '30': [0, 0],
	      '31': [0, 0],
	      '32': [0, 0],
	      '33': [0, 0]
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

	var registerComponent = (cov_1iiyehkoov.s[0]++, (cov_1iiyehkoov.b[0][0]++, videojs.registerComponent) || (cov_1iiyehkoov.b[0][1]++, videojs.component));
	var getComponent = (cov_1iiyehkoov.s[1]++, videojs.getComponent);
	var ControlBar = (cov_1iiyehkoov.s[2]++, getComponent('ControlBar'));
	var Component = (cov_1iiyehkoov.s[3]++, getComponent('Component'));
	var Button = (cov_1iiyehkoov.s[4]++, getComponent('Button'));
	var hasReceiver = (cov_1iiyehkoov.s[5]++, false);

	var ChromecastButton = /*#__PURE__*/function (_Button) {
	  inheritsLoose(ChromecastButton, _Button);

	  function ChromecastButton(player, options) {
	    var _this;

	    if (options === void 0) {
	      options = (cov_1iiyehkoov.b[1][0]++, {});
	    }

	    cov_1iiyehkoov.f[0]++;
	    cov_1iiyehkoov.s[6]++;
	    _this = _Button.call(this, player, options) || this;
	    cov_1iiyehkoov.s[7]++;

	    _this.hide();

	    cov_1iiyehkoov.s[8]++;

	    _this.initializeApi();

	    cov_1iiyehkoov.s[9]++;

	    if (player.options_.chromecast === undefined) {
	      cov_1iiyehkoov.b[2][0]++;
	      cov_1iiyehkoov.s[10]++;
	      player.options_.chromecast = {};
	      cov_1iiyehkoov.s[11]++;
	      player.options_.chromecast.appId = '';
	    } else {
	      cov_1iiyehkoov.b[2][1]++;
	    }

	    cov_1iiyehkoov.s[12]++;
	    options.appId = player.options_.chromecast.appId;
	    cov_1iiyehkoov.s[13]++;
	    player.chromecast = assertThisInitialized(_this);
	    cov_1iiyehkoov.s[14]++;

	    _this.on(player, 'loadstart', function () {
	      cov_1iiyehkoov.f[1]++;
	      cov_1iiyehkoov.s[15]++;

	      if ((cov_1iiyehkoov.b[4][0]++, _this.casting) && (cov_1iiyehkoov.b[4][1]++, _this.apiInitialized)) {
	        cov_1iiyehkoov.b[3][0]++;
	        cov_1iiyehkoov.s[16]++;

	        _this.onSessionSuccess(_this.apiSession);
	      } else {
	        cov_1iiyehkoov.b[3][1]++;
	      }
	    });

	    cov_1iiyehkoov.s[17]++;

	    _this.on(player, 'dispose', function () {
	      cov_1iiyehkoov.f[2]++;
	      cov_1iiyehkoov.s[18]++;

	      if ((cov_1iiyehkoov.b[6][0]++, _this.casting) && (cov_1iiyehkoov.b[6][1]++, _this.apiSession)) {
	        cov_1iiyehkoov.b[5][0]++;
	        cov_1iiyehkoov.s[19]++;

	        _this.apiSession.stop(null, null);
	      } else {
	        cov_1iiyehkoov.b[5][1]++;
	      }
	    });

	    return _this;
	  }

	  var _proto = ChromecastButton.prototype;

	  _proto.buildCSSClass = function buildCSSClass() {
	    cov_1iiyehkoov.f[3]++;
	    cov_1iiyehkoov.s[20]++;
	    return "vjs-chromecast-button " + _Button.prototype.buildCSSClass.call(this);
	  };

	  _proto.initializeApi = function initializeApi() {
	    cov_1iiyehkoov.f[4]++;
	    var apiConfig;
	    var appId;
	    var sessionRequest;
	    var user_agent = (cov_1iiyehkoov.s[21]++, (cov_1iiyehkoov.b[7][0]++, window.navigator) && (cov_1iiyehkoov.b[7][1]++, window.navigator.userAgent) || (cov_1iiyehkoov.b[7][2]++, ''));
	    var is_chrome = (cov_1iiyehkoov.s[22]++, (cov_1iiyehkoov.b[8][0]++, videojs.browser.IS_CHROME) || (cov_1iiyehkoov.b[8][1]++, /CriOS/i.test(user_agent)));
	    cov_1iiyehkoov.s[23]++;

	    if ((cov_1iiyehkoov.b[10][0]++, !is_chrome) || (cov_1iiyehkoov.b[10][1]++, videojs.browser.IS_EDGE) || (cov_1iiyehkoov.b[10][2]++, typeof chrome === 'undefined')) {
	      cov_1iiyehkoov.b[9][0]++;
	      cov_1iiyehkoov.s[24]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[9][1]++;
	    }

	    cov_1iiyehkoov.s[25]++;

	    if ((cov_1iiyehkoov.b[12][0]++, !chrome.cast) || (cov_1iiyehkoov.b[12][1]++, !chrome.cast.isAvailable)) {
	      cov_1iiyehkoov.b[11][0]++;
	      cov_1iiyehkoov.s[26]++;
	      videojs.log('Cast APIs not available');
	      cov_1iiyehkoov.s[27]++;

	      if (this.tryingReconnect < 10) {
	        cov_1iiyehkoov.b[13][0]++;
	        cov_1iiyehkoov.s[28]++;
	        this.setTimeout(this.initializeApi, 1000);
	        cov_1iiyehkoov.s[29]++;
	        ++this.tryingReconnect;
	      } else {
	        cov_1iiyehkoov.b[13][1]++;
	      }

	      cov_1iiyehkoov.s[30]++;
	      videojs.log('Cast APIs not available. Max reconnect attempt');
	      cov_1iiyehkoov.s[31]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[11][1]++;
	    }

	    cov_1iiyehkoov.s[32]++;
	    videojs.log('Cast APIs are available');
	    cov_1iiyehkoov.s[33]++;
	    appId = (cov_1iiyehkoov.b[14][0]++, this.options_.appId) || (cov_1iiyehkoov.b[14][1]++, chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
	    cov_1iiyehkoov.s[34]++;
	    sessionRequest = new chrome.cast.SessionRequest(appId);
	    cov_1iiyehkoov.s[35]++;
	    apiConfig = new chrome.cast.ApiConfig(sessionRequest, this.sessionJoinedListener.bind(this), this.receiverListener.bind(this));
	    cov_1iiyehkoov.s[36]++;
	    return chrome.cast.initialize(apiConfig, this.onInitSuccess.bind(this), this.castError.bind(this));
	  };

	  _proto.castError = function castError(_castError) {
	    cov_1iiyehkoov.f[5]++;
	    var error = (cov_1iiyehkoov.s[37]++, {
	      code: _castError.code,
	      message: _castError.description
	    });
	    cov_1iiyehkoov.s[38]++;

	    switch (_castError.code) {
	      case chrome.cast.ErrorCode.API_NOT_INITIALIZED:
	        cov_1iiyehkoov.b[15][0]++;

	      case chrome.cast.ErrorCode.EXTENSION_MISSING:
	        cov_1iiyehkoov.b[15][1]++;

	      case chrome.cast.ErrorCode.EXTENSION_NOT_COMPATIBLE:
	        cov_1iiyehkoov.b[15][2]++;

	      case chrome.cast.ErrorCode.INVALID_PARAMETER:
	        cov_1iiyehkoov.b[15][3]++;

	      case chrome.cast.ErrorCode.LOAD_MEDIA_FAILED:
	        cov_1iiyehkoov.b[15][4]++;

	      case chrome.cast.ErrorCode.RECEIVER_UNAVAILABLE:
	        cov_1iiyehkoov.b[15][5]++;

	      case chrome.cast.ErrorCode.SESSION_ERROR:
	        cov_1iiyehkoov.b[15][6]++;

	      case chrome.cast.ErrorCode.CHANNEL_ERROR:
	        cov_1iiyehkoov.b[15][7]++;

	      case chrome.cast.ErrorCode.TIMEOUT:
	        cov_1iiyehkoov.b[15][8]++;
	        cov_1iiyehkoov.s[39]++;
	        this.addClass('error');
	        cov_1iiyehkoov.s[40]++;
	        break;

	      case chrome.cast.ErrorCode.CANCEL:
	        cov_1iiyehkoov.b[15][9]++;
	        cov_1iiyehkoov.s[41]++;
	        break;

	      default:
	        cov_1iiyehkoov.b[15][10]++;
	        cov_1iiyehkoov.s[42]++;
	        this.player_.error(error);
	        cov_1iiyehkoov.s[43]++;
	        break;
	    }

	    cov_1iiyehkoov.s[44]++;
	    return videojs.log('Cast Error: ' + JSON.stringify(_castError));
	  };

	  _proto.onInitSuccess = function onInitSuccess() {
	    cov_1iiyehkoov.f[6]++;
	    cov_1iiyehkoov.s[45]++;

	    if (hasReceiver) {
	      cov_1iiyehkoov.b[16][0]++;
	      cov_1iiyehkoov.s[46]++;
	      this.show();
	    } else {
	      cov_1iiyehkoov.b[16][1]++;
	      cov_1iiyehkoov.s[47]++;
	      this.hide();
	    }

	    cov_1iiyehkoov.s[48]++;
	    return this.apiInitialized = true;
	  };

	  _proto.sessionJoinedListener = function sessionJoinedListener(session) {
	    cov_1iiyehkoov.f[7]++;
	    cov_1iiyehkoov.s[49]++;

	    if (session.media.length) {
	      cov_1iiyehkoov.b[17][0]++;
	      cov_1iiyehkoov.s[50]++;
	      this.apiSession = session;
	      cov_1iiyehkoov.s[51]++;
	      this.onMediaDiscovered(session.media[0]);
	    } else {
	      cov_1iiyehkoov.b[17][1]++;
	    }

	    cov_1iiyehkoov.s[52]++;
	    return console.log('Session joined');
	  };

	  _proto.receiverListener = function receiverListener(availability) {
	    cov_1iiyehkoov.f[8]++;
	    cov_1iiyehkoov.s[53]++;

	    if (availability === 'available') {
	      cov_1iiyehkoov.b[18][0]++;
	      cov_1iiyehkoov.s[54]++;
	      hasReceiver = true;
	      cov_1iiyehkoov.s[55]++;
	      return this.show();
	    } else {
	      cov_1iiyehkoov.b[18][1]++;
	      cov_1iiyehkoov.s[56]++;
	      hasReceiver = false;
	      cov_1iiyehkoov.s[57]++;
	      return this.hide();
	    }
	  };

	  _proto.doLaunch = function doLaunch() {
	    cov_1iiyehkoov.f[9]++;
	    cov_1iiyehkoov.s[58]++;
	    videojs.log('Cast video: ' + this.player_.cache_.src);
	    cov_1iiyehkoov.s[59]++;

	    if (this.apiInitialized) {
	      cov_1iiyehkoov.b[19][0]++;
	      cov_1iiyehkoov.s[60]++;
	      return chrome.cast.requestSession(this.onSessionSuccess.bind(this), this.castError.bind(this));
	    } else {
	      cov_1iiyehkoov.b[19][1]++;
	      cov_1iiyehkoov.s[61]++;
	      return videojs.log('Session not initialized');
	    }
	  };

	  _proto.onSessionSuccess = function onSessionSuccess(session) {
	    cov_1iiyehkoov.f[10]++;
	    var image;
	    var key;
	    var loadRequest;
	    var mediaInfo;
	    var ref;
	    var value;
	    cov_1iiyehkoov.s[62]++;
	    this.apiSession = session;
	    var source = (cov_1iiyehkoov.s[63]++, this.player_.cache_.src);
	    var type = (cov_1iiyehkoov.s[64]++, this.player_.currentType());
	    cov_1iiyehkoov.s[65]++;
	    videojs.log('Session initialized: ' + session.sessionId + ' source : ' + source + ' type : ' + type);
	    cov_1iiyehkoov.s[66]++;
	    mediaInfo = new chrome.cast.media.MediaInfo(source, type);
	    cov_1iiyehkoov.s[67]++;
	    mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata();
	    cov_1iiyehkoov.s[68]++;

	    if (this.options_.playerOptions.chromecast === undefined) {
	      cov_1iiyehkoov.b[20][0]++;
	      cov_1iiyehkoov.s[69]++;
	      this.options_.playerOptions.chromecast = {};
	      cov_1iiyehkoov.s[70]++;
	      this.options_.playerOptions.chromecast.metadata = '';
	    } else {
	      cov_1iiyehkoov.b[20][1]++;
	      cov_1iiyehkoov.s[71]++;

	      if (this.options_.playerOptions.chromecast.metadata === undefined) {
	        cov_1iiyehkoov.b[21][0]++;
	        cov_1iiyehkoov.s[72]++;
	        this.options_.playerOptions.chromecast.metadata = '';
	      } else {
	        cov_1iiyehkoov.b[21][1]++;
	      }
	    }

	    cov_1iiyehkoov.s[73]++;

	    if (this.options_.playerOptions.chromecast.metadata !== '') {
	      cov_1iiyehkoov.b[22][0]++;
	      cov_1iiyehkoov.s[74]++;
	      ref = this.options_.playerOptions.chromecast.metadata;
	      cov_1iiyehkoov.s[75]++;

	      for (key in ref) {
	        cov_1iiyehkoov.s[76]++;
	        value = ref[key];
	        cov_1iiyehkoov.s[77]++;
	        mediaInfo.metadata[key] = value;
	      }
	    } else {
	      cov_1iiyehkoov.b[22][1]++;
	    }

	    var poster = (cov_1iiyehkoov.s[78]++, this.player().poster());
	    cov_1iiyehkoov.s[79]++;

	    if (poster) {
	      cov_1iiyehkoov.b[23][0]++;
	      cov_1iiyehkoov.s[80]++;
	      image = new chrome.cast.Image(poster);
	      cov_1iiyehkoov.s[81]++;
	      mediaInfo.metadata.images = [image];
	    } else {
	      cov_1iiyehkoov.b[23][1]++;
	    }

	    var plTracks = (cov_1iiyehkoov.s[82]++, this.player().textTracks());
	    var remotePlTracks = (cov_1iiyehkoov.s[83]++, this.player().remoteTextTrackEls());
	    var tracks = (cov_1iiyehkoov.s[84]++, []);
	    var i = (cov_1iiyehkoov.s[85]++, 0);
	    var remotePlTrack;
	    var plTrack;
	    var trackId = (cov_1iiyehkoov.s[86]++, 0);
	    var track;
	    cov_1iiyehkoov.s[87]++;

	    if (plTracks) {
	      cov_1iiyehkoov.b[24][0]++;
	      cov_1iiyehkoov.s[88]++;

	      for (i = 0; i < plTracks.length; i++) {
	        cov_1iiyehkoov.s[89]++;
	        plTrack = plTracks.tracks_[i];
	        cov_1iiyehkoov.s[90]++;
	        remotePlTrack = (cov_1iiyehkoov.b[25][0]++, remotePlTracks) && (cov_1iiyehkoov.b[25][1]++, remotePlTracks.trackElements_) && (cov_1iiyehkoov.b[25][2]++, remotePlTracks.trackElements_[i]);
	        cov_1iiyehkoov.s[91]++;
	        trackId++;
	        cov_1iiyehkoov.s[92]++;
	        track = new chrome.cast.media.Track(trackId, chrome.cast.media.TrackType.TEXT);
	        cov_1iiyehkoov.s[93]++;
	        track.trackContentId = remotePlTrack ? (cov_1iiyehkoov.b[26][0]++, remotePlTrack.src) : (cov_1iiyehkoov.b[26][1]++, 'caption_' + plTrack.language);
	        cov_1iiyehkoov.s[94]++;
	        track.subtype = chrome.cast.media.TextTrackType.CAPTIONS;
	        cov_1iiyehkoov.s[95]++;
	        track.name = plTrack.label;
	        cov_1iiyehkoov.s[96]++;
	        track.language = plTrack.language;
	        cov_1iiyehkoov.s[97]++;
	        track.customData = null;
	        cov_1iiyehkoov.s[98]++;
	        tracks.push(track);
	      }

	      cov_1iiyehkoov.s[99]++;
	      mediaInfo.textTrackStyle = new chrome.cast.media.TextTrackStyle();
	      cov_1iiyehkoov.s[100]++;
	      mediaInfo.textTrackStyle.foregroundColor = '#FFFFFF';
	      cov_1iiyehkoov.s[101]++;
	      mediaInfo.textTrackStyle.backgroundColor = '#00000060';
	      cov_1iiyehkoov.s[102]++;
	      mediaInfo.textTrackStyle.edgeType = chrome.cast.media.TextTrackEdgeType.DROP_SHADOW;
	      cov_1iiyehkoov.s[103]++;
	      mediaInfo.textTrackStyle.windowType = chrome.cast.media.TextTrackWindowType.ROUNDED_CORNERS;
	    } else {
	      cov_1iiyehkoov.b[24][1]++;
	    }

	    cov_1iiyehkoov.s[104]++;

	    try {
	      cov_1iiyehkoov.s[105]++;
	      plTracks = this.player().audioTracks();
	      cov_1iiyehkoov.s[106]++;

	      if (plTracks) {
	        cov_1iiyehkoov.b[27][0]++;
	        cov_1iiyehkoov.s[107]++;

	        for (i = 0; i < plTracks.length; i++) {
	          cov_1iiyehkoov.s[108]++;
	          plTrack = plTracks.tracks_[i];
	          cov_1iiyehkoov.s[109]++;
	          trackId++;
	          cov_1iiyehkoov.s[110]++;
	          track = new chrome.cast.media.Track(trackId, chrome.cast.media.TrackType.AUDIO);
	          cov_1iiyehkoov.s[111]++;
	          track.subtype = null;
	          cov_1iiyehkoov.s[112]++;
	          track.name = plTrack.label;
	          cov_1iiyehkoov.s[113]++;
	          track.language = plTrack.language;
	          cov_1iiyehkoov.s[114]++;
	          track.customData = null;
	          cov_1iiyehkoov.s[115]++;
	          tracks.push(track);
	        }
	      } else {
	        cov_1iiyehkoov.b[27][1]++;
	      }
	    } catch (e) {
	      cov_1iiyehkoov.s[116]++;
	      videojs.log('get player audioTracks fail' + e);
	    }

	    cov_1iiyehkoov.s[117]++;

	    if (tracks.length) {
	      cov_1iiyehkoov.b[28][0]++;
	      cov_1iiyehkoov.s[118]++;
	      mediaInfo.tracks = tracks;
	    } else {
	      cov_1iiyehkoov.b[28][1]++;
	    }

	    cov_1iiyehkoov.s[119]++;
	    loadRequest = new chrome.cast.media.LoadRequest(mediaInfo);
	    cov_1iiyehkoov.s[120]++;
	    loadRequest.autoplay = true;
	    cov_1iiyehkoov.s[121]++;
	    loadRequest.currentTime = this.player_.currentTime();
	    cov_1iiyehkoov.s[122]++;
	    this.apiSession.loadMedia(loadRequest, this.onMediaDiscovered.bind(this), this.castError.bind(this));
	    cov_1iiyehkoov.s[123]++;
	    this.apiSession.addUpdateListener(this.onSessionUpdate.bind(this));
	  };

	  _proto.onMediaDiscovered = function onMediaDiscovered(media) {
	    cov_1iiyehkoov.f[11]++;
	    cov_1iiyehkoov.s[124]++;
	    this.player_.loadTech_('chromecast', {
	      type: 'cast',
	      apiMedia: media,
	      apiSession: this.apiSession
	    });
	    cov_1iiyehkoov.s[125]++;
	    this.casting = true;
	    cov_1iiyehkoov.s[126]++;
	    this.inactivityTimeout = this.player_.options_.inactivityTimeout;
	    cov_1iiyehkoov.s[127]++;
	    this.player_.options_.inactivityTimeout = 0;
	    cov_1iiyehkoov.s[128]++;
	    this.player_.userActive(true);
	    cov_1iiyehkoov.s[129]++;
	    this.addClass('connected');
	    cov_1iiyehkoov.s[130]++;
	    this.removeClass('error');
	  };

	  _proto.onSessionUpdate = function onSessionUpdate(isAlive) {
	    cov_1iiyehkoov.f[12]++;
	    cov_1iiyehkoov.s[131]++;

	    if (!this.player_.apiMedia) {
	      cov_1iiyehkoov.b[29][0]++;
	      cov_1iiyehkoov.s[132]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[29][1]++;
	    }

	    cov_1iiyehkoov.s[133]++;

	    if (!isAlive) {
	      cov_1iiyehkoov.b[30][0]++;
	      cov_1iiyehkoov.s[134]++;
	      return this.onStopAppSuccess();
	    } else {
	      cov_1iiyehkoov.b[30][1]++;
	    }
	  };

	  _proto.stopCasting = function stopCasting() {
	    cov_1iiyehkoov.f[13]++;
	    cov_1iiyehkoov.s[135]++;
	    return this.apiSession.stop(this.onStopAppSuccess.bind(this), this.castError.bind(this));
	  };

	  _proto.onStopAppSuccess = function onStopAppSuccess() {
	    cov_1iiyehkoov.f[14]++;
	    cov_1iiyehkoov.s[136]++;
	    this.casting = false;
	    var time = (cov_1iiyehkoov.s[137]++, this.player_.currentTime());
	    cov_1iiyehkoov.s[138]++;
	    this.removeClass('connected');
	    cov_1iiyehkoov.s[139]++;
	    this.player_.src(this.player_.options_['sources']);
	    cov_1iiyehkoov.s[140]++;

	    if (!this.player_.paused()) {
	      cov_1iiyehkoov.b[31][0]++;
	      cov_1iiyehkoov.s[141]++;
	      this.player_.one('seeked', function () {
	        cov_1iiyehkoov.f[15]++;
	        cov_1iiyehkoov.s[142]++;
	        return this.player_.play();
	      });
	    } else {
	      cov_1iiyehkoov.b[31][1]++;
	    }

	    cov_1iiyehkoov.s[143]++;
	    this.player_.currentTime(time);
	    cov_1iiyehkoov.s[144]++;
	    this.player_.options_.inactivityTimeout = this.inactivityTimeout;
	    cov_1iiyehkoov.s[145]++;
	    return this.apiSession = null;
	  };

	  _proto.handleClick = function handleClick() {
	    cov_1iiyehkoov.f[16]++;
	    cov_1iiyehkoov.s[146]++;

	    _Button.prototype.handleClick.call(this);

	    cov_1iiyehkoov.s[147]++;

	    if (this.casting) {
	      cov_1iiyehkoov.b[32][0]++;
	      cov_1iiyehkoov.s[148]++;
	      return this.stopCasting();
	    } else {
	      cov_1iiyehkoov.b[32][1]++;
	      cov_1iiyehkoov.s[149]++;
	      return this.doLaunch();
	    }
	  };

	  return ChromecastButton;
	}(Button);

	cov_1iiyehkoov.s[150]++;
	ChromecastButton.prototype.tryingReconnect = 0;
	cov_1iiyehkoov.s[151]++;
	ChromecastButton.prototype.inactivityTimeout = 2000;
	cov_1iiyehkoov.s[152]++;
	ChromecastButton.prototype.controlText_ = 'Chromecast';
	cov_1iiyehkoov.s[153]++;
	ControlBar.prototype.options_.children.splice(ControlBar.prototype.options_.children.length - 2, 0, 'chromecastButton');
	cov_1iiyehkoov.s[154]++;

	if (typeof getComponent('ChromecastButton') === 'undefined') {
	  cov_1iiyehkoov.b[33][0]++;
	  cov_1iiyehkoov.s[155]++;
	  Component.registerComponent('ChromecastButton', ChromecastButton);
	} else {
	  cov_1iiyehkoov.b[33][1]++;
	}

	var cov_2q58cqsssn = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/tech/chromecast-tech.js',
	      hash = '2ff43dd21f7440201cadbf8126a98e67d97270cf',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/tech/chromecast-tech.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 5,
	          column: 16
	        },
	        end: {
	          line: 5,
	          column: 31
	        }
	      },
	      '1': {
	        start: {
	          line: 6,
	          column: 21
	        },
	        end: {
	          line: 6,
	          column: 41
	        }
	      },
	      '2': {
	        start: {
	          line: 16,
	          column: 23
	        },
	        end: {
	          line: 333,
	          column: 2
	        }
	      },
	      '3': {
	        start: {
	          line: 18,
	          column: 8
	        },
	        end: {
	          line: 18,
	          column: 47
	        }
	      },
	      '4': {
	        start: {
	          line: 20,
	          column: 8
	        },
	        end: {
	          line: 20,
	          column: 54
	        }
	      },
	      '5': {
	        start: {
	          line: 21,
	          column: 8
	        },
	        end: {
	          line: 21,
	          column: 58
	        }
	      },
	      '6': {
	        start: {
	          line: 22,
	          column: 8
	        },
	        end: {
	          line: 22,
	          column: 62
	        }
	      },
	      '7': {
	        start: {
	          line: 24,
	          column: 39
	        },
	        end: {
	          line: 24,
	          column: 74
	        }
	      },
	      '8': {
	        start: {
	          line: 25,
	          column: 35
	        },
	        end: {
	          line: 25,
	          column: 66
	        }
	      },
	      '9': {
	        start: {
	          line: 27,
	          column: 8
	        },
	        end: {
	          line: 27,
	          column: 66
	        }
	      },
	      '10': {
	        start: {
	          line: 28,
	          column: 8
	        },
	        end: {
	          line: 28,
	          column: 64
	        }
	      },
	      '11': {
	        start: {
	          line: 30,
	          column: 8
	        },
	        end: {
	          line: 35,
	          column: 11
	        }
	      },
	      '12': {
	        start: {
	          line: 31,
	          column: 12
	        },
	        end: {
	          line: 31,
	          column: 73
	        }
	      },
	      '13': {
	        start: {
	          line: 32,
	          column: 12
	        },
	        end: {
	          line: 32,
	          column: 71
	        }
	      },
	      '14': {
	        start: {
	          line: 33,
	          column: 12
	        },
	        end: {
	          line: 33,
	          column: 38
	        }
	      },
	      '15': {
	        start: {
	          line: 34,
	          column: 12
	        },
	        end: {
	          line: 34,
	          column: 40
	        }
	      },
	      '16': {
	        start: {
	          line: 37,
	          column: 21
	        },
	        end: {
	          line: 37,
	          column: 38
	        }
	      },
	      '17': {
	        start: {
	          line: 38,
	          column: 8
	        },
	        end: {
	          line: 47,
	          column: 9
	        }
	      },
	      '18': {
	        start: {
	          line: 39,
	          column: 32
	        },
	        end: {
	          line: 39,
	          column: 70
	        }
	      },
	      '19': {
	        start: {
	          line: 41,
	          column: 12
	        },
	        end: {
	          line: 41,
	          column: 61
	        }
	      },
	      '20': {
	        start: {
	          line: 42,
	          column: 12
	        },
	        end: {
	          line: 44,
	          column: 15
	        }
	      },
	      '21': {
	        start: {
	          line: 43,
	          column: 16
	        },
	        end: {
	          line: 43,
	          column: 68
	        }
	      },
	      '22': {
	        start: {
	          line: 46,
	          column: 12
	        },
	        end: {
	          line: 46,
	          column: 42
	        }
	      },
	      '23': {
	        start: {
	          line: 49,
	          column: 8
	        },
	        end: {
	          line: 62,
	          column: 9
	        }
	      },
	      '24': {
	        start: {
	          line: 50,
	          column: 12
	        },
	        end: {
	          line: 50,
	          column: 40
	        }
	      },
	      '25': {
	        start: {
	          line: 51,
	          column: 12
	        },
	        end: {
	          line: 59,
	          column: 13
	        }
	      },
	      '26': {
	        start: {
	          line: 52,
	          column: 36
	        },
	        end: {
	          line: 52,
	          column: 75
	        }
	      },
	      '27': {
	        start: {
	          line: 54,
	          column: 16
	        },
	        end: {
	          line: 54,
	          column: 65
	        }
	      },
	      '28': {
	        start: {
	          line: 55,
	          column: 16
	        },
	        end: {
	          line: 57,
	          column: 19
	        }
	      },
	      '29': {
	        start: {
	          line: 56,
	          column: 20
	        },
	        end: {
	          line: 56,
	          column: 72
	        }
	      },
	      '30': {
	        start: {
	          line: 61,
	          column: 12
	        },
	        end: {
	          line: 61,
	          column: 59
	        }
	      },
	      '31': {
	        start: {
	          line: 64,
	          column: 8
	        },
	        end: {
	          line: 77,
	          column: 9
	        }
	      },
	      '32': {
	        start: {
	          line: 65,
	          column: 12
	        },
	        end: {
	          line: 65,
	          column: 40
	        }
	      },
	      '33': {
	        start: {
	          line: 66,
	          column: 12
	        },
	        end: {
	          line: 74,
	          column: 13
	        }
	      },
	      '34': {
	        start: {
	          line: 67,
	          column: 36
	        },
	        end: {
	          line: 67,
	          column: 75
	        }
	      },
	      '35': {
	        start: {
	          line: 69,
	          column: 16
	        },
	        end: {
	          line: 69,
	          column: 65
	        }
	      },
	      '36': {
	        start: {
	          line: 70,
	          column: 16
	        },
	        end: {
	          line: 72,
	          column: 19
	        }
	      },
	      '37': {
	        start: {
	          line: 71,
	          column: 20
	        },
	        end: {
	          line: 71,
	          column: 72
	        }
	      },
	      '38': {
	        start: {
	          line: 76,
	          column: 12
	        },
	        end: {
	          line: 76,
	          column: 59
	        }
	      },
	      '39': {
	        start: {
	          line: 79,
	          column: 8
	        },
	        end: {
	          line: 79,
	          column: 22
	        }
	      },
	      '40': {
	        start: {
	          line: 80,
	          column: 8
	        },
	        end: {
	          line: 80,
	          column: 28
	        }
	      },
	      '41': {
	        start: {
	          line: 85,
	          column: 17
	        },
	        end: {
	          line: 88,
	          column: 10
	        }
	      },
	      '42': {
	        start: {
	          line: 89,
	          column: 8
	        },
	        end: {
	          line: 89,
	          column: 18
	        }
	      },
	      '43': {
	        start: {
	          line: 93,
	          column: 8
	        },
	        end: {
	          line: 93,
	          column: 332
	        }
	      },
	      '44': {
	        start: {
	          line: 97,
	          column: 8
	        },
	        end: {
	          line: 99,
	          column: 9
	        }
	      },
	      '45': {
	        start: {
	          line: 98,
	          column: 12
	        },
	        end: {
	          line: 98,
	          column: 19
	        }
	      },
	      '46': {
	        start: {
	          line: 100,
	          column: 8
	        },
	        end: {
	          line: 102,
	          column: 9
	        }
	      },
	      '47': {
	        start: {
	          line: 101,
	          column: 12
	        },
	        end: {
	          line: 101,
	          column: 43
	        }
	      },
	      '48': {
	        start: {
	          line: 106,
	          column: 8
	        },
	        end: {
	          line: 106,
	          column: 39
	        }
	      },
	      '49': {
	        start: {
	          line: 107,
	          column: 8
	        },
	        end: {
	          line: 107,
	          column: 29
	        }
	      },
	      '50': {
	        start: {
	          line: 111,
	          column: 8
	        },
	        end: {
	          line: 113,
	          column: 9
	        }
	      },
	      '51': {
	        start: {
	          line: 112,
	          column: 12
	        },
	        end: {
	          line: 112,
	          column: 19
	        }
	      },
	      '52': {
	        start: {
	          line: 114,
	          column: 8
	        },
	        end: {
	          line: 132,
	          column: 9
	        }
	      },
	      '53': {
	        start: {
	          line: 116,
	          column: 16
	        },
	        end: {
	          line: 116,
	          column: 40
	        }
	      },
	      '54': {
	        start: {
	          line: 117,
	          column: 16
	        },
	        end: {
	          line: 117,
	          column: 22
	        }
	      },
	      '55': {
	        start: {
	          line: 119,
	          column: 16
	        },
	        end: {
	          line: 119,
	          column: 43
	        }
	      },
	      '56': {
	        start: {
	          line: 120,
	          column: 16
	        },
	        end: {
	          line: 120,
	          column: 38
	        }
	      },
	      '57': {
	        start: {
	          line: 122,
	          column: 16
	        },
	        end: {
	          line: 122,
	          column: 22
	        }
	      },
	      '58': {
	        start: {
	          line: 124,
	          column: 16
	        },
	        end: {
	          line: 124,
	          column: 38
	        }
	      },
	      '59': {
	        start: {
	          line: 125,
	          column: 16
	        },
	        end: {
	          line: 125,
	          column: 36
	        }
	      },
	      '60': {
	        start: {
	          line: 126,
	          column: 16
	        },
	        end: {
	          line: 126,
	          column: 22
	        }
	      },
	      '61': {
	        start: {
	          line: 128,
	          column: 16
	        },
	        end: {
	          line: 128,
	          column: 40
	        }
	      },
	      '62': {
	        start: {
	          line: 129,
	          column: 16
	        },
	        end: {
	          line: 129,
	          column: 37
	        }
	      },
	      '63': {
	        start: {
	          line: 130,
	          column: 16
	        },
	        end: {
	          line: 130,
	          column: 37
	        }
	      },
	      '64': {
	        start: {
	          line: 131,
	          column: 16
	        },
	        end: {
	          line: 131,
	          column: 22
	        }
	      },
	      '65': {
	        start: {
	          line: 145,
	          column: 8
	        },
	        end: {
	          line: 147,
	          column: 9
	        }
	      },
	      '66': {
	        start: {
	          line: 146,
	          column: 12
	        },
	        end: {
	          line: 146,
	          column: 19
	        }
	      },
	      '67': {
	        start: {
	          line: 148,
	          column: 8
	        },
	        end: {
	          line: 148,
	          column: 45
	        }
	      },
	      '68': {
	        start: {
	          line: 152,
	          column: 24
	        },
	        end: {
	          line: 152,
	          column: 26
	        }
	      },
	      '69': {
	        start: {
	          line: 153,
	          column: 22
	        },
	        end: {
	          line: 153,
	          column: 39
	        }
	      },
	      '70': {
	        start: {
	          line: 154,
	          column: 21
	        },
	        end: {
	          line: 154,
	          column: 39
	        }
	      },
	      '71': {
	        start: {
	          line: 156,
	          column: 8
	        },
	        end: {
	          line: 158,
	          column: 9
	        }
	      },
	      '72': {
	        start: {
	          line: 157,
	          column: 12
	        },
	        end: {
	          line: 157,
	          column: 19
	        }
	      },
	      '73': {
	        start: {
	          line: 160,
	          column: 8
	        },
	        end: {
	          line: 166,
	          column: 9
	        }
	      },
	      '74': {
	        start: {
	          line: 161,
	          column: 24
	        },
	        end: {
	          line: 161,
	          column: 33
	        }
	      },
	      '75': {
	        start: {
	          line: 162,
	          column: 12
	        },
	        end: {
	          line: 165,
	          column: 13
	        }
	      },
	      '76': {
	        start: {
	          line: 164,
	          column: 16
	        },
	        end: {
	          line: 164,
	          column: 57
	        }
	      },
	      '77': {
	        start: {
	          line: 168,
	          column: 8
	        },
	        end: {
	          line: 171,
	          column: 9
	        }
	      },
	      '78': {
	        start: {
	          line: 169,
	          column: 12
	        },
	        end: {
	          line: 169,
	          column: 92
	        }
	      },
	      '79': {
	        start: {
	          line: 170,
	          column: 12
	        },
	        end: {
	          line: 170,
	          column: 134
	        }
	      },
	      '80': {
	        start: {
	          line: 179,
	          column: 24
	        },
	        end: {
	          line: 179,
	          column: 26
	        }
	      },
	      '81': {
	        start: {
	          line: 180,
	          column: 21
	        },
	        end: {
	          line: 180,
	          column: 38
	        }
	      },
	      '82': {
	        start: {
	          line: 182,
	          column: 8
	        },
	        end: {
	          line: 184,
	          column: 9
	        }
	      },
	      '83': {
	        start: {
	          line: 183,
	          column: 12
	        },
	        end: {
	          line: 183,
	          column: 19
	        }
	      },
	      '84': {
	        start: {
	          line: 186,
	          column: 8
	        },
	        end: {
	          line: 191,
	          column: 9
	        }
	      },
	      '85': {
	        start: {
	          line: 187,
	          column: 24
	        },
	        end: {
	          line: 187,
	          column: 33
	        }
	      },
	      '86': {
	        start: {
	          line: 188,
	          column: 12
	        },
	        end: {
	          line: 190,
	          column: 13
	        }
	      },
	      '87': {
	        start: {
	          line: 189,
	          column: 16
	        },
	        end: {
	          line: 189,
	          column: 38
	        }
	      },
	      '88': {
	        start: {
	          line: 193,
	          column: 8
	        },
	        end: {
	          line: 196,
	          column: 9
	        }
	      },
	      '89': {
	        start: {
	          line: 194,
	          column: 12
	        },
	        end: {
	          line: 194,
	          column: 92
	        }
	      },
	      '90': {
	        start: {
	          line: 195,
	          column: 12
	        },
	        end: {
	          line: 195,
	          column: 134
	        }
	      },
	      '91': {
	        start: {
	          line: 200,
	          column: 8
	        },
	        end: {
	          line: 200,
	          column: 42
	        }
	      },
	      '92': {
	        start: {
	          line: 204,
	          column: 8
	        },
	        end: {
	          line: 204,
	          column: 69
	        }
	      },
	      '93': {
	        start: {
	          line: 208,
	          column: 8
	        },
	        end: {
	          line: 208,
	          column: 63
	        }
	      },
	      '94': {
	        start: {
	          line: 212,
	          column: 8
	        },
	        end: {
	          line: 214,
	          column: 9
	        }
	      },
	      '95': {
	        start: {
	          line: 213,
	          column: 12
	        },
	        end: {
	          line: 213,
	          column: 19
	        }
	      },
	      '96': {
	        start: {
	          line: 215,
	          column: 8
	        },
	        end: {
	          line: 217,
	          column: 9
	        }
	      },
	      '97': {
	        start: {
	          line: 216,
	          column: 12
	        },
	        end: {
	          line: 216,
	          column: 148
	        }
	      },
	      '98': {
	        start: {
	          line: 218,
	          column: 8
	        },
	        end: {
	          line: 218,
	          column: 36
	        }
	      },
	      '99': {
	        start: {
	          line: 222,
	          column: 8
	        },
	        end: {
	          line: 224,
	          column: 9
	        }
	      },
	      '100': {
	        start: {
	          line: 223,
	          column: 12
	        },
	        end: {
	          line: 223,
	          column: 19
	        }
	      },
	      '101': {
	        start: {
	          line: 225,
	          column: 8
	        },
	        end: {
	          line: 228,
	          column: 9
	        }
	      },
	      '102': {
	        start: {
	          line: 226,
	          column: 12
	        },
	        end: {
	          line: 226,
	          column: 148
	        }
	      },
	      '103': {
	        start: {
	          line: 227,
	          column: 12
	        },
	        end: {
	          line: 227,
	          column: 39
	        }
	      },
	      '104': {
	        start: {
	          line: 232,
	          column: 8
	        },
	        end: {
	          line: 232,
	          column: 28
	        }
	      },
	      '105': {
	        start: {
	          line: 236,
	          column: 8
	        },
	        end: {
	          line: 236,
	          column: 59
	        }
	      },
	      '106': {
	        start: {
	          line: 240,
	          column: 8
	        },
	        end: {
	          line: 242,
	          column: 9
	        }
	      },
	      '107': {
	        start: {
	          line: 241,
	          column: 12
	        },
	        end: {
	          line: 241,
	          column: 21
	        }
	      },
	      '108': {
	        start: {
	          line: 243,
	          column: 8
	        },
	        end: {
	          line: 243,
	          column: 48
	        }
	      },
	      '109': {
	        start: {
	          line: 248,
	          column: 8
	        },
	        end: {
	          line: 250,
	          column: 9
	        }
	      },
	      '110': {
	        start: {
	          line: 249,
	          column: 12
	        },
	        end: {
	          line: 249,
	          column: 21
	        }
	      },
	      '111': {
	        start: {
	          line: 252,
	          column: 8
	        },
	        end: {
	          line: 252,
	          column: 54
	        }
	      },
	      '112': {
	        start: {
	          line: 253,
	          column: 8
	        },
	        end: {
	          line: 253,
	          column: 39
	        }
	      },
	      '113': {
	        start: {
	          line: 257,
	          column: 8
	        },
	        end: {
	          line: 257,
	          column: 111
	        }
	      },
	      '114': {
	        start: {
	          line: 261,
	          column: 8
	        },
	        end: {
	          line: 261,
	          column: 47
	        }
	      },
	      '115': {
	        start: {
	          line: 265,
	          column: 8
	        },
	        end: {
	          line: 265,
	          column: 28
	        }
	      },
	      '116': {
	        start: {
	          line: 269,
	          column: 8
	        },
	        end: {
	          line: 271,
	          column: 9
	        }
	      },
	      '117': {
	        start: {
	          line: 270,
	          column: 12
	        },
	        end: {
	          line: 270,
	          column: 21
	        }
	      },
	      '118': {
	        start: {
	          line: 272,
	          column: 8
	        },
	        end: {
	          line: 272,
	          column: 56
	        }
	      },
	      '119': {
	        start: {
	          line: 276,
	          column: 8
	        },
	        end: {
	          line: 276,
	          column: 21
	        }
	      },
	      '120': {
	        start: {
	          line: 282,
	          column: 8
	        },
	        end: {
	          line: 284,
	          column: 9
	        }
	      },
	      '121': {
	        start: {
	          line: 283,
	          column: 12
	        },
	        end: {
	          line: 283,
	          column: 19
	        }
	      },
	      '122': {
	        start: {
	          line: 285,
	          column: 8
	        },
	        end: {
	          line: 285,
	          column: 42
	        }
	      },
	      '123': {
	        start: {
	          line: 286,
	          column: 8
	        },
	        end: {
	          line: 286,
	          column: 29
	        }
	      },
	      '124': {
	        start: {
	          line: 287,
	          column: 8
	        },
	        end: {
	          line: 287,
	          column: 28
	        }
	      },
	      '125': {
	        start: {
	          line: 288,
	          column: 8
	        },
	        end: {
	          line: 288,
	          column: 36
	        }
	      },
	      '126': {
	        start: {
	          line: 289,
	          column: 8
	        },
	        end: {
	          line: 289,
	          column: 27
	        }
	      },
	      '127': {
	        start: {
	          line: 290,
	          column: 8
	        },
	        end: {
	          line: 290,
	          column: 56
	        }
	      },
	      '128': {
	        start: {
	          line: 291,
	          column: 8
	        },
	        end: {
	          line: 291,
	          column: 32
	        }
	      },
	      '129': {
	        start: {
	          line: 292,
	          column: 8
	        },
	        end: {
	          line: 292,
	          column: 131
	        }
	      },
	      '130': {
	        start: {
	          line: 293,
	          column: 8
	        },
	        end: {
	          line: 293,
	          column: 44
	        }
	      },
	      '131': {
	        start: {
	          line: 297,
	          column: 8
	        },
	        end: {
	          line: 297,
	          column: 33
	        }
	      },
	      '132': {
	        start: {
	          line: 301,
	          column: 8
	        },
	        end: {
	          line: 301,
	          column: 27
	        }
	      },
	      '133': {
	        start: {
	          line: 305,
	          column: 8
	        },
	        end: {
	          line: 305,
	          column: 51
	        }
	      },
	      '134': {
	        start: {
	          line: 309,
	          column: 8
	        },
	        end: {
	          line: 309,
	          column: 21
	        }
	      },
	      '135': {
	        start: {
	          line: 314,
	          column: 8
	        },
	        end: {
	          line: 314,
	          column: 19
	        }
	      },
	      '136': {
	        start: {
	          line: 318,
	          column: 8
	        },
	        end: {
	          line: 318,
	          column: 43
	        }
	      },
	      '137': {
	        start: {
	          line: 319,
	          column: 8
	        },
	        end: {
	          line: 319,
	          column: 38
	        }
	      },
	      '138': {
	        start: {
	          line: 323,
	          column: 8
	        },
	        end: {
	          line: 323,
	          column: 21
	        }
	      },
	      '139': {
	        start: {
	          line: 327,
	          column: 8
	        },
	        end: {
	          line: 327,
	          column: 21
	        }
	      },
	      '140': {
	        start: {
	          line: 331,
	          column: 8
	        },
	        end: {
	          line: 331,
	          column: 17
	        }
	      },
	      '141': {
	        start: {
	          line: 335,
	          column: 0
	        },
	        end: {
	          line: 335,
	          column: 41
	        }
	      },
	      '142': {
	        start: {
	          line: 338,
	          column: 0
	        },
	        end: {
	          line: 338,
	          column: 42
	        }
	      },
	      '143': {
	        start: {
	          line: 342,
	          column: 0
	        },
	        end: {
	          line: 344,
	          column: 2
	        }
	      },
	      '144': {
	        start: {
	          line: 343,
	          column: 4
	        },
	        end: {
	          line: 343,
	          column: 16
	        }
	      },
	      '145': {
	        start: {
	          line: 347,
	          column: 0
	        },
	        end: {
	          line: 347,
	          column: 51
	        }
	      },
	      '146': {
	        start: {
	          line: 356,
	          column: 0
	        },
	        end: {
	          line: 356,
	          column: 40
	        }
	      },
	      '147': {
	        start: {
	          line: 363,
	          column: 0
	        },
	        end: {
	          line: 376,
	          column: 2
	        }
	      },
	      '148': {
	        start: {
	          line: 365,
	          column: 23
	        },
	        end: {
	          line: 365,
	          column: 78
	        }
	      },
	      '149': {
	        start: {
	          line: 366,
	          column: 22
	        },
	        end: {
	          line: 366,
	          column: 52
	        }
	      },
	      '150': {
	        start: {
	          line: 368,
	          column: 4
	        },
	        end: {
	          line: 374,
	          column: 5
	        }
	      },
	      '151': {
	        start: {
	          line: 369,
	          column: 8
	        },
	        end: {
	          line: 369,
	          column: 26
	        }
	      },
	      '152': {
	        start: {
	          line: 370,
	          column: 11
	        },
	        end: {
	          line: 374,
	          column: 5
	        }
	      },
	      '153': {
	        start: {
	          line: 371,
	          column: 8
	        },
	        end: {
	          line: 371,
	          column: 23
	        }
	      },
	      '154': {
	        start: {
	          line: 373,
	          column: 8
	        },
	        end: {
	          line: 373,
	          column: 18
	        }
	      },
	      '155': {
	        start: {
	          line: 384,
	          column: 0
	        },
	        end: {
	          line: 394,
	          column: 2
	        }
	      },
	      '156': {
	        start: {
	          line: 387,
	          column: 4
	        },
	        end: {
	          line: 391,
	          column: 5
	        }
	      },
	      '157': {
	        start: {
	          line: 388,
	          column: 8
	        },
	        end: {
	          line: 388,
	          column: 75
	        }
	      },
	      '158': {
	        start: {
	          line: 389,
	          column: 11
	        },
	        end: {
	          line: 391,
	          column: 5
	        }
	      },
	      '159': {
	        start: {
	          line: 390,
	          column: 8
	        },
	        end: {
	          line: 390,
	          column: 74
	        }
	      },
	      '160': {
	        start: {
	          line: 393,
	          column: 4
	        },
	        end: {
	          line: 393,
	          column: 14
	        }
	      },
	      '161': {
	        start: {
	          line: 404,
	          column: 0
	        },
	        end: {
	          line: 406,
	          column: 2
	        }
	      },
	      '162': {
	        start: {
	          line: 405,
	          column: 4
	        },
	        end: {
	          line: 405,
	          column: 25
	        }
	      },
	      '163': {
	        start: {
	          line: 412,
	          column: 0
	        },
	        end: {
	          line: 412,
	          column: 61
	        }
	      },
	      '164': {
	        start: {
	          line: 415,
	          column: 0
	        },
	        end: {
	          line: 415,
	          column: 73
	        }
	      },
	      '165': {
	        start: {
	          line: 423,
	          column: 0
	        },
	        end: {
	          line: 423,
	          column: 54
	        }
	      },
	      '166': {
	        start: {
	          line: 430,
	          column: 0
	        },
	        end: {
	          line: 430,
	          column: 54
	        }
	      },
	      '167': {
	        start: {
	          line: 438,
	          column: 0
	        },
	        end: {
	          line: 438,
	          column: 57
	        }
	      },
	      '168': {
	        start: {
	          line: 445,
	          column: 0
	        },
	        end: {
	          line: 445,
	          column: 58
	        }
	      },
	      '169': {
	        start: {
	          line: 451,
	          column: 0
	        },
	        end: {
	          line: 451,
	          column: 58
	        }
	      },
	      '170': {
	        start: {
	          line: 457,
	          column: 0
	        },
	        end: {
	          line: 457,
	          column: 56
	        }
	      },
	      '171': {
	        start: {
	          line: 464,
	          column: 0
	        },
	        end: {
	          line: 464,
	          column: 57
	        }
	      },
	      '172': {
	        start: {
	          line: 471,
	          column: 0
	        },
	        end: {
	          line: 471,
	          column: 58
	        }
	      },
	      '173': {
	        start: {
	          line: 478,
	          column: 0
	        },
	        end: {
	          line: 478,
	          column: 59
	        }
	      },
	      '174': {
	        start: {
	          line: 483,
	          column: 0
	        },
	        end: {
	          line: 485,
	          column: 1
	        }
	      },
	      '175': {
	        start: {
	          line: 484,
	          column: 4
	        },
	        end: {
	          line: 484,
	          column: 47
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 17,
	            column: 17
	          },
	          end: {
	            line: 17,
	            column: 18
	          }
	        },
	        loc: {
	          start: {
	            line: 17,
	            column: 42
	          },
	          end: {
	            line: 82,
	            column: 5
	          }
	        },
	        line: 17
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 30,
	            column: 27
	          },
	          end: {
	            line: 30,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 30,
	            column: 33
	          },
	          end: {
	            line: 35,
	            column: 9
	          }
	        },
	        line: 30
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 42,
	            column: 31
	          },
	          end: {
	            line: 42,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 42,
	            column: 43
	          },
	          end: {
	            line: 44,
	            column: 13
	          }
	        },
	        line: 42
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 55,
	            column: 35
	          },
	          end: {
	            line: 55,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 55,
	            column: 47
	          },
	          end: {
	            line: 57,
	            column: 17
	          }
	        },
	        line: 55
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 70,
	            column: 35
	          },
	          end: {
	            line: 70,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 70,
	            column: 47
	          },
	          end: {
	            line: 72,
	            column: 17
	          }
	        },
	        line: 70
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 84,
	            column: 14
	          },
	          end: {
	            line: 84,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 84,
	            column: 25
	          },
	          end: {
	            line: 90,
	            column: 5
	          }
	        },
	        line: 84
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 92,
	            column: 12
	          },
	          end: {
	            line: 92,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 92,
	            column: 23
	          },
	          end: {
	            line: 94,
	            column: 5
	          }
	        },
	        line: 92
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 96,
	            column: 21
	          },
	          end: {
	            line: 96,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 96,
	            column: 39
	          },
	          end: {
	            line: 103,
	            column: 5
	          }
	        },
	        line: 96
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 105,
	            column: 22
	          },
	          end: {
	            line: 105,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 105,
	            column: 33
	          },
	          end: {
	            line: 108,
	            column: 5
	          }
	        },
	        line: 105
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 110,
	            column: 25
	          },
	          end: {
	            line: 110,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 110,
	            column: 36
	          },
	          end: {
	            line: 133,
	            column: 5
	          }
	        },
	        line: 110
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 142,
	            column: 9
	          },
	          end: {
	            line: 142,
	            column: 10
	          }
	        },
	        loc: {
	          start: {
	            line: 142,
	            column: 23
	          },
	          end: {
	            line: 142,
	            column: 25
	          }
	        },
	        line: 142
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 144,
	            column: 16
	          },
	          end: {
	            line: 144,
	            column: 17
	          }
	        },
	        loc: {
	          start: {
	            line: 144,
	            column: 27
	          },
	          end: {
	            line: 149,
	            column: 5
	          }
	        },
	        line: 144
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 151,
	            column: 29
	          },
	          end: {
	            line: 151,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 151,
	            column: 40
	          },
	          end: {
	            line: 172,
	            column: 5
	          }
	        },
	        line: 151
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 174,
	            column: 29
	          },
	          end: {
	            line: 174,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 174,
	            column: 40
	          },
	          end: {
	            line: 176,
	            column: 5
	          }
	        },
	        line: 174
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 178,
	            column: 28
	          },
	          end: {
	            line: 178,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 178,
	            column: 39
	          },
	          end: {
	            line: 197,
	            column: 5
	          }
	        },
	        line: 178
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 199,
	            column: 20
	          },
	          end: {
	            line: 199,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 199,
	            column: 31
	          },
	          end: {
	            line: 201,
	            column: 5
	          }
	        },
	        line: 199
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 203,
	            column: 18
	          },
	          end: {
	            line: 203,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 203,
	            column: 30
	          },
	          end: {
	            line: 205,
	            column: 5
	          }
	        },
	        line: 203
	      },
	      '17': {
	        name: '(anonymous_17)',
	        decl: {
	          start: {
	            line: 207,
	            column: 15
	          },
	          end: {
	            line: 207,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 207,
	            column: 27
	          },
	          end: {
	            line: 209,
	            column: 5
	          }
	        },
	        line: 207
	      },
	      '18': {
	        name: '(anonymous_18)',
	        decl: {
	          start: {
	            line: 211,
	            column: 10
	          },
	          end: {
	            line: 211,
	            column: 11
	          }
	        },
	        loc: {
	          start: {
	            line: 211,
	            column: 21
	          },
	          end: {
	            line: 219,
	            column: 5
	          }
	        },
	        line: 211
	      },
	      '19': {
	        name: '(anonymous_19)',
	        decl: {
	          start: {
	            line: 221,
	            column: 11
	          },
	          end: {
	            line: 221,
	            column: 12
	          }
	        },
	        loc: {
	          start: {
	            line: 221,
	            column: 22
	          },
	          end: {
	            line: 229,
	            column: 5
	          }
	        },
	        line: 221
	      },
	      '20': {
	        name: '(anonymous_20)',
	        decl: {
	          start: {
	            line: 231,
	            column: 12
	          },
	          end: {
	            line: 231,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 231,
	            column: 23
	          },
	          end: {
	            line: 233,
	            column: 5
	          }
	        },
	        line: 231
	      },
	      '21': {
	        name: '(anonymous_21)',
	        decl: {
	          start: {
	            line: 235,
	            column: 11
	          },
	          end: {
	            line: 235,
	            column: 12
	          }
	        },
	        loc: {
	          start: {
	            line: 235,
	            column: 22
	          },
	          end: {
	            line: 237,
	            column: 5
	          }
	        },
	        line: 235
	      },
	      '22': {
	        name: '(anonymous_22)',
	        decl: {
	          start: {
	            line: 239,
	            column: 17
	          },
	          end: {
	            line: 239,
	            column: 18
	          }
	        },
	        loc: {
	          start: {
	            line: 239,
	            column: 28
	          },
	          end: {
	            line: 244,
	            column: 5
	          }
	        },
	        line: 239
	      },
	      '23': {
	        name: '(anonymous_23)',
	        decl: {
	          start: {
	            line: 246,
	            column: 20
	          },
	          end: {
	            line: 246,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 246,
	            column: 39
	          },
	          end: {
	            line: 258,
	            column: 5
	          }
	        },
	        line: 246
	      },
	      '24': {
	        name: '(anonymous_24)',
	        decl: {
	          start: {
	            line: 260,
	            column: 19
	          },
	          end: {
	            line: 260,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 260,
	            column: 38
	          },
	          end: {
	            line: 262,
	            column: 5
	          }
	        },
	        line: 260
	      },
	      '25': {
	        name: '(anonymous_25)',
	        decl: {
	          start: {
	            line: 264,
	            column: 12
	          },
	          end: {
	            line: 264,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 264,
	            column: 23
	          },
	          end: {
	            line: 266,
	            column: 5
	          }
	        },
	        line: 264
	      },
	      '26': {
	        name: '(anonymous_26)',
	        decl: {
	          start: {
	            line: 268,
	            column: 14
	          },
	          end: {
	            line: 268,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 268,
	            column: 25
	          },
	          end: {
	            line: 273,
	            column: 5
	          }
	        },
	        line: 268
	      },
	      '27': {
	        name: '(anonymous_27)',
	        decl: {
	          start: {
	            line: 275,
	            column: 14
	          },
	          end: {
	            line: 275,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 275,
	            column: 25
	          },
	          end: {
	            line: 277,
	            column: 5
	          }
	        },
	        line: 275
	      },
	      '28': {
	        name: '(anonymous_28)',
	        decl: {
	          start: {
	            line: 279,
	            column: 15
	          },
	          end: {
	            line: 279,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 279,
	            column: 45
	          },
	          end: {
	            line: 294,
	            column: 5
	          }
	        },
	        line: 279
	      },
	      '29': {
	        name: '(anonymous_29)',
	        decl: {
	          start: {
	            line: 296,
	            column: 33
	          },
	          end: {
	            line: 296,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 296,
	            column: 55
	          },
	          end: {
	            line: 298,
	            column: 5
	          }
	        },
	        line: 296
	      },
	      '30': {
	        name: '(anonymous_30)',
	        decl: {
	          start: {
	            line: 300,
	            column: 11
	          },
	          end: {
	            line: 300,
	            column: 12
	          }
	        },
	        loc: {
	          start: {
	            line: 300,
	            column: 22
	          },
	          end: {
	            line: 302,
	            column: 5
	          }
	        },
	        line: 300
	      },
	      '31': {
	        name: '(anonymous_31)',
	        decl: {
	          start: {
	            line: 304,
	            column: 14
	          },
	          end: {
	            line: 304,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 304,
	            column: 30
	          },
	          end: {
	            line: 306,
	            column: 5
	          }
	        },
	        line: 304
	      },
	      '32': {
	        name: '(anonymous_32)',
	        decl: {
	          start: {
	            line: 308,
	            column: 24
	          },
	          end: {
	            line: 308,
	            column: 25
	          }
	        },
	        loc: {
	          start: {
	            line: 308,
	            column: 35
	          },
	          end: {
	            line: 310,
	            column: 5
	          }
	        },
	        line: 308
	      },
	      '33': {
	        name: '(anonymous_33)',
	        decl: {
	          start: {
	            line: 313,
	            column: 15
	          },
	          end: {
	            line: 313,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 313,
	            column: 34
	          },
	          end: {
	            line: 315,
	            column: 5
	          }
	        },
	        line: 313
	      },
	      '34': {
	        name: '(anonymous_34)',
	        decl: {
	          start: {
	            line: 317,
	            column: 13
	          },
	          end: {
	            line: 317,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 317,
	            column: 24
	          },
	          end: {
	            line: 320,
	            column: 5
	          }
	        },
	        line: 317
	      },
	      '35': {
	        name: '(anonymous_35)',
	        decl: {
	          start: {
	            line: 322,
	            column: 13
	          },
	          end: {
	            line: 322,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 322,
	            column: 24
	          },
	          end: {
	            line: 324,
	            column: 5
	          }
	        },
	        line: 322
	      },
	      '36': {
	        name: '(anonymous_36)',
	        decl: {
	          start: {
	            line: 326,
	            column: 14
	          },
	          end: {
	            line: 326,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 326,
	            column: 25
	          },
	          end: {
	            line: 328,
	            column: 5
	          }
	        },
	        line: 326
	      },
	      '37': {
	        name: '(anonymous_37)',
	        decl: {
	          start: {
	            line: 330,
	            column: 18
	          },
	          end: {
	            line: 330,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 330,
	            column: 29
	          },
	          end: {
	            line: 332,
	            column: 5
	          }
	        },
	        line: 330
	      },
	      '38': {
	        name: '(anonymous_38)',
	        decl: {
	          start: {
	            line: 342,
	            column: 29
	          },
	          end: {
	            line: 342,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 342,
	            column: 41
	          },
	          end: {
	            line: 344,
	            column: 1
	          }
	        },
	        line: 342
	      },
	      '39': {
	        name: '(anonymous_39)',
	        decl: {
	          start: {
	            line: 363,
	            column: 49
	          },
	          end: {
	            line: 363,
	            column: 50
	          }
	        },
	        loc: {
	          start: {
	            line: 363,
	            column: 67
	          },
	          end: {
	            line: 376,
	            column: 1
	          }
	        },
	        line: 363
	      },
	      '40': {
	        name: '(anonymous_40)',
	        decl: {
	          start: {
	            line: 384,
	            column: 53
	          },
	          end: {
	            line: 384,
	            column: 54
	          }
	        },
	        loc: {
	          start: {
	            line: 384,
	            column: 71
	          },
	          end: {
	            line: 394,
	            column: 1
	          }
	        },
	        line: 384
	      },
	      '41': {
	        name: '(anonymous_41)',
	        decl: {
	          start: {
	            line: 404,
	            column: 50
	          },
	          end: {
	            line: 404,
	            column: 51
	          }
	        },
	        loc: {
	          start: {
	            line: 404,
	            column: 74
	          },
	          end: {
	            line: 406,
	            column: 1
	          }
	        },
	        line: 404
	      },
	      '42': {
	        name: '(anonymous_42)',
	        decl: {
	          start: {
	            line: 412,
	            column: 45
	          },
	          end: {
	            line: 412,
	            column: 46
	          }
	        },
	        loc: {
	          start: {
	            line: 412,
	            column: 57
	          },
	          end: {
	            line: 412,
	            column: 60
	          }
	        },
	        line: 412
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 38,
	            column: 8
	          },
	          end: {
	            line: 47,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 38,
	            column: 8
	          },
	          end: {
	            line: 47,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 38,
	            column: 8
	          },
	          end: {
	            line: 47,
	            column: 9
	          }
	        }],
	        line: 38
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 51,
	            column: 12
	          },
	          end: {
	            line: 59,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 51,
	            column: 12
	          },
	          end: {
	            line: 59,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 51,
	            column: 12
	          },
	          end: {
	            line: 59,
	            column: 13
	          }
	        }],
	        line: 51
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 66,
	            column: 12
	          },
	          end: {
	            line: 74,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 66,
	            column: 12
	          },
	          end: {
	            line: 74,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 66,
	            column: 12
	          },
	          end: {
	            line: 74,
	            column: 13
	          }
	        }],
	        line: 66
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 97,
	            column: 8
	          },
	          end: {
	            line: 99,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 97,
	            column: 8
	          },
	          end: {
	            line: 99,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 97,
	            column: 8
	          },
	          end: {
	            line: 99,
	            column: 9
	          }
	        }],
	        line: 97
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 100,
	            column: 8
	          },
	          end: {
	            line: 102,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 100,
	            column: 8
	          },
	          end: {
	            line: 102,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 100,
	            column: 8
	          },
	          end: {
	            line: 102,
	            column: 9
	          }
	        }],
	        line: 100
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 111,
	            column: 8
	          },
	          end: {
	            line: 113,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 111,
	            column: 8
	          },
	          end: {
	            line: 113,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 111,
	            column: 8
	          },
	          end: {
	            line: 113,
	            column: 9
	          }
	        }],
	        line: 111
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 114,
	            column: 8
	          },
	          end: {
	            line: 132,
	            column: 9
	          }
	        },
	        type: 'switch',
	        locations: [{
	          start: {
	            line: 115,
	            column: 12
	          },
	          end: {
	            line: 117,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 118,
	            column: 12
	          },
	          end: {
	            line: 122,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 123,
	            column: 12
	          },
	          end: {
	            line: 126,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 127,
	            column: 12
	          },
	          end: {
	            line: 131,
	            column: 22
	          }
	        }],
	        line: 114
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 145,
	            column: 8
	          },
	          end: {
	            line: 147,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 145,
	            column: 8
	          },
	          end: {
	            line: 147,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 145,
	            column: 8
	          },
	          end: {
	            line: 147,
	            column: 9
	          }
	        }],
	        line: 145
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 156,
	            column: 8
	          },
	          end: {
	            line: 158,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 156,
	            column: 8
	          },
	          end: {
	            line: 158,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 156,
	            column: 8
	          },
	          end: {
	            line: 158,
	            column: 9
	          }
	        }],
	        line: 156
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 162,
	            column: 12
	          },
	          end: {
	            line: 165,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 162,
	            column: 12
	          },
	          end: {
	            line: 165,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 162,
	            column: 12
	          },
	          end: {
	            line: 165,
	            column: 13
	          }
	        }],
	        line: 162
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 168,
	            column: 8
	          },
	          end: {
	            line: 171,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 168,
	            column: 8
	          },
	          end: {
	            line: 171,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 168,
	            column: 8
	          },
	          end: {
	            line: 171,
	            column: 9
	          }
	        }],
	        line: 168
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 168,
	            column: 12
	          },
	          end: {
	            line: 168,
	            column: 45
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 168,
	            column: 12
	          },
	          end: {
	            line: 168,
	            column: 25
	          }
	        }, {
	          start: {
	            line: 168,
	            column: 29
	          },
	          end: {
	            line: 168,
	            column: 45
	          }
	        }],
	        line: 168
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 182,
	            column: 8
	          },
	          end: {
	            line: 184,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 182,
	            column: 8
	          },
	          end: {
	            line: 184,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 182,
	            column: 8
	          },
	          end: {
	            line: 184,
	            column: 9
	          }
	        }],
	        line: 182
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 188,
	            column: 12
	          },
	          end: {
	            line: 190,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 188,
	            column: 12
	          },
	          end: {
	            line: 190,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 188,
	            column: 12
	          },
	          end: {
	            line: 190,
	            column: 13
	          }
	        }],
	        line: 188
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 193,
	            column: 8
	          },
	          end: {
	            line: 196,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 193,
	            column: 8
	          },
	          end: {
	            line: 196,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 193,
	            column: 8
	          },
	          end: {
	            line: 196,
	            column: 9
	          }
	        }],
	        line: 193
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 193,
	            column: 12
	          },
	          end: {
	            line: 193,
	            column: 45
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 193,
	            column: 12
	          },
	          end: {
	            line: 193,
	            column: 25
	          }
	        }, {
	          start: {
	            line: 193,
	            column: 29
	          },
	          end: {
	            line: 193,
	            column: 45
	          }
	        }],
	        line: 193
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 212,
	            column: 8
	          },
	          end: {
	            line: 214,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 212,
	            column: 8
	          },
	          end: {
	            line: 214,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 212,
	            column: 8
	          },
	          end: {
	            line: 214,
	            column: 9
	          }
	        }],
	        line: 212
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 215,
	            column: 8
	          },
	          end: {
	            line: 217,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 215,
	            column: 8
	          },
	          end: {
	            line: 217,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 215,
	            column: 8
	          },
	          end: {
	            line: 217,
	            column: 9
	          }
	        }],
	        line: 215
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 222,
	            column: 8
	          },
	          end: {
	            line: 224,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 222,
	            column: 8
	          },
	          end: {
	            line: 224,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 222,
	            column: 8
	          },
	          end: {
	            line: 224,
	            column: 9
	          }
	        }],
	        line: 222
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 225,
	            column: 8
	          },
	          end: {
	            line: 228,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 225,
	            column: 8
	          },
	          end: {
	            line: 228,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 225,
	            column: 8
	          },
	          end: {
	            line: 228,
	            column: 9
	          }
	        }],
	        line: 225
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 240,
	            column: 8
	          },
	          end: {
	            line: 242,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 240,
	            column: 8
	          },
	          end: {
	            line: 242,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 240,
	            column: 8
	          },
	          end: {
	            line: 242,
	            column: 9
	          }
	        }],
	        line: 240
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 248,
	            column: 8
	          },
	          end: {
	            line: 250,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 248,
	            column: 8
	          },
	          end: {
	            line: 250,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 248,
	            column: 8
	          },
	          end: {
	            line: 250,
	            column: 9
	          }
	        }],
	        line: 248
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 269,
	            column: 8
	          },
	          end: {
	            line: 271,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 269,
	            column: 8
	          },
	          end: {
	            line: 271,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 269,
	            column: 8
	          },
	          end: {
	            line: 271,
	            column: 9
	          }
	        }],
	        line: 269
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 272,
	            column: 15
	          },
	          end: {
	            line: 272,
	            column: 55
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 272,
	            column: 15
	          },
	          end: {
	            line: 272,
	            column: 43
	          }
	        }, {
	          start: {
	            line: 272,
	            column: 47
	          },
	          end: {
	            line: 272,
	            column: 55
	          }
	        }],
	        line: 272
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 279,
	            column: 31
	          },
	          end: {
	            line: 279,
	            column: 43
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 279,
	            column: 38
	          },
	          end: {
	            line: 279,
	            column: 43
	          }
	        }],
	        line: 279
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 282,
	            column: 8
	          },
	          end: {
	            line: 284,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 282,
	            column: 8
	          },
	          end: {
	            line: 284,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 282,
	            column: 8
	          },
	          end: {
	            line: 284,
	            column: 9
	          }
	        }],
	        line: 282
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 368,
	            column: 4
	          },
	          end: {
	            line: 374,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 368,
	            column: 4
	          },
	          end: {
	            line: 374,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 368,
	            column: 4
	          },
	          end: {
	            line: 374,
	            column: 5
	          }
	        }],
	        line: 368
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 370,
	            column: 11
	          },
	          end: {
	            line: 374,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 370,
	            column: 11
	          },
	          end: {
	            line: 374,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 370,
	            column: 11
	          },
	          end: {
	            line: 374,
	            column: 5
	          }
	        }],
	        line: 370
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 387,
	            column: 4
	          },
	          end: {
	            line: 391,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 387,
	            column: 4
	          },
	          end: {
	            line: 391,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 387,
	            column: 4
	          },
	          end: {
	            line: 391,
	            column: 5
	          }
	        }],
	        line: 387
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 389,
	            column: 11
	          },
	          end: {
	            line: 391,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 389,
	            column: 11
	          },
	          end: {
	            line: 391,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 389,
	            column: 11
	          },
	          end: {
	            line: 391,
	            column: 5
	          }
	        }],
	        line: 389
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 483,
	            column: 0
	          },
	          end: {
	            line: 485,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 483,
	            column: 0
	          },
	          end: {
	            line: 485,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 483,
	            column: 0
	          },
	          end: {
	            line: 485,
	            column: 1
	          }
	        }],
	        line: 483
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
	      '175': 0
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
	      '42': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0, 0, 0],
	      '7': [0, 0],
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

	var getTech = (cov_2q58cqsssn.s[0]++, videojs.getTech);
	var registerTech = (cov_2q58cqsssn.s[1]++, videojs.registerTech);
	var ChromecastTech = (cov_2q58cqsssn.s[2]++, videojs.extend(getTech('Tech'), {
	  constructor: function constructor(options, ready) {
	    var _this = this;

	    cov_2q58cqsssn.f[0]++;
	    cov_2q58cqsssn.s[3]++;
	    getTech('Tech').apply(this, arguments);
	    cov_2q58cqsssn.s[4]++;
	    this.apiMedia = this.options_.source.apiMedia;
	    cov_2q58cqsssn.s[5]++;
	    this.apiSession = this.options_.source.apiSession;
	    cov_2q58cqsssn.s[6]++;
	    this.receiver = this.apiSession.receiver.friendlyName;
	    var mediaStatusUpdateHandler = (cov_2q58cqsssn.s[7]++, this.onMediaStatusUpdate.bind(this));
	    var sessionUpdateHanlder = (cov_2q58cqsssn.s[8]++, this.onSessionUpdate.bind(this));
	    cov_2q58cqsssn.s[9]++;
	    this.apiMedia.addUpdateListener(mediaStatusUpdateHandler);
	    cov_2q58cqsssn.s[10]++;
	    this.apiSession.addUpdateListener(sessionUpdateHanlder);
	    cov_2q58cqsssn.s[11]++;
	    this.on('dispose', function () {
	      cov_2q58cqsssn.f[1]++;
	      cov_2q58cqsssn.s[12]++;

	      _this.apiMedia.removeUpdateListener(mediaStatusUpdateHandler);

	      cov_2q58cqsssn.s[13]++;

	      _this.apiSession.removeUpdateListener(sessionUpdateHanlder);

	      cov_2q58cqsssn.s[14]++;

	      _this.onMediaStatusUpdate();

	      cov_2q58cqsssn.s[15]++;

	      _this.onSessionUpdate(false);
	    });
	    var tracks = (cov_2q58cqsssn.s[16]++, this.textTracks());
	    cov_2q58cqsssn.s[17]++;

	    if (tracks) {
	      cov_2q58cqsssn.b[0][0]++;
	      var changeHandler = (cov_2q58cqsssn.s[18]++, this.handleTextTracksChange.bind(this));
	      cov_2q58cqsssn.s[19]++;
	      tracks.addEventListener('change', changeHandler);
	      cov_2q58cqsssn.s[20]++;
	      this.on('dispose', function () {
	        cov_2q58cqsssn.f[2]++;
	        cov_2q58cqsssn.s[21]++;
	        tracks.removeEventListener('change', changeHandler);
	      });
	      cov_2q58cqsssn.s[22]++;
	      this.handleTextTracksChange();
	    } else {
	      cov_2q58cqsssn.b[0][1]++;
	    }

	    cov_2q58cqsssn.s[23]++;

	    try {
	      cov_2q58cqsssn.s[24]++;
	      tracks = this.audioTracks();
	      cov_2q58cqsssn.s[25]++;

	      if (tracks) {
	        cov_2q58cqsssn.b[1][0]++;

	        var _changeHandler = (cov_2q58cqsssn.s[26]++, this.handleAudioTracksChange.bind(this));

	        cov_2q58cqsssn.s[27]++;
	        tracks.addEventListener('change', _changeHandler);
	        cov_2q58cqsssn.s[28]++;
	        this.on('dispose', function () {
	          cov_2q58cqsssn.f[3]++;
	          cov_2q58cqsssn.s[29]++;
	          tracks.removeEventListener('change', _changeHandler);
	        });
	      } else {
	        cov_2q58cqsssn.b[1][1]++;
	      }
	    } catch (e) {
	      cov_2q58cqsssn.s[30]++;
	      videojs.log('get player audioTracks fail' + e);
	    }

	    cov_2q58cqsssn.s[31]++;

	    try {
	      cov_2q58cqsssn.s[32]++;
	      tracks = this.videoTracks();
	      cov_2q58cqsssn.s[33]++;

	      if (tracks) {
	        cov_2q58cqsssn.b[2][0]++;

	        var _changeHandler2 = (cov_2q58cqsssn.s[34]++, this.handleVideoTracksChange.bind(this));

	        cov_2q58cqsssn.s[35]++;
	        tracks.addEventListener('change', _changeHandler2);
	        cov_2q58cqsssn.s[36]++;
	        this.on('dispose', function () {
	          cov_2q58cqsssn.f[4]++;
	          cov_2q58cqsssn.s[37]++;
	          tracks.removeEventListener('change', _changeHandler2);
	        });
	      } else {
	        cov_2q58cqsssn.b[2][1]++;
	      }
	    } catch (e) {
	      cov_2q58cqsssn.s[38]++;
	      videojs.log('get player videoTracks fail' + e);
	    }

	    cov_2q58cqsssn.s[39]++;
	    this.update();
	    cov_2q58cqsssn.s[40]++;
	    this.triggerReady();
	  },
	  createEl: function createEl() {
	    cov_2q58cqsssn.f[5]++;
	    var el = (cov_2q58cqsssn.s[41]++, videojs.dom.createEl('div', {
	      id: this.options_.techId,
	      className: 'vjs-tech vjs-tech-chromecast'
	    }));
	    cov_2q58cqsssn.s[42]++;
	    return el;
	  },
	  update: function update() {
	    cov_2q58cqsssn.f[6]++;
	    cov_2q58cqsssn.s[43]++;
	    this.el_.innerHTML = "<div class=\"casting-image\" style=\"background-image: url('" + this.options_.poster + "')\"></div><div class=\"casting-overlay\"><div class=\"casting-information\"><div class=\"casting-icon\"></div><div class=\"casting-description\"><small>" + this.localize('CASTING TO') + "</small><br>" + this.receiver + "</div></div></div>";
	  },
	  onSessionUpdate: function onSessionUpdate(isAlive) {
	    cov_2q58cqsssn.f[7]++;
	    cov_2q58cqsssn.s[44]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[3][0]++;
	      cov_2q58cqsssn.s[45]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[3][1]++;
	    }

	    cov_2q58cqsssn.s[46]++;

	    if (!isAlive) {
	      cov_2q58cqsssn.b[4][0]++;
	      cov_2q58cqsssn.s[47]++;
	      return this.onStopAppSuccess();
	    } else {
	      cov_2q58cqsssn.b[4][1]++;
	    }
	  },
	  onStopAppSuccess: function onStopAppSuccess() {
	    cov_2q58cqsssn.f[8]++;
	    cov_2q58cqsssn.s[48]++;
	    this.stopTrackingCurrentTime();
	    cov_2q58cqsssn.s[49]++;
	    this.apiMedia = null;
	  },
	  onMediaStatusUpdate: function onMediaStatusUpdate() {
	    cov_2q58cqsssn.f[9]++;
	    cov_2q58cqsssn.s[50]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[5][0]++;
	      cov_2q58cqsssn.s[51]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[5][1]++;
	    }

	    cov_2q58cqsssn.s[52]++;

	    switch (this.apiMedia.playerState) {
	      case chrome.cast.media.PlayerState.BUFFERING:
	        cov_2q58cqsssn.b[6][0]++;
	        cov_2q58cqsssn.s[53]++;
	        this.trigger('waiting');
	        cov_2q58cqsssn.s[54]++;
	        break;

	      case chrome.cast.media.PlayerState.IDLE:
	        cov_2q58cqsssn.b[6][1]++;
	        cov_2q58cqsssn.s[55]++;
	        this.trigger('timeupdate');
	        cov_2q58cqsssn.s[56]++;
	        this.trigger('ended');
	        cov_2q58cqsssn.s[57]++;
	        break;

	      case chrome.cast.media.PlayerState.PAUSED:
	        cov_2q58cqsssn.b[6][2]++;
	        cov_2q58cqsssn.s[58]++;
	        this.trigger('pause');
	        cov_2q58cqsssn.s[59]++;
	        this.paused_ = true;
	        cov_2q58cqsssn.s[60]++;
	        break;

	      case chrome.cast.media.PlayerState.PLAYING:
	        cov_2q58cqsssn.b[6][3]++;
	        cov_2q58cqsssn.s[61]++;
	        this.trigger('playing');
	        cov_2q58cqsssn.s[62]++;
	        this.trigger('play');
	        cov_2q58cqsssn.s[63]++;
	        this.paused_ = false;
	        cov_2q58cqsssn.s[64]++;
	        break;
	    }
	  },
	  src: function src(_src) {
	    cov_2q58cqsssn.f[10]++;
	  },
	  currentSrc: function currentSrc() {
	    cov_2q58cqsssn.f[11]++;
	    cov_2q58cqsssn.s[65]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[7][0]++;
	      cov_2q58cqsssn.s[66]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[7][1]++;
	    }

	    cov_2q58cqsssn.s[67]++;
	    return this.apiMedia.media.contentId;
	  },
	  handleAudioTracksChange: function handleAudioTracksChange() {
	    cov_2q58cqsssn.f[12]++;
	    var trackInfo = (cov_2q58cqsssn.s[68]++, []);
	    var tTracks = (cov_2q58cqsssn.s[69]++, this.textTracks());
	    var tracks = (cov_2q58cqsssn.s[70]++, this.audioTracks());
	    cov_2q58cqsssn.s[71]++;

	    if (!tracks) {
	      cov_2q58cqsssn.b[8][0]++;
	      cov_2q58cqsssn.s[72]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[8][1]++;
	    }

	    cov_2q58cqsssn.s[73]++;

	    for (var i = 0; i < tracks.length; i++) {
	      var track = (cov_2q58cqsssn.s[74]++, tracks[i]);
	      cov_2q58cqsssn.s[75]++;

	      if (track.enabled) {
	        cov_2q58cqsssn.b[9][0]++;
	        cov_2q58cqsssn.s[76]++;
	        trackInfo.push(i + 1 + tTracks.length);
	      } else {
	        cov_2q58cqsssn.b[9][1]++;
	      }
	    }

	    cov_2q58cqsssn.s[77]++;

	    if ((cov_2q58cqsssn.b[11][0]++, this.apiMedia) && (cov_2q58cqsssn.b[11][1]++, trackInfo.length)) {
	      cov_2q58cqsssn.b[10][0]++;
	      cov_2q58cqsssn.s[78]++;
	      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
	      cov_2q58cqsssn.s[79]++;
	      return this.apiMedia.editTracksInfo(this.tracksInfoRequest, this.onTrackSuccess.bind(this), this.onTrackError.bind(this));
	    } else {
	      cov_2q58cqsssn.b[10][1]++;
	    }
	  },
	  handleVideoTracksChange: function handleVideoTracksChange() {
	    cov_2q58cqsssn.f[13]++;
	  },
	  handleTextTracksChange: function handleTextTracksChange() {
	    cov_2q58cqsssn.f[14]++;
	    var trackInfo = (cov_2q58cqsssn.s[80]++, []);
	    var tracks = (cov_2q58cqsssn.s[81]++, this.textTracks());
	    cov_2q58cqsssn.s[82]++;

	    if (!tracks) {
	      cov_2q58cqsssn.b[12][0]++;
	      cov_2q58cqsssn.s[83]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[12][1]++;
	    }

	    cov_2q58cqsssn.s[84]++;

	    for (var i = 0; i < tracks.length; i++) {
	      var track = (cov_2q58cqsssn.s[85]++, tracks[i]);
	      cov_2q58cqsssn.s[86]++;

	      if (track.mode === 'showing') {
	        cov_2q58cqsssn.b[13][0]++;
	        cov_2q58cqsssn.s[87]++;
	        trackInfo.push(i + 1);
	      } else {
	        cov_2q58cqsssn.b[13][1]++;
	      }
	    }

	    cov_2q58cqsssn.s[88]++;

	    if ((cov_2q58cqsssn.b[15][0]++, this.apiMedia) && (cov_2q58cqsssn.b[15][1]++, trackInfo.length)) {
	      cov_2q58cqsssn.b[14][0]++;
	      cov_2q58cqsssn.s[89]++;
	      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
	      cov_2q58cqsssn.s[90]++;
	      return this.apiMedia.editTracksInfo(this.tracksInfoRequest, this.onTrackSuccess.bind(this), this.onTrackError.bind(this));
	    } else {
	      cov_2q58cqsssn.b[14][1]++;
	    }
	  },
	  onTrackSuccess: function onTrackSuccess() {
	    cov_2q58cqsssn.f[15]++;
	    cov_2q58cqsssn.s[91]++;
	    return videojs.log('track added');
	  },
	  onTrackError: function onTrackError(e) {
	    cov_2q58cqsssn.f[16]++;
	    cov_2q58cqsssn.s[92]++;
	    return videojs.log('Cast track Error: ' + JSON.stringify(e));
	  },
	  castError: function castError(e) {
	    cov_2q58cqsssn.f[17]++;
	    cov_2q58cqsssn.s[93]++;
	    return videojs.log('Cast Error: ' + JSON.stringify(e));
	  },
	  play: function play() {
	    cov_2q58cqsssn.f[18]++;
	    cov_2q58cqsssn.s[94]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[16][0]++;
	      cov_2q58cqsssn.s[95]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[16][1]++;
	    }

	    cov_2q58cqsssn.s[96]++;

	    if (this.paused_) {
	      cov_2q58cqsssn.b[17][0]++;
	      cov_2q58cqsssn.s[97]++;
	      this.apiMedia.play(null, this.mediaCommandSuccessCallback.bind(this, 'Playing: ' + this.apiMedia.sessionId), this.castError.bind(this));
	    } else {
	      cov_2q58cqsssn.b[17][1]++;
	    }

	    cov_2q58cqsssn.s[98]++;
	    return this.paused_ = false;
	  },
	  pause: function pause() {
	    cov_2q58cqsssn.f[19]++;
	    cov_2q58cqsssn.s[99]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[18][0]++;
	      cov_2q58cqsssn.s[100]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[18][1]++;
	    }

	    cov_2q58cqsssn.s[101]++;

	    if (!this.paused_) {
	      cov_2q58cqsssn.b[19][0]++;
	      cov_2q58cqsssn.s[102]++;
	      this.apiMedia.pause(null, this.mediaCommandSuccessCallback.bind(this, 'Paused: ' + this.apiMedia.sessionId), this.castError.bind(this));
	      cov_2q58cqsssn.s[103]++;
	      return this.paused_ = true;
	    } else {
	      cov_2q58cqsssn.b[19][1]++;
	    }
	  },
	  paused: function paused() {
	    cov_2q58cqsssn.f[20]++;
	    cov_2q58cqsssn.s[104]++;
	    return this.paused_;
	  },
	  ended: function ended() {
	    cov_2q58cqsssn.f[21]++;
	    cov_2q58cqsssn.s[105]++;
	    return chrome.cast.media.IdleReason === "FINISHED";
	  },
	  currentTime: function currentTime() {
	    cov_2q58cqsssn.f[22]++;
	    cov_2q58cqsssn.s[106]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[20][0]++;
	      cov_2q58cqsssn.s[107]++;
	      return 0;
	    } else {
	      cov_2q58cqsssn.b[20][1]++;
	    }

	    cov_2q58cqsssn.s[108]++;
	    return this.apiMedia.getEstimatedTime();
	  },
	  setCurrentTime: function setCurrentTime(position) {
	    cov_2q58cqsssn.f[23]++;
	    cov_2q58cqsssn.s[109]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[21][0]++;
	      cov_2q58cqsssn.s[110]++;
	      return 0;
	    } else {
	      cov_2q58cqsssn.b[21][1]++;
	    }

	    var request;
	    cov_2q58cqsssn.s[111]++;
	    request = new chrome.cast.media.SeekRequest();
	    cov_2q58cqsssn.s[112]++;
	    request.currentTime = position;
	    cov_2q58cqsssn.s[113]++;
	    return this.apiMedia.seek(request, this.onSeekSuccess.bind(this, position), this.castError.bind(this));
	  },
	  onSeekSuccess: function onSeekSuccess(position) {
	    cov_2q58cqsssn.f[24]++;
	    cov_2q58cqsssn.s[114]++;
	    videojs.log('seek success' + position);
	  },
	  volume: function volume() {
	    cov_2q58cqsssn.f[25]++;
	    cov_2q58cqsssn.s[115]++;
	    return this.volume_;
	  },
	  duration: function duration() {
	    cov_2q58cqsssn.f[26]++;
	    cov_2q58cqsssn.s[116]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[22][0]++;
	      cov_2q58cqsssn.s[117]++;
	      return 0;
	    } else {
	      cov_2q58cqsssn.b[22][1]++;
	    }

	    cov_2q58cqsssn.s[118]++;
	    return (cov_2q58cqsssn.b[23][0]++, this.apiMedia.media.duration) || (cov_2q58cqsssn.b[23][1]++, Infinity);
	  },
	  controls: function controls() {
	    cov_2q58cqsssn.f[27]++;
	    cov_2q58cqsssn.s[119]++;
	    return false;
	  },
	  setVolume: function setVolume(level, mute) {
	    if (mute === void 0) {
	      mute = (cov_2q58cqsssn.b[24][0]++, false);
	    }

	    cov_2q58cqsssn.f[28]++;
	    var request;
	    var volume;
	    cov_2q58cqsssn.s[120]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[25][0]++;
	      cov_2q58cqsssn.s[121]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[25][1]++;
	    }

	    cov_2q58cqsssn.s[122]++;
	    volume = new chrome.cast.Volume();
	    cov_2q58cqsssn.s[123]++;
	    volume.level = level;
	    cov_2q58cqsssn.s[124]++;
	    volume.muted = mute;
	    cov_2q58cqsssn.s[125]++;
	    this.volume_ = volume.level;
	    cov_2q58cqsssn.s[126]++;
	    this.muted_ = mute;
	    cov_2q58cqsssn.s[127]++;
	    request = new chrome.cast.media.VolumeRequest();
	    cov_2q58cqsssn.s[128]++;
	    request.volume = volume;
	    cov_2q58cqsssn.s[129]++;
	    this.apiMedia.setVolume(request, this.mediaCommandSuccessCallback.bind(this, 'Volume changed'), this.castError.bind(this));
	    cov_2q58cqsssn.s[130]++;
	    return this.trigger('volumechange');
	  },
	  mediaCommandSuccessCallback: function mediaCommandSuccessCallback(information) {
	    cov_2q58cqsssn.f[29]++;
	    cov_2q58cqsssn.s[131]++;
	    videojs.log(information);
	  },
	  muted: function muted() {
	    cov_2q58cqsssn.f[30]++;
	    cov_2q58cqsssn.s[132]++;
	    return this.muted_;
	  },
	  setMuted: function setMuted(muted) {
	    cov_2q58cqsssn.f[31]++;
	    cov_2q58cqsssn.s[133]++;
	    return this.setVolume(this.volume_, muted);
	  },
	  supportsFullScreen: function supportsFullScreen() {
	    cov_2q58cqsssn.f[32]++;
	    cov_2q58cqsssn.s[134]++;
	    return false;
	  },
	  resetSrc_: function resetSrc_(callback) {
	    cov_2q58cqsssn.f[33]++;
	    cov_2q58cqsssn.s[135]++;
	    callback();
	  },
	  dispose: function dispose() {
	    cov_2q58cqsssn.f[34]++;
	    cov_2q58cqsssn.s[136]++;
	    this.resetSrc_(Function.prototype);
	    cov_2q58cqsssn.s[137]++;
	    getTech('Tech').dispose(this);
	  },
	  seeking: function seeking() {
	    cov_2q58cqsssn.f[35]++;
	    cov_2q58cqsssn.s[138]++;
	    return false;
	  },
	  seekable: function seekable() {
	    cov_2q58cqsssn.f[36]++;
	    cov_2q58cqsssn.s[139]++;
	    return false;
	  },
	  playbackRate: function playbackRate() {
	    cov_2q58cqsssn.f[37]++;
	    cov_2q58cqsssn.s[140]++;
	    return 1;
	  }
	}));
	cov_2q58cqsssn.s[141]++;
	ChromecastTech.prototype.paused_ = false;
	cov_2q58cqsssn.s[142]++;
	ChromecastTech.prototype.timerStep = 1000;
	cov_2q58cqsssn.s[143]++;

	ChromecastTech.isSupported = function () {
	  cov_2q58cqsssn.f[38]++;
	  cov_2q58cqsssn.s[144]++;
	  return true;
	};

	cov_2q58cqsssn.s[145]++;
	getTech('Tech').withSourceHandlers(ChromecastTech);
	cov_2q58cqsssn.s[146]++;
	ChromecastTech.nativeSourceHandler = {};
	cov_2q58cqsssn.s[147]++;

	ChromecastTech.nativeSourceHandler.canPlayType = function (source) {
	  cov_2q58cqsssn.f[39]++;
	  var dashTypeRE = (cov_2q58cqsssn.s[148]++, /^application\/(?:dash\+xml|(x-|vnd\.apple\.)mpegurl)/i);
	  var dashExtRE = (cov_2q58cqsssn.s[149]++, /^video\/(mpd|mp4|webm|m3u8)/i);
	  cov_2q58cqsssn.s[150]++;

	  if (dashTypeRE.test(source)) {
	    cov_2q58cqsssn.b[26][0]++;
	    cov_2q58cqsssn.s[151]++;
	    return 'probably';
	  } else {
	    cov_2q58cqsssn.b[26][1]++;
	    cov_2q58cqsssn.s[152]++;

	    if (dashExtRE.test(source)) {
	      cov_2q58cqsssn.b[27][0]++;
	      cov_2q58cqsssn.s[153]++;
	      return 'maybe';
	    } else {
	      cov_2q58cqsssn.b[27][1]++;
	      cov_2q58cqsssn.s[154]++;
	      return '';
	    }
	  }
	};

	cov_2q58cqsssn.s[155]++;

	ChromecastTech.nativeSourceHandler.canHandleSource = function (source) {
	  cov_2q58cqsssn.f[40]++;
	  cov_2q58cqsssn.s[156]++;

	  if (source.type) {
	    cov_2q58cqsssn.b[28][0]++;
	    cov_2q58cqsssn.s[157]++;
	    return ChromecastTech.nativeSourceHandler.canPlayType(source.type);
	  } else {
	    cov_2q58cqsssn.b[28][1]++;
	    cov_2q58cqsssn.s[158]++;

	    if (source.src) {
	      cov_2q58cqsssn.b[29][0]++;
	      cov_2q58cqsssn.s[159]++;
	      return ChromecastTech.nativeSourceHandler.canPlayType(source.src);
	    } else {
	      cov_2q58cqsssn.b[29][1]++;
	    }
	  }

	  cov_2q58cqsssn.s[160]++;
	  return '';
	};

	cov_2q58cqsssn.s[161]++;

	ChromecastTech.nativeSourceHandler.handleSource = function (source, tech) {
	  cov_2q58cqsssn.f[41]++;
	  cov_2q58cqsssn.s[162]++;
	  tech.src(source.src);
	};

	cov_2q58cqsssn.s[163]++;

	ChromecastTech.nativeSourceHandler.dispose = function () {
	  cov_2q58cqsssn.f[42]++;
	};

	cov_2q58cqsssn.s[164]++;
	ChromecastTech.registerSourceHandler(ChromecastTech.nativeSourceHandler);
	cov_2q58cqsssn.s[165]++;
	ChromecastTech.prototype.featuresVolumeControl = true;
	cov_2q58cqsssn.s[166]++;
	ChromecastTech.prototype.featuresPlaybackRate = false;
	cov_2q58cqsssn.s[167]++;
	ChromecastTech.prototype.movingMediaElementInDOM = false;
	cov_2q58cqsssn.s[168]++;
	ChromecastTech.prototype.featuresFullscreenResize = false;
	cov_2q58cqsssn.s[169]++;
	ChromecastTech.prototype.featuresTimeupdateEvents = false;
	cov_2q58cqsssn.s[170]++;
	ChromecastTech.prototype.featuresProgressEvents = false;
	cov_2q58cqsssn.s[171]++;
	ChromecastTech.prototype.featuresNativeTextTracks = true;
	cov_2q58cqsssn.s[172]++;
	ChromecastTech.prototype.featuresNativeAudioTracks = true;
	cov_2q58cqsssn.s[173]++;
	ChromecastTech.prototype.featuresNativeVideoTracks = false;
	cov_2q58cqsssn.s[174]++;

	if (typeof getTech('ChromecastTech') === 'undefined') {
	  cov_2q58cqsssn.b[30][0]++;
	  cov_2q58cqsssn.s[175]++;
	  registerTech('chromecast', ChromecastTech);
	} else {
	  cov_2q58cqsssn.b[30][1]++;
	}

	var cov_2aep3n7mve = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/google-chromecast.js',
	      hash = 'e758a927b9ca4d358b0ea099dc1a0f830231669b',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/google-chromecast.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 5,
	          column: 26
	        },
	        end: {
	          line: 5,
	          column: 72
	        }
	      },
	      '1': {
	        start: {
	          line: 6,
	          column: 21
	        },
	        end: {
	          line: 6,
	          column: 41
	        }
	      },
	      '2': {
	        start: {
	          line: 8,
	          column: 23
	        },
	        end: {
	          line: 12,
	          column: 2
	        }
	      },
	      '3': {
	        start: {
	          line: 10,
	          column: 8
	        },
	        end: {
	          line: 10,
	          column: 57
	        }
	      },
	      '4': {
	        start: {
	          line: 14,
	          column: 0
	        },
	        end: {
	          line: 14,
	          column: 41
	        }
	      },
	      '5': {
	        start: {
	          line: 16,
	          column: 0
	        },
	        end: {
	          line: 16,
	          column: 44
	        }
	      },
	      '6': {
	        start: {
	          line: 18,
	          column: 0
	        },
	        end: {
	          line: 20,
	          column: 3
	        }
	      },
	      '7': {
	        start: {
	          line: 23,
	          column: 0
	        },
	        end: {
	          line: 25,
	          column: 1
	        }
	      },
	      '8': {
	        start: {
	          line: 24,
	          column: 4
	        },
	        end: {
	          line: 24,
	          column: 60
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 9,
	            column: 17
	          },
	          end: {
	            line: 9,
	            column: 18
	          }
	        },
	        loc: {
	          start: {
	            line: 9,
	            column: 43
	          },
	          end: {
	            line: 11,
	            column: 5
	          }
	        },
	        line: 9
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 5,
	            column: 26
	          },
	          end: {
	            line: 5,
	            column: 72
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 5,
	            column: 26
	          },
	          end: {
	            line: 5,
	            column: 51
	          }
	        }, {
	          start: {
	            line: 5,
	            column: 55
	          },
	          end: {
	            line: 5,
	            column: 72
	          }
	        }],
	        line: 5
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 23,
	            column: 0
	          },
	          end: {
	            line: 25,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 23,
	            column: 0
	          },
	          end: {
	            line: 25,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 23,
	            column: 0
	          },
	          end: {
	            line: 25,
	            column: 1
	          }
	        }],
	        line: 23
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
	      '8': 0
	    },
	    f: {
	      '0': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0]
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
	var registerComponent$1 = (cov_2aep3n7mve.s[0]++, (cov_2aep3n7mve.b[0][0]++, videojs.registerComponent) || (cov_2aep3n7mve.b[0][1]++, videojs.component));
	var getComponent$1 = (cov_2aep3n7mve.s[1]++, videojs.getComponent);
	var GoogleChromecast = (cov_2aep3n7mve.s[2]++, videojs.extend(getComponent$1('Component'), {
	  constructor: function constructor(player, options) {
	    cov_2aep3n7mve.f[0]++;
	    cov_2aep3n7mve.s[3]++;
	    getComponent$1('Component').apply(this, arguments);
	  }
	}));
	cov_2aep3n7mve.s[4]++;
	GoogleChromecast.prototype.options_ = {};
	cov_2aep3n7mve.s[5]++;
	videojs.options.children.push('chromecast');
	cov_2aep3n7mve.s[6]++;
	videojs.addLanguage('en', {
	  'CASTING TO': 'CASTING TO'
	});
	cov_2aep3n7mve.s[7]++;

	if (typeof getComponent$1('GoogleChromecast') === 'undefined') {
	  cov_2aep3n7mve.b[1][0]++;
	  cov_2aep3n7mve.s[8]++;
	  registerComponent$1('GoogleChromecast', GoogleChromecast);
	} else {
	  cov_2aep3n7mve.b[1][1]++;
	}

	var cov_279kbuek1j = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/plugin.js',
	      hash = 'b656da6e835127dc0602101616dbbac0669a829b',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/plugin.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 7,
	          column: 23
	        },
	        end: {
	          line: 7,
	          column: 63
	        }
	      },
	      '1': {
	        start: {
	          line: 8,
	          column: 18
	        },
	        end: {
	          line: 8,
	          column: 53
	        }
	      },
	      '2': {
	        start: {
	          line: 10,
	          column: 26
	        },
	        end: {
	          line: 10,
	          column: 48
	        }
	      },
	      '3': {
	        start: {
	          line: 11,
	          column: 21
	        },
	        end: {
	          line: 11,
	          column: 41
	        }
	      },
	      '4': {
	        start: {
	          line: 20,
	          column: 19
	        },
	        end: {
	          line: 22,
	          column: 1
	        }
	      },
	      '5': {
	        start: {
	          line: 25,
	          column: 0
	        },
	        end: {
	          line: 27,
	          column: 1
	        }
	      },
	      '6': {
	        start: {
	          line: 26,
	          column: 2
	        },
	        end: {
	          line: 26,
	          column: 43
	        }
	      },
	      '7': {
	        start: {
	          line: 30,
	          column: 0
	        },
	        end: {
	          line: 30,
	          column: 29
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 20,
	            column: 19
	          },
	          end: {
	            line: 20,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 20,
	            column: 38
	          },
	          end: {
	            line: 22,
	            column: 1
	          }
	        },
	        line: 20
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 7,
	            column: 23
	          },
	          end: {
	            line: 7,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 7,
	            column: 23
	          },
	          end: {
	            line: 7,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 7,
	            column: 49
	          },
	          end: {
	            line: 7,
	            column: 63
	          }
	        }],
	        line: 7
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 8,
	            column: 18
	          },
	          end: {
	            line: 8,
	            column: 53
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 8,
	            column: 18
	          },
	          end: {
	            line: 8,
	            column: 35
	          }
	        }, {
	          start: {
	            line: 8,
	            column: 39
	          },
	          end: {
	            line: 8,
	            column: 53
	          }
	        }],
	        line: 8
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 25,
	            column: 0
	          },
	          end: {
	            line: 27,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 25,
	            column: 0
	          },
	          end: {
	            line: 27,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 25,
	            column: 0
	          },
	          end: {
	            line: 27,
	            column: 1
	          }
	        }],
	        line: 25
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
	      '7': 0
	    },
	    f: {
	      '0': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0]
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
	var registerPlugin = (cov_279kbuek1j.s[0]++, (cov_279kbuek1j.b[0][0]++, videojs$1.registerPlugin) || (cov_279kbuek1j.b[0][1]++, videojs$1.plugin));
	var getPlugin = (cov_279kbuek1j.s[1]++, (cov_279kbuek1j.b[1][0]++, videojs$1.getPlugin) || (cov_279kbuek1j.b[1][1]++, videojs$1.plugin));
	var registerComponent$2 = (cov_279kbuek1j.s[2]++, videojs$1.registerPlugin);
	var getComponent$2 = (cov_279kbuek1j.s[3]++, videojs$1.getComponent);
	cov_279kbuek1j.s[4]++;

	var chromecast = function chromecast(options) {
	  cov_279kbuek1j.f[0]++;
	};

	cov_279kbuek1j.s[5]++;

	if (typeof getPlugin('chromecast') === 'undefined') {
	  cov_279kbuek1j.b[2][0]++;
	  cov_279kbuek1j.s[6]++;
	  registerPlugin('chromecast', chromecast);
	} else {
	  cov_279kbuek1j.b[2][1]++;
	}

	cov_279kbuek1j.s[7]++;
	chromecast.VERSION = version;

	var Player = videojs$1.getComponent('Player');
	QUnit.test('the environment is sane', function (assert) {
	  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
	  assert.strictEqual(typeof sinon, 'object', 'sinon exists');
	  assert.strictEqual(typeof videojs$1, 'function', 'videojs exists');
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
	    this.player = videojs$1(this.video);
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
