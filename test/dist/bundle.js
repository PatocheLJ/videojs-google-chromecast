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
	      hash = '30ce524270a5458a1027c5a5427a4e0ecee89faf',
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
	          column: 4
	        },
	        end: {
	          line: 14,
	          column: 27
	        }
	      },
	      '7': {
	        start: {
	          line: 15,
	          column: 4
	        },
	        end: {
	          line: 15,
	          column: 16
	        }
	      },
	      '8': {
	        start: {
	          line: 16,
	          column: 4
	        },
	        end: {
	          line: 16,
	          column: 25
	        }
	      },
	      '9': {
	        start: {
	          line: 17,
	          column: 4
	        },
	        end: {
	          line: 20,
	          column: 5
	        }
	      },
	      '10': {
	        start: {
	          line: 18,
	          column: 6
	        },
	        end: {
	          line: 18,
	          column: 38
	        }
	      },
	      '11': {
	        start: {
	          line: 19,
	          column: 6
	        },
	        end: {
	          line: 19,
	          column: 44
	        }
	      },
	      '12': {
	        start: {
	          line: 21,
	          column: 4
	        },
	        end: {
	          line: 21,
	          column: 53
	        }
	      },
	      '13': {
	        start: {
	          line: 22,
	          column: 4
	        },
	        end: {
	          line: 22,
	          column: 29
	        }
	      },
	      '14': {
	        start: {
	          line: 24,
	          column: 4
	        },
	        end: {
	          line: 28,
	          column: 7
	        }
	      },
	      '15': {
	        start: {
	          line: 25,
	          column: 6
	        },
	        end: {
	          line: 27,
	          column: 7
	        }
	      },
	      '16': {
	        start: {
	          line: 26,
	          column: 8
	        },
	        end: {
	          line: 26,
	          column: 47
	        }
	      },
	      '17': {
	        start: {
	          line: 30,
	          column: 4
	        },
	        end: {
	          line: 34,
	          column: 7
	        }
	      },
	      '18': {
	        start: {
	          line: 31,
	          column: 6
	        },
	        end: {
	          line: 33,
	          column: 7
	        }
	      },
	      '19': {
	        start: {
	          line: 32,
	          column: 8
	        },
	        end: {
	          line: 32,
	          column: 41
	        }
	      },
	      '20': {
	        start: {
	          line: 38,
	          column: 4
	        },
	        end: {
	          line: 38,
	          column: 60
	        }
	      },
	      '21': {
	        start: {
	          line: 46,
	          column: 23
	        },
	        end: {
	          line: 46,
	          column: 75
	        }
	      },
	      '22': {
	        start: {
	          line: 47,
	          column: 22
	        },
	        end: {
	          line: 47,
	          column: 78
	        }
	      },
	      '23': {
	        start: {
	          line: 49,
	          column: 4
	        },
	        end: {
	          line: 51,
	          column: 5
	        }
	      },
	      '24': {
	        start: {
	          line: 50,
	          column: 6
	        },
	        end: {
	          line: 50,
	          column: 13
	        }
	      },
	      '25': {
	        start: {
	          line: 52,
	          column: 4
	        },
	        end: {
	          line: 60,
	          column: 5
	        }
	      },
	      '26': {
	        start: {
	          line: 53,
	          column: 6
	        },
	        end: {
	          line: 53,
	          column: 45
	        }
	      },
	      '27': {
	        start: {
	          line: 54,
	          column: 6
	        },
	        end: {
	          line: 57,
	          column: 7
	        }
	      },
	      '28': {
	        start: {
	          line: 55,
	          column: 8
	        },
	        end: {
	          line: 55,
	          column: 50
	        }
	      },
	      '29': {
	        start: {
	          line: 56,
	          column: 8
	        },
	        end: {
	          line: 56,
	          column: 31
	        }
	      },
	      '30': {
	        start: {
	          line: 58,
	          column: 6
	        },
	        end: {
	          line: 58,
	          column: 68
	        }
	      },
	      '31': {
	        start: {
	          line: 59,
	          column: 6
	        },
	        end: {
	          line: 59,
	          column: 13
	        }
	      },
	      '32': {
	        start: {
	          line: 62,
	          column: 4
	        },
	        end: {
	          line: 62,
	          column: 43
	        }
	      },
	      '33': {
	        start: {
	          line: 63,
	          column: 4
	        },
	        end: {
	          line: 63,
	          column: 83
	        }
	      },
	      '34': {
	        start: {
	          line: 64,
	          column: 4
	        },
	        end: {
	          line: 64,
	          column: 59
	        }
	      },
	      '35': {
	        start: {
	          line: 65,
	          column: 4
	        },
	        end: {
	          line: 65,
	          column: 131
	        }
	      },
	      '36': {
	        start: {
	          line: 66,
	          column: 4
	        },
	        end: {
	          line: 66,
	          column: 103
	        }
	      },
	      '37': {
	        start: {
	          line: 71,
	          column: 18
	        },
	        end: {
	          line: 74,
	          column: 5
	        }
	      },
	      '38': {
	        start: {
	          line: 76,
	          column: 4
	        },
	        end: {
	          line: 93,
	          column: 5
	        }
	      },
	      '39': {
	        start: {
	          line: 86,
	          column: 6
	        },
	        end: {
	          line: 86,
	          column: 29
	        }
	      },
	      '40': {
	        start: {
	          line: 87,
	          column: 6
	        },
	        end: {
	          line: 87,
	          column: 12
	        }
	      },
	      '41': {
	        start: {
	          line: 89,
	          column: 6
	        },
	        end: {
	          line: 89,
	          column: 12
	        }
	      },
	      '42': {
	        start: {
	          line: 91,
	          column: 6
	        },
	        end: {
	          line: 91,
	          column: 32
	        }
	      },
	      '43': {
	        start: {
	          line: 92,
	          column: 6
	        },
	        end: {
	          line: 92,
	          column: 12
	        }
	      },
	      '44': {
	        start: {
	          line: 94,
	          column: 4
	        },
	        end: {
	          line: 94,
	          column: 69
	        }
	      },
	      '45': {
	        start: {
	          line: 98,
	          column: 4
	        },
	        end: {
	          line: 102,
	          column: 5
	        }
	      },
	      '46': {
	        start: {
	          line: 99,
	          column: 6
	        },
	        end: {
	          line: 99,
	          column: 18
	        }
	      },
	      '47': {
	        start: {
	          line: 101,
	          column: 6
	        },
	        end: {
	          line: 101,
	          column: 18
	        }
	      },
	      '48': {
	        start: {
	          line: 103,
	          column: 4
	        },
	        end: {
	          line: 103,
	          column: 38
	        }
	      },
	      '49': {
	        start: {
	          line: 107,
	          column: 4
	        },
	        end: {
	          line: 110,
	          column: 5
	        }
	      },
	      '50': {
	        start: {
	          line: 108,
	          column: 6
	        },
	        end: {
	          line: 108,
	          column: 32
	        }
	      },
	      '51': {
	        start: {
	          line: 109,
	          column: 6
	        },
	        end: {
	          line: 109,
	          column: 47
	        }
	      },
	      '52': {
	        start: {
	          line: 111,
	          column: 4
	        },
	        end: {
	          line: 111,
	          column: 41
	        }
	      },
	      '53': {
	        start: {
	          line: 115,
	          column: 4
	        },
	        end: {
	          line: 118,
	          column: 5
	        }
	      },
	      '54': {
	        start: {
	          line: 116,
	          column: 6
	        },
	        end: {
	          line: 116,
	          column: 25
	        }
	      },
	      '55': {
	        start: {
	          line: 117,
	          column: 6
	        },
	        end: {
	          line: 117,
	          column: 25
	        }
	      },
	      '56': {
	        start: {
	          line: 119,
	          column: 4
	        },
	        end: {
	          line: 119,
	          column: 24
	        }
	      },
	      '57': {
	        start: {
	          line: 120,
	          column: 4
	        },
	        end: {
	          line: 120,
	          column: 23
	        }
	      },
	      '58': {
	        start: {
	          line: 125,
	          column: 4
	        },
	        end: {
	          line: 125,
	          column: 60
	        }
	      },
	      '59': {
	        start: {
	          line: 126,
	          column: 4
	        },
	        end: {
	          line: 128,
	          column: 5
	        }
	      },
	      '60': {
	        start: {
	          line: 127,
	          column: 6
	        },
	        end: {
	          line: 127,
	          column: 101
	        }
	      },
	      '61': {
	        start: {
	          line: 129,
	          column: 4
	        },
	        end: {
	          line: 129,
	          column: 50
	        }
	      },
	      '62': {
	        start: {
	          line: 141,
	          column: 4
	        },
	        end: {
	          line: 141,
	          column: 30
	        }
	      },
	      '63': {
	        start: {
	          line: 142,
	          column: 19
	        },
	        end: {
	          line: 142,
	          column: 42
	        }
	      },
	      '64': {
	        start: {
	          line: 143,
	          column: 17
	        },
	        end: {
	          line: 143,
	          column: 43
	        }
	      },
	      '65': {
	        start: {
	          line: 145,
	          column: 4
	        },
	        end: {
	          line: 145,
	          column: 105
	        }
	      },
	      '66': {
	        start: {
	          line: 147,
	          column: 4
	        },
	        end: {
	          line: 147,
	          column: 62
	        }
	      },
	      '67': {
	        start: {
	          line: 148,
	          column: 4
	        },
	        end: {
	          line: 148,
	          column: 70
	        }
	      },
	      '68': {
	        start: {
	          line: 150,
	          column: 4
	        },
	        end: {
	          line: 155,
	          column: 5
	        }
	      },
	      '69': {
	        start: {
	          line: 151,
	          column: 6
	        },
	        end: {
	          line: 151,
	          column: 50
	        }
	      },
	      '70': {
	        start: {
	          line: 152,
	          column: 6
	        },
	        end: {
	          line: 152,
	          column: 59
	        }
	      },
	      '71': {
	        start: {
	          line: 153,
	          column: 11
	        },
	        end: {
	          line: 155,
	          column: 5
	        }
	      },
	      '72': {
	        start: {
	          line: 154,
	          column: 6
	        },
	        end: {
	          line: 154,
	          column: 59
	        }
	      },
	      '73': {
	        start: {
	          line: 156,
	          column: 4
	        },
	        end: {
	          line: 163,
	          column: 5
	        }
	      },
	      '74': {
	        start: {
	          line: 157,
	          column: 6
	        },
	        end: {
	          line: 157,
	          column: 60
	        }
	      },
	      '75': {
	        start: {
	          line: 158,
	          column: 6
	        },
	        end: {
	          line: 161,
	          column: 7
	        }
	      },
	      '76': {
	        start: {
	          line: 159,
	          column: 8
	        },
	        end: {
	          line: 159,
	          column: 25
	        }
	      },
	      '77': {
	        start: {
	          line: 160,
	          column: 8
	        },
	        end: {
	          line: 160,
	          column: 40
	        }
	      },
	      '78': {
	        start: {
	          line: 165,
	          column: 19
	        },
	        end: {
	          line: 165,
	          column: 41
	        }
	      },
	      '79': {
	        start: {
	          line: 167,
	          column: 4
	        },
	        end: {
	          line: 170,
	          column: 5
	        }
	      },
	      '80': {
	        start: {
	          line: 168,
	          column: 6
	        },
	        end: {
	          line: 168,
	          column: 44
	        }
	      },
	      '81': {
	        start: {
	          line: 169,
	          column: 6
	        },
	        end: {
	          line: 169,
	          column: 42
	        }
	      },
	      '82': {
	        start: {
	          line: 172,
	          column: 19
	        },
	        end: {
	          line: 172,
	          column: 45
	        }
	      },
	      '83': {
	        start: {
	          line: 173,
	          column: 27
	        },
	        end: {
	          line: 173,
	          column: 61
	        }
	      },
	      '84': {
	        start: {
	          line: 174,
	          column: 19
	        },
	        end: {
	          line: 174,
	          column: 21
	        }
	      },
	      '85': {
	        start: {
	          line: 175,
	          column: 12
	        },
	        end: {
	          line: 175,
	          column: 13
	        }
	      },
	      '86': {
	        start: {
	          line: 178,
	          column: 18
	        },
	        end: {
	          line: 178,
	          column: 19
	        }
	      },
	      '87': {
	        start: {
	          line: 181,
	          column: 4
	        },
	        end: {
	          line: 199,
	          column: 5
	        }
	      },
	      '88': {
	        start: {
	          line: 182,
	          column: 6
	        },
	        end: {
	          line: 193,
	          column: 7
	        }
	      },
	      '89': {
	        start: {
	          line: 183,
	          column: 8
	        },
	        end: {
	          line: 183,
	          column: 38
	        }
	      },
	      '90': {
	        start: {
	          line: 184,
	          column: 8
	        },
	        end: {
	          line: 184,
	          column: 108
	        }
	      },
	      '91': {
	        start: {
	          line: 185,
	          column: 8
	        },
	        end: {
	          line: 185,
	          column: 18
	        }
	      },
	      '92': {
	        start: {
	          line: 186,
	          column: 8
	        },
	        end: {
	          line: 186,
	          column: 87
	        }
	      },
	      '93': {
	        start: {
	          line: 187,
	          column: 8
	        },
	        end: {
	          line: 187,
	          column: 97
	        }
	      },
	      '94': {
	        start: {
	          line: 188,
	          column: 8
	        },
	        end: {
	          line: 188,
	          column: 65
	        }
	      },
	      '95': {
	        start: {
	          line: 189,
	          column: 8
	        },
	        end: {
	          line: 189,
	          column: 35
	        }
	      },
	      '96': {
	        start: {
	          line: 190,
	          column: 8
	        },
	        end: {
	          line: 190,
	          column: 42
	        }
	      },
	      '97': {
	        start: {
	          line: 191,
	          column: 8
	        },
	        end: {
	          line: 191,
	          column: 32
	        }
	      },
	      '98': {
	        start: {
	          line: 192,
	          column: 8
	        },
	        end: {
	          line: 192,
	          column: 27
	        }
	      },
	      '99': {
	        start: {
	          line: 194,
	          column: 6
	        },
	        end: {
	          line: 194,
	          column: 72
	        }
	      },
	      '100': {
	        start: {
	          line: 195,
	          column: 6
	        },
	        end: {
	          line: 195,
	          column: 59
	        }
	      },
	      '101': {
	        start: {
	          line: 196,
	          column: 6
	        },
	        end: {
	          line: 196,
	          column: 61
	        }
	      },
	      '102': {
	        start: {
	          line: 197,
	          column: 6
	        },
	        end: {
	          line: 197,
	          column: 90
	        }
	      },
	      '103': {
	        start: {
	          line: 198,
	          column: 6
	        },
	        end: {
	          line: 198,
	          column: 98
	        }
	      },
	      '104': {
	        start: {
	          line: 201,
	          column: 4
	        },
	        end: {
	          line: 217,
	          column: 5
	        }
	      },
	      '105': {
	        start: {
	          line: 202,
	          column: 6
	        },
	        end: {
	          line: 202,
	          column: 45
	        }
	      },
	      '106': {
	        start: {
	          line: 203,
	          column: 6
	        },
	        end: {
	          line: 214,
	          column: 7
	        }
	      },
	      '107': {
	        start: {
	          line: 204,
	          column: 8
	        },
	        end: {
	          line: 213,
	          column: 9
	        }
	      },
	      '108': {
	        start: {
	          line: 205,
	          column: 10
	        },
	        end: {
	          line: 205,
	          column: 40
	        }
	      },
	      '109': {
	        start: {
	          line: 206,
	          column: 10
	        },
	        end: {
	          line: 206,
	          column: 20
	        }
	      },
	      '110': {
	        start: {
	          line: 207,
	          column: 10
	        },
	        end: {
	          line: 207,
	          column: 90
	        }
	      },
	      '111': {
	        start: {
	          line: 208,
	          column: 10
	        },
	        end: {
	          line: 208,
	          column: 31
	        }
	      },
	      '112': {
	        start: {
	          line: 209,
	          column: 10
	        },
	        end: {
	          line: 209,
	          column: 37
	        }
	      },
	      '113': {
	        start: {
	          line: 210,
	          column: 10
	        },
	        end: {
	          line: 210,
	          column: 44
	        }
	      },
	      '114': {
	        start: {
	          line: 211,
	          column: 10
	        },
	        end: {
	          line: 211,
	          column: 34
	        }
	      },
	      '115': {
	        start: {
	          line: 212,
	          column: 10
	        },
	        end: {
	          line: 212,
	          column: 29
	        }
	      },
	      '116': {
	        start: {
	          line: 216,
	          column: 6
	        },
	        end: {
	          line: 216,
	          column: 53
	        }
	      },
	      '117': {
	        start: {
	          line: 219,
	          column: 4
	        },
	        end: {
	          line: 221,
	          column: 5
	        }
	      },
	      '118': {
	        start: {
	          line: 220,
	          column: 6
	        },
	        end: {
	          line: 220,
	          column: 32
	        }
	      },
	      '119': {
	        start: {
	          line: 223,
	          column: 4
	        },
	        end: {
	          line: 223,
	          column: 63
	        }
	      },
	      '120': {
	        start: {
	          line: 225,
	          column: 4
	        },
	        end: {
	          line: 225,
	          column: 32
	        }
	      },
	      '121': {
	        start: {
	          line: 226,
	          column: 4
	        },
	        end: {
	          line: 226,
	          column: 57
	        }
	      },
	      '122': {
	        start: {
	          line: 228,
	          column: 4
	        },
	        end: {
	          line: 228,
	          column: 105
	        }
	      },
	      '123': {
	        start: {
	          line: 229,
	          column: 4
	        },
	        end: {
	          line: 229,
	          column: 71
	        }
	      },
	      '124': {
	        start: {
	          line: 233,
	          column: 4
	        },
	        end: {
	          line: 237,
	          column: 7
	        }
	      },
	      '125': {
	        start: {
	          line: 239,
	          column: 4
	        },
	        end: {
	          line: 239,
	          column: 24
	        }
	      },
	      '126': {
	        start: {
	          line: 240,
	          column: 4
	        },
	        end: {
	          line: 240,
	          column: 69
	        }
	      },
	      '127': {
	        start: {
	          line: 241,
	          column: 4
	        },
	        end: {
	          line: 241,
	          column: 48
	        }
	      },
	      '128': {
	        start: {
	          line: 242,
	          column: 4
	        },
	        end: {
	          line: 242,
	          column: 34
	        }
	      },
	      '129': {
	        start: {
	          line: 243,
	          column: 4
	        },
	        end: {
	          line: 243,
	          column: 31
	        }
	      },
	      '130': {
	        start: {
	          line: 244,
	          column: 4
	        },
	        end: {
	          line: 244,
	          column: 30
	        }
	      },
	      '131': {
	        start: {
	          line: 248,
	          column: 4
	        },
	        end: {
	          line: 250,
	          column: 5
	        }
	      },
	      '132': {
	        start: {
	          line: 249,
	          column: 6
	        },
	        end: {
	          line: 249,
	          column: 13
	        }
	      },
	      '133': {
	        start: {
	          line: 251,
	          column: 4
	        },
	        end: {
	          line: 253,
	          column: 5
	        }
	      },
	      '134': {
	        start: {
	          line: 252,
	          column: 6
	        },
	        end: {
	          line: 252,
	          column: 37
	        }
	      },
	      '135': {
	        start: {
	          line: 257,
	          column: 4
	        },
	        end: {
	          line: 257,
	          column: 93
	        }
	      },
	      '136': {
	        start: {
	          line: 261,
	          column: 4
	        },
	        end: {
	          line: 261,
	          column: 25
	        }
	      },
	      '137': {
	        start: {
	          line: 262,
	          column: 17
	        },
	        end: {
	          line: 262,
	          column: 43
	        }
	      },
	      '138': {
	        start: {
	          line: 264,
	          column: 4
	        },
	        end: {
	          line: 264,
	          column: 34
	        }
	      },
	      '139': {
	        start: {
	          line: 265,
	          column: 4
	        },
	        end: {
	          line: 265,
	          column: 52
	        }
	      },
	      '140': {
	        start: {
	          line: 266,
	          column: 4
	        },
	        end: {
	          line: 270,
	          column: 5
	        }
	      },
	      '141': {
	        start: {
	          line: 267,
	          column: 6
	        },
	        end: {
	          line: 269,
	          column: 9
	        }
	      },
	      '142': {
	        start: {
	          line: 268,
	          column: 8
	        },
	        end: {
	          line: 268,
	          column: 35
	        }
	      },
	      '143': {
	        start: {
	          line: 271,
	          column: 4
	        },
	        end: {
	          line: 271,
	          column: 35
	        }
	      },
	      '144': {
	        start: {
	          line: 272,
	          column: 4
	        },
	        end: {
	          line: 272,
	          column: 69
	        }
	      },
	      '145': {
	        start: {
	          line: 273,
	          column: 4
	        },
	        end: {
	          line: 273,
	          column: 34
	        }
	      },
	      '146': {
	        start: {
	          line: 277,
	          column: 4
	        },
	        end: {
	          line: 277,
	          column: 24
	        }
	      },
	      '147': {
	        start: {
	          line: 278,
	          column: 4
	        },
	        end: {
	          line: 280,
	          column: 5
	        }
	      },
	      '148': {
	        start: {
	          line: 279,
	          column: 6
	        },
	        end: {
	          line: 279,
	          column: 32
	        }
	      },
	      '149': {
	        start: {
	          line: 281,
	          column: 4
	        },
	        end: {
	          line: 281,
	          column: 27
	        }
	      },
	      '150': {
	        start: {
	          line: 286,
	          column: 0
	        },
	        end: {
	          line: 286,
	          column: 47
	        }
	      },
	      '151': {
	        start: {
	          line: 288,
	          column: 0
	        },
	        end: {
	          line: 288,
	          column: 52
	        }
	      },
	      '152': {
	        start: {
	          line: 290,
	          column: 0
	        },
	        end: {
	          line: 290,
	          column: 55
	        }
	      },
	      '153': {
	        start: {
	          line: 291,
	          column: 0
	        },
	        end: {
	          line: 291,
	          column: 120
	        }
	      },
	      '154': {
	        start: {
	          line: 292,
	          column: 0
	        },
	        end: {
	          line: 294,
	          column: 1
	        }
	      },
	      '155': {
	        start: {
	          line: 293,
	          column: 2
	        },
	        end: {
	          line: 293,
	          column: 68
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 13,
	            column: 2
	          },
	          end: {
	            line: 13,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 13,
	            column: 36
	          },
	          end: {
	            line: 35,
	            column: 3
	          }
	        },
	        line: 13
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 24,
	            column: 33
	          },
	          end: {
	            line: 24,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 24,
	            column: 39
	          },
	          end: {
	            line: 28,
	            column: 5
	          }
	        },
	        line: 24
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 30,
	            column: 31
	          },
	          end: {
	            line: 30,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 30,
	            column: 37
	          },
	          end: {
	            line: 34,
	            column: 5
	          }
	        },
	        line: 30
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 37,
	            column: 2
	          },
	          end: {
	            line: 37,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 37,
	            column: 18
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        },
	        line: 37
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 41,
	            column: 2
	          },
	          end: {
	            line: 41,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 41,
	            column: 18
	          },
	          end: {
	            line: 67,
	            column: 3
	          }
	        },
	        line: 41
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 69,
	            column: 2
	          },
	          end: {
	            line: 69,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 69,
	            column: 23
	          },
	          end: {
	            line: 95,
	            column: 3
	          }
	        },
	        line: 69
	      },
	      '6': {
	        name: '(anonymous_6)',
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
	            column: 18
	          },
	          end: {
	            line: 104,
	            column: 3
	          }
	        },
	        line: 97
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 106,
	            column: 2
	          },
	          end: {
	            line: 106,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 106,
	            column: 33
	          },
	          end: {
	            line: 112,
	            column: 3
	          }
	        },
	        line: 106
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 114,
	            column: 2
	          },
	          end: {
	            line: 114,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 114,
	            column: 33
	          },
	          end: {
	            line: 122,
	            column: 3
	          }
	        },
	        line: 114
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 124,
	            column: 2
	          },
	          end: {
	            line: 124,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 124,
	            column: 13
	          },
	          end: {
	            line: 131,
	            column: 3
	          }
	        },
	        line: 124
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 133,
	            column: 2
	          },
	          end: {
	            line: 133,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 133,
	            column: 28
	          },
	          end: {
	            line: 230,
	            column: 3
	          }
	        },
	        line: 133
	      },
	      '11': {
	        name: '(anonymous_11)',
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
	            column: 27
	          },
	          end: {
	            line: 245,
	            column: 3
	          }
	        },
	        line: 232
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 247,
	            column: 2
	          },
	          end: {
	            line: 247,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 247,
	            column: 27
	          },
	          end: {
	            line: 254,
	            column: 3
	          }
	        },
	        line: 247
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 256,
	            column: 2
	          },
	          end: {
	            line: 256,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 256,
	            column: 16
	          },
	          end: {
	            line: 258,
	            column: 3
	          }
	        },
	        line: 256
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 260,
	            column: 2
	          },
	          end: {
	            line: 260,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 260,
	            column: 21
	          },
	          end: {
	            line: 274,
	            column: 3
	          }
	        },
	        line: 260
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 267,
	            column: 33
	          },
	          end: {
	            line: 267,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 267,
	            column: 44
	          },
	          end: {
	            line: 269,
	            column: 7
	          }
	        },
	        line: 267
	      },
	      '16': {
	        name: '(anonymous_16)',
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
	            column: 16
	          },
	          end: {
	            line: 283,
	            column: 3
	          }
	        },
	        line: 276
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
	            column: 22
	          },
	          end: {
	            line: 13,
	            column: 34
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 13,
	            column: 32
	          },
	          end: {
	            line: 13,
	            column: 34
	          }
	        }],
	        line: 13
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 17,
	            column: 4
	          },
	          end: {
	            line: 20,
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
	            line: 20,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 17,
	            column: 4
	          },
	          end: {
	            line: 20,
	            column: 5
	          }
	        }],
	        line: 17
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 25,
	            column: 6
	          },
	          end: {
	            line: 27,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 25,
	            column: 6
	          },
	          end: {
	            line: 27,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 25,
	            column: 6
	          },
	          end: {
	            line: 27,
	            column: 7
	          }
	        }],
	        line: 25
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 25,
	            column: 10
	          },
	          end: {
	            line: 25,
	            column: 45
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 25,
	            column: 10
	          },
	          end: {
	            line: 25,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 25,
	            column: 26
	          },
	          end: {
	            line: 25,
	            column: 45
	          }
	        }],
	        line: 25
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 31,
	            column: 6
	          },
	          end: {
	            line: 33,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 31,
	            column: 6
	          },
	          end: {
	            line: 33,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 31,
	            column: 6
	          },
	          end: {
	            line: 33,
	            column: 7
	          }
	        }],
	        line: 31
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 31,
	            column: 10
	          },
	          end: {
	            line: 31,
	            column: 41
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 31,
	            column: 10
	          },
	          end: {
	            line: 31,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 31,
	            column: 26
	          },
	          end: {
	            line: 31,
	            column: 41
	          }
	        }],
	        line: 31
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 46,
	            column: 23
	          },
	          end: {
	            line: 46,
	            column: 75
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
	            column: 39
	          }
	        }, {
	          start: {
	            line: 46,
	            column: 43
	          },
	          end: {
	            line: 46,
	            column: 69
	          }
	        }, {
	          start: {
	            line: 46,
	            column: 73
	          },
	          end: {
	            line: 46,
	            column: 75
	          }
	        }],
	        line: 46
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 47,
	            column: 22
	          },
	          end: {
	            line: 47,
	            column: 78
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 47,
	            column: 22
	          },
	          end: {
	            line: 47,
	            column: 47
	          }
	        }, {
	          start: {
	            line: 47,
	            column: 51
	          },
	          end: {
	            line: 47,
	            column: 78
	          }
	        }],
	        line: 47
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 49,
	            column: 4
	          },
	          end: {
	            line: 51,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 49,
	            column: 4
	          },
	          end: {
	            line: 51,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 49,
	            column: 4
	          },
	          end: {
	            line: 51,
	            column: 5
	          }
	        }],
	        line: 49
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 49,
	            column: 8
	          },
	          end: {
	            line: 49,
	            column: 78
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 49,
	            column: 8
	          },
	          end: {
	            line: 49,
	            column: 18
	          }
	        }, {
	          start: {
	            line: 49,
	            column: 22
	          },
	          end: {
	            line: 49,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 49,
	            column: 49
	          },
	          end: {
	            line: 49,
	            column: 78
	          }
	        }],
	        line: 49
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 52,
	            column: 4
	          },
	          end: {
	            line: 60,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 52,
	            column: 4
	          },
	          end: {
	            line: 60,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 52,
	            column: 4
	          },
	          end: {
	            line: 60,
	            column: 5
	          }
	        }],
	        line: 52
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 52,
	            column: 8
	          },
	          end: {
	            line: 52,
	            column: 48
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 52,
	            column: 8
	          },
	          end: {
	            line: 52,
	            column: 20
	          }
	        }, {
	          start: {
	            line: 52,
	            column: 24
	          },
	          end: {
	            line: 52,
	            column: 48
	          }
	        }],
	        line: 52
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 54,
	            column: 6
	          },
	          end: {
	            line: 57,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 54,
	            column: 6
	          },
	          end: {
	            line: 57,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 54,
	            column: 6
	          },
	          end: {
	            line: 57,
	            column: 7
	          }
	        }],
	        line: 54
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 63,
	            column: 12
	          },
	          end: {
	            line: 63,
	            column: 82
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 63,
	            column: 12
	          },
	          end: {
	            line: 63,
	            column: 31
	          }
	        }, {
	          start: {
	            line: 63,
	            column: 35
	          },
	          end: {
	            line: 63,
	            column: 82
	          }
	        }],
	        line: 63
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 76,
	            column: 4
	          },
	          end: {
	            line: 93,
	            column: 5
	          }
	        },
	        type: 'switch',
	        locations: [{
	          start: {
	            line: 77,
	            column: 4
	          },
	          end: {
	            line: 77,
	            column: 51
	          }
	        }, {
	          start: {
	            line: 78,
	            column: 4
	          },
	          end: {
	            line: 78,
	            column: 49
	          }
	        }, {
	          start: {
	            line: 79,
	            column: 4
	          },
	          end: {
	            line: 79,
	            column: 56
	          }
	        }, {
	          start: {
	            line: 80,
	            column: 4
	          },
	          end: {
	            line: 80,
	            column: 49
	          }
	        }, {
	          start: {
	            line: 81,
	            column: 4
	          },
	          end: {
	            line: 81,
	            column: 49
	          }
	        }, {
	          start: {
	            line: 82,
	            column: 4
	          },
	          end: {
	            line: 82,
	            column: 52
	          }
	        }, {
	          start: {
	            line: 83,
	            column: 4
	          },
	          end: {
	            line: 83,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 84,
	            column: 4
	          },
	          end: {
	            line: 84,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 85,
	            column: 4
	          },
	          end: {
	            line: 87,
	            column: 12
	          }
	        }, {
	          start: {
	            line: 88,
	            column: 4
	          },
	          end: {
	            line: 89,
	            column: 12
	          }
	        }, {
	          start: {
	            line: 90,
	            column: 4
	          },
	          end: {
	            line: 92,
	            column: 12
	          }
	        }],
	        line: 76
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 98,
	            column: 4
	          },
	          end: {
	            line: 102,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 98,
	            column: 4
	          },
	          end: {
	            line: 102,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 98,
	            column: 4
	          },
	          end: {
	            line: 102,
	            column: 5
	          }
	        }],
	        line: 98
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 107,
	            column: 4
	          },
	          end: {
	            line: 110,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 107,
	            column: 4
	          },
	          end: {
	            line: 110,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 107,
	            column: 4
	          },
	          end: {
	            line: 110,
	            column: 5
	          }
	        }],
	        line: 107
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 115,
	            column: 4
	          },
	          end: {
	            line: 118,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 115,
	            column: 4
	          },
	          end: {
	            line: 118,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 115,
	            column: 4
	          },
	          end: {
	            line: 118,
	            column: 5
	          }
	        }],
	        line: 115
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 126,
	            column: 4
	          },
	          end: {
	            line: 128,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 126,
	            column: 4
	          },
	          end: {
	            line: 128,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 126,
	            column: 4
	          },
	          end: {
	            line: 128,
	            column: 5
	          }
	        }],
	        line: 126
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 150,
	            column: 4
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 150,
	            column: 4
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 150,
	            column: 4
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        }],
	        line: 150
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 153,
	            column: 11
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 153,
	            column: 11
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 153,
	            column: 11
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        }],
	        line: 153
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 156,
	            column: 4
	          },
	          end: {
	            line: 163,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 156,
	            column: 4
	          },
	          end: {
	            line: 163,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 156,
	            column: 4
	          },
	          end: {
	            line: 163,
	            column: 5
	          }
	        }],
	        line: 156
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 167,
	            column: 4
	          },
	          end: {
	            line: 170,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 167,
	            column: 4
	          },
	          end: {
	            line: 170,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 167,
	            column: 4
	          },
	          end: {
	            line: 170,
	            column: 5
	          }
	        }],
	        line: 167
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 181,
	            column: 4
	          },
	          end: {
	            line: 199,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 181,
	            column: 4
	          },
	          end: {
	            line: 199,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 181,
	            column: 4
	          },
	          end: {
	            line: 199,
	            column: 5
	          }
	        }],
	        line: 181
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 184,
	            column: 24
	          },
	          end: {
	            line: 184,
	            column: 107
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 184,
	            column: 24
	          },
	          end: {
	            line: 184,
	            column: 38
	          }
	        }, {
	          start: {
	            line: 184,
	            column: 42
	          },
	          end: {
	            line: 184,
	            column: 71
	          }
	        }, {
	          start: {
	            line: 184,
	            column: 75
	          },
	          end: {
	            line: 184,
	            column: 107
	          }
	        }],
	        line: 184
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 187,
	            column: 31
	          },
	          end: {
	            line: 187,
	            column: 96
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 187,
	            column: 47
	          },
	          end: {
	            line: 187,
	            column: 64
	          }
	        }, {
	          start: {
	            line: 187,
	            column: 67
	          },
	          end: {
	            line: 187,
	            column: 96
	          }
	        }],
	        line: 187
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 203,
	            column: 6
	          },
	          end: {
	            line: 214,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 203,
	            column: 6
	          },
	          end: {
	            line: 214,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 203,
	            column: 6
	          },
	          end: {
	            line: 214,
	            column: 7
	          }
	        }],
	        line: 203
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 219,
	            column: 4
	          },
	          end: {
	            line: 221,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 219,
	            column: 4
	          },
	          end: {
	            line: 221,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 219,
	            column: 4
	          },
	          end: {
	            line: 221,
	            column: 5
	          }
	        }],
	        line: 219
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 248,
	            column: 4
	          },
	          end: {
	            line: 250,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 248,
	            column: 4
	          },
	          end: {
	            line: 250,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 248,
	            column: 4
	          },
	          end: {
	            line: 250,
	            column: 5
	          }
	        }],
	        line: 248
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 251,
	            column: 4
	          },
	          end: {
	            line: 253,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 251,
	            column: 4
	          },
	          end: {
	            line: 253,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 251,
	            column: 4
	          },
	          end: {
	            line: 253,
	            column: 5
	          }
	        }],
	        line: 251
	      },
	      '31': {
	        loc: {
	          start: {
	            line: 266,
	            column: 4
	          },
	          end: {
	            line: 270,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 266,
	            column: 4
	          },
	          end: {
	            line: 270,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 266,
	            column: 4
	          },
	          end: {
	            line: 270,
	            column: 5
	          }
	        }],
	        line: 266
	      },
	      '32': {
	        loc: {
	          start: {
	            line: 278,
	            column: 4
	          },
	          end: {
	            line: 280,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 278,
	            column: 4
	          },
	          end: {
	            line: 280,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 278,
	            column: 4
	          },
	          end: {
	            line: 280,
	            column: 5
	          }
	        }],
	        line: 278
	      },
	      '33': {
	        loc: {
	          start: {
	            line: 292,
	            column: 0
	          },
	          end: {
	            line: 294,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 292,
	            column: 0
	          },
	          end: {
	            line: 294,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 292,
	            column: 0
	          },
	          end: {
	            line: 294,
	            column: 1
	          }
	        }],
	        line: 292
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
	    }

	    cov_1iiyehkoov.s[56]++;
	    hasReceiver = false;
	    cov_1iiyehkoov.s[57]++;
	    return this.hide();
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
	    }

	    cov_1iiyehkoov.s[61]++;
	    return videojs.log('Session not initialized');
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
	    this.player_.src(this.player_.options_.sources);
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
	    }

	    cov_1iiyehkoov.s[149]++;
	    return this.doLaunch();
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
	      hash = 'fd058295216118894a743fc58ca701452bb0b0a9',
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
	          line: 337,
	          column: 2
	        }
	      },
	      '3': {
	        start: {
	          line: 18,
	          column: 4
	        },
	        end: {
	          line: 18,
	          column: 43
	        }
	      },
	      '4': {
	        start: {
	          line: 20,
	          column: 4
	        },
	        end: {
	          line: 20,
	          column: 50
	        }
	      },
	      '5': {
	        start: {
	          line: 21,
	          column: 4
	        },
	        end: {
	          line: 21,
	          column: 54
	        }
	      },
	      '6': {
	        start: {
	          line: 22,
	          column: 4
	        },
	        end: {
	          line: 22,
	          column: 58
	        }
	      },
	      '7': {
	        start: {
	          line: 24,
	          column: 37
	        },
	        end: {
	          line: 24,
	          column: 72
	        }
	      },
	      '8': {
	        start: {
	          line: 25,
	          column: 33
	        },
	        end: {
	          line: 25,
	          column: 64
	        }
	      },
	      '9': {
	        start: {
	          line: 27,
	          column: 4
	        },
	        end: {
	          line: 27,
	          column: 62
	        }
	      },
	      '10': {
	        start: {
	          line: 28,
	          column: 4
	        },
	        end: {
	          line: 28,
	          column: 60
	        }
	      },
	      '11': {
	        start: {
	          line: 30,
	          column: 4
	        },
	        end: {
	          line: 35,
	          column: 7
	        }
	      },
	      '12': {
	        start: {
	          line: 31,
	          column: 6
	        },
	        end: {
	          line: 31,
	          column: 67
	        }
	      },
	      '13': {
	        start: {
	          line: 32,
	          column: 6
	        },
	        end: {
	          line: 32,
	          column: 65
	        }
	      },
	      '14': {
	        start: {
	          line: 33,
	          column: 6
	        },
	        end: {
	          line: 33,
	          column: 33
	        }
	      },
	      '15': {
	        start: {
	          line: 34,
	          column: 6
	        },
	        end: {
	          line: 34,
	          column: 34
	        }
	      },
	      '16': {
	        start: {
	          line: 37,
	          column: 17
	        },
	        end: {
	          line: 37,
	          column: 34
	        }
	      },
	      '17': {
	        start: {
	          line: 39,
	          column: 4
	        },
	        end: {
	          line: 48,
	          column: 5
	        }
	      },
	      '18': {
	        start: {
	          line: 40,
	          column: 28
	        },
	        end: {
	          line: 40,
	          column: 66
	        }
	      },
	      '19': {
	        start: {
	          line: 42,
	          column: 6
	        },
	        end: {
	          line: 42,
	          column: 55
	        }
	      },
	      '20': {
	        start: {
	          line: 43,
	          column: 6
	        },
	        end: {
	          line: 45,
	          column: 9
	        }
	      },
	      '21': {
	        start: {
	          line: 44,
	          column: 8
	        },
	        end: {
	          line: 44,
	          column: 60
	        }
	      },
	      '22': {
	        start: {
	          line: 47,
	          column: 6
	        },
	        end: {
	          line: 47,
	          column: 36
	        }
	      },
	      '23': {
	        start: {
	          line: 50,
	          column: 4
	        },
	        end: {
	          line: 63,
	          column: 5
	        }
	      },
	      '24': {
	        start: {
	          line: 51,
	          column: 6
	        },
	        end: {
	          line: 51,
	          column: 34
	        }
	      },
	      '25': {
	        start: {
	          line: 52,
	          column: 6
	        },
	        end: {
	          line: 60,
	          column: 7
	        }
	      },
	      '26': {
	        start: {
	          line: 53,
	          column: 30
	        },
	        end: {
	          line: 53,
	          column: 69
	        }
	      },
	      '27': {
	        start: {
	          line: 55,
	          column: 8
	        },
	        end: {
	          line: 55,
	          column: 57
	        }
	      },
	      '28': {
	        start: {
	          line: 56,
	          column: 8
	        },
	        end: {
	          line: 58,
	          column: 11
	        }
	      },
	      '29': {
	        start: {
	          line: 57,
	          column: 10
	        },
	        end: {
	          line: 57,
	          column: 62
	        }
	      },
	      '30': {
	        start: {
	          line: 62,
	          column: 6
	        },
	        end: {
	          line: 62,
	          column: 53
	        }
	      },
	      '31': {
	        start: {
	          line: 65,
	          column: 4
	        },
	        end: {
	          line: 78,
	          column: 5
	        }
	      },
	      '32': {
	        start: {
	          line: 66,
	          column: 6
	        },
	        end: {
	          line: 66,
	          column: 34
	        }
	      },
	      '33': {
	        start: {
	          line: 67,
	          column: 6
	        },
	        end: {
	          line: 75,
	          column: 7
	        }
	      },
	      '34': {
	        start: {
	          line: 68,
	          column: 30
	        },
	        end: {
	          line: 68,
	          column: 69
	        }
	      },
	      '35': {
	        start: {
	          line: 70,
	          column: 8
	        },
	        end: {
	          line: 70,
	          column: 57
	        }
	      },
	      '36': {
	        start: {
	          line: 71,
	          column: 8
	        },
	        end: {
	          line: 73,
	          column: 11
	        }
	      },
	      '37': {
	        start: {
	          line: 72,
	          column: 10
	        },
	        end: {
	          line: 72,
	          column: 62
	        }
	      },
	      '38': {
	        start: {
	          line: 77,
	          column: 6
	        },
	        end: {
	          line: 77,
	          column: 53
	        }
	      },
	      '39': {
	        start: {
	          line: 80,
	          column: 4
	        },
	        end: {
	          line: 80,
	          column: 18
	        }
	      },
	      '40': {
	        start: {
	          line: 81,
	          column: 4
	        },
	        end: {
	          line: 81,
	          column: 24
	        }
	      },
	      '41': {
	        start: {
	          line: 86,
	          column: 15
	        },
	        end: {
	          line: 89,
	          column: 6
	        }
	      },
	      '42': {
	        start: {
	          line: 91,
	          column: 4
	        },
	        end: {
	          line: 91,
	          column: 14
	        }
	      },
	      '43': {
	        start: {
	          line: 95,
	          column: 4
	        },
	        end: {
	          line: 95,
	          column: 328
	        }
	      },
	      '44': {
	        start: {
	          line: 99,
	          column: 4
	        },
	        end: {
	          line: 101,
	          column: 5
	        }
	      },
	      '45': {
	        start: {
	          line: 100,
	          column: 6
	        },
	        end: {
	          line: 100,
	          column: 13
	        }
	      },
	      '46': {
	        start: {
	          line: 102,
	          column: 4
	        },
	        end: {
	          line: 104,
	          column: 5
	        }
	      },
	      '47': {
	        start: {
	          line: 103,
	          column: 6
	        },
	        end: {
	          line: 103,
	          column: 37
	        }
	      },
	      '48': {
	        start: {
	          line: 108,
	          column: 4
	        },
	        end: {
	          line: 108,
	          column: 35
	        }
	      },
	      '49': {
	        start: {
	          line: 109,
	          column: 4
	        },
	        end: {
	          line: 109,
	          column: 25
	        }
	      },
	      '50': {
	        start: {
	          line: 113,
	          column: 4
	        },
	        end: {
	          line: 115,
	          column: 5
	        }
	      },
	      '51': {
	        start: {
	          line: 114,
	          column: 6
	        },
	        end: {
	          line: 114,
	          column: 13
	        }
	      },
	      '52': {
	        start: {
	          line: 116,
	          column: 4
	        },
	        end: {
	          line: 134,
	          column: 5
	        }
	      },
	      '53': {
	        start: {
	          line: 118,
	          column: 6
	        },
	        end: {
	          line: 118,
	          column: 30
	        }
	      },
	      '54': {
	        start: {
	          line: 119,
	          column: 6
	        },
	        end: {
	          line: 119,
	          column: 12
	        }
	      },
	      '55': {
	        start: {
	          line: 121,
	          column: 6
	        },
	        end: {
	          line: 121,
	          column: 33
	        }
	      },
	      '56': {
	        start: {
	          line: 122,
	          column: 6
	        },
	        end: {
	          line: 122,
	          column: 28
	        }
	      },
	      '57': {
	        start: {
	          line: 124,
	          column: 6
	        },
	        end: {
	          line: 124,
	          column: 12
	        }
	      },
	      '58': {
	        start: {
	          line: 126,
	          column: 6
	        },
	        end: {
	          line: 126,
	          column: 28
	        }
	      },
	      '59': {
	        start: {
	          line: 127,
	          column: 6
	        },
	        end: {
	          line: 127,
	          column: 26
	        }
	      },
	      '60': {
	        start: {
	          line: 128,
	          column: 6
	        },
	        end: {
	          line: 128,
	          column: 12
	        }
	      },
	      '61': {
	        start: {
	          line: 130,
	          column: 6
	        },
	        end: {
	          line: 130,
	          column: 30
	        }
	      },
	      '62': {
	        start: {
	          line: 131,
	          column: 6
	        },
	        end: {
	          line: 131,
	          column: 27
	        }
	      },
	      '63': {
	        start: {
	          line: 132,
	          column: 6
	        },
	        end: {
	          line: 132,
	          column: 27
	        }
	      },
	      '64': {
	        start: {
	          line: 133,
	          column: 6
	        },
	        end: {
	          line: 133,
	          column: 12
	        }
	      },
	      '65': {
	        start: {
	          line: 146,
	          column: 4
	        },
	        end: {
	          line: 148,
	          column: 5
	        }
	      },
	      '66': {
	        start: {
	          line: 147,
	          column: 6
	        },
	        end: {
	          line: 147,
	          column: 13
	        }
	      },
	      '67': {
	        start: {
	          line: 149,
	          column: 4
	        },
	        end: {
	          line: 149,
	          column: 41
	        }
	      },
	      '68': {
	        start: {
	          line: 153,
	          column: 22
	        },
	        end: {
	          line: 153,
	          column: 24
	        }
	      },
	      '69': {
	        start: {
	          line: 154,
	          column: 20
	        },
	        end: {
	          line: 154,
	          column: 37
	        }
	      },
	      '70': {
	        start: {
	          line: 155,
	          column: 19
	        },
	        end: {
	          line: 155,
	          column: 37
	        }
	      },
	      '71': {
	        start: {
	          line: 157,
	          column: 4
	        },
	        end: {
	          line: 159,
	          column: 5
	        }
	      },
	      '72': {
	        start: {
	          line: 158,
	          column: 6
	        },
	        end: {
	          line: 158,
	          column: 13
	        }
	      },
	      '73': {
	        start: {
	          line: 161,
	          column: 4
	        },
	        end: {
	          line: 168,
	          column: 5
	        }
	      },
	      '74': {
	        start: {
	          line: 162,
	          column: 20
	        },
	        end: {
	          line: 162,
	          column: 29
	        }
	      },
	      '75': {
	        start: {
	          line: 164,
	          column: 6
	        },
	        end: {
	          line: 167,
	          column: 7
	        }
	      },
	      '76': {
	        start: {
	          line: 166,
	          column: 8
	        },
	        end: {
	          line: 166,
	          column: 49
	        }
	      },
	      '77': {
	        start: {
	          line: 170,
	          column: 4
	        },
	        end: {
	          line: 173,
	          column: 5
	        }
	      },
	      '78': {
	        start: {
	          line: 171,
	          column: 6
	        },
	        end: {
	          line: 171,
	          column: 86
	        }
	      },
	      '79': {
	        start: {
	          line: 172,
	          column: 6
	        },
	        end: {
	          line: 172,
	          column: 128
	        }
	      },
	      '80': {
	        start: {
	          line: 181,
	          column: 22
	        },
	        end: {
	          line: 181,
	          column: 24
	        }
	      },
	      '81': {
	        start: {
	          line: 182,
	          column: 19
	        },
	        end: {
	          line: 182,
	          column: 36
	        }
	      },
	      '82': {
	        start: {
	          line: 184,
	          column: 4
	        },
	        end: {
	          line: 186,
	          column: 5
	        }
	      },
	      '83': {
	        start: {
	          line: 185,
	          column: 6
	        },
	        end: {
	          line: 185,
	          column: 13
	        }
	      },
	      '84': {
	        start: {
	          line: 188,
	          column: 4
	        },
	        end: {
	          line: 194,
	          column: 5
	        }
	      },
	      '85': {
	        start: {
	          line: 189,
	          column: 20
	        },
	        end: {
	          line: 189,
	          column: 29
	        }
	      },
	      '86': {
	        start: {
	          line: 191,
	          column: 6
	        },
	        end: {
	          line: 193,
	          column: 7
	        }
	      },
	      '87': {
	        start: {
	          line: 192,
	          column: 8
	        },
	        end: {
	          line: 192,
	          column: 30
	        }
	      },
	      '88': {
	        start: {
	          line: 196,
	          column: 4
	        },
	        end: {
	          line: 199,
	          column: 5
	        }
	      },
	      '89': {
	        start: {
	          line: 197,
	          column: 6
	        },
	        end: {
	          line: 197,
	          column: 86
	        }
	      },
	      '90': {
	        start: {
	          line: 198,
	          column: 6
	        },
	        end: {
	          line: 198,
	          column: 128
	        }
	      },
	      '91': {
	        start: {
	          line: 203,
	          column: 4
	        },
	        end: {
	          line: 203,
	          column: 38
	        }
	      },
	      '92': {
	        start: {
	          line: 207,
	          column: 4
	        },
	        end: {
	          line: 207,
	          column: 65
	        }
	      },
	      '93': {
	        start: {
	          line: 211,
	          column: 4
	        },
	        end: {
	          line: 211,
	          column: 59
	        }
	      },
	      '94': {
	        start: {
	          line: 215,
	          column: 4
	        },
	        end: {
	          line: 217,
	          column: 5
	        }
	      },
	      '95': {
	        start: {
	          line: 216,
	          column: 6
	        },
	        end: {
	          line: 216,
	          column: 13
	        }
	      },
	      '96': {
	        start: {
	          line: 218,
	          column: 4
	        },
	        end: {
	          line: 220,
	          column: 5
	        }
	      },
	      '97': {
	        start: {
	          line: 219,
	          column: 6
	        },
	        end: {
	          line: 219,
	          column: 142
	        }
	      },
	      '98': {
	        start: {
	          line: 221,
	          column: 4
	        },
	        end: {
	          line: 221,
	          column: 32
	        }
	      },
	      '99': {
	        start: {
	          line: 225,
	          column: 4
	        },
	        end: {
	          line: 227,
	          column: 5
	        }
	      },
	      '100': {
	        start: {
	          line: 226,
	          column: 6
	        },
	        end: {
	          line: 226,
	          column: 13
	        }
	      },
	      '101': {
	        start: {
	          line: 228,
	          column: 4
	        },
	        end: {
	          line: 231,
	          column: 5
	        }
	      },
	      '102': {
	        start: {
	          line: 229,
	          column: 6
	        },
	        end: {
	          line: 229,
	          column: 142
	        }
	      },
	      '103': {
	        start: {
	          line: 230,
	          column: 6
	        },
	        end: {
	          line: 230,
	          column: 33
	        }
	      },
	      '104': {
	        start: {
	          line: 235,
	          column: 4
	        },
	        end: {
	          line: 235,
	          column: 24
	        }
	      },
	      '105': {
	        start: {
	          line: 239,
	          column: 4
	        },
	        end: {
	          line: 239,
	          column: 55
	        }
	      },
	      '106': {
	        start: {
	          line: 243,
	          column: 4
	        },
	        end: {
	          line: 245,
	          column: 5
	        }
	      },
	      '107': {
	        start: {
	          line: 244,
	          column: 6
	        },
	        end: {
	          line: 244,
	          column: 15
	        }
	      },
	      '108': {
	        start: {
	          line: 246,
	          column: 4
	        },
	        end: {
	          line: 246,
	          column: 44
	        }
	      },
	      '109': {
	        start: {
	          line: 251,
	          column: 4
	        },
	        end: {
	          line: 253,
	          column: 5
	        }
	      },
	      '110': {
	        start: {
	          line: 252,
	          column: 6
	        },
	        end: {
	          line: 252,
	          column: 15
	        }
	      },
	      '111': {
	        start: {
	          line: 256,
	          column: 4
	        },
	        end: {
	          line: 256,
	          column: 50
	        }
	      },
	      '112': {
	        start: {
	          line: 257,
	          column: 4
	        },
	        end: {
	          line: 257,
	          column: 35
	        }
	      },
	      '113': {
	        start: {
	          line: 261,
	          column: 4
	        },
	        end: {
	          line: 261,
	          column: 107
	        }
	      },
	      '114': {
	        start: {
	          line: 265,
	          column: 4
	        },
	        end: {
	          line: 265,
	          column: 43
	        }
	      },
	      '115': {
	        start: {
	          line: 269,
	          column: 4
	        },
	        end: {
	          line: 269,
	          column: 24
	        }
	      },
	      '116': {
	        start: {
	          line: 273,
	          column: 4
	        },
	        end: {
	          line: 275,
	          column: 5
	        }
	      },
	      '117': {
	        start: {
	          line: 274,
	          column: 6
	        },
	        end: {
	          line: 274,
	          column: 15
	        }
	      },
	      '118': {
	        start: {
	          line: 276,
	          column: 4
	        },
	        end: {
	          line: 276,
	          column: 52
	        }
	      },
	      '119': {
	        start: {
	          line: 280,
	          column: 4
	        },
	        end: {
	          line: 280,
	          column: 17
	        }
	      },
	      '120': {
	        start: {
	          line: 287,
	          column: 4
	        },
	        end: {
	          line: 289,
	          column: 5
	        }
	      },
	      '121': {
	        start: {
	          line: 288,
	          column: 6
	        },
	        end: {
	          line: 288,
	          column: 13
	        }
	      },
	      '122': {
	        start: {
	          line: 290,
	          column: 4
	        },
	        end: {
	          line: 290,
	          column: 38
	        }
	      },
	      '123': {
	        start: {
	          line: 291,
	          column: 4
	        },
	        end: {
	          line: 291,
	          column: 25
	        }
	      },
	      '124': {
	        start: {
	          line: 292,
	          column: 4
	        },
	        end: {
	          line: 292,
	          column: 24
	        }
	      },
	      '125': {
	        start: {
	          line: 293,
	          column: 4
	        },
	        end: {
	          line: 293,
	          column: 32
	        }
	      },
	      '126': {
	        start: {
	          line: 294,
	          column: 4
	        },
	        end: {
	          line: 294,
	          column: 23
	        }
	      },
	      '127': {
	        start: {
	          line: 295,
	          column: 4
	        },
	        end: {
	          line: 295,
	          column: 52
	        }
	      },
	      '128': {
	        start: {
	          line: 296,
	          column: 4
	        },
	        end: {
	          line: 296,
	          column: 28
	        }
	      },
	      '129': {
	        start: {
	          line: 297,
	          column: 4
	        },
	        end: {
	          line: 297,
	          column: 127
	        }
	      },
	      '130': {
	        start: {
	          line: 298,
	          column: 4
	        },
	        end: {
	          line: 298,
	          column: 40
	        }
	      },
	      '131': {
	        start: {
	          line: 302,
	          column: 4
	        },
	        end: {
	          line: 302,
	          column: 29
	        }
	      },
	      '132': {
	        start: {
	          line: 306,
	          column: 4
	        },
	        end: {
	          line: 306,
	          column: 23
	        }
	      },
	      '133': {
	        start: {
	          line: 310,
	          column: 4
	        },
	        end: {
	          line: 310,
	          column: 47
	        }
	      },
	      '134': {
	        start: {
	          line: 314,
	          column: 4
	        },
	        end: {
	          line: 314,
	          column: 17
	        }
	      },
	      '135': {
	        start: {
	          line: 318,
	          column: 4
	        },
	        end: {
	          line: 318,
	          column: 15
	        }
	      },
	      '136': {
	        start: {
	          line: 322,
	          column: 4
	        },
	        end: {
	          line: 322,
	          column: 39
	        }
	      },
	      '137': {
	        start: {
	          line: 323,
	          column: 4
	        },
	        end: {
	          line: 323,
	          column: 34
	        }
	      },
	      '138': {
	        start: {
	          line: 327,
	          column: 4
	        },
	        end: {
	          line: 327,
	          column: 17
	        }
	      },
	      '139': {
	        start: {
	          line: 331,
	          column: 4
	        },
	        end: {
	          line: 331,
	          column: 17
	        }
	      },
	      '140': {
	        start: {
	          line: 335,
	          column: 4
	        },
	        end: {
	          line: 335,
	          column: 13
	        }
	      },
	      '141': {
	        start: {
	          line: 339,
	          column: 0
	        },
	        end: {
	          line: 339,
	          column: 41
	        }
	      },
	      '142': {
	        start: {
	          line: 341,
	          column: 0
	        },
	        end: {
	          line: 341,
	          column: 42
	        }
	      },
	      '143': {
	        start: {
	          line: 345,
	          column: 0
	        },
	        end: {
	          line: 347,
	          column: 2
	        }
	      },
	      '144': {
	        start: {
	          line: 346,
	          column: 2
	        },
	        end: {
	          line: 346,
	          column: 14
	        }
	      },
	      '145': {
	        start: {
	          line: 350,
	          column: 0
	        },
	        end: {
	          line: 350,
	          column: 51
	        }
	      },
	      '146': {
	        start: {
	          line: 359,
	          column: 0
	        },
	        end: {
	          line: 359,
	          column: 40
	        }
	      },
	      '147': {
	        start: {
	          line: 367,
	          column: 0
	        },
	        end: {
	          line: 379,
	          column: 2
	        }
	      },
	      '148': {
	        start: {
	          line: 369,
	          column: 21
	        },
	        end: {
	          line: 369,
	          column: 76
	        }
	      },
	      '149': {
	        start: {
	          line: 370,
	          column: 20
	        },
	        end: {
	          line: 370,
	          column: 50
	        }
	      },
	      '150': {
	        start: {
	          line: 372,
	          column: 2
	        },
	        end: {
	          line: 376,
	          column: 3
	        }
	      },
	      '151': {
	        start: {
	          line: 373,
	          column: 4
	        },
	        end: {
	          line: 373,
	          column: 22
	        }
	      },
	      '152': {
	        start: {
	          line: 374,
	          column: 9
	        },
	        end: {
	          line: 376,
	          column: 3
	        }
	      },
	      '153': {
	        start: {
	          line: 375,
	          column: 4
	        },
	        end: {
	          line: 375,
	          column: 19
	        }
	      },
	      '154': {
	        start: {
	          line: 377,
	          column: 2
	        },
	        end: {
	          line: 377,
	          column: 12
	        }
	      },
	      '155': {
	        start: {
	          line: 387,
	          column: 0
	        },
	        end: {
	          line: 397,
	          column: 2
	        }
	      },
	      '156': {
	        start: {
	          line: 390,
	          column: 2
	        },
	        end: {
	          line: 394,
	          column: 3
	        }
	      },
	      '157': {
	        start: {
	          line: 391,
	          column: 4
	        },
	        end: {
	          line: 391,
	          column: 71
	        }
	      },
	      '158': {
	        start: {
	          line: 392,
	          column: 9
	        },
	        end: {
	          line: 394,
	          column: 3
	        }
	      },
	      '159': {
	        start: {
	          line: 393,
	          column: 4
	        },
	        end: {
	          line: 393,
	          column: 70
	        }
	      },
	      '160': {
	        start: {
	          line: 396,
	          column: 2
	        },
	        end: {
	          line: 396,
	          column: 12
	        }
	      },
	      '161': {
	        start: {
	          line: 407,
	          column: 0
	        },
	        end: {
	          line: 409,
	          column: 2
	        }
	      },
	      '162': {
	        start: {
	          line: 408,
	          column: 2
	        },
	        end: {
	          line: 408,
	          column: 23
	        }
	      },
	      '163': {
	        start: {
	          line: 415,
	          column: 0
	        },
	        end: {
	          line: 415,
	          column: 60
	        }
	      },
	      '164': {
	        start: {
	          line: 418,
	          column: 0
	        },
	        end: {
	          line: 418,
	          column: 73
	        }
	      },
	      '165': {
	        start: {
	          line: 425,
	          column: 0
	        },
	        end: {
	          line: 425,
	          column: 54
	        }
	      },
	      '166': {
	        start: {
	          line: 432,
	          column: 0
	        },
	        end: {
	          line: 432,
	          column: 54
	        }
	      },
	      '167': {
	        start: {
	          line: 440,
	          column: 0
	        },
	        end: {
	          line: 440,
	          column: 57
	        }
	      },
	      '168': {
	        start: {
	          line: 447,
	          column: 0
	        },
	        end: {
	          line: 447,
	          column: 58
	        }
	      },
	      '169': {
	        start: {
	          line: 453,
	          column: 0
	        },
	        end: {
	          line: 453,
	          column: 58
	        }
	      },
	      '170': {
	        start: {
	          line: 459,
	          column: 0
	        },
	        end: {
	          line: 459,
	          column: 56
	        }
	      },
	      '171': {
	        start: {
	          line: 466,
	          column: 0
	        },
	        end: {
	          line: 466,
	          column: 57
	        }
	      },
	      '172': {
	        start: {
	          line: 473,
	          column: 0
	        },
	        end: {
	          line: 473,
	          column: 58
	        }
	      },
	      '173': {
	        start: {
	          line: 480,
	          column: 0
	        },
	        end: {
	          line: 480,
	          column: 59
	        }
	      },
	      '174': {
	        start: {
	          line: 485,
	          column: 0
	        },
	        end: {
	          line: 487,
	          column: 1
	        }
	      },
	      '175': {
	        start: {
	          line: 486,
	          column: 2
	        },
	        end: {
	          line: 486,
	          column: 45
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 30,
	            column: 23
	          },
	          end: {
	            line: 30,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 30,
	            column: 29
	          },
	          end: {
	            line: 35,
	            column: 5
	          }
	        },
	        line: 30
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 43,
	            column: 25
	          },
	          end: {
	            line: 43,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 43,
	            column: 36
	          },
	          end: {
	            line: 45,
	            column: 7
	          }
	        },
	        line: 43
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 56,
	            column: 27
	          },
	          end: {
	            line: 56,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 56,
	            column: 38
	          },
	          end: {
	            line: 58,
	            column: 9
	          }
	        },
	        line: 56
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 71,
	            column: 27
	          },
	          end: {
	            line: 71,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 71,
	            column: 38
	          },
	          end: {
	            line: 73,
	            column: 9
	          }
	        },
	        line: 71
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 345,
	            column: 29
	          },
	          end: {
	            line: 345,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 345,
	            column: 40
	          },
	          end: {
	            line: 347,
	            column: 1
	          }
	        },
	        line: 345
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 367,
	            column: 49
	          },
	          end: {
	            line: 367,
	            column: 50
	          }
	        },
	        loc: {
	          start: {
	            line: 367,
	            column: 66
	          },
	          end: {
	            line: 379,
	            column: 1
	          }
	        },
	        line: 367
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 387,
	            column: 53
	          },
	          end: {
	            line: 387,
	            column: 54
	          }
	        },
	        loc: {
	          start: {
	            line: 387,
	            column: 70
	          },
	          end: {
	            line: 397,
	            column: 1
	          }
	        },
	        line: 387
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 407,
	            column: 50
	          },
	          end: {
	            line: 407,
	            column: 51
	          }
	        },
	        loc: {
	          start: {
	            line: 407,
	            column: 73
	          },
	          end: {
	            line: 409,
	            column: 1
	          }
	        },
	        line: 407
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 415,
	            column: 45
	          },
	          end: {
	            line: 415,
	            column: 46
	          }
	        },
	        loc: {
	          start: {
	            line: 415,
	            column: 56
	          },
	          end: {
	            line: 415,
	            column: 59
	          }
	        },
	        line: 415
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 39,
	            column: 4
	          },
	          end: {
	            line: 48,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 39,
	            column: 4
	          },
	          end: {
	            line: 48,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 39,
	            column: 4
	          },
	          end: {
	            line: 48,
	            column: 5
	          }
	        }],
	        line: 39
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 52,
	            column: 6
	          },
	          end: {
	            line: 60,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 52,
	            column: 6
	          },
	          end: {
	            line: 60,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 52,
	            column: 6
	          },
	          end: {
	            line: 60,
	            column: 7
	          }
	        }],
	        line: 52
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 67,
	            column: 6
	          },
	          end: {
	            line: 75,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 67,
	            column: 6
	          },
	          end: {
	            line: 75,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 67,
	            column: 6
	          },
	          end: {
	            line: 75,
	            column: 7
	          }
	        }],
	        line: 67
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 99,
	            column: 4
	          },
	          end: {
	            line: 101,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 99,
	            column: 4
	          },
	          end: {
	            line: 101,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 99,
	            column: 4
	          },
	          end: {
	            line: 101,
	            column: 5
	          }
	        }],
	        line: 99
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 102,
	            column: 4
	          },
	          end: {
	            line: 104,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 102,
	            column: 4
	          },
	          end: {
	            line: 104,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 102,
	            column: 4
	          },
	          end: {
	            line: 104,
	            column: 5
	          }
	        }],
	        line: 102
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
	            line: 116,
	            column: 4
	          },
	          end: {
	            line: 134,
	            column: 5
	          }
	        },
	        type: 'switch',
	        locations: [{
	          start: {
	            line: 117,
	            column: 4
	          },
	          end: {
	            line: 119,
	            column: 12
	          }
	        }, {
	          start: {
	            line: 120,
	            column: 4
	          },
	          end: {
	            line: 124,
	            column: 12
	          }
	        }, {
	          start: {
	            line: 125,
	            column: 4
	          },
	          end: {
	            line: 128,
	            column: 12
	          }
	        }, {
	          start: {
	            line: 129,
	            column: 4
	          },
	          end: {
	            line: 133,
	            column: 12
	          }
	        }],
	        line: 116
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 146,
	            column: 4
	          },
	          end: {
	            line: 148,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 146,
	            column: 4
	          },
	          end: {
	            line: 148,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 146,
	            column: 4
	          },
	          end: {
	            line: 148,
	            column: 5
	          }
	        }],
	        line: 146
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 157,
	            column: 4
	          },
	          end: {
	            line: 159,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 157,
	            column: 4
	          },
	          end: {
	            line: 159,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 157,
	            column: 4
	          },
	          end: {
	            line: 159,
	            column: 5
	          }
	        }],
	        line: 157
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 164,
	            column: 6
	          },
	          end: {
	            line: 167,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 164,
	            column: 6
	          },
	          end: {
	            line: 167,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 164,
	            column: 6
	          },
	          end: {
	            line: 167,
	            column: 7
	          }
	        }],
	        line: 164
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 170,
	            column: 4
	          },
	          end: {
	            line: 173,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 170,
	            column: 4
	          },
	          end: {
	            line: 173,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 170,
	            column: 4
	          },
	          end: {
	            line: 173,
	            column: 5
	          }
	        }],
	        line: 170
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 170,
	            column: 8
	          },
	          end: {
	            line: 170,
	            column: 41
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 170,
	            column: 8
	          },
	          end: {
	            line: 170,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 170,
	            column: 25
	          },
	          end: {
	            line: 170,
	            column: 41
	          }
	        }],
	        line: 170
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 184,
	            column: 4
	          },
	          end: {
	            line: 186,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 184,
	            column: 4
	          },
	          end: {
	            line: 186,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 184,
	            column: 4
	          },
	          end: {
	            line: 186,
	            column: 5
	          }
	        }],
	        line: 184
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 191,
	            column: 6
	          },
	          end: {
	            line: 193,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 191,
	            column: 6
	          },
	          end: {
	            line: 193,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 191,
	            column: 6
	          },
	          end: {
	            line: 193,
	            column: 7
	          }
	        }],
	        line: 191
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 196,
	            column: 4
	          },
	          end: {
	            line: 199,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 196,
	            column: 4
	          },
	          end: {
	            line: 199,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 196,
	            column: 4
	          },
	          end: {
	            line: 199,
	            column: 5
	          }
	        }],
	        line: 196
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 196,
	            column: 8
	          },
	          end: {
	            line: 196,
	            column: 41
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 196,
	            column: 8
	          },
	          end: {
	            line: 196,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 196,
	            column: 25
	          },
	          end: {
	            line: 196,
	            column: 41
	          }
	        }],
	        line: 196
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 215,
	            column: 4
	          },
	          end: {
	            line: 217,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 215,
	            column: 4
	          },
	          end: {
	            line: 217,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 215,
	            column: 4
	          },
	          end: {
	            line: 217,
	            column: 5
	          }
	        }],
	        line: 215
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 218,
	            column: 4
	          },
	          end: {
	            line: 220,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 218,
	            column: 4
	          },
	          end: {
	            line: 220,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 218,
	            column: 4
	          },
	          end: {
	            line: 220,
	            column: 5
	          }
	        }],
	        line: 218
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
	            line: 228,
	            column: 4
	          },
	          end: {
	            line: 231,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 228,
	            column: 4
	          },
	          end: {
	            line: 231,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 228,
	            column: 4
	          },
	          end: {
	            line: 231,
	            column: 5
	          }
	        }],
	        line: 228
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 243,
	            column: 4
	          },
	          end: {
	            line: 245,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 243,
	            column: 4
	          },
	          end: {
	            line: 245,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 243,
	            column: 4
	          },
	          end: {
	            line: 245,
	            column: 5
	          }
	        }],
	        line: 243
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 251,
	            column: 4
	          },
	          end: {
	            line: 253,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 251,
	            column: 4
	          },
	          end: {
	            line: 253,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 251,
	            column: 4
	          },
	          end: {
	            line: 253,
	            column: 5
	          }
	        }],
	        line: 251
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 273,
	            column: 4
	          },
	          end: {
	            line: 275,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 273,
	            column: 4
	          },
	          end: {
	            line: 275,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 273,
	            column: 4
	          },
	          end: {
	            line: 275,
	            column: 5
	          }
	        }],
	        line: 273
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 276,
	            column: 11
	          },
	          end: {
	            line: 276,
	            column: 51
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 276,
	            column: 11
	          },
	          end: {
	            line: 276,
	            column: 39
	          }
	        }, {
	          start: {
	            line: 276,
	            column: 43
	          },
	          end: {
	            line: 276,
	            column: 51
	          }
	        }],
	        line: 276
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 283,
	            column: 19
	          },
	          end: {
	            line: 283,
	            column: 31
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 283,
	            column: 26
	          },
	          end: {
	            line: 283,
	            column: 31
	          }
	        }],
	        line: 283
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 287,
	            column: 4
	          },
	          end: {
	            line: 289,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 287,
	            column: 4
	          },
	          end: {
	            line: 289,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 287,
	            column: 4
	          },
	          end: {
	            line: 289,
	            column: 5
	          }
	        }],
	        line: 287
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 372,
	            column: 2
	          },
	          end: {
	            line: 376,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 372,
	            column: 2
	          },
	          end: {
	            line: 376,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 372,
	            column: 2
	          },
	          end: {
	            line: 376,
	            column: 3
	          }
	        }],
	        line: 372
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 374,
	            column: 9
	          },
	          end: {
	            line: 376,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 374,
	            column: 9
	          },
	          end: {
	            line: 376,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 374,
	            column: 9
	          },
	          end: {
	            line: 376,
	            column: 3
	          }
	        }],
	        line: 374
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 390,
	            column: 2
	          },
	          end: {
	            line: 394,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 390,
	            column: 2
	          },
	          end: {
	            line: 394,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 390,
	            column: 2
	          },
	          end: {
	            line: 394,
	            column: 3
	          }
	        }],
	        line: 390
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 392,
	            column: 9
	          },
	          end: {
	            line: 394,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 392,
	            column: 9
	          },
	          end: {
	            line: 394,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 392,
	            column: 9
	          },
	          end: {
	            line: 394,
	            column: 3
	          }
	        }],
	        line: 392
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 485,
	            column: 0
	          },
	          end: {
	            line: 487,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 485,
	            column: 0
	          },
	          end: {
	            line: 487,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 485,
	            column: 0
	          },
	          end: {
	            line: 487,
	            column: 1
	          }
	        }],
	        line: 485
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
	      '8': 0
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
	      cov_2q58cqsssn.f[0]++;
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
	        cov_2q58cqsssn.f[1]++;
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
	          cov_2q58cqsssn.f[2]++;
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
	          cov_2q58cqsssn.f[3]++;
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
	    var el = (cov_2q58cqsssn.s[41]++, videojs.dom.createEl('div', {
	      id: this.options_.techId,
	      className: 'vjs-tech vjs-tech-chromecast'
	    }));
	    cov_2q58cqsssn.s[42]++;
	    return el;
	  },
	  update: function update() {
	    cov_2q58cqsssn.s[43]++;
	    this.el_.innerHTML = "<div class=\"casting-image\" style=\"background-image: url('" + this.options_.poster + "')\"></div><div class=\"casting-overlay\"><div class=\"casting-information\"><div class=\"casting-icon\"></div><div class=\"casting-description\"><small>" + this.localize('CASTING TO') + "</small><br>" + this.receiver + "</div></div></div>";
	  },
	  onSessionUpdate: function onSessionUpdate(isAlive) {
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
	    cov_2q58cqsssn.s[48]++;
	    this.stopTrackingCurrentTime();
	    cov_2q58cqsssn.s[49]++;
	    this.apiMedia = null;
	  },
	  onMediaStatusUpdate: function onMediaStatusUpdate() {
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
	  src: function src(_src) {},
	  currentSrc: function currentSrc() {
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
	  handleVideoTracksChange: function handleVideoTracksChange() {},
	  handleTextTracksChange: function handleTextTracksChange() {
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
	    cov_2q58cqsssn.s[91]++;
	    return videojs.log('track added');
	  },
	  onTrackError: function onTrackError(e) {
	    cov_2q58cqsssn.s[92]++;
	    return videojs.log('Cast track Error: ' + JSON.stringify(e));
	  },
	  castError: function castError(e) {
	    cov_2q58cqsssn.s[93]++;
	    return videojs.log('Cast Error: ' + JSON.stringify(e));
	  },
	  play: function play() {
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
	    cov_2q58cqsssn.s[104]++;
	    return this.paused_;
	  },
	  ended: function ended() {
	    cov_2q58cqsssn.s[105]++;
	    return chrome.cast.media.IdleReason === 'FINISHED';
	  },
	  currentTime: function currentTime() {
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
	    cov_2q58cqsssn.s[114]++;
	    videojs.log('seek success' + position);
	  },
	  volume: function volume() {
	    cov_2q58cqsssn.s[115]++;
	    return this.volume_;
	  },
	  duration: function duration() {
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
	    cov_2q58cqsssn.s[119]++;
	    return false;
	  },
	  setVolume: function setVolume(level, mute) {
	    if (mute === void 0) {
	      mute = (cov_2q58cqsssn.b[24][0]++, false);
	    }

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
	    cov_2q58cqsssn.s[131]++;
	    videojs.log(information);
	  },
	  muted: function muted() {
	    cov_2q58cqsssn.s[132]++;
	    return this.muted_;
	  },
	  setMuted: function setMuted(muted) {
	    cov_2q58cqsssn.s[133]++;
	    return this.setVolume(this.volume_, muted);
	  },
	  supportsFullScreen: function supportsFullScreen() {
	    cov_2q58cqsssn.s[134]++;
	    return false;
	  },
	  resetSrc_: function resetSrc_(callback) {
	    cov_2q58cqsssn.s[135]++;
	    callback();
	  },
	  dispose: function dispose() {
	    cov_2q58cqsssn.s[136]++;
	    this.resetSrc_(Function.prototype);
	    cov_2q58cqsssn.s[137]++;
	    getTech('Tech').dispose(this);
	  },
	  seeking: function seeking() {
	    cov_2q58cqsssn.s[138]++;
	    return false;
	  },
	  seekable: function seekable() {
	    cov_2q58cqsssn.s[139]++;
	    return false;
	  },
	  playbackRate: function playbackRate() {
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
	  cov_2q58cqsssn.f[4]++;
	  cov_2q58cqsssn.s[144]++;
	  return true;
	};

	cov_2q58cqsssn.s[145]++;
	getTech('Tech').withSourceHandlers(ChromecastTech);
	cov_2q58cqsssn.s[146]++;
	ChromecastTech.nativeSourceHandler = {};
	cov_2q58cqsssn.s[147]++;

	ChromecastTech.nativeSourceHandler.canPlayType = function (source) {
	  cov_2q58cqsssn.f[5]++;
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
	    }
	  }

	  cov_2q58cqsssn.s[154]++;
	  return '';
	};

	cov_2q58cqsssn.s[155]++;

	ChromecastTech.nativeSourceHandler.canHandleSource = function (source) {
	  cov_2q58cqsssn.f[6]++;
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
	  cov_2q58cqsssn.f[7]++;
	  cov_2q58cqsssn.s[162]++;
	  tech.src(source.src);
	};

	cov_2q58cqsssn.s[163]++;

	ChromecastTech.nativeSourceHandler.dispose = function () {
	  cov_2q58cqsssn.f[8]++;
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
	      hash = '34d10ce467157e8c80ee87e805f14d8bca88d6a8',
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
	          column: 25
	        },
	        end: {
	          line: 12,
	          column: 2
	        }
	      },
	      '3': {
	        start: {
	          line: 10,
	          column: 4
	        },
	        end: {
	          line: 10,
	          column: 53
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
	          column: 2
	        },
	        end: {
	          line: 24,
	          column: 58
	        }
	      }
	    },
	    fnMap: {},
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
	    f: {},
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
	      hash = '077e0c3bf2197dab18c818a34981d3b6437dabf2',
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
	            column: 37
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
