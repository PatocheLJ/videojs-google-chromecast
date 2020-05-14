/*! @name videojs-google-chromecast @version 0.0.2 @license UNLICENSED */
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

	var version = "0.0.2";

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

	var cov_1iiyehkoov = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/component/control-bar/chromecast-button.js',
	      hash = '8d7c2e65288b0002afb5ec524b0395b20909f943',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/component/control-bar/chromecast-button.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 3,
	          column: 18
	        },
	        end: {
	          line: 3,
	          column: 51
	        }
	      },
	      '1': {
	        start: {
	          line: 4,
	          column: 19
	        },
	        end: {
	          line: 4,
	          column: 53
	        }
	      },
	      '2': {
	        start: {
	          line: 5,
	          column: 15
	        },
	        end: {
	          line: 5,
	          column: 45
	        }
	      },
	      '3': {
	        start: {
	          line: 6,
	          column: 18
	        },
	        end: {
	          line: 6,
	          column: 23
	        }
	      },
	      '4': {
	        start: {
	          line: 10,
	          column: 27
	        },
	        end: {
	          line: 10,
	          column: 70
	        }
	      },
	      '5': {
	        start: {
	          line: 11,
	          column: 4
	        },
	        end: {
	          line: 13,
	          column: 7
	        }
	      },
	      '6': {
	        start: {
	          line: 12,
	          column: 8
	        },
	        end: {
	          line: 12,
	          column: 55
	        }
	      },
	      '7': {
	        start: {
	          line: 15,
	          column: 4
	        },
	        end: {
	          line: 15,
	          column: 27
	        }
	      },
	      '8': {
	        start: {
	          line: 16,
	          column: 4
	        },
	        end: {
	          line: 16,
	          column: 16
	        }
	      },
	      '9': {
	        start: {
	          line: 17,
	          column: 4
	        },
	        end: {
	          line: 17,
	          column: 25
	        }
	      },
	      '10': {
	        start: {
	          line: 18,
	          column: 4
	        },
	        end: {
	          line: 18,
	          column: 23
	        }
	      },
	      '11': {
	        start: {
	          line: 19,
	          column: 4
	        },
	        end: {
	          line: 19,
	          column: 28
	        }
	      },
	      '12': {
	        start: {
	          line: 20,
	          column: 4
	        },
	        end: {
	          line: 20,
	          column: 29
	        }
	      },
	      '13': {
	        start: {
	          line: 22,
	          column: 4
	        },
	        end: {
	          line: 26,
	          column: 7
	        }
	      },
	      '14': {
	        start: {
	          line: 23,
	          column: 6
	        },
	        end: {
	          line: 25,
	          column: 7
	        }
	      },
	      '15': {
	        start: {
	          line: 24,
	          column: 8
	        },
	        end: {
	          line: 24,
	          column: 47
	        }
	      },
	      '16': {
	        start: {
	          line: 28,
	          column: 4
	        },
	        end: {
	          line: 32,
	          column: 7
	        }
	      },
	      '17': {
	        start: {
	          line: 29,
	          column: 6
	        },
	        end: {
	          line: 31,
	          column: 7
	        }
	      },
	      '18': {
	        start: {
	          line: 30,
	          column: 8
	        },
	        end: {
	          line: 30,
	          column: 41
	        }
	      },
	      '19': {
	        start: {
	          line: 36,
	          column: 4
	        },
	        end: {
	          line: 36,
	          column: 64
	        }
	      },
	      '20': {
	        start: {
	          line: 44,
	          column: 23
	        },
	        end: {
	          line: 44,
	          column: 75
	        }
	      },
	      '21': {
	        start: {
	          line: 45,
	          column: 22
	        },
	        end: {
	          line: 45,
	          column: 78
	        }
	      },
	      '22': {
	        start: {
	          line: 47,
	          column: 4
	        },
	        end: {
	          line: 49,
	          column: 5
	        }
	      },
	      '23': {
	        start: {
	          line: 48,
	          column: 6
	        },
	        end: {
	          line: 48,
	          column: 13
	        }
	      },
	      '24': {
	        start: {
	          line: 50,
	          column: 4
	        },
	        end: {
	          line: 58,
	          column: 5
	        }
	      },
	      '25': {
	        start: {
	          line: 51,
	          column: 6
	        },
	        end: {
	          line: 51,
	          column: 45
	        }
	      },
	      '26': {
	        start: {
	          line: 52,
	          column: 6
	        },
	        end: {
	          line: 55,
	          column: 7
	        }
	      },
	      '27': {
	        start: {
	          line: 53,
	          column: 10
	        },
	        end: {
	          line: 53,
	          column: 52
	        }
	      },
	      '28': {
	        start: {
	          line: 54,
	          column: 10
	        },
	        end: {
	          line: 54,
	          column: 33
	        }
	      },
	      '29': {
	        start: {
	          line: 56,
	          column: 6
	        },
	        end: {
	          line: 56,
	          column: 68
	        }
	      },
	      '30': {
	        start: {
	          line: 57,
	          column: 6
	        },
	        end: {
	          line: 57,
	          column: 13
	        }
	      },
	      '31': {
	        start: {
	          line: 60,
	          column: 4
	        },
	        end: {
	          line: 60,
	          column: 43
	        }
	      },
	      '32': {
	        start: {
	          line: 61,
	          column: 4
	        },
	        end: {
	          line: 61,
	          column: 83
	        }
	      },
	      '33': {
	        start: {
	          line: 62,
	          column: 4
	        },
	        end: {
	          line: 62,
	          column: 59
	        }
	      },
	      '34': {
	        start: {
	          line: 63,
	          column: 4
	        },
	        end: {
	          line: 63,
	          column: 131
	        }
	      },
	      '35': {
	        start: {
	          line: 64,
	          column: 4
	        },
	        end: {
	          line: 64,
	          column: 103
	        }
	      },
	      '36': {
	        start: {
	          line: 69,
	          column: 18
	        },
	        end: {
	          line: 72,
	          column: 5
	        }
	      },
	      '37': {
	        start: {
	          line: 74,
	          column: 4
	        },
	        end: {
	          line: 91,
	          column: 5
	        }
	      },
	      '38': {
	        start: {
	          line: 84,
	          column: 6
	        },
	        end: {
	          line: 84,
	          column: 29
	        }
	      },
	      '39': {
	        start: {
	          line: 85,
	          column: 6
	        },
	        end: {
	          line: 85,
	          column: 12
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
	          column: 32
	        }
	      },
	      '42': {
	        start: {
	          line: 90,
	          column: 6
	        },
	        end: {
	          line: 90,
	          column: 12
	        }
	      },
	      '43': {
	        start: {
	          line: 92,
	          column: 4
	        },
	        end: {
	          line: 92,
	          column: 69
	        }
	      },
	      '44': {
	        start: {
	          line: 96,
	          column: 4
	        },
	        end: {
	          line: 100,
	          column: 5
	        }
	      },
	      '45': {
	        start: {
	          line: 97,
	          column: 6
	        },
	        end: {
	          line: 97,
	          column: 18
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
	          column: 4
	        },
	        end: {
	          line: 101,
	          column: 38
	        }
	      },
	      '48': {
	        start: {
	          line: 105,
	          column: 4
	        },
	        end: {
	          line: 108,
	          column: 5
	        }
	      },
	      '49': {
	        start: {
	          line: 106,
	          column: 6
	        },
	        end: {
	          line: 106,
	          column: 32
	        }
	      },
	      '50': {
	        start: {
	          line: 107,
	          column: 6
	        },
	        end: {
	          line: 107,
	          column: 47
	        }
	      },
	      '51': {
	        start: {
	          line: 109,
	          column: 4
	        },
	        end: {
	          line: 109,
	          column: 41
	        }
	      },
	      '52': {
	        start: {
	          line: 113,
	          column: 4
	        },
	        end: {
	          line: 114,
	          column: 15
	        }
	      },
	      '53': {
	        start: {
	          line: 114,
	          column: 8
	        },
	        end: {
	          line: 114,
	          column: 15
	        }
	      },
	      '54': {
	        start: {
	          line: 116,
	          column: 4
	        },
	        end: {
	          line: 119,
	          column: 5
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
	          line: 118,
	          column: 6
	        },
	        end: {
	          line: 118,
	          column: 25
	        }
	      },
	      '57': {
	        start: {
	          line: 120,
	          column: 4
	        },
	        end: {
	          line: 120,
	          column: 24
	        }
	      },
	      '58': {
	        start: {
	          line: 121,
	          column: 4
	        },
	        end: {
	          line: 121,
	          column: 23
	        }
	      },
	      '59': {
	        start: {
	          line: 125,
	          column: 4
	        },
	        end: {
	          line: 127,
	          column: 5
	        }
	      },
	      '60': {
	        start: {
	          line: 126,
	          column: 6
	        },
	        end: {
	          line: 126,
	          column: 62
	        }
	      },
	      '61': {
	        start: {
	          line: 129,
	          column: 4
	        },
	        end: {
	          line: 132,
	          column: 6
	        }
	      },
	      '62': {
	        start: {
	          line: 136,
	          column: 4
	        },
	        end: {
	          line: 136,
	          column: 22
	        }
	      },
	      '63': {
	        start: {
	          line: 137,
	          column: 4
	        },
	        end: {
	          line: 137,
	          column: 60
	        }
	      },
	      '64': {
	        start: {
	          line: 138,
	          column: 4
	        },
	        end: {
	          line: 140,
	          column: 5
	        }
	      },
	      '65': {
	        start: {
	          line: 139,
	          column: 6
	        },
	        end: {
	          line: 139,
	          column: 101
	        }
	      },
	      '66': {
	        start: {
	          line: 141,
	          column: 4
	        },
	        end: {
	          line: 141,
	          column: 50
	        }
	      },
	      '67': {
	        start: {
	          line: 152,
	          column: 4
	        },
	        end: {
	          line: 152,
	          column: 30
	        }
	      },
	      '68': {
	        start: {
	          line: 154,
	          column: 4
	        },
	        end: {
	          line: 154,
	          column: 126
	        }
	      },
	      '69': {
	        start: {
	          line: 156,
	          column: 4
	        },
	        end: {
	          line: 156,
	          column: 83
	        }
	      },
	      '70': {
	        start: {
	          line: 157,
	          column: 4
	        },
	        end: {
	          line: 157,
	          column: 70
	        }
	      },
	      '71': {
	        start: {
	          line: 158,
	          column: 4
	        },
	        end: {
	          line: 164,
	          column: 5
	        }
	      },
	      '72': {
	        start: {
	          line: 159,
	          column: 8
	        },
	        end: {
	          line: 159,
	          column: 62
	        }
	      },
	      '73': {
	        start: {
	          line: 160,
	          column: 8
	        },
	        end: {
	          line: 163,
	          column: 9
	        }
	      },
	      '74': {
	        start: {
	          line: 161,
	          column: 12
	        },
	        end: {
	          line: 161,
	          column: 29
	        }
	      },
	      '75': {
	        start: {
	          line: 162,
	          column: 12
	        },
	        end: {
	          line: 162,
	          column: 44
	        }
	      },
	      '76': {
	        start: {
	          line: 167,
	          column: 19
	        },
	        end: {
	          line: 167,
	          column: 41
	        }
	      },
	      '77': {
	        start: {
	          line: 168,
	          column: 4
	        },
	        end: {
	          line: 171,
	          column: 5
	        }
	      },
	      '78': {
	        start: {
	          line: 169,
	          column: 6
	        },
	        end: {
	          line: 169,
	          column: 44
	        }
	      },
	      '79': {
	        start: {
	          line: 170,
	          column: 6
	        },
	        end: {
	          line: 170,
	          column: 42
	        }
	      },
	      '80': {
	        start: {
	          line: 173,
	          column: 19
	        },
	        end: {
	          line: 173,
	          column: 45
	        }
	      },
	      '81': {
	        start: {
	          line: 174,
	          column: 27
	        },
	        end: {
	          line: 174,
	          column: 61
	        }
	      },
	      '82': {
	        start: {
	          line: 175,
	          column: 19
	        },
	        end: {
	          line: 175,
	          column: 21
	        }
	      },
	      '83': {
	        start: {
	          line: 176,
	          column: 12
	        },
	        end: {
	          line: 176,
	          column: 13
	        }
	      },
	      '84': {
	        start: {
	          line: 179,
	          column: 18
	        },
	        end: {
	          line: 179,
	          column: 19
	        }
	      },
	      '85': {
	        start: {
	          line: 182,
	          column: 4
	        },
	        end: {
	          line: 200,
	          column: 5
	        }
	      },
	      '86': {
	        start: {
	          line: 183,
	          column: 6
	        },
	        end: {
	          line: 194,
	          column: 7
	        }
	      },
	      '87': {
	        start: {
	          line: 184,
	          column: 8
	        },
	        end: {
	          line: 184,
	          column: 38
	        }
	      },
	      '88': {
	        start: {
	          line: 185,
	          column: 8
	        },
	        end: {
	          line: 185,
	          column: 108
	        }
	      },
	      '89': {
	        start: {
	          line: 186,
	          column: 8
	        },
	        end: {
	          line: 186,
	          column: 18
	        }
	      },
	      '90': {
	        start: {
	          line: 187,
	          column: 8
	        },
	        end: {
	          line: 187,
	          column: 87
	        }
	      },
	      '91': {
	        start: {
	          line: 188,
	          column: 8
	        },
	        end: {
	          line: 188,
	          column: 97
	        }
	      },
	      '92': {
	        start: {
	          line: 189,
	          column: 8
	        },
	        end: {
	          line: 189,
	          column: 65
	        }
	      },
	      '93': {
	        start: {
	          line: 190,
	          column: 8
	        },
	        end: {
	          line: 190,
	          column: 35
	        }
	      },
	      '94': {
	        start: {
	          line: 191,
	          column: 8
	        },
	        end: {
	          line: 191,
	          column: 42
	        }
	      },
	      '95': {
	        start: {
	          line: 192,
	          column: 8
	        },
	        end: {
	          line: 192,
	          column: 32
	        }
	      },
	      '96': {
	        start: {
	          line: 193,
	          column: 8
	        },
	        end: {
	          line: 193,
	          column: 27
	        }
	      },
	      '97': {
	        start: {
	          line: 195,
	          column: 6
	        },
	        end: {
	          line: 195,
	          column: 72
	        }
	      },
	      '98': {
	        start: {
	          line: 196,
	          column: 6
	        },
	        end: {
	          line: 196,
	          column: 59
	        }
	      },
	      '99': {
	        start: {
	          line: 197,
	          column: 6
	        },
	        end: {
	          line: 197,
	          column: 61
	        }
	      },
	      '100': {
	        start: {
	          line: 198,
	          column: 6
	        },
	        end: {
	          line: 198,
	          column: 90
	        }
	      },
	      '101': {
	        start: {
	          line: 199,
	          column: 6
	        },
	        end: {
	          line: 199,
	          column: 98
	        }
	      },
	      '102': {
	        start: {
	          line: 202,
	          column: 4
	        },
	        end: {
	          line: 218,
	          column: 5
	        }
	      },
	      '103': {
	        start: {
	          line: 203,
	          column: 6
	        },
	        end: {
	          line: 203,
	          column: 45
	        }
	      },
	      '104': {
	        start: {
	          line: 204,
	          column: 6
	        },
	        end: {
	          line: 215,
	          column: 7
	        }
	      },
	      '105': {
	        start: {
	          line: 205,
	          column: 8
	        },
	        end: {
	          line: 214,
	          column: 9
	        }
	      },
	      '106': {
	        start: {
	          line: 206,
	          column: 10
	        },
	        end: {
	          line: 206,
	          column: 40
	        }
	      },
	      '107': {
	        start: {
	          line: 207,
	          column: 10
	        },
	        end: {
	          line: 207,
	          column: 20
	        }
	      },
	      '108': {
	        start: {
	          line: 208,
	          column: 10
	        },
	        end: {
	          line: 208,
	          column: 90
	        }
	      },
	      '109': {
	        start: {
	          line: 209,
	          column: 10
	        },
	        end: {
	          line: 209,
	          column: 31
	        }
	      },
	      '110': {
	        start: {
	          line: 210,
	          column: 10
	        },
	        end: {
	          line: 210,
	          column: 37
	        }
	      },
	      '111': {
	        start: {
	          line: 211,
	          column: 10
	        },
	        end: {
	          line: 211,
	          column: 44
	        }
	      },
	      '112': {
	        start: {
	          line: 212,
	          column: 10
	        },
	        end: {
	          line: 212,
	          column: 34
	        }
	      },
	      '113': {
	        start: {
	          line: 213,
	          column: 10
	        },
	        end: {
	          line: 213,
	          column: 29
	        }
	      },
	      '114': {
	        start: {
	          line: 217,
	          column: 6
	        },
	        end: {
	          line: 217,
	          column: 53
	        }
	      },
	      '115': {
	        start: {
	          line: 220,
	          column: 4
	        },
	        end: {
	          line: 222,
	          column: 5
	        }
	      },
	      '116': {
	        start: {
	          line: 221,
	          column: 6
	        },
	        end: {
	          line: 221,
	          column: 32
	        }
	      },
	      '117': {
	        start: {
	          line: 224,
	          column: 4
	        },
	        end: {
	          line: 224,
	          column: 63
	        }
	      },
	      '118': {
	        start: {
	          line: 226,
	          column: 4
	        },
	        end: {
	          line: 226,
	          column: 32
	        }
	      },
	      '119': {
	        start: {
	          line: 227,
	          column: 4
	        },
	        end: {
	          line: 227,
	          column: 57
	        }
	      },
	      '120': {
	        start: {
	          line: 229,
	          column: 4
	        },
	        end: {
	          line: 229,
	          column: 105
	        }
	      },
	      '121': {
	        start: {
	          line: 230,
	          column: 4
	        },
	        end: {
	          line: 230,
	          column: 71
	        }
	      },
	      '122': {
	        start: {
	          line: 234,
	          column: 4
	        },
	        end: {
	          line: 234,
	          column: 30
	        }
	      },
	      '123': {
	        start: {
	          line: 235,
	          column: 4
	        },
	        end: {
	          line: 239,
	          column: 7
	        }
	      },
	      '124': {
	        start: {
	          line: 241,
	          column: 4
	        },
	        end: {
	          line: 241,
	          column: 24
	        }
	      },
	      '125': {
	        start: {
	          line: 242,
	          column: 4
	        },
	        end: {
	          line: 242,
	          column: 69
	        }
	      },
	      '126': {
	        start: {
	          line: 243,
	          column: 4
	        },
	        end: {
	          line: 243,
	          column: 48
	        }
	      },
	      '127': {
	        start: {
	          line: 244,
	          column: 4
	        },
	        end: {
	          line: 244,
	          column: 34
	        }
	      },
	      '128': {
	        start: {
	          line: 245,
	          column: 4
	        },
	        end: {
	          line: 245,
	          column: 31
	        }
	      },
	      '129': {
	        start: {
	          line: 246,
	          column: 4
	        },
	        end: {
	          line: 246,
	          column: 30
	        }
	      },
	      '130': {
	        start: {
	          line: 250,
	          column: 4
	        },
	        end: {
	          line: 252,
	          column: 5
	        }
	      },
	      '131': {
	        start: {
	          line: 251,
	          column: 6
	        },
	        end: {
	          line: 251,
	          column: 13
	        }
	      },
	      '132': {
	        start: {
	          line: 253,
	          column: 4
	        },
	        end: {
	          line: 255,
	          column: 5
	        }
	      },
	      '133': {
	        start: {
	          line: 254,
	          column: 6
	        },
	        end: {
	          line: 254,
	          column: 37
	        }
	      },
	      '134': {
	        start: {
	          line: 259,
	          column: 4
	        },
	        end: {
	          line: 259,
	          column: 93
	        }
	      },
	      '135': {
	        start: {
	          line: 263,
	          column: 4
	        },
	        end: {
	          line: 263,
	          column: 25
	        }
	      },
	      '136': {
	        start: {
	          line: 264,
	          column: 17
	        },
	        end: {
	          line: 264,
	          column: 43
	        }
	      },
	      '137': {
	        start: {
	          line: 265,
	          column: 4
	        },
	        end: {
	          line: 265,
	          column: 34
	        }
	      },
	      '138': {
	        start: {
	          line: 267,
	          column: 4
	        },
	        end: {
	          line: 278,
	          column: 5
	        }
	      },
	      '139': {
	        start: {
	          line: 268,
	          column: 6
	        },
	        end: {
	          line: 268,
	          column: 57
	        }
	      },
	      '140': {
	        start: {
	          line: 270,
	          column: 6
	        },
	        end: {
	          line: 270,
	          column: 27
	        }
	      },
	      '141': {
	        start: {
	          line: 271,
	          column: 6
	        },
	        end: {
	          line: 271,
	          column: 36
	        }
	      },
	      '142': {
	        start: {
	          line: 272,
	          column: 6
	        },
	        end: {
	          line: 276,
	          column: 7
	        }
	      },
	      '143': {
	        start: {
	          line: 273,
	          column: 8
	        },
	        end: {
	          line: 275,
	          column: 11
	        }
	      },
	      '144': {
	        start: {
	          line: 274,
	          column: 10
	        },
	        end: {
	          line: 274,
	          column: 37
	        }
	      },
	      '145': {
	        start: {
	          line: 277,
	          column: 6
	        },
	        end: {
	          line: 277,
	          column: 37
	        }
	      },
	      '146': {
	        start: {
	          line: 279,
	          column: 4
	        },
	        end: {
	          line: 279,
	          column: 60
	        }
	      },
	      '147': {
	        start: {
	          line: 280,
	          column: 4
	        },
	        end: {
	          line: 280,
	          column: 34
	        }
	      },
	      '148': {
	        start: {
	          line: 284,
	          column: 4
	        },
	        end: {
	          line: 284,
	          column: 24
	        }
	      },
	      '149': {
	        start: {
	          line: 285,
	          column: 4
	        },
	        end: {
	          line: 287,
	          column: 5
	        }
	      },
	      '150': {
	        start: {
	          line: 286,
	          column: 6
	        },
	        end: {
	          line: 286,
	          column: 32
	        }
	      },
	      '151': {
	        start: {
	          line: 288,
	          column: 4
	        },
	        end: {
	          line: 288,
	          column: 27
	        }
	      },
	      '152': {
	        start: {
	          line: 292,
	          column: 0
	        },
	        end: {
	          line: 292,
	          column: 47
	        }
	      },
	      '153': {
	        start: {
	          line: 293,
	          column: 0
	        },
	        end: {
	          line: 293,
	          column: 52
	        }
	      },
	      '154': {
	        start: {
	          line: 294,
	          column: 0
	        },
	        end: {
	          line: 294,
	          column: 55
	        }
	      },
	      '155': {
	        start: {
	          line: 295,
	          column: 0
	        },
	        end: {
	          line: 295,
	          column: 120
	        }
	      },
	      '156': {
	        start: {
	          line: 297,
	          column: 0
	        },
	        end: {
	          line: 299,
	          column: 1
	        }
	      },
	      '157': {
	        start: {
	          line: 298,
	          column: 4
	        },
	        end: {
	          line: 298,
	          column: 70
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 9,
	            column: 2
	          },
	          end: {
	            line: 9,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 9,
	            column: 36
	          },
	          end: {
	            line: 33,
	            column: 3
	          }
	        },
	        line: 9
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 11,
	            column: 27
	          },
	          end: {
	            line: 11,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 11,
	            column: 34
	          },
	          end: {
	            line: 13,
	            column: 5
	          }
	        },
	        line: 11
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 22,
	            column: 33
	          },
	          end: {
	            line: 22,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 22,
	            column: 39
	          },
	          end: {
	            line: 26,
	            column: 5
	          }
	        },
	        line: 22
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 28,
	            column: 31
	          },
	          end: {
	            line: 28,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 28,
	            column: 37
	          },
	          end: {
	            line: 32,
	            column: 5
	          }
	        },
	        line: 28
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 35,
	            column: 2
	          },
	          end: {
	            line: 35,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 35,
	            column: 18
	          },
	          end: {
	            line: 37,
	            column: 3
	          }
	        },
	        line: 35
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 39,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 39,
	            column: 18
	          },
	          end: {
	            line: 65,
	            column: 3
	          }
	        },
	        line: 39
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 67,
	            column: 2
	          },
	          end: {
	            line: 67,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 67,
	            column: 23
	          },
	          end: {
	            line: 93,
	            column: 3
	          }
	        },
	        line: 67
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 95,
	            column: 2
	          },
	          end: {
	            line: 95,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 95,
	            column: 18
	          },
	          end: {
	            line: 102,
	            column: 3
	          }
	        },
	        line: 95
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 104,
	            column: 2
	          },
	          end: {
	            line: 104,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 104,
	            column: 33
	          },
	          end: {
	            line: 110,
	            column: 3
	          }
	        },
	        line: 104
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 112,
	            column: 2
	          },
	          end: {
	            line: 112,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 112,
	            column: 33
	          },
	          end: {
	            line: 122,
	            column: 3
	          }
	        },
	        line: 112
	      },
	      '10': {
	        name: '(anonymous_10)',
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
	            column: 15
	          },
	          end: {
	            line: 133,
	            column: 3
	          }
	        },
	        line: 124
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 135,
	            column: 2
	          },
	          end: {
	            line: 135,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 135,
	            column: 13
	          },
	          end: {
	            line: 142,
	            column: 3
	          }
	        },
	        line: 135
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 144,
	            column: 2
	          },
	          end: {
	            line: 144,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 144,
	            column: 28
	          },
	          end: {
	            line: 231,
	            column: 3
	          }
	        },
	        line: 144
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 233,
	            column: 2
	          },
	          end: {
	            line: 233,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 233,
	            column: 27
	          },
	          end: {
	            line: 247,
	            column: 3
	          }
	        },
	        line: 233
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 249,
	            column: 2
	          },
	          end: {
	            line: 249,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 249,
	            column: 27
	          },
	          end: {
	            line: 256,
	            column: 3
	          }
	        },
	        line: 249
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 258,
	            column: 2
	          },
	          end: {
	            line: 258,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 258,
	            column: 16
	          },
	          end: {
	            line: 260,
	            column: 3
	          }
	        },
	        line: 258
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 262,
	            column: 2
	          },
	          end: {
	            line: 262,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 262,
	            column: 21
	          },
	          end: {
	            line: 281,
	            column: 3
	          }
	        },
	        line: 262
	      },
	      '17': {
	        name: '(anonymous_17)',
	        decl: {
	          start: {
	            line: 273,
	            column: 35
	          },
	          end: {
	            line: 273,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 273,
	            column: 47
	          },
	          end: {
	            line: 275,
	            column: 9
	          }
	        },
	        line: 273
	      },
	      '18': {
	        name: '(anonymous_18)',
	        decl: {
	          start: {
	            line: 283,
	            column: 2
	          },
	          end: {
	            line: 283,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 283,
	            column: 16
	          },
	          end: {
	            line: 289,
	            column: 3
	          }
	        },
	        line: 283
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 9,
	            column: 22
	          },
	          end: {
	            line: 9,
	            column: 34
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 9,
	            column: 32
	          },
	          end: {
	            line: 9,
	            column: 34
	          }
	        }],
	        line: 9
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 23,
	            column: 6
	          },
	          end: {
	            line: 25,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 23,
	            column: 6
	          },
	          end: {
	            line: 25,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 23,
	            column: 6
	          },
	          end: {
	            line: 25,
	            column: 7
	          }
	        }],
	        line: 23
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 23,
	            column: 10
	          },
	          end: {
	            line: 23,
	            column: 45
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 23,
	            column: 10
	          },
	          end: {
	            line: 23,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 23,
	            column: 26
	          },
	          end: {
	            line: 23,
	            column: 45
	          }
	        }],
	        line: 23
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 29,
	            column: 6
	          },
	          end: {
	            line: 31,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 29,
	            column: 6
	          },
	          end: {
	            line: 31,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 29,
	            column: 6
	          },
	          end: {
	            line: 31,
	            column: 7
	          }
	        }],
	        line: 29
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 29,
	            column: 10
	          },
	          end: {
	            line: 29,
	            column: 41
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 29,
	            column: 10
	          },
	          end: {
	            line: 29,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 29,
	            column: 26
	          },
	          end: {
	            line: 29,
	            column: 41
	          }
	        }],
	        line: 29
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 44,
	            column: 23
	          },
	          end: {
	            line: 44,
	            column: 75
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 44,
	            column: 23
	          },
	          end: {
	            line: 44,
	            column: 39
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 43
	          },
	          end: {
	            line: 44,
	            column: 69
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 73
	          },
	          end: {
	            line: 44,
	            column: 75
	          }
	        }],
	        line: 44
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 45,
	            column: 22
	          },
	          end: {
	            line: 45,
	            column: 78
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 45,
	            column: 22
	          },
	          end: {
	            line: 45,
	            column: 47
	          }
	        }, {
	          start: {
	            line: 45,
	            column: 51
	          },
	          end: {
	            line: 45,
	            column: 78
	          }
	        }],
	        line: 45
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 47,
	            column: 4
	          },
	          end: {
	            line: 49,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 47,
	            column: 4
	          },
	          end: {
	            line: 49,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 47,
	            column: 4
	          },
	          end: {
	            line: 49,
	            column: 5
	          }
	        }],
	        line: 47
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 47,
	            column: 8
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
	            column: 8
	          },
	          end: {
	            line: 47,
	            column: 18
	          }
	        }, {
	          start: {
	            line: 47,
	            column: 22
	          },
	          end: {
	            line: 47,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 47,
	            column: 49
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
	            line: 50,
	            column: 4
	          },
	          end: {
	            line: 58,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 50,
	            column: 4
	          },
	          end: {
	            line: 58,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 50,
	            column: 4
	          },
	          end: {
	            line: 58,
	            column: 5
	          }
	        }],
	        line: 50
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 50,
	            column: 8
	          },
	          end: {
	            line: 50,
	            column: 48
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 50,
	            column: 8
	          },
	          end: {
	            line: 50,
	            column: 20
	          }
	        }, {
	          start: {
	            line: 50,
	            column: 24
	          },
	          end: {
	            line: 50,
	            column: 48
	          }
	        }],
	        line: 50
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 52,
	            column: 6
	          },
	          end: {
	            line: 55,
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
	            line: 55,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 52,
	            column: 6
	          },
	          end: {
	            line: 55,
	            column: 7
	          }
	        }],
	        line: 52
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 61,
	            column: 12
	          },
	          end: {
	            line: 61,
	            column: 82
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 61,
	            column: 12
	          },
	          end: {
	            line: 61,
	            column: 31
	          }
	        }, {
	          start: {
	            line: 61,
	            column: 35
	          },
	          end: {
	            line: 61,
	            column: 82
	          }
	        }],
	        line: 61
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 74,
	            column: 4
	          },
	          end: {
	            line: 91,
	            column: 5
	          }
	        },
	        type: 'switch',
	        locations: [{
	          start: {
	            line: 75,
	            column: 4
	          },
	          end: {
	            line: 75,
	            column: 51
	          }
	        }, {
	          start: {
	            line: 76,
	            column: 4
	          },
	          end: {
	            line: 76,
	            column: 49
	          }
	        }, {
	          start: {
	            line: 77,
	            column: 4
	          },
	          end: {
	            line: 77,
	            column: 56
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
	            column: 49
	          }
	        }, {
	          start: {
	            line: 80,
	            column: 4
	          },
	          end: {
	            line: 80,
	            column: 52
	          }
	        }, {
	          start: {
	            line: 81,
	            column: 4
	          },
	          end: {
	            line: 81,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 82,
	            column: 4
	          },
	          end: {
	            line: 82,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 83,
	            column: 4
	          },
	          end: {
	            line: 85,
	            column: 12
	          }
	        }, {
	          start: {
	            line: 86,
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
	            line: 90,
	            column: 12
	          }
	        }],
	        line: 74
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 96,
	            column: 4
	          },
	          end: {
	            line: 100,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 96,
	            column: 4
	          },
	          end: {
	            line: 100,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 96,
	            column: 4
	          },
	          end: {
	            line: 100,
	            column: 5
	          }
	        }],
	        line: 96
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 105,
	            column: 4
	          },
	          end: {
	            line: 108,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 105,
	            column: 4
	          },
	          end: {
	            line: 108,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 105,
	            column: 4
	          },
	          end: {
	            line: 108,
	            column: 5
	          }
	        }],
	        line: 105
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 113,
	            column: 4
	          },
	          end: {
	            line: 114,
	            column: 15
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 113,
	            column: 4
	          },
	          end: {
	            line: 114,
	            column: 15
	          }
	        }, {
	          start: {
	            line: 113,
	            column: 4
	          },
	          end: {
	            line: 114,
	            column: 15
	          }
	        }],
	        line: 113
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 116,
	            column: 4
	          },
	          end: {
	            line: 119,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 116,
	            column: 4
	          },
	          end: {
	            line: 119,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 116,
	            column: 4
	          },
	          end: {
	            line: 119,
	            column: 5
	          }
	        }],
	        line: 116
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 125,
	            column: 4
	          },
	          end: {
	            line: 127,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 125,
	            column: 4
	          },
	          end: {
	            line: 127,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 125,
	            column: 4
	          },
	          end: {
	            line: 127,
	            column: 5
	          }
	        }],
	        line: 125
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 129,
	            column: 25
	          },
	          end: {
	            line: 132,
	            column: 5
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 129,
	            column: 25
	          },
	          end: {
	            line: 129,
	            column: 48
	          }
	        }, {
	          start: {
	            line: 129,
	            column: 52
	          },
	          end: {
	            line: 132,
	            column: 5
	          }
	        }],
	        line: 129
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 138,
	            column: 4
	          },
	          end: {
	            line: 140,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 138,
	            column: 4
	          },
	          end: {
	            line: 140,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 138,
	            column: 4
	          },
	          end: {
	            line: 140,
	            column: 5
	          }
	        }],
	        line: 138
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 158,
	            column: 4
	          },
	          end: {
	            line: 164,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 158,
	            column: 4
	          },
	          end: {
	            line: 164,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 158,
	            column: 4
	          },
	          end: {
	            line: 164,
	            column: 5
	          }
	        }],
	        line: 158
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 168,
	            column: 4
	          },
	          end: {
	            line: 171,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 168,
	            column: 4
	          },
	          end: {
	            line: 171,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 168,
	            column: 4
	          },
	          end: {
	            line: 171,
	            column: 5
	          }
	        }],
	        line: 168
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 182,
	            column: 4
	          },
	          end: {
	            line: 200,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 182,
	            column: 4
	          },
	          end: {
	            line: 200,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 182,
	            column: 4
	          },
	          end: {
	            line: 200,
	            column: 5
	          }
	        }],
	        line: 182
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 185,
	            column: 24
	          },
	          end: {
	            line: 185,
	            column: 107
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 185,
	            column: 24
	          },
	          end: {
	            line: 185,
	            column: 38
	          }
	        }, {
	          start: {
	            line: 185,
	            column: 42
	          },
	          end: {
	            line: 185,
	            column: 71
	          }
	        }, {
	          start: {
	            line: 185,
	            column: 75
	          },
	          end: {
	            line: 185,
	            column: 107
	          }
	        }],
	        line: 185
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 188,
	            column: 31
	          },
	          end: {
	            line: 188,
	            column: 96
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 188,
	            column: 47
	          },
	          end: {
	            line: 188,
	            column: 64
	          }
	        }, {
	          start: {
	            line: 188,
	            column: 67
	          },
	          end: {
	            line: 188,
	            column: 96
	          }
	        }],
	        line: 188
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 204,
	            column: 6
	          },
	          end: {
	            line: 215,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 204,
	            column: 6
	          },
	          end: {
	            line: 215,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 204,
	            column: 6
	          },
	          end: {
	            line: 215,
	            column: 7
	          }
	        }],
	        line: 204
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 220,
	            column: 4
	          },
	          end: {
	            line: 222,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 220,
	            column: 4
	          },
	          end: {
	            line: 222,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 220,
	            column: 4
	          },
	          end: {
	            line: 222,
	            column: 5
	          }
	        }],
	        line: 220
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 250,
	            column: 4
	          },
	          end: {
	            line: 252,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 250,
	            column: 4
	          },
	          end: {
	            line: 252,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 250,
	            column: 4
	          },
	          end: {
	            line: 252,
	            column: 5
	          }
	        }],
	        line: 250
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 253,
	            column: 4
	          },
	          end: {
	            line: 255,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 253,
	            column: 4
	          },
	          end: {
	            line: 255,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 253,
	            column: 4
	          },
	          end: {
	            line: 255,
	            column: 5
	          }
	        }],
	        line: 253
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 267,
	            column: 4
	          },
	          end: {
	            line: 278,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 267,
	            column: 4
	          },
	          end: {
	            line: 278,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 267,
	            column: 4
	          },
	          end: {
	            line: 278,
	            column: 5
	          }
	        }],
	        line: 267
	      },
	      '31': {
	        loc: {
	          start: {
	            line: 272,
	            column: 6
	          },
	          end: {
	            line: 276,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 272,
	            column: 6
	          },
	          end: {
	            line: 276,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 272,
	            column: 6
	          },
	          end: {
	            line: 276,
	            column: 7
	          }
	        }],
	        line: 272
	      },
	      '32': {
	        loc: {
	          start: {
	            line: 285,
	            column: 4
	          },
	          end: {
	            line: 287,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 285,
	            column: 4
	          },
	          end: {
	            line: 287,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 285,
	            column: 4
	          },
	          end: {
	            line: 287,
	            column: 5
	          }
	        }],
	        line: 285
	      },
	      '33': {
	        loc: {
	          start: {
	            line: 297,
	            column: 0
	          },
	          end: {
	            line: 299,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 297,
	            column: 0
	          },
	          end: {
	            line: 299,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 297,
	            column: 0
	          },
	          end: {
	            line: 299,
	            column: 1
	          }
	        }],
	        line: 297
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
	      '157': 0
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
	      '18': 0
	    },
	    b: {
	      '0': [0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0, 0],
	      '9': [0, 0],
	      '10': [0, 0],
	      '11': [0, 0],
	      '12': [0, 0],
	      '13': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
	      '24': [0, 0, 0],
	      '25': [0, 0],
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
	var Component = (cov_1iiyehkoov.s[0]++, videojs.getComponent('Component'));
	var ControlBar = (cov_1iiyehkoov.s[1]++, videojs.getComponent('ControlBar'));
	var Button = (cov_1iiyehkoov.s[2]++, videojs.getComponent('Button'));
	var hasReceiver = (cov_1iiyehkoov.s[3]++, false);

	var ChromecastButton = /*#__PURE__*/function (_Button) {
	  inheritsLoose(ChromecastButton, _Button);

	  function ChromecastButton(player, options) {
	    var _this;

	    if (options === void 0) {
	      options = (cov_1iiyehkoov.b[0][0]++, {});
	    }

	    cov_1iiyehkoov.f[0]++;
	    var allowedOptions = (cov_1iiyehkoov.s[4]++, ["appId", "altSource", "onStop", "onError"]);
	    cov_1iiyehkoov.s[5]++;
	    allowedOptions.forEach(function (opt) {
	      cov_1iiyehkoov.f[1]++;
	      cov_1iiyehkoov.s[6]++;
	      options[opt] = player.options_.chromecast[opt];
	    });
	    cov_1iiyehkoov.s[7]++;
	    _this = _Button.call(this, player, options) || this;
	    cov_1iiyehkoov.s[8]++;

	    _this.hide();

	    cov_1iiyehkoov.s[9]++;

	    _this.initializeApi();

	    cov_1iiyehkoov.s[10]++;
	    _this.source = null;
	    cov_1iiyehkoov.s[11]++;
	    _this.tryingReconnect = 0;
	    cov_1iiyehkoov.s[12]++;
	    player.chromecast = assertThisInitialized(_this);
	    cov_1iiyehkoov.s[13]++;

	    _this.on(player, 'loadstart', function () {
	      cov_1iiyehkoov.f[2]++;
	      cov_1iiyehkoov.s[14]++;

	      if ((cov_1iiyehkoov.b[2][0]++, _this.casting) && (cov_1iiyehkoov.b[2][1]++, _this.apiInitialized)) {
	        cov_1iiyehkoov.b[1][0]++;
	        cov_1iiyehkoov.s[15]++;

	        _this.onSessionSuccess(_this.apiSession);
	      } else {
	        cov_1iiyehkoov.b[1][1]++;
	      }
	    });

	    cov_1iiyehkoov.s[16]++;

	    _this.on(player, 'dispose', function () {
	      cov_1iiyehkoov.f[3]++;
	      cov_1iiyehkoov.s[17]++;

	      if ((cov_1iiyehkoov.b[4][0]++, _this.casting) && (cov_1iiyehkoov.b[4][1]++, _this.apiSession)) {
	        cov_1iiyehkoov.b[3][0]++;
	        cov_1iiyehkoov.s[18]++;

	        _this.apiSession.stop(null, null);
	      } else {
	        cov_1iiyehkoov.b[3][1]++;
	      }
	    });

	    return _this;
	  }

	  var _proto = ChromecastButton.prototype;

	  _proto.buildCSSClass = function buildCSSClass() {
	    cov_1iiyehkoov.f[4]++;
	    cov_1iiyehkoov.s[19]++;
	    return "vjs-chromecast-button " + _Button.prototype.buildCSSClass.call(this, this);
	  };

	  _proto.initializeApi = function initializeApi() {
	    cov_1iiyehkoov.f[5]++;
	    var apiConfig;
	    var appId;
	    var sessionRequest;
	    var user_agent = (cov_1iiyehkoov.s[20]++, (cov_1iiyehkoov.b[5][0]++, window.navigator) && (cov_1iiyehkoov.b[5][1]++, window.navigator.userAgent) || (cov_1iiyehkoov.b[5][2]++, ''));
	    var is_chrome = (cov_1iiyehkoov.s[21]++, (cov_1iiyehkoov.b[6][0]++, videojs.browser.IS_CHROME) || (cov_1iiyehkoov.b[6][1]++, /CriOS/i.test(user_agent)));
	    cov_1iiyehkoov.s[22]++;

	    if ((cov_1iiyehkoov.b[8][0]++, !is_chrome) || (cov_1iiyehkoov.b[8][1]++, videojs.browser.IS_EDGE) || (cov_1iiyehkoov.b[8][2]++, typeof chrome === 'undefined')) {
	      cov_1iiyehkoov.b[7][0]++;
	      cov_1iiyehkoov.s[23]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[7][1]++;
	    }

	    cov_1iiyehkoov.s[24]++;

	    if ((cov_1iiyehkoov.b[10][0]++, !chrome.cast) || (cov_1iiyehkoov.b[10][1]++, !chrome.cast.isAvailable)) {
	      cov_1iiyehkoov.b[9][0]++;
	      cov_1iiyehkoov.s[25]++;
	      videojs.log('Cast APIs not available');
	      cov_1iiyehkoov.s[26]++;

	      if (this.tryingReconnect < 10) {
	        cov_1iiyehkoov.b[11][0]++;
	        cov_1iiyehkoov.s[27]++;
	        this.setTimeout(this.initializeApi, 1000);
	        cov_1iiyehkoov.s[28]++;
	        ++this.tryingReconnect;
	      } else {
	        cov_1iiyehkoov.b[11][1]++;
	      }

	      cov_1iiyehkoov.s[29]++;
	      videojs.log('Cast APIs not available. Max reconnect attempt');
	      cov_1iiyehkoov.s[30]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[9][1]++;
	    }

	    cov_1iiyehkoov.s[31]++;
	    videojs.log('Cast APIs are available');
	    cov_1iiyehkoov.s[32]++;
	    appId = (cov_1iiyehkoov.b[12][0]++, this.options_.appId) || (cov_1iiyehkoov.b[12][1]++, chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
	    cov_1iiyehkoov.s[33]++;
	    sessionRequest = new chrome.cast.SessionRequest(appId);
	    cov_1iiyehkoov.s[34]++;
	    apiConfig = new chrome.cast.ApiConfig(sessionRequest, this.sessionJoinedListener.bind(this), this.receiverListener.bind(this));
	    cov_1iiyehkoov.s[35]++;
	    return chrome.cast.initialize(apiConfig, this.onInitSuccess.bind(this), this.castError.bind(this));
	  };

	  _proto.castError = function castError(_castError) {
	    cov_1iiyehkoov.f[6]++;
	    var error = (cov_1iiyehkoov.s[36]++, {
	      code: _castError.code,
	      message: _castError.description
	    });
	    cov_1iiyehkoov.s[37]++;

	    switch (_castError.code) {
	      case chrome.cast.ErrorCode.API_NOT_INITIALIZED:
	        cov_1iiyehkoov.b[13][0]++;

	      case chrome.cast.ErrorCode.EXTENSION_MISSING:
	        cov_1iiyehkoov.b[13][1]++;

	      case chrome.cast.ErrorCode.EXTENSION_NOT_COMPATIBLE:
	        cov_1iiyehkoov.b[13][2]++;

	      case chrome.cast.ErrorCode.INVALID_PARAMETER:
	        cov_1iiyehkoov.b[13][3]++;

	      case chrome.cast.ErrorCode.LOAD_MEDIA_FAILED:
	        cov_1iiyehkoov.b[13][4]++;

	      case chrome.cast.ErrorCode.RECEIVER_UNAVAILABLE:
	        cov_1iiyehkoov.b[13][5]++;

	      case chrome.cast.ErrorCode.SESSION_ERROR:
	        cov_1iiyehkoov.b[13][6]++;

	      case chrome.cast.ErrorCode.CHANNEL_ERROR:
	        cov_1iiyehkoov.b[13][7]++;

	      case chrome.cast.ErrorCode.TIMEOUT:
	        cov_1iiyehkoov.b[13][8]++;
	        cov_1iiyehkoov.s[38]++;
	        this.addClass('error');
	        cov_1iiyehkoov.s[39]++;
	        break;

	      case chrome.cast.ErrorCode.CANCEL:
	        cov_1iiyehkoov.b[13][9]++;
	        cov_1iiyehkoov.s[40]++;
	        break;

	      default:
	        cov_1iiyehkoov.b[13][10]++;
	        cov_1iiyehkoov.s[41]++;
	        this.player_.error(error);
	        cov_1iiyehkoov.s[42]++;
	        break;
	    }

	    cov_1iiyehkoov.s[43]++;
	    return videojs.log('Cast Error: ' + JSON.stringify(_castError));
	  };

	  _proto.onInitSuccess = function onInitSuccess() {
	    cov_1iiyehkoov.f[7]++;
	    cov_1iiyehkoov.s[44]++;

	    if (hasReceiver) {
	      cov_1iiyehkoov.b[14][0]++;
	      cov_1iiyehkoov.s[45]++;
	      this.show();
	    } else {
	      cov_1iiyehkoov.b[14][1]++;
	      cov_1iiyehkoov.s[46]++;
	      this.hide();
	    }

	    cov_1iiyehkoov.s[47]++;
	    return this.apiInitialized = true;
	  };

	  _proto.sessionJoinedListener = function sessionJoinedListener(session) {
	    cov_1iiyehkoov.f[8]++;
	    cov_1iiyehkoov.s[48]++;

	    if (session.media.length) {
	      cov_1iiyehkoov.b[15][0]++;
	      cov_1iiyehkoov.s[49]++;
	      this.apiSession = session;
	      cov_1iiyehkoov.s[50]++;
	      this.onMediaDiscovered(session.media[0]);
	    } else {
	      cov_1iiyehkoov.b[15][1]++;
	    }

	    cov_1iiyehkoov.s[51]++;
	    return videojs.log('Session joined');
	  };

	  _proto.receiverListener = function receiverListener(availability) {
	    cov_1iiyehkoov.f[9]++;
	    cov_1iiyehkoov.s[52]++;

	    if (this.disposed) {
	      cov_1iiyehkoov.b[16][0]++;
	      cov_1iiyehkoov.s[53]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[16][1]++;
	    }

	    cov_1iiyehkoov.s[54]++;

	    if (availability === 'available') {
	      cov_1iiyehkoov.b[17][0]++;
	      cov_1iiyehkoov.s[55]++;
	      hasReceiver = true;
	      cov_1iiyehkoov.s[56]++;
	      return this.show();
	    } else {
	      cov_1iiyehkoov.b[17][1]++;
	    }

	    cov_1iiyehkoov.s[57]++;
	    hasReceiver = false;
	    cov_1iiyehkoov.s[58]++;
	    return this.hide();
	  };

	  _proto.findSource = function findSource() {
	    cov_1iiyehkoov.f[10]++;
	    cov_1iiyehkoov.s[59]++;

	    if (typeof this.options_.altSource == "function") {
	      cov_1iiyehkoov.b[18][0]++;
	      cov_1iiyehkoov.s[60]++;
	      return this.source = this.options_.altSource.call(this);
	    } else {
	      cov_1iiyehkoov.b[18][1]++;
	    }

	    cov_1iiyehkoov.s[61]++;
	    return this.source = (cov_1iiyehkoov.b[19][0]++, this.options_.altSource) || (cov_1iiyehkoov.b[19][1]++, {
	      src: this.player_.cache_.src,
	      type: this.player_.currentType()
	    });
	  };

	  _proto.doLaunch = function doLaunch() {
	    cov_1iiyehkoov.f[11]++;
	    cov_1iiyehkoov.s[62]++;
	    this.findSource();
	    cov_1iiyehkoov.s[63]++;
	    videojs.log('Cast video: ' + this.player_.cache_.src);
	    cov_1iiyehkoov.s[64]++;

	    if (this.apiInitialized) {
	      cov_1iiyehkoov.b[20][0]++;
	      cov_1iiyehkoov.s[65]++;
	      return chrome.cast.requestSession(this.onSessionSuccess.bind(this), this.castError.bind(this));
	    } else {
	      cov_1iiyehkoov.b[20][1]++;
	    }

	    cov_1iiyehkoov.s[66]++;
	    return videojs.log('Session not initialized');
	  };

	  _proto.onSessionSuccess = function onSessionSuccess(session) {
	    cov_1iiyehkoov.f[12]++;
	    var image;
	    var key;
	    var loadRequest;
	    var mediaInfo;
	    var ref;
	    var value;
	    cov_1iiyehkoov.s[67]++;
	    this.apiSession = session;
	    cov_1iiyehkoov.s[68]++;
	    videojs.log('Session initialized: ' + session.sessionId + ' source : ' + this.source.src + ' type : ' + this.source.type);
	    cov_1iiyehkoov.s[69]++;
	    mediaInfo = new chrome.cast.media.MediaInfo(this.source.src, this.source.type);
	    cov_1iiyehkoov.s[70]++;
	    mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata();
	    cov_1iiyehkoov.s[71]++;

	    if (this.options_.playerOptions.chromecast.metadata) {
	      cov_1iiyehkoov.b[21][0]++;
	      cov_1iiyehkoov.s[72]++;
	      ref = this.options_.playerOptions.chromecast.metadata;
	      cov_1iiyehkoov.s[73]++;

	      for (key in ref) {
	        cov_1iiyehkoov.s[74]++;
	        value = ref[key];
	        cov_1iiyehkoov.s[75]++;
	        mediaInfo.metadata[key] = value;
	      }
	    } else {
	      cov_1iiyehkoov.b[21][1]++;
	    }

	    var poster = (cov_1iiyehkoov.s[76]++, this.player().poster());
	    cov_1iiyehkoov.s[77]++;

	    if (poster) {
	      cov_1iiyehkoov.b[22][0]++;
	      cov_1iiyehkoov.s[78]++;
	      image = new chrome.cast.Image(poster);
	      cov_1iiyehkoov.s[79]++;
	      mediaInfo.metadata.images = [image];
	    } else {
	      cov_1iiyehkoov.b[22][1]++;
	    }

	    var plTracks = (cov_1iiyehkoov.s[80]++, this.player().textTracks());
	    var remotePlTracks = (cov_1iiyehkoov.s[81]++, this.player().remoteTextTrackEls());
	    var tracks = (cov_1iiyehkoov.s[82]++, []);
	    var i = (cov_1iiyehkoov.s[83]++, 0);
	    var remotePlTrack;
	    var plTrack;
	    var trackId = (cov_1iiyehkoov.s[84]++, 0);
	    var track;
	    cov_1iiyehkoov.s[85]++;

	    if (plTracks) {
	      cov_1iiyehkoov.b[23][0]++;
	      cov_1iiyehkoov.s[86]++;

	      for (i = 0; i < plTracks.length; i++) {
	        cov_1iiyehkoov.s[87]++;
	        plTrack = plTracks.tracks_[i];
	        cov_1iiyehkoov.s[88]++;
	        remotePlTrack = (cov_1iiyehkoov.b[24][0]++, remotePlTracks) && (cov_1iiyehkoov.b[24][1]++, remotePlTracks.trackElements_) && (cov_1iiyehkoov.b[24][2]++, remotePlTracks.trackElements_[i]);
	        cov_1iiyehkoov.s[89]++;
	        trackId++;
	        cov_1iiyehkoov.s[90]++;
	        track = new chrome.cast.media.Track(trackId, chrome.cast.media.TrackType.TEXT);
	        cov_1iiyehkoov.s[91]++;
	        track.trackContentId = remotePlTrack ? (cov_1iiyehkoov.b[25][0]++, remotePlTrack.src) : (cov_1iiyehkoov.b[25][1]++, 'caption_' + plTrack.language);
	        cov_1iiyehkoov.s[92]++;
	        track.subtype = chrome.cast.media.TextTrackType.CAPTIONS;
	        cov_1iiyehkoov.s[93]++;
	        track.name = plTrack.label;
	        cov_1iiyehkoov.s[94]++;
	        track.language = plTrack.language;
	        cov_1iiyehkoov.s[95]++;
	        track.customData = null;
	        cov_1iiyehkoov.s[96]++;
	        tracks.push(track);
	      }

	      cov_1iiyehkoov.s[97]++;
	      mediaInfo.textTrackStyle = new chrome.cast.media.TextTrackStyle();
	      cov_1iiyehkoov.s[98]++;
	      mediaInfo.textTrackStyle.foregroundColor = '#FFFFFF';
	      cov_1iiyehkoov.s[99]++;
	      mediaInfo.textTrackStyle.backgroundColor = '#00000060';
	      cov_1iiyehkoov.s[100]++;
	      mediaInfo.textTrackStyle.edgeType = chrome.cast.media.TextTrackEdgeType.DROP_SHADOW;
	      cov_1iiyehkoov.s[101]++;
	      mediaInfo.textTrackStyle.windowType = chrome.cast.media.TextTrackWindowType.ROUNDED_CORNERS;
	    } else {
	      cov_1iiyehkoov.b[23][1]++;
	    }

	    cov_1iiyehkoov.s[102]++;

	    try {
	      cov_1iiyehkoov.s[103]++;
	      plTracks = this.player().audioTracks();
	      cov_1iiyehkoov.s[104]++;

	      if (plTracks) {
	        cov_1iiyehkoov.b[26][0]++;
	        cov_1iiyehkoov.s[105]++;

	        for (i = 0; i < plTracks.length; i++) {
	          cov_1iiyehkoov.s[106]++;
	          plTrack = plTracks.tracks_[i];
	          cov_1iiyehkoov.s[107]++;
	          trackId++;
	          cov_1iiyehkoov.s[108]++;
	          track = new chrome.cast.media.Track(trackId, chrome.cast.media.TrackType.AUDIO);
	          cov_1iiyehkoov.s[109]++;
	          track.subtype = null;
	          cov_1iiyehkoov.s[110]++;
	          track.name = plTrack.label;
	          cov_1iiyehkoov.s[111]++;
	          track.language = plTrack.language;
	          cov_1iiyehkoov.s[112]++;
	          track.customData = null;
	          cov_1iiyehkoov.s[113]++;
	          tracks.push(track);
	        }
	      } else {
	        cov_1iiyehkoov.b[26][1]++;
	      }
	    } catch (e) {
	      cov_1iiyehkoov.s[114]++;
	      videojs.log('get player audioTracks fail' + e);
	    }

	    cov_1iiyehkoov.s[115]++;

	    if (tracks.length) {
	      cov_1iiyehkoov.b[27][0]++;
	      cov_1iiyehkoov.s[116]++;
	      mediaInfo.tracks = tracks;
	    } else {
	      cov_1iiyehkoov.b[27][1]++;
	    }

	    cov_1iiyehkoov.s[117]++;
	    loadRequest = new chrome.cast.media.LoadRequest(mediaInfo);
	    cov_1iiyehkoov.s[118]++;
	    loadRequest.autoplay = true;
	    cov_1iiyehkoov.s[119]++;
	    loadRequest.currentTime = this.player_.currentTime();
	    cov_1iiyehkoov.s[120]++;
	    this.apiSession.loadMedia(loadRequest, this.onMediaDiscovered.bind(this), this.castError.bind(this));
	    cov_1iiyehkoov.s[121]++;
	    this.apiSession.addUpdateListener(this.onSessionUpdate.bind(this));
	  };

	  _proto.onMediaDiscovered = function onMediaDiscovered(media) {
	    cov_1iiyehkoov.f[13]++;
	    cov_1iiyehkoov.s[122]++;
	    console.log(this.player_);
	    cov_1iiyehkoov.s[123]++;
	    this.player_.loadTech_('Chromecast', {
	      type: 'cast',
	      apiMedia: media,
	      apiSession: this.apiSession
	    });
	    cov_1iiyehkoov.s[124]++;
	    this.casting = true;
	    cov_1iiyehkoov.s[125]++;
	    this.inactivityTimeout = this.player_.options_.inactivityTimeout;
	    cov_1iiyehkoov.s[126]++;
	    this.player_.options_.inactivityTimeout = 0;
	    cov_1iiyehkoov.s[127]++;
	    this.player_.userActive(true);
	    cov_1iiyehkoov.s[128]++;
	    this.addClass('connected');
	    cov_1iiyehkoov.s[129]++;
	    this.removeClass('error');
	  };

	  _proto.onSessionUpdate = function onSessionUpdate(isAlive) {
	    cov_1iiyehkoov.f[14]++;
	    cov_1iiyehkoov.s[130]++;

	    if (!this.player_.apiMedia) {
	      cov_1iiyehkoov.b[28][0]++;
	      cov_1iiyehkoov.s[131]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[28][1]++;
	    }

	    cov_1iiyehkoov.s[132]++;

	    if (!isAlive) {
	      cov_1iiyehkoov.b[29][0]++;
	      cov_1iiyehkoov.s[133]++;
	      return this.onStopAppSuccess();
	    } else {
	      cov_1iiyehkoov.b[29][1]++;
	    }
	  };

	  _proto.stopCasting = function stopCasting() {
	    cov_1iiyehkoov.f[15]++;
	    cov_1iiyehkoov.s[134]++;
	    return this.apiSession.stop(this.onStopAppSuccess.bind(this), this.castError.bind(this));
	  };

	  _proto.onStopAppSuccess = function onStopAppSuccess() {
	    cov_1iiyehkoov.f[16]++;
	    cov_1iiyehkoov.s[135]++;
	    this.casting = false;
	    var time = (cov_1iiyehkoov.s[136]++, this.player_.currentTime());
	    cov_1iiyehkoov.s[137]++;
	    this.removeClass('connected');
	    cov_1iiyehkoov.s[138]++;

	    if (this.options_.onStop) {
	      cov_1iiyehkoov.b[30][0]++;
	      cov_1iiyehkoov.s[139]++;
	      this.options_.onStop.call(this, this.source, time);
	    } else {
	      cov_1iiyehkoov.b[30][1]++;
	      cov_1iiyehkoov.s[140]++;
	      this.player_.reset();
	      cov_1iiyehkoov.s[141]++;
	      this.player_.src(this.source);
	      cov_1iiyehkoov.s[142]++;

	      if (!this.player_.paused()) {
	        cov_1iiyehkoov.b[31][0]++;
	        cov_1iiyehkoov.s[143]++;
	        this.player_.one('seeked', function () {
	          cov_1iiyehkoov.f[17]++;
	          cov_1iiyehkoov.s[144]++;
	          return this.player_.play();
	        });
	      } else {
	        cov_1iiyehkoov.b[31][1]++;
	      }

	      cov_1iiyehkoov.s[145]++;
	      this.player_.currentTime(time);
	    }

	    cov_1iiyehkoov.s[146]++;
	    this.player_.inactivityTimeout = this.inactivityTimeout;
	    cov_1iiyehkoov.s[147]++;
	    return this.apiSession = null;
	  };

	  _proto.handleClick = function handleClick() {
	    cov_1iiyehkoov.f[18]++;
	    cov_1iiyehkoov.s[148]++;

	    _Button.prototype.handleClick.call(this);

	    cov_1iiyehkoov.s[149]++;

	    if (this.casting) {
	      cov_1iiyehkoov.b[32][0]++;
	      cov_1iiyehkoov.s[150]++;
	      return this.stopCasting();
	    } else {
	      cov_1iiyehkoov.b[32][1]++;
	    }

	    cov_1iiyehkoov.s[151]++;
	    return this.doLaunch();
	  };

	  return ChromecastButton;
	}(Button);

	cov_1iiyehkoov.s[152]++;
	ChromecastButton.prototype.tryingReconnect = 0;
	cov_1iiyehkoov.s[153]++;
	ChromecastButton.prototype.inactivityTimeout = 2000;
	cov_1iiyehkoov.s[154]++;
	ChromecastButton.prototype.controlText_ = 'Chromecast';
	cov_1iiyehkoov.s[155]++;
	ControlBar.prototype.options_.children.splice(ControlBar.prototype.options_.children.length - 2, 0, 'chromecastButton');
	cov_1iiyehkoov.s[156]++;

	if (typeof Component.getComponent('ChromecastButton') === 'undefined') {
	  cov_1iiyehkoov.b[33][0]++;
	  cov_1iiyehkoov.s[157]++;
	  Component.registerComponent('ChromecastButton', ChromecastButton);
	} else {
	  cov_1iiyehkoov.b[33][1]++;
	}

	var cov_2q58cqsssn = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/tech/chromecast-tech.js',
	      hash = '3a802f109197ffb1e03b9ee0ae54d237e904cacb',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/tech/chromecast-tech.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 3,
	          column: 18
	        },
	        end: {
	          line: 3,
	          column: 51
	        }
	      },
	      '1': {
	        start: {
	          line: 4,
	          column: 13
	        },
	        end: {
	          line: 4,
	          column: 41
	        }
	      },
	      '2': {
	        start: {
	          line: 16,
	          column: 4
	        },
	        end: {
	          line: 16,
	          column: 26
	        }
	      },
	      '3': {
	        start: {
	          line: 17,
	          column: 4
	        },
	        end: {
	          line: 17,
	          column: 50
	        }
	      },
	      '4': {
	        start: {
	          line: 18,
	          column: 4
	        },
	        end: {
	          line: 18,
	          column: 54
	        }
	      },
	      '5': {
	        start: {
	          line: 19,
	          column: 4
	        },
	        end: {
	          line: 19,
	          column: 58
	        }
	      },
	      '6': {
	        start: {
	          line: 21,
	          column: 35
	        },
	        end: {
	          line: 21,
	          column: 70
	        }
	      },
	      '7': {
	        start: {
	          line: 22,
	          column: 31
	        },
	        end: {
	          line: 22,
	          column: 62
	        }
	      },
	      '8': {
	        start: {
	          line: 24,
	          column: 4
	        },
	        end: {
	          line: 24,
	          column: 62
	        }
	      },
	      '9': {
	        start: {
	          line: 25,
	          column: 4
	        },
	        end: {
	          line: 25,
	          column: 60
	        }
	      },
	      '10': {
	        start: {
	          line: 27,
	          column: 6
	        },
	        end: {
	          line: 32,
	          column: 7
	        }
	      },
	      '11': {
	        start: {
	          line: 28,
	          column: 10
	        },
	        end: {
	          line: 28,
	          column: 71
	        }
	      },
	      '12': {
	        start: {
	          line: 29,
	          column: 10
	        },
	        end: {
	          line: 29,
	          column: 69
	        }
	      },
	      '13': {
	        start: {
	          line: 30,
	          column: 10
	        },
	        end: {
	          line: 30,
	          column: 37
	        }
	      },
	      '14': {
	        start: {
	          line: 31,
	          column: 10
	        },
	        end: {
	          line: 31,
	          column: 38
	        }
	      },
	      '15': {
	        start: {
	          line: 34,
	          column: 17
	        },
	        end: {
	          line: 34,
	          column: 34
	        }
	      },
	      '16': {
	        start: {
	          line: 35,
	          column: 4
	        },
	        end: {
	          line: 44,
	          column: 5
	        }
	      },
	      '17': {
	        start: {
	          line: 36,
	          column: 28
	        },
	        end: {
	          line: 36,
	          column: 66
	        }
	      },
	      '18': {
	        start: {
	          line: 38,
	          column: 6
	        },
	        end: {
	          line: 38,
	          column: 55
	        }
	      },
	      '19': {
	        start: {
	          line: 39,
	          column: 6
	        },
	        end: {
	          line: 41,
	          column: 9
	        }
	      },
	      '20': {
	        start: {
	          line: 40,
	          column: 8
	        },
	        end: {
	          line: 40,
	          column: 60
	        }
	      },
	      '21': {
	        start: {
	          line: 43,
	          column: 6
	        },
	        end: {
	          line: 43,
	          column: 36
	        }
	      },
	      '22': {
	        start: {
	          line: 46,
	          column: 4
	        },
	        end: {
	          line: 59,
	          column: 5
	        }
	      },
	      '23': {
	        start: {
	          line: 47,
	          column: 6
	        },
	        end: {
	          line: 47,
	          column: 34
	        }
	      },
	      '24': {
	        start: {
	          line: 48,
	          column: 6
	        },
	        end: {
	          line: 56,
	          column: 7
	        }
	      },
	      '25': {
	        start: {
	          line: 49,
	          column: 30
	        },
	        end: {
	          line: 49,
	          column: 69
	        }
	      },
	      '26': {
	        start: {
	          line: 51,
	          column: 8
	        },
	        end: {
	          line: 51,
	          column: 57
	        }
	      },
	      '27': {
	        start: {
	          line: 52,
	          column: 8
	        },
	        end: {
	          line: 54,
	          column: 11
	        }
	      },
	      '28': {
	        start: {
	          line: 53,
	          column: 10
	        },
	        end: {
	          line: 53,
	          column: 62
	        }
	      },
	      '29': {
	        start: {
	          line: 58,
	          column: 6
	        },
	        end: {
	          line: 58,
	          column: 53
	        }
	      },
	      '30': {
	        start: {
	          line: 61,
	          column: 4
	        },
	        end: {
	          line: 73,
	          column: 5
	        }
	      },
	      '31': {
	        start: {
	          line: 62,
	          column: 6
	        },
	        end: {
	          line: 62,
	          column: 34
	        }
	      },
	      '32': {
	        start: {
	          line: 63,
	          column: 6
	        },
	        end: {
	          line: 70,
	          column: 7
	        }
	      },
	      '33': {
	        start: {
	          line: 64,
	          column: 30
	        },
	        end: {
	          line: 64,
	          column: 69
	        }
	      },
	      '34': {
	        start: {
	          line: 66,
	          column: 8
	        },
	        end: {
	          line: 66,
	          column: 57
	        }
	      },
	      '35': {
	        start: {
	          line: 67,
	          column: 8
	        },
	        end: {
	          line: 69,
	          column: 11
	        }
	      },
	      '36': {
	        start: {
	          line: 68,
	          column: 10
	        },
	        end: {
	          line: 68,
	          column: 62
	        }
	      },
	      '37': {
	        start: {
	          line: 72,
	          column: 6
	        },
	        end: {
	          line: 72,
	          column: 53
	        }
	      },
	      '38': {
	        start: {
	          line: 75,
	          column: 4
	        },
	        end: {
	          line: 75,
	          column: 18
	        }
	      },
	      '39': {
	        start: {
	          line: 76,
	          column: 4
	        },
	        end: {
	          line: 76,
	          column: 24
	        }
	      },
	      '40': {
	        start: {
	          line: 80,
	          column: 15
	        },
	        end: {
	          line: 83,
	          column: 6
	        }
	      },
	      '41': {
	        start: {
	          line: 84,
	          column: 4
	        },
	        end: {
	          line: 84,
	          column: 14
	        }
	      },
	      '42': {
	        start: {
	          line: 88,
	          column: 4
	        },
	        end: {
	          line: 88,
	          column: 328
	        }
	      },
	      '43': {
	        start: {
	          line: 92,
	          column: 4
	        },
	        end: {
	          line: 94,
	          column: 5
	        }
	      },
	      '44': {
	        start: {
	          line: 93,
	          column: 6
	        },
	        end: {
	          line: 93,
	          column: 13
	        }
	      },
	      '45': {
	        start: {
	          line: 95,
	          column: 4
	        },
	        end: {
	          line: 97,
	          column: 5
	        }
	      },
	      '46': {
	        start: {
	          line: 96,
	          column: 6
	        },
	        end: {
	          line: 96,
	          column: 37
	        }
	      },
	      '47': {
	        start: {
	          line: 101,
	          column: 4
	        },
	        end: {
	          line: 101,
	          column: 35
	        }
	      },
	      '48': {
	        start: {
	          line: 102,
	          column: 4
	        },
	        end: {
	          line: 102,
	          column: 25
	        }
	      },
	      '49': {
	        start: {
	          line: 106,
	          column: 4
	        },
	        end: {
	          line: 108,
	          column: 5
	        }
	      },
	      '50': {
	        start: {
	          line: 107,
	          column: 6
	        },
	        end: {
	          line: 107,
	          column: 13
	        }
	      },
	      '51': {
	        start: {
	          line: 109,
	          column: 4
	        },
	        end: {
	          line: 127,
	          column: 5
	        }
	      },
	      '52': {
	        start: {
	          line: 111,
	          column: 6
	        },
	        end: {
	          line: 111,
	          column: 30
	        }
	      },
	      '53': {
	        start: {
	          line: 112,
	          column: 6
	        },
	        end: {
	          line: 112,
	          column: 12
	        }
	      },
	      '54': {
	        start: {
	          line: 114,
	          column: 6
	        },
	        end: {
	          line: 114,
	          column: 33
	        }
	      },
	      '55': {
	        start: {
	          line: 115,
	          column: 6
	        },
	        end: {
	          line: 115,
	          column: 28
	        }
	      },
	      '56': {
	        start: {
	          line: 117,
	          column: 6
	        },
	        end: {
	          line: 117,
	          column: 12
	        }
	      },
	      '57': {
	        start: {
	          line: 119,
	          column: 6
	        },
	        end: {
	          line: 119,
	          column: 28
	        }
	      },
	      '58': {
	        start: {
	          line: 120,
	          column: 6
	        },
	        end: {
	          line: 120,
	          column: 26
	        }
	      },
	      '59': {
	        start: {
	          line: 121,
	          column: 6
	        },
	        end: {
	          line: 121,
	          column: 12
	        }
	      },
	      '60': {
	        start: {
	          line: 123,
	          column: 6
	        },
	        end: {
	          line: 123,
	          column: 30
	        }
	      },
	      '61': {
	        start: {
	          line: 124,
	          column: 6
	        },
	        end: {
	          line: 124,
	          column: 27
	        }
	      },
	      '62': {
	        start: {
	          line: 125,
	          column: 6
	        },
	        end: {
	          line: 125,
	          column: 27
	        }
	      },
	      '63': {
	        start: {
	          line: 126,
	          column: 6
	        },
	        end: {
	          line: 126,
	          column: 12
	        }
	      },
	      '64': {
	        start: {
	          line: 133,
	          column: 4
	        },
	        end: {
	          line: 135,
	          column: 5
	        }
	      },
	      '65': {
	        start: {
	          line: 134,
	          column: 6
	        },
	        end: {
	          line: 134,
	          column: 13
	        }
	      },
	      '66': {
	        start: {
	          line: 136,
	          column: 4
	        },
	        end: {
	          line: 136,
	          column: 41
	        }
	      },
	      '67': {
	        start: {
	          line: 140,
	          column: 22
	        },
	        end: {
	          line: 140,
	          column: 24
	        }
	      },
	      '68': {
	        start: {
	          line: 141,
	          column: 20
	        },
	        end: {
	          line: 141,
	          column: 37
	        }
	      },
	      '69': {
	        start: {
	          line: 142,
	          column: 19
	        },
	        end: {
	          line: 142,
	          column: 37
	        }
	      },
	      '70': {
	        start: {
	          line: 144,
	          column: 4
	        },
	        end: {
	          line: 146,
	          column: 5
	        }
	      },
	      '71': {
	        start: {
	          line: 145,
	          column: 6
	        },
	        end: {
	          line: 145,
	          column: 13
	        }
	      },
	      '72': {
	        start: {
	          line: 148,
	          column: 4
	        },
	        end: {
	          line: 153,
	          column: 5
	        }
	      },
	      '73': {
	        start: {
	          line: 149,
	          column: 20
	        },
	        end: {
	          line: 149,
	          column: 29
	        }
	      },
	      '74': {
	        start: {
	          line: 150,
	          column: 6
	        },
	        end: {
	          line: 152,
	          column: 7
	        }
	      },
	      '75': {
	        start: {
	          line: 151,
	          column: 8
	        },
	        end: {
	          line: 151,
	          column: 49
	        }
	      },
	      '76': {
	        start: {
	          line: 155,
	          column: 4
	        },
	        end: {
	          line: 158,
	          column: 5
	        }
	      },
	      '77': {
	        start: {
	          line: 156,
	          column: 6
	        },
	        end: {
	          line: 156,
	          column: 86
	        }
	      },
	      '78': {
	        start: {
	          line: 157,
	          column: 6
	        },
	        end: {
	          line: 157,
	          column: 128
	        }
	      },
	      '79': {
	        start: {
	          line: 165,
	          column: 22
	        },
	        end: {
	          line: 165,
	          column: 24
	        }
	      },
	      '80': {
	        start: {
	          line: 166,
	          column: 19
	        },
	        end: {
	          line: 166,
	          column: 36
	        }
	      },
	      '81': {
	        start: {
	          line: 168,
	          column: 4
	        },
	        end: {
	          line: 170,
	          column: 5
	        }
	      },
	      '82': {
	        start: {
	          line: 169,
	          column: 6
	        },
	        end: {
	          line: 169,
	          column: 13
	        }
	      },
	      '83': {
	        start: {
	          line: 172,
	          column: 4
	        },
	        end: {
	          line: 178,
	          column: 5
	        }
	      },
	      '84': {
	        start: {
	          line: 173,
	          column: 20
	        },
	        end: {
	          line: 173,
	          column: 29
	        }
	      },
	      '85': {
	        start: {
	          line: 175,
	          column: 6
	        },
	        end: {
	          line: 177,
	          column: 7
	        }
	      },
	      '86': {
	        start: {
	          line: 176,
	          column: 8
	        },
	        end: {
	          line: 176,
	          column: 30
	        }
	      },
	      '87': {
	        start: {
	          line: 180,
	          column: 4
	        },
	        end: {
	          line: 183,
	          column: 5
	        }
	      },
	      '88': {
	        start: {
	          line: 181,
	          column: 6
	        },
	        end: {
	          line: 181,
	          column: 86
	        }
	      },
	      '89': {
	        start: {
	          line: 182,
	          column: 6
	        },
	        end: {
	          line: 182,
	          column: 128
	        }
	      },
	      '90': {
	        start: {
	          line: 187,
	          column: 4
	        },
	        end: {
	          line: 187,
	          column: 38
	        }
	      },
	      '91': {
	        start: {
	          line: 191,
	          column: 4
	        },
	        end: {
	          line: 191,
	          column: 65
	        }
	      },
	      '92': {
	        start: {
	          line: 195,
	          column: 4
	        },
	        end: {
	          line: 195,
	          column: 59
	        }
	      },
	      '93': {
	        start: {
	          line: 199,
	          column: 4
	        },
	        end: {
	          line: 201,
	          column: 5
	        }
	      },
	      '94': {
	        start: {
	          line: 200,
	          column: 6
	        },
	        end: {
	          line: 200,
	          column: 13
	        }
	      },
	      '95': {
	        start: {
	          line: 202,
	          column: 4
	        },
	        end: {
	          line: 204,
	          column: 5
	        }
	      },
	      '96': {
	        start: {
	          line: 203,
	          column: 6
	        },
	        end: {
	          line: 203,
	          column: 142
	        }
	      },
	      '97': {
	        start: {
	          line: 205,
	          column: 4
	        },
	        end: {
	          line: 205,
	          column: 32
	        }
	      },
	      '98': {
	        start: {
	          line: 209,
	          column: 4
	        },
	        end: {
	          line: 211,
	          column: 5
	        }
	      },
	      '99': {
	        start: {
	          line: 210,
	          column: 6
	        },
	        end: {
	          line: 210,
	          column: 13
	        }
	      },
	      '100': {
	        start: {
	          line: 212,
	          column: 4
	        },
	        end: {
	          line: 215,
	          column: 5
	        }
	      },
	      '101': {
	        start: {
	          line: 213,
	          column: 6
	        },
	        end: {
	          line: 213,
	          column: 142
	        }
	      },
	      '102': {
	        start: {
	          line: 214,
	          column: 6
	        },
	        end: {
	          line: 214,
	          column: 33
	        }
	      },
	      '103': {
	        start: {
	          line: 219,
	          column: 4
	        },
	        end: {
	          line: 219,
	          column: 24
	        }
	      },
	      '104': {
	        start: {
	          line: 223,
	          column: 4
	        },
	        end: {
	          line: 223,
	          column: 55
	        }
	      },
	      '105': {
	        start: {
	          line: 227,
	          column: 4
	        },
	        end: {
	          line: 229,
	          column: 5
	        }
	      },
	      '106': {
	        start: {
	          line: 228,
	          column: 6
	        },
	        end: {
	          line: 228,
	          column: 15
	        }
	      },
	      '107': {
	        start: {
	          line: 230,
	          column: 4
	        },
	        end: {
	          line: 230,
	          column: 44
	        }
	      },
	      '108': {
	        start: {
	          line: 235,
	          column: 4
	        },
	        end: {
	          line: 237,
	          column: 5
	        }
	      },
	      '109': {
	        start: {
	          line: 236,
	          column: 6
	        },
	        end: {
	          line: 236,
	          column: 15
	        }
	      },
	      '110': {
	        start: {
	          line: 240,
	          column: 4
	        },
	        end: {
	          line: 240,
	          column: 50
	        }
	      },
	      '111': {
	        start: {
	          line: 241,
	          column: 4
	        },
	        end: {
	          line: 241,
	          column: 35
	        }
	      },
	      '112': {
	        start: {
	          line: 245,
	          column: 4
	        },
	        end: {
	          line: 245,
	          column: 107
	        }
	      },
	      '113': {
	        start: {
	          line: 249,
	          column: 4
	        },
	        end: {
	          line: 249,
	          column: 43
	        }
	      },
	      '114': {
	        start: {
	          line: 253,
	          column: 4
	        },
	        end: {
	          line: 253,
	          column: 24
	        }
	      },
	      '115': {
	        start: {
	          line: 257,
	          column: 4
	        },
	        end: {
	          line: 259,
	          column: 5
	        }
	      },
	      '116': {
	        start: {
	          line: 258,
	          column: 6
	        },
	        end: {
	          line: 258,
	          column: 15
	        }
	      },
	      '117': {
	        start: {
	          line: 260,
	          column: 4
	        },
	        end: {
	          line: 260,
	          column: 52
	        }
	      },
	      '118': {
	        start: {
	          line: 264,
	          column: 4
	        },
	        end: {
	          line: 264,
	          column: 17
	        }
	      },
	      '119': {
	        start: {
	          line: 271,
	          column: 4
	        },
	        end: {
	          line: 273,
	          column: 5
	        }
	      },
	      '120': {
	        start: {
	          line: 272,
	          column: 6
	        },
	        end: {
	          line: 272,
	          column: 13
	        }
	      },
	      '121': {
	        start: {
	          line: 274,
	          column: 4
	        },
	        end: {
	          line: 274,
	          column: 38
	        }
	      },
	      '122': {
	        start: {
	          line: 275,
	          column: 4
	        },
	        end: {
	          line: 275,
	          column: 25
	        }
	      },
	      '123': {
	        start: {
	          line: 276,
	          column: 4
	        },
	        end: {
	          line: 276,
	          column: 24
	        }
	      },
	      '124': {
	        start: {
	          line: 277,
	          column: 4
	        },
	        end: {
	          line: 277,
	          column: 32
	        }
	      },
	      '125': {
	        start: {
	          line: 278,
	          column: 4
	        },
	        end: {
	          line: 278,
	          column: 23
	        }
	      },
	      '126': {
	        start: {
	          line: 279,
	          column: 4
	        },
	        end: {
	          line: 279,
	          column: 52
	        }
	      },
	      '127': {
	        start: {
	          line: 280,
	          column: 4
	        },
	        end: {
	          line: 280,
	          column: 28
	        }
	      },
	      '128': {
	        start: {
	          line: 281,
	          column: 4
	        },
	        end: {
	          line: 281,
	          column: 127
	        }
	      },
	      '129': {
	        start: {
	          line: 282,
	          column: 4
	        },
	        end: {
	          line: 282,
	          column: 40
	        }
	      },
	      '130': {
	        start: {
	          line: 286,
	          column: 4
	        },
	        end: {
	          line: 286,
	          column: 29
	        }
	      },
	      '131': {
	        start: {
	          line: 290,
	          column: 4
	        },
	        end: {
	          line: 290,
	          column: 23
	        }
	      },
	      '132': {
	        start: {
	          line: 294,
	          column: 4
	        },
	        end: {
	          line: 294,
	          column: 47
	        }
	      },
	      '133': {
	        start: {
	          line: 298,
	          column: 4
	        },
	        end: {
	          line: 298,
	          column: 17
	        }
	      },
	      '134': {
	        start: {
	          line: 302,
	          column: 4
	        },
	        end: {
	          line: 302,
	          column: 15
	        }
	      },
	      '135': {
	        start: {
	          line: 306,
	          column: 4
	        },
	        end: {
	          line: 306,
	          column: 39
	        }
	      },
	      '136': {
	        start: {
	          line: 307,
	          column: 4
	        },
	        end: {
	          line: 307,
	          column: 24
	        }
	      },
	      '137': {
	        start: {
	          line: 311,
	          column: 4
	        },
	        end: {
	          line: 311,
	          column: 17
	        }
	      },
	      '138': {
	        start: {
	          line: 315,
	          column: 4
	        },
	        end: {
	          line: 315,
	          column: 17
	        }
	      },
	      '139': {
	        start: {
	          line: 319,
	          column: 4
	        },
	        end: {
	          line: 319,
	          column: 13
	        }
	      },
	      '140': {
	        start: {
	          line: 323,
	          column: 0
	        },
	        end: {
	          line: 323,
	          column: 37
	        }
	      },
	      '141': {
	        start: {
	          line: 325,
	          column: 0
	        },
	        end: {
	          line: 325,
	          column: 35
	        }
	      },
	      '142': {
	        start: {
	          line: 327,
	          column: 0
	        },
	        end: {
	          line: 327,
	          column: 38
	        }
	      },
	      '143': {
	        start: {
	          line: 331,
	          column: 0
	        },
	        end: {
	          line: 333,
	          column: 2
	        }
	      },
	      '144': {
	        start: {
	          line: 332,
	          column: 4
	        },
	        end: {
	          line: 332,
	          column: 16
	        }
	      },
	      '145': {
	        start: {
	          line: 336,
	          column: 0
	        },
	        end: {
	          line: 336,
	          column: 36
	        }
	      },
	      '146': {
	        start: {
	          line: 345,
	          column: 0
	        },
	        end: {
	          line: 345,
	          column: 36
	        }
	      },
	      '147': {
	        start: {
	          line: 352,
	          column: 0
	        },
	        end: {
	          line: 365,
	          column: 2
	        }
	      },
	      '148': {
	        start: {
	          line: 354,
	          column: 23
	        },
	        end: {
	          line: 354,
	          column: 78
	        }
	      },
	      '149': {
	        start: {
	          line: 355,
	          column: 22
	        },
	        end: {
	          line: 355,
	          column: 52
	        }
	      },
	      '150': {
	        start: {
	          line: 357,
	          column: 4
	        },
	        end: {
	          line: 363,
	          column: 5
	        }
	      },
	      '151': {
	        start: {
	          line: 358,
	          column: 8
	        },
	        end: {
	          line: 358,
	          column: 26
	        }
	      },
	      '152': {
	        start: {
	          line: 359,
	          column: 11
	        },
	        end: {
	          line: 363,
	          column: 5
	        }
	      },
	      '153': {
	        start: {
	          line: 360,
	          column: 8
	        },
	        end: {
	          line: 360,
	          column: 23
	        }
	      },
	      '154': {
	        start: {
	          line: 362,
	          column: 8
	        },
	        end: {
	          line: 362,
	          column: 18
	        }
	      },
	      '155': {
	        start: {
	          line: 373,
	          column: 0
	        },
	        end: {
	          line: 383,
	          column: 2
	        }
	      },
	      '156': {
	        start: {
	          line: 376,
	          column: 4
	        },
	        end: {
	          line: 380,
	          column: 5
	        }
	      },
	      '157': {
	        start: {
	          line: 377,
	          column: 8
	        },
	        end: {
	          line: 377,
	          column: 71
	        }
	      },
	      '158': {
	        start: {
	          line: 378,
	          column: 11
	        },
	        end: {
	          line: 380,
	          column: 5
	        }
	      },
	      '159': {
	        start: {
	          line: 379,
	          column: 8
	        },
	        end: {
	          line: 379,
	          column: 70
	        }
	      },
	      '160': {
	        start: {
	          line: 382,
	          column: 4
	        },
	        end: {
	          line: 382,
	          column: 14
	        }
	      },
	      '161': {
	        start: {
	          line: 393,
	          column: 0
	        },
	        end: {
	          line: 395,
	          column: 2
	        }
	      },
	      '162': {
	        start: {
	          line: 394,
	          column: 4
	        },
	        end: {
	          line: 394,
	          column: 25
	        }
	      },
	      '163': {
	        start: {
	          line: 401,
	          column: 0
	        },
	        end: {
	          line: 402,
	          column: 2
	        }
	      },
	      '164': {
	        start: {
	          line: 405,
	          column: 0
	        },
	        end: {
	          line: 405,
	          column: 65
	        }
	      },
	      '165': {
	        start: {
	          line: 412,
	          column: 0
	        },
	        end: {
	          line: 412,
	          column: 50
	        }
	      },
	      '166': {
	        start: {
	          line: 419,
	          column: 0
	        },
	        end: {
	          line: 419,
	          column: 50
	        }
	      },
	      '167': {
	        start: {
	          line: 427,
	          column: 0
	        },
	        end: {
	          line: 427,
	          column: 53
	        }
	      },
	      '168': {
	        start: {
	          line: 434,
	          column: 0
	        },
	        end: {
	          line: 434,
	          column: 54
	        }
	      },
	      '169': {
	        start: {
	          line: 440,
	          column: 0
	        },
	        end: {
	          line: 440,
	          column: 54
	        }
	      },
	      '170': {
	        start: {
	          line: 446,
	          column: 0
	        },
	        end: {
	          line: 446,
	          column: 52
	        }
	      },
	      '171': {
	        start: {
	          line: 453,
	          column: 0
	        },
	        end: {
	          line: 453,
	          column: 53
	        }
	      },
	      '172': {
	        start: {
	          line: 460,
	          column: 0
	        },
	        end: {
	          line: 460,
	          column: 54
	        }
	      },
	      '173': {
	        start: {
	          line: 467,
	          column: 0
	        },
	        end: {
	          line: 467,
	          column: 55
	        }
	      },
	      '174': {
	        start: {
	          line: 470,
	          column: 0
	        },
	        end: {
	          line: 470,
	          column: 32
	        }
	      },
	      '175': {
	        start: {
	          line: 473,
	          column: 0
	        },
	        end: {
	          line: 475,
	          column: 1
	        }
	      },
	      '176': {
	        start: {
	          line: 474,
	          column: 2
	        },
	        end: {
	          line: 474,
	          column: 46
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 15,
	            column: 2
	          },
	          end: {
	            line: 15,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 15,
	            column: 35
	          },
	          end: {
	            line: 77,
	            column: 3
	          }
	        },
	        line: 15
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 27,
	            column: 25
	          },
	          end: {
	            line: 27,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 27,
	            column: 31
	          },
	          end: {
	            line: 32,
	            column: 5
	          }
	        },
	        line: 27
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 39,
	            column: 25
	          },
	          end: {
	            line: 39,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 39,
	            column: 36
	          },
	          end: {
	            line: 41,
	            column: 7
	          }
	        },
	        line: 39
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 52,
	            column: 27
	          },
	          end: {
	            line: 52,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 52,
	            column: 38
	          },
	          end: {
	            line: 54,
	            column: 9
	          }
	        },
	        line: 52
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 67,
	            column: 27
	          },
	          end: {
	            line: 67,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 67,
	            column: 38
	          },
	          end: {
	            line: 69,
	            column: 9
	          }
	        },
	        line: 67
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 79,
	            column: 2
	          },
	          end: {
	            line: 79,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 79,
	            column: 13
	          },
	          end: {
	            line: 85,
	            column: 3
	          }
	        },
	        line: 79
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 87,
	            column: 2
	          },
	          end: {
	            line: 87,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 87,
	            column: 11
	          },
	          end: {
	            line: 89,
	            column: 3
	          }
	        },
	        line: 87
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 91,
	            column: 2
	          },
	          end: {
	            line: 91,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 91,
	            column: 27
	          },
	          end: {
	            line: 98,
	            column: 3
	          }
	        },
	        line: 91
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 100,
	            column: 2
	          },
	          end: {
	            line: 100,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 100,
	            column: 21
	          },
	          end: {
	            line: 103,
	            column: 3
	          }
	        },
	        line: 100
	      },
	      '9': {
	        name: '(anonymous_9)',
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
	            column: 24
	          },
	          end: {
	            line: 128,
	            column: 3
	          }
	        },
	        line: 105
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 130,
	            column: 2
	          },
	          end: {
	            line: 130,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 130,
	            column: 11
	          },
	          end: {
	            line: 130,
	            column: 13
	          }
	        },
	        line: 130
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 132,
	            column: 2
	          },
	          end: {
	            line: 132,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 132,
	            column: 15
	          },
	          end: {
	            line: 137,
	            column: 3
	          }
	        },
	        line: 132
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 139,
	            column: 2
	          },
	          end: {
	            line: 139,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 139,
	            column: 28
	          },
	          end: {
	            line: 159,
	            column: 3
	          }
	        },
	        line: 139
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 161,
	            column: 2
	          },
	          end: {
	            line: 161,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 161,
	            column: 28
	          },
	          end: {
	            line: 162,
	            column: 3
	          }
	        },
	        line: 161
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 164,
	            column: 2
	          },
	          end: {
	            line: 164,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 164,
	            column: 27
	          },
	          end: {
	            line: 184,
	            column: 3
	          }
	        },
	        line: 164
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 186,
	            column: 2
	          },
	          end: {
	            line: 186,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 186,
	            column: 19
	          },
	          end: {
	            line: 188,
	            column: 3
	          }
	        },
	        line: 186
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 190,
	            column: 2
	          },
	          end: {
	            line: 190,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 190,
	            column: 18
	          },
	          end: {
	            line: 192,
	            column: 3
	          }
	        },
	        line: 190
	      },
	      '17': {
	        name: '(anonymous_17)',
	        decl: {
	          start: {
	            line: 194,
	            column: 2
	          },
	          end: {
	            line: 194,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 194,
	            column: 15
	          },
	          end: {
	            line: 196,
	            column: 3
	          }
	        },
	        line: 194
	      },
	      '18': {
	        name: '(anonymous_18)',
	        decl: {
	          start: {
	            line: 198,
	            column: 2
	          },
	          end: {
	            line: 198,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 198,
	            column: 9
	          },
	          end: {
	            line: 206,
	            column: 3
	          }
	        },
	        line: 198
	      },
	      '19': {
	        name: '(anonymous_19)',
	        decl: {
	          start: {
	            line: 208,
	            column: 2
	          },
	          end: {
	            line: 208,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 208,
	            column: 10
	          },
	          end: {
	            line: 216,
	            column: 3
	          }
	        },
	        line: 208
	      },
	      '20': {
	        name: '(anonymous_20)',
	        decl: {
	          start: {
	            line: 218,
	            column: 2
	          },
	          end: {
	            line: 218,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 218,
	            column: 11
	          },
	          end: {
	            line: 220,
	            column: 3
	          }
	        },
	        line: 218
	      },
	      '21': {
	        name: '(anonymous_21)',
	        decl: {
	          start: {
	            line: 222,
	            column: 2
	          },
	          end: {
	            line: 222,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 222,
	            column: 10
	          },
	          end: {
	            line: 224,
	            column: 3
	          }
	        },
	        line: 222
	      },
	      '22': {
	        name: '(anonymous_22)',
	        decl: {
	          start: {
	            line: 226,
	            column: 2
	          },
	          end: {
	            line: 226,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 226,
	            column: 16
	          },
	          end: {
	            line: 231,
	            column: 3
	          }
	        },
	        line: 226
	      },
	      '23': {
	        name: '(anonymous_23)',
	        decl: {
	          start: {
	            line: 233,
	            column: 2
	          },
	          end: {
	            line: 233,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 233,
	            column: 27
	          },
	          end: {
	            line: 246,
	            column: 3
	          }
	        },
	        line: 233
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
	            column: 26
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
	            column: 11
	          },
	          end: {
	            line: 254,
	            column: 3
	          }
	        },
	        line: 252
	      },
	      '26': {
	        name: '(anonymous_26)',
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
	            column: 13
	          },
	          end: {
	            line: 261,
	            column: 3
	          }
	        },
	        line: 256
	      },
	      '27': {
	        name: '(anonymous_27)',
	        decl: {
	          start: {
	            line: 263,
	            column: 2
	          },
	          end: {
	            line: 263,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 263,
	            column: 13
	          },
	          end: {
	            line: 265,
	            column: 3
	          }
	        },
	        line: 263
	      },
	      '28': {
	        name: '(anonymous_28)',
	        decl: {
	          start: {
	            line: 267,
	            column: 2
	          },
	          end: {
	            line: 267,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 267,
	            column: 33
	          },
	          end: {
	            line: 283,
	            column: 3
	          }
	        },
	        line: 267
	      },
	      '29': {
	        name: '(anonymous_29)',
	        decl: {
	          start: {
	            line: 285,
	            column: 2
	          },
	          end: {
	            line: 285,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 285,
	            column: 43
	          },
	          end: {
	            line: 287,
	            column: 3
	          }
	        },
	        line: 285
	      },
	      '30': {
	        name: '(anonymous_30)',
	        decl: {
	          start: {
	            line: 289,
	            column: 2
	          },
	          end: {
	            line: 289,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 289,
	            column: 10
	          },
	          end: {
	            line: 291,
	            column: 3
	          }
	        },
	        line: 289
	      },
	      '31': {
	        name: '(anonymous_31)',
	        decl: {
	          start: {
	            line: 293,
	            column: 2
	          },
	          end: {
	            line: 293,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 293,
	            column: 18
	          },
	          end: {
	            line: 295,
	            column: 3
	          }
	        },
	        line: 293
	      },
	      '32': {
	        name: '(anonymous_32)',
	        decl: {
	          start: {
	            line: 297,
	            column: 2
	          },
	          end: {
	            line: 297,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 297,
	            column: 23
	          },
	          end: {
	            line: 299,
	            column: 3
	          }
	        },
	        line: 297
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
	            column: 22
	          },
	          end: {
	            line: 303,
	            column: 3
	          }
	        },
	        line: 301
	      },
	      '34': {
	        name: '(anonymous_34)',
	        decl: {
	          start: {
	            line: 305,
	            column: 2
	          },
	          end: {
	            line: 305,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 305,
	            column: 12
	          },
	          end: {
	            line: 308,
	            column: 3
	          }
	        },
	        line: 305
	      },
	      '35': {
	        name: '(anonymous_35)',
	        decl: {
	          start: {
	            line: 310,
	            column: 2
	          },
	          end: {
	            line: 310,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 310,
	            column: 12
	          },
	          end: {
	            line: 312,
	            column: 3
	          }
	        },
	        line: 310
	      },
	      '36': {
	        name: '(anonymous_36)',
	        decl: {
	          start: {
	            line: 314,
	            column: 2
	          },
	          end: {
	            line: 314,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 314,
	            column: 13
	          },
	          end: {
	            line: 316,
	            column: 3
	          }
	        },
	        line: 314
	      },
	      '37': {
	        name: '(anonymous_37)',
	        decl: {
	          start: {
	            line: 318,
	            column: 2
	          },
	          end: {
	            line: 318,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 318,
	            column: 17
	          },
	          end: {
	            line: 320,
	            column: 3
	          }
	        },
	        line: 318
	      },
	      '38': {
	        name: '(anonymous_38)',
	        decl: {
	          start: {
	            line: 331,
	            column: 25
	          },
	          end: {
	            line: 331,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 331,
	            column: 37
	          },
	          end: {
	            line: 333,
	            column: 1
	          }
	        },
	        line: 331
	      },
	      '39': {
	        name: '(anonymous_39)',
	        decl: {
	          start: {
	            line: 352,
	            column: 45
	          },
	          end: {
	            line: 352,
	            column: 46
	          }
	        },
	        loc: {
	          start: {
	            line: 352,
	            column: 63
	          },
	          end: {
	            line: 365,
	            column: 1
	          }
	        },
	        line: 352
	      },
	      '40': {
	        name: '(anonymous_40)',
	        decl: {
	          start: {
	            line: 373,
	            column: 49
	          },
	          end: {
	            line: 373,
	            column: 50
	          }
	        },
	        loc: {
	          start: {
	            line: 373,
	            column: 67
	          },
	          end: {
	            line: 383,
	            column: 1
	          }
	        },
	        line: 373
	      },
	      '41': {
	        name: '(anonymous_41)',
	        decl: {
	          start: {
	            line: 393,
	            column: 46
	          },
	          end: {
	            line: 393,
	            column: 47
	          }
	        },
	        loc: {
	          start: {
	            line: 393,
	            column: 70
	          },
	          end: {
	            line: 395,
	            column: 1
	          }
	        },
	        line: 393
	      },
	      '42': {
	        name: '(anonymous_42)',
	        decl: {
	          start: {
	            line: 401,
	            column: 41
	          },
	          end: {
	            line: 401,
	            column: 42
	          }
	        },
	        loc: {
	          start: {
	            line: 401,
	            column: 53
	          },
	          end: {
	            line: 402,
	            column: 1
	          }
	        },
	        line: 401
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 15,
	            column: 23
	          },
	          end: {
	            line: 15,
	            column: 33
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 15,
	            column: 31
	          },
	          end: {
	            line: 15,
	            column: 33
	          }
	        }],
	        line: 15
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 35,
	            column: 4
	          },
	          end: {
	            line: 44,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 35,
	            column: 4
	          },
	          end: {
	            line: 44,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 35,
	            column: 4
	          },
	          end: {
	            line: 44,
	            column: 5
	          }
	        }],
	        line: 35
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 48,
	            column: 6
	          },
	          end: {
	            line: 56,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 48,
	            column: 6
	          },
	          end: {
	            line: 56,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 48,
	            column: 6
	          },
	          end: {
	            line: 56,
	            column: 7
	          }
	        }],
	        line: 48
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 63,
	            column: 6
	          },
	          end: {
	            line: 70,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 63,
	            column: 6
	          },
	          end: {
	            line: 70,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 63,
	            column: 6
	          },
	          end: {
	            line: 70,
	            column: 7
	          }
	        }],
	        line: 63
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 92,
	            column: 4
	          },
	          end: {
	            line: 94,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 92,
	            column: 4
	          },
	          end: {
	            line: 94,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 92,
	            column: 4
	          },
	          end: {
	            line: 94,
	            column: 5
	          }
	        }],
	        line: 92
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 95,
	            column: 4
	          },
	          end: {
	            line: 97,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 95,
	            column: 4
	          },
	          end: {
	            line: 97,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 95,
	            column: 4
	          },
	          end: {
	            line: 97,
	            column: 5
	          }
	        }],
	        line: 95
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 106,
	            column: 4
	          },
	          end: {
	            line: 108,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 106,
	            column: 4
	          },
	          end: {
	            line: 108,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 106,
	            column: 4
	          },
	          end: {
	            line: 108,
	            column: 5
	          }
	        }],
	        line: 106
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 109,
	            column: 4
	          },
	          end: {
	            line: 127,
	            column: 5
	          }
	        },
	        type: 'switch',
	        locations: [{
	          start: {
	            line: 110,
	            column: 4
	          },
	          end: {
	            line: 112,
	            column: 12
	          }
	        }, {
	          start: {
	            line: 113,
	            column: 4
	          },
	          end: {
	            line: 117,
	            column: 12
	          }
	        }, {
	          start: {
	            line: 118,
	            column: 4
	          },
	          end: {
	            line: 121,
	            column: 12
	          }
	        }, {
	          start: {
	            line: 122,
	            column: 4
	          },
	          end: {
	            line: 126,
	            column: 12
	          }
	        }],
	        line: 109
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 133,
	            column: 4
	          },
	          end: {
	            line: 135,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 133,
	            column: 4
	          },
	          end: {
	            line: 135,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 133,
	            column: 4
	          },
	          end: {
	            line: 135,
	            column: 5
	          }
	        }],
	        line: 133
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 144,
	            column: 4
	          },
	          end: {
	            line: 146,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 144,
	            column: 4
	          },
	          end: {
	            line: 146,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 144,
	            column: 4
	          },
	          end: {
	            line: 146,
	            column: 5
	          }
	        }],
	        line: 144
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 150,
	            column: 6
	          },
	          end: {
	            line: 152,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 150,
	            column: 6
	          },
	          end: {
	            line: 152,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 150,
	            column: 6
	          },
	          end: {
	            line: 152,
	            column: 7
	          }
	        }],
	        line: 150
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 155,
	            column: 4
	          },
	          end: {
	            line: 158,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 155,
	            column: 4
	          },
	          end: {
	            line: 158,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 155,
	            column: 4
	          },
	          end: {
	            line: 158,
	            column: 5
	          }
	        }],
	        line: 155
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 155,
	            column: 8
	          },
	          end: {
	            line: 155,
	            column: 41
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 155,
	            column: 8
	          },
	          end: {
	            line: 155,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 155,
	            column: 25
	          },
	          end: {
	            line: 155,
	            column: 41
	          }
	        }],
	        line: 155
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 168,
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
	            line: 168,
	            column: 4
	          },
	          end: {
	            line: 170,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 168,
	            column: 4
	          },
	          end: {
	            line: 170,
	            column: 5
	          }
	        }],
	        line: 168
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 175,
	            column: 6
	          },
	          end: {
	            line: 177,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 175,
	            column: 6
	          },
	          end: {
	            line: 177,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 175,
	            column: 6
	          },
	          end: {
	            line: 177,
	            column: 7
	          }
	        }],
	        line: 175
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 180,
	            column: 4
	          },
	          end: {
	            line: 183,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 180,
	            column: 4
	          },
	          end: {
	            line: 183,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 180,
	            column: 4
	          },
	          end: {
	            line: 183,
	            column: 5
	          }
	        }],
	        line: 180
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 180,
	            column: 8
	          },
	          end: {
	            line: 180,
	            column: 41
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 180,
	            column: 8
	          },
	          end: {
	            line: 180,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 180,
	            column: 25
	          },
	          end: {
	            line: 180,
	            column: 41
	          }
	        }],
	        line: 180
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 199,
	            column: 4
	          },
	          end: {
	            line: 201,
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
	            line: 201,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 199,
	            column: 4
	          },
	          end: {
	            line: 201,
	            column: 5
	          }
	        }],
	        line: 199
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 202,
	            column: 4
	          },
	          end: {
	            line: 204,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 202,
	            column: 4
	          },
	          end: {
	            line: 204,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 202,
	            column: 4
	          },
	          end: {
	            line: 204,
	            column: 5
	          }
	        }],
	        line: 202
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 209,
	            column: 4
	          },
	          end: {
	            line: 211,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 209,
	            column: 4
	          },
	          end: {
	            line: 211,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 209,
	            column: 4
	          },
	          end: {
	            line: 211,
	            column: 5
	          }
	        }],
	        line: 209
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 212,
	            column: 4
	          },
	          end: {
	            line: 215,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 212,
	            column: 4
	          },
	          end: {
	            line: 215,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 212,
	            column: 4
	          },
	          end: {
	            line: 215,
	            column: 5
	          }
	        }],
	        line: 212
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 227,
	            column: 4
	          },
	          end: {
	            line: 229,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 227,
	            column: 4
	          },
	          end: {
	            line: 229,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 227,
	            column: 4
	          },
	          end: {
	            line: 229,
	            column: 5
	          }
	        }],
	        line: 227
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 235,
	            column: 4
	          },
	          end: {
	            line: 237,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 235,
	            column: 4
	          },
	          end: {
	            line: 237,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 235,
	            column: 4
	          },
	          end: {
	            line: 237,
	            column: 5
	          }
	        }],
	        line: 235
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 257,
	            column: 4
	          },
	          end: {
	            line: 259,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 257,
	            column: 4
	          },
	          end: {
	            line: 259,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 257,
	            column: 4
	          },
	          end: {
	            line: 259,
	            column: 5
	          }
	        }],
	        line: 257
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 260,
	            column: 11
	          },
	          end: {
	            line: 260,
	            column: 51
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 260,
	            column: 11
	          },
	          end: {
	            line: 260,
	            column: 39
	          }
	        }, {
	          start: {
	            line: 260,
	            column: 43
	          },
	          end: {
	            line: 260,
	            column: 51
	          }
	        }],
	        line: 260
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 267,
	            column: 19
	          },
	          end: {
	            line: 267,
	            column: 31
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 267,
	            column: 26
	          },
	          end: {
	            line: 267,
	            column: 31
	          }
	        }],
	        line: 267
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 271,
	            column: 4
	          },
	          end: {
	            line: 273,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 271,
	            column: 4
	          },
	          end: {
	            line: 273,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 271,
	            column: 4
	          },
	          end: {
	            line: 273,
	            column: 5
	          }
	        }],
	        line: 271
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 357,
	            column: 4
	          },
	          end: {
	            line: 363,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 357,
	            column: 4
	          },
	          end: {
	            line: 363,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 357,
	            column: 4
	          },
	          end: {
	            line: 363,
	            column: 5
	          }
	        }],
	        line: 357
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 359,
	            column: 11
	          },
	          end: {
	            line: 363,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 359,
	            column: 11
	          },
	          end: {
	            line: 363,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 359,
	            column: 11
	          },
	          end: {
	            line: 363,
	            column: 5
	          }
	        }],
	        line: 359
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 376,
	            column: 4
	          },
	          end: {
	            line: 380,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 376,
	            column: 4
	          },
	          end: {
	            line: 380,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 376,
	            column: 4
	          },
	          end: {
	            line: 380,
	            column: 5
	          }
	        }],
	        line: 376
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 378,
	            column: 11
	          },
	          end: {
	            line: 380,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 378,
	            column: 11
	          },
	          end: {
	            line: 380,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 378,
	            column: 11
	          },
	          end: {
	            line: 380,
	            column: 5
	          }
	        }],
	        line: 378
	      },
	      '31': {
	        loc: {
	          start: {
	            line: 473,
	            column: 0
	          },
	          end: {
	            line: 475,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 473,
	            column: 0
	          },
	          end: {
	            line: 475,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 473,
	            column: 0
	          },
	          end: {
	            line: 475,
	            column: 1
	          }
	        }],
	        line: 473
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
	      '42': 0
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
	      '24': [0, 0],
	      '25': [0],
	      '26': [0, 0],
	      '27': [0, 0],
	      '28': [0, 0],
	      '29': [0, 0],
	      '30': [0, 0],
	      '31': [0, 0]
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
	var Component$1 = (cov_2q58cqsssn.s[0]++, videojs.getComponent('Component'));
	var Tech = (cov_2q58cqsssn.s[1]++, videojs.getComponent('Tech'));

	var Chromecast = /*#__PURE__*/function (_Tech) {
	  inheritsLoose(Chromecast, _Tech);

	  function Chromecast(options, ready) {
	    var _this;

	    if (ready === void 0) {
	      ready = (cov_2q58cqsssn.b[0][0]++, {});
	    }

	    cov_2q58cqsssn.f[0]++;
	    cov_2q58cqsssn.s[2]++;
	    _this = _Tech.call(this, options, ready) || this;
	    cov_2q58cqsssn.s[3]++;
	    _this.apiMedia = _this.options_.source.apiMedia;
	    cov_2q58cqsssn.s[4]++;
	    _this.apiSession = _this.options_.source.apiSession;
	    cov_2q58cqsssn.s[5]++;
	    _this.receiver = _this.apiSession.receiver.friendlyName;
	    var mediaStatusUpdateHandler = (cov_2q58cqsssn.s[6]++, _this.onMediaStatusUpdate.bind(assertThisInitialized(_this)));
	    var sessionUpdateHandler = (cov_2q58cqsssn.s[7]++, _this.onSessionUpdate.bind(assertThisInitialized(_this)));
	    cov_2q58cqsssn.s[8]++;

	    _this.apiMedia.addUpdateListener(mediaStatusUpdateHandler);

	    cov_2q58cqsssn.s[9]++;

	    _this.apiSession.addUpdateListener(sessionUpdateHandler);

	    cov_2q58cqsssn.s[10]++;

	    _this.on('dispose', function () {
	      cov_2q58cqsssn.f[1]++;
	      cov_2q58cqsssn.s[11]++;

	      _this.apiMedia.removeUpdateListener(mediaStatusUpdateHandler);

	      cov_2q58cqsssn.s[12]++;

	      _this.apiSession.removeUpdateListener(sessionUpdateHandler);

	      cov_2q58cqsssn.s[13]++;

	      _this.onMediaStatusUpdate();

	      cov_2q58cqsssn.s[14]++;

	      _this.onSessionUpdate(false);
	    });

	    var tracks = (cov_2q58cqsssn.s[15]++, _this.textTracks());
	    cov_2q58cqsssn.s[16]++;

	    if (tracks) {
	      cov_2q58cqsssn.b[1][0]++;
	      var changeHandler = (cov_2q58cqsssn.s[17]++, _this.handleTextTracksChange.bind(assertThisInitialized(_this)));
	      cov_2q58cqsssn.s[18]++;
	      tracks.addEventListener('change', changeHandler);
	      cov_2q58cqsssn.s[19]++;

	      _this.on('dispose', function () {
	        cov_2q58cqsssn.f[2]++;
	        cov_2q58cqsssn.s[20]++;
	        tracks.removeEventListener('change', changeHandler);
	      });

	      cov_2q58cqsssn.s[21]++;

	      _this.handleTextTracksChange();
	    } else {
	      cov_2q58cqsssn.b[1][1]++;
	    }

	    cov_2q58cqsssn.s[22]++;

	    try {
	      cov_2q58cqsssn.s[23]++;
	      tracks = _this.audioTracks();
	      cov_2q58cqsssn.s[24]++;

	      if (tracks) {
	        cov_2q58cqsssn.b[2][0]++;

	        var _changeHandler = (cov_2q58cqsssn.s[25]++, _this.handleAudioTracksChange.bind(assertThisInitialized(_this)));

	        cov_2q58cqsssn.s[26]++;
	        tracks.addEventListener('change', _changeHandler);
	        cov_2q58cqsssn.s[27]++;

	        _this.on('dispose', function () {
	          cov_2q58cqsssn.f[3]++;
	          cov_2q58cqsssn.s[28]++;
	          tracks.removeEventListener('change', _changeHandler);
	        });
	      } else {
	        cov_2q58cqsssn.b[2][1]++;
	      }
	    } catch (e) {
	      cov_2q58cqsssn.s[29]++;
	      videojs.log('get player audioTracks fail' + e);
	    }

	    cov_2q58cqsssn.s[30]++;

	    try {
	      cov_2q58cqsssn.s[31]++;
	      tracks = _this.videoTracks();
	      cov_2q58cqsssn.s[32]++;

	      if (tracks) {
	        cov_2q58cqsssn.b[3][0]++;

	        var _changeHandler2 = (cov_2q58cqsssn.s[33]++, _this.handleVideoTracksChange.bind(assertThisInitialized(_this)));

	        cov_2q58cqsssn.s[34]++;
	        tracks.addEventListener('change', _changeHandler2);
	        cov_2q58cqsssn.s[35]++;

	        _this.on('dispose', function () {
	          cov_2q58cqsssn.f[4]++;
	          cov_2q58cqsssn.s[36]++;
	          tracks.removeEventListener('change', _changeHandler2);
	        });
	      } else {
	        cov_2q58cqsssn.b[3][1]++;
	      }
	    } catch (e) {
	      cov_2q58cqsssn.s[37]++;
	      videojs.log('get player videoTracks fail' + e);
	    }

	    cov_2q58cqsssn.s[38]++;

	    _this.update();

	    cov_2q58cqsssn.s[39]++;

	    _this.triggerReady();

	    return _this;
	  }

	  var _proto = Chromecast.prototype;

	  _proto.createEl = function createEl() {
	    cov_2q58cqsssn.f[5]++;
	    var el = (cov_2q58cqsssn.s[40]++, videojs.dom.createEl('div', {
	      id: this.options_.techId,
	      className: 'vjs-tech vjs-tech-chromecast'
	    }));
	    cov_2q58cqsssn.s[41]++;
	    return el;
	  };

	  _proto.update = function update() {
	    cov_2q58cqsssn.f[6]++;
	    cov_2q58cqsssn.s[42]++;
	    this.el_.innerHTML = "<div class=\"casting-image\" style=\"background-image: url('" + this.options_.poster + "')\"></div><div class=\"casting-overlay\"><div class=\"casting-information\"><div class=\"casting-icon\"></div><div class=\"casting-description\"><small>" + this.localize('CASTING TO') + "</small><br>" + this.receiver + "</div></div></div>";
	  };

	  _proto.onSessionUpdate = function onSessionUpdate(isAlive) {
	    cov_2q58cqsssn.f[7]++;
	    cov_2q58cqsssn.s[43]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[4][0]++;
	      cov_2q58cqsssn.s[44]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[4][1]++;
	    }

	    cov_2q58cqsssn.s[45]++;

	    if (!isAlive) {
	      cov_2q58cqsssn.b[5][0]++;
	      cov_2q58cqsssn.s[46]++;
	      return this.onStopAppSuccess();
	    } else {
	      cov_2q58cqsssn.b[5][1]++;
	    }
	  };

	  _proto.onStopAppSuccess = function onStopAppSuccess() {
	    cov_2q58cqsssn.f[8]++;
	    cov_2q58cqsssn.s[47]++;
	    this.stopTrackingCurrentTime();
	    cov_2q58cqsssn.s[48]++;
	    this.apiMedia = null;
	  };

	  _proto.onMediaStatusUpdate = function onMediaStatusUpdate() {
	    cov_2q58cqsssn.f[9]++;
	    cov_2q58cqsssn.s[49]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[6][0]++;
	      cov_2q58cqsssn.s[50]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[6][1]++;
	    }

	    cov_2q58cqsssn.s[51]++;

	    switch (this.apiMedia.playerState) {
	      case chrome.cast.media.PlayerState.BUFFERING:
	        cov_2q58cqsssn.b[7][0]++;
	        cov_2q58cqsssn.s[52]++;
	        this.trigger('waiting');
	        cov_2q58cqsssn.s[53]++;
	        break;

	      case chrome.cast.media.PlayerState.IDLE:
	        cov_2q58cqsssn.b[7][1]++;
	        cov_2q58cqsssn.s[54]++;
	        this.trigger('timeupdate');
	        cov_2q58cqsssn.s[55]++;
	        this.trigger('ended');
	        cov_2q58cqsssn.s[56]++;
	        break;

	      case chrome.cast.media.PlayerState.PAUSED:
	        cov_2q58cqsssn.b[7][2]++;
	        cov_2q58cqsssn.s[57]++;
	        this.trigger('pause');
	        cov_2q58cqsssn.s[58]++;
	        this.paused_ = true;
	        cov_2q58cqsssn.s[59]++;
	        break;

	      case chrome.cast.media.PlayerState.PLAYING:
	        cov_2q58cqsssn.b[7][3]++;
	        cov_2q58cqsssn.s[60]++;
	        this.trigger('playing');
	        cov_2q58cqsssn.s[61]++;
	        this.trigger('play');
	        cov_2q58cqsssn.s[62]++;
	        this.paused_ = false;
	        cov_2q58cqsssn.s[63]++;
	        break;
	    }
	  };

	  _proto.src = function src(_src) {
	    cov_2q58cqsssn.f[10]++;
	  };

	  _proto.currentSrc = function currentSrc() {
	    cov_2q58cqsssn.f[11]++;
	    cov_2q58cqsssn.s[64]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[8][0]++;
	      cov_2q58cqsssn.s[65]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[8][1]++;
	    }

	    cov_2q58cqsssn.s[66]++;
	    return this.apiMedia.media.contentId;
	  };

	  _proto.handleAudioTracksChange = function handleAudioTracksChange() {
	    cov_2q58cqsssn.f[12]++;
	    var trackInfo = (cov_2q58cqsssn.s[67]++, []);
	    var tTracks = (cov_2q58cqsssn.s[68]++, this.textTracks());
	    var tracks = (cov_2q58cqsssn.s[69]++, this.audioTracks());
	    cov_2q58cqsssn.s[70]++;

	    if (!tracks) {
	      cov_2q58cqsssn.b[9][0]++;
	      cov_2q58cqsssn.s[71]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[9][1]++;
	    }

	    cov_2q58cqsssn.s[72]++;

	    for (var i = 0; i < tracks.length; i++) {
	      var track = (cov_2q58cqsssn.s[73]++, tracks[i]);
	      cov_2q58cqsssn.s[74]++;

	      if (track.enabled) {
	        cov_2q58cqsssn.b[10][0]++;
	        cov_2q58cqsssn.s[75]++;
	        trackInfo.push(i + 1 + tTracks.length);
	      } else {
	        cov_2q58cqsssn.b[10][1]++;
	      }
	    }

	    cov_2q58cqsssn.s[76]++;

	    if ((cov_2q58cqsssn.b[12][0]++, this.apiMedia) && (cov_2q58cqsssn.b[12][1]++, trackInfo.length)) {
	      cov_2q58cqsssn.b[11][0]++;
	      cov_2q58cqsssn.s[77]++;
	      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
	      cov_2q58cqsssn.s[78]++;
	      return this.apiMedia.editTracksInfo(this.tracksInfoRequest, this.onTrackSuccess.bind(this), this.onTrackError.bind(this));
	    } else {
	      cov_2q58cqsssn.b[11][1]++;
	    }
	  };

	  _proto.handleVideoTracksChange = function handleVideoTracksChange() {
	    cov_2q58cqsssn.f[13]++;
	  };

	  _proto.handleTextTracksChange = function handleTextTracksChange() {
	    cov_2q58cqsssn.f[14]++;
	    var trackInfo = (cov_2q58cqsssn.s[79]++, []);
	    var tracks = (cov_2q58cqsssn.s[80]++, this.textTracks());
	    cov_2q58cqsssn.s[81]++;

	    if (!tracks) {
	      cov_2q58cqsssn.b[13][0]++;
	      cov_2q58cqsssn.s[82]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[13][1]++;
	    }

	    cov_2q58cqsssn.s[83]++;

	    for (var i = 0; i < tracks.length; i++) {
	      var track = (cov_2q58cqsssn.s[84]++, tracks[i]);
	      cov_2q58cqsssn.s[85]++;

	      if (track.mode === 'showing') {
	        cov_2q58cqsssn.b[14][0]++;
	        cov_2q58cqsssn.s[86]++;
	        trackInfo.push(i + 1);
	      } else {
	        cov_2q58cqsssn.b[14][1]++;
	      }
	    }

	    cov_2q58cqsssn.s[87]++;

	    if ((cov_2q58cqsssn.b[16][0]++, this.apiMedia) && (cov_2q58cqsssn.b[16][1]++, trackInfo.length)) {
	      cov_2q58cqsssn.b[15][0]++;
	      cov_2q58cqsssn.s[88]++;
	      this.tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(trackInfo);
	      cov_2q58cqsssn.s[89]++;
	      return this.apiMedia.editTracksInfo(this.tracksInfoRequest, this.onTrackSuccess.bind(this), this.onTrackError.bind(this));
	    } else {
	      cov_2q58cqsssn.b[15][1]++;
	    }
	  };

	  _proto.onTrackSuccess = function onTrackSuccess() {
	    cov_2q58cqsssn.f[15]++;
	    cov_2q58cqsssn.s[90]++;
	    return videojs.log('track added');
	  };

	  _proto.onTrackError = function onTrackError(e) {
	    cov_2q58cqsssn.f[16]++;
	    cov_2q58cqsssn.s[91]++;
	    return videojs.log('Cast track Error: ' + JSON.stringify(e));
	  };

	  _proto.castError = function castError(e) {
	    cov_2q58cqsssn.f[17]++;
	    cov_2q58cqsssn.s[92]++;
	    return videojs.log('Cast Error: ' + JSON.stringify(e));
	  };

	  _proto.play = function play() {
	    cov_2q58cqsssn.f[18]++;
	    cov_2q58cqsssn.s[93]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[17][0]++;
	      cov_2q58cqsssn.s[94]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[17][1]++;
	    }

	    cov_2q58cqsssn.s[95]++;

	    if (this.paused_) {
	      cov_2q58cqsssn.b[18][0]++;
	      cov_2q58cqsssn.s[96]++;
	      this.apiMedia.play(null, this.mediaCommandSuccessCallback.bind(this, 'Playing: ' + this.apiMedia.sessionId), this.castError.bind(this));
	    } else {
	      cov_2q58cqsssn.b[18][1]++;
	    }

	    cov_2q58cqsssn.s[97]++;
	    return this.paused_ = false;
	  };

	  _proto.pause = function pause() {
	    cov_2q58cqsssn.f[19]++;
	    cov_2q58cqsssn.s[98]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[19][0]++;
	      cov_2q58cqsssn.s[99]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[19][1]++;
	    }

	    cov_2q58cqsssn.s[100]++;

	    if (!this.paused_) {
	      cov_2q58cqsssn.b[20][0]++;
	      cov_2q58cqsssn.s[101]++;
	      this.apiMedia.pause(null, this.mediaCommandSuccessCallback.bind(this, 'Paused: ' + this.apiMedia.sessionId), this.castError.bind(this));
	      cov_2q58cqsssn.s[102]++;
	      return this.paused_ = true;
	    } else {
	      cov_2q58cqsssn.b[20][1]++;
	    }
	  };

	  _proto.paused = function paused() {
	    cov_2q58cqsssn.f[20]++;
	    cov_2q58cqsssn.s[103]++;
	    return this.paused_;
	  };

	  _proto.ended = function ended() {
	    cov_2q58cqsssn.f[21]++;
	    cov_2q58cqsssn.s[104]++;
	    return chrome.cast.media.IdleReason === 'FINISHED';
	  };

	  _proto.currentTime = function currentTime() {
	    cov_2q58cqsssn.f[22]++;
	    cov_2q58cqsssn.s[105]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[21][0]++;
	      cov_2q58cqsssn.s[106]++;
	      return 0;
	    } else {
	      cov_2q58cqsssn.b[21][1]++;
	    }

	    cov_2q58cqsssn.s[107]++;
	    return this.apiMedia.getEstimatedTime();
	  };

	  _proto.setCurrentTime = function setCurrentTime(position) {
	    cov_2q58cqsssn.f[23]++;
	    cov_2q58cqsssn.s[108]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[22][0]++;
	      cov_2q58cqsssn.s[109]++;
	      return 0;
	    } else {
	      cov_2q58cqsssn.b[22][1]++;
	    }

	    var request;
	    cov_2q58cqsssn.s[110]++;
	    request = new chrome.cast.media.SeekRequest();
	    cov_2q58cqsssn.s[111]++;
	    request.currentTime = position;
	    cov_2q58cqsssn.s[112]++;
	    return this.apiMedia.seek(request, this.onSeekSuccess.bind(this, position), this.castError.bind(this));
	  };

	  _proto.onSeekSuccess = function onSeekSuccess(position) {
	    cov_2q58cqsssn.f[24]++;
	    cov_2q58cqsssn.s[113]++;
	    videojs.log('seek success' + position);
	  };

	  _proto.volume = function volume() {
	    cov_2q58cqsssn.f[25]++;
	    cov_2q58cqsssn.s[114]++;
	    return this.volume_;
	  };

	  _proto.duration = function duration() {
	    cov_2q58cqsssn.f[26]++;
	    cov_2q58cqsssn.s[115]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[23][0]++;
	      cov_2q58cqsssn.s[116]++;
	      return 0;
	    } else {
	      cov_2q58cqsssn.b[23][1]++;
	    }

	    cov_2q58cqsssn.s[117]++;
	    return (cov_2q58cqsssn.b[24][0]++, this.apiMedia.media.duration) || (cov_2q58cqsssn.b[24][1]++, Infinity);
	  };

	  _proto.controls = function controls() {
	    cov_2q58cqsssn.f[27]++;
	    cov_2q58cqsssn.s[118]++;
	    return false;
	  };

	  _proto.setVolume = function setVolume(level, mute) {
	    if (mute === void 0) {
	      mute = (cov_2q58cqsssn.b[25][0]++, false);
	    }

	    cov_2q58cqsssn.f[28]++;
	    var request;
	    var volume;
	    cov_2q58cqsssn.s[119]++;

	    if (!this.apiMedia) {
	      cov_2q58cqsssn.b[26][0]++;
	      cov_2q58cqsssn.s[120]++;
	      return;
	    } else {
	      cov_2q58cqsssn.b[26][1]++;
	    }

	    cov_2q58cqsssn.s[121]++;
	    volume = new chrome.cast.Volume();
	    cov_2q58cqsssn.s[122]++;
	    volume.level = level;
	    cov_2q58cqsssn.s[123]++;
	    volume.muted = mute;
	    cov_2q58cqsssn.s[124]++;
	    this.volume_ = volume.level;
	    cov_2q58cqsssn.s[125]++;
	    this.muted_ = mute;
	    cov_2q58cqsssn.s[126]++;
	    request = new chrome.cast.media.VolumeRequest();
	    cov_2q58cqsssn.s[127]++;
	    request.volume = volume;
	    cov_2q58cqsssn.s[128]++;
	    this.apiMedia.setVolume(request, this.mediaCommandSuccessCallback.bind(this, 'Volume changed'), this.castError.bind(this));
	    cov_2q58cqsssn.s[129]++;
	    return this.trigger('volumechange');
	  };

	  _proto.mediaCommandSuccessCallback = function mediaCommandSuccessCallback(information) {
	    cov_2q58cqsssn.f[29]++;
	    cov_2q58cqsssn.s[130]++;
	    videojs.log(information);
	  };

	  _proto.muted = function muted() {
	    cov_2q58cqsssn.f[30]++;
	    cov_2q58cqsssn.s[131]++;
	    return this.muted_;
	  };

	  _proto.setMuted = function setMuted(muted) {
	    cov_2q58cqsssn.f[31]++;
	    cov_2q58cqsssn.s[132]++;
	    return this.setVolume(this.volume_, muted);
	  };

	  _proto.supportsFullScreen = function supportsFullScreen() {
	    cov_2q58cqsssn.f[32]++;
	    cov_2q58cqsssn.s[133]++;
	    return false;
	  };

	  _proto.resetSrc_ = function resetSrc_(callback) {
	    cov_2q58cqsssn.f[33]++;
	    cov_2q58cqsssn.s[134]++;
	    callback();
	  };

	  _proto.dispose = function dispose() {
	    cov_2q58cqsssn.f[34]++;
	    cov_2q58cqsssn.s[135]++;
	    this.resetSrc_(Function.prototype);
	    cov_2q58cqsssn.s[136]++;

	    _Tech.prototype.dispose.call(this, this);
	  };

	  _proto.seeking = function seeking() {
	    cov_2q58cqsssn.f[35]++;
	    cov_2q58cqsssn.s[137]++;
	    return false;
	  };

	  _proto.seekable = function seekable() {
	    cov_2q58cqsssn.f[36]++;
	    cov_2q58cqsssn.s[138]++;
	    return false;
	  };

	  _proto.playbackRate = function playbackRate() {
	    cov_2q58cqsssn.f[37]++;
	    cov_2q58cqsssn.s[139]++;
	    return 1;
	  };

	  return Chromecast;
	}(Tech);

	cov_2q58cqsssn.s[140]++;
	Chromecast.prototype.paused_ = false;
	cov_2q58cqsssn.s[141]++;
	Chromecast.prototype.options_ = {};
	cov_2q58cqsssn.s[142]++;
	Chromecast.prototype.timerStep = 1000;
	cov_2q58cqsssn.s[143]++;

	Chromecast.isSupported = function () {
	  cov_2q58cqsssn.f[38]++;
	  cov_2q58cqsssn.s[144]++;
	  return true;
	};

	cov_2q58cqsssn.s[145]++;
	Tech.withSourceHandlers(Chromecast);
	cov_2q58cqsssn.s[146]++;
	Chromecast.nativeSourceHandler = {};
	cov_2q58cqsssn.s[147]++;

	Chromecast.nativeSourceHandler.canPlayType = function (source) {
	  cov_2q58cqsssn.f[39]++;
	  var dashTypeRE = (cov_2q58cqsssn.s[148]++, /^application\/(?:dash\+xml|(x-|vnd\.apple\.)mpegurl)/i);
	  var dashExtRE = (cov_2q58cqsssn.s[149]++, /^video\/(mpd|mp4|webm|m3u8)/i);
	  cov_2q58cqsssn.s[150]++;

	  if (dashTypeRE.test(source)) {
	    cov_2q58cqsssn.b[27][0]++;
	    cov_2q58cqsssn.s[151]++;
	    return 'probably';
	  } else {
	    cov_2q58cqsssn.b[27][1]++;
	    cov_2q58cqsssn.s[152]++;

	    if (dashExtRE.test(source)) {
	      cov_2q58cqsssn.b[28][0]++;
	      cov_2q58cqsssn.s[153]++;
	      return 'maybe';
	    } else {
	      cov_2q58cqsssn.b[28][1]++;
	      cov_2q58cqsssn.s[154]++;
	      return '';
	    }
	  }
	};

	cov_2q58cqsssn.s[155]++;

	Chromecast.nativeSourceHandler.canHandleSource = function (source) {
	  cov_2q58cqsssn.f[40]++;
	  cov_2q58cqsssn.s[156]++;

	  if (source.type) {
	    cov_2q58cqsssn.b[29][0]++;
	    cov_2q58cqsssn.s[157]++;
	    return Chromecast.nativeSourceHandler.canPlayType(source.type);
	  } else {
	    cov_2q58cqsssn.b[29][1]++;
	    cov_2q58cqsssn.s[158]++;

	    if (source.src) {
	      cov_2q58cqsssn.b[30][0]++;
	      cov_2q58cqsssn.s[159]++;
	      return Chromecast.nativeSourceHandler.canPlayType(source.src);
	    } else {
	      cov_2q58cqsssn.b[30][1]++;
	    }
	  }

	  cov_2q58cqsssn.s[160]++;
	  return '';
	};

	cov_2q58cqsssn.s[161]++;

	Chromecast.nativeSourceHandler.handleSource = function (source, tech) {
	  cov_2q58cqsssn.f[41]++;
	  cov_2q58cqsssn.s[162]++;
	  tech.src(source.src);
	};

	cov_2q58cqsssn.s[163]++;

	Chromecast.nativeSourceHandler.dispose = function () {
	  cov_2q58cqsssn.f[42]++;
	};

	cov_2q58cqsssn.s[164]++;
	Chromecast.registerSourceHandler(Chromecast.nativeSourceHandler);
	cov_2q58cqsssn.s[165]++;
	Chromecast.prototype.featuresVolumeControl = true;
	cov_2q58cqsssn.s[166]++;
	Chromecast.prototype.featuresPlaybackRate = false;
	cov_2q58cqsssn.s[167]++;
	Chromecast.prototype.movingMediaElementInDOM = false;
	cov_2q58cqsssn.s[168]++;
	Chromecast.prototype.featuresFullscreenResize = false;
	cov_2q58cqsssn.s[169]++;
	Chromecast.prototype.featuresTimeupdateEvents = false;
	cov_2q58cqsssn.s[170]++;
	Chromecast.prototype.featuresProgressEvents = false;
	cov_2q58cqsssn.s[171]++;
	Chromecast.prototype.featuresNativeTextTracks = true;
	cov_2q58cqsssn.s[172]++;
	Chromecast.prototype.featuresNativeAudioTracks = true;
	cov_2q58cqsssn.s[173]++;
	Chromecast.prototype.featuresNativeVideoTracks = false;
	cov_2q58cqsssn.s[174]++;
	videojs.options.chromecast = {};
	cov_2q58cqsssn.s[175]++;

	if (typeof Tech.getTech('Chromecast') === 'undefined') {
	  cov_2q58cqsssn.b[31][0]++;
	  cov_2q58cqsssn.s[176]++;
	  Tech.registerTech('Chromecast', Chromecast);
	} else {
	  cov_2q58cqsssn.b[31][1]++;
	}

	var cov_2aep3n7mve = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/google-chromecast.js',
	      hash = '1545f325d2ff13a14f0e52fbedc7ebeada97e9f1',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/google-chromecast.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 6,
	          column: 16
	        },
	        end: {
	          line: 6,
	          column: 49
	        }
	      },
	      '1': {
	        start: {
	          line: 10,
	          column: 4
	        },
	        end: {
	          line: 10,
	          column: 27
	        }
	      },
	      '2': {
	        start: {
	          line: 14,
	          column: 0
	        },
	        end: {
	          line: 14,
	          column: 35
	        }
	      },
	      '3': {
	        start: {
	          line: 16,
	          column: 0
	        },
	        end: {
	          line: 16,
	          column: 44
	        }
	      },
	      '4': {
	        start: {
	          line: 19,
	          column: 0
	        },
	        end: {
	          line: 19,
	          column: 58
	        }
	      },
	      '5': {
	        start: {
	          line: 22,
	          column: 0
	        },
	        end: {
	          line: 24,
	          column: 1
	        }
	      },
	      '6': {
	        start: {
	          line: 23,
	          column: 2
	        },
	        end: {
	          line: 23,
	          column: 56
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 9,
	            column: 2
	          },
	          end: {
	            line: 9,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 9,
	            column: 32
	          },
	          end: {
	            line: 11,
	            column: 3
	          }
	        },
	        line: 9
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 22,
	            column: 0
	          },
	          end: {
	            line: 24,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 22,
	            column: 0
	          },
	          end: {
	            line: 24,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 22,
	            column: 0
	          },
	          end: {
	            line: 24,
	            column: 1
	          }
	        }],
	        line: 22
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0
	    },
	    f: {
	      '0': 0
	    },
	    b: {
	      '0': [0, 0]
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

	var Chromecast$1 = /*#__PURE__*/function (_Component) {
	  inheritsLoose(Chromecast, _Component);

	  function Chromecast(player, options) {
	    cov_2aep3n7mve.f[0]++;
	    cov_2aep3n7mve.s[1]++;
	    return _Component.call(this, player, options) || this;
	  }

	  return Chromecast;
	}(Component$2);

	cov_2aep3n7mve.s[2]++;
	Chromecast$1.prototype.options_ = {};
	cov_2aep3n7mve.s[3]++;
	videojs.options.children.push('chromecast');
	cov_2aep3n7mve.s[4]++;
	videojs.addLanguage('en', {
	  'CASTING TO': 'CASTING TO'
	});
	cov_2aep3n7mve.s[5]++;

	if (typeof Component$2.getComponent('Chromecast') === 'undefined') {
	  cov_2aep3n7mve.b[0][0]++;
	  cov_2aep3n7mve.s[6]++;
	  Component$2.registerComponent('Chromecast', Chromecast$1);
	} else {
	  cov_2aep3n7mve.b[0][1]++;
	}

	var cov_279kbuek1j = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/plugin.js',
	      hash = 'becec49e3ea261963ca19dd7220a2c15e30167ee',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/plugin.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 13,
	          column: 19
	        },
	        end: {
	          line: 20,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 14,
	          column: 4
	        },
	        end: {
	          line: 16,
	          column: 5
	        }
	      },
	      '2': {
	        start: {
	          line: 15,
	          column: 8
	        },
	        end: {
	          line: 15,
	          column: 15
	        }
	      },
	      '3': {
	        start: {
	          line: 18,
	          column: 17
	        },
	        end: {
	          line: 18,
	          column: 21
	        }
	      },
	      '4': {
	        start: {
	          line: 19,
	          column: 4
	        },
	        end: {
	          line: 19,
	          column: 42
	        }
	      },
	      '5': {
	        start: {
	          line: 23,
	          column: 23
	        },
	        end: {
	          line: 23,
	          column: 63
	        }
	      },
	      '6': {
	        start: {
	          line: 26,
	          column: 0
	        },
	        end: {
	          line: 28,
	          column: 1
	        }
	      },
	      '7': {
	        start: {
	          line: 27,
	          column: 2
	        },
	        end: {
	          line: 27,
	          column: 43
	        }
	      },
	      '8': {
	        start: {
	          line: 31,
	          column: 0
	        },
	        end: {
	          line: 31,
	          column: 29
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: 'chromecast',
	        decl: {
	          start: {
	            line: 13,
	            column: 28
	          },
	          end: {
	            line: 13,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 13,
	            column: 48
	          },
	          end: {
	            line: 20,
	            column: 1
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
	            column: 4
	          },
	          end: {
	            line: 16,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 14,
	            column: 4
	          },
	          end: {
	            line: 16,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 14,
	            column: 4
	          },
	          end: {
	            line: 16,
	            column: 5
	          }
	        }],
	        line: 14
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 14,
	            column: 8
	          },
	          end: {
	            line: 14,
	            column: 67
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 14,
	            column: 8
	          },
	          end: {
	            line: 14,
	            column: 25
	          }
	        }, {
	          start: {
	            line: 14,
	            column: 30
	          },
	          end: {
	            line: 14,
	            column: 37
	          }
	        }, {
	          start: {
	            line: 14,
	            column: 41
	          },
	          end: {
	            line: 14,
	            column: 66
	          }
	        }],
	        line: 14
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 23,
	            column: 23
	          },
	          end: {
	            line: 23,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 23,
	            column: 23
	          },
	          end: {
	            line: 23,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 23,
	            column: 49
	          },
	          end: {
	            line: 23,
	            column: 63
	          }
	        }],
	        line: 23
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 26,
	            column: 0
	          },
	          end: {
	            line: 28,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 26,
	            column: 0
	          },
	          end: {
	            line: 28,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 26,
	            column: 0
	          },
	          end: {
	            line: 28,
	            column: 1
	          }
	        }],
	        line: 26
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
	      '1': [0, 0, 0],
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
	cov_279kbuek1j.s[0]++;

	var chromecast = function chromecast(options) {
	  cov_279kbuek1j.f[0]++;
	  cov_279kbuek1j.s[1]++;

	  if ((cov_279kbuek1j.b[1][0]++, options === false) || (cov_279kbuek1j.b[1][1]++, options) && (cov_279kbuek1j.b[1][2]++, options.enabled === false)) {
	    cov_279kbuek1j.b[0][0]++;
	    cov_279kbuek1j.s[2]++;
	    return;
	  } else {
	    cov_279kbuek1j.b[0][1]++;
	  }

	  var player = (cov_279kbuek1j.s[3]++, this);
	  cov_279kbuek1j.s[4]++;
	  player.addChild('Chromecast', options);
	};

	var registerPlugin = (cov_279kbuek1j.s[5]++, (cov_279kbuek1j.b[2][0]++, videojs.registerPlugin) || (cov_279kbuek1j.b[2][1]++, videojs.plugin));
	cov_279kbuek1j.s[6]++;

	if (typeof videojs.getPlugin('chromecast') === 'undefined') {
	  cov_279kbuek1j.b[3][0]++;
	  cov_279kbuek1j.s[7]++;
	  registerPlugin('chromecast', chromecast);
	} else {
	  cov_279kbuek1j.b[3][1]++;
	}

	cov_279kbuek1j.s[8]++;
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
