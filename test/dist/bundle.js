/*! @name videojs-google-chromecast @version 0.1.2 @license UNLICENSED */
(function (QUnit, sinon, videojs, videojs$1) {
	'use strict';

	QUnit = QUnit && Object.prototype.hasOwnProperty.call(QUnit, 'default') ? QUnit['default'] : QUnit;
	sinon = sinon && Object.prototype.hasOwnProperty.call(sinon, 'default') ? sinon['default'] : sinon;
	videojs = videojs && Object.prototype.hasOwnProperty.call(videojs, 'default') ? videojs['default'] : videojs;
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
	      hash = 'c4247f78814c255ab58ab1b6f8f3039094fa19b2',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/component/control-bar/chromecast-button.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 6,
	          column: 18
	        },
	        end: {
	          line: 6,
	          column: 51
	        }
	      },
	      '1': {
	        start: {
	          line: 7,
	          column: 19
	        },
	        end: {
	          line: 7,
	          column: 53
	        }
	      },
	      '2': {
	        start: {
	          line: 8,
	          column: 15
	        },
	        end: {
	          line: 8,
	          column: 45
	        }
	      },
	      '3': {
	        start: {
	          line: 10,
	          column: 23
	        },
	        end: {
	          line: 10,
	          column: 26
	        }
	      },
	      '4': {
	        start: {
	          line: 11,
	          column: 27
	        },
	        end: {
	          line: 11,
	          column: 30
	        }
	      },
	      '5': {
	        start: {
	          line: 13,
	          column: 21
	        },
	        end: {
	          line: 19,
	          column: 1
	        }
	      },
	      '6': {
	        start: {
	          line: 23,
	          column: 8
	        },
	        end: {
	          line: 23,
	          column: 30
	        }
	      },
	      '7': {
	        start: {
	          line: 25,
	          column: 8
	        },
	        end: {
	          line: 25,
	          column: 28
	        }
	      },
	      '8': {
	        start: {
	          line: 26,
	          column: 8
	        },
	        end: {
	          line: 26,
	          column: 30
	        }
	      },
	      '9': {
	        start: {
	          line: 27,
	          column: 8
	        },
	        end: {
	          line: 27,
	          column: 75
	        }
	      },
	      '10': {
	        start: {
	          line: 31,
	          column: 20
	        },
	        end: {
	          line: 31,
	          column: 24
	        }
	      },
	      '11': {
	        start: {
	          line: 33,
	          column: 8
	        },
	        end: {
	          line: 33,
	          column: 28
	        }
	      },
	      '12': {
	        start: {
	          line: 34,
	          column: 8
	        },
	        end: {
	          line: 34,
	          column: 30
	        }
	      },
	      '13': {
	        start: {
	          line: 35,
	          column: 8
	        },
	        end: {
	          line: 35,
	          column: 25
	        }
	      },
	      '14': {
	        start: {
	          line: 36,
	          column: 8
	        },
	        end: {
	          line: 36,
	          column: 28
	        }
	      },
	      '15': {
	        start: {
	          line: 37,
	          column: 8
	        },
	        end: {
	          line: 37,
	          column: 30
	        }
	      },
	      '16': {
	        start: {
	          line: 38,
	          column: 8
	        },
	        end: {
	          line: 38,
	          column: 25
	        }
	      },
	      '17': {
	        start: {
	          line: 39,
	          column: 8
	        },
	        end: {
	          line: 39,
	          column: 24
	        }
	      },
	      '18': {
	        start: {
	          line: 40,
	          column: 8
	        },
	        end: {
	          line: 40,
	          column: 27
	        }
	      },
	      '19': {
	        start: {
	          line: 41,
	          column: 8
	        },
	        end: {
	          line: 41,
	          column: 33
	        }
	      },
	      '20': {
	        start: {
	          line: 42,
	          column: 8
	        },
	        end: {
	          line: 42,
	          column: 36
	        }
	      },
	      '21': {
	        start: {
	          line: 43,
	          column: 8
	        },
	        end: {
	          line: 43,
	          column: 44
	        }
	      },
	      '22': {
	        start: {
	          line: 44,
	          column: 8
	        },
	        end: {
	          line: 44,
	          column: 43
	        }
	      },
	      '23': {
	        start: {
	          line: 45,
	          column: 8
	        },
	        end: {
	          line: 45,
	          column: 32
	        }
	      },
	      '24': {
	        start: {
	          line: 46,
	          column: 8
	        },
	        end: {
	          line: 46,
	          column: 42
	        }
	      },
	      '25': {
	        start: {
	          line: 47,
	          column: 8
	        },
	        end: {
	          line: 47,
	          column: 33
	        }
	      },
	      '26': {
	        start: {
	          line: 48,
	          column: 8
	        },
	        end: {
	          line: 48,
	          column: 31
	        }
	      },
	      '27': {
	        start: {
	          line: 49,
	          column: 8
	        },
	        end: {
	          line: 49,
	          column: 27
	        }
	      },
	      '28': {
	        start: {
	          line: 50,
	          column: 8
	        },
	        end: {
	          line: 50,
	          column: 31
	        }
	      },
	      '29': {
	        start: {
	          line: 51,
	          column: 8
	        },
	        end: {
	          line: 51,
	          column: 32
	        }
	      },
	      '30': {
	        start: {
	          line: 52,
	          column: 8
	        },
	        end: {
	          line: 52,
	          column: 31
	        }
	      },
	      '31': {
	        start: {
	          line: 53,
	          column: 8
	        },
	        end: {
	          line: 53,
	          column: 34
	        }
	      },
	      '32': {
	        start: {
	          line: 54,
	          column: 8
	        },
	        end: {
	          line: 54,
	          column: 34
	        }
	      },
	      '33': {
	        start: {
	          line: 55,
	          column: 8
	        },
	        end: {
	          line: 55,
	          column: 19
	        }
	      },
	      '34': {
	        start: {
	          line: 57,
	          column: 8
	        },
	        end: {
	          line: 61,
	          column: 9
	        }
	      },
	      '35': {
	        start: {
	          line: 58,
	          column: 12
	        },
	        end: {
	          line: 58,
	          column: 38
	        }
	      },
	      '36': {
	        start: {
	          line: 59,
	          column: 15
	        },
	        end: {
	          line: 61,
	          column: 9
	        }
	      },
	      '37': {
	        start: {
	          line: 60,
	          column: 12
	        },
	        end: {
	          line: 60,
	          column: 72
	        }
	      },
	      '38': {
	        start: {
	          line: 63,
	          column: 8
	        },
	        end: {
	          line: 67,
	          column: 9
	        }
	      },
	      '39': {
	        start: {
	          line: 64,
	          column: 12
	        },
	        end: {
	          line: 64,
	          column: 56
	        }
	      },
	      '40': {
	        start: {
	          line: 65,
	          column: 15
	        },
	        end: {
	          line: 67,
	          column: 9
	        }
	      },
	      '41': {
	        start: {
	          line: 66,
	          column: 12
	        },
	        end: {
	          line: 66,
	          column: 72
	        }
	      },
	      '42': {
	        start: {
	          line: 69,
	          column: 8
	        },
	        end: {
	          line: 72,
	          column: 10
	        }
	      },
	      '43': {
	        start: {
	          line: 74,
	          column: 8
	        },
	        end: {
	          line: 76,
	          column: 9
	        }
	      },
	      '44': {
	        start: {
	          line: 75,
	          column: 12
	        },
	        end: {
	          line: 75,
	          column: 56
	        }
	      },
	      '45': {
	        start: {
	          line: 78,
	          column: 8
	        },
	        end: {
	          line: 80,
	          column: 9
	        }
	      },
	      '46': {
	        start: {
	          line: 79,
	          column: 12
	        },
	        end: {
	          line: 79,
	          column: 56
	        }
	      },
	      '47': {
	        start: {
	          line: 82,
	          column: 8
	        },
	        end: {
	          line: 149,
	          column: 9
	        }
	      },
	      '48': {
	        start: {
	          line: 83,
	          column: 12
	        },
	        end: {
	          line: 83,
	          column: 28
	        }
	      },
	      '49': {
	        start: {
	          line: 85,
	          column: 32
	        },
	        end: {
	          line: 85,
	          column: 57
	        }
	      },
	      '50': {
	        start: {
	          line: 86,
	          column: 12
	        },
	        end: {
	          line: 86,
	          column: 45
	        }
	      },
	      '51': {
	        start: {
	          line: 87,
	          column: 12
	        },
	        end: {
	          line: 87,
	          column: 58
	        }
	      },
	      '52': {
	        start: {
	          line: 88,
	          column: 12
	        },
	        end: {
	          line: 88,
	          column: 68
	        }
	      },
	      '53': {
	        start: {
	          line: 89,
	          column: 12
	        },
	        end: {
	          line: 89,
	          column: 63
	        }
	      },
	      '54': {
	        start: {
	          line: 90,
	          column: 12
	        },
	        end: {
	          line: 107,
	          column: 50
	        }
	      },
	      '55': {
	        start: {
	          line: 109,
	          column: 25
	        },
	        end: {
	          line: 109,
	          column: 57
	        }
	      },
	      '56': {
	        start: {
	          line: 111,
	          column: 12
	        },
	        end: {
	          line: 116,
	          column: 14
	        }
	      },
	      '57': {
	        start: {
	          line: 112,
	          column: 16
	        },
	        end: {
	          line: 115,
	          column: 17
	        }
	      },
	      '58': {
	        start: {
	          line: 113,
	          column: 20
	        },
	        end: {
	          line: 113,
	          column: 47
	        }
	      },
	      '59': {
	        start: {
	          line: 114,
	          column: 20
	        },
	        end: {
	          line: 114,
	          column: 226
	        }
	      },
	      '60': {
	        start: {
	          line: 118,
	          column: 12
	        },
	        end: {
	          line: 118,
	          column: 52
	        }
	      },
	      '61': {
	        start: {
	          line: 120,
	          column: 12
	        },
	        end: {
	          line: 120,
	          column: 31
	        }
	      },
	      '62': {
	        start: {
	          line: 122,
	          column: 16
	        },
	        end: {
	          line: 136,
	          column: 17
	        }
	      },
	      '63': {
	        start: {
	          line: 123,
	          column: 20
	        },
	        end: {
	          line: 133,
	          column: 21
	        }
	      },
	      '64': {
	        start: {
	          line: 124,
	          column: 24
	        },
	        end: {
	          line: 124,
	          column: 78
	        }
	      },
	      '65': {
	        start: {
	          line: 125,
	          column: 24
	        },
	        end: {
	          line: 125,
	          column: 116
	        }
	      },
	      '66': {
	        start: {
	          line: 127,
	          column: 24
	        },
	        end: {
	          line: 127,
	          column: 51
	        }
	      },
	      '67': {
	        start: {
	          line: 129,
	          column: 24
	        },
	        end: {
	          line: 129,
	          column: 74
	        }
	      },
	      '68': {
	        start: {
	          line: 131,
	          column: 24
	        },
	        end: {
	          line: 131,
	          column: 36
	        }
	      },
	      '69': {
	        start: {
	          line: 132,
	          column: 24
	        },
	        end: {
	          line: 132,
	          column: 93
	        }
	      },
	      '70': {
	        start: {
	          line: 135,
	          column: 20
	        },
	        end: {
	          line: 135,
	          column: 54
	        }
	      },
	      '71': {
	        start: {
	          line: 139,
	          column: 12
	        },
	        end: {
	          line: 139,
	          column: 65
	        }
	      },
	      '72': {
	        start: {
	          line: 140,
	          column: 12
	        },
	        end: {
	          line: 140,
	          column: 102
	        }
	      },
	      '73': {
	        start: {
	          line: 141,
	          column: 12
	        },
	        end: {
	          line: 145,
	          column: 13
	        }
	      },
	      '74': {
	        start: {
	          line: 143,
	          column: 20
	        },
	        end: {
	          line: 143,
	          column: 46
	        }
	      },
	      '75': {
	        start: {
	          line: 146,
	          column: 12
	        },
	        end: {
	          line: 146,
	          column: 38
	        }
	      },
	      '76': {
	        start: {
	          line: 147,
	          column: 12
	        },
	        end: {
	          line: 147,
	          column: 37
	        }
	      },
	      '77': {
	        start: {
	          line: 148,
	          column: 12
	        },
	        end: {
	          line: 148,
	          column: 35
	        }
	      },
	      '78': {
	        start: {
	          line: 153,
	          column: 8
	        },
	        end: {
	          line: 153,
	          column: 45
	        }
	      },
	      '79': {
	        start: {
	          line: 154,
	          column: 8
	        },
	        end: {
	          line: 187,
	          column: 9
	        }
	      },
	      '80': {
	        start: {
	          line: 155,
	          column: 12
	        },
	        end: {
	          line: 170,
	          column: 13
	        }
	      },
	      '81': {
	        start: {
	          line: 156,
	          column: 16
	        },
	        end: {
	          line: 156,
	          column: 38
	        }
	      },
	      '82': {
	        start: {
	          line: 157,
	          column: 16
	        },
	        end: {
	          line: 157,
	          column: 76
	        }
	      },
	      '83': {
	        start: {
	          line: 159,
	          column: 16
	        },
	        end: {
	          line: 159,
	          column: 82
	        }
	      },
	      '84': {
	        start: {
	          line: 160,
	          column: 16
	        },
	        end: {
	          line: 160,
	          column: 60
	        }
	      },
	      '85': {
	        start: {
	          line: 162,
	          column: 16
	        },
	        end: {
	          line: 162,
	          column: 69
	        }
	      },
	      '86': {
	        start: {
	          line: 163,
	          column: 16
	        },
	        end: {
	          line: 163,
	          column: 106
	        }
	      },
	      '87': {
	        start: {
	          line: 165,
	          column: 16
	        },
	        end: {
	          line: 165,
	          column: 42
	        }
	      },
	      '88': {
	        start: {
	          line: 167,
	          column: 16
	        },
	        end: {
	          line: 167,
	          column: 39
	        }
	      },
	      '89': {
	        start: {
	          line: 168,
	          column: 16
	        },
	        end: {
	          line: 168,
	          column: 46
	        }
	      },
	      '90': {
	        start: {
	          line: 169,
	          column: 16
	        },
	        end: {
	          line: 169,
	          column: 27
	        }
	      },
	      '91': {
	        start: {
	          line: 172,
	          column: 12
	        },
	        end: {
	          line: 186,
	          column: 13
	        }
	      },
	      '92': {
	        start: {
	          line: 173,
	          column: 16
	        },
	        end: {
	          line: 173,
	          column: 77
	        }
	      },
	      '93': {
	        start: {
	          line: 175,
	          column: 16
	        },
	        end: {
	          line: 175,
	          column: 82
	        }
	      },
	      '94': {
	        start: {
	          line: 176,
	          column: 16
	        },
	        end: {
	          line: 176,
	          column: 60
	        }
	      },
	      '95': {
	        start: {
	          line: 178,
	          column: 16
	        },
	        end: {
	          line: 178,
	          column: 69
	        }
	      },
	      '96': {
	        start: {
	          line: 179,
	          column: 16
	        },
	        end: {
	          line: 179,
	          column: 106
	        }
	      },
	      '97': {
	        start: {
	          line: 181,
	          column: 16
	        },
	        end: {
	          line: 181,
	          column: 42
	        }
	      },
	      '98': {
	        start: {
	          line: 183,
	          column: 16
	        },
	        end: {
	          line: 183,
	          column: 39
	        }
	      },
	      '99': {
	        start: {
	          line: 184,
	          column: 16
	        },
	        end: {
	          line: 184,
	          column: 46
	        }
	      },
	      '100': {
	        start: {
	          line: 185,
	          column: 16
	        },
	        end: {
	          line: 185,
	          column: 27
	        }
	      },
	      '101': {
	        start: {
	          line: 191,
	          column: 8
	        },
	        end: {
	          line: 191,
	          column: 31
	        }
	      },
	      '102': {
	        start: {
	          line: 192,
	          column: 8
	        },
	        end: {
	          line: 192,
	          column: 38
	        }
	      },
	      '103': {
	        start: {
	          line: 194,
	          column: 8
	        },
	        end: {
	          line: 196,
	          column: 9
	        }
	      },
	      '104': {
	        start: {
	          line: 195,
	          column: 12
	        },
	        end: {
	          line: 195,
	          column: 47
	        }
	      },
	      '105': {
	        start: {
	          line: 198,
	          column: 8
	        },
	        end: {
	          line: 205,
	          column: 9
	        }
	      },
	      '106': {
	        start: {
	          line: 199,
	          column: 12
	        },
	        end: {
	          line: 202,
	          column: 13
	        }
	      },
	      '107': {
	        start: {
	          line: 200,
	          column: 16
	        },
	        end: {
	          line: 200,
	          column: 42
	        }
	      },
	      '108': {
	        start: {
	          line: 201,
	          column: 16
	        },
	        end: {
	          line: 201,
	          column: 22
	        }
	      },
	      '109': {
	        start: {
	          line: 203,
	          column: 12
	        },
	        end: {
	          line: 203,
	          column: 52
	        }
	      },
	      '110': {
	        start: {
	          line: 204,
	          column: 12
	        },
	        end: {
	          line: 204,
	          column: 45
	        }
	      },
	      '111': {
	        start: {
	          line: 207,
	          column: 8
	        },
	        end: {
	          line: 210,
	          column: 9
	        }
	      },
	      '112': {
	        start: {
	          line: 208,
	          column: 12
	        },
	        end: {
	          line: 208,
	          column: 51
	        }
	      },
	      '113': {
	        start: {
	          line: 209,
	          column: 12
	        },
	        end: {
	          line: 209,
	          column: 46
	        }
	      },
	      '114': {
	        start: {
	          line: 212,
	          column: 8
	        },
	        end: {
	          line: 215,
	          column: 9
	        }
	      },
	      '115': {
	        start: {
	          line: 213,
	          column: 12
	        },
	        end: {
	          line: 213,
	          column: 49
	        }
	      },
	      '116': {
	        start: {
	          line: 214,
	          column: 12
	        },
	        end: {
	          line: 214,
	          column: 45
	        }
	      },
	      '117': {
	        start: {
	          line: 217,
	          column: 8
	        },
	        end: {
	          line: 220,
	          column: 9
	        }
	      },
	      '118': {
	        start: {
	          line: 218,
	          column: 12
	        },
	        end: {
	          line: 218,
	          column: 54
	        }
	      },
	      '119': {
	        start: {
	          line: 219,
	          column: 12
	        },
	        end: {
	          line: 219,
	          column: 45
	        }
	      },
	      '120': {
	        start: {
	          line: 222,
	          column: 8
	        },
	        end: {
	          line: 224,
	          column: 9
	        }
	      },
	      '121': {
	        start: {
	          line: 223,
	          column: 12
	        },
	        end: {
	          line: 223,
	          column: 61
	        }
	      },
	      '122': {
	        start: {
	          line: 226,
	          column: 8
	        },
	        end: {
	          line: 233,
	          column: 9
	        }
	      },
	      '123': {
	        start: {
	          line: 227,
	          column: 12
	        },
	        end: {
	          line: 227,
	          column: 72
	        }
	      },
	      '124': {
	        start: {
	          line: 228,
	          column: 12
	        },
	        end: {
	          line: 228,
	          column: 55
	        }
	      },
	      '125': {
	        start: {
	          line: 229,
	          column: 12
	        },
	        end: {
	          line: 229,
	          column: 51
	        }
	      },
	      '126': {
	        start: {
	          line: 231,
	          column: 12
	        },
	        end: {
	          line: 231,
	          column: 38
	        }
	      },
	      '127': {
	        start: {
	          line: 232,
	          column: 12
	        },
	        end: {
	          line: 232,
	          column: 47
	        }
	      },
	      '128': {
	        start: {
	          line: 235,
	          column: 8
	        },
	        end: {
	          line: 237,
	          column: 9
	        }
	      },
	      '129': {
	        start: {
	          line: 236,
	          column: 12
	        },
	        end: {
	          line: 236,
	          column: 67
	        }
	      },
	      '130': {
	        start: {
	          line: 239,
	          column: 8
	        },
	        end: {
	          line: 241,
	          column: 9
	        }
	      },
	      '131': {
	        start: {
	          line: 240,
	          column: 12
	        },
	        end: {
	          line: 240,
	          column: 64
	        }
	      },
	      '132': {
	        start: {
	          line: 243,
	          column: 8
	        },
	        end: {
	          line: 249,
	          column: 9
	        }
	      },
	      '133': {
	        start: {
	          line: 245,
	          column: 12
	        },
	        end: {
	          line: 245,
	          column: 99
	        }
	      },
	      '134': {
	        start: {
	          line: 246,
	          column: 12
	        },
	        end: {
	          line: 246,
	          column: 93
	        }
	      },
	      '135': {
	        start: {
	          line: 248,
	          column: 12
	        },
	        end: {
	          line: 248,
	          column: 54
	        }
	      },
	      '136': {
	        start: {
	          line: 251,
	          column: 8
	        },
	        end: {
	          line: 253,
	          column: 9
	        }
	      },
	      '137': {
	        start: {
	          line: 252,
	          column: 12
	        },
	        end: {
	          line: 252,
	          column: 65
	        }
	      },
	      '138': {
	        start: {
	          line: 255,
	          column: 8
	        },
	        end: {
	          line: 257,
	          column: 9
	        }
	      },
	      '139': {
	        start: {
	          line: 256,
	          column: 12
	        },
	        end: {
	          line: 256,
	          column: 62
	        }
	      },
	      '140': {
	        start: {
	          line: 259,
	          column: 8
	        },
	        end: {
	          line: 261,
	          column: 9
	        }
	      },
	      '141': {
	        start: {
	          line: 260,
	          column: 12
	        },
	        end: {
	          line: 260,
	          column: 58
	        }
	      },
	      '142': {
	        start: {
	          line: 263,
	          column: 8
	        },
	        end: {
	          line: 265,
	          column: 9
	        }
	      },
	      '143': {
	        start: {
	          line: 264,
	          column: 12
	        },
	        end: {
	          line: 264,
	          column: 70
	        }
	      },
	      '144': {
	        start: {
	          line: 267,
	          column: 8
	        },
	        end: {
	          line: 269,
	          column: 9
	        }
	      },
	      '145': {
	        start: {
	          line: 268,
	          column: 12
	        },
	        end: {
	          line: 268,
	          column: 45
	        }
	      },
	      '146': {
	        start: {
	          line: 271,
	          column: 8
	        },
	        end: {
	          line: 273,
	          column: 9
	        }
	      },
	      '147': {
	        start: {
	          line: 272,
	          column: 12
	        },
	        end: {
	          line: 272,
	          column: 47
	        }
	      },
	      '148': {
	        start: {
	          line: 275,
	          column: 8
	        },
	        end: {
	          line: 277,
	          column: 9
	        }
	      },
	      '149': {
	        start: {
	          line: 276,
	          column: 12
	        },
	        end: {
	          line: 276,
	          column: 55
	        }
	      },
	      '150': {
	        start: {
	          line: 279,
	          column: 8
	        },
	        end: {
	          line: 281,
	          column: 9
	        }
	      },
	      '151': {
	        start: {
	          line: 280,
	          column: 12
	        },
	        end: {
	          line: 280,
	          column: 51
	        }
	      },
	      '152': {
	        start: {
	          line: 285,
	          column: 8
	        },
	        end: {
	          line: 293,
	          column: 9
	        }
	      },
	      '153': {
	        start: {
	          line: 286,
	          column: 12
	        },
	        end: {
	          line: 286,
	          column: 37
	        }
	      },
	      '154': {
	        start: {
	          line: 287,
	          column: 12
	        },
	        end: {
	          line: 289,
	          column: 13
	        }
	      },
	      '155': {
	        start: {
	          line: 288,
	          column: 16
	        },
	        end: {
	          line: 288,
	          column: 41
	        }
	      },
	      '156': {
	        start: {
	          line: 292,
	          column: 12
	        },
	        end: {
	          line: 292,
	          column: 53
	        }
	      },
	      '157': {
	        start: {
	          line: 297,
	          column: 27
	        },
	        end: {
	          line: 297,
	          column: 77
	        }
	      },
	      '158': {
	        start: {
	          line: 298,
	          column: 8
	        },
	        end: {
	          line: 306,
	          column: 9
	        }
	      },
	      '159': {
	        start: {
	          line: 299,
	          column: 32
	        },
	        end: {
	          line: 299,
	          column: 78
	        }
	      },
	      '160': {
	        start: {
	          line: 300,
	          column: 12
	        },
	        end: {
	          line: 300,
	          column: 95
	        }
	      },
	      '161': {
	        start: {
	          line: 301,
	          column: 12
	        },
	        end: {
	          line: 301,
	          column: 56
	        }
	      },
	      '162': {
	        start: {
	          line: 303,
	          column: 12
	        },
	        end: {
	          line: 305,
	          column: 13
	        }
	      },
	      '163': {
	        start: {
	          line: 304,
	          column: 16
	        },
	        end: {
	          line: 304,
	          column: 58
	        }
	      },
	      '164': {
	        start: {
	          line: 310,
	          column: 27
	        },
	        end: {
	          line: 310,
	          column: 77
	        }
	      },
	      '165': {
	        start: {
	          line: 311,
	          column: 8
	        },
	        end: {
	          line: 335,
	          column: 9
	        }
	      },
	      '166': {
	        start: {
	          line: 312,
	          column: 32
	        },
	        end: {
	          line: 312,
	          column: 64
	        }
	      },
	      '167': {
	        start: {
	          line: 313,
	          column: 12
	        },
	        end: {
	          line: 313,
	          column: 100
	        }
	      },
	      '168': {
	        start: {
	          line: 314,
	          column: 12
	        },
	        end: {
	          line: 314,
	          column: 56
	        }
	      },
	      '169': {
	        start: {
	          line: 315,
	          column: 12
	        },
	        end: {
	          line: 328,
	          column: 14
	        }
	      },
	      '170': {
	        start: {
	          line: 316,
	          column: 16
	        },
	        end: {
	          line: 316,
	          column: 34
	        }
	      },
	      '171': {
	        start: {
	          line: 317,
	          column: 16
	        },
	        end: {
	          line: 327,
	          column: 18
	        }
	      },
	      '172': {
	        start: {
	          line: 318,
	          column: 20
	        },
	        end: {
	          line: 318,
	          column: 61
	        }
	      },
	      '173': {
	        start: {
	          line: 319,
	          column: 20
	        },
	        end: {
	          line: 319,
	          column: 99
	        }
	      },
	      '174': {
	        start: {
	          line: 320,
	          column: 20
	        },
	        end: {
	          line: 320,
	          column: 113
	        }
	      },
	      '175': {
	        start: {
	          line: 321,
	          column: 40
	        },
	        end: {
	          line: 321,
	          column: 85
	        }
	      },
	      '176': {
	        start: {
	          line: 322,
	          column: 20
	        },
	        end: {
	          line: 326,
	          column: 21
	        }
	      },
	      '177': {
	        start: {
	          line: 323,
	          column: 24
	        },
	        end: {
	          line: 325,
	          column: 29
	        }
	      },
	      '178': {
	        start: {
	          line: 324,
	          column: 28
	        },
	        end: {
	          line: 324,
	          column: 102
	        }
	      },
	      '179': {
	        start: {
	          line: 330,
	          column: 12
	        },
	        end: {
	          line: 334,
	          column: 13
	        }
	      },
	      '180': {
	        start: {
	          line: 331,
	          column: 16
	        },
	        end: {
	          line: 331,
	          column: 58
	        }
	      },
	      '181': {
	        start: {
	          line: 332,
	          column: 33
	        },
	        end: {
	          line: 332,
	          column: 94
	        }
	      },
	      '182': {
	        start: {
	          line: 333,
	          column: 16
	        },
	        end: {
	          line: 333,
	          column: 840
	        }
	      },
	      '183': {
	        start: {
	          line: 339,
	          column: 17
	        },
	        end: {
	          line: 339,
	          column: 58
	        }
	      },
	      '184': {
	        start: {
	          line: 340,
	          column: 21
	        },
	        end: {
	          line: 340,
	          column: 39
	        }
	      },
	      '185': {
	        start: {
	          line: 341,
	          column: 8
	        },
	        end: {
	          line: 341,
	          column: 46
	        }
	      },
	      '186': {
	        start: {
	          line: 342,
	          column: 8
	        },
	        end: {
	          line: 342,
	          column: 41
	        }
	      },
	      '187': {
	        start: {
	          line: 346,
	          column: 8
	        },
	        end: {
	          line: 348,
	          column: 9
	        }
	      },
	      '188': {
	        start: {
	          line: 347,
	          column: 12
	        },
	        end: {
	          line: 347,
	          column: 80
	        }
	      },
	      '189': {
	        start: {
	          line: 352,
	          column: 21
	        },
	        end: {
	          line: 352,
	          column: 32
	        }
	      },
	      '190': {
	        start: {
	          line: 353,
	          column: 20
	        },
	        end: {
	          line: 353,
	          column: 24
	        }
	      },
	      '191': {
	        start: {
	          line: 355,
	          column: 16
	        },
	        end: {
	          line: 355,
	          column: 58
	        }
	      },
	      '192': {
	        start: {
	          line: 356,
	          column: 8
	        },
	        end: {
	          line: 358,
	          column: 9
	        }
	      },
	      '193': {
	        start: {
	          line: 357,
	          column: 12
	        },
	        end: {
	          line: 357,
	          column: 34
	        }
	      },
	      '194': {
	        start: {
	          line: 360,
	          column: 8
	        },
	        end: {
	          line: 364,
	          column: 9
	        }
	      },
	      '195': {
	        start: {
	          line: 361,
	          column: 12
	        },
	        end: {
	          line: 363,
	          column: 13
	        }
	      },
	      '196': {
	        start: {
	          line: 362,
	          column: 16
	        },
	        end: {
	          line: 362,
	          column: 55
	        }
	      },
	      '197': {
	        start: {
	          line: 365,
	          column: 8
	        },
	        end: {
	          line: 386,
	          column: 9
	        }
	      },
	      '198': {
	        start: {
	          line: 366,
	          column: 12
	        },
	        end: {
	          line: 366,
	          column: 35
	        }
	      },
	      '199': {
	        start: {
	          line: 367,
	          column: 12
	        },
	        end: {
	          line: 367,
	          column: 38
	        }
	      },
	      '200': {
	        start: {
	          line: 368,
	          column: 12
	        },
	        end: {
	          line: 385,
	          column: 14
	        }
	      },
	      '201': {
	        start: {
	          line: 369,
	          column: 16
	        },
	        end: {
	          line: 384,
	          column: 17
	        }
	      },
	      '202': {
	        start: {
	          line: 370,
	          column: 20
	        },
	        end: {
	          line: 370,
	          column: 36
	        }
	      },
	      '203': {
	        start: {
	          line: 372,
	          column: 20
	        },
	        end: {
	          line: 375,
	          column: 21
	        }
	      },
	      '204': {
	        start: {
	          line: 373,
	          column: 24
	        },
	        end: {
	          line: 373,
	          column: 46
	        }
	      },
	      '205': {
	        start: {
	          line: 374,
	          column: 24
	        },
	        end: {
	          line: 374,
	          column: 116
	        }
	      },
	      '206': {
	        start: {
	          line: 376,
	          column: 20
	        },
	        end: {
	          line: 376,
	          column: 45
	        }
	      },
	      '207': {
	        start: {
	          line: 377,
	          column: 20
	        },
	        end: {
	          line: 381,
	          column: 23
	        }
	      },
	      '208': {
	        start: {
	          line: 382,
	          column: 20
	        },
	        end: {
	          line: 382,
	          column: 38
	        }
	      },
	      '209': {
	        start: {
	          line: 383,
	          column: 20
	        },
	        end: {
	          line: 383,
	          column: 39
	        }
	      },
	      '210': {
	        start: {
	          line: 390,
	          column: 8
	        },
	        end: {
	          line: 390,
	          column: 20
	        }
	      },
	      '211': {
	        start: {
	          line: 392,
	          column: 25
	        },
	        end: {
	          line: 392,
	          column: 81
	        }
	      },
	      '212': {
	        start: {
	          line: 393,
	          column: 8
	        },
	        end: {
	          line: 395,
	          column: 9
	        }
	      },
	      '213': {
	        start: {
	          line: 394,
	          column: 12
	        },
	        end: {
	          line: 394,
	          column: 48
	        }
	      },
	      '214': {
	        start: {
	          line: 397,
	          column: 8
	        },
	        end: {
	          line: 402,
	          column: 9
	        }
	      },
	      '215': {
	        start: {
	          line: 398,
	          column: 12
	        },
	        end: {
	          line: 398,
	          column: 86
	        }
	      },
	      '216': {
	        start: {
	          line: 399,
	          column: 12
	        },
	        end: {
	          line: 401,
	          column: 13
	        }
	      },
	      '217': {
	        start: {
	          line: 400,
	          column: 16
	        },
	        end: {
	          line: 400,
	          column: 52
	        }
	      },
	      '218': {
	        start: {
	          line: 406,
	          column: 8
	        },
	        end: {
	          line: 406,
	          column: 20
	        }
	      },
	      '219': {
	        start: {
	          line: 408,
	          column: 25
	        },
	        end: {
	          line: 408,
	          column: 29
	        }
	      },
	      '220': {
	        start: {
	          line: 409,
	          column: 8
	        },
	        end: {
	          line: 413,
	          column: 9
	        }
	      },
	      '221': {
	        start: {
	          line: 410,
	          column: 12
	        },
	        end: {
	          line: 410,
	          column: 86
	        }
	      },
	      '222': {
	        start: {
	          line: 412,
	          column: 12
	        },
	        end: {
	          line: 412,
	          column: 81
	        }
	      },
	      '223': {
	        start: {
	          line: 415,
	          column: 8
	        },
	        end: {
	          line: 417,
	          column: 9
	        }
	      },
	      '224': {
	        start: {
	          line: 416,
	          column: 12
	        },
	        end: {
	          line: 416,
	          column: 49
	        }
	      },
	      '225': {
	        start: {
	          line: 421,
	          column: 8
	        },
	        end: {
	          line: 423,
	          column: 9
	        }
	      },
	      '226': {
	        start: {
	          line: 422,
	          column: 12
	        },
	        end: {
	          line: 422,
	          column: 76
	        }
	      },
	      '227': {
	        start: {
	          line: 424,
	          column: 8
	        },
	        end: {
	          line: 424,
	          column: 67
	        }
	      },
	      '228': {
	        start: {
	          line: 428,
	          column: 8
	        },
	        end: {
	          line: 428,
	          column: 37
	        }
	      },
	      '229': {
	        start: {
	          line: 428,
	          column: 29
	        },
	        end: {
	          line: 428,
	          column: 35
	        }
	      },
	      '230': {
	        start: {
	          line: 430,
	          column: 8
	        },
	        end: {
	          line: 432,
	          column: 9
	        }
	      },
	      '231': {
	        start: {
	          line: 431,
	          column: 12
	        },
	        end: {
	          line: 431,
	          column: 30
	        }
	      },
	      '232': {
	        start: {
	          line: 433,
	          column: 8
	        },
	        end: {
	          line: 433,
	          column: 26
	        }
	      },
	      '233': {
	        start: {
	          line: 437,
	          column: 21
	        },
	        end: {
	          line: 437,
	          column: 25
	        }
	      },
	      '234': {
	        start: {
	          line: 438,
	          column: 8
	        },
	        end: {
	          line: 448,
	          column: 9
	        }
	      },
	      '235': {
	        start: {
	          line: 439,
	          column: 12
	        },
	        end: {
	          line: 445,
	          column: 13
	        }
	      },
	      '236': {
	        start: {
	          line: 440,
	          column: 16
	        },
	        end: {
	          line: 442,
	          column: 17
	        }
	      },
	      '237': {
	        start: {
	          line: 441,
	          column: 20
	        },
	        end: {
	          line: 441,
	          column: 54
	        }
	      },
	      '238': {
	        start: {
	          line: 447,
	          column: 12
	        },
	        end: {
	          line: 447,
	          column: 49
	        }
	      },
	      '239': {
	        start: {
	          line: 449,
	          column: 8
	        },
	        end: {
	          line: 449,
	          column: 29
	        }
	      },
	      '240': {
	        start: {
	          line: 451,
	          column: 8
	        },
	        end: {
	          line: 451,
	          column: 27
	        }
	      },
	      '241': {
	        start: {
	          line: 455,
	          column: 8
	        },
	        end: {
	          line: 455,
	          column: 55
	        }
	      },
	      '242': {
	        start: {
	          line: 457,
	          column: 8
	        },
	        end: {
	          line: 468,
	          column: 9
	        }
	      },
	      '243': {
	        start: {
	          line: 458,
	          column: 12
	        },
	        end: {
	          line: 465,
	          column: 14
	        }
	      },
	      '244': {
	        start: {
	          line: 459,
	          column: 16
	        },
	        end: {
	          line: 464,
	          column: 17
	        }
	      },
	      '245': {
	        start: {
	          line: 460,
	          column: 20
	        },
	        end: {
	          line: 460,
	          column: 46
	        }
	      },
	      '246': {
	        start: {
	          line: 461,
	          column: 20
	        },
	        end: {
	          line: 461,
	          column: 44
	        }
	      },
	      '247': {
	        start: {
	          line: 463,
	          column: 20
	        },
	        end: {
	          line: 463,
	          column: 43
	        }
	      },
	      '248': {
	        start: {
	          line: 467,
	          column: 12
	        },
	        end: {
	          line: 467,
	          column: 70
	        }
	      },
	      '249': {
	        start: {
	          line: 476,
	          column: 8
	        },
	        end: {
	          line: 502,
	          column: 9
	        }
	      },
	      '250': {
	        start: {
	          line: 478,
	          column: 32
	        },
	        end: {
	          line: 478,
	          column: 92
	        }
	      },
	      '251': {
	        start: {
	          line: 479,
	          column: 16
	        },
	        end: {
	          line: 483,
	          column: 17
	        }
	      },
	      '252': {
	        start: {
	          line: 480,
	          column: 20
	        },
	        end: {
	          line: 480,
	          column: 41
	        }
	      },
	      '253': {
	        start: {
	          line: 481,
	          column: 20
	        },
	        end: {
	          line: 481,
	          column: 54
	        }
	      },
	      '254': {
	        start: {
	          line: 482,
	          column: 20
	        },
	        end: {
	          line: 482,
	          column: 26
	        }
	      },
	      '255': {
	        start: {
	          line: 485,
	          column: 30
	        },
	        end: {
	          line: 485,
	          column: 55
	        }
	      },
	      '256': {
	        start: {
	          line: 486,
	          column: 16
	        },
	        end: {
	          line: 490,
	          column: 17
	        }
	      },
	      '257': {
	        start: {
	          line: 487,
	          column: 20
	        },
	        end: {
	          line: 487,
	          column: 41
	        }
	      },
	      '258': {
	        start: {
	          line: 488,
	          column: 20
	        },
	        end: {
	          line: 488,
	          column: 54
	        }
	      },
	      '259': {
	        start: {
	          line: 489,
	          column: 20
	        },
	        end: {
	          line: 489,
	          column: 26
	        }
	      },
	      '260': {
	        start: {
	          line: 492,
	          column: 16
	        },
	        end: {
	          line: 492,
	          column: 41
	        }
	      },
	      '261': {
	        start: {
	          line: 494,
	          column: 16
	        },
	        end: {
	          line: 494,
	          column: 44
	        }
	      },
	      '262': {
	        start: {
	          line: 496,
	          column: 16
	        },
	        end: {
	          line: 498,
	          column: 17
	        }
	      },
	      '263': {
	        start: {
	          line: 497,
	          column: 20
	        },
	        end: {
	          line: 497,
	          column: 54
	        }
	      },
	      '264': {
	        start: {
	          line: 500,
	          column: 16
	        },
	        end: {
	          line: 500,
	          column: 50
	        }
	      },
	      '265': {
	        start: {
	          line: 504,
	          column: 8
	        },
	        end: {
	          line: 509,
	          column: 9
	        }
	      },
	      '266': {
	        start: {
	          line: 511,
	          column: 8
	        },
	        end: {
	          line: 519,
	          column: 9
	        }
	      },
	      '267': {
	        start: {
	          line: 513,
	          column: 16
	        },
	        end: {
	          line: 517,
	          column: 17
	        }
	      },
	      '268': {
	        start: {
	          line: 514,
	          column: 20
	        },
	        end: {
	          line: 514,
	          column: 46
	        }
	      },
	      '269': {
	        start: {
	          line: 515,
	          column: 23
	        },
	        end: {
	          line: 517,
	          column: 17
	        }
	      },
	      '270': {
	        start: {
	          line: 516,
	          column: 20
	        },
	        end: {
	          line: 516,
	          column: 45
	        }
	      },
	      '271': {
	        start: {
	          line: 521,
	          column: 8
	        },
	        end: {
	          line: 529,
	          column: 9
	        }
	      },
	      '272': {
	        start: {
	          line: 523,
	          column: 16
	        },
	        end: {
	          line: 527,
	          column: 17
	        }
	      },
	      '273': {
	        start: {
	          line: 524,
	          column: 20
	        },
	        end: {
	          line: 524,
	          column: 45
	        }
	      },
	      '274': {
	        start: {
	          line: 526,
	          column: 20
	        },
	        end: {
	          line: 526,
	          column: 47
	        }
	      },
	      '275': {
	        start: {
	          line: 531,
	          column: 8
	        },
	        end: {
	          line: 540,
	          column: 9
	        }
	      },
	      '276': {
	        start: {
	          line: 533,
	          column: 32
	        },
	        end: {
	          line: 533,
	          column: 61
	        }
	      },
	      '277': {
	        start: {
	          line: 534,
	          column: 16
	        },
	        end: {
	          line: 538,
	          column: 17
	        }
	      },
	      '278': {
	        start: {
	          line: 535,
	          column: 20
	        },
	        end: {
	          line: 535,
	          column: 53
	        }
	      },
	      '279': {
	        start: {
	          line: 537,
	          column: 20
	        },
	        end: {
	          line: 537,
	          column: 54
	        }
	      },
	      '280': {
	        start: {
	          line: 542,
	          column: 8
	        },
	        end: {
	          line: 546,
	          column: 9
	        }
	      },
	      '281': {
	        start: {
	          line: 544,
	          column: 16
	        },
	        end: {
	          line: 544,
	          column: 48
	        }
	      },
	      '282': {
	        start: {
	          line: 548,
	          column: 8
	        },
	        end: {
	          line: 552,
	          column: 9
	        }
	      },
	      '283': {
	        start: {
	          line: 550,
	          column: 16
	        },
	        end: {
	          line: 550,
	          column: 56
	        }
	      },
	      '284': {
	        start: {
	          line: 554,
	          column: 8
	        },
	        end: {
	          line: 558,
	          column: 9
	        }
	      },
	      '285': {
	        start: {
	          line: 556,
	          column: 16
	        },
	        end: {
	          line: 556,
	          column: 63
	        }
	      },
	      '286': {
	        start: {
	          line: 560,
	          column: 8
	        },
	        end: {
	          line: 564,
	          column: 9
	        }
	      },
	      '287': {
	        start: {
	          line: 562,
	          column: 16
	        },
	        end: {
	          line: 562,
	          column: 54
	        }
	      },
	      '288': {
	        start: {
	          line: 566,
	          column: 8
	        },
	        end: {
	          line: 571,
	          column: 9
	        }
	      },
	      '289': {
	        start: {
	          line: 568,
	          column: 16
	        },
	        end: {
	          line: 568,
	          column: 58
	        }
	      },
	      '290': {
	        start: {
	          line: 569,
	          column: 16
	        },
	        end: {
	          line: 569,
	          column: 52
	        }
	      },
	      '291': {
	        start: {
	          line: 576,
	          column: 27
	        },
	        end: {
	          line: 576,
	          column: 29
	        }
	      },
	      '292': {
	        start: {
	          line: 578,
	          column: 8
	        },
	        end: {
	          line: 583,
	          column: 20
	        }
	      },
	      '293': {
	        start: {
	          line: 579,
	          column: 12
	        },
	        end: {
	          line: 582,
	          column: 13
	        }
	      },
	      '294': {
	        start: {
	          line: 580,
	          column: 16
	        },
	        end: {
	          line: 580,
	          column: 57
	        }
	      },
	      '295': {
	        start: {
	          line: 581,
	          column: 16
	        },
	        end: {
	          line: 581,
	          column: 35
	        }
	      },
	      '296': {
	        start: {
	          line: 585,
	          column: 8
	        },
	        end: {
	          line: 590,
	          column: 20
	        }
	      },
	      '297': {
	        start: {
	          line: 586,
	          column: 12
	        },
	        end: {
	          line: 589,
	          column: 13
	        }
	      },
	      '298': {
	        start: {
	          line: 587,
	          column: 16
	        },
	        end: {
	          line: 587,
	          column: 57
	        }
	      },
	      '299': {
	        start: {
	          line: 588,
	          column: 16
	        },
	        end: {
	          line: 588,
	          column: 36
	        }
	      },
	      '300': {
	        start: {
	          line: 592,
	          column: 8
	        },
	        end: {
	          line: 594,
	          column: 20
	        }
	      },
	      '301': {
	        start: {
	          line: 593,
	          column: 12
	        },
	        end: {
	          line: 593,
	          column: 46
	        }
	      },
	      '302': {
	        start: {
	          line: 597,
	          column: 8
	        },
	        end: {
	          line: 623,
	          column: 20
	        }
	      },
	      '303': {
	        start: {
	          line: 598,
	          column: 12
	        },
	        end: {
	          line: 598,
	          column: 30
	        }
	      },
	      '304': {
	        start: {
	          line: 599,
	          column: 12
	        },
	        end: {
	          line: 622,
	          column: 25
	        }
	      },
	      '305': {
	        start: {
	          line: 600,
	          column: 16
	        },
	        end: {
	          line: 600,
	          column: 73
	        }
	      },
	      '306': {
	        start: {
	          line: 602,
	          column: 32
	        },
	        end: {
	          line: 602,
	          column: 81
	        }
	      },
	      '307': {
	        start: {
	          line: 603,
	          column: 16
	        },
	        end: {
	          line: 603,
	          column: 59
	        }
	      },
	      '308': {
	        start: {
	          line: 605,
	          column: 16
	        },
	        end: {
	          line: 609,
	          column: 17
	        }
	      },
	      '309': {
	        start: {
	          line: 606,
	          column: 20
	        },
	        end: {
	          line: 606,
	          column: 44
	        }
	      },
	      '310': {
	        start: {
	          line: 608,
	          column: 20
	        },
	        end: {
	          line: 608,
	          column: 43
	        }
	      },
	      '311': {
	        start: {
	          line: 611,
	          column: 16
	        },
	        end: {
	          line: 621,
	          column: 17
	        }
	      },
	      '312': {
	        start: {
	          line: 613,
	          column: 24
	        },
	        end: {
	          line: 613,
	          column: 43
	        }
	      },
	      '313': {
	        start: {
	          line: 614,
	          column: 24
	        },
	        end: {
	          line: 614,
	          column: 58
	        }
	      },
	      '314': {
	        start: {
	          line: 617,
	          column: 24
	        },
	        end: {
	          line: 617,
	          column: 60
	        }
	      },
	      '315': {
	        start: {
	          line: 618,
	          column: 24
	        },
	        end: {
	          line: 618,
	          column: 98
	        }
	      },
	      '316': {
	        start: {
	          line: 619,
	          column: 24
	        },
	        end: {
	          line: 619,
	          column: 58
	        }
	      },
	      '317': {
	        start: {
	          line: 625,
	          column: 8
	        },
	        end: {
	          line: 640,
	          column: 20
	        }
	      },
	      '318': {
	        start: {
	          line: 626,
	          column: 28
	        },
	        end: {
	          line: 626,
	          column: 88
	        }
	      },
	      '319': {
	        start: {
	          line: 627,
	          column: 12
	        },
	        end: {
	          line: 627,
	          column: 38
	        }
	      },
	      '320': {
	        start: {
	          line: 627,
	          column: 26
	        },
	        end: {
	          line: 627,
	          column: 38
	        }
	      },
	      '321': {
	        start: {
	          line: 629,
	          column: 26
	        },
	        end: {
	          line: 629,
	          column: 51
	        }
	      },
	      '322': {
	        start: {
	          line: 630,
	          column: 12
	        },
	        end: {
	          line: 630,
	          column: 36
	        }
	      },
	      '323': {
	        start: {
	          line: 630,
	          column: 24
	        },
	        end: {
	          line: 630,
	          column: 36
	        }
	      },
	      '324': {
	        start: {
	          line: 632,
	          column: 12
	        },
	        end: {
	          line: 634,
	          column: 13
	        }
	      },
	      '325': {
	        start: {
	          line: 633,
	          column: 16
	        },
	        end: {
	          line: 633,
	          column: 28
	        }
	      },
	      '326': {
	        start: {
	          line: 636,
	          column: 12
	        },
	        end: {
	          line: 636,
	          column: 37
	        }
	      },
	      '327': {
	        start: {
	          line: 639,
	          column: 12
	        },
	        end: {
	          line: 639,
	          column: 23
	        }
	      },
	      '328': {
	        start: {
	          line: 646,
	          column: 8
	        },
	        end: {
	          line: 648,
	          column: 20
	        }
	      },
	      '329': {
	        start: {
	          line: 647,
	          column: 12
	        },
	        end: {
	          line: 647,
	          column: 48
	        }
	      },
	      '330': {
	        start: {
	          line: 654,
	          column: 8
	        },
	        end: {
	          line: 656,
	          column: 20
	        }
	      },
	      '331': {
	        start: {
	          line: 655,
	          column: 12
	        },
	        end: {
	          line: 655,
	          column: 45
	        }
	      },
	      '332': {
	        start: {
	          line: 658,
	          column: 8
	        },
	        end: {
	          line: 690,
	          column: 20
	        }
	      },
	      '333': {
	        start: {
	          line: 659,
	          column: 32
	        },
	        end: {
	          line: 659,
	          column: 92
	        }
	      },
	      '334': {
	        start: {
	          line: 660,
	          column: 12
	        },
	        end: {
	          line: 689,
	          column: 13
	        }
	      },
	      '335': {
	        start: {
	          line: 661,
	          column: 30
	        },
	        end: {
	          line: 661,
	          column: 59
	        }
	      },
	      '336': {
	        start: {
	          line: 662,
	          column: 34
	        },
	        end: {
	          line: 662,
	          column: 45
	        }
	      },
	      '337': {
	        start: {
	          line: 664,
	          column: 16
	        },
	        end: {
	          line: 671,
	          column: 17
	        }
	      },
	      '338': {
	        start: {
	          line: 665,
	          column: 37
	        },
	        end: {
	          line: 665,
	          column: 61
	        }
	      },
	      '339': {
	        start: {
	          line: 666,
	          column: 46
	        },
	        end: {
	          line: 666,
	          column: 77
	        }
	      },
	      '340': {
	        start: {
	          line: 667,
	          column: 20
	        },
	        end: {
	          line: 667,
	          column: 103
	        }
	      },
	      '341': {
	        start: {
	          line: 668,
	          column: 20
	        },
	        end: {
	          line: 668,
	          column: 69
	        }
	      },
	      '342': {
	        start: {
	          line: 669,
	          column: 40
	        },
	        end: {
	          line: 669,
	          column: 67
	        }
	      },
	      '343': {
	        start: {
	          line: 670,
	          column: 20
	        },
	        end: {
	          line: 670,
	          column: 78
	        }
	      },
	      '344': {
	        start: {
	          line: 675,
	          column: 16
	        },
	        end: {
	          line: 675,
	          column: 42
	        }
	      },
	      '345': {
	        start: {
	          line: 677,
	          column: 16
	        },
	        end: {
	          line: 677,
	          column: 36
	        }
	      },
	      '346': {
	        start: {
	          line: 678,
	          column: 29
	        },
	        end: {
	          line: 678,
	          column: 55
	        }
	      },
	      '347': {
	        start: {
	          line: 679,
	          column: 16
	        },
	        end: {
	          line: 679,
	          column: 45
	        }
	      },
	      '348': {
	        start: {
	          line: 680,
	          column: 16
	        },
	        end: {
	          line: 680,
	          column: 63
	        }
	      },
	      '349': {
	        start: {
	          line: 681,
	          column: 16
	        },
	        end: {
	          line: 685,
	          column: 17
	        }
	      },
	      '350': {
	        start: {
	          line: 682,
	          column: 20
	        },
	        end: {
	          line: 684,
	          column: 22
	        }
	      },
	      '351': {
	        start: {
	          line: 683,
	          column: 24
	        },
	        end: {
	          line: 683,
	          column: 50
	        }
	      },
	      '352': {
	        start: {
	          line: 686,
	          column: 16
	        },
	        end: {
	          line: 686,
	          column: 46
	        }
	      },
	      '353': {
	        start: {
	          line: 687,
	          column: 16
	        },
	        end: {
	          line: 687,
	          column: 80
	        }
	      },
	      '354': {
	        start: {
	          line: 692,
	          column: 8
	        },
	        end: {
	          line: 694,
	          column: 20
	        }
	      },
	      '355': {
	        start: {
	          line: 693,
	          column: 12
	        },
	        end: {
	          line: 693,
	          column: 86
	        }
	      },
	      '356': {
	        start: {
	          line: 696,
	          column: 8
	        },
	        end: {
	          line: 698,
	          column: 20
	        }
	      },
	      '357': {
	        start: {
	          line: 697,
	          column: 12
	        },
	        end: {
	          line: 697,
	          column: 83
	        }
	      },
	      '358': {
	        start: {
	          line: 700,
	          column: 8
	        },
	        end: {
	          line: 708,
	          column: 20
	        }
	      },
	      '359': {
	        start: {
	          line: 701,
	          column: 38
	        },
	        end: {
	          line: 701,
	          column: 67
	        }
	      },
	      '360': {
	        start: {
	          line: 702,
	          column: 12
	        },
	        end: {
	          line: 707,
	          column: 13
	        }
	      },
	      '361': {
	        start: {
	          line: 710,
	          column: 8
	        },
	        end: {
	          line: 720,
	          column: 20
	        }
	      },
	      '362': {
	        start: {
	          line: 711,
	          column: 32
	        },
	        end: {
	          line: 711,
	          column: 61
	        }
	      },
	      '363': {
	        start: {
	          line: 712,
	          column: 12
	        },
	        end: {
	          line: 716,
	          column: 13
	        }
	      },
	      '364': {
	        start: {
	          line: 713,
	          column: 16
	        },
	        end: {
	          line: 713,
	          column: 33
	        }
	      },
	      '365': {
	        start: {
	          line: 715,
	          column: 16
	        },
	        end: {
	          line: 715,
	          column: 46
	        }
	      },
	      '366': {
	        start: {
	          line: 718,
	          column: 12
	        },
	        end: {
	          line: 718,
	          column: 57
	        }
	      },
	      '367': {
	        start: {
	          line: 719,
	          column: 12
	        },
	        end: {
	          line: 719,
	          column: 56
	        }
	      },
	      '368': {
	        start: {
	          line: 722,
	          column: 8
	        },
	        end: {
	          line: 726,
	          column: 20
	        }
	      },
	      '369': {
	        start: {
	          line: 723,
	          column: 12
	        },
	        end: {
	          line: 725,
	          column: 13
	        }
	      },
	      '370': {
	        start: {
	          line: 724,
	          column: 16
	        },
	        end: {
	          line: 724,
	          column: 58
	        }
	      },
	      '371': {
	        start: {
	          line: 728,
	          column: 8
	        },
	        end: {
	          line: 732,
	          column: 20
	        }
	      },
	      '372': {
	        start: {
	          line: 729,
	          column: 12
	        },
	        end: {
	          line: 731,
	          column: 13
	        }
	      },
	      '373': {
	        start: {
	          line: 730,
	          column: 16
	        },
	        end: {
	          line: 730,
	          column: 58
	        }
	      },
	      '374': {
	        start: {
	          line: 734,
	          column: 8
	        },
	        end: {
	          line: 736,
	          column: 20
	        }
	      },
	      '375': {
	        start: {
	          line: 735,
	          column: 12
	        },
	        end: {
	          line: 735,
	          column: 44
	        }
	      },
	      '376': {
	        start: {
	          line: 738,
	          column: 8
	        },
	        end: {
	          line: 741,
	          column: 20
	        }
	      },
	      '377': {
	        start: {
	          line: 739,
	          column: 12
	        },
	        end: {
	          line: 739,
	          column: 48
	        }
	      },
	      '378': {
	        start: {
	          line: 740,
	          column: 12
	        },
	        end: {
	          line: 740,
	          column: 46
	        }
	      },
	      '379': {
	        start: {
	          line: 743,
	          column: 8
	        },
	        end: {
	          line: 743,
	          column: 50
	        }
	      },
	      '380': {
	        start: {
	          line: 746,
	          column: 8
	        },
	        end: {
	          line: 748,
	          column: 9
	        }
	      },
	      '381': {
	        start: {
	          line: 747,
	          column: 12
	        },
	        end: {
	          line: 747,
	          column: 37
	        }
	      },
	      '382': {
	        start: {
	          line: 755,
	          column: 8
	        },
	        end: {
	          line: 755,
	          column: 86
	        }
	      },
	      '383': {
	        start: {
	          line: 756,
	          column: 8
	        },
	        end: {
	          line: 760,
	          column: 10
	        }
	      },
	      '384': {
	        start: {
	          line: 763,
	          column: 8
	        },
	        end: {
	          line: 767,
	          column: 9
	        }
	      },
	      '385': {
	        start: {
	          line: 764,
	          column: 12
	        },
	        end: {
	          line: 764,
	          column: 46
	        }
	      },
	      '386': {
	        start: {
	          line: 766,
	          column: 12
	        },
	        end: {
	          line: 766,
	          column: 37
	        }
	      },
	      '387': {
	        start: {
	          line: 772,
	          column: 27
	        },
	        end: {
	          line: 772,
	          column: 29
	        }
	      },
	      '388': {
	        start: {
	          line: 774,
	          column: 8
	        },
	        end: {
	          line: 776,
	          column: 9
	        }
	      },
	      '389': {
	        start: {
	          line: 775,
	          column: 12
	        },
	        end: {
	          line: 775,
	          column: 44
	        }
	      },
	      '390': {
	        start: {
	          line: 778,
	          column: 8
	        },
	        end: {
	          line: 780,
	          column: 9
	        }
	      },
	      '391': {
	        start: {
	          line: 779,
	          column: 12
	        },
	        end: {
	          line: 779,
	          column: 45
	        }
	      },
	      '392': {
	        start: {
	          line: 782,
	          column: 8
	        },
	        end: {
	          line: 784,
	          column: 9
	        }
	      },
	      '393': {
	        start: {
	          line: 783,
	          column: 12
	        },
	        end: {
	          line: 783,
	          column: 44
	        }
	      },
	      '394': {
	        start: {
	          line: 786,
	          column: 8
	        },
	        end: {
	          line: 788,
	          column: 9
	        }
	      },
	      '395': {
	        start: {
	          line: 787,
	          column: 12
	        },
	        end: {
	          line: 787,
	          column: 44
	        }
	      },
	      '396': {
	        start: {
	          line: 790,
	          column: 8
	        },
	        end: {
	          line: 796,
	          column: 20
	        }
	      },
	      '397': {
	        start: {
	          line: 791,
	          column: 12
	        },
	        end: {
	          line: 791,
	          column: 30
	        }
	      },
	      '398': {
	        start: {
	          line: 792,
	          column: 12
	        },
	        end: {
	          line: 794,
	          column: 13
	        }
	      },
	      '399': {
	        start: {
	          line: 793,
	          column: 16
	        },
	        end: {
	          line: 793,
	          column: 28
	        }
	      },
	      '400': {
	        start: {
	          line: 795,
	          column: 12
	        },
	        end: {
	          line: 795,
	          column: 23
	        }
	      },
	      '401': {
	        start: {
	          line: 798,
	          column: 8
	        },
	        end: {
	          line: 803,
	          column: 20
	        }
	      },
	      '402': {
	        start: {
	          line: 799,
	          column: 12
	        },
	        end: {
	          line: 801,
	          column: 13
	        }
	      },
	      '403': {
	        start: {
	          line: 800,
	          column: 16
	        },
	        end: {
	          line: 800,
	          column: 49
	        }
	      },
	      '404': {
	        start: {
	          line: 802,
	          column: 12
	        },
	        end: {
	          line: 802,
	          column: 20
	        }
	      },
	      '405': {
	        start: {
	          line: 805,
	          column: 8
	        },
	        end: {
	          line: 810,
	          column: 20
	        }
	      },
	      '406': {
	        start: {
	          line: 806,
	          column: 12
	        },
	        end: {
	          line: 808,
	          column: 13
	        }
	      },
	      '407': {
	        start: {
	          line: 807,
	          column: 16
	        },
	        end: {
	          line: 807,
	          column: 46
	        }
	      },
	      '408': {
	        start: {
	          line: 809,
	          column: 12
	        },
	        end: {
	          line: 809,
	          column: 20
	        }
	      },
	      '409': {
	        start: {
	          line: 812,
	          column: 8
	        },
	        end: {
	          line: 814,
	          column: 20
	        }
	      },
	      '410': {
	        start: {
	          line: 816,
	          column: 8
	        },
	        end: {
	          line: 820,
	          column: 20
	        }
	      },
	      '411': {
	        start: {
	          line: 818,
	          column: 12
	        },
	        end: {
	          line: 818,
	          column: 38
	        }
	      },
	      '412': {
	        start: {
	          line: 819,
	          column: 12
	        },
	        end: {
	          line: 819,
	          column: 67
	        }
	      },
	      '413': {
	        start: {
	          line: 822,
	          column: 8
	        },
	        end: {
	          line: 824,
	          column: 20
	        }
	      },
	      '414': {
	        start: {
	          line: 823,
	          column: 12
	        },
	        end: {
	          line: 823,
	          column: 64
	        }
	      },
	      '415': {
	        start: {
	          line: 826,
	          column: 8
	        },
	        end: {
	          line: 834,
	          column: 20
	        }
	      },
	      '416': {
	        start: {
	          line: 827,
	          column: 38
	        },
	        end: {
	          line: 827,
	          column: 67
	        }
	      },
	      '417': {
	        start: {
	          line: 828,
	          column: 12
	        },
	        end: {
	          line: 833,
	          column: 13
	        }
	      },
	      '418': {
	        start: {
	          line: 836,
	          column: 8
	        },
	        end: {
	          line: 840,
	          column: 20
	        }
	      },
	      '419': {
	        start: {
	          line: 837,
	          column: 12
	        },
	        end: {
	          line: 839,
	          column: 13
	        }
	      },
	      '420': {
	        start: {
	          line: 838,
	          column: 16
	        },
	        end: {
	          line: 838,
	          column: 58
	        }
	      },
	      '421': {
	        start: {
	          line: 842,
	          column: 8
	        },
	        end: {
	          line: 846,
	          column: 20
	        }
	      },
	      '422': {
	        start: {
	          line: 843,
	          column: 12
	        },
	        end: {
	          line: 845,
	          column: 13
	        }
	      },
	      '423': {
	        start: {
	          line: 844,
	          column: 16
	        },
	        end: {
	          line: 844,
	          column: 46
	        }
	      },
	      '424': {
	        start: {
	          line: 848,
	          column: 8
	        },
	        end: {
	          line: 852,
	          column: 20
	        }
	      },
	      '425': {
	        start: {
	          line: 849,
	          column: 12
	        },
	        end: {
	          line: 851,
	          column: 13
	        }
	      },
	      '426': {
	        start: {
	          line: 850,
	          column: 16
	        },
	        end: {
	          line: 850,
	          column: 47
	        }
	      },
	      '427': {
	        start: {
	          line: 854,
	          column: 8
	        },
	        end: {
	          line: 858,
	          column: 20
	        }
	      },
	      '428': {
	        start: {
	          line: 855,
	          column: 12
	        },
	        end: {
	          line: 857,
	          column: 13
	        }
	      },
	      '429': {
	        start: {
	          line: 856,
	          column: 16
	        },
	        end: {
	          line: 856,
	          column: 42
	        }
	      },
	      '430': {
	        start: {
	          line: 860,
	          column: 8
	        },
	        end: {
	          line: 864,
	          column: 20
	        }
	      },
	      '431': {
	        start: {
	          line: 861,
	          column: 12
	        },
	        end: {
	          line: 863,
	          column: 13
	        }
	      },
	      '432': {
	        start: {
	          line: 862,
	          column: 16
	        },
	        end: {
	          line: 862,
	          column: 53
	        }
	      },
	      '433': {
	        start: {
	          line: 866,
	          column: 8
	        },
	        end: {
	          line: 866,
	          column: 50
	        }
	      },
	      '434': {
	        start: {
	          line: 868,
	          column: 8
	        },
	        end: {
	          line: 868,
	          column: 73
	        }
	      },
	      '435': {
	        start: {
	          line: 870,
	          column: 8
	        },
	        end: {
	          line: 873,
	          column: 9
	        }
	      },
	      '436': {
	        start: {
	          line: 871,
	          column: 12
	        },
	        end: {
	          line: 871,
	          column: 37
	        }
	      },
	      '437': {
	        start: {
	          line: 872,
	          column: 12
	        },
	        end: {
	          line: 872,
	          column: 37
	        }
	      },
	      '438': {
	        start: {
	          line: 877,
	          column: 8
	        },
	        end: {
	          line: 877,
	          column: 93
	        }
	      },
	      '439': {
	        start: {
	          line: 878,
	          column: 8
	        },
	        end: {
	          line: 878,
	          column: 73
	        }
	      },
	      '440': {
	        start: {
	          line: 879,
	          column: 8
	        },
	        end: {
	          line: 879,
	          column: 77
	        }
	      },
	      '441': {
	        start: {
	          line: 880,
	          column: 8
	        },
	        end: {
	          line: 880,
	          column: 42
	        }
	      },
	      '442': {
	        start: {
	          line: 881,
	          column: 8
	        },
	        end: {
	          line: 881,
	          column: 45
	        }
	      },
	      '443': {
	        start: {
	          line: 882,
	          column: 8
	        },
	        end: {
	          line: 884,
	          column: 9
	        }
	      },
	      '444': {
	        start: {
	          line: 883,
	          column: 12
	        },
	        end: {
	          line: 883,
	          column: 38
	        }
	      },
	      '445': {
	        start: {
	          line: 885,
	          column: 8
	        },
	        end: {
	          line: 897,
	          column: 9
	        }
	      },
	      '446': {
	        start: {
	          line: 886,
	          column: 12
	        },
	        end: {
	          line: 886,
	          column: 71
	        }
	      },
	      '447': {
	        start: {
	          line: 888,
	          column: 29
	        },
	        end: {
	          line: 888,
	          column: 80
	        }
	      },
	      '448': {
	        start: {
	          line: 889,
	          column: 12
	        },
	        end: {
	          line: 896,
	          column: 13
	        }
	      },
	      '449': {
	        start: {
	          line: 890,
	          column: 16
	        },
	        end: {
	          line: 895,
	          column: 17
	        }
	      },
	      '450': {
	        start: {
	          line: 891,
	          column: 36
	        },
	        end: {
	          line: 891,
	          column: 87
	        }
	      },
	      '451': {
	        start: {
	          line: 892,
	          column: 20
	        },
	        end: {
	          line: 894,
	          column: 21
	        }
	      },
	      '452': {
	        start: {
	          line: 893,
	          column: 24
	        },
	        end: {
	          line: 893,
	          column: 78
	        }
	      },
	      '453': {
	        start: {
	          line: 898,
	          column: 8
	        },
	        end: {
	          line: 910,
	          column: 9
	        }
	      },
	      '454': {
	        start: {
	          line: 899,
	          column: 12
	        },
	        end: {
	          line: 899,
	          column: 77
	        }
	      },
	      '455': {
	        start: {
	          line: 901,
	          column: 29
	        },
	        end: {
	          line: 901,
	          column: 80
	        }
	      },
	      '456': {
	        start: {
	          line: 902,
	          column: 12
	        },
	        end: {
	          line: 909,
	          column: 13
	        }
	      },
	      '457': {
	        start: {
	          line: 903,
	          column: 16
	        },
	        end: {
	          line: 908,
	          column: 17
	        }
	      },
	      '458': {
	        start: {
	          line: 904,
	          column: 39
	        },
	        end: {
	          line: 904,
	          column: 91
	        }
	      },
	      '459': {
	        start: {
	          line: 905,
	          column: 20
	        },
	        end: {
	          line: 907,
	          column: 21
	        }
	      },
	      '460': {
	        start: {
	          line: 906,
	          column: 24
	        },
	        end: {
	          line: 906,
	          column: 84
	        }
	      },
	      '461': {
	        start: {
	          line: 912,
	          column: 23
	        },
	        end: {
	          line: 912,
	          column: 44
	        }
	      },
	      '462': {
	        start: {
	          line: 913,
	          column: 8
	        },
	        end: {
	          line: 918,
	          column: 9
	        }
	      },
	      '463': {
	        start: {
	          line: 914,
	          column: 24
	        },
	        end: {
	          line: 914,
	          column: 53
	        }
	      },
	      '464': {
	        start: {
	          line: 915,
	          column: 12
	        },
	        end: {
	          line: 917,
	          column: 14
	        }
	      },
	      '465': {
	        start: {
	          line: 919,
	          column: 8
	        },
	        end: {
	          line: 919,
	          column: 49
	        }
	      },
	      '466': {
	        start: {
	          line: 920,
	          column: 8
	        },
	        end: {
	          line: 920,
	          column: 37
	        }
	      },
	      '467': {
	        start: {
	          line: 921,
	          column: 8
	        },
	        end: {
	          line: 921,
	          column: 70
	        }
	      },
	      '468': {
	        start: {
	          line: 922,
	          column: 8
	        },
	        end: {
	          line: 922,
	          column: 45
	        }
	      },
	      '469': {
	        start: {
	          line: 924,
	          column: 8
	        },
	        end: {
	          line: 924,
	          column: 18
	        }
	      },
	      '470': {
	        start: {
	          line: 928,
	          column: 8
	        },
	        end: {
	          line: 928,
	          column: 55
	        }
	      },
	      '471': {
	        start: {
	          line: 929,
	          column: 8
	        },
	        end: {
	          line: 929,
	          column: 42
	        }
	      },
	      '472': {
	        start: {
	          line: 933,
	          column: 8
	        },
	        end: {
	          line: 936,
	          column: 9
	        }
	      },
	      '473': {
	        start: {
	          line: 934,
	          column: 12
	        },
	        end: {
	          line: 934,
	          column: 47
	        }
	      },
	      '474': {
	        start: {
	          line: 935,
	          column: 12
	        },
	        end: {
	          line: 935,
	          column: 18
	        }
	      },
	      '475': {
	        start: {
	          line: 938,
	          column: 8
	        },
	        end: {
	          line: 940,
	          column: 9
	        }
	      },
	      '476': {
	        start: {
	          line: 939,
	          column: 12
	        },
	        end: {
	          line: 939,
	          column: 44
	        }
	      },
	      '477': {
	        start: {
	          line: 942,
	          column: 8
	        },
	        end: {
	          line: 942,
	          column: 43
	        }
	      },
	      '478': {
	        start: {
	          line: 946,
	          column: 8
	        },
	        end: {
	          line: 965,
	          column: 9
	        }
	      },
	      '479': {
	        start: {
	          line: 948,
	          column: 16
	        },
	        end: {
	          line: 948,
	          column: 106
	        }
	      },
	      '480': {
	        start: {
	          line: 950,
	          column: 16
	        },
	        end: {
	          line: 950,
	          column: 117
	        }
	      },
	      '481': {
	        start: {
	          line: 952,
	          column: 16
	        },
	        end: {
	          line: 952,
	          column: 122
	        }
	      },
	      '482': {
	        start: {
	          line: 954,
	          column: 16
	        },
	        end: {
	          line: 954,
	          column: 115
	        }
	      },
	      '483': {
	        start: {
	          line: 956,
	          column: 16
	        },
	        end: {
	          line: 956,
	          column: 126
	        }
	      },
	      '484': {
	        start: {
	          line: 958,
	          column: 16
	        },
	        end: {
	          line: 958,
	          column: 131
	        }
	      },
	      '485': {
	        start: {
	          line: 960,
	          column: 16
	        },
	        end: {
	          line: 960,
	          column: 136
	        }
	      },
	      '486': {
	        start: {
	          line: 962,
	          column: 16
	        },
	        end: {
	          line: 962,
	          column: 103
	        }
	      },
	      '487': {
	        start: {
	          line: 964,
	          column: 16
	        },
	        end: {
	          line: 964,
	          column: 28
	        }
	      },
	      '488': {
	        start: {
	          line: 969,
	          column: 8
	        },
	        end: {
	          line: 969,
	          column: 33
	        }
	      },
	      '489': {
	        start: {
	          line: 970,
	          column: 8
	        },
	        end: {
	          line: 970,
	          column: 44
	        }
	      },
	      '490': {
	        start: {
	          line: 971,
	          column: 8
	        },
	        end: {
	          line: 971,
	          column: 33
	        }
	      },
	      '491': {
	        start: {
	          line: 975,
	          column: 8
	        },
	        end: {
	          line: 977,
	          column: 9
	        }
	      },
	      '492': {
	        start: {
	          line: 976,
	          column: 12
	        },
	        end: {
	          line: 976,
	          column: 23
	        }
	      },
	      '493': {
	        start: {
	          line: 979,
	          column: 25
	        },
	        end: {
	          line: 979,
	          column: 30
	        }
	      },
	      '494': {
	        start: {
	          line: 980,
	          column: 8
	        },
	        end: {
	          line: 983,
	          column: 9
	        }
	      },
	      '495': {
	        start: {
	          line: 981,
	          column: 12
	        },
	        end: {
	          line: 981,
	          column: 29
	        }
	      },
	      '496': {
	        start: {
	          line: 982,
	          column: 12
	        },
	        end: {
	          line: 982,
	          column: 27
	        }
	      },
	      '497': {
	        start: {
	          line: 985,
	          column: 20
	        },
	        end: {
	          line: 985,
	          column: 48
	        }
	      },
	      '498': {
	        start: {
	          line: 986,
	          column: 22
	        },
	        end: {
	          line: 986,
	          column: 67
	        }
	      },
	      '499': {
	        start: {
	          line: 987,
	          column: 22
	        },
	        end: {
	          line: 987,
	          column: 77
	        }
	      },
	      '500': {
	        start: {
	          line: 989,
	          column: 8
	        },
	        end: {
	          line: 989,
	          column: 43
	        }
	      },
	      '501': {
	        start: {
	          line: 989,
	          column: 24
	        },
	        end: {
	          line: 989,
	          column: 43
	        }
	      },
	      '502': {
	        start: {
	          line: 990,
	          column: 8
	        },
	        end: {
	          line: 990,
	          column: 49
	        }
	      },
	      '503': {
	        start: {
	          line: 990,
	          column: 26
	        },
	        end: {
	          line: 990,
	          column: 49
	        }
	      },
	      '504': {
	        start: {
	          line: 991,
	          column: 8
	        },
	        end: {
	          line: 991,
	          column: 49
	        }
	      },
	      '505': {
	        start: {
	          line: 991,
	          column: 26
	        },
	        end: {
	          line: 991,
	          column: 49
	        }
	      },
	      '506': {
	        start: {
	          line: 993,
	          column: 8
	        },
	        end: {
	          line: 993,
	          column: 78
	        }
	      },
	      '507': {
	        start: {
	          line: 998,
	          column: 8
	        },
	        end: {
	          line: 998,
	          column: 72
	        }
	      },
	      '508': {
	        start: {
	          line: 999,
	          column: 8
	        },
	        end: {
	          line: 999,
	          column: 66
	        }
	      },
	      '509': {
	        start: {
	          line: 1001,
	          column: 8
	        },
	        end: {
	          line: 1001,
	          column: 50
	        }
	      },
	      '510': {
	        start: {
	          line: 1003,
	          column: 8
	        },
	        end: {
	          line: 1007,
	          column: 9
	        }
	      },
	      '511': {
	        start: {
	          line: 1004,
	          column: 12
	        },
	        end: {
	          line: 1004,
	          column: 57
	        }
	      },
	      '512': {
	        start: {
	          line: 1005,
	          column: 15
	        },
	        end: {
	          line: 1007,
	          column: 9
	        }
	      },
	      '513': {
	        start: {
	          line: 1006,
	          column: 12
	        },
	        end: {
	          line: 1006,
	          column: 30
	        }
	      },
	      '514': {
	        start: {
	          line: 1011,
	          column: 8
	        },
	        end: {
	          line: 1011,
	          column: 92
	        }
	      },
	      '515': {
	        start: {
	          line: 1015,
	          column: 0
	        },
	        end: {
	          line: 1015,
	          column: 54
	        }
	      },
	      '516': {
	        start: {
	          line: 1016,
	          column: 0
	        },
	        end: {
	          line: 1016,
	          column: 119
	        }
	      },
	      '517': {
	        start: {
	          line: 1018,
	          column: 0
	        },
	        end: {
	          line: 1020,
	          column: 1
	        }
	      },
	      '518': {
	        start: {
	          line: 1019,
	          column: 4
	        },
	        end: {
	          line: 1019,
	          column: 68
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 22,
	            column: 4
	          },
	          end: {
	            line: 22,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 22,
	            column: 34
	          },
	          end: {
	            line: 28,
	            column: 5
	          }
	        },
	        line: 22
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 30,
	            column: 4
	          },
	          end: {
	            line: 30,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 30,
	            column: 37
	          },
	          end: {
	            line: 150,
	            column: 5
	          }
	        },
	        line: 30
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 111,
	            column: 37
	          },
	          end: {
	            line: 111,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 111,
	            column: 49
	          },
	          end: {
	            line: 116,
	            column: 13
	          }
	        },
	        line: 111
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 118,
	            column: 37
	          },
	          end: {
	            line: 118,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 118,
	            column: 49
	          },
	          end: {
	            line: 118,
	            column: 51
	          }
	        },
	        line: 118
	      },
	      '4': {
	        name: 'hasFinishedSearch',
	        decl: {
	          start: {
	            line: 121,
	            column: 21
	          },
	          end: {
	            line: 121,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 121,
	            column: 42
	          },
	          end: {
	            line: 137,
	            column: 13
	          }
	        },
	        line: 121
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 142,
	            column: 75
	          },
	          end: {
	            line: 142,
	            column: 76
	          }
	        },
	        loc: {
	          start: {
	            line: 142,
	            column: 82
	          },
	          end: {
	            line: 144,
	            column: 17
	          }
	        },
	        line: 142
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 152,
	            column: 4
	          },
	          end: {
	            line: 152,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 152,
	            column: 25
	          },
	          end: {
	            line: 188,
	            column: 5
	          }
	        },
	        line: 152
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 190,
	            column: 4
	          },
	          end: {
	            line: 190,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 190,
	            column: 35
	          },
	          end: {
	            line: 282,
	            column: 5
	          }
	        },
	        line: 190
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 194,
	            column: 39
	          },
	          end: {
	            line: 194,
	            column: 40
	          }
	        },
	        loc: {
	          start: {
	            line: 194,
	            column: 57
	          },
	          end: {
	            line: 196,
	            column: 9
	          }
	        },
	        line: 194
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 198,
	            column: 34
	          },
	          end: {
	            line: 198,
	            column: 35
	          }
	        },
	        loc: {
	          start: {
	            line: 198,
	            column: 46
	          },
	          end: {
	            line: 205,
	            column: 9
	          }
	        },
	        line: 198
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 207,
	            column: 35
	          },
	          end: {
	            line: 207,
	            column: 36
	          }
	        },
	        loc: {
	          start: {
	            line: 207,
	            column: 47
	          },
	          end: {
	            line: 210,
	            column: 9
	          }
	        },
	        line: 207
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 212,
	            column: 34
	          },
	          end: {
	            line: 212,
	            column: 35
	          }
	        },
	        loc: {
	          start: {
	            line: 212,
	            column: 46
	          },
	          end: {
	            line: 215,
	            column: 9
	          }
	        },
	        line: 212
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 217,
	            column: 34
	          },
	          end: {
	            line: 217,
	            column: 35
	          }
	        },
	        loc: {
	          start: {
	            line: 217,
	            column: 46
	          },
	          end: {
	            line: 220,
	            column: 9
	          }
	        },
	        line: 217
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 222,
	            column: 43
	          },
	          end: {
	            line: 222,
	            column: 44
	          }
	        },
	        loc: {
	          start: {
	            line: 222,
	            column: 55
	          },
	          end: {
	            line: 224,
	            column: 9
	          }
	        },
	        line: 222
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 226,
	            column: 43
	          },
	          end: {
	            line: 226,
	            column: 44
	          }
	        },
	        loc: {
	          start: {
	            line: 226,
	            column: 55
	          },
	          end: {
	            line: 233,
	            column: 9
	          }
	        },
	        line: 226
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 235,
	            column: 49
	          },
	          end: {
	            line: 235,
	            column: 50
	          }
	        },
	        loc: {
	          start: {
	            line: 235,
	            column: 61
	          },
	          end: {
	            line: 237,
	            column: 9
	          }
	        },
	        line: 235
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 239,
	            column: 46
	          },
	          end: {
	            line: 239,
	            column: 47
	          }
	        },
	        loc: {
	          start: {
	            line: 239,
	            column: 58
	          },
	          end: {
	            line: 241,
	            column: 9
	          }
	        },
	        line: 239
	      },
	      '17': {
	        name: '(anonymous_17)',
	        decl: {
	          start: {
	            line: 243,
	            column: 43
	          },
	          end: {
	            line: 243,
	            column: 44
	          }
	        },
	        loc: {
	          start: {
	            line: 243,
	            column: 55
	          },
	          end: {
	            line: 249,
	            column: 9
	          }
	        },
	        line: 243
	      },
	      '18': {
	        name: '(anonymous_18)',
	        decl: {
	          start: {
	            line: 251,
	            column: 54
	          },
	          end: {
	            line: 251,
	            column: 55
	          }
	        },
	        loc: {
	          start: {
	            line: 251,
	            column: 66
	          },
	          end: {
	            line: 253,
	            column: 9
	          }
	        },
	        line: 251
	      },
	      '19': {
	        name: '(anonymous_19)',
	        decl: {
	          start: {
	            line: 255,
	            column: 51
	          },
	          end: {
	            line: 255,
	            column: 52
	          }
	        },
	        loc: {
	          start: {
	            line: 255,
	            column: 63
	          },
	          end: {
	            line: 257,
	            column: 9
	          }
	        },
	        line: 255
	      },
	      '20': {
	        name: '(anonymous_20)',
	        decl: {
	          start: {
	            line: 259,
	            column: 43
	          },
	          end: {
	            line: 259,
	            column: 44
	          }
	        },
	        loc: {
	          start: {
	            line: 259,
	            column: 59
	          },
	          end: {
	            line: 261,
	            column: 9
	          }
	        },
	        line: 259
	      },
	      '21': {
	        name: '(anonymous_21)',
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
	            column: 71
	          },
	          end: {
	            line: 265,
	            column: 9
	          }
	        },
	        line: 263
	      },
	      '22': {
	        name: '(anonymous_22)',
	        decl: {
	          start: {
	            line: 267,
	            column: 34
	          },
	          end: {
	            line: 267,
	            column: 35
	          }
	        },
	        loc: {
	          start: {
	            line: 267,
	            column: 46
	          },
	          end: {
	            line: 269,
	            column: 9
	          }
	        },
	        line: 267
	      },
	      '23': {
	        name: '(anonymous_23)',
	        decl: {
	          start: {
	            line: 271,
	            column: 36
	          },
	          end: {
	            line: 271,
	            column: 37
	          }
	        },
	        loc: {
	          start: {
	            line: 271,
	            column: 48
	          },
	          end: {
	            line: 273,
	            column: 9
	          }
	        },
	        line: 271
	      },
	      '24': {
	        name: '(anonymous_24)',
	        decl: {
	          start: {
	            line: 275,
	            column: 37
	          },
	          end: {
	            line: 275,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 275,
	            column: 49
	          },
	          end: {
	            line: 277,
	            column: 9
	          }
	        },
	        line: 275
	      },
	      '25': {
	        name: '(anonymous_25)',
	        decl: {
	          start: {
	            line: 279,
	            column: 36
	          },
	          end: {
	            line: 279,
	            column: 37
	          }
	        },
	        loc: {
	          start: {
	            line: 279,
	            column: 52
	          },
	          end: {
	            line: 281,
	            column: 9
	          }
	        },
	        line: 279
	      },
	      '26': {
	        name: '(anonymous_26)',
	        decl: {
	          start: {
	            line: 284,
	            column: 4
	          },
	          end: {
	            line: 284,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 284,
	            column: 26
	          },
	          end: {
	            line: 294,
	            column: 5
	          }
	        },
	        line: 284
	      },
	      '27': {
	        name: '(anonymous_27)',
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
	            column: 26
	          },
	          end: {
	            line: 307,
	            column: 5
	          }
	        },
	        line: 296
	      },
	      '28': {
	        name: '(anonymous_28)',
	        decl: {
	          start: {
	            line: 309,
	            column: 4
	          },
	          end: {
	            line: 309,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 309,
	            column: 26
	          },
	          end: {
	            line: 336,
	            column: 5
	          }
	        },
	        line: 309
	      },
	      '29': {
	        name: '(anonymous_29)',
	        decl: {
	          start: {
	            line: 315,
	            column: 52
	          },
	          end: {
	            line: 315,
	            column: 53
	          }
	        },
	        loc: {
	          start: {
	            line: 315,
	            column: 58
	          },
	          end: {
	            line: 328,
	            column: 13
	          }
	        },
	        line: 315
	      },
	      '30': {
	        name: '(anonymous_30)',
	        decl: {
	          start: {
	            line: 317,
	            column: 41
	          },
	          end: {
	            line: 317,
	            column: 42
	          }
	        },
	        loc: {
	          start: {
	            line: 317,
	            column: 47
	          },
	          end: {
	            line: 327,
	            column: 17
	          }
	        },
	        line: 317
	      },
	      '31': {
	        name: '(anonymous_31)',
	        decl: {
	          start: {
	            line: 323,
	            column: 25
	          },
	          end: {
	            line: 323,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 323,
	            column: 42
	          },
	          end: {
	            line: 325,
	            column: 25
	          }
	        },
	        line: 323
	      },
	      '32': {
	        name: '(anonymous_32)',
	        decl: {
	          start: {
	            line: 338,
	            column: 4
	          },
	          end: {
	            line: 338,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 338,
	            column: 19
	          },
	          end: {
	            line: 343,
	            column: 5
	          }
	        },
	        line: 338
	      },
	      '33': {
	        name: '(anonymous_33)',
	        decl: {
	          start: {
	            line: 345,
	            column: 4
	          },
	          end: {
	            line: 345,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 345,
	            column: 27
	          },
	          end: {
	            line: 349,
	            column: 5
	          }
	        },
	        line: 345
	      },
	      '34': {
	        name: '(anonymous_34)',
	        decl: {
	          start: {
	            line: 351,
	            column: 4
	          },
	          end: {
	            line: 351,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 351,
	            column: 19
	          },
	          end: {
	            line: 387,
	            column: 5
	          }
	        },
	        line: 351
	      },
	      '35': {
	        name: '(anonymous_35)',
	        decl: {
	          start: {
	            line: 368,
	            column: 57
	          },
	          end: {
	            line: 368,
	            column: 58
	          }
	        },
	        loc: {
	          start: {
	            line: 368,
	            column: 66
	          },
	          end: {
	            line: 385,
	            column: 13
	          }
	        },
	        line: 368
	      },
	      '36': {
	        name: '(anonymous_36)',
	        decl: {
	          start: {
	            line: 389,
	            column: 4
	          },
	          end: {
	            line: 389,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 389,
	            column: 12
	          },
	          end: {
	            line: 403,
	            column: 5
	          }
	        },
	        line: 389
	      },
	      '37': {
	        name: '(anonymous_37)',
	        decl: {
	          start: {
	            line: 405,
	            column: 4
	          },
	          end: {
	            line: 405,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 405,
	            column: 12
	          },
	          end: {
	            line: 418,
	            column: 5
	          }
	        },
	        line: 405
	      },
	      '38': {
	        name: '(anonymous_38)',
	        decl: {
	          start: {
	            line: 420,
	            column: 4
	          },
	          end: {
	            line: 420,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 420,
	            column: 21
	          },
	          end: {
	            line: 425,
	            column: 5
	          }
	        },
	        line: 420
	      },
	      '39': {
	        name: '(anonymous_39)',
	        decl: {
	          start: {
	            line: 427,
	            column: 4
	          },
	          end: {
	            line: 427,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 427,
	            column: 36
	          },
	          end: {
	            line: 434,
	            column: 5
	          }
	        },
	        line: 427
	      },
	      '40': {
	        name: '(anonymous_40)',
	        decl: {
	          start: {
	            line: 436,
	            column: 4
	          },
	          end: {
	            line: 436,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 436,
	            column: 19
	          },
	          end: {
	            line: 452,
	            column: 5
	          }
	        },
	        line: 436
	      },
	      '41': {
	        name: '(anonymous_41)',
	        decl: {
	          start: {
	            line: 454,
	            column: 4
	          },
	          end: {
	            line: 454,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 454,
	            column: 25
	          },
	          end: {
	            line: 469,
	            column: 5
	          }
	        },
	        line: 454
	      },
	      '42': {
	        name: '(anonymous_42)',
	        decl: {
	          start: {
	            line: 458,
	            column: 37
	          },
	          end: {
	            line: 458,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 458,
	            column: 43
	          },
	          end: {
	            line: 465,
	            column: 13
	          }
	        },
	        line: 458
	      },
	      '43': {
	        name: '(anonymous_43)',
	        decl: {
	          start: {
	            line: 474,
	            column: 4
	          },
	          end: {
	            line: 474,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 474,
	            column: 25
	          },
	          end: {
	            line: 768,
	            column: 5
	          }
	        },
	        line: 474
	      },
	      '44': {
	        name: '(anonymous_44)',
	        decl: {
	          start: {
	            line: 477,
	            column: 69
	          },
	          end: {
	            line: 477,
	            column: 70
	          }
	        },
	        loc: {
	          start: {
	            line: 477,
	            column: 80
	          },
	          end: {
	            line: 501,
	            column: 13
	          }
	        },
	        line: 477
	      },
	      '45': {
	        name: '(anonymous_45)',
	        decl: {
	          start: {
	            line: 506,
	            column: 12
	          },
	          end: {
	            line: 506,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 506,
	            column: 29
	          },
	          end: {
	            line: 508,
	            column: 13
	          }
	        },
	        line: 506
	      },
	      '46': {
	        name: '(anonymous_46)',
	        decl: {
	          start: {
	            line: 512,
	            column: 68
	          },
	          end: {
	            line: 512,
	            column: 69
	          }
	        },
	        loc: {
	          start: {
	            line: 512,
	            column: 74
	          },
	          end: {
	            line: 518,
	            column: 13
	          }
	        },
	        line: 512
	      },
	      '47': {
	        name: '(anonymous_47)',
	        decl: {
	          start: {
	            line: 522,
	            column: 67
	          },
	          end: {
	            line: 522,
	            column: 68
	          }
	        },
	        loc: {
	          start: {
	            line: 522,
	            column: 73
	          },
	          end: {
	            line: 528,
	            column: 13
	          }
	        },
	        line: 522
	      },
	      '48': {
	        name: '(anonymous_48)',
	        decl: {
	          start: {
	            line: 532,
	            column: 71
	          },
	          end: {
	            line: 532,
	            column: 72
	          }
	        },
	        loc: {
	          start: {
	            line: 532,
	            column: 77
	          },
	          end: {
	            line: 539,
	            column: 13
	          }
	        },
	        line: 532
	      },
	      '49': {
	        name: '(anonymous_49)',
	        decl: {
	          start: {
	            line: 543,
	            column: 75
	          },
	          end: {
	            line: 543,
	            column: 76
	          }
	        },
	        loc: {
	          start: {
	            line: 543,
	            column: 86
	          },
	          end: {
	            line: 545,
	            column: 13
	          }
	        },
	        line: 543
	      },
	      '50': {
	        name: '(anonymous_50)',
	        decl: {
	          start: {
	            line: 549,
	            column: 73
	          },
	          end: {
	            line: 549,
	            column: 74
	          }
	        },
	        loc: {
	          start: {
	            line: 549,
	            column: 84
	          },
	          end: {
	            line: 551,
	            column: 13
	          }
	        },
	        line: 549
	      },
	      '51': {
	        name: '(anonymous_51)',
	        decl: {
	          start: {
	            line: 555,
	            column: 82
	          },
	          end: {
	            line: 555,
	            column: 83
	          }
	        },
	        loc: {
	          start: {
	            line: 555,
	            column: 93
	          },
	          end: {
	            line: 557,
	            column: 13
	          }
	        },
	        line: 555
	      },
	      '52': {
	        name: '(anonymous_52)',
	        decl: {
	          start: {
	            line: 561,
	            column: 72
	          },
	          end: {
	            line: 561,
	            column: 73
	          }
	        },
	        loc: {
	          start: {
	            line: 561,
	            column: 83
	          },
	          end: {
	            line: 563,
	            column: 13
	          }
	        },
	        line: 561
	      },
	      '53': {
	        name: '(anonymous_53)',
	        decl: {
	          start: {
	            line: 567,
	            column: 78
	          },
	          end: {
	            line: 567,
	            column: 79
	          }
	        },
	        loc: {
	          start: {
	            line: 567,
	            column: 89
	          },
	          end: {
	            line: 570,
	            column: 13
	          }
	        },
	        line: 567
	      },
	      '54': {
	        name: '(anonymous_54)',
	        decl: {
	          start: {
	            line: 578,
	            column: 28
	          },
	          end: {
	            line: 578,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 578,
	            column: 40
	          },
	          end: {
	            line: 583,
	            column: 9
	          }
	        },
	        line: 578
	      },
	      '55': {
	        name: '(anonymous_55)',
	        decl: {
	          start: {
	            line: 585,
	            column: 29
	          },
	          end: {
	            line: 585,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 585,
	            column: 41
	          },
	          end: {
	            line: 590,
	            column: 9
	          }
	        },
	        line: 585
	      },
	      '56': {
	        name: '(anonymous_56)',
	        decl: {
	          start: {
	            line: 592,
	            column: 28
	          },
	          end: {
	            line: 592,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 592,
	            column: 40
	          },
	          end: {
	            line: 594,
	            column: 9
	          }
	        },
	        line: 592
	      },
	      '57': {
	        name: '(anonymous_57)',
	        decl: {
	          start: {
	            line: 597,
	            column: 28
	          },
	          end: {
	            line: 597,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 597,
	            column: 40
	          },
	          end: {
	            line: 623,
	            column: 9
	          }
	        },
	        line: 597
	      },
	      '58': {
	        name: '(anonymous_58)',
	        decl: {
	          start: {
	            line: 599,
	            column: 37
	          },
	          end: {
	            line: 599,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 599,
	            column: 49
	          },
	          end: {
	            line: 622,
	            column: 13
	          }
	        },
	        line: 599
	      },
	      '59': {
	        name: '(anonymous_59)',
	        decl: {
	          start: {
	            line: 612,
	            column: 20
	          },
	          end: {
	            line: 612,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 612,
	            column: 32
	          },
	          end: {
	            line: 615,
	            column: 21
	          }
	        },
	        line: 612
	      },
	      '60': {
	        name: '(anonymous_60)',
	        decl: {
	          start: {
	            line: 616,
	            column: 20
	          },
	          end: {
	            line: 616,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 616,
	            column: 41
	          },
	          end: {
	            line: 620,
	            column: 21
	          }
	        },
	        line: 616
	      },
	      '61': {
	        name: '(anonymous_61)',
	        decl: {
	          start: {
	            line: 625,
	            column: 37
	          },
	          end: {
	            line: 625,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 625,
	            column: 49
	          },
	          end: {
	            line: 640,
	            column: 9
	          }
	        },
	        line: 625
	      },
	      '62': {
	        name: '(anonymous_62)',
	        decl: {
	          start: {
	            line: 646,
	            column: 43
	          },
	          end: {
	            line: 646,
	            column: 44
	          }
	        },
	        loc: {
	          start: {
	            line: 646,
	            column: 55
	          },
	          end: {
	            line: 648,
	            column: 9
	          }
	        },
	        line: 646
	      },
	      '63': {
	        name: '(anonymous_63)',
	        decl: {
	          start: {
	            line: 654,
	            column: 40
	          },
	          end: {
	            line: 654,
	            column: 41
	          }
	        },
	        loc: {
	          start: {
	            line: 654,
	            column: 52
	          },
	          end: {
	            line: 656,
	            column: 9
	          }
	        },
	        line: 654
	      },
	      '64': {
	        name: '(anonymous_64)',
	        decl: {
	          start: {
	            line: 658,
	            column: 37
	          },
	          end: {
	            line: 658,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 658,
	            column: 49
	          },
	          end: {
	            line: 690,
	            column: 9
	          }
	        },
	        line: 658
	      },
	      '65': {
	        name: '(anonymous_65)',
	        decl: {
	          start: {
	            line: 682,
	            column: 47
	          },
	          end: {
	            line: 682,
	            column: 48
	          }
	        },
	        loc: {
	          start: {
	            line: 682,
	            column: 59
	          },
	          end: {
	            line: 684,
	            column: 21
	          }
	        },
	        line: 682
	      },
	      '66': {
	        name: '(anonymous_66)',
	        decl: {
	          start: {
	            line: 692,
	            column: 48
	          },
	          end: {
	            line: 692,
	            column: 49
	          }
	        },
	        loc: {
	          start: {
	            line: 692,
	            column: 60
	          },
	          end: {
	            line: 694,
	            column: 9
	          }
	        },
	        line: 692
	      },
	      '67': {
	        name: '(anonymous_67)',
	        decl: {
	          start: {
	            line: 696,
	            column: 45
	          },
	          end: {
	            line: 696,
	            column: 46
	          }
	        },
	        loc: {
	          start: {
	            line: 696,
	            column: 57
	          },
	          end: {
	            line: 698,
	            column: 9
	          }
	        },
	        line: 696
	      },
	      '68': {
	        name: '(anonymous_68)',
	        decl: {
	          start: {
	            line: 700,
	            column: 37
	          },
	          end: {
	            line: 700,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 700,
	            column: 53
	          },
	          end: {
	            line: 708,
	            column: 9
	          }
	        },
	        line: 700
	      },
	      '69': {
	        name: '(anonymous_69)',
	        decl: {
	          start: {
	            line: 710,
	            column: 33
	          },
	          end: {
	            line: 710,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 710,
	            column: 59
	          },
	          end: {
	            line: 720,
	            column: 9
	          }
	        },
	        line: 710
	      },
	      '70': {
	        name: '(anonymous_70)',
	        decl: {
	          start: {
	            line: 722,
	            column: 28
	          },
	          end: {
	            line: 722,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 722,
	            column: 40
	          },
	          end: {
	            line: 726,
	            column: 9
	          }
	        },
	        line: 722
	      },
	      '71': {
	        name: '(anonymous_71)',
	        decl: {
	          start: {
	            line: 728,
	            column: 30
	          },
	          end: {
	            line: 728,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 728,
	            column: 42
	          },
	          end: {
	            line: 732,
	            column: 9
	          }
	        },
	        line: 728
	      },
	      '72': {
	        name: '(anonymous_72)',
	        decl: {
	          start: {
	            line: 734,
	            column: 31
	          },
	          end: {
	            line: 734,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 734,
	            column: 43
	          },
	          end: {
	            line: 736,
	            column: 9
	          }
	        },
	        line: 734
	      },
	      '73': {
	        name: '(anonymous_73)',
	        decl: {
	          start: {
	            line: 738,
	            column: 30
	          },
	          end: {
	            line: 738,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 738,
	            column: 46
	          },
	          end: {
	            line: 741,
	            column: 9
	          }
	        },
	        line: 738
	      },
	      '74': {
	        name: '(anonymous_74)',
	        decl: {
	          start: {
	            line: 770,
	            column: 4
	          },
	          end: {
	            line: 770,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 770,
	            column: 24
	          },
	          end: {
	            line: 874,
	            column: 5
	          }
	        },
	        line: 770
	      },
	      '75': {
	        name: '(anonymous_75)',
	        decl: {
	          start: {
	            line: 774,
	            column: 28
	          },
	          end: {
	            line: 774,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 774,
	            column: 40
	          },
	          end: {
	            line: 776,
	            column: 9
	          }
	        },
	        line: 774
	      },
	      '76': {
	        name: '(anonymous_76)',
	        decl: {
	          start: {
	            line: 778,
	            column: 29
	          },
	          end: {
	            line: 778,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 778,
	            column: 41
	          },
	          end: {
	            line: 780,
	            column: 9
	          }
	        },
	        line: 778
	      },
	      '77': {
	        name: '(anonymous_77)',
	        decl: {
	          start: {
	            line: 782,
	            column: 28
	          },
	          end: {
	            line: 782,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 782,
	            column: 40
	          },
	          end: {
	            line: 784,
	            column: 9
	          }
	        },
	        line: 782
	      },
	      '78': {
	        name: '(anonymous_78)',
	        decl: {
	          start: {
	            line: 786,
	            column: 28
	          },
	          end: {
	            line: 786,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 786,
	            column: 40
	          },
	          end: {
	            line: 788,
	            column: 9
	          }
	        },
	        line: 786
	      },
	      '79': {
	        name: '(anonymous_79)',
	        decl: {
	          start: {
	            line: 790,
	            column: 37
	          },
	          end: {
	            line: 790,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 790,
	            column: 49
	          },
	          end: {
	            line: 796,
	            column: 9
	          }
	        },
	        line: 790
	      },
	      '80': {
	        name: '(anonymous_80)',
	        decl: {
	          start: {
	            line: 798,
	            column: 43
	          },
	          end: {
	            line: 798,
	            column: 44
	          }
	        },
	        loc: {
	          start: {
	            line: 798,
	            column: 55
	          },
	          end: {
	            line: 803,
	            column: 9
	          }
	        },
	        line: 798
	      },
	      '81': {
	        name: '(anonymous_81)',
	        decl: {
	          start: {
	            line: 805,
	            column: 40
	          },
	          end: {
	            line: 805,
	            column: 41
	          }
	        },
	        loc: {
	          start: {
	            line: 805,
	            column: 52
	          },
	          end: {
	            line: 810,
	            column: 9
	          }
	        },
	        line: 805
	      },
	      '82': {
	        name: '(anonymous_82)',
	        decl: {
	          start: {
	            line: 812,
	            column: 37
	          },
	          end: {
	            line: 812,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 812,
	            column: 49
	          },
	          end: {
	            line: 814,
	            column: 9
	          }
	        },
	        line: 812
	      },
	      '83': {
	        name: '(anonymous_83)',
	        decl: {
	          start: {
	            line: 816,
	            column: 48
	          },
	          end: {
	            line: 816,
	            column: 49
	          }
	        },
	        loc: {
	          start: {
	            line: 816,
	            column: 60
	          },
	          end: {
	            line: 820,
	            column: 9
	          }
	        },
	        line: 816
	      },
	      '84': {
	        name: '(anonymous_84)',
	        decl: {
	          start: {
	            line: 822,
	            column: 45
	          },
	          end: {
	            line: 822,
	            column: 46
	          }
	        },
	        loc: {
	          start: {
	            line: 822,
	            column: 57
	          },
	          end: {
	            line: 824,
	            column: 9
	          }
	        },
	        line: 822
	      },
	      '85': {
	        name: '(anonymous_85)',
	        decl: {
	          start: {
	            line: 826,
	            column: 37
	          },
	          end: {
	            line: 826,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 826,
	            column: 53
	          },
	          end: {
	            line: 834,
	            column: 9
	          }
	        },
	        line: 826
	      },
	      '86': {
	        name: '(anonymous_86)',
	        decl: {
	          start: {
	            line: 836,
	            column: 33
	          },
	          end: {
	            line: 836,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 836,
	            column: 59
	          },
	          end: {
	            line: 840,
	            column: 9
	          }
	        },
	        line: 836
	      },
	      '87': {
	        name: '(anonymous_87)',
	        decl: {
	          start: {
	            line: 842,
	            column: 28
	          },
	          end: {
	            line: 842,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 842,
	            column: 40
	          },
	          end: {
	            line: 846,
	            column: 9
	          }
	        },
	        line: 842
	      },
	      '88': {
	        name: '(anonymous_88)',
	        decl: {
	          start: {
	            line: 848,
	            column: 30
	          },
	          end: {
	            line: 848,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 848,
	            column: 42
	          },
	          end: {
	            line: 852,
	            column: 9
	          }
	        },
	        line: 848
	      },
	      '89': {
	        name: '(anonymous_89)',
	        decl: {
	          start: {
	            line: 854,
	            column: 31
	          },
	          end: {
	            line: 854,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 854,
	            column: 43
	          },
	          end: {
	            line: 858,
	            column: 9
	          }
	        },
	        line: 854
	      },
	      '90': {
	        name: '(anonymous_90)',
	        decl: {
	          start: {
	            line: 860,
	            column: 30
	          },
	          end: {
	            line: 860,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 860,
	            column: 46
	          },
	          end: {
	            line: 864,
	            column: 9
	          }
	        },
	        line: 860
	      },
	      '91': {
	        name: '(anonymous_91)',
	        decl: {
	          start: {
	            line: 876,
	            column: 4
	          },
	          end: {
	            line: 876,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 876,
	            column: 35
	          },
	          end: {
	            line: 925,
	            column: 5
	          }
	        },
	        line: 876
	      },
	      '92': {
	        name: '(anonymous_92)',
	        decl: {
	          start: {
	            line: 927,
	            column: 4
	          },
	          end: {
	            line: 927,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 927,
	            column: 28
	          },
	          end: {
	            line: 930,
	            column: 5
	          }
	        },
	        line: 927
	      },
	      '93': {
	        name: '(anonymous_93)',
	        decl: {
	          start: {
	            line: 932,
	            column: 4
	          },
	          end: {
	            line: 932,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 932,
	            column: 25
	          },
	          end: {
	            line: 943,
	            column: 5
	          }
	        },
	        line: 932
	      },
	      '94': {
	        name: '(anonymous_94)',
	        decl: {
	          start: {
	            line: 945,
	            column: 4
	          },
	          end: {
	            line: 945,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 945,
	            column: 28
	          },
	          end: {
	            line: 966,
	            column: 5
	          }
	        },
	        line: 945
	      },
	      '95': {
	        name: '(anonymous_95)',
	        decl: {
	          start: {
	            line: 968,
	            column: 4
	          },
	          end: {
	            line: 968,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 968,
	            column: 19
	          },
	          end: {
	            line: 972,
	            column: 5
	          }
	        },
	        line: 968
	      },
	      '96': {
	        name: '(anonymous_96)',
	        decl: {
	          start: {
	            line: 974,
	            column: 4
	          },
	          end: {
	            line: 974,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 974,
	            column: 35
	          },
	          end: {
	            line: 994,
	            column: 5
	          }
	        },
	        line: 974
	      },
	      '97': {
	        name: '(anonymous_97)',
	        decl: {
	          start: {
	            line: 996,
	            column: 4
	          },
	          end: {
	            line: 996,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 996,
	            column: 26
	          },
	          end: {
	            line: 1008,
	            column: 5
	          }
	        },
	        line: 996
	      },
	      '98': {
	        name: '(anonymous_98)',
	        decl: {
	          start: {
	            line: 1010,
	            column: 4
	          },
	          end: {
	            line: 1010,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 1010,
	            column: 32
	          },
	          end: {
	            line: 1012,
	            column: 5
	          }
	        },
	        line: 1010
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 57,
	            column: 8
	          },
	          end: {
	            line: 61,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 57,
	            column: 8
	          },
	          end: {
	            line: 61,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 57,
	            column: 8
	          },
	          end: {
	            line: 61,
	            column: 9
	          }
	        }],
	        line: 57
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 57,
	            column: 12
	          },
	          end: {
	            line: 57,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 57,
	            column: 12
	          },
	          end: {
	            line: 57,
	            column: 39
	          }
	        }, {
	          start: {
	            line: 57,
	            column: 43
	          },
	          end: {
	            line: 57,
	            column: 63
	          }
	        }],
	        line: 57
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 59,
	            column: 15
	          },
	          end: {
	            line: 61,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 59,
	            column: 15
	          },
	          end: {
	            line: 61,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 59,
	            column: 15
	          },
	          end: {
	            line: 61,
	            column: 9
	          }
	        }],
	        line: 59
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 63,
	            column: 8
	          },
	          end: {
	            line: 67,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 63,
	            column: 8
	          },
	          end: {
	            line: 67,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 63,
	            column: 8
	          },
	          end: {
	            line: 67,
	            column: 9
	          }
	        }],
	        line: 63
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 63,
	            column: 12
	          },
	          end: {
	            line: 63,
	            column: 81
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
	            column: 48
	          }
	        }, {
	          start: {
	            line: 63,
	            column: 52
	          },
	          end: {
	            line: 63,
	            column: 81
	          }
	        }],
	        line: 63
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 65,
	            column: 15
	          },
	          end: {
	            line: 67,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 65,
	            column: 15
	          },
	          end: {
	            line: 67,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 65,
	            column: 15
	          },
	          end: {
	            line: 67,
	            column: 9
	          }
	        }],
	        line: 65
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 74,
	            column: 8
	          },
	          end: {
	            line: 76,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 74,
	            column: 8
	          },
	          end: {
	            line: 76,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 74,
	            column: 8
	          },
	          end: {
	            line: 76,
	            column: 9
	          }
	        }],
	        line: 74
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 74,
	            column: 12
	          },
	          end: {
	            line: 74,
	            column: 81
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 74,
	            column: 12
	          },
	          end: {
	            line: 74,
	            column: 48
	          }
	        }, {
	          start: {
	            line: 74,
	            column: 52
	          },
	          end: {
	            line: 74,
	            column: 81
	          }
	        }],
	        line: 74
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 78,
	            column: 8
	          },
	          end: {
	            line: 80,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 78,
	            column: 8
	          },
	          end: {
	            line: 80,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 78,
	            column: 8
	          },
	          end: {
	            line: 80,
	            column: 9
	          }
	        }],
	        line: 78
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 78,
	            column: 12
	          },
	          end: {
	            line: 78,
	            column: 81
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 78,
	            column: 12
	          },
	          end: {
	            line: 78,
	            column: 48
	          }
	        }, {
	          start: {
	            line: 78,
	            column: 52
	          },
	          end: {
	            line: 78,
	            column: 81
	          }
	        }],
	        line: 78
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 82,
	            column: 8
	          },
	          end: {
	            line: 149,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 82,
	            column: 8
	          },
	          end: {
	            line: 149,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 82,
	            column: 8
	          },
	          end: {
	            line: 149,
	            column: 9
	          }
	        }],
	        line: 82
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 82,
	            column: 12
	          },
	          end: {
	            line: 82,
	            column: 64
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 82,
	            column: 12
	          },
	          end: {
	            line: 82,
	            column: 43
	          }
	        }, {
	          start: {
	            line: 82,
	            column: 47
	          },
	          end: {
	            line: 82,
	            column: 64
	          }
	        }],
	        line: 82
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 112,
	            column: 16
	          },
	          end: {
	            line: 115,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 112,
	            column: 16
	          },
	          end: {
	            line: 115,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 112,
	            column: 16
	          },
	          end: {
	            line: 115,
	            column: 17
	          }
	        }],
	        line: 112
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 122,
	            column: 16
	          },
	          end: {
	            line: 136,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 122,
	            column: 16
	          },
	          end: {
	            line: 136,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 122,
	            column: 16
	          },
	          end: {
	            line: 136,
	            column: 17
	          }
	        }],
	        line: 122
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 123,
	            column: 20
	          },
	          end: {
	            line: 133,
	            column: 21
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 123,
	            column: 20
	          },
	          end: {
	            line: 133,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 123,
	            column: 20
	          },
	          end: {
	            line: 133,
	            column: 21
	          }
	        }],
	        line: 123
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 154,
	            column: 8
	          },
	          end: {
	            line: 187,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 154,
	            column: 8
	          },
	          end: {
	            line: 187,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 154,
	            column: 8
	          },
	          end: {
	            line: 187,
	            column: 9
	          }
	        }],
	        line: 154
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 155,
	            column: 12
	          },
	          end: {
	            line: 170,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 155,
	            column: 12
	          },
	          end: {
	            line: 170,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 155,
	            column: 12
	          },
	          end: {
	            line: 170,
	            column: 13
	          }
	        }],
	        line: 155
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 172,
	            column: 12
	          },
	          end: {
	            line: 186,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 172,
	            column: 12
	          },
	          end: {
	            line: 186,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 172,
	            column: 12
	          },
	          end: {
	            line: 186,
	            column: 13
	          }
	        }],
	        line: 172
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 172,
	            column: 16
	          },
	          end: {
	            line: 172,
	            column: 74
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 172,
	            column: 16
	          },
	          end: {
	            line: 172,
	            column: 44
	          }
	        }, {
	          start: {
	            line: 172,
	            column: 48
	          },
	          end: {
	            line: 172,
	            column: 74
	          }
	        }],
	        line: 172
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 190,
	            column: 23
	          },
	          end: {
	            line: 190,
	            column: 33
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 190,
	            column: 31
	          },
	          end: {
	            line: 190,
	            column: 33
	          }
	        }],
	        line: 190
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 199,
	            column: 12
	          },
	          end: {
	            line: 202,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 199,
	            column: 12
	          },
	          end: {
	            line: 202,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 199,
	            column: 12
	          },
	          end: {
	            line: 202,
	            column: 13
	          }
	        }],
	        line: 199
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 199,
	            column: 16
	          },
	          end: {
	            line: 199,
	            column: 102
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 199,
	            column: 16
	          },
	          end: {
	            line: 199,
	            column: 55
	          }
	        }, {
	          start: {
	            line: 199,
	            column: 59
	          },
	          end: {
	            line: 199,
	            column: 102
	          }
	        }],
	        line: 199
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 285,
	            column: 8
	          },
	          end: {
	            line: 293,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 285,
	            column: 8
	          },
	          end: {
	            line: 293,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 285,
	            column: 8
	          },
	          end: {
	            line: 293,
	            column: 9
	          }
	        }],
	        line: 285
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 287,
	            column: 12
	          },
	          end: {
	            line: 289,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 287,
	            column: 12
	          },
	          end: {
	            line: 289,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 287,
	            column: 12
	          },
	          end: {
	            line: 289,
	            column: 13
	          }
	        }],
	        line: 287
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 298,
	            column: 8
	          },
	          end: {
	            line: 306,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 298,
	            column: 8
	          },
	          end: {
	            line: 306,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 298,
	            column: 8
	          },
	          end: {
	            line: 306,
	            column: 9
	          }
	        }],
	        line: 298
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 303,
	            column: 12
	          },
	          end: {
	            line: 305,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 303,
	            column: 12
	          },
	          end: {
	            line: 305,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 303,
	            column: 12
	          },
	          end: {
	            line: 305,
	            column: 13
	          }
	        }],
	        line: 303
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 311,
	            column: 8
	          },
	          end: {
	            line: 335,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 311,
	            column: 8
	          },
	          end: {
	            line: 335,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 311,
	            column: 8
	          },
	          end: {
	            line: 335,
	            column: 9
	          }
	        }],
	        line: 311
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 330,
	            column: 12
	          },
	          end: {
	            line: 334,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 330,
	            column: 12
	          },
	          end: {
	            line: 334,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 330,
	            column: 12
	          },
	          end: {
	            line: 334,
	            column: 13
	          }
	        }],
	        line: 330
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 346,
	            column: 8
	          },
	          end: {
	            line: 348,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 346,
	            column: 8
	          },
	          end: {
	            line: 348,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 346,
	            column: 8
	          },
	          end: {
	            line: 348,
	            column: 9
	          }
	        }],
	        line: 346
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 356,
	            column: 8
	          },
	          end: {
	            line: 358,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 356,
	            column: 8
	          },
	          end: {
	            line: 358,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 356,
	            column: 8
	          },
	          end: {
	            line: 358,
	            column: 9
	          }
	        }],
	        line: 356
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 361,
	            column: 12
	          },
	          end: {
	            line: 363,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 361,
	            column: 12
	          },
	          end: {
	            line: 363,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 361,
	            column: 12
	          },
	          end: {
	            line: 363,
	            column: 13
	          }
	        }],
	        line: 361
	      },
	      '31': {
	        loc: {
	          start: {
	            line: 365,
	            column: 8
	          },
	          end: {
	            line: 386,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 365,
	            column: 8
	          },
	          end: {
	            line: 386,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 365,
	            column: 8
	          },
	          end: {
	            line: 386,
	            column: 9
	          }
	        }],
	        line: 365
	      },
	      '32': {
	        loc: {
	          start: {
	            line: 369,
	            column: 16
	          },
	          end: {
	            line: 384,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 369,
	            column: 16
	          },
	          end: {
	            line: 384,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 369,
	            column: 16
	          },
	          end: {
	            line: 384,
	            column: 17
	          }
	        }],
	        line: 369
	      },
	      '33': {
	        loc: {
	          start: {
	            line: 372,
	            column: 20
	          },
	          end: {
	            line: 375,
	            column: 21
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 372,
	            column: 20
	          },
	          end: {
	            line: 375,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 372,
	            column: 20
	          },
	          end: {
	            line: 375,
	            column: 21
	          }
	        }],
	        line: 372
	      },
	      '34': {
	        loc: {
	          start: {
	            line: 393,
	            column: 8
	          },
	          end: {
	            line: 395,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 393,
	            column: 8
	          },
	          end: {
	            line: 395,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 393,
	            column: 8
	          },
	          end: {
	            line: 395,
	            column: 9
	          }
	        }],
	        line: 393
	      },
	      '35': {
	        loc: {
	          start: {
	            line: 397,
	            column: 8
	          },
	          end: {
	            line: 402,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 397,
	            column: 8
	          },
	          end: {
	            line: 402,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 397,
	            column: 8
	          },
	          end: {
	            line: 402,
	            column: 9
	          }
	        }],
	        line: 397
	      },
	      '36': {
	        loc: {
	          start: {
	            line: 399,
	            column: 12
	          },
	          end: {
	            line: 401,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 399,
	            column: 12
	          },
	          end: {
	            line: 401,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 399,
	            column: 12
	          },
	          end: {
	            line: 401,
	            column: 13
	          }
	        }],
	        line: 399
	      },
	      '37': {
	        loc: {
	          start: {
	            line: 409,
	            column: 8
	          },
	          end: {
	            line: 413,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 409,
	            column: 8
	          },
	          end: {
	            line: 413,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 409,
	            column: 8
	          },
	          end: {
	            line: 413,
	            column: 9
	          }
	        }],
	        line: 409
	      },
	      '38': {
	        loc: {
	          start: {
	            line: 415,
	            column: 8
	          },
	          end: {
	            line: 417,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 415,
	            column: 8
	          },
	          end: {
	            line: 417,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 415,
	            column: 8
	          },
	          end: {
	            line: 417,
	            column: 9
	          }
	        }],
	        line: 415
	      },
	      '39': {
	        loc: {
	          start: {
	            line: 421,
	            column: 8
	          },
	          end: {
	            line: 423,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 421,
	            column: 8
	          },
	          end: {
	            line: 423,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 421,
	            column: 8
	          },
	          end: {
	            line: 423,
	            column: 9
	          }
	        }],
	        line: 421
	      },
	      '40': {
	        loc: {
	          start: {
	            line: 428,
	            column: 8
	          },
	          end: {
	            line: 428,
	            column: 37
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 428,
	            column: 8
	          },
	          end: {
	            line: 428,
	            column: 37
	          }
	        }, {
	          start: {
	            line: 428,
	            column: 8
	          },
	          end: {
	            line: 428,
	            column: 37
	          }
	        }],
	        line: 428
	      },
	      '41': {
	        loc: {
	          start: {
	            line: 430,
	            column: 8
	          },
	          end: {
	            line: 432,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 430,
	            column: 8
	          },
	          end: {
	            line: 432,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 430,
	            column: 8
	          },
	          end: {
	            line: 432,
	            column: 9
	          }
	        }],
	        line: 430
	      },
	      '42': {
	        loc: {
	          start: {
	            line: 438,
	            column: 8
	          },
	          end: {
	            line: 448,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 438,
	            column: 8
	          },
	          end: {
	            line: 448,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 438,
	            column: 8
	          },
	          end: {
	            line: 448,
	            column: 9
	          }
	        }],
	        line: 438
	      },
	      '43': {
	        loc: {
	          start: {
	            line: 439,
	            column: 12
	          },
	          end: {
	            line: 445,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 439,
	            column: 12
	          },
	          end: {
	            line: 445,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 439,
	            column: 12
	          },
	          end: {
	            line: 445,
	            column: 13
	          }
	        }],
	        line: 439
	      },
	      '44': {
	        loc: {
	          start: {
	            line: 440,
	            column: 16
	          },
	          end: {
	            line: 442,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 440,
	            column: 16
	          },
	          end: {
	            line: 442,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 440,
	            column: 16
	          },
	          end: {
	            line: 442,
	            column: 17
	          }
	        }],
	        line: 440
	      },
	      '45': {
	        loc: {
	          start: {
	            line: 457,
	            column: 8
	          },
	          end: {
	            line: 468,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 457,
	            column: 8
	          },
	          end: {
	            line: 468,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 457,
	            column: 8
	          },
	          end: {
	            line: 468,
	            column: 9
	          }
	        }],
	        line: 457
	      },
	      '46': {
	        loc: {
	          start: {
	            line: 459,
	            column: 16
	          },
	          end: {
	            line: 464,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 459,
	            column: 16
	          },
	          end: {
	            line: 464,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 459,
	            column: 16
	          },
	          end: {
	            line: 464,
	            column: 17
	          }
	        }],
	        line: 459
	      },
	      '47': {
	        loc: {
	          start: {
	            line: 459,
	            column: 20
	          },
	          end: {
	            line: 459,
	            column: 75
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 459,
	            column: 20
	          },
	          end: {
	            line: 459,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 459,
	            column: 28
	          },
	          end: {
	            line: 459,
	            column: 42
	          }
	        }, {
	          start: {
	            line: 459,
	            column: 46
	          },
	          end: {
	            line: 459,
	            column: 75
	          }
	        }],
	        line: 459
	      },
	      '48': {
	        loc: {
	          start: {
	            line: 479,
	            column: 16
	          },
	          end: {
	            line: 483,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 479,
	            column: 16
	          },
	          end: {
	            line: 483,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 479,
	            column: 16
	          },
	          end: {
	            line: 483,
	            column: 17
	          }
	        }],
	        line: 479
	      },
	      '49': {
	        loc: {
	          start: {
	            line: 486,
	            column: 16
	          },
	          end: {
	            line: 490,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 486,
	            column: 16
	          },
	          end: {
	            line: 490,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 486,
	            column: 16
	          },
	          end: {
	            line: 490,
	            column: 17
	          }
	        }],
	        line: 486
	      },
	      '50': {
	        loc: {
	          start: {
	            line: 496,
	            column: 16
	          },
	          end: {
	            line: 498,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 496,
	            column: 16
	          },
	          end: {
	            line: 498,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 496,
	            column: 16
	          },
	          end: {
	            line: 498,
	            column: 17
	          }
	        }],
	        line: 496
	      },
	      '51': {
	        loc: {
	          start: {
	            line: 496,
	            column: 20
	          },
	          end: {
	            line: 496,
	            column: 107
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 496,
	            column: 20
	          },
	          end: {
	            line: 496,
	            column: 62
	          }
	        }, {
	          start: {
	            line: 496,
	            column: 66
	          },
	          end: {
	            line: 496,
	            column: 107
	          }
	        }],
	        line: 496
	      },
	      '52': {
	        loc: {
	          start: {
	            line: 513,
	            column: 16
	          },
	          end: {
	            line: 517,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 513,
	            column: 16
	          },
	          end: {
	            line: 517,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 513,
	            column: 16
	          },
	          end: {
	            line: 517,
	            column: 17
	          }
	        }],
	        line: 513
	      },
	      '53': {
	        loc: {
	          start: {
	            line: 515,
	            column: 23
	          },
	          end: {
	            line: 517,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 515,
	            column: 23
	          },
	          end: {
	            line: 517,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 515,
	            column: 23
	          },
	          end: {
	            line: 517,
	            column: 17
	          }
	        }],
	        line: 515
	      },
	      '54': {
	        loc: {
	          start: {
	            line: 523,
	            column: 16
	          },
	          end: {
	            line: 527,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 523,
	            column: 16
	          },
	          end: {
	            line: 527,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 523,
	            column: 16
	          },
	          end: {
	            line: 527,
	            column: 17
	          }
	        }],
	        line: 523
	      },
	      '55': {
	        loc: {
	          start: {
	            line: 534,
	            column: 16
	          },
	          end: {
	            line: 538,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 534,
	            column: 16
	          },
	          end: {
	            line: 538,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 534,
	            column: 16
	          },
	          end: {
	            line: 538,
	            column: 17
	          }
	        }],
	        line: 534
	      },
	      '56': {
	        loc: {
	          start: {
	            line: 579,
	            column: 12
	          },
	          end: {
	            line: 582,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 579,
	            column: 12
	          },
	          end: {
	            line: 582,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 579,
	            column: 12
	          },
	          end: {
	            line: 582,
	            column: 13
	          }
	        }],
	        line: 579
	      },
	      '57': {
	        loc: {
	          start: {
	            line: 586,
	            column: 12
	          },
	          end: {
	            line: 589,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 586,
	            column: 12
	          },
	          end: {
	            line: 589,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 586,
	            column: 12
	          },
	          end: {
	            line: 589,
	            column: 13
	          }
	        }],
	        line: 586
	      },
	      '58': {
	        loc: {
	          start: {
	            line: 605,
	            column: 16
	          },
	          end: {
	            line: 609,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 605,
	            column: 16
	          },
	          end: {
	            line: 609,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 605,
	            column: 16
	          },
	          end: {
	            line: 609,
	            column: 17
	          }
	        }],
	        line: 605
	      },
	      '59': {
	        loc: {
	          start: {
	            line: 605,
	            column: 20
	          },
	          end: {
	            line: 605,
	            column: 105
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 605,
	            column: 20
	          },
	          end: {
	            line: 605,
	            column: 49
	          }
	        }, {
	          start: {
	            line: 605,
	            column: 53
	          },
	          end: {
	            line: 605,
	            column: 105
	          }
	        }],
	        line: 605
	      },
	      '60': {
	        loc: {
	          start: {
	            line: 627,
	            column: 12
	          },
	          end: {
	            line: 627,
	            column: 38
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 627,
	            column: 12
	          },
	          end: {
	            line: 627,
	            column: 38
	          }
	        }, {
	          start: {
	            line: 627,
	            column: 12
	          },
	          end: {
	            line: 627,
	            column: 38
	          }
	        }],
	        line: 627
	      },
	      '61': {
	        loc: {
	          start: {
	            line: 630,
	            column: 12
	          },
	          end: {
	            line: 630,
	            column: 36
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 630,
	            column: 12
	          },
	          end: {
	            line: 630,
	            column: 36
	          }
	        }, {
	          start: {
	            line: 630,
	            column: 12
	          },
	          end: {
	            line: 630,
	            column: 36
	          }
	        }],
	        line: 630
	      },
	      '62': {
	        loc: {
	          start: {
	            line: 632,
	            column: 12
	          },
	          end: {
	            line: 634,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 632,
	            column: 12
	          },
	          end: {
	            line: 634,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 632,
	            column: 12
	          },
	          end: {
	            line: 634,
	            column: 13
	          }
	        }],
	        line: 632
	      },
	      '63': {
	        loc: {
	          start: {
	            line: 660,
	            column: 12
	          },
	          end: {
	            line: 689,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 660,
	            column: 12
	          },
	          end: {
	            line: 689,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 660,
	            column: 12
	          },
	          end: {
	            line: 689,
	            column: 13
	          }
	        }],
	        line: 660
	      },
	      '64': {
	        loc: {
	          start: {
	            line: 660,
	            column: 16
	          },
	          end: {
	            line: 660,
	            column: 99
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 660,
	            column: 16
	          },
	          end: {
	            line: 660,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 660,
	            column: 31
	          },
	          end: {
	            line: 660,
	            column: 60
	          }
	        }, {
	          start: {
	            line: 660,
	            column: 64
	          },
	          end: {
	            line: 660,
	            column: 99
	          }
	        }],
	        line: 660
	      },
	      '65': {
	        loc: {
	          start: {
	            line: 664,
	            column: 16
	          },
	          end: {
	            line: 671,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 664,
	            column: 16
	          },
	          end: {
	            line: 671,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 664,
	            column: 16
	          },
	          end: {
	            line: 671,
	            column: 17
	          }
	        }],
	        line: 664
	      },
	      '66': {
	        loc: {
	          start: {
	            line: 667,
	            column: 33
	          },
	          end: {
	            line: 667,
	            column: 103
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 667,
	            column: 53
	          },
	          end: {
	            line: 667,
	            column: 90
	          }
	        }, {
	          start: {
	            line: 667,
	            column: 93
	          },
	          end: {
	            line: 667,
	            column: 103
	          }
	        }],
	        line: 667
	      },
	      '67': {
	        loc: {
	          start: {
	            line: 668,
	            column: 33
	          },
	          end: {
	            line: 668,
	            column: 69
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 668,
	            column: 48
	          },
	          end: {
	            line: 668,
	            column: 64
	          }
	        }, {
	          start: {
	            line: 668,
	            column: 67
	          },
	          end: {
	            line: 668,
	            column: 69
	          }
	        }],
	        line: 668
	      },
	      '68': {
	        loc: {
	          start: {
	            line: 670,
	            column: 36
	          },
	          end: {
	            line: 670,
	            column: 78
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 670,
	            column: 54
	          },
	          end: {
	            line: 670,
	            column: 73
	          }
	        }, {
	          start: {
	            line: 670,
	            column: 76
	          },
	          end: {
	            line: 670,
	            column: 78
	          }
	        }],
	        line: 670
	      },
	      '69': {
	        loc: {
	          start: {
	            line: 681,
	            column: 16
	          },
	          end: {
	            line: 685,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 681,
	            column: 16
	          },
	          end: {
	            line: 685,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 681,
	            column: 16
	          },
	          end: {
	            line: 685,
	            column: 17
	          }
	        }],
	        line: 681
	      },
	      '70': {
	        loc: {
	          start: {
	            line: 702,
	            column: 12
	          },
	          end: {
	            line: 707,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 702,
	            column: 12
	          },
	          end: {
	            line: 707,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 702,
	            column: 12
	          },
	          end: {
	            line: 707,
	            column: 13
	          }
	        }],
	        line: 702
	      },
	      '71': {
	        loc: {
	          start: {
	            line: 712,
	            column: 12
	          },
	          end: {
	            line: 716,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 712,
	            column: 12
	          },
	          end: {
	            line: 716,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 712,
	            column: 12
	          },
	          end: {
	            line: 716,
	            column: 13
	          }
	        }],
	        line: 712
	      },
	      '72': {
	        loc: {
	          start: {
	            line: 723,
	            column: 12
	          },
	          end: {
	            line: 725,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 723,
	            column: 12
	          },
	          end: {
	            line: 725,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 723,
	            column: 12
	          },
	          end: {
	            line: 725,
	            column: 13
	          }
	        }],
	        line: 723
	      },
	      '73': {
	        loc: {
	          start: {
	            line: 729,
	            column: 12
	          },
	          end: {
	            line: 731,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 729,
	            column: 12
	          },
	          end: {
	            line: 731,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 729,
	            column: 12
	          },
	          end: {
	            line: 731,
	            column: 13
	          }
	        }],
	        line: 729
	      },
	      '74': {
	        loc: {
	          start: {
	            line: 746,
	            column: 8
	          },
	          end: {
	            line: 748,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 746,
	            column: 8
	          },
	          end: {
	            line: 748,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 746,
	            column: 8
	          },
	          end: {
	            line: 748,
	            column: 9
	          }
	        }],
	        line: 746
	      },
	      '75': {
	        loc: {
	          start: {
	            line: 763,
	            column: 8
	          },
	          end: {
	            line: 767,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 763,
	            column: 8
	          },
	          end: {
	            line: 767,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 763,
	            column: 8
	          },
	          end: {
	            line: 767,
	            column: 9
	          }
	        }],
	        line: 763
	      },
	      '76': {
	        loc: {
	          start: {
	            line: 792,
	            column: 12
	          },
	          end: {
	            line: 794,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 792,
	            column: 12
	          },
	          end: {
	            line: 794,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 792,
	            column: 12
	          },
	          end: {
	            line: 794,
	            column: 13
	          }
	        }],
	        line: 792
	      },
	      '77': {
	        loc: {
	          start: {
	            line: 799,
	            column: 12
	          },
	          end: {
	            line: 801,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 799,
	            column: 12
	          },
	          end: {
	            line: 801,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 799,
	            column: 12
	          },
	          end: {
	            line: 801,
	            column: 13
	          }
	        }],
	        line: 799
	      },
	      '78': {
	        loc: {
	          start: {
	            line: 806,
	            column: 12
	          },
	          end: {
	            line: 808,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 806,
	            column: 12
	          },
	          end: {
	            line: 808,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 806,
	            column: 12
	          },
	          end: {
	            line: 808,
	            column: 13
	          }
	        }],
	        line: 806
	      },
	      '79': {
	        loc: {
	          start: {
	            line: 828,
	            column: 12
	          },
	          end: {
	            line: 833,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 828,
	            column: 12
	          },
	          end: {
	            line: 833,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 828,
	            column: 12
	          },
	          end: {
	            line: 833,
	            column: 13
	          }
	        }],
	        line: 828
	      },
	      '80': {
	        loc: {
	          start: {
	            line: 837,
	            column: 12
	          },
	          end: {
	            line: 839,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 837,
	            column: 12
	          },
	          end: {
	            line: 839,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 837,
	            column: 12
	          },
	          end: {
	            line: 839,
	            column: 13
	          }
	        }],
	        line: 837
	      },
	      '81': {
	        loc: {
	          start: {
	            line: 843,
	            column: 12
	          },
	          end: {
	            line: 845,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 843,
	            column: 12
	          },
	          end: {
	            line: 845,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 843,
	            column: 12
	          },
	          end: {
	            line: 845,
	            column: 13
	          }
	        }],
	        line: 843
	      },
	      '82': {
	        loc: {
	          start: {
	            line: 849,
	            column: 12
	          },
	          end: {
	            line: 851,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 849,
	            column: 12
	          },
	          end: {
	            line: 851,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 849,
	            column: 12
	          },
	          end: {
	            line: 851,
	            column: 13
	          }
	        }],
	        line: 849
	      },
	      '83': {
	        loc: {
	          start: {
	            line: 855,
	            column: 12
	          },
	          end: {
	            line: 857,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 855,
	            column: 12
	          },
	          end: {
	            line: 857,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 855,
	            column: 12
	          },
	          end: {
	            line: 857,
	            column: 13
	          }
	        }],
	        line: 855
	      },
	      '84': {
	        loc: {
	          start: {
	            line: 861,
	            column: 12
	          },
	          end: {
	            line: 863,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 861,
	            column: 12
	          },
	          end: {
	            line: 863,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 861,
	            column: 12
	          },
	          end: {
	            line: 863,
	            column: 13
	          }
	        }],
	        line: 861
	      },
	      '85': {
	        loc: {
	          start: {
	            line: 870,
	            column: 8
	          },
	          end: {
	            line: 873,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 870,
	            column: 8
	          },
	          end: {
	            line: 873,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 870,
	            column: 8
	          },
	          end: {
	            line: 873,
	            column: 9
	          }
	        }],
	        line: 870
	      },
	      '86': {
	        loc: {
	          start: {
	            line: 882,
	            column: 8
	          },
	          end: {
	            line: 884,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 882,
	            column: 8
	          },
	          end: {
	            line: 884,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 882,
	            column: 8
	          },
	          end: {
	            line: 884,
	            column: 9
	          }
	        }],
	        line: 882
	      },
	      '87': {
	        loc: {
	          start: {
	            line: 885,
	            column: 8
	          },
	          end: {
	            line: 897,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 885,
	            column: 8
	          },
	          end: {
	            line: 897,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 885,
	            column: 8
	          },
	          end: {
	            line: 897,
	            column: 9
	          }
	        }],
	        line: 885
	      },
	      '88': {
	        loc: {
	          start: {
	            line: 885,
	            column: 12
	          },
	          end: {
	            line: 885,
	            column: 91
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 885,
	            column: 12
	          },
	          end: {
	            line: 885,
	            column: 53
	          }
	        }, {
	          start: {
	            line: 885,
	            column: 57
	          },
	          end: {
	            line: 885,
	            column: 91
	          }
	        }],
	        line: 885
	      },
	      '89': {
	        loc: {
	          start: {
	            line: 889,
	            column: 12
	          },
	          end: {
	            line: 896,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 889,
	            column: 12
	          },
	          end: {
	            line: 896,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 889,
	            column: 12
	          },
	          end: {
	            line: 896,
	            column: 13
	          }
	        }],
	        line: 889
	      },
	      '90': {
	        loc: {
	          start: {
	            line: 892,
	            column: 20
	          },
	          end: {
	            line: 894,
	            column: 21
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 892,
	            column: 20
	          },
	          end: {
	            line: 894,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 892,
	            column: 20
	          },
	          end: {
	            line: 894,
	            column: 21
	          }
	        }],
	        line: 892
	      },
	      '91': {
	        loc: {
	          start: {
	            line: 898,
	            column: 8
	          },
	          end: {
	            line: 910,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 898,
	            column: 8
	          },
	          end: {
	            line: 910,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 898,
	            column: 8
	          },
	          end: {
	            line: 910,
	            column: 9
	          }
	        }],
	        line: 898
	      },
	      '92': {
	        loc: {
	          start: {
	            line: 898,
	            column: 12
	          },
	          end: {
	            line: 898,
	            column: 97
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 898,
	            column: 12
	          },
	          end: {
	            line: 898,
	            column: 56
	          }
	        }, {
	          start: {
	            line: 898,
	            column: 60
	          },
	          end: {
	            line: 898,
	            column: 97
	          }
	        }],
	        line: 898
	      },
	      '93': {
	        loc: {
	          start: {
	            line: 902,
	            column: 12
	          },
	          end: {
	            line: 909,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 902,
	            column: 12
	          },
	          end: {
	            line: 909,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 902,
	            column: 12
	          },
	          end: {
	            line: 909,
	            column: 13
	          }
	        }],
	        line: 902
	      },
	      '94': {
	        loc: {
	          start: {
	            line: 905,
	            column: 20
	          },
	          end: {
	            line: 907,
	            column: 21
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 905,
	            column: 20
	          },
	          end: {
	            line: 907,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 905,
	            column: 20
	          },
	          end: {
	            line: 907,
	            column: 21
	          }
	        }],
	        line: 905
	      },
	      '95': {
	        loc: {
	          start: {
	            line: 913,
	            column: 8
	          },
	          end: {
	            line: 918,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 913,
	            column: 8
	          },
	          end: {
	            line: 918,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 913,
	            column: 8
	          },
	          end: {
	            line: 918,
	            column: 9
	          }
	        }],
	        line: 913
	      },
	      '96': {
	        loc: {
	          start: {
	            line: 933,
	            column: 8
	          },
	          end: {
	            line: 936,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 933,
	            column: 8
	          },
	          end: {
	            line: 936,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 933,
	            column: 8
	          },
	          end: {
	            line: 936,
	            column: 9
	          }
	        }],
	        line: 933
	      },
	      '97': {
	        loc: {
	          start: {
	            line: 933,
	            column: 12
	          },
	          end: {
	            line: 933,
	            column: 135
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 933,
	            column: 12
	          },
	          end: {
	            line: 933,
	            column: 39
	          }
	        }, {
	          start: {
	            line: 933,
	            column: 44
	          },
	          end: {
	            line: 933,
	            column: 104
	          }
	        }, {
	          start: {
	            line: 933,
	            column: 108
	          },
	          end: {
	            line: 933,
	            column: 134
	          }
	        }],
	        line: 933
	      },
	      '98': {
	        loc: {
	          start: {
	            line: 938,
	            column: 8
	          },
	          end: {
	            line: 940,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 938,
	            column: 8
	          },
	          end: {
	            line: 940,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 938,
	            column: 8
	          },
	          end: {
	            line: 940,
	            column: 9
	          }
	        }],
	        line: 938
	      },
	      '99': {
	        loc: {
	          start: {
	            line: 938,
	            column: 12
	          },
	          end: {
	            line: 938,
	            column: 97
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 938,
	            column: 12
	          },
	          end: {
	            line: 938,
	            column: 53
	          }
	        }, {
	          start: {
	            line: 938,
	            column: 57
	          },
	          end: {
	            line: 938,
	            column: 97
	          }
	        }],
	        line: 938
	      },
	      '100': {
	        loc: {
	          start: {
	            line: 946,
	            column: 8
	          },
	          end: {
	            line: 965,
	            column: 9
	          }
	        },
	        type: 'switch',
	        locations: [{
	          start: {
	            line: 947,
	            column: 12
	          },
	          end: {
	            line: 948,
	            column: 106
	          }
	        }, {
	          start: {
	            line: 949,
	            column: 12
	          },
	          end: {
	            line: 950,
	            column: 117
	          }
	        }, {
	          start: {
	            line: 951,
	            column: 12
	          },
	          end: {
	            line: 952,
	            column: 122
	          }
	        }, {
	          start: {
	            line: 953,
	            column: 12
	          },
	          end: {
	            line: 954,
	            column: 115
	          }
	        }, {
	          start: {
	            line: 955,
	            column: 12
	          },
	          end: {
	            line: 956,
	            column: 126
	          }
	        }, {
	          start: {
	            line: 957,
	            column: 12
	          },
	          end: {
	            line: 958,
	            column: 131
	          }
	        }, {
	          start: {
	            line: 959,
	            column: 12
	          },
	          end: {
	            line: 960,
	            column: 136
	          }
	        }, {
	          start: {
	            line: 961,
	            column: 12
	          },
	          end: {
	            line: 962,
	            column: 103
	          }
	        }, {
	          start: {
	            line: 963,
	            column: 12
	          },
	          end: {
	            line: 964,
	            column: 28
	          }
	        }],
	        line: 946
	      },
	      '101': {
	        loc: {
	          start: {
	            line: 948,
	            column: 56
	          },
	          end: {
	            line: 948,
	            column: 105
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 948,
	            column: 76
	          },
	          end: {
	            line: 948,
	            column: 100
	          }
	        }, {
	          start: {
	            line: 948,
	            column: 103
	          },
	          end: {
	            line: 948,
	            column: 105
	          }
	        }],
	        line: 948
	      },
	      '102': {
	        loc: {
	          start: {
	            line: 950,
	            column: 67
	          },
	          end: {
	            line: 950,
	            column: 116
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 950,
	            column: 87
	          },
	          end: {
	            line: 950,
	            column: 111
	          }
	        }, {
	          start: {
	            line: 950,
	            column: 114
	          },
	          end: {
	            line: 950,
	            column: 116
	          }
	        }],
	        line: 950
	      },
	      '103': {
	        loc: {
	          start: {
	            line: 952,
	            column: 72
	          },
	          end: {
	            line: 952,
	            column: 121
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 952,
	            column: 92
	          },
	          end: {
	            line: 952,
	            column: 116
	          }
	        }, {
	          start: {
	            line: 952,
	            column: 119
	          },
	          end: {
	            line: 952,
	            column: 121
	          }
	        }],
	        line: 952
	      },
	      '104': {
	        loc: {
	          start: {
	            line: 954,
	            column: 65
	          },
	          end: {
	            line: 954,
	            column: 114
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 954,
	            column: 85
	          },
	          end: {
	            line: 954,
	            column: 109
	          }
	        }, {
	          start: {
	            line: 954,
	            column: 112
	          },
	          end: {
	            line: 954,
	            column: 114
	          }
	        }],
	        line: 954
	      },
	      '105': {
	        loc: {
	          start: {
	            line: 956,
	            column: 76
	          },
	          end: {
	            line: 956,
	            column: 125
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 956,
	            column: 96
	          },
	          end: {
	            line: 956,
	            column: 120
	          }
	        }, {
	          start: {
	            line: 956,
	            column: 123
	          },
	          end: {
	            line: 956,
	            column: 125
	          }
	        }],
	        line: 956
	      },
	      '106': {
	        loc: {
	          start: {
	            line: 958,
	            column: 81
	          },
	          end: {
	            line: 958,
	            column: 130
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 958,
	            column: 101
	          },
	          end: {
	            line: 958,
	            column: 125
	          }
	        }, {
	          start: {
	            line: 958,
	            column: 128
	          },
	          end: {
	            line: 958,
	            column: 130
	          }
	        }],
	        line: 958
	      },
	      '107': {
	        loc: {
	          start: {
	            line: 960,
	            column: 86
	          },
	          end: {
	            line: 960,
	            column: 135
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 960,
	            column: 106
	          },
	          end: {
	            line: 960,
	            column: 130
	          }
	        }, {
	          start: {
	            line: 960,
	            column: 133
	          },
	          end: {
	            line: 960,
	            column: 135
	          }
	        }],
	        line: 960
	      },
	      '108': {
	        loc: {
	          start: {
	            line: 962,
	            column: 53
	          },
	          end: {
	            line: 962,
	            column: 102
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 962,
	            column: 73
	          },
	          end: {
	            line: 962,
	            column: 97
	          }
	        }, {
	          start: {
	            line: 962,
	            column: 100
	          },
	          end: {
	            line: 962,
	            column: 102
	          }
	        }],
	        line: 962
	      },
	      '109': {
	        loc: {
	          start: {
	            line: 975,
	            column: 8
	          },
	          end: {
	            line: 977,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 975,
	            column: 8
	          },
	          end: {
	            line: 977,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 975,
	            column: 8
	          },
	          end: {
	            line: 977,
	            column: 9
	          }
	        }],
	        line: 975
	      },
	      '110': {
	        loc: {
	          start: {
	            line: 975,
	            column: 12
	          },
	          end: {
	            line: 975,
	            column: 57
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 975,
	            column: 12
	          },
	          end: {
	            line: 975,
	            column: 35
	          }
	        }, {
	          start: {
	            line: 975,
	            column: 39
	          },
	          end: {
	            line: 975,
	            column: 57
	          }
	        }],
	        line: 975
	      },
	      '111': {
	        loc: {
	          start: {
	            line: 980,
	            column: 8
	          },
	          end: {
	            line: 983,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 980,
	            column: 8
	          },
	          end: {
	            line: 983,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 980,
	            column: 8
	          },
	          end: {
	            line: 983,
	            column: 9
	          }
	        }],
	        line: 980
	      },
	      '112': {
	        loc: {
	          start: {
	            line: 989,
	            column: 8
	          },
	          end: {
	            line: 989,
	            column: 43
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 989,
	            column: 8
	          },
	          end: {
	            line: 989,
	            column: 43
	          }
	        }, {
	          start: {
	            line: 989,
	            column: 8
	          },
	          end: {
	            line: 989,
	            column: 43
	          }
	        }],
	        line: 989
	      },
	      '113': {
	        loc: {
	          start: {
	            line: 990,
	            column: 8
	          },
	          end: {
	            line: 990,
	            column: 49
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 990,
	            column: 8
	          },
	          end: {
	            line: 990,
	            column: 49
	          }
	        }, {
	          start: {
	            line: 990,
	            column: 8
	          },
	          end: {
	            line: 990,
	            column: 49
	          }
	        }],
	        line: 990
	      },
	      '114': {
	        loc: {
	          start: {
	            line: 991,
	            column: 8
	          },
	          end: {
	            line: 991,
	            column: 49
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 991,
	            column: 8
	          },
	          end: {
	            line: 991,
	            column: 49
	          }
	        }, {
	          start: {
	            line: 991,
	            column: 8
	          },
	          end: {
	            line: 991,
	            column: 49
	          }
	        }],
	        line: 991
	      },
	      '115': {
	        loc: {
	          start: {
	            line: 993,
	            column: 16
	          },
	          end: {
	            line: 993,
	            column: 37
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 993,
	            column: 29
	          },
	          end: {
	            line: 993,
	            column: 32
	          }
	        }, {
	          start: {
	            line: 993,
	            column: 35
	          },
	          end: {
	            line: 993,
	            column: 37
	          }
	        }],
	        line: 993
	      },
	      '116': {
	        loc: {
	          start: {
	            line: 1003,
	            column: 8
	          },
	          end: {
	            line: 1007,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 1003,
	            column: 8
	          },
	          end: {
	            line: 1007,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 1003,
	            column: 8
	          },
	          end: {
	            line: 1007,
	            column: 9
	          }
	        }],
	        line: 1003
	      },
	      '117': {
	        loc: {
	          start: {
	            line: 1003,
	            column: 12
	          },
	          end: {
	            line: 1003,
	            column: 85
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 1003,
	            column: 12
	          },
	          end: {
	            line: 1003,
	            column: 39
	          }
	        }, {
	          start: {
	            line: 1003,
	            column: 43
	          },
	          end: {
	            line: 1003,
	            column: 85
	          }
	        }],
	        line: 1003
	      },
	      '118': {
	        loc: {
	          start: {
	            line: 1005,
	            column: 15
	          },
	          end: {
	            line: 1007,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 1005,
	            column: 15
	          },
	          end: {
	            line: 1007,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 1005,
	            column: 15
	          },
	          end: {
	            line: 1007,
	            column: 9
	          }
	        }],
	        line: 1005
	      },
	      '119': {
	        loc: {
	          start: {
	            line: 1011,
	            column: 15
	          },
	          end: {
	            line: 1011,
	            column: 91
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 1011,
	            column: 15
	          },
	          end: {
	            line: 1011,
	            column: 30
	          }
	        }, {
	          start: {
	            line: 1011,
	            column: 34
	          },
	          end: {
	            line: 1011,
	            column: 91
	          }
	        }],
	        line: 1011
	      },
	      '120': {
	        loc: {
	          start: {
	            line: 1018,
	            column: 0
	          },
	          end: {
	            line: 1020,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 1018,
	            column: 0
	          },
	          end: {
	            line: 1020,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 1018,
	            column: 0
	          },
	          end: {
	            line: 1020,
	            column: 1
	          }
	        }],
	        line: 1018
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
	      '506': 0,
	      '507': 0,
	      '508': 0,
	      '509': 0,
	      '510': 0,
	      '511': 0,
	      '512': 0,
	      '513': 0,
	      '514': 0,
	      '515': 0,
	      '516': 0,
	      '517': 0,
	      '518': 0
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
	      '98': 0
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
	      '12': [0, 0],
	      '13': [0, 0],
	      '14': [0, 0],
	      '15': [0, 0],
	      '16': [0, 0],
	      '17': [0, 0],
	      '18': [0, 0],
	      '19': [0],
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
	      '47': [0, 0, 0],
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
	      '59': [0, 0],
	      '60': [0, 0],
	      '61': [0, 0],
	      '62': [0, 0],
	      '63': [0, 0],
	      '64': [0, 0, 0],
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
	      '77': [0, 0],
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
	      '97': [0, 0, 0],
	      '98': [0, 0],
	      '99': [0, 0],
	      '100': [0, 0, 0, 0, 0, 0, 0, 0, 0],
	      '101': [0, 0],
	      '102': [0, 0],
	      '103': [0, 0],
	      '104': [0, 0],
	      '105': [0, 0],
	      '106': [0, 0],
	      '107': [0, 0],
	      '108': [0, 0],
	      '109': [0, 0],
	      '110': [0, 0],
	      '111': [0, 0],
	      '112': [0, 0],
	      '113': [0, 0],
	      '114': [0, 0],
	      '115': [0, 0],
	      '116': [0, 0],
	      '117': [0, 0],
	      '118': [0, 0],
	      '119': [0, 0],
	      '120': [0, 0]
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
	var Component = (cov_1iiyehkoov.s[0]++, videojs$1.getComponent('Component'));
	var ControlBar = (cov_1iiyehkoov.s[1]++, videojs$1.getComponent('ControlBar'));
	var Button = (cov_1iiyehkoov.s[2]++, videojs$1.getComponent('Button'));
	var DEFAULT_VOLUME = (cov_1iiyehkoov.s[3]++, 0.5);
	var FULL_VOLUME_HEIGHT = (cov_1iiyehkoov.s[4]++, 100);
	var PLAYER_STATE = (cov_1iiyehkoov.s[5]++, {
	  IDLE: 'IDLE',
	  BUFFERING: 'BUFFERING',
	  LOADED: 'LOADED',
	  PLAYING: 'PLAYING',
	  PAUSED: 'PAUSED'
	});

	var ChromecastButton = /*#__PURE__*/function (_Button) {
	  inheritsLoose(ChromecastButton, _Button);

	  function ChromecastButton(player, options) {
	    var _this2;

	    cov_1iiyehkoov.f[0]++;
	    cov_1iiyehkoov.s[6]++;
	    _this2 = _Button.call(this, player, options) || this;
	    cov_1iiyehkoov.s[7]++;
	    _this2.player = player;
	    cov_1iiyehkoov.s[8]++;
	    _this2.options = options;
	    cov_1iiyehkoov.s[9]++;
	    _this2.incrementMediaTimeHandler = _this2.incrementMediaTime.bind(assertThisInitialized(_this2));
	    return _this2;
	  }

	  var _proto = ChromecastButton.prototype;

	  _proto.initCastPlayer = function initCastPlayer(player, options) {
	    var _this3 = this;

	    cov_1iiyehkoov.f[1]++;

	    var _this = (cov_1iiyehkoov.s[10]++, this);

	    cov_1iiyehkoov.s[11]++;
	    this.player = player;
	    cov_1iiyehkoov.s[12]++;
	    this.options = options;
	    cov_1iiyehkoov.s[13]++;
	    this.sources = {};
	    cov_1iiyehkoov.s[14]++;
	    this.casting = false;
	    cov_1iiyehkoov.s[15]++;
	    this.apiSession = null;
	    cov_1iiyehkoov.s[16]++;
	    this.mDNS = false;
	    cov_1iiyehkoov.s[17]++;
	    this.client = {};
	    cov_1iiyehkoov.s[18]++;
	    this.receivers = [];
	    cov_1iiyehkoov.s[19]++;
	    this.choosenDevice = null;
	    cov_1iiyehkoov.s[20]++;
	    this.initPlayerHandler(this);
	    cov_1iiyehkoov.s[21]++;
	    this.playerState = PLAYER_STATE.IDLE;
	    cov_1iiyehkoov.s[22]++;
	    this.playerStateBeforeSwitch = null;
	    cov_1iiyehkoov.s[23]++;
	    this.remotePlayer = null;
	    cov_1iiyehkoov.s[24]++;
	    this.remotePlayerController = null;
	    cov_1iiyehkoov.s[25]++;
	    this.currentMediaTime = 0;
	    cov_1iiyehkoov.s[26]++;
	    this.mediaDuration = -1;
	    cov_1iiyehkoov.s[27]++;
	    this.mediaInfo = {};
	    cov_1iiyehkoov.s[28]++;
	    this.mediaInfoMDNS = {};
	    cov_1iiyehkoov.s[29]++;
	    this.tryingReconnect = 0;
	    cov_1iiyehkoov.s[30]++;
	    this.searchAttempts = 5;
	    cov_1iiyehkoov.s[31]++;
	    this.timePerAttempt = 1000;
	    cov_1iiyehkoov.s[32]++;
	    this.selectedDevice = null;
	    cov_1iiyehkoov.s[33]++;
	    this.hide();
	    cov_1iiyehkoov.s[34]++;

	    if ((cov_1iiyehkoov.b[1][0]++, options.appId !== undefined) && (cov_1iiyehkoov.b[1][1]++, options.appId !== '')) {
	      cov_1iiyehkoov.b[0][0]++;
	      cov_1iiyehkoov.s[35]++;
	      this.appId = options.appId;
	    } else {
	      cov_1iiyehkoov.b[0][1]++;
	      cov_1iiyehkoov.s[36]++;

	      if (chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID) {
	        cov_1iiyehkoov.b[2][0]++;
	        cov_1iiyehkoov.s[37]++;
	        this.appId = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
	      } else {
	        cov_1iiyehkoov.b[2][1]++;
	      }
	    }

	    cov_1iiyehkoov.s[38]++;

	    if ((cov_1iiyehkoov.b[4][0]++, options.autoJoinPolicy !== undefined) && (cov_1iiyehkoov.b[4][1]++, options.autoJoinPolicy !== '')) {
	      cov_1iiyehkoov.b[3][0]++;
	      cov_1iiyehkoov.s[39]++;
	      this.autoJoinPolicy = options.autoJoinPolicy;
	    } else {
	      cov_1iiyehkoov.b[3][1]++;
	      cov_1iiyehkoov.s[40]++;

	      if (chrome.cast.AutoJoinPolicy.PAGE_SCOPED) {
	        cov_1iiyehkoov.b[5][0]++;
	        cov_1iiyehkoov.s[41]++;
	        this.autoJoinPolicy = chrome.cast.AutoJoinPolicy.PAGE_SCOPED;
	      } else {
	        cov_1iiyehkoov.b[5][1]++;
	      }
	    }

	    cov_1iiyehkoov.s[42]++;
	    cast.framework.CastContext.getInstance().setOptions({
	      receiverApplicationId: this.appId,
	      autoJoinPolicy: this.autoJoinPolicy
	    });
	    cov_1iiyehkoov.s[43]++;

	    if ((cov_1iiyehkoov.b[7][0]++, options.searchAttempts !== undefined) && (cov_1iiyehkoov.b[7][1]++, options.searchAttempts !== '')) {
	      cov_1iiyehkoov.b[6][0]++;
	      cov_1iiyehkoov.s[44]++;
	      this.searchAttempts = options.searchAttempts;
	    } else {
	      cov_1iiyehkoov.b[6][1]++;
	    }

	    cov_1iiyehkoov.s[45]++;

	    if ((cov_1iiyehkoov.b[9][0]++, options.timePerAttempt !== undefined) && (cov_1iiyehkoov.b[9][1]++, options.timePerAttempt !== '')) {
	      cov_1iiyehkoov.b[8][0]++;
	      cov_1iiyehkoov.s[46]++;
	      this.timePerAttempt = options.timePerAttempt;
	    } else {
	      cov_1iiyehkoov.b[8][1]++;
	    }

	    cov_1iiyehkoov.s[47]++;

	    if ((cov_1iiyehkoov.b[11][0]++, this.options.mdns !== undefined) && (cov_1iiyehkoov.b[11][1]++, this.options.mdns)) {
	      cov_1iiyehkoov.b[10][0]++;
	      cov_1iiyehkoov.s[48]++;
	      this.mDNS = true;
	      var ChromecastAPI = (cov_1iiyehkoov.s[49]++, require('chromecast-api'));
	      cov_1iiyehkoov.s[50]++;
	      this.client = new ChromecastAPI();
	      cov_1iiyehkoov.s[51]++;
	      this.container = document.createElement('div');
	      cov_1iiyehkoov.s[52]++;
	      this.container.setAttribute('class', 'ReactModalPortal');
	      cov_1iiyehkoov.s[53]++;
	      this.container.setAttribute('id', 'containerModal');
	      cov_1iiyehkoov.s[54]++;
	      this.contentModal = '' + '<div id="chromecastModal" class="chromecastModal ReactModal__Overlay ReactModal__Overlay--after-open modal-overlay">' + '<div class="ReactModal__Content ReactModal__Content--after-open modal modal--card-internal" tabIndex="-1" role="dialog">' + '<button id="closeCast" class="button button--close closeCast" type="button">' + '<span class="button__content">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--X"><g><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></g></svg>' + '</span>' + '</button>' + '<section class="card">' + '<div class="card__header--between">' + '<div class="card__title-section">' + '<div>' + '<h2 className="card__title">Cast to...</h2>' + '</div>' + '</div>' + '<div></div>' + '</div>' + '<div class="card__main-actions">';
	      var loader = (cov_1iiyehkoov.s[55]++, '<div class="castLoader"></div>');
	      cov_1iiyehkoov.s[56]++;
	      this.client.on('device', function (device) {
	        cov_1iiyehkoov.f[2]++;
	        cov_1iiyehkoov.s[57]++;

	        if (device !== undefined) {
	          cov_1iiyehkoov.b[12][0]++;
	          cov_1iiyehkoov.s[58]++;

	          _this3.receivers.push(device);

	          cov_1iiyehkoov.s[59]++;
	          _this3.contentModal += '<fieldset-section id="' + device.name + '" class="selectCast"><div id="' + device.name + '" class="castFriendlyName">' + device.friendlyName + '</div>' + loader + '</fieldset-section>';
	        } else {
	          cov_1iiyehkoov.b[12][1]++;
	        }
	      });
	      cov_1iiyehkoov.s[60]++;
	      this.prepareMediaForCast(function () {
	        cov_1iiyehkoov.f[3]++;
	      });
	      cov_1iiyehkoov.s[61]++;
	      hasFinishedSearch();

	      function hasFinishedSearch() {
	        cov_1iiyehkoov.f[4]++;
	        cov_1iiyehkoov.s[62]++;

	        if (_this.client.hasFinishLoad === true) {
	          cov_1iiyehkoov.b[13][0]++;
	          cov_1iiyehkoov.s[63]++;

	          if (_this.receivers.length > 0) {
	            cov_1iiyehkoov.b[14][0]++;
	            cov_1iiyehkoov.s[64]++;
	            _this.remotePlayer = new cast.framework.RemotePlayer();
	            cov_1iiyehkoov.s[65]++;
	            _this.remotePlayerController = new cast.framework.RemotePlayerController(_this.remotePlayer);
	            cov_1iiyehkoov.s[66]++;
	            _this.apiInitialized = true;
	            cov_1iiyehkoov.s[67]++;
	            setTimeout(_this.initSearchProcess.bind(_this), 0);
	          } else {
	            cov_1iiyehkoov.b[14][1]++;
	            cov_1iiyehkoov.s[68]++;

	            _this.hide();

	            cov_1iiyehkoov.s[69]++;
	            setTimeout(_this.initSearchProcess.bind(_this), _this.timePerAttempt);
	          }
	        } else {
	          cov_1iiyehkoov.b[13][1]++;
	          cov_1iiyehkoov.s[70]++;
	          setTimeout(hasFinishedSearch, 100);
	        }
	      }
	    } else {
	      cov_1iiyehkoov.b[10][1]++;
	      cov_1iiyehkoov.s[71]++;
	      this.remotePlayer = new cast.framework.RemotePlayer();
	      cov_1iiyehkoov.s[72]++;
	      this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer);
	      cov_1iiyehkoov.s[73]++;
	      this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, function (e) {
	        cov_1iiyehkoov.f[5]++;
	        cov_1iiyehkoov.s[74]++;

	        _this3.switchPlayer(e.value);
	      });
	      cov_1iiyehkoov.s[75]++;
	      this.apiInitialized = true;
	      cov_1iiyehkoov.s[76]++;
	      this.initializeUI(player);
	      cov_1iiyehkoov.s[77]++;
	      this.setupLocalPlayer();
	    }
	  };

	  _proto.initSearchProcess = function initSearchProcess() {
	    cov_1iiyehkoov.f[6]++;
	    cov_1iiyehkoov.s[78]++;
	    videojs$1.log('Searching Cast APIs...');
	    cov_1iiyehkoov.s[79]++;

	    if (this.tryingReconnect < this.searchAttempts) {
	      cov_1iiyehkoov.b[15][0]++;
	      cov_1iiyehkoov.s[80]++;

	      if (this.receivers.length <= 1) {
	        cov_1iiyehkoov.b[16][0]++;
	        cov_1iiyehkoov.s[81]++;
	        ++this.tryingReconnect;
	        cov_1iiyehkoov.s[82]++;
	        this.setTimeout(this.initSearchProcess, this.timePerAttempt);
	      } else {
	        cov_1iiyehkoov.b[16][1]++;
	        cov_1iiyehkoov.s[83]++;
	        this.contentModal += '</div>' + '</section>' + '</div>' + '</div>';
	        cov_1iiyehkoov.s[84]++;
	        this.container.innerHTML = this.contentModal;
	        cov_1iiyehkoov.s[85]++;
	        this.remotePlayer = new cast.framework.RemotePlayer();
	        cov_1iiyehkoov.s[86]++;
	        this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer);
	        cov_1iiyehkoov.s[87]++;
	        this.apiInitialized = true;
	        cov_1iiyehkoov.s[88]++;
	        this.setupLocalPlayer();
	        cov_1iiyehkoov.s[89]++;
	        this.initializeUI(this.player);
	        cov_1iiyehkoov.s[90]++;
	        this.show();
	      }
	    } else {
	      cov_1iiyehkoov.b[15][1]++;
	      cov_1iiyehkoov.s[91]++;

	      if ((cov_1iiyehkoov.b[18][0]++, this.receivers === undefined) || (cov_1iiyehkoov.b[18][1]++, this.receivers.length <= 0)) {
	        cov_1iiyehkoov.b[17][0]++;
	        cov_1iiyehkoov.s[92]++;
	        videojs$1.log('Cast APIs not available. Max reconnect attempt');
	      } else {
	        cov_1iiyehkoov.b[17][1]++;
	        cov_1iiyehkoov.s[93]++;
	        this.contentModal += '</div>' + '</section>' + '</div>' + '</div>';
	        cov_1iiyehkoov.s[94]++;
	        this.container.innerHTML = this.contentModal;
	        cov_1iiyehkoov.s[95]++;
	        this.remotePlayer = new cast.framework.RemotePlayer();
	        cov_1iiyehkoov.s[96]++;
	        this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer);
	        cov_1iiyehkoov.s[97]++;
	        this.apiInitialized = true;
	        cov_1iiyehkoov.s[98]++;
	        this.setupLocalPlayer();
	        cov_1iiyehkoov.s[99]++;
	        this.initializeUI(this.player);
	        cov_1iiyehkoov.s[100]++;
	        this.show();
	      }
	    }
	  };

	  _proto.initPlayerHandler = function initPlayerHandler(_this) {
	    if (_this === void 0) {
	      _this = (cov_1iiyehkoov.b[19][0]++, {});
	    }

	    cov_1iiyehkoov.f[7]++;
	    cov_1iiyehkoov.s[101]++;
	    this.playerHandler = {};
	    cov_1iiyehkoov.s[102]++;
	    this.playerHandler.target = {};
	    cov_1iiyehkoov.s[103]++;

	    this.playerHandler.setTarget = function (target) {
	      cov_1iiyehkoov.f[8]++;
	      cov_1iiyehkoov.s[104]++;
	      _this.playerHandler.target = target;
	    };

	    cov_1iiyehkoov.s[105]++;

	    this.playerHandler.play = function () {
	      cov_1iiyehkoov.f[9]++;
	      cov_1iiyehkoov.s[106]++;

	      if ((cov_1iiyehkoov.b[21][0]++, _this.playerState === PLAYER_STATE.IDLE) || (cov_1iiyehkoov.b[21][1]++, !_this.playerHandler.target.isMediaLoaded())) {
	        cov_1iiyehkoov.b[20][0]++;
	        cov_1iiyehkoov.s[107]++;

	        _this.playerHandler.load();

	        cov_1iiyehkoov.s[108]++;
	        return;
	      } else {
	        cov_1iiyehkoov.b[20][1]++;
	      }

	      cov_1iiyehkoov.s[109]++;
	      _this.playerState = PLAYER_STATE.PLAYING;
	      cov_1iiyehkoov.s[110]++;

	      _this.playerHandler.target.play();
	    };

	    cov_1iiyehkoov.s[111]++;

	    this.playerHandler.pause = function () {
	      cov_1iiyehkoov.f[10]++;
	      cov_1iiyehkoov.s[112]++;
	      _this.playerState = PLAYER_STATE.PAUSED;
	      cov_1iiyehkoov.s[113]++;

	      _this.playerHandler.target.pause();
	    };

	    cov_1iiyehkoov.s[114]++;

	    this.playerHandler.stop = function () {
	      cov_1iiyehkoov.f[11]++;
	      cov_1iiyehkoov.s[115]++;
	      _this.playerState = PLAYER_STATE.IDLE;
	      cov_1iiyehkoov.s[116]++;

	      _this.playerHandler.target.stop();
	    };

	    cov_1iiyehkoov.s[117]++;

	    this.playerHandler.load = function () {
	      cov_1iiyehkoov.f[12]++;
	      cov_1iiyehkoov.s[118]++;
	      _this.playerState = PLAYER_STATE.BUFFERING;
	      cov_1iiyehkoov.s[119]++;

	      _this.playerHandler.target.load();
	    };

	    cov_1iiyehkoov.s[120]++;

	    this.playerHandler.isMediaLoaded = function () {
	      cov_1iiyehkoov.f[13]++;
	      cov_1iiyehkoov.s[121]++;
	      return _this.playerHandler.target.isMediaLoaded();
	    };

	    cov_1iiyehkoov.s[122]++;

	    this.playerHandler.prepareToPlay = function () {
	      cov_1iiyehkoov.f[14]++;
	      cov_1iiyehkoov.s[123]++;
	      _this.mediaDuration = _this.playerHandler.getMediaDuration();
	      cov_1iiyehkoov.s[124]++;

	      _this.playerHandler.updateDurationDisplay();

	      cov_1iiyehkoov.s[125]++;
	      _this.playerState = PLAYER_STATE.LOADED;
	      cov_1iiyehkoov.s[126]++;

	      _this.playerHandler.play();

	      cov_1iiyehkoov.s[127]++;

	      _this.playerHandler.updateDisplay();
	    };

	    cov_1iiyehkoov.s[128]++;

	    this.playerHandler.getCurrentMediaTime = function () {
	      cov_1iiyehkoov.f[15]++;
	      cov_1iiyehkoov.s[129]++;
	      return _this.playerHandler.target.getCurrentMediaTime();
	    };

	    cov_1iiyehkoov.s[130]++;

	    this.playerHandler.getMediaDuration = function () {
	      cov_1iiyehkoov.f[16]++;
	      cov_1iiyehkoov.s[131]++;
	      return _this.playerHandler.target.getMediaDuration();
	    };

	    cov_1iiyehkoov.s[132]++;

	    this.playerHandler.updateDisplay = function () {
	      cov_1iiyehkoov.f[17]++;
	      cov_1iiyehkoov.s[133]++;
	      _this.playerHandler.currentMediaTime = _this.playerHandler.target.getCurrentMediaTime();
	      cov_1iiyehkoov.s[134]++;
	      _this.playerHandler.mediaDuration = _this.playerHandler.target.getMediaDuration();
	      cov_1iiyehkoov.s[135]++;

	      _this.playerHandler.target.updateDisplay();
	    };

	    cov_1iiyehkoov.s[136]++;

	    this.playerHandler.updateCurrentTimeDisplay = function () {
	      cov_1iiyehkoov.f[18]++;
	      cov_1iiyehkoov.s[137]++;

	      _this.playerHandler.target.updateCurrentTimeDisplay();
	    };

	    cov_1iiyehkoov.s[138]++;

	    this.playerHandler.updateDurationDisplay = function () {
	      cov_1iiyehkoov.f[19]++;
	      cov_1iiyehkoov.s[139]++;

	      _this.playerHandler.target.updateDurationDisplay();
	    };

	    cov_1iiyehkoov.s[140]++;

	    this.playerHandler.setTimeString = function (time) {
	      cov_1iiyehkoov.f[20]++;
	      cov_1iiyehkoov.s[141]++;

	      _this.playerHandler.target.setTimeString(time);
	    };

	    cov_1iiyehkoov.s[142]++;

	    this.playerHandler.setVolume = function (volumeSliderPosition) {
	      cov_1iiyehkoov.f[21]++;
	      cov_1iiyehkoov.s[143]++;

	      _this.playerHandler.target.setVolume(volumeSliderPosition);
	    };

	    cov_1iiyehkoov.s[144]++;

	    this.playerHandler.mute = function () {
	      cov_1iiyehkoov.f[22]++;
	      cov_1iiyehkoov.s[145]++;

	      _this.playerHandler.target.mute();
	    };

	    cov_1iiyehkoov.s[146]++;

	    this.playerHandler.unMute = function () {
	      cov_1iiyehkoov.f[23]++;
	      cov_1iiyehkoov.s[147]++;

	      _this.playerHandler.target.unMute();
	    };

	    cov_1iiyehkoov.s[148]++;

	    this.playerHandler.isMuted = function () {
	      cov_1iiyehkoov.f[24]++;
	      cov_1iiyehkoov.s[149]++;
	      return _this.playerHandler.target.isMuted();
	    };

	    cov_1iiyehkoov.s[150]++;

	    this.playerHandler.seekTo = function (time) {
	      cov_1iiyehkoov.f[25]++;
	      cov_1iiyehkoov.s[151]++;

	      _this.playerHandler.target.seekTo(time);
	    };
	  };

	  _proto.initializeUI = function initializeUI(player) {
	    cov_1iiyehkoov.f[26]++;
	    cov_1iiyehkoov.s[152]++;

	    if (player.controlBar !== undefined) {
	      cov_1iiyehkoov.b[22][0]++;
	      cov_1iiyehkoov.s[153]++;
	      this.createGoogleButton();
	      cov_1iiyehkoov.s[154]++;

	      if (this.mDNS) {
	        cov_1iiyehkoov.b[23][0]++;
	        cov_1iiyehkoov.s[155]++;
	        this.createCustomButton();
	      } else {
	        cov_1iiyehkoov.b[23][1]++;
	      }

	      cov_1iiyehkoov.s[156]++;
	      player.controlBar.chromecastButton = this;
	    } else {
	      cov_1iiyehkoov.b[22][1]++;
	    }
	  };

	  _proto.createGoogleButton = function createGoogleButton() {
	    cov_1iiyehkoov.f[27]++;
	    var jsControlBar = (cov_1iiyehkoov.s[157]++, document.getElementsByClassName('vjs-control-bar'));
	    cov_1iiyehkoov.s[158]++;

	    if (document.getElementsByClassName('vjs-chromecast-button').length <= 0) {
	      cov_1iiyehkoov.b[24][0]++;
	      var castComponent = (cov_1iiyehkoov.s[159]++, document.createElement('google-cast-launcher'));
	      cov_1iiyehkoov.s[160]++;
	      castComponent.setAttribute('class', 'vjs-chromecast-button vjs-control vjs-button');
	      cov_1iiyehkoov.s[161]++;
	      castComponent.setAttribute('type', 'button');
	      cov_1iiyehkoov.s[162]++;

	      if (jsControlBar.length > 0) {
	        cov_1iiyehkoov.b[25][0]++;
	        cov_1iiyehkoov.s[163]++;
	        jsControlBar[0].appendChild(castComponent);
	      } else {
	        cov_1iiyehkoov.b[25][1]++;
	      }
	    } else {
	      cov_1iiyehkoov.b[24][1]++;
	    }
	  };

	  _proto.createCustomButton = function createCustomButton() {
	    var _this4 = this;

	    cov_1iiyehkoov.f[28]++;
	    var jsControlBar = (cov_1iiyehkoov.s[164]++, document.getElementsByClassName('vjs-control-bar'));
	    cov_1iiyehkoov.s[165]++;

	    if (document.getElementsByClassName('vjs-chromecast-button-mdns').length <= 0) {
	      cov_1iiyehkoov.b[26][0]++;
	      var castComponent = (cov_1iiyehkoov.s[166]++, document.createElement('button'));
	      cov_1iiyehkoov.s[167]++;
	      castComponent.setAttribute('class', 'vjs-chromecast-button-mdns vjs-control vjs-button');
	      cov_1iiyehkoov.s[168]++;
	      castComponent.setAttribute('type', 'button');
	      cov_1iiyehkoov.s[169]++;
	      castComponent.addEventListener('click', function () {
	        cov_1iiyehkoov.f[29]++;
	        cov_1iiyehkoov.s[170]++;

	        _this4.findSources();

	        cov_1iiyehkoov.s[171]++;

	        _this4.prepareMediaForCast(function () {
	          cov_1iiyehkoov.f[30]++;
	          cov_1iiyehkoov.s[172]++;
	          document.body.appendChild(_this4.container);
	          cov_1iiyehkoov.s[173]++;
	          document.getElementById('closeCast').addEventListener('click', _this4.closeModal);
	          cov_1iiyehkoov.s[174]++;
	          document.getElementById('chromecastModal').addEventListener('click', _this4.closeModalFromBack);
	          var castSelection = (cov_1iiyehkoov.s[175]++, document.getElementsByClassName('selectCast'));
	          cov_1iiyehkoov.s[176]++;

	          for (var i = 0; i < castSelection.length; i++) {
	            cov_1iiyehkoov.s[177]++;

	            (function (index) {
	              cov_1iiyehkoov.f[31]++;
	              cov_1iiyehkoov.s[178]++;
	              castSelection[index].addEventListener('click', this.selectCast.bind(this));
	            })(i);
	          }
	        });
	      });
	      cov_1iiyehkoov.s[179]++;

	      if (jsControlBar.length > 0) {
	        cov_1iiyehkoov.b[27][0]++;
	        cov_1iiyehkoov.s[180]++;
	        jsControlBar[0].appendChild(castComponent);
	        var getCastBtn = (cov_1iiyehkoov.s[181]++, document.getElementsByClassName('vjs-chromecast-button-mdns'));
	        cov_1iiyehkoov.s[182]++;
	        getCastBtn[0].innerHTML = '<svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24"><g><path id="cast_caf_icon_arch0" class="cast_caf_status_d" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"></path><path id="cast_caf_icon_arch1" class="cast_caf_status_d" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"></path><path id="cast_caf_icon_arch2" class="cast_caf_status_d" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"></path><path id="cast_caf_icon_box" class="cast_caf_status_d" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"></path><path id="cast_caf_icon_boxfill" class="cast_caf_state_h" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"></path></g></svg>';
	      } else {
	        cov_1iiyehkoov.b[27][1]++;
	      }
	    } else {
	      cov_1iiyehkoov.b[26][1]++;
	    }
	  };

	  _proto.closeModal = function closeModal(e) {
	    cov_1iiyehkoov.f[32]++;
	    var el = (cov_1iiyehkoov.s[183]++, document.getElementById('containerModal'));
	    var cloned = (cov_1iiyehkoov.s[184]++, el.cloneNode(true));
	    cov_1iiyehkoov.s[185]++;
	    el.parentNode.replaceChild(cloned, el);
	    cov_1iiyehkoov.s[186]++;
	    document.body.removeChild(cloned);
	  };

	  _proto.closeModalFromBack = function closeModalFromBack(e) {
	    cov_1iiyehkoov.f[33]++;
	    cov_1iiyehkoov.s[187]++;

	    if (e.target === document.getElementById('chromecastModal')) {
	      cov_1iiyehkoov.b[28][0]++;
	      cov_1iiyehkoov.s[188]++;
	      document.body.removeChild(document.getElementById('containerModal'));
	    } else {
	      cov_1iiyehkoov.b[28][1]++;
	    }
	  };

	  _proto.selectCast = function selectCast(e) {
	    var _this5 = this;

	    cov_1iiyehkoov.f[34]++;
	    var castId = (cov_1iiyehkoov.s[189]++, e.target.id);

	    var _this = (cov_1iiyehkoov.s[190]++, this);

	    var c = (cov_1iiyehkoov.s[191]++, document.getElementById(castId).childNodes);
	    cov_1iiyehkoov.s[192]++;

	    if (c.length > 0) {
	      cov_1iiyehkoov.b[29][0]++;
	      cov_1iiyehkoov.s[193]++;
	      c[1].style.opacity = 1;
	    } else {
	      cov_1iiyehkoov.b[29][1]++;
	    }

	    cov_1iiyehkoov.s[194]++;

	    for (var i = 0; i < this.receivers.length; i++) {
	      cov_1iiyehkoov.s[195]++;

	      if (this.receivers[i].name === castId) {
	        cov_1iiyehkoov.b[30][0]++;
	        cov_1iiyehkoov.s[196]++;
	        this.selectedDevice = this.receivers[i];
	      } else {
	        cov_1iiyehkoov.b[30][1]++;
	      }
	    }

	    cov_1iiyehkoov.s[197]++;

	    if (this.selectedDevice != null) {
	      cov_1iiyehkoov.b[31][0]++;
	      cov_1iiyehkoov.s[198]++;
	      this.setupLocalPlayer();
	      cov_1iiyehkoov.s[199]++;
	      this.playerHandler.pause();
	      cov_1iiyehkoov.s[200]++;
	      this.selectedDevice.play(this.mediaInfoMDNS, function (err) {
	        cov_1iiyehkoov.f[35]++;
	        cov_1iiyehkoov.s[201]++;

	        if (err) {
	          cov_1iiyehkoov.b[32][0]++;
	          cov_1iiyehkoov.s[202]++;
	          videojs$1.log(err);
	        } else {
	          cov_1iiyehkoov.b[32][1]++;
	          cov_1iiyehkoov.s[203]++;

	          if (c.length > 0) {
	            cov_1iiyehkoov.b[33][0]++;
	            cov_1iiyehkoov.s[204]++;
	            c[1].style.opacity = 0;
	            cov_1iiyehkoov.s[205]++;
	            document.getElementsByClassName("vjs-chromecast-button-mdns")[0].classList.add("connected");
	          } else {
	            cov_1iiyehkoov.b[33][1]++;
	          }

	          cov_1iiyehkoov.s[206]++;

	          _this5.playerHandler.load();

	          cov_1iiyehkoov.s[207]++;

	          _this5.player_.loadTech_('ChromecastTech', {
	            type: 'cast',
	            cast_: _this5,
	            apiSession: _this5.apiSession
	          });

	          cov_1iiyehkoov.s[208]++;

	          _this5.closeModal(e);

	          cov_1iiyehkoov.s[209]++;
	          _this5.casting = true;
	        }
	      });
	    } else {
	      cov_1iiyehkoov.b[31][1]++;
	    }
	  };

	  _proto.hide = function hide() {
	    cov_1iiyehkoov.f[36]++;
	    cov_1iiyehkoov.s[210]++;

	    _Button.prototype.hide.call(this);

	    var castButton = (cov_1iiyehkoov.s[211]++, document.getElementsByClassName('vjs-chromecast-button'));
	    cov_1iiyehkoov.s[212]++;

	    if (castButton.length > 0) {
	      cov_1iiyehkoov.b[34][0]++;
	      cov_1iiyehkoov.s[213]++;
	      castButton[0].style.display = 'none';
	    } else {
	      cov_1iiyehkoov.b[34][1]++;
	    }

	    cov_1iiyehkoov.s[214]++;

	    if (this.mDNS) {
	      cov_1iiyehkoov.b[35][0]++;
	      cov_1iiyehkoov.s[215]++;
	      castButton = document.getElementsByClassName('vjs-chromecast-button-mdns');
	      cov_1iiyehkoov.s[216]++;

	      if (castButton.length > 0) {
	        cov_1iiyehkoov.b[36][0]++;
	        cov_1iiyehkoov.s[217]++;
	        castButton[0].style.display = 'none';
	      } else {
	        cov_1iiyehkoov.b[36][1]++;
	      }
	    } else {
	      cov_1iiyehkoov.b[35][1]++;
	    }
	  };

	  _proto.show = function show() {
	    cov_1iiyehkoov.f[37]++;
	    cov_1iiyehkoov.s[218]++;

	    _Button.prototype.show.call(this);

	    var castButton = (cov_1iiyehkoov.s[219]++, null);
	    cov_1iiyehkoov.s[220]++;

	    if (this.mDNS) {
	      cov_1iiyehkoov.b[37][0]++;
	      cov_1iiyehkoov.s[221]++;
	      castButton = document.getElementsByClassName('vjs-chromecast-button-mdns');
	    } else {
	      cov_1iiyehkoov.b[37][1]++;
	      cov_1iiyehkoov.s[222]++;
	      castButton = document.getElementsByClassName('vjs-chromecast-button');
	    }

	    cov_1iiyehkoov.s[223]++;

	    if (castButton.length > 0) {
	      cov_1iiyehkoov.b[38][0]++;
	      cov_1iiyehkoov.s[224]++;
	      castButton[0].style.display = 'block';
	    } else {
	      cov_1iiyehkoov.b[38][1]++;
	    }
	  };

	  _proto.buildCSSClass = function buildCSSClass() {
	    cov_1iiyehkoov.f[38]++;
	    cov_1iiyehkoov.s[225]++;

	    if (this.mDNS) {
	      cov_1iiyehkoov.b[39][0]++;
	      cov_1iiyehkoov.s[226]++;
	      return "vjs-chromecast-button-mdns " + _Button.prototype.buildCSSClass.call(this, this);
	    } else {
	      cov_1iiyehkoov.b[39][1]++;
	    }

	    cov_1iiyehkoov.s[227]++;
	    return "vjs-chromecast-button " + _Button.prototype.buildCSSClass.call(this, this);
	  };

	  _proto.receiverListener = function receiverListener(availability) {
	    cov_1iiyehkoov.f[39]++;
	    cov_1iiyehkoov.s[228]++;

	    if (this.disposed) {
	      cov_1iiyehkoov.b[40][0]++;
	      cov_1iiyehkoov.s[229]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[40][1]++;
	    }

	    cov_1iiyehkoov.s[230]++;

	    if (availability === 'available') {
	      cov_1iiyehkoov.b[41][0]++;
	      cov_1iiyehkoov.s[231]++;
	      return this.show();
	    } else {
	      cov_1iiyehkoov.b[41][1]++;
	    }

	    cov_1iiyehkoov.s[232]++;
	    return this.hide();
	  };

	  _proto.findSources = function findSources() {
	    cov_1iiyehkoov.f[40]++;
	    var source = (cov_1iiyehkoov.s[233]++, null);
	    cov_1iiyehkoov.s[234]++;

	    if (this.player_ === null) {
	      cov_1iiyehkoov.b[42][0]++;
	      cov_1iiyehkoov.s[235]++;

	      if (this.player.cache_ !== undefined) {
	        cov_1iiyehkoov.b[43][0]++;
	        cov_1iiyehkoov.s[236]++;

	        if (this.player.cache_.source !== undefined) {
	          cov_1iiyehkoov.b[44][0]++;
	          cov_1iiyehkoov.s[237]++;
	          source = this.player.cache_.source;
	        } else {
	          cov_1iiyehkoov.b[44][1]++;
	        }
	      } else {
	        cov_1iiyehkoov.b[43][1]++;
	      }
	    } else {
	      cov_1iiyehkoov.b[42][1]++;
	      cov_1iiyehkoov.s[238]++;
	      source = this.player_.currentSource();
	    }

	    cov_1iiyehkoov.s[239]++;
	    this.sources = source;
	    cov_1iiyehkoov.s[240]++;
	    return this.sources;
	  };

	  _proto.switchPlayer = function switchPlayer(value) {
	    var _this6 = this;

	    cov_1iiyehkoov.f[41]++;
	    cov_1iiyehkoov.s[241]++;
	    this.playerStateBeforeSwitch = this.playerState;
	    cov_1iiyehkoov.s[242]++;

	    if (value) {
	      cov_1iiyehkoov.b[45][0]++;
	      cov_1iiyehkoov.s[243]++;
	      this.prepareMediaForCast(function () {
	        cov_1iiyehkoov.f[42]++;
	        cov_1iiyehkoov.s[244]++;

	        if ((cov_1iiyehkoov.b[47][0]++, cast) && (cov_1iiyehkoov.b[47][1]++, cast.framework) && (cov_1iiyehkoov.b[47][2]++, _this6.remotePlayer.isConnected)) {
	          cov_1iiyehkoov.b[46][0]++;
	          cov_1iiyehkoov.s[245]++;

	          _this6.playerHandler.pause();

	          cov_1iiyehkoov.s[246]++;

	          _this6.setupRemotePlayer();
	        } else {
	          cov_1iiyehkoov.b[46][1]++;
	          cov_1iiyehkoov.s[247]++;

	          _this6.setupLocalPlayer();
	        }
	      });
	    } else {
	      cov_1iiyehkoov.b[45][1]++;
	      cov_1iiyehkoov.s[248]++;
	      this.prepareMediaForCast(this.setupLocalPlayer.bind(this));
	    }
	  };

	  _proto.setupRemotePlayer = function setupRemotePlayer() {
	    var _this7 = this;

	    cov_1iiyehkoov.f[43]++;
	    cov_1iiyehkoov.s[249]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.MEDIA_INFO_CHANGED, function (event) {
	      cov_1iiyehkoov.f[44]++;
	      var session = (cov_1iiyehkoov.s[250]++, cast.framework.CastContext.getInstance().getCurrentSession());
	      cov_1iiyehkoov.s[251]++;

	      if (!session) {
	        cov_1iiyehkoov.b[48][0]++;
	        cov_1iiyehkoov.s[252]++;
	        _this7.mediaInfo = null;
	        cov_1iiyehkoov.s[253]++;

	        _this7.playerHandler.updateDisplay();

	        cov_1iiyehkoov.s[254]++;
	        return;
	      } else {
	        cov_1iiyehkoov.b[48][1]++;
	      }

	      var media = (cov_1iiyehkoov.s[255]++, session.getMediaSession());
	      cov_1iiyehkoov.s[256]++;

	      if (!media) {
	        cov_1iiyehkoov.b[49][0]++;
	        cov_1iiyehkoov.s[257]++;
	        _this7.mediaInfo = null;
	        cov_1iiyehkoov.s[258]++;

	        _this7.playerHandler.updateDisplay();

	        cov_1iiyehkoov.s[259]++;
	        return;
	      } else {
	        cov_1iiyehkoov.b[49][1]++;
	      }

	      cov_1iiyehkoov.s[260]++;
	      _this7.apiSession = session;
	      cov_1iiyehkoov.s[261]++;
	      _this7.mediaInfo = media.media;
	      cov_1iiyehkoov.s[262]++;

	      if ((cov_1iiyehkoov.b[51][0]++, media.playerState === PLAYER_STATE.PLAYING) && (cov_1iiyehkoov.b[51][1]++, _this7.playerState !== PLAYER_STATE.PLAYING)) {
	        cov_1iiyehkoov.b[50][0]++;
	        cov_1iiyehkoov.s[263]++;

	        _this7.playerHandler.prepareToPlay();
	      } else {
	        cov_1iiyehkoov.b[50][1]++;
	      }

	      cov_1iiyehkoov.s[264]++;

	      _this7.playerHandler.updateDisplay();
	    });
	    cov_1iiyehkoov.s[265]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.CAN_SEEK_CHANGED, function (event) {
	      cov_1iiyehkoov.f[45]++;
	    });
	    cov_1iiyehkoov.s[266]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED, function () {
	      cov_1iiyehkoov.f[46]++;
	      cov_1iiyehkoov.s[267]++;

	      if (_this7.remotePlayer.isPaused) {
	        cov_1iiyehkoov.b[52][0]++;
	        cov_1iiyehkoov.s[268]++;

	        _this7.playerHandler.pause();
	      } else {
	        cov_1iiyehkoov.b[52][1]++;
	        cov_1iiyehkoov.s[269]++;

	        if (_this7.playerState !== PLAYER_STATE.PLAYING) {
	          cov_1iiyehkoov.b[53][0]++;
	          cov_1iiyehkoov.s[270]++;

	          _this7.playerHandler.play();
	        } else {
	          cov_1iiyehkoov.b[53][1]++;
	        }
	      }
	    });
	    cov_1iiyehkoov.s[271]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED, function () {
	      cov_1iiyehkoov.f[47]++;
	      cov_1iiyehkoov.s[272]++;

	      if (_this7.remotePlayer.isMuted) {
	        cov_1iiyehkoov.b[54][0]++;
	        cov_1iiyehkoov.s[273]++;

	        _this7.playerHandler.mute();
	      } else {
	        cov_1iiyehkoov.b[54][1]++;
	        cov_1iiyehkoov.s[274]++;

	        _this7.playerHandler.unMute();
	      }
	    });
	    cov_1iiyehkoov.s[275]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, function () {
	      cov_1iiyehkoov.f[48]++;
	      var newVolume = (cov_1iiyehkoov.s[276]++, _this7.remotePlayer.volumeLevel);
	      cov_1iiyehkoov.s[277]++;

	      if (_this7.isFunction(_this7.player_.setVolume)) {
	        cov_1iiyehkoov.b[55][0]++;
	        cov_1iiyehkoov.s[278]++;

	        _this7.player_.setVolume(newVolume);
	      } else {
	        cov_1iiyehkoov.b[55][1]++;
	        cov_1iiyehkoov.s[279]++;
	        _this7.player_.setVolume = newVolume;
	      }
	    });
	    cov_1iiyehkoov.s[280]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_PLAYING_BREAK_CHANGED, function (event) {
	      cov_1iiyehkoov.f[49]++;
	      cov_1iiyehkoov.s[281]++;

	      _this7.isPlayingBreak(event.value);
	    });
	    cov_1iiyehkoov.s[282]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.WHEN_SKIPPABLE_CHANGED, function (event) {
	      cov_1iiyehkoov.f[50]++;
	      cov_1iiyehkoov.s[283]++;

	      _this7.onWhenSkippableChanged(event.value);
	    });
	    cov_1iiyehkoov.s[284]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.CURRENT_BREAK_CLIP_TIME_CHANGED, function (event) {
	      cov_1iiyehkoov.f[51]++;
	      cov_1iiyehkoov.s[285]++;

	      _this7.onCurrentBreakClipTimeChanged(event.value);
	    });
	    cov_1iiyehkoov.s[286]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.BREAK_CLIP_ID_CHANGED, function (event) {
	      cov_1iiyehkoov.f[52]++;
	      cov_1iiyehkoov.s[287]++;

	      _this7.onBreakClipIdChanged(event.value);
	    });
	    cov_1iiyehkoov.s[288]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.LIVE_SEEKABLE_RANGE_CHANGED, function (event) {
	      cov_1iiyehkoov.f[53]++;
	      cov_1iiyehkoov.s[289]++;
	      videojs$1.log('LIVE_SEEKABLE_RANGE_CHANGED');
	      cov_1iiyehkoov.s[290]++;
	      _this7.liveSeekableRange = event.value;
	    });
	    var playerTarget = (cov_1iiyehkoov.s[291]++, {});
	    cov_1iiyehkoov.s[292]++;

	    playerTarget.play = function () {
	      cov_1iiyehkoov.f[54]++;
	      cov_1iiyehkoov.s[293]++;

	      if (this.remotePlayer.isPaused) {
	        cov_1iiyehkoov.b[56][0]++;
	        cov_1iiyehkoov.s[294]++;
	        this.remotePlayerController.playOrPause();
	        cov_1iiyehkoov.s[295]++;
	        this.player_.play();
	      } else {
	        cov_1iiyehkoov.b[56][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[296]++;

	    playerTarget.pause = function () {
	      cov_1iiyehkoov.f[55]++;
	      cov_1iiyehkoov.s[297]++;

	      if (!this.remotePlayer.isPaused) {
	        cov_1iiyehkoov.b[57][0]++;
	        cov_1iiyehkoov.s[298]++;
	        this.remotePlayerController.playOrPause();
	        cov_1iiyehkoov.s[299]++;
	        this.player_.pause();
	      } else {
	        cov_1iiyehkoov.b[57][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[300]++;

	    playerTarget.stop = function () {
	      cov_1iiyehkoov.f[56]++;
	      cov_1iiyehkoov.s[301]++;
	      this.remotePlayerController.stop();
	    }.bind(this);

	    cov_1iiyehkoov.s[302]++;

	    playerTarget.load = function () {
	      cov_1iiyehkoov.f[57]++;
	      cov_1iiyehkoov.s[303]++;
	      this.findSources();
	      cov_1iiyehkoov.s[304]++;
	      this.prepareMediaForCast(function () {
	        cov_1iiyehkoov.f[58]++;
	        cov_1iiyehkoov.s[305]++;
	        videojs$1.log('Loading...' + this.mediaInfo.metadata.title);
	        var request = (cov_1iiyehkoov.s[306]++, new chrome.cast.media.LoadRequest(this.mediaInfo));
	        cov_1iiyehkoov.s[307]++;
	        request.currentTime = this.currentMediaTime;
	        cov_1iiyehkoov.s[308]++;

	        if ((cov_1iiyehkoov.b[59][0]++, !this.playerStateBeforeSwitch) || (cov_1iiyehkoov.b[59][1]++, this.playerStateBeforeSwitch === PLAYER_STATE.PAUSED)) {
	          cov_1iiyehkoov.b[58][0]++;
	          cov_1iiyehkoov.s[309]++;
	          request.autoplay = false;
	        } else {
	          cov_1iiyehkoov.b[58][1]++;
	          cov_1iiyehkoov.s[310]++;
	          request.autoplay = true;
	        }

	        cov_1iiyehkoov.s[311]++;
	        cast.framework.CastContext.getInstance().getCurrentSession().loadMedia(request).then(function () {
	          cov_1iiyehkoov.f[59]++;
	          cov_1iiyehkoov.s[312]++;
	          this.casting = true;
	          cov_1iiyehkoov.s[313]++;
	          videojs$1.log('Remote media loaded');
	        }.bind(this), function (errorCode) {
	          cov_1iiyehkoov.f[60]++;
	          cov_1iiyehkoov.s[314]++;
	          this.playerState = PLAYER_STATE.IDLE;
	          cov_1iiyehkoov.s[315]++;
	          videojs$1.log('Remote media load error: ' + this.getErrorMessage(errorCode));
	          cov_1iiyehkoov.s[316]++;
	          this.playerHandler.updateDisplay();
	        }.bind(this));
	      }.bind(this));
	    }.bind(this);

	    cov_1iiyehkoov.s[317]++;

	    playerTarget.isMediaLoaded = function () {
	      cov_1iiyehkoov.f[61]++;
	      var session = (cov_1iiyehkoov.s[318]++, cast.framework.CastContext.getInstance().getCurrentSession());
	      cov_1iiyehkoov.s[319]++;

	      if (!session) {
	        cov_1iiyehkoov.b[60][0]++;
	        cov_1iiyehkoov.s[320]++;
	        return false;
	      } else {
	        cov_1iiyehkoov.b[60][1]++;
	      }

	      var media = (cov_1iiyehkoov.s[321]++, session.getMediaSession());
	      cov_1iiyehkoov.s[322]++;

	      if (!media) {
	        cov_1iiyehkoov.b[61][0]++;
	        cov_1iiyehkoov.s[323]++;
	        return false;
	      } else {
	        cov_1iiyehkoov.b[61][1]++;
	      }

	      cov_1iiyehkoov.s[324]++;

	      if (media.playerState === PLAYER_STATE.IDLE) {
	        cov_1iiyehkoov.b[62][0]++;
	        cov_1iiyehkoov.s[325]++;
	        return false;
	      } else {
	        cov_1iiyehkoov.b[62][1]++;
	      }

	      cov_1iiyehkoov.s[326]++;
	      this.apiSession = session;
	      cov_1iiyehkoov.s[327]++;
	      return true;
	    }.bind(this);

	    cov_1iiyehkoov.s[328]++;

	    playerTarget.getCurrentMediaTime = function () {
	      cov_1iiyehkoov.f[62]++;
	      cov_1iiyehkoov.s[329]++;
	      return this.remotePlayer.currentTime;
	    }.bind(this);

	    cov_1iiyehkoov.s[330]++;

	    playerTarget.getMediaDuration = function () {
	      cov_1iiyehkoov.f[63]++;
	      cov_1iiyehkoov.s[331]++;
	      return this.remotePlayer.duration;
	    }.bind(this);

	    cov_1iiyehkoov.s[332]++;

	    playerTarget.updateDisplay = function () {
	      cov_1iiyehkoov.f[64]++;
	      var castSession = (cov_1iiyehkoov.s[333]++, cast.framework.CastContext.getInstance().getCurrentSession());
	      cov_1iiyehkoov.s[334]++;

	      if ((cov_1iiyehkoov.b[64][0]++, castSession) && (cov_1iiyehkoov.b[64][1]++, castSession.getMediaSession()) && (cov_1iiyehkoov.b[64][2]++, castSession.getMediaSession().media)) {
	        cov_1iiyehkoov.b[63][0]++;
	        var media = (cov_1iiyehkoov.s[335]++, castSession.getMediaSession());
	        var mediaInfo = (cov_1iiyehkoov.s[336]++, media.media);
	        cov_1iiyehkoov.s[337]++;

	        if (mediaInfo.metadata) {
	          cov_1iiyehkoov.b[65][0]++;
	          var mediaTitle = (cov_1iiyehkoov.s[338]++, mediaInfo.metadata.title);
	          var mediaEpisodeTitle = (cov_1iiyehkoov.s[339]++, mediaInfo.metadata.episodeTitle);
	          cov_1iiyehkoov.s[340]++;
	          mediaTitle = mediaEpisodeTitle ? (cov_1iiyehkoov.b[66][0]++, mediaTitle + ': ' + mediaEpisodeTitle) : (cov_1iiyehkoov.b[66][1]++, mediaTitle);
	          cov_1iiyehkoov.s[341]++;
	          mediaTitle = mediaTitle ? (cov_1iiyehkoov.b[67][0]++, mediaTitle + ' ') : (cov_1iiyehkoov.b[67][1]++, '');
	          var mediaSubtitle = (cov_1iiyehkoov.s[342]++, mediaInfo.metadata.subtitle);
	          cov_1iiyehkoov.s[343]++;
	          mediaSubtitle = mediaSubtitle ? (cov_1iiyehkoov.b[68][0]++, mediaSubtitle + ' ') : (cov_1iiyehkoov.b[68][1]++, '');
	        } else {
	          cov_1iiyehkoov.b[65][1]++;
	        }
	      } else {
	        cov_1iiyehkoov.b[63][1]++;
	        cov_1iiyehkoov.s[344]++;
	        this.currentTech.dispose();
	        cov_1iiyehkoov.s[345]++;
	        this.casting = false;
	        var time = (cov_1iiyehkoov.s[346]++, this.player_.currentTime());
	        cov_1iiyehkoov.s[347]++;
	        this.removeClass('connected');
	        cov_1iiyehkoov.s[348]++;
	        this.player_.src(this.player_.options_.sources);
	        cov_1iiyehkoov.s[349]++;

	        if (!this.player_.paused()) {
	          cov_1iiyehkoov.b[69][0]++;
	          cov_1iiyehkoov.s[350]++;
	          this.player_.one('seeked', function () {
	            cov_1iiyehkoov.f[65]++;
	            cov_1iiyehkoov.s[351]++;
	            return this.player_.play();
	          });
	        } else {
	          cov_1iiyehkoov.b[69][1]++;
	        }

	        cov_1iiyehkoov.s[352]++;
	        this.player_.currentTime(time);
	        cov_1iiyehkoov.s[353]++;
	        this.player_.options_.inactivityTimeout = this.inactivityTimeout;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[354]++;

	    playerTarget.updateCurrentTimeDisplay = function () {
	      cov_1iiyehkoov.f[66]++;
	      cov_1iiyehkoov.s[355]++;
	      this.playerHandler.setTimeString(this.playerHandler.getCurrentMediaTime());
	    }.bind(this);

	    cov_1iiyehkoov.s[356]++;

	    playerTarget.updateDurationDisplay = function () {
	      cov_1iiyehkoov.f[67]++;
	      cov_1iiyehkoov.s[357]++;
	      this.playerHandler.setTimeString(this.playerHandler.getMediaDuration());
	    }.bind(this);

	    cov_1iiyehkoov.s[358]++;

	    playerTarget.setTimeString = function (time) {
	      cov_1iiyehkoov.f[68]++;
	      var currentTimeString = (cov_1iiyehkoov.s[359]++, this.getMediaTimeString(time));
	      cov_1iiyehkoov.s[360]++;

	      if (currentTimeString !== null) {
	        cov_1iiyehkoov.b[70][0]++;
	      } else {
	        cov_1iiyehkoov.b[70][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[361]++;

	    playerTarget.setVolume = function (volumePosition) {
	      cov_1iiyehkoov.f[69]++;
	      var currentVolume = (cov_1iiyehkoov.s[362]++, this.remotePlayer.volumeLevel);
	      cov_1iiyehkoov.s[363]++;

	      if (volumePosition > 1) {
	        cov_1iiyehkoov.b[71][0]++;
	        cov_1iiyehkoov.s[364]++;
	        currentVolume = 1;
	      } else {
	        cov_1iiyehkoov.b[71][1]++;
	        cov_1iiyehkoov.s[365]++;
	        currentVolume = volumePosition;
	      }

	      cov_1iiyehkoov.s[366]++;
	      this.remotePlayer.volumeLevel = currentVolume;
	      cov_1iiyehkoov.s[367]++;
	      this.remotePlayerController.setVolumeLevel();
	    }.bind(this);

	    cov_1iiyehkoov.s[368]++;

	    playerTarget.mute = function () {
	      cov_1iiyehkoov.f[70]++;
	      cov_1iiyehkoov.s[369]++;

	      if (!this.remotePlayer.isMuted) {
	        cov_1iiyehkoov.b[72][0]++;
	        cov_1iiyehkoov.s[370]++;
	        this.remotePlayerController.muteOrUnmute();
	      } else {
	        cov_1iiyehkoov.b[72][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[371]++;

	    playerTarget.unMute = function () {
	      cov_1iiyehkoov.f[71]++;
	      cov_1iiyehkoov.s[372]++;

	      if (this.remotePlayer.isMuted) {
	        cov_1iiyehkoov.b[73][0]++;
	        cov_1iiyehkoov.s[373]++;
	        this.remotePlayerController.muteOrUnmute();
	      } else {
	        cov_1iiyehkoov.b[73][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[374]++;

	    playerTarget.isMuted = function () {
	      cov_1iiyehkoov.f[72]++;
	      cov_1iiyehkoov.s[375]++;
	      return this.remotePlayer.isMuted;
	    }.bind(this);

	    cov_1iiyehkoov.s[376]++;

	    playerTarget.seekTo = function (time) {
	      cov_1iiyehkoov.f[73]++;
	      cov_1iiyehkoov.s[377]++;
	      this.remotePlayer.currentTime = time;
	      cov_1iiyehkoov.s[378]++;
	      this.remotePlayerController.seek();
	    }.bind(this);

	    cov_1iiyehkoov.s[379]++;
	    this.playerHandler.setTarget(playerTarget);
	    cov_1iiyehkoov.s[380]++;

	    if (this.remotePlayer.isMuted) {
	      cov_1iiyehkoov.b[74][0]++;
	      cov_1iiyehkoov.s[381]++;
	      this.playerHandler.mute();
	    } else {
	      cov_1iiyehkoov.b[74][1]++;
	    }

	    cov_1iiyehkoov.s[382]++;
	    this.apiSession = cast.framework.CastContext.getInstance().getCurrentSession();
	    cov_1iiyehkoov.s[383]++;
	    this.player_.loadTech_('ChromecastTech', {
	      type: 'cast',
	      cast_: this,
	      apiSession: this.apiSession
	    });
	    cov_1iiyehkoov.s[384]++;

	    if (this.apiSession === cast.framework.SessionState.SESSION_RESUMED) {
	      cov_1iiyehkoov.b[75][0]++;
	      cov_1iiyehkoov.s[385]++;
	      this.playerHandler.prepareToPlay();
	    } else {
	      cov_1iiyehkoov.b[75][1]++;
	      cov_1iiyehkoov.s[386]++;
	      this.playerHandler.load();
	    }
	  };

	  _proto.setupLocalPlayer = function setupLocalPlayer() {
	    cov_1iiyehkoov.f[74]++;
	    var playerTarget = (cov_1iiyehkoov.s[387]++, {});
	    cov_1iiyehkoov.s[388]++;

	    playerTarget.play = function () {
	      cov_1iiyehkoov.f[75]++;
	      cov_1iiyehkoov.s[389]++;
	      videojs$1.log('local player play');
	    };

	    cov_1iiyehkoov.s[390]++;

	    playerTarget.pause = function () {
	      cov_1iiyehkoov.f[76]++;
	      cov_1iiyehkoov.s[391]++;
	      videojs$1.log('local player pause');
	    };

	    cov_1iiyehkoov.s[392]++;

	    playerTarget.stop = function () {
	      cov_1iiyehkoov.f[77]++;
	      cov_1iiyehkoov.s[393]++;
	      videojs$1.log('local player stop');
	    };

	    cov_1iiyehkoov.s[394]++;

	    playerTarget.load = function () {
	      cov_1iiyehkoov.f[78]++;
	      cov_1iiyehkoov.s[395]++;
	      videojs$1.log('local player load');
	    };

	    cov_1iiyehkoov.s[396]++;

	    playerTarget.isMediaLoaded = function () {
	      cov_1iiyehkoov.f[79]++;
	      cov_1iiyehkoov.s[397]++;
	      this.findSources();
	      cov_1iiyehkoov.s[398]++;

	      if (this.mediaInfo === null) {
	        cov_1iiyehkoov.b[76][0]++;
	        cov_1iiyehkoov.s[399]++;
	        return false;
	      } else {
	        cov_1iiyehkoov.b[76][1]++;
	      }

	      cov_1iiyehkoov.s[400]++;
	      return true;
	    }.bind(this);

	    cov_1iiyehkoov.s[401]++;

	    playerTarget.getCurrentMediaTime = function () {
	      cov_1iiyehkoov.f[80]++;
	      cov_1iiyehkoov.s[402]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[77][0]++;
	        cov_1iiyehkoov.s[403]++;
	        return this.player_.currentTime();
	      } else {
	        cov_1iiyehkoov.b[77][1]++;
	      }

	      cov_1iiyehkoov.s[404]++;
	      return 0;
	    }.bind(this);

	    cov_1iiyehkoov.s[405]++;

	    playerTarget.getMediaDuration = function () {
	      cov_1iiyehkoov.f[81]++;
	      cov_1iiyehkoov.s[406]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[78][0]++;
	        cov_1iiyehkoov.s[407]++;
	        return this.player_.duration();
	      } else {
	        cov_1iiyehkoov.b[78][1]++;
	      }

	      cov_1iiyehkoov.s[408]++;
	      return 0;
	    }.bind(this);

	    cov_1iiyehkoov.s[409]++;

	    playerTarget.updateDisplay = function () {
	      cov_1iiyehkoov.f[82]++;
	    }.bind(this);

	    cov_1iiyehkoov.s[410]++;

	    playerTarget.updateCurrentTimeDisplay = function () {
	      cov_1iiyehkoov.f[83]++;
	      cov_1iiyehkoov.s[411]++;
	      this.currentMediaTime += 1;
	      cov_1iiyehkoov.s[412]++;
	      this.playerHandler.setTimeString(this.currentMediaTime);
	    }.bind(this);

	    cov_1iiyehkoov.s[413]++;

	    playerTarget.updateDurationDisplay = function () {
	      cov_1iiyehkoov.f[84]++;
	      cov_1iiyehkoov.s[414]++;
	      this.playerHandler.setTimeString(this.mediaDuration);
	    }.bind(this);

	    cov_1iiyehkoov.s[415]++;

	    playerTarget.setTimeString = function (time) {
	      cov_1iiyehkoov.f[85]++;
	      var currentTimeString = (cov_1iiyehkoov.s[416]++, this.getMediaTimeString(time));
	      cov_1iiyehkoov.s[417]++;

	      if (currentTimeString !== null) {
	        cov_1iiyehkoov.b[79][0]++;
	      } else {
	        cov_1iiyehkoov.b[79][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[418]++;

	    playerTarget.setVolume = function (volumePosition) {
	      cov_1iiyehkoov.f[86]++;
	      cov_1iiyehkoov.s[419]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[80][0]++;
	        cov_1iiyehkoov.s[420]++;
	        return this.player_.volume(volumePosition);
	      } else {
	        cov_1iiyehkoov.b[80][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[421]++;

	    playerTarget.mute = function () {
	      cov_1iiyehkoov.f[87]++;
	      cov_1iiyehkoov.s[422]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[81][0]++;
	        cov_1iiyehkoov.s[423]++;
	        return this.player_.mute(true);
	      } else {
	        cov_1iiyehkoov.b[81][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[424]++;

	    playerTarget.unMute = function () {
	      cov_1iiyehkoov.f[88]++;
	      cov_1iiyehkoov.s[425]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[82][0]++;
	        cov_1iiyehkoov.s[426]++;
	        return this.player_.mute(false);
	      } else {
	        cov_1iiyehkoov.b[82][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[427]++;

	    playerTarget.isMuted = function () {
	      cov_1iiyehkoov.f[89]++;
	      cov_1iiyehkoov.s[428]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[83][0]++;
	        cov_1iiyehkoov.s[429]++;
	        return this.player_.mute();
	      } else {
	        cov_1iiyehkoov.b[83][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[430]++;

	    playerTarget.seekTo = function (time) {
	      cov_1iiyehkoov.f[90]++;
	      cov_1iiyehkoov.s[431]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[84][0]++;
	        cov_1iiyehkoov.s[432]++;
	        return this.player_.currentTime(time);
	      } else {
	        cov_1iiyehkoov.b[84][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[433]++;
	    this.playerHandler.setTarget(playerTarget);
	    cov_1iiyehkoov.s[434]++;
	    this.playerHandler.setVolume(DEFAULT_VOLUME * FULL_VOLUME_HEIGHT);
	    cov_1iiyehkoov.s[435]++;

	    if (this.currentMediaTime > 0) {
	      cov_1iiyehkoov.b[85][0]++;
	      cov_1iiyehkoov.s[436]++;
	      this.playerHandler.load();
	      cov_1iiyehkoov.s[437]++;
	      this.playerHandler.play();
	    } else {
	      cov_1iiyehkoov.b[85][1]++;
	    }
	  };

	  _proto.prepareMediaForCast = function prepareMediaForCast(callback) {
	    cov_1iiyehkoov.f[91]++;
	    cov_1iiyehkoov.s[438]++;
	    this.mediaInfo = new chrome.cast.media.MediaInfo(this.sources.src, this.sources.type);
	    cov_1iiyehkoov.s[439]++;
	    this.mediaInfo.streamType = chrome.cast.media.StreamType.BUFFERED;
	    cov_1iiyehkoov.s[440]++;
	    this.mediaInfo.metadata = new chrome.cast.media.TvShowMediaMetadata();
	    cov_1iiyehkoov.s[441]++;
	    this.mediaInfo.metadata.title = '';
	    cov_1iiyehkoov.s[442]++;
	    this.mediaInfo.metadata.subtitle = '';
	    cov_1iiyehkoov.s[443]++;

	    if (this.options.metadata === undefined) {
	      cov_1iiyehkoov.b[86][0]++;
	      cov_1iiyehkoov.s[444]++;
	      this.options.metadata = {};
	    } else {
	      cov_1iiyehkoov.b[86][1]++;
	    }

	    cov_1iiyehkoov.s[445]++;

	    if ((cov_1iiyehkoov.b[88][0]++, this.options.metadata.title !== undefined) && (cov_1iiyehkoov.b[88][1]++, this.options.metadata.title !== '')) {
	      cov_1iiyehkoov.b[87][0]++;
	      cov_1iiyehkoov.s[446]++;
	      this.mediaInfo.metadata.title = this.options.metadata.title;
	    } else {
	      cov_1iiyehkoov.b[87][1]++;
	      var filepages1 = (cov_1iiyehkoov.s[447]++, document.getElementsByClassName('file-page__video'));
	      cov_1iiyehkoov.s[448]++;

	      if (filepages1.length > 0) {
	        cov_1iiyehkoov.b[89][0]++;
	        cov_1iiyehkoov.s[449]++;

	        for (var t = 0; t < filepages1.length; t++) {
	          var getTitles = (cov_1iiyehkoov.s[450]++, filepages1[t].getElementsByClassName('card__title'));
	          cov_1iiyehkoov.s[451]++;

	          if (getTitles.length > 0) {
	            cov_1iiyehkoov.b[90][0]++;
	            cov_1iiyehkoov.s[452]++;
	            this.mediaInfo.metadata.title = getTitles[0].innerText;
	          } else {
	            cov_1iiyehkoov.b[90][1]++;
	          }
	        }
	      } else {
	        cov_1iiyehkoov.b[89][1]++;
	      }
	    }

	    cov_1iiyehkoov.s[453]++;

	    if ((cov_1iiyehkoov.b[92][0]++, this.options.metadata.subtitle !== undefined) && (cov_1iiyehkoov.b[92][1]++, this.options.metadata.subtitle !== '')) {
	      cov_1iiyehkoov.b[91][0]++;
	      cov_1iiyehkoov.s[454]++;
	      this.mediaInfo.metadata.subtitle = this.options.metadata.subtitle;
	    } else {
	      cov_1iiyehkoov.b[91][1]++;
	      var filepages2 = (cov_1iiyehkoov.s[455]++, document.getElementsByClassName('file-page__video'));
	      cov_1iiyehkoov.s[456]++;

	      if (filepages2.length > 0) {
	        cov_1iiyehkoov.b[93][0]++;
	        cov_1iiyehkoov.s[457]++;

	        for (var c = 0; c < filepages2.length; c++) {
	          var getSubTitles = (cov_1iiyehkoov.s[458]++, filepages2[c].getElementsByClassName('channel-name'));
	          cov_1iiyehkoov.s[459]++;

	          if (getSubTitles.length > 0) {
	            cov_1iiyehkoov.b[94][0]++;
	            cov_1iiyehkoov.s[460]++;
	            this.mediaInfo.metadata.subtitle = getSubTitles[0].innerText;
	          } else {
	            cov_1iiyehkoov.b[94][1]++;
	          }
	        }
	      } else {
	        cov_1iiyehkoov.b[93][1]++;
	      }
	    }

	    var poster = (cov_1iiyehkoov.s[461]++, this.player_.poster());
	    cov_1iiyehkoov.s[462]++;

	    if (poster) {
	      cov_1iiyehkoov.b[95][0]++;
	      var image = (cov_1iiyehkoov.s[463]++, new chrome.cast.Image(poster));
	      cov_1iiyehkoov.s[464]++;
	      this.mediaInfo.metadata.images = [{
	        url: image
	      }];
	    } else {
	      cov_1iiyehkoov.b[95][1]++;
	    }

	    cov_1iiyehkoov.s[465]++;
	    this.mediaInfoMDNS.url = this.sources.src;
	    cov_1iiyehkoov.s[466]++;
	    this.mediaInfoMDNS.cover = {};
	    cov_1iiyehkoov.s[467]++;
	    this.mediaInfoMDNS.cover.title = this.mediaInfo.metadata.title;
	    cov_1iiyehkoov.s[468]++;
	    this.mediaInfoMDNS.cover.url = poster;
	    cov_1iiyehkoov.s[469]++;
	    callback();
	  };

	  _proto.onMediaLoadedLocally = function onMediaLoadedLocally() {
	    cov_1iiyehkoov.f[92]++;
	    cov_1iiyehkoov.s[470]++;
	    this.player_.currentTime(this.currentMediaTime);
	    cov_1iiyehkoov.s[471]++;
	    this.playerHandler.prepareToPlay();
	  };

	  _proto.seekMedia = function seekMedia(seekTime) {
	    cov_1iiyehkoov.f[93]++;
	    cov_1iiyehkoov.s[472]++;

	    if ((cov_1iiyehkoov.b[97][0]++, this.mediaDuration === null) || (cov_1iiyehkoov.b[97][1]++, cast.framework.CastContext.getInstance().getCurrentSession()) && (cov_1iiyehkoov.b[97][2]++, !this.remotePlayer.canSeek)) {
	      cov_1iiyehkoov.b[96][0]++;
	      cov_1iiyehkoov.s[473]++;
	      videojs$1.log('Error - Not seekable');
	      cov_1iiyehkoov.s[474]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[96][1]++;
	    }

	    cov_1iiyehkoov.s[475]++;

	    if ((cov_1iiyehkoov.b[99][0]++, this.playerState === PLAYER_STATE.PLAYING) || (cov_1iiyehkoov.b[99][1]++, this.playerState === PLAYER_STATE.PAUSED)) {
	      cov_1iiyehkoov.b[98][0]++;
	      cov_1iiyehkoov.s[476]++;
	      this.currentMediaTime = seekTime;
	    } else {
	      cov_1iiyehkoov.b[98][1]++;
	    }

	    cov_1iiyehkoov.s[477]++;
	    this.playerHandler.seekTo(seekTime);
	  };

	  _proto.getErrorMessage = function getErrorMessage(error) {
	    cov_1iiyehkoov.f[94]++;
	    cov_1iiyehkoov.s[478]++;

	    switch (error.code) {
	      case chrome.cast.ErrorCode.API_NOT_INITIALIZED:
	        cov_1iiyehkoov.b[100][0]++;
	        cov_1iiyehkoov.s[479]++;
	        return 'The API is not initialized.' + (error.description ? (cov_1iiyehkoov.b[101][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[101][1]++, ''));

	      case chrome.cast.ErrorCode.CANCEL:
	        cov_1iiyehkoov.b[100][1]++;
	        cov_1iiyehkoov.s[480]++;
	        return 'The operation was canceled by the user' + (error.description ? (cov_1iiyehkoov.b[102][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[102][1]++, ''));

	      case chrome.cast.ErrorCode.CHANNEL_ERROR:
	        cov_1iiyehkoov.b[100][2]++;
	        cov_1iiyehkoov.s[481]++;
	        return 'A channel to the receiver is not available.' + (error.description ? (cov_1iiyehkoov.b[103][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[103][1]++, ''));

	      case chrome.cast.ErrorCode.EXTENSION_MISSING:
	        cov_1iiyehkoov.b[100][3]++;
	        cov_1iiyehkoov.s[482]++;
	        return 'The Cast extension is not available.' + (error.description ? (cov_1iiyehkoov.b[104][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[104][1]++, ''));

	      case chrome.cast.ErrorCode.INVALID_PARAMETER:
	        cov_1iiyehkoov.b[100][4]++;
	        cov_1iiyehkoov.s[483]++;
	        return 'The parameters to the operation were not valid.' + (error.description ? (cov_1iiyehkoov.b[105][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[105][1]++, ''));

	      case chrome.cast.ErrorCode.RECEIVER_UNAVAILABLE:
	        cov_1iiyehkoov.b[100][5]++;
	        cov_1iiyehkoov.s[484]++;
	        return 'No receiver was compatible with the session request.' + (error.description ? (cov_1iiyehkoov.b[106][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[106][1]++, ''));

	      case chrome.cast.ErrorCode.SESSION_ERROR:
	        cov_1iiyehkoov.b[100][6]++;
	        cov_1iiyehkoov.s[485]++;
	        return 'A session could not be created, or a session was invalid.' + (error.description ? (cov_1iiyehkoov.b[107][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[107][1]++, ''));

	      case chrome.cast.ErrorCode.TIMEOUT:
	        cov_1iiyehkoov.b[100][7]++;
	        cov_1iiyehkoov.s[486]++;
	        return 'The operation timed out.' + (error.description ? (cov_1iiyehkoov.b[108][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[108][1]++, ''));

	      default:
	        cov_1iiyehkoov.b[100][8]++;
	        cov_1iiyehkoov.s[487]++;
	        return error;
	    }
	  };

	  _proto.endPlayback = function endPlayback() {
	    cov_1iiyehkoov.f[95]++;
	    cov_1iiyehkoov.s[488]++;
	    this.currentMediaTime = 0;
	    cov_1iiyehkoov.s[489]++;
	    this.playerState = PLAYER_STATE.IDLE;
	    cov_1iiyehkoov.s[490]++;
	    this.this.updateDisplay();
	  };

	  _proto.getMediaTimeString = function getMediaTimeString(timestamp) {
	    cov_1iiyehkoov.f[96]++;
	    cov_1iiyehkoov.s[491]++;

	    if ((cov_1iiyehkoov.b[110][0]++, timestamp === undefined) || (cov_1iiyehkoov.b[110][1]++, timestamp === null)) {
	      cov_1iiyehkoov.b[109][0]++;
	      cov_1iiyehkoov.s[492]++;
	      return null;
	    } else {
	      cov_1iiyehkoov.b[109][1]++;
	    }

	    var isNegative = (cov_1iiyehkoov.s[493]++, false);
	    cov_1iiyehkoov.s[494]++;

	    if (timestamp < 0) {
	      cov_1iiyehkoov.b[111][0]++;
	      cov_1iiyehkoov.s[495]++;
	      isNegative = true;
	      cov_1iiyehkoov.s[496]++;
	      timestamp *= -1;
	    } else {
	      cov_1iiyehkoov.b[111][1]++;
	    }

	    var hours = (cov_1iiyehkoov.s[497]++, Math.floor(timestamp / 3600));
	    var minutes = (cov_1iiyehkoov.s[498]++, Math.floor((timestamp - hours * 3600) / 60));
	    var seconds = (cov_1iiyehkoov.s[499]++, Math.floor(timestamp - hours * 3600 - minutes * 60));
	    cov_1iiyehkoov.s[500]++;

	    if (hours < 10) {
	      cov_1iiyehkoov.b[112][0]++;
	      cov_1iiyehkoov.s[501]++;
	      hours = '0' + hours;
	    } else {
	      cov_1iiyehkoov.b[112][1]++;
	    }

	    cov_1iiyehkoov.s[502]++;

	    if (minutes < 10) {
	      cov_1iiyehkoov.b[113][0]++;
	      cov_1iiyehkoov.s[503]++;
	      minutes = '0' + minutes;
	    } else {
	      cov_1iiyehkoov.b[113][1]++;
	    }

	    cov_1iiyehkoov.s[504]++;

	    if (seconds < 10) {
	      cov_1iiyehkoov.b[114][0]++;
	      cov_1iiyehkoov.s[505]++;
	      seconds = '0' + seconds;
	    } else {
	      cov_1iiyehkoov.b[114][1]++;
	    }

	    cov_1iiyehkoov.s[506]++;
	    return (isNegative ? (cov_1iiyehkoov.b[115][0]++, '-') : (cov_1iiyehkoov.b[115][1]++, '')) + hours + ':' + minutes + ':' + seconds;
	  };

	  _proto.incrementMediaTime = function incrementMediaTime() {
	    cov_1iiyehkoov.f[97]++;
	    cov_1iiyehkoov.s[507]++;
	    this.currentMediaTime = this.playerHandler.getCurrentMediaTime();
	    cov_1iiyehkoov.s[508]++;
	    this.mediaDuration = this.playerHandler.getMediaDuration();
	    cov_1iiyehkoov.s[509]++;
	    this.playerHandler.updateDurationDisplay();
	    cov_1iiyehkoov.s[510]++;

	    if ((cov_1iiyehkoov.b[117][0]++, this.mediaDuration === null) || (cov_1iiyehkoov.b[117][1]++, this.currentMediaTime < this.mediaDuration)) {
	      cov_1iiyehkoov.b[116][0]++;
	      cov_1iiyehkoov.s[511]++;
	      this.playerHandler.updateCurrentTimeDisplay();
	    } else {
	      cov_1iiyehkoov.b[116][1]++;
	      cov_1iiyehkoov.s[512]++;

	      if (this.mediaDuration > 0) {
	        cov_1iiyehkoov.b[118][0]++;
	        cov_1iiyehkoov.s[513]++;
	        this.endPlayback();
	      } else {
	        cov_1iiyehkoov.b[118][1]++;
	      }
	    }
	  };

	  _proto.isFunction = function isFunction(functionToCheck) {
	    cov_1iiyehkoov.f[98]++;
	    cov_1iiyehkoov.s[514]++;
	    return (cov_1iiyehkoov.b[119][0]++, functionToCheck) && (cov_1iiyehkoov.b[119][1]++, {}.toString.call(functionToCheck) === '[object Function]');
	  };

	  return ChromecastButton;
	}(Button);

	cov_1iiyehkoov.s[515]++;
	ChromecastButton.prototype.controlText_ = 'Chromecast';
	cov_1iiyehkoov.s[516]++;
	ControlBar.prototype.options_.children.splice(ControlBar.prototype.options_.children.length - 1, 0, 'chromeCastButton');
	cov_1iiyehkoov.s[517]++;

	if (typeof videojs$1.getComponent('ChromecastButton') === 'undefined') {
	  cov_1iiyehkoov.b[120][0]++;
	  cov_1iiyehkoov.s[518]++;
	  videojs$1.registerComponent('ChromecastButton', ChromecastButton);
	} else {
	  cov_1iiyehkoov.b[120][1]++;
	}

	var cov_2aep3n7mve = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/google-chromecast.js',
	      hash = 'e68b475815f88de95bdceac284c0249e4f944c19',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/google-chromecast.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 7,
	          column: 18
	        },
	        end: {
	          line: 7,
	          column: 51
	        }
	      },
	      '1': {
	        start: {
	          line: 10,
	          column: 8
	        },
	        end: {
	          line: 10,
	          column: 30
	        }
	      },
	      '2': {
	        start: {
	          line: 12,
	          column: 33
	        },
	        end: {
	          line: 12,
	          column: 70
	        }
	      },
	      '3': {
	        start: {
	          line: 14,
	          column: 8
	        },
	        end: {
	          line: 18,
	          column: 9
	        }
	      },
	      '4': {
	        start: {
	          line: 15,
	          column: 12
	        },
	        end: {
	          line: 17,
	          column: 13
	        }
	      },
	      '5': {
	        start: {
	          line: 16,
	          column: 16
	        },
	        end: {
	          line: 16,
	          column: 64
	        }
	      },
	      '6': {
	        start: {
	          line: 20,
	          column: 8
	        },
	        end: {
	          line: 22,
	          column: 9
	        }
	      },
	      '7': {
	        start: {
	          line: 21,
	          column: 12
	        },
	        end: {
	          line: 21,
	          column: 46
	        }
	      },
	      '8': {
	        start: {
	          line: 26,
	          column: 0
	        },
	        end: {
	          line: 26,
	          column: 34
	        }
	      },
	      '9': {
	        start: {
	          line: 27,
	          column: 0
	        },
	        end: {
	          line: 27,
	          column: 43
	        }
	      },
	      '10': {
	        start: {
	          line: 28,
	          column: 0
	        },
	        end: {
	          line: 28,
	          column: 57
	        }
	      },
	      '11': {
	        start: {
	          line: 30,
	          column: 0
	        },
	        end: {
	          line: 32,
	          column: 1
	        }
	      },
	      '12': {
	        start: {
	          line: 31,
	          column: 4
	        },
	        end: {
	          line: 31,
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
	            column: 4
	          },
	          end: {
	            line: 9,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 9,
	            column: 34
	          },
	          end: {
	            line: 23,
	            column: 5
	          }
	        },
	        line: 9
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 14,
	            column: 39
	          },
	          end: {
	            line: 14,
	            column: 40
	          }
	        },
	        loc: {
	          start: {
	            line: 14,
	            column: 62
	          },
	          end: {
	            line: 18,
	            column: 9
	          }
	        },
	        line: 14
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 15,
	            column: 12
	          },
	          end: {
	            line: 17,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 15,
	            column: 12
	          },
	          end: {
	            line: 17,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 15,
	            column: 12
	          },
	          end: {
	            line: 17,
	            column: 13
	          }
	        }],
	        line: 15
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 20,
	            column: 8
	          },
	          end: {
	            line: 22,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 20,
	            column: 8
	          },
	          end: {
	            line: 22,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 20,
	            column: 8
	          },
	          end: {
	            line: 22,
	            column: 9
	          }
	        }],
	        line: 20
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 20,
	            column: 12
	          },
	          end: {
	            line: 20,
	            column: 54
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 20,
	            column: 12
	          },
	          end: {
	            line: 20,
	            column: 38
	          }
	        }, {
	          start: {
	            line: 20,
	            column: 42
	          },
	          end: {
	            line: 20,
	            column: 54
	          }
	        }],
	        line: 20
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 30,
	            column: 0
	          },
	          end: {
	            line: 32,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 30,
	            column: 0
	          },
	          end: {
	            line: 32,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 30,
	            column: 0
	          },
	          end: {
	            line: 32,
	            column: 1
	          }
	        }],
	        line: 30
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
	      '12': 0
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
	var Component$1 = (cov_2aep3n7mve.s[0]++, videojs$1.getComponent('Component'));

	var Chromecast = /*#__PURE__*/function (_Component) {
	  inheritsLoose(Chromecast, _Component);

	  function Chromecast(player, options) {
	    var _this;

	    cov_2aep3n7mve.f[0]++;
	    cov_2aep3n7mve.s[1]++;
	    _this = _Component.call(this, player, options) || this;
	    var buttonChromecast = (cov_2aep3n7mve.s[2]++, new ChromecastButton(player, options));
	    cov_2aep3n7mve.s[3]++;

	    window.__onGCastApiAvailable = function (isAvailable) {
	      cov_2aep3n7mve.f[1]++;
	      cov_2aep3n7mve.s[4]++;

	      if (isAvailable) {
	        cov_2aep3n7mve.b[0][0]++;
	        cov_2aep3n7mve.s[5]++;
	        buttonChromecast.initCastPlayer(player, options);
	      } else {
	        cov_2aep3n7mve.b[0][1]++;
	      }
	    };

	    cov_2aep3n7mve.s[6]++;

	    if ((cov_2aep3n7mve.b[2][0]++, options.mdns !== undefined) && (cov_2aep3n7mve.b[2][1]++, options.mdns)) {
	      cov_2aep3n7mve.b[1][0]++;
	      cov_2aep3n7mve.s[7]++;

	      window.__onGCastApiAvailable(true);
	    } else {
	      cov_2aep3n7mve.b[1][1]++;
	    }

	    return _this;
	  }

	  return Chromecast;
	}(Component$1);

	cov_2aep3n7mve.s[8]++;
	Chromecast.prototype.options_ = {};
	cov_2aep3n7mve.s[9]++;
	videojs$1.options.children.push('chromecast');
	cov_2aep3n7mve.s[10]++;
	videojs$1.addLanguage('en', {
	  'CASTING TO': 'CASTING TO'
	});
	cov_2aep3n7mve.s[11]++;

	if (typeof videojs$1.getComponent('Chromecast') === 'undefined') {
	  cov_2aep3n7mve.b[3][0]++;
	  cov_2aep3n7mve.s[12]++;
	  videojs$1.registerComponent('Chromecast', Chromecast);
	} else {
	  cov_2aep3n7mve.b[3][1]++;
	}

	var cov_ilxslb9od = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/tech/chromecast-tech-og.js',
	      hash = '23dbca82a80f8b52f6d7b6b417f9545f8d9df782',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/js/tech/chromecast-tech-og.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 5,
	          column: 13
	        },
	        end: {
	          line: 5,
	          column: 36
	        }
	      },
	      '1': {
	        start: {
	          line: 7,
	          column: 21
	        },
	        end: {
	          line: 13,
	          column: 1
	        }
	      },
	      '2': {
	        start: {
	          line: 25,
	          column: 8
	        },
	        end: {
	          line: 25,
	          column: 29
	        }
	      },
	      '3': {
	        start: {
	          line: 27,
	          column: 8
	        },
	        end: {
	          line: 27,
	          column: 49
	        }
	      },
	      '4': {
	        start: {
	          line: 29,
	          column: 8
	        },
	        end: {
	          line: 35,
	          column: 9
	        }
	      },
	      '5': {
	        start: {
	          line: 30,
	          column: 12
	        },
	        end: {
	          line: 30,
	          column: 61
	        }
	      },
	      '6': {
	        start: {
	          line: 31,
	          column: 12
	        },
	        end: {
	          line: 31,
	          column: 68
	        }
	      },
	      '7': {
	        start: {
	          line: 33,
	          column: 12
	        },
	        end: {
	          line: 33,
	          column: 61
	        }
	      },
	      '8': {
	        start: {
	          line: 34,
	          column: 12
	        },
	        end: {
	          line: 34,
	          column: 72
	        }
	      },
	      '9': {
	        start: {
	          line: 37,
	          column: 8
	        },
	        end: {
	          line: 37,
	          column: 39
	        }
	      },
	      '10': {
	        start: {
	          line: 39,
	          column: 8
	        },
	        end: {
	          line: 39,
	          column: 27
	        }
	      },
	      '11': {
	        start: {
	          line: 40,
	          column: 8
	        },
	        end: {
	          line: 40,
	          column: 21
	        }
	      },
	      '12': {
	        start: {
	          line: 42,
	          column: 8
	        },
	        end: {
	          line: 42,
	          column: 27
	        }
	      },
	      '13': {
	        start: {
	          line: 46,
	          column: 8
	        },
	        end: {
	          line: 49,
	          column: 10
	        }
	      },
	      '14': {
	        start: {
	          line: 47,
	          column: 12
	        },
	        end: {
	          line: 47,
	          column: 38
	        }
	      },
	      '15': {
	        start: {
	          line: 48,
	          column: 12
	        },
	        end: {
	          line: 48,
	          column: 39
	        }
	      },
	      '16': {
	        start: {
	          line: 53,
	          column: 19
	        },
	        end: {
	          line: 56,
	          column: 10
	        }
	      },
	      '17': {
	        start: {
	          line: 57,
	          column: 8
	        },
	        end: {
	          line: 57,
	          column: 17
	        }
	      },
	      '18': {
	        start: {
	          line: 61,
	          column: 8
	        },
	        end: {
	          line: 61,
	          column: 331
	        }
	      },
	      '19': {
	        start: {
	          line: 65,
	          column: 8
	        },
	        end: {
	          line: 67,
	          column: 9
	        }
	      },
	      '20': {
	        start: {
	          line: 66,
	          column: 12
	        },
	        end: {
	          line: 66,
	          column: 18
	        }
	      },
	      '21': {
	        start: {
	          line: 68,
	          column: 8
	        },
	        end: {
	          line: 70,
	          column: 9
	        }
	      },
	      '22': {
	        start: {
	          line: 69,
	          column: 12
	        },
	        end: {
	          line: 69,
	          column: 42
	        }
	      },
	      '23': {
	        start: {
	          line: 74,
	          column: 8
	        },
	        end: {
	          line: 74,
	          column: 30
	        }
	      },
	      '24': {
	        start: {
	          line: 78,
	          column: 8
	        },
	        end: {
	          line: 80,
	          column: 9
	        }
	      },
	      '25': {
	        start: {
	          line: 79,
	          column: 12
	        },
	        end: {
	          line: 79,
	          column: 18
	        }
	      },
	      '26': {
	        start: {
	          line: 82,
	          column: 8
	        },
	        end: {
	          line: 100,
	          column: 9
	        }
	      },
	      '27': {
	        start: {
	          line: 84,
	          column: 16
	        },
	        end: {
	          line: 84,
	          column: 39
	        }
	      },
	      '28': {
	        start: {
	          line: 85,
	          column: 16
	        },
	        end: {
	          line: 85,
	          column: 21
	        }
	      },
	      '29': {
	        start: {
	          line: 87,
	          column: 16
	        },
	        end: {
	          line: 87,
	          column: 42
	        }
	      },
	      '30': {
	        start: {
	          line: 88,
	          column: 16
	        },
	        end: {
	          line: 88,
	          column: 37
	        }
	      },
	      '31': {
	        start: {
	          line: 90,
	          column: 16
	        },
	        end: {
	          line: 90,
	          column: 21
	        }
	      },
	      '32': {
	        start: {
	          line: 92,
	          column: 16
	        },
	        end: {
	          line: 92,
	          column: 37
	        }
	      },
	      '33': {
	        start: {
	          line: 93,
	          column: 16
	        },
	        end: {
	          line: 93,
	          column: 35
	        }
	      },
	      '34': {
	        start: {
	          line: 94,
	          column: 16
	        },
	        end: {
	          line: 94,
	          column: 21
	        }
	      },
	      '35': {
	        start: {
	          line: 96,
	          column: 16
	        },
	        end: {
	          line: 96,
	          column: 39
	        }
	      },
	      '36': {
	        start: {
	          line: 97,
	          column: 16
	        },
	        end: {
	          line: 97,
	          column: 36
	        }
	      },
	      '37': {
	        start: {
	          line: 98,
	          column: 16
	        },
	        end: {
	          line: 98,
	          column: 36
	        }
	      },
	      '38': {
	        start: {
	          line: 99,
	          column: 16
	        },
	        end: {
	          line: 99,
	          column: 21
	        }
	      },
	      '39': {
	        start: {
	          line: 106,
	          column: 8
	        },
	        end: {
	          line: 108,
	          column: 9
	        }
	      },
	      '40': {
	        start: {
	          line: 107,
	          column: 12
	        },
	        end: {
	          line: 107,
	          column: 18
	        }
	      },
	      '41': {
	        start: {
	          line: 109,
	          column: 8
	        },
	        end: {
	          line: 109,
	          column: 39
	        }
	      },
	      '42': {
	        start: {
	          line: 113,
	          column: 8
	        },
	        end: {
	          line: 113,
	          column: 62
	        }
	      },
	      '43': {
	        start: {
	          line: 117,
	          column: 8
	        },
	        end: {
	          line: 117,
	          column: 20
	        }
	      },
	      '44': {
	        start: {
	          line: 121,
	          column: 8
	        },
	        end: {
	          line: 123,
	          column: 9
	        }
	      },
	      '45': {
	        start: {
	          line: 122,
	          column: 12
	        },
	        end: {
	          line: 122,
	          column: 18
	        }
	      },
	      '46': {
	        start: {
	          line: 124,
	          column: 8
	        },
	        end: {
	          line: 133,
	          column: 9
	        }
	      },
	      '47': {
	        start: {
	          line: 125,
	          column: 12
	        },
	        end: {
	          line: 132,
	          column: 13
	        }
	      },
	      '48': {
	        start: {
	          line: 126,
	          column: 16
	        },
	        end: {
	          line: 129,
	          column: 19
	        }
	      },
	      '49': {
	        start: {
	          line: 127,
	          column: 20
	        },
	        end: {
	          line: 127,
	          column: 50
	        }
	      },
	      '50': {
	        start: {
	          line: 127,
	          column: 31
	        },
	        end: {
	          line: 127,
	          column: 48
	        }
	      },
	      '51': {
	        start: {
	          line: 128,
	          column: 20
	        },
	        end: {
	          line: 128,
	          column: 53
	        }
	      },
	      '52': {
	        start: {
	          line: 131,
	          column: 16
	        },
	        end: {
	          line: 131,
	          column: 49
	        }
	      },
	      '53': {
	        start: {
	          line: 134,
	          column: 8
	        },
	        end: {
	          line: 134,
	          column: 28
	        }
	      },
	      '54': {
	        start: {
	          line: 135,
	          column: 8
	        },
	        end: {
	          line: 135,
	          column: 28
	        }
	      },
	      '55': {
	        start: {
	          line: 139,
	          column: 8
	        },
	        end: {
	          line: 141,
	          column: 9
	        }
	      },
	      '56': {
	        start: {
	          line: 140,
	          column: 12
	        },
	        end: {
	          line: 140,
	          column: 18
	        }
	      },
	      '57': {
	        start: {
	          line: 143,
	          column: 8
	        },
	        end: {
	          line: 152,
	          column: 9
	        }
	      },
	      '58': {
	        start: {
	          line: 144,
	          column: 12
	        },
	        end: {
	          line: 151,
	          column: 13
	        }
	      },
	      '59': {
	        start: {
	          line: 145,
	          column: 16
	        },
	        end: {
	          line: 148,
	          column: 19
	        }
	      },
	      '60': {
	        start: {
	          line: 146,
	          column: 20
	        },
	        end: {
	          line: 146,
	          column: 50
	        }
	      },
	      '61': {
	        start: {
	          line: 146,
	          column: 31
	        },
	        end: {
	          line: 146,
	          column: 48
	        }
	      },
	      '62': {
	        start: {
	          line: 147,
	          column: 20
	        },
	        end: {
	          line: 147,
	          column: 54
	        }
	      },
	      '63': {
	        start: {
	          line: 150,
	          column: 16
	        },
	        end: {
	          line: 150,
	          column: 50
	        }
	      },
	      '64': {
	        start: {
	          line: 154,
	          column: 8
	        },
	        end: {
	          line: 154,
	          column: 27
	        }
	      },
	      '65': {
	        start: {
	          line: 155,
	          column: 8
	        },
	        end: {
	          line: 155,
	          column: 29
	        }
	      },
	      '66': {
	        start: {
	          line: 159,
	          column: 8
	        },
	        end: {
	          line: 159,
	          column: 27
	        }
	      },
	      '67': {
	        start: {
	          line: 163,
	          column: 8
	        },
	        end: {
	          line: 163,
	          column: 58
	        }
	      },
	      '68': {
	        start: {
	          line: 167,
	          column: 8
	        },
	        end: {
	          line: 169,
	          column: 9
	        }
	      },
	      '69': {
	        start: {
	          line: 168,
	          column: 12
	        },
	        end: {
	          line: 168,
	          column: 20
	        }
	      },
	      '70': {
	        start: {
	          line: 171,
	          column: 8
	        },
	        end: {
	          line: 171,
	          column: 52
	        }
	      },
	      '71': {
	        start: {
	          line: 175,
	          column: 8
	        },
	        end: {
	          line: 177,
	          column: 9
	        }
	      },
	      '72': {
	        start: {
	          line: 176,
	          column: 12
	        },
	        end: {
	          line: 176,
	          column: 20
	        }
	      },
	      '73': {
	        start: {
	          line: 179,
	          column: 8
	        },
	        end: {
	          line: 188,
	          column: 9
	        }
	      },
	      '74': {
	        start: {
	          line: 180,
	          column: 12
	        },
	        end: {
	          line: 184,
	          column: 15
	        }
	      },
	      '75': {
	        start: {
	          line: 181,
	          column: 16
	        },
	        end: {
	          line: 181,
	          column: 46
	        }
	      },
	      '76': {
	        start: {
	          line: 181,
	          column: 27
	        },
	        end: {
	          line: 181,
	          column: 44
	        }
	      },
	      '77': {
	        start: {
	          line: 182,
	          column: 16
	        },
	        end: {
	          line: 182,
	          column: 60
	        }
	      },
	      '78': {
	        start: {
	          line: 183,
	          column: 16
	        },
	        end: {
	          line: 183,
	          column: 58
	        }
	      },
	      '79': {
	        start: {
	          line: 186,
	          column: 12
	        },
	        end: {
	          line: 186,
	          column: 56
	        }
	      },
	      '80': {
	        start: {
	          line: 187,
	          column: 12
	        },
	        end: {
	          line: 187,
	          column: 54
	        }
	      },
	      '81': {
	        start: {
	          line: 190,
	          column: 8
	        },
	        end: {
	          line: 190,
	          column: 19
	        }
	      },
	      '82': {
	        start: {
	          line: 194,
	          column: 8
	        },
	        end: {
	          line: 194,
	          column: 27
	        }
	      },
	      '83': {
	        start: {
	          line: 200,
	          column: 8
	        },
	        end: {
	          line: 202,
	          column: 9
	        }
	      },
	      '84': {
	        start: {
	          line: 201,
	          column: 12
	        },
	        end: {
	          line: 201,
	          column: 20
	        }
	      },
	      '85': {
	        start: {
	          line: 203,
	          column: 8
	        },
	        end: {
	          line: 203,
	          column: 46
	        }
	      },
	      '86': {
	        start: {
	          line: 207,
	          column: 8
	        },
	        end: {
	          line: 207,
	          column: 19
	        }
	      },
	      '87': {
	        start: {
	          line: 211,
	          column: 8
	        },
	        end: {
	          line: 211,
	          column: 19
	        }
	      },
	      '88': {
	        start: {
	          line: 215,
	          column: 8
	        },
	        end: {
	          line: 215,
	          column: 19
	        }
	      },
	      '89': {
	        start: {
	          line: 219,
	          column: 8
	        },
	        end: {
	          line: 221,
	          column: 9
	        }
	      },
	      '90': {
	        start: {
	          line: 220,
	          column: 12
	        },
	        end: {
	          line: 220,
	          column: 18
	        }
	      },
	      '91': {
	        start: {
	          line: 223,
	          column: 23
	        },
	        end: {
	          line: 223,
	          column: 47
	        }
	      },
	      '92': {
	        start: {
	          line: 224,
	          column: 8
	        },
	        end: {
	          line: 224,
	          column: 28
	        }
	      },
	      '93': {
	        start: {
	          line: 225,
	          column: 8
	        },
	        end: {
	          line: 225,
	          column: 27
	        }
	      },
	      '94': {
	        start: {
	          line: 226,
	          column: 8
	        },
	        end: {
	          line: 226,
	          column: 35
	        }
	      },
	      '95': {
	        start: {
	          line: 227,
	          column: 8
	        },
	        end: {
	          line: 227,
	          column: 26
	        }
	      },
	      '96': {
	        start: {
	          line: 228,
	          column: 24
	        },
	        end: {
	          line: 228,
	          column: 61
	        }
	      },
	      '97': {
	        start: {
	          line: 229,
	          column: 8
	        },
	        end: {
	          line: 229,
	          column: 31
	        }
	      },
	      '98': {
	        start: {
	          line: 231,
	          column: 8
	        },
	        end: {
	          line: 235,
	          column: 9
	        }
	      },
	      '99': {
	        start: {
	          line: 232,
	          column: 12
	        },
	        end: {
	          line: 234,
	          column: 15
	        }
	      },
	      '100': {
	        start: {
	          line: 233,
	          column: 16
	        },
	        end: {
	          line: 233,
	          column: 46
	        }
	      },
	      '101': {
	        start: {
	          line: 233,
	          column: 27
	        },
	        end: {
	          line: 233,
	          column: 44
	        }
	      },
	      '102': {
	        start: {
	          line: 237,
	          column: 8
	        },
	        end: {
	          line: 237,
	          column: 36
	        }
	      },
	      '103': {
	        start: {
	          line: 241,
	          column: 8
	        },
	        end: {
	          line: 241,
	          column: 26
	        }
	      },
	      '104': {
	        start: {
	          line: 245,
	          column: 21
	        },
	        end: {
	          line: 245,
	          column: 33
	        }
	      },
	      '105': {
	        start: {
	          line: 246,
	          column: 8
	        },
	        end: {
	          line: 248,
	          column: 9
	        }
	      },
	      '106': {
	        start: {
	          line: 247,
	          column: 12
	        },
	        end: {
	          line: 247,
	          column: 22
	        }
	      },
	      '107': {
	        start: {
	          line: 249,
	          column: 8
	        },
	        end: {
	          line: 256,
	          column: 9
	        }
	      },
	      '108': {
	        start: {
	          line: 250,
	          column: 12
	        },
	        end: {
	          line: 253,
	          column: 15
	        }
	      },
	      '109': {
	        start: {
	          line: 251,
	          column: 16
	        },
	        end: {
	          line: 251,
	          column: 46
	        }
	      },
	      '110': {
	        start: {
	          line: 251,
	          column: 27
	        },
	        end: {
	          line: 251,
	          column: 44
	        }
	      },
	      '111': {
	        start: {
	          line: 252,
	          column: 16
	        },
	        end: {
	          line: 252,
	          column: 46
	        }
	      },
	      '112': {
	        start: {
	          line: 255,
	          column: 12
	        },
	        end: {
	          line: 255,
	          column: 42
	        }
	      },
	      '113': {
	        start: {
	          line: 260,
	          column: 8
	        },
	        end: {
	          line: 260,
	          column: 20
	        }
	      },
	      '114': {
	        start: {
	          line: 264,
	          column: 8
	        },
	        end: {
	          line: 264,
	          column: 23
	        }
	      },
	      '115': {
	        start: {
	          line: 268,
	          column: 8
	        },
	        end: {
	          line: 268,
	          column: 33
	        }
	      },
	      '116': {
	        start: {
	          line: 272,
	          column: 8
	        },
	        end: {
	          line: 272,
	          column: 33
	        }
	      },
	      '117': {
	        start: {
	          line: 276,
	          column: 0
	        },
	        end: {
	          line: 276,
	          column: 40
	        }
	      },
	      '118': {
	        start: {
	          line: 277,
	          column: 0
	        },
	        end: {
	          line: 277,
	          column: 38
	        }
	      },
	      '119': {
	        start: {
	          line: 278,
	          column: 0
	        },
	        end: {
	          line: 280,
	          column: 1
	        }
	      },
	      '120': {
	        start: {
	          line: 279,
	          column: 4
	        },
	        end: {
	          line: 279,
	          column: 15
	        }
	      },
	      '121': {
	        start: {
	          line: 281,
	          column: 0
	        },
	        end: {
	          line: 281,
	          column: 39
	        }
	      },
	      '122': {
	        start: {
	          line: 282,
	          column: 0
	        },
	        end: {
	          line: 282,
	          column: 39
	        }
	      },
	      '123': {
	        start: {
	          line: 283,
	          column: 0
	        },
	        end: {
	          line: 294,
	          column: 1
	        }
	      },
	      '124': {
	        start: {
	          line: 284,
	          column: 23
	        },
	        end: {
	          line: 284,
	          column: 78
	        }
	      },
	      '125': {
	        start: {
	          line: 285,
	          column: 22
	        },
	        end: {
	          line: 285,
	          column: 52
	        }
	      },
	      '126': {
	        start: {
	          line: 287,
	          column: 4
	        },
	        end: {
	          line: 293,
	          column: 5
	        }
	      },
	      '127': {
	        start: {
	          line: 288,
	          column: 8
	        },
	        end: {
	          line: 288,
	          column: 25
	        }
	      },
	      '128': {
	        start: {
	          line: 289,
	          column: 11
	        },
	        end: {
	          line: 293,
	          column: 5
	        }
	      },
	      '129': {
	        start: {
	          line: 290,
	          column: 8
	        },
	        end: {
	          line: 290,
	          column: 22
	        }
	      },
	      '130': {
	        start: {
	          line: 292,
	          column: 8
	        },
	        end: {
	          line: 292,
	          column: 17
	        }
	      },
	      '131': {
	        start: {
	          line: 295,
	          column: 0
	        },
	        end: {
	          line: 302,
	          column: 1
	        }
	      },
	      '132': {
	        start: {
	          line: 296,
	          column: 4
	        },
	        end: {
	          line: 300,
	          column: 5
	        }
	      },
	      '133': {
	        start: {
	          line: 297,
	          column: 8
	        },
	        end: {
	          line: 297,
	          column: 74
	        }
	      },
	      '134': {
	        start: {
	          line: 298,
	          column: 11
	        },
	        end: {
	          line: 300,
	          column: 5
	        }
	      },
	      '135': {
	        start: {
	          line: 299,
	          column: 8
	        },
	        end: {
	          line: 299,
	          column: 73
	        }
	      },
	      '136': {
	        start: {
	          line: 301,
	          column: 4
	        },
	        end: {
	          line: 301,
	          column: 13
	        }
	      },
	      '137': {
	        start: {
	          line: 303,
	          column: 0
	        },
	        end: {
	          line: 305,
	          column: 1
	        }
	      },
	      '138': {
	        start: {
	          line: 304,
	          column: 4
	        },
	        end: {
	          line: 304,
	          column: 24
	        }
	      },
	      '139': {
	        start: {
	          line: 306,
	          column: 0
	        },
	        end: {
	          line: 306,
	          column: 59
	        }
	      },
	      '140': {
	        start: {
	          line: 307,
	          column: 0
	        },
	        end: {
	          line: 307,
	          column: 72
	        }
	      },
	      '141': {
	        start: {
	          line: 308,
	          column: 0
	        },
	        end: {
	          line: 308,
	          column: 53
	        }
	      },
	      '142': {
	        start: {
	          line: 309,
	          column: 0
	        },
	        end: {
	          line: 309,
	          column: 53
	        }
	      },
	      '143': {
	        start: {
	          line: 310,
	          column: 0
	        },
	        end: {
	          line: 310,
	          column: 55
	        }
	      },
	      '144': {
	        start: {
	          line: 311,
	          column: 0
	        },
	        end: {
	          line: 311,
	          column: 56
	        }
	      },
	      '145': {
	        start: {
	          line: 312,
	          column: 0
	        },
	        end: {
	          line: 312,
	          column: 54
	        }
	      },
	      '146': {
	        start: {
	          line: 313,
	          column: 0
	        },
	        end: {
	          line: 313,
	          column: 57
	        }
	      },
	      '147': {
	        start: {
	          line: 314,
	          column: 0
	        },
	        end: {
	          line: 314,
	          column: 58
	        }
	      },
	      '148': {
	        start: {
	          line: 315,
	          column: 0
	        },
	        end: {
	          line: 315,
	          column: 58
	        }
	      },
	      '149': {
	        start: {
	          line: 317,
	          column: 0
	        },
	        end: {
	          line: 317,
	          column: 31
	        }
	      },
	      '150': {
	        start: {
	          line: 319,
	          column: 0
	        },
	        end: {
	          line: 321,
	          column: 1
	        }
	      },
	      '151': {
	        start: {
	          line: 320,
	          column: 4
	        },
	        end: {
	          line: 320,
	          column: 59
	        }
	      },
	      '152': {
	        start: {
	          line: 323,
	          column: 0
	        },
	        end: {
	          line: 325,
	          column: 1
	        }
	      },
	      '153': {
	        start: {
	          line: 324,
	          column: 4
	        },
	        end: {
	          line: 324,
	          column: 56
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 24,
	            column: 4
	          },
	          end: {
	            line: 24,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 24,
	            column: 38
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        },
	        line: 24
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 45,
	            column: 4
	          },
	          end: {
	            line: 45,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 45,
	            column: 20
	          },
	          end: {
	            line: 50,
	            column: 5
	          }
	        },
	        line: 45
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 46,
	            column: 27
	          },
	          end: {
	            line: 46,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 46,
	            column: 33
	          },
	          end: {
	            line: 49,
	            column: 9
	          }
	        },
	        line: 46
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 52,
	            column: 4
	          },
	          end: {
	            line: 52,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 52,
	            column: 16
	          },
	          end: {
	            line: 58,
	            column: 5
	          }
	        },
	        line: 52
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 60,
	            column: 4
	          },
	          end: {
	            line: 60,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 60,
	            column: 14
	          },
	          end: {
	            line: 62,
	            column: 5
	          }
	        },
	        line: 60
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 64,
	            column: 4
	          },
	          end: {
	            line: 64,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 64,
	            column: 30
	          },
	          end: {
	            line: 71,
	            column: 5
	          }
	        },
	        line: 64
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 73,
	            column: 4
	          },
	          end: {
	            line: 73,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 73,
	            column: 24
	          },
	          end: {
	            line: 75,
	            column: 5
	          }
	        },
	        line: 73
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 77,
	            column: 4
	          },
	          end: {
	            line: 77,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 77,
	            column: 27
	          },
	          end: {
	            line: 101,
	            column: 5
	          }
	        },
	        line: 77
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 103,
	            column: 4
	          },
	          end: {
	            line: 103,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 103,
	            column: 14
	          },
	          end: {
	            line: 103,
	            column: 16
	          }
	        },
	        line: 103
	      },
	      '9': {
	        name: '(anonymous_9)',
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
	            column: 18
	          },
	          end: {
	            line: 110,
	            column: 5
	          }
	        },
	        line: 105
	      },
	      '10': {
	        name: '(anonymous_10)',
	        decl: {
	          start: {
	            line: 112,
	            column: 4
	          },
	          end: {
	            line: 112,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 112,
	            column: 18
	          },
	          end: {
	            line: 114,
	            column: 5
	          }
	        },
	        line: 112
	      },
	      '11': {
	        name: '(anonymous_11)',
	        decl: {
	          start: {
	            line: 116,
	            column: 4
	          },
	          end: {
	            line: 116,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 116,
	            column: 16
	          },
	          end: {
	            line: 118,
	            column: 5
	          }
	        },
	        line: 116
	      },
	      '12': {
	        name: '(anonymous_12)',
	        decl: {
	          start: {
	            line: 120,
	            column: 4
	          },
	          end: {
	            line: 120,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 120,
	            column: 12
	          },
	          end: {
	            line: 136,
	            column: 5
	          }
	        },
	        line: 120
	      },
	      '13': {
	        name: '(anonymous_13)',
	        decl: {
	          start: {
	            line: 126,
	            column: 52
	          },
	          end: {
	            line: 126,
	            column: 53
	          }
	        },
	        loc: {
	          start: {
	            line: 126,
	            column: 61
	          },
	          end: {
	            line: 129,
	            column: 17
	          }
	        },
	        line: 126
	      },
	      '14': {
	        name: '(anonymous_14)',
	        decl: {
	          start: {
	            line: 138,
	            column: 4
	          },
	          end: {
	            line: 138,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 138,
	            column: 13
	          },
	          end: {
	            line: 156,
	            column: 5
	          }
	        },
	        line: 138
	      },
	      '15': {
	        name: '(anonymous_15)',
	        decl: {
	          start: {
	            line: 145,
	            column: 51
	          },
	          end: {
	            line: 145,
	            column: 52
	          }
	        },
	        loc: {
	          start: {
	            line: 145,
	            column: 60
	          },
	          end: {
	            line: 148,
	            column: 17
	          }
	        },
	        line: 145
	      },
	      '16': {
	        name: '(anonymous_16)',
	        decl: {
	          start: {
	            line: 158,
	            column: 4
	          },
	          end: {
	            line: 158,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 158,
	            column: 14
	          },
	          end: {
	            line: 160,
	            column: 5
	          }
	        },
	        line: 158
	      },
	      '17': {
	        name: '(anonymous_17)',
	        decl: {
	          start: {
	            line: 162,
	            column: 4
	          },
	          end: {
	            line: 162,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 162,
	            column: 13
	          },
	          end: {
	            line: 164,
	            column: 5
	          }
	        },
	        line: 162
	      },
	      '18': {
	        name: '(anonymous_18)',
	        decl: {
	          start: {
	            line: 166,
	            column: 4
	          },
	          end: {
	            line: 166,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 166,
	            column: 19
	          },
	          end: {
	            line: 172,
	            column: 5
	          }
	        },
	        line: 166
	      },
	      '19': {
	        name: '(anonymous_19)',
	        decl: {
	          start: {
	            line: 174,
	            column: 4
	          },
	          end: {
	            line: 174,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 174,
	            column: 26
	          },
	          end: {
	            line: 191,
	            column: 5
	          }
	        },
	        line: 174
	      },
	      '20': {
	        name: '(anonymous_20)',
	        decl: {
	          start: {
	            line: 180,
	            column: 53
	          },
	          end: {
	            line: 180,
	            column: 54
	          }
	        },
	        loc: {
	          start: {
	            line: 180,
	            column: 62
	          },
	          end: {
	            line: 184,
	            column: 13
	          }
	        },
	        line: 180
	      },
	      '21': {
	        name: '(anonymous_21)',
	        decl: {
	          start: {
	            line: 193,
	            column: 4
	          },
	          end: {
	            line: 193,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 193,
	            column: 14
	          },
	          end: {
	            line: 195,
	            column: 5
	          }
	        },
	        line: 193
	      },
	      '22': {
	        name: '(anonymous_22)',
	        decl: {
	          start: {
	            line: 197,
	            column: 4
	          },
	          end: {
	            line: 197,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 197,
	            column: 16
	          },
	          end: {
	            line: 197,
	            column: 19
	          }
	        },
	        line: 197
	      },
	      '23': {
	        name: '(anonymous_23)',
	        decl: {
	          start: {
	            line: 199,
	            column: 4
	          },
	          end: {
	            line: 199,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 199,
	            column: 16
	          },
	          end: {
	            line: 204,
	            column: 5
	          }
	        },
	        line: 199
	      },
	      '24': {
	        name: '(anonymous_24)',
	        decl: {
	          start: {
	            line: 206,
	            column: 4
	          },
	          end: {
	            line: 206,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 206,
	            column: 14
	          },
	          end: {
	            line: 208,
	            column: 5
	          }
	        },
	        line: 206
	      },
	      '25': {
	        name: '(anonymous_25)',
	        decl: {
	          start: {
	            line: 210,
	            column: 4
	          },
	          end: {
	            line: 210,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 210,
	            column: 15
	          },
	          end: {
	            line: 212,
	            column: 5
	          }
	        },
	        line: 210
	      },
	      '26': {
	        name: '(anonymous_26)',
	        decl: {
	          start: {
	            line: 214,
	            column: 4
	          },
	          end: {
	            line: 214,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 214,
	            column: 16
	          },
	          end: {
	            line: 216,
	            column: 5
	          }
	        },
	        line: 214
	      },
	      '27': {
	        name: '(anonymous_27)',
	        decl: {
	          start: {
	            line: 218,
	            column: 4
	          },
	          end: {
	            line: 218,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 218,
	            column: 36
	          },
	          end: {
	            line: 238,
	            column: 5
	          }
	        },
	        line: 218
	      },
	      '28': {
	        name: '(anonymous_28)',
	        decl: {
	          start: {
	            line: 232,
	            column: 64
	          },
	          end: {
	            line: 232,
	            column: 65
	          }
	        },
	        loc: {
	          start: {
	            line: 232,
	            column: 73
	          },
	          end: {
	            line: 234,
	            column: 13
	          }
	        },
	        line: 232
	      },
	      '29': {
	        name: '(anonymous_29)',
	        decl: {
	          start: {
	            line: 240,
	            column: 4
	          },
	          end: {
	            line: 240,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 240,
	            column: 13
	          },
	          end: {
	            line: 242,
	            column: 5
	          }
	        },
	        line: 240
	      },
	      '30': {
	        name: '(anonymous_30)',
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
	            column: 21
	          },
	          end: {
	            line: 257,
	            column: 5
	          }
	        },
	        line: 244
	      },
	      '31': {
	        name: '(anonymous_31)',
	        decl: {
	          start: {
	            line: 250,
	            column: 58
	          },
	          end: {
	            line: 250,
	            column: 59
	          }
	        },
	        loc: {
	          start: {
	            line: 250,
	            column: 67
	          },
	          end: {
	            line: 253,
	            column: 13
	          }
	        },
	        line: 250
	      },
	      '32': {
	        name: '(anonymous_32)',
	        decl: {
	          start: {
	            line: 259,
	            column: 4
	          },
	          end: {
	            line: 259,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 259,
	            column: 26
	          },
	          end: {
	            line: 261,
	            column: 5
	          }
	        },
	        line: 259
	      },
	      '33': {
	        name: '(anonymous_33)',
	        decl: {
	          start: {
	            line: 263,
	            column: 4
	          },
	          end: {
	            line: 263,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 263,
	            column: 15
	          },
	          end: {
	            line: 265,
	            column: 5
	          }
	        },
	        line: 263
	      },
	      '34': {
	        name: '(anonymous_34)',
	        decl: {
	          start: {
	            line: 267,
	            column: 4
	          },
	          end: {
	            line: 267,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 267,
	            column: 27
	          },
	          end: {
	            line: 269,
	            column: 5
	          }
	        },
	        line: 267
	      },
	      '35': {
	        name: '(anonymous_35)',
	        decl: {
	          start: {
	            line: 271,
	            column: 4
	          },
	          end: {
	            line: 271,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 271,
	            column: 20
	          },
	          end: {
	            line: 273,
	            column: 5
	          }
	        },
	        line: 271
	      },
	      '36': {
	        name: '(anonymous_36)',
	        decl: {
	          start: {
	            line: 278,
	            column: 29
	          },
	          end: {
	            line: 278,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 278,
	            column: 41
	          },
	          end: {
	            line: 280,
	            column: 1
	          }
	        },
	        line: 278
	      },
	      '37': {
	        name: '(anonymous_37)',
	        decl: {
	          start: {
	            line: 283,
	            column: 49
	          },
	          end: {
	            line: 283,
	            column: 50
	          }
	        },
	        loc: {
	          start: {
	            line: 283,
	            column: 67
	          },
	          end: {
	            line: 294,
	            column: 1
	          }
	        },
	        line: 283
	      },
	      '38': {
	        name: '(anonymous_38)',
	        decl: {
	          start: {
	            line: 295,
	            column: 51
	          },
	          end: {
	            line: 295,
	            column: 52
	          }
	        },
	        loc: {
	          start: {
	            line: 295,
	            column: 69
	          },
	          end: {
	            line: 302,
	            column: 1
	          }
	        },
	        line: 295
	      },
	      '39': {
	        name: '(anonymous_39)',
	        decl: {
	          start: {
	            line: 303,
	            column: 50
	          },
	          end: {
	            line: 303,
	            column: 51
	          }
	        },
	        loc: {
	          start: {
	            line: 303,
	            column: 74
	          },
	          end: {
	            line: 305,
	            column: 1
	          }
	        },
	        line: 303
	      },
	      '40': {
	        name: '(anonymous_40)',
	        decl: {
	          start: {
	            line: 306,
	            column: 45
	          },
	          end: {
	            line: 306,
	            column: 46
	          }
	        },
	        loc: {
	          start: {
	            line: 306,
	            column: 57
	          },
	          end: {
	            line: 306,
	            column: 59
	          }
	        },
	        line: 306
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 24,
	            column: 26
	          },
	          end: {
	            line: 24,
	            column: 36
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 24,
	            column: 34
	          },
	          end: {
	            line: 24,
	            column: 36
	          }
	        }],
	        line: 24
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 29,
	            column: 8
	          },
	          end: {
	            line: 35,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 29,
	            column: 8
	          },
	          end: {
	            line: 35,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 29,
	            column: 8
	          },
	          end: {
	            line: 35,
	            column: 9
	          }
	        }],
	        line: 29
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 65,
	            column: 8
	          },
	          end: {
	            line: 67,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 65,
	            column: 8
	          },
	          end: {
	            line: 67,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 65,
	            column: 8
	          },
	          end: {
	            line: 67,
	            column: 9
	          }
	        }],
	        line: 65
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 65,
	            column: 12
	          },
	          end: {
	            line: 65,
	            column: 50
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 65,
	            column: 12
	          },
	          end: {
	            line: 65,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 65,
	            column: 32
	          },
	          end: {
	            line: 65,
	            column: 50
	          }
	        }],
	        line: 65
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 68,
	            column: 8
	          },
	          end: {
	            line: 70,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 68,
	            column: 8
	          },
	          end: {
	            line: 70,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 68,
	            column: 8
	          },
	          end: {
	            line: 70,
	            column: 9
	          }
	        }],
	        line: 68
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 78,
	            column: 8
	          },
	          end: {
	            line: 80,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 78,
	            column: 8
	          },
	          end: {
	            line: 80,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 78,
	            column: 8
	          },
	          end: {
	            line: 80,
	            column: 9
	          }
	        }],
	        line: 78
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 78,
	            column: 12
	          },
	          end: {
	            line: 78,
	            column: 50
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 78,
	            column: 12
	          },
	          end: {
	            line: 78,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 78,
	            column: 32
	          },
	          end: {
	            line: 78,
	            column: 50
	          }
	        }],
	        line: 78
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 82,
	            column: 8
	          },
	          end: {
	            line: 100,
	            column: 9
	          }
	        },
	        type: 'switch',
	        locations: [{
	          start: {
	            line: 83,
	            column: 12
	          },
	          end: {
	            line: 85,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 86,
	            column: 12
	          },
	          end: {
	            line: 90,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 91,
	            column: 12
	          },
	          end: {
	            line: 94,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 95,
	            column: 12
	          },
	          end: {
	            line: 99,
	            column: 21
	          }
	        }],
	        line: 82
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 106,
	            column: 8
	          },
	          end: {
	            line: 108,
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
	            line: 108,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 106,
	            column: 8
	          },
	          end: {
	            line: 108,
	            column: 9
	          }
	        }],
	        line: 106
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 106,
	            column: 12
	          },
	          end: {
	            line: 106,
	            column: 50
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 106,
	            column: 12
	          },
	          end: {
	            line: 106,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 106,
	            column: 32
	          },
	          end: {
	            line: 106,
	            column: 50
	          }
	        }],
	        line: 106
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 121,
	            column: 8
	          },
	          end: {
	            line: 123,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 121,
	            column: 8
	          },
	          end: {
	            line: 123,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 121,
	            column: 8
	          },
	          end: {
	            line: 123,
	            column: 9
	          }
	        }],
	        line: 121
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 121,
	            column: 12
	          },
	          end: {
	            line: 121,
	            column: 50
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 121,
	            column: 12
	          },
	          end: {
	            line: 121,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 121,
	            column: 32
	          },
	          end: {
	            line: 121,
	            column: 50
	          }
	        }],
	        line: 121
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 124,
	            column: 8
	          },
	          end: {
	            line: 133,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 124,
	            column: 8
	          },
	          end: {
	            line: 133,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 124,
	            column: 8
	          },
	          end: {
	            line: 133,
	            column: 9
	          }
	        }],
	        line: 124
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 125,
	            column: 12
	          },
	          end: {
	            line: 132,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 125,
	            column: 12
	          },
	          end: {
	            line: 132,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 125,
	            column: 12
	          },
	          end: {
	            line: 132,
	            column: 13
	          }
	        }],
	        line: 125
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 127,
	            column: 20
	          },
	          end: {
	            line: 127,
	            column: 50
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 127,
	            column: 20
	          },
	          end: {
	            line: 127,
	            column: 50
	          }
	        }, {
	          start: {
	            line: 127,
	            column: 20
	          },
	          end: {
	            line: 127,
	            column: 50
	          }
	        }],
	        line: 127
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 139,
	            column: 8
	          },
	          end: {
	            line: 141,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 139,
	            column: 8
	          },
	          end: {
	            line: 141,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 139,
	            column: 8
	          },
	          end: {
	            line: 141,
	            column: 9
	          }
	        }],
	        line: 139
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 139,
	            column: 12
	          },
	          end: {
	            line: 139,
	            column: 50
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 139,
	            column: 12
	          },
	          end: {
	            line: 139,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 139,
	            column: 32
	          },
	          end: {
	            line: 139,
	            column: 50
	          }
	        }],
	        line: 139
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 143,
	            column: 8
	          },
	          end: {
	            line: 152,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 143,
	            column: 8
	          },
	          end: {
	            line: 152,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 143,
	            column: 8
	          },
	          end: {
	            line: 152,
	            column: 9
	          }
	        }],
	        line: 143
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 144,
	            column: 12
	          },
	          end: {
	            line: 151,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 144,
	            column: 12
	          },
	          end: {
	            line: 151,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 144,
	            column: 12
	          },
	          end: {
	            line: 151,
	            column: 13
	          }
	        }],
	        line: 144
	      },
	      '19': {
	        loc: {
	          start: {
	            line: 146,
	            column: 20
	          },
	          end: {
	            line: 146,
	            column: 50
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 146,
	            column: 20
	          },
	          end: {
	            line: 146,
	            column: 50
	          }
	        }, {
	          start: {
	            line: 146,
	            column: 20
	          },
	          end: {
	            line: 146,
	            column: 50
	          }
	        }],
	        line: 146
	      },
	      '20': {
	        loc: {
	          start: {
	            line: 167,
	            column: 8
	          },
	          end: {
	            line: 169,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 167,
	            column: 8
	          },
	          end: {
	            line: 169,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 167,
	            column: 8
	          },
	          end: {
	            line: 169,
	            column: 9
	          }
	        }],
	        line: 167
	      },
	      '21': {
	        loc: {
	          start: {
	            line: 167,
	            column: 12
	          },
	          end: {
	            line: 167,
	            column: 50
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 167,
	            column: 12
	          },
	          end: {
	            line: 167,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 167,
	            column: 32
	          },
	          end: {
	            line: 167,
	            column: 50
	          }
	        }],
	        line: 167
	      },
	      '22': {
	        loc: {
	          start: {
	            line: 175,
	            column: 8
	          },
	          end: {
	            line: 177,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 175,
	            column: 8
	          },
	          end: {
	            line: 177,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 175,
	            column: 8
	          },
	          end: {
	            line: 177,
	            column: 9
	          }
	        }],
	        line: 175
	      },
	      '23': {
	        loc: {
	          start: {
	            line: 175,
	            column: 12
	          },
	          end: {
	            line: 175,
	            column: 50
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 175,
	            column: 12
	          },
	          end: {
	            line: 175,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 175,
	            column: 32
	          },
	          end: {
	            line: 175,
	            column: 50
	          }
	        }],
	        line: 175
	      },
	      '24': {
	        loc: {
	          start: {
	            line: 179,
	            column: 8
	          },
	          end: {
	            line: 188,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 179,
	            column: 8
	          },
	          end: {
	            line: 188,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 179,
	            column: 8
	          },
	          end: {
	            line: 188,
	            column: 9
	          }
	        }],
	        line: 179
	      },
	      '25': {
	        loc: {
	          start: {
	            line: 181,
	            column: 16
	          },
	          end: {
	            line: 181,
	            column: 46
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 181,
	            column: 16
	          },
	          end: {
	            line: 181,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 181,
	            column: 16
	          },
	          end: {
	            line: 181,
	            column: 46
	          }
	        }],
	        line: 181
	      },
	      '26': {
	        loc: {
	          start: {
	            line: 200,
	            column: 8
	          },
	          end: {
	            line: 202,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 200,
	            column: 8
	          },
	          end: {
	            line: 202,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 200,
	            column: 8
	          },
	          end: {
	            line: 202,
	            column: 9
	          }
	        }],
	        line: 200
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 200,
	            column: 12
	          },
	          end: {
	            line: 200,
	            column: 50
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 200,
	            column: 12
	          },
	          end: {
	            line: 200,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 200,
	            column: 32
	          },
	          end: {
	            line: 200,
	            column: 50
	          }
	        }],
	        line: 200
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 218,
	            column: 22
	          },
	          end: {
	            line: 218,
	            column: 34
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 218,
	            column: 29
	          },
	          end: {
	            line: 218,
	            column: 34
	          }
	        }],
	        line: 218
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 219,
	            column: 8
	          },
	          end: {
	            line: 221,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 219,
	            column: 8
	          },
	          end: {
	            line: 221,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 219,
	            column: 8
	          },
	          end: {
	            line: 221,
	            column: 9
	          }
	        }],
	        line: 219
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 219,
	            column: 12
	          },
	          end: {
	            line: 219,
	            column: 50
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 219,
	            column: 12
	          },
	          end: {
	            line: 219,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 219,
	            column: 32
	          },
	          end: {
	            line: 219,
	            column: 50
	          }
	        }],
	        line: 219
	      },
	      '31': {
	        loc: {
	          start: {
	            line: 231,
	            column: 8
	          },
	          end: {
	            line: 235,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 231,
	            column: 8
	          },
	          end: {
	            line: 235,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 231,
	            column: 8
	          },
	          end: {
	            line: 235,
	            column: 9
	          }
	        }],
	        line: 231
	      },
	      '32': {
	        loc: {
	          start: {
	            line: 233,
	            column: 16
	          },
	          end: {
	            line: 233,
	            column: 46
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 233,
	            column: 16
	          },
	          end: {
	            line: 233,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 233,
	            column: 16
	          },
	          end: {
	            line: 233,
	            column: 46
	          }
	        }],
	        line: 233
	      },
	      '33': {
	        loc: {
	          start: {
	            line: 246,
	            column: 8
	          },
	          end: {
	            line: 248,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 246,
	            column: 8
	          },
	          end: {
	            line: 248,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 246,
	            column: 8
	          },
	          end: {
	            line: 248,
	            column: 9
	          }
	        }],
	        line: 246
	      },
	      '34': {
	        loc: {
	          start: {
	            line: 249,
	            column: 8
	          },
	          end: {
	            line: 256,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 249,
	            column: 8
	          },
	          end: {
	            line: 256,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 249,
	            column: 8
	          },
	          end: {
	            line: 256,
	            column: 9
	          }
	        }],
	        line: 249
	      },
	      '35': {
	        loc: {
	          start: {
	            line: 251,
	            column: 16
	          },
	          end: {
	            line: 251,
	            column: 46
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 251,
	            column: 16
	          },
	          end: {
	            line: 251,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 251,
	            column: 16
	          },
	          end: {
	            line: 251,
	            column: 46
	          }
	        }],
	        line: 251
	      },
	      '36': {
	        loc: {
	          start: {
	            line: 287,
	            column: 4
	          },
	          end: {
	            line: 293,
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
	            line: 293,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 287,
	            column: 4
	          },
	          end: {
	            line: 293,
	            column: 5
	          }
	        }],
	        line: 287
	      },
	      '37': {
	        loc: {
	          start: {
	            line: 289,
	            column: 11
	          },
	          end: {
	            line: 293,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 289,
	            column: 11
	          },
	          end: {
	            line: 293,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 289,
	            column: 11
	          },
	          end: {
	            line: 293,
	            column: 5
	          }
	        }],
	        line: 289
	      },
	      '38': {
	        loc: {
	          start: {
	            line: 296,
	            column: 4
	          },
	          end: {
	            line: 300,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 296,
	            column: 4
	          },
	          end: {
	            line: 300,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 296,
	            column: 4
	          },
	          end: {
	            line: 300,
	            column: 5
	          }
	        }],
	        line: 296
	      },
	      '39': {
	        loc: {
	          start: {
	            line: 298,
	            column: 11
	          },
	          end: {
	            line: 300,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 298,
	            column: 11
	          },
	          end: {
	            line: 300,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 298,
	            column: 11
	          },
	          end: {
	            line: 300,
	            column: 5
	          }
	        }],
	        line: 298
	      },
	      '40': {
	        loc: {
	          start: {
	            line: 319,
	            column: 0
	          },
	          end: {
	            line: 321,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 319,
	            column: 0
	          },
	          end: {
	            line: 321,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 319,
	            column: 0
	          },
	          end: {
	            line: 321,
	            column: 1
	          }
	        }],
	        line: 319
	      },
	      '41': {
	        loc: {
	          start: {
	            line: 323,
	            column: 0
	          },
	          end: {
	            line: 325,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 323,
	            column: 0
	          },
	          end: {
	            line: 325,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 323,
	            column: 0
	          },
	          end: {
	            line: 325,
	            column: 1
	          }
	        }],
	        line: 323
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
	      '153': 0
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
	      '40': 0
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
	      '25': [0, 0],
	      '26': [0, 0],
	      '27': [0, 0],
	      '28': [0],
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
	      '41': [0, 0]
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
	var Tech = (cov_ilxslb9od.s[0]++, videojs$1.getTech('Tech'));
	var PLAYER_STATE$1 = (cov_ilxslb9od.s[1]++, {
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
	      ready = (cov_ilxslb9od.b[0][0]++, {});
	    }

	    cov_ilxslb9od.f[0]++;
	    cov_ilxslb9od.s[2]++;
	    _this = _Tech.call(this, options, ready) || this;
	    cov_ilxslb9od.s[3]++;
	    _this.castBtn = _this.options_.source.cast_;
	    cov_ilxslb9od.s[4]++;

	    if (_this.castBtn.mDNS) {
	      cov_ilxslb9od.b[1][0]++;
	      cov_ilxslb9od.s[5]++;
	      _this.apiSession = _this.options_.source.apiSession;
	      cov_ilxslb9od.s[6]++;
	      _this.receiver = _this.castBtn.selectedDevice.friendlyName;
	    } else {
	      cov_ilxslb9od.b[1][1]++;
	      cov_ilxslb9od.s[7]++;
	      _this.apiSession = _this.options_.source.apiSession;
	      cov_ilxslb9od.s[8]++;
	      _this.receiver = _this.apiSession.getCastDevice().friendlyName;
	    }

	    cov_ilxslb9od.s[9]++;
	    _this.castBtn.currentTech = assertThisInitialized(_this);
	    cov_ilxslb9od.s[10]++;

	    _this.initializeUI();

	    cov_ilxslb9od.s[11]++;

	    _this.update();

	    cov_ilxslb9od.s[12]++;

	    _this.triggerReady();

	    return _this;
	  }

	  var _proto = ChromecastTech.prototype;

	  _proto.initializeUI = function initializeUI() {
	    var _this2 = this;

	    cov_ilxslb9od.f[1]++;
	    cov_ilxslb9od.s[13]++;
	    this.on('dispose', function () {
	      cov_ilxslb9od.f[2]++;
	      cov_ilxslb9od.s[14]++;

	      _this2.onMediaStatusUpdate();

	      cov_ilxslb9od.s[15]++;

	      _this2.onSessionUpdate(false);
	    });
	  };

	  _proto.createEl = function createEl() {
	    cov_ilxslb9od.f[3]++;
	    var el = (cov_ilxslb9od.s[16]++, videojs$1.dom.createEl('div', {
	      id: this.options_.techId,
	      className: 'vjs-tech vjs-tech-chromecast'
	    }));
	    cov_ilxslb9od.s[17]++;
	    return el;
	  };

	  _proto.update = function update() {
	    cov_ilxslb9od.f[4]++;
	    cov_ilxslb9od.s[18]++;
	    this.el_.innerHTML = "<div class=\"casting-image\" style=\"background-image: url('" + this.options_.poster + "')\"></div><div class=\"casting-overlay\"><div class=\"casting-information\"><div class=\"casting-icon\"></div><div class=\"casting-description\"><small>" + this.localize('CASTING TO') + "</small><br>" + this.receiver + "</div></div></div>";
	  };

	  _proto.onSessionUpdate = function onSessionUpdate(isAlive) {
	    cov_ilxslb9od.f[5]++;
	    cov_ilxslb9od.s[19]++;

	    if ((cov_ilxslb9od.b[3][0]++, !this.apiSession) && (cov_ilxslb9od.b[3][1]++, !this.castBtn.mDNS)) {
	      cov_ilxslb9od.b[2][0]++;
	      cov_ilxslb9od.s[20]++;
	      return;
	    } else {
	      cov_ilxslb9od.b[2][1]++;
	    }

	    cov_ilxslb9od.s[21]++;

	    if (!isAlive) {
	      cov_ilxslb9od.b[4][0]++;
	      cov_ilxslb9od.s[22]++;
	      return this.onStopAppSuccess();
	    } else {
	      cov_ilxslb9od.b[4][1]++;
	    }
	  };

	  _proto.onStopAppSuccess = function onStopAppSuccess() {
	    cov_ilxslb9od.f[6]++;
	    cov_ilxslb9od.s[23]++;
	    this.apiSession = null;
	  };

	  _proto.onMediaStatusUpdate = function onMediaStatusUpdate() {
	    cov_ilxslb9od.f[7]++;
	    cov_ilxslb9od.s[24]++;

	    if ((cov_ilxslb9od.b[6][0]++, !this.apiSession) && (cov_ilxslb9od.b[6][1]++, !this.castBtn.mDNS)) {
	      cov_ilxslb9od.b[5][0]++;
	      cov_ilxslb9od.s[25]++;
	      return;
	    } else {
	      cov_ilxslb9od.b[5][1]++;
	    }

	    cov_ilxslb9od.s[26]++;

	    switch (this.castBtn.playerState) {
	      case PLAYER_STATE$1.BUFFERING:
	        cov_ilxslb9od.b[7][0]++;
	        cov_ilxslb9od.s[27]++;
	        this.trigger('waiting');
	        cov_ilxslb9od.s[28]++;
	        break;

	      case PLAYER_STATE$1.IDLE:
	        cov_ilxslb9od.b[7][1]++;
	        cov_ilxslb9od.s[29]++;
	        this.trigger('timeupdate');
	        cov_ilxslb9od.s[30]++;
	        this.trigger('ended');
	        cov_ilxslb9od.s[31]++;
	        break;

	      case PLAYER_STATE$1.PAUSED:
	        cov_ilxslb9od.b[7][2]++;
	        cov_ilxslb9od.s[32]++;
	        this.trigger('pause');
	        cov_ilxslb9od.s[33]++;
	        this.paused_ = true;
	        cov_ilxslb9od.s[34]++;
	        break;

	      case PLAYER_STATE$1.PLAYING:
	        cov_ilxslb9od.b[7][3]++;
	        cov_ilxslb9od.s[35]++;
	        this.trigger('playing');
	        cov_ilxslb9od.s[36]++;
	        this.trigger('play');
	        cov_ilxslb9od.s[37]++;
	        this.paused_ = false;
	        cov_ilxslb9od.s[38]++;
	        break;
	    }
	  };

	  _proto.src = function src(_src) {
	    cov_ilxslb9od.f[8]++;
	  };

	  _proto.currentSrc = function currentSrc() {
	    cov_ilxslb9od.f[9]++;
	    cov_ilxslb9od.s[39]++;

	    if ((cov_ilxslb9od.b[9][0]++, !this.apiSession) && (cov_ilxslb9od.b[9][1]++, !this.castBtn.mDNS)) {
	      cov_ilxslb9od.b[8][0]++;
	      cov_ilxslb9od.s[40]++;
	      return;
	    } else {
	      cov_ilxslb9od.b[8][1]++;
	    }

	    cov_ilxslb9od.s[41]++;
	    return this.castBtn.sources.src;
	  };

	  _proto.castError = function castError(e) {
	    cov_ilxslb9od.f[10]++;
	    cov_ilxslb9od.s[42]++;
	    return videojs$1.log('Cast Error: ' + JSON.stringify(e));
	  };

	  _proto.controls = function controls() {
	    cov_ilxslb9od.f[11]++;
	    cov_ilxslb9od.s[43]++;
	    return false;
	  };

	  _proto.play = function play() {
	    var _this3 = this;

	    cov_ilxslb9od.f[12]++;
	    cov_ilxslb9od.s[44]++;

	    if ((cov_ilxslb9od.b[11][0]++, !this.apiSession) && (cov_ilxslb9od.b[11][1]++, !this.castBtn.mDNS)) {
	      cov_ilxslb9od.b[10][0]++;
	      cov_ilxslb9od.s[45]++;
	      return;
	    } else {
	      cov_ilxslb9od.b[10][1]++;
	    }

	    cov_ilxslb9od.s[46]++;

	    if (this.paused_) {
	      cov_ilxslb9od.b[12][0]++;
	      cov_ilxslb9od.s[47]++;

	      if (this.castBtn.mDNS) {
	        cov_ilxslb9od.b[13][0]++;
	        cov_ilxslb9od.s[48]++;
	        this.castBtn.selectedDevice.resume(function (err) {
	          cov_ilxslb9od.f[13]++;
	          cov_ilxslb9od.s[49]++;

	          if (err) {
	            cov_ilxslb9od.b[14][0]++;
	            cov_ilxslb9od.s[50]++;
	            videojs$1.log(err);
	          } else {
	            cov_ilxslb9od.b[14][1]++;
	          }

	          cov_ilxslb9od.s[51]++;

	          _this3.castBtn.playerHandler.play();
	        });
	      } else {
	        cov_ilxslb9od.b[13][1]++;
	        cov_ilxslb9od.s[52]++;
	        this.castBtn.playerHandler.play();
	      }
	    } else {
	      cov_ilxslb9od.b[12][1]++;
	    }

	    cov_ilxslb9od.s[53]++;
	    this.paused_ = false;
	    cov_ilxslb9od.s[54]++;
	    this.trigger('play');
	  };

	  _proto.pause = function pause() {
	    var _this4 = this;

	    cov_ilxslb9od.f[14]++;
	    cov_ilxslb9od.s[55]++;

	    if ((cov_ilxslb9od.b[16][0]++, !this.apiSession) && (cov_ilxslb9od.b[16][1]++, !this.castBtn.mDNS)) {
	      cov_ilxslb9od.b[15][0]++;
	      cov_ilxslb9od.s[56]++;
	      return;
	    } else {
	      cov_ilxslb9od.b[15][1]++;
	    }

	    cov_ilxslb9od.s[57]++;

	    if (!this.paused_) {
	      cov_ilxslb9od.b[17][0]++;
	      cov_ilxslb9od.s[58]++;

	      if (this.castBtn.mDNS) {
	        cov_ilxslb9od.b[18][0]++;
	        cov_ilxslb9od.s[59]++;
	        this.castBtn.selectedDevice.pause(function (err) {
	          cov_ilxslb9od.f[15]++;
	          cov_ilxslb9od.s[60]++;

	          if (err) {
	            cov_ilxslb9od.b[19][0]++;
	            cov_ilxslb9od.s[61]++;
	            videojs$1.log(err);
	          } else {
	            cov_ilxslb9od.b[19][1]++;
	          }

	          cov_ilxslb9od.s[62]++;

	          _this4.castBtn.playerHandler.pause();
	        });
	      } else {
	        cov_ilxslb9od.b[18][1]++;
	        cov_ilxslb9od.s[63]++;
	        this.castBtn.playerHandler.pause();
	      }
	    } else {
	      cov_ilxslb9od.b[17][1]++;
	    }

	    cov_ilxslb9od.s[64]++;
	    this.paused_ = true;
	    cov_ilxslb9od.s[65]++;
	    this.trigger('pause');
	  };

	  _proto.paused = function paused() {
	    cov_ilxslb9od.f[16]++;
	    cov_ilxslb9od.s[66]++;
	    return this.paused_;
	  };

	  _proto.ended = function ended() {
	    cov_ilxslb9od.f[17]++;
	    cov_ilxslb9od.s[67]++;
	    return chrome.cast.media.IdleReason === 'FINISHED';
	  };

	  _proto.currentTime = function currentTime() {
	    cov_ilxslb9od.f[18]++;
	    cov_ilxslb9od.s[68]++;

	    if ((cov_ilxslb9od.b[21][0]++, !this.apiSession) && (cov_ilxslb9od.b[21][1]++, !this.castBtn.mDNS)) {
	      cov_ilxslb9od.b[20][0]++;
	      cov_ilxslb9od.s[69]++;
	      return 0;
	    } else {
	      cov_ilxslb9od.b[20][1]++;
	    }

	    cov_ilxslb9od.s[70]++;
	    return this.castBtn.remotePlayer.currentTime;
	  };

	  _proto.setCurrentTime = function setCurrentTime(time) {
	    var _this5 = this;

	    cov_ilxslb9od.f[19]++;
	    cov_ilxslb9od.s[71]++;

	    if ((cov_ilxslb9od.b[23][0]++, !this.apiSession) && (cov_ilxslb9od.b[23][1]++, !this.castBtn.mDNS)) {
	      cov_ilxslb9od.b[22][0]++;
	      cov_ilxslb9od.s[72]++;
	      return 0;
	    } else {
	      cov_ilxslb9od.b[22][1]++;
	    }

	    cov_ilxslb9od.s[73]++;

	    if (this.castBtn.mDNS) {
	      cov_ilxslb9od.b[24][0]++;
	      cov_ilxslb9od.s[74]++;
	      this.castBtn.selectedDevice.seekTo(time, function (err) {
	        cov_ilxslb9od.f[20]++;
	        cov_ilxslb9od.s[75]++;

	        if (err) {
	          cov_ilxslb9od.b[25][0]++;
	          cov_ilxslb9od.s[76]++;
	          videojs$1.log(err);
	        } else {
	          cov_ilxslb9od.b[25][1]++;
	        }

	        cov_ilxslb9od.s[77]++;
	        _this5.castBtn.remotePlayer.currentTime = time;
	        cov_ilxslb9od.s[78]++;

	        _this5.castBtn.remotePlayerController.seek();
	      });
	    } else {
	      cov_ilxslb9od.b[24][1]++;
	      cov_ilxslb9od.s[79]++;
	      this.castBtn.remotePlayer.currentTime = time;
	      cov_ilxslb9od.s[80]++;
	      this.castBtn.remotePlayerController.seek();
	    }

	    cov_ilxslb9od.s[81]++;
	    return time;
	  };

	  _proto.volume = function volume() {
	    cov_ilxslb9od.f[21]++;
	    cov_ilxslb9od.s[82]++;
	    return this.volume_;
	  };

	  _proto.buffered = function buffered() {
	    cov_ilxslb9od.f[22]++;
	  };

	  _proto.duration = function duration() {
	    cov_ilxslb9od.f[23]++;
	    cov_ilxslb9od.s[83]++;

	    if ((cov_ilxslb9od.b[27][0]++, !this.apiSession) && (cov_ilxslb9od.b[27][1]++, !this.castBtn.mDNS)) {
	      cov_ilxslb9od.b[26][0]++;
	      cov_ilxslb9od.s[84]++;
	      return 0;
	    } else {
	      cov_ilxslb9od.b[26][1]++;
	    }

	    cov_ilxslb9od.s[85]++;
	    return this.castBtn.player_.duration();
	  };

	  _proto.seeked = function seeked() {
	    cov_ilxslb9od.f[24]++;
	    cov_ilxslb9od.s[86]++;
	    return true;
	  };

	  _proto.seeking = function seeking() {
	    cov_ilxslb9od.f[25]++;
	    cov_ilxslb9od.s[87]++;
	    return true;
	  };

	  _proto.seekable = function seekable() {
	    cov_ilxslb9od.f[26]++;
	    cov_ilxslb9od.s[88]++;
	    return true;
	  };

	  _proto.setVolume = function setVolume(level, mute) {
	    if (mute === void 0) {
	      mute = (cov_ilxslb9od.b[28][0]++, false);
	    }

	    cov_ilxslb9od.f[27]++;
	    cov_ilxslb9od.s[89]++;

	    if ((cov_ilxslb9od.b[30][0]++, !this.apiSession) && (cov_ilxslb9od.b[30][1]++, !this.castBtn.mDNS)) {
	      cov_ilxslb9od.b[29][0]++;
	      cov_ilxslb9od.s[90]++;
	      return;
	    } else {
	      cov_ilxslb9od.b[29][1]++;
	    }

	    var volume = (cov_ilxslb9od.s[91]++, new chrome.cast.Volume());
	    cov_ilxslb9od.s[92]++;
	    volume.level = level;
	    cov_ilxslb9od.s[93]++;
	    volume.muted = mute;
	    cov_ilxslb9od.s[94]++;
	    this.volume_ = volume.level;
	    cov_ilxslb9od.s[95]++;
	    this.muted_ = mute;
	    var request = (cov_ilxslb9od.s[96]++, new chrome.cast.media.VolumeRequest());
	    cov_ilxslb9od.s[97]++;
	    request.volume = volume;
	    cov_ilxslb9od.s[98]++;

	    if (this.castBtn.mDNS) {
	      cov_ilxslb9od.b[31][0]++;
	      cov_ilxslb9od.s[99]++;
	      this.castBtn.selectedDevice.setVolume(volume.level, function (err) {
	        cov_ilxslb9od.f[28]++;
	        cov_ilxslb9od.s[100]++;

	        if (err) {
	          cov_ilxslb9od.b[32][0]++;
	          cov_ilxslb9od.s[101]++;
	          videojs$1.log(err);
	        } else {
	          cov_ilxslb9od.b[32][1]++;
	        }
	      });
	    } else {
	      cov_ilxslb9od.b[31][1]++;
	    }

	    cov_ilxslb9od.s[102]++;
	    this.trigger('volumechange');
	  };

	  _proto.muted = function muted() {
	    cov_ilxslb9od.f[29]++;
	    cov_ilxslb9od.s[103]++;
	    return this.muted_;
	  };

	  _proto.setMuted = function setMuted(muted) {
	    var _this6 = this;

	    cov_ilxslb9od.f[30]++;
	    var volume = (cov_ilxslb9od.s[104]++, this.volume_);
	    cov_ilxslb9od.s[105]++;

	    if (muted) {
	      cov_ilxslb9od.b[33][0]++;
	      cov_ilxslb9od.s[106]++;
	      volume = 0;
	    } else {
	      cov_ilxslb9od.b[33][1]++;
	    }

	    cov_ilxslb9od.s[107]++;

	    if (this.castBtn.mDNS) {
	      cov_ilxslb9od.b[34][0]++;
	      cov_ilxslb9od.s[108]++;
	      this.castBtn.selectedDevice.setVolume(volume, function (err) {
	        cov_ilxslb9od.f[31]++;
	        cov_ilxslb9od.s[109]++;

	        if (err) {
	          cov_ilxslb9od.b[35][0]++;
	          cov_ilxslb9od.s[110]++;
	          videojs$1.log(err);
	        } else {
	          cov_ilxslb9od.b[35][1]++;
	        }

	        cov_ilxslb9od.s[111]++;

	        _this6.setVolume(volume, muted);
	      });
	    } else {
	      cov_ilxslb9od.b[34][1]++;
	      cov_ilxslb9od.s[112]++;
	      this.setVolume(volume, muted);
	    }
	  };

	  _proto.supportsFullScreen = function supportsFullScreen() {
	    cov_ilxslb9od.f[32]++;
	    cov_ilxslb9od.s[113]++;
	    return false;
	  };

	  _proto.dispose = function dispose() {
	    cov_ilxslb9od.f[33]++;
	    cov_ilxslb9od.s[114]++;

	    _Tech.prototype.dispose.call(this);
	  };

	  _proto.setPlaybackRate = function setPlaybackRate(rate) {
	    cov_ilxslb9od.f[34]++;
	    cov_ilxslb9od.s[115]++;
	    this.playbackRate_ = rate;
	  };

	  _proto.playbackRate = function playbackRate() {
	    cov_ilxslb9od.f[35]++;
	    cov_ilxslb9od.s[116]++;
	    return this.playbackRate_;
	  };

	  return ChromecastTech;
	}(Tech);

	cov_ilxslb9od.s[117]++;
	ChromecastTech.prototype.paused_ = false;
	cov_ilxslb9od.s[118]++;
	ChromecastTech.prototype.options_ = {};
	cov_ilxslb9od.s[119]++;

	ChromecastTech.isSupported = function () {
	  cov_ilxslb9od.f[36]++;
	  cov_ilxslb9od.s[120]++;
	  return true;
	};

	cov_ilxslb9od.s[121]++;
	Tech.withSourceHandlers(ChromecastTech);
	cov_ilxslb9od.s[122]++;
	ChromecastTech.nativeSourceHandler = {};
	cov_ilxslb9od.s[123]++;

	ChromecastTech.nativeSourceHandler.canPlayType = function (source) {
	  cov_ilxslb9od.f[37]++;
	  var dashTypeRE = (cov_ilxslb9od.s[124]++, /^application\/(?:dash\+xml|(x-|vnd\.apple\.)mpegurl)/i);
	  var dashExtRE = (cov_ilxslb9od.s[125]++, /^video\/(mpd|mp4|webm|m3u8)/i);
	  cov_ilxslb9od.s[126]++;

	  if (dashTypeRE.test(source)) {
	    cov_ilxslb9od.b[36][0]++;
	    cov_ilxslb9od.s[127]++;
	    return 'probably';
	  } else {
	    cov_ilxslb9od.b[36][1]++;
	    cov_ilxslb9od.s[128]++;

	    if (dashExtRE.test(source)) {
	      cov_ilxslb9od.b[37][0]++;
	      cov_ilxslb9od.s[129]++;
	      return 'maybe';
	    } else {
	      cov_ilxslb9od.b[37][1]++;
	      cov_ilxslb9od.s[130]++;
	      return '';
	    }
	  }
	};

	cov_ilxslb9od.s[131]++;

	ChromecastTech.nativeSourceHandler.canPlaySource = function (source) {
	  cov_ilxslb9od.f[38]++;
	  cov_ilxslb9od.s[132]++;

	  if (source.type) {
	    cov_ilxslb9od.b[38][0]++;
	    cov_ilxslb9od.s[133]++;
	    return ChromecastTech.nativeSourceHandler.canPlayType(source.type);
	  } else {
	    cov_ilxslb9od.b[38][1]++;
	    cov_ilxslb9od.s[134]++;

	    if (source.src) {
	      cov_ilxslb9od.b[39][0]++;
	      cov_ilxslb9od.s[135]++;
	      return ChromecastTech.nativeSourceHandler.canPlayType(source.src);
	    } else {
	      cov_ilxslb9od.b[39][1]++;
	    }
	  }

	  cov_ilxslb9od.s[136]++;
	  return '';
	};

	cov_ilxslb9od.s[137]++;

	ChromecastTech.nativeSourceHandler.handleSource = function (source, tech) {
	  cov_ilxslb9od.f[39]++;
	  cov_ilxslb9od.s[138]++;
	  tech.src(source.src);
	};

	cov_ilxslb9od.s[139]++;

	ChromecastTech.nativeSourceHandler.dispose = function () {
	  cov_ilxslb9od.f[40]++;
	};

	cov_ilxslb9od.s[140]++;
	ChromecastTech.registerSourceHandler(ChromecastTech.nativeSourceHandler);
	cov_ilxslb9od.s[141]++;
	ChromecastTech.prototype.featuresVolumeControl = true;
	cov_ilxslb9od.s[142]++;
	ChromecastTech.prototype.featuresPlaybackRate = false;
	cov_ilxslb9od.s[143]++;
	ChromecastTech.prototype.movingMediaElementInDOM = true;
	cov_ilxslb9od.s[144]++;
	ChromecastTech.prototype.featuresTimeupdateEvents = true;
	cov_ilxslb9od.s[145]++;
	ChromecastTech.prototype.featuresProgressEvents = true;
	cov_ilxslb9od.s[146]++;
	ChromecastTech.prototype.featuresNativeTextTracks = false;
	cov_ilxslb9od.s[147]++;
	ChromecastTech.prototype.featuresNativeAudioTracks = false;
	cov_ilxslb9od.s[148]++;
	ChromecastTech.prototype.featuresNativeVideoTracks = false;
	cov_ilxslb9od.s[149]++;
	videojs$1.options.chromecast = {};
	cov_ilxslb9od.s[150]++;

	if (typeof videojs$1.getTech('ChromecastTech') === 'undefined') {
	  cov_ilxslb9od.b[40][0]++;
	  cov_ilxslb9od.s[151]++;
	  videojs$1.registerTech('ChromecastTech', ChromecastTech);
	} else {
	  cov_ilxslb9od.b[40][1]++;
	}

	cov_ilxslb9od.s[152]++;

	if (typeof Tech.getTech('ChromecastTech') === 'undefined') {
	  cov_ilxslb9od.b[41][0]++;
	  cov_ilxslb9od.s[153]++;
	  Tech.registerTech('ChromecastTech', ChromecastTech);
	} else {
	  cov_ilxslb9od.b[41][1]++;
	}

	var version = "0.1.2";

	var cov_279kbuek1j = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/plugin.js',
	      hash = '60d30510e40e0226aa8cf0abbdf74b846f1cb301',
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
	          line: 42,
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
	          column: 2
	        },
	        end: {
	          line: 19,
	          column: 3
	        }
	      },
	      '3': {
	        start: {
	          line: 18,
	          column: 4
	        },
	        end: {
	          line: 18,
	          column: 10
	        }
	      },
	      '4': {
	        start: {
	          line: 21,
	          column: 23
	        },
	        end: {
	          line: 21,
	          column: 114
	        }
	      },
	      '5': {
	        start: {
	          line: 22,
	          column: 2
	        },
	        end: {
	          line: 32,
	          column: 4
	        }
	      },
	      '6': {
	        start: {
	          line: 23,
	          column: 4
	        },
	        end: {
	          line: 25,
	          column: 5
	        }
	      },
	      '7': {
	        start: {
	          line: 24,
	          column: 6
	        },
	        end: {
	          line: 24,
	          column: 37
	        }
	      },
	      '8': {
	        start: {
	          line: 27,
	          column: 4
	        },
	        end: {
	          line: 31,
	          column: 5
	        }
	      },
	      '9': {
	        start: {
	          line: 28,
	          column: 6
	        },
	        end: {
	          line: 28,
	          column: 23
	        }
	      },
	      '10': {
	        start: {
	          line: 30,
	          column: 6
	        },
	        end: {
	          line: 30,
	          column: 52
	        }
	      },
	      '11': {
	        start: {
	          line: 34,
	          column: 2
	        },
	        end: {
	          line: 41,
	          column: 3
	        }
	      },
	      '12': {
	        start: {
	          line: 35,
	          column: 20
	        },
	        end: {
	          line: 35,
	          column: 35
	        }
	      },
	      '13': {
	        start: {
	          line: 36,
	          column: 29
	        },
	        end: {
	          line: 36,
	          column: 79
	        }
	      },
	      '14': {
	        start: {
	          line: 38,
	          column: 29
	        },
	        end: {
	          line: 38,
	          column: 60
	        }
	      },
	      '15': {
	        start: {
	          line: 40,
	          column: 29
	        },
	        end: {
	          line: 40,
	          column: 60
	        }
	      },
	      '16': {
	        start: {
	          line: 44,
	          column: 23
	        },
	        end: {
	          line: 44,
	          column: 63
	        }
	      },
	      '17': {
	        start: {
	          line: 46,
	          column: 0
	        },
	        end: {
	          line: 48,
	          column: 1
	        }
	      },
	      '18': {
	        start: {
	          line: 47,
	          column: 2
	        },
	        end: {
	          line: 47,
	          column: 42
	        }
	      },
	      '19': {
	        start: {
	          line: 50,
	          column: 0
	        },
	        end: {
	          line: 50,
	          column: 28
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 14,
	            column: 19
	          },
	          end: {
	            line: 14,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 14,
	            column: 38
	          },
	          end: {
	            line: 42,
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
	            column: 25
	          },
	          end: {
	            line: 22,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 22,
	            column: 40
	          },
	          end: {
	            line: 32,
	            column: 3
	          }
	        },
	        line: 22
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 17,
	            column: 2
	          },
	          end: {
	            line: 19,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 17,
	            column: 2
	          },
	          end: {
	            line: 19,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 17,
	            column: 2
	          },
	          end: {
	            line: 19,
	            column: 3
	          }
	        }],
	        line: 17
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 17,
	            column: 6
	          },
	          end: {
	            line: 17,
	            column: 65
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 17,
	            column: 6
	          },
	          end: {
	            line: 17,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 17,
	            column: 28
	          },
	          end: {
	            line: 17,
	            column: 35
	          }
	        }, {
	          start: {
	            line: 17,
	            column: 39
	          },
	          end: {
	            line: 17,
	            column: 64
	          }
	        }],
	        line: 17
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 23,
	            column: 4
	          },
	          end: {
	            line: 25,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 23,
	            column: 4
	          },
	          end: {
	            line: 25,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 23,
	            column: 4
	          },
	          end: {
	            line: 25,
	            column: 5
	          }
	        }],
	        line: 23
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 27,
	            column: 4
	          },
	          end: {
	            line: 31,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 27,
	            column: 4
	          },
	          end: {
	            line: 31,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 27,
	            column: 4
	          },
	          end: {
	            line: 31,
	            column: 5
	          }
	        }],
	        line: 27
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 34,
	            column: 2
	          },
	          end: {
	            line: 41,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 34,
	            column: 2
	          },
	          end: {
	            line: 41,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 34,
	            column: 2
	          },
	          end: {
	            line: 41,
	            column: 3
	          }
	        }],
	        line: 34
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 44,
	            column: 23
	          },
	          end: {
	            line: 44,
	            column: 63
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
	            column: 45
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 49
	          },
	          end: {
	            line: 44,
	            column: 63
	          }
	        }],
	        line: 44
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 46,
	            column: 0
	          },
	          end: {
	            line: 48,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 46,
	            column: 0
	          },
	          end: {
	            line: 48,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 46,
	            column: 0
	          },
	          end: {
	            line: 48,
	            column: 1
	          }
	        }],
	        line: 46
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
	      '1': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0]
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

	  var allowedOptions = (cov_279kbuek1j.s[4]++, ['appId', 'altSource', 'metadata', 'searchAttempts', 'timePerAttempt', 'onStop', 'onError']);
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
	  cov_279kbuek1j.s[11]++;

	  if (options.videojs != undefined) {
	    cov_279kbuek1j.b[4][0]++;
	    var videojs = (cov_279kbuek1j.s[12]++, options.videojs);
	    var ChromecastTech = (cov_279kbuek1j.s[13]++, require('../src/js/tech/chromecast-tech')(videojs));
	    var googleChromecast = (cov_279kbuek1j.s[14]++, new Chromecast(player, options));
	  } else {
	    cov_279kbuek1j.b[4][1]++;
	    var googleChromecast = (cov_279kbuek1j.s[15]++, new Chromecast(player, options));
	  }
	};

	var registerPlugin = (cov_279kbuek1j.s[16]++, (cov_279kbuek1j.b[5][0]++, videojs$1.registerPlugin) || (cov_279kbuek1j.b[5][1]++, videojs$1.plugin));
	cov_279kbuek1j.s[17]++;

	if (typeof videojs$1.getPlugin('chromecast') === 'undefined') {
	  cov_279kbuek1j.b[6][0]++;
	  cov_279kbuek1j.s[18]++;
	  registerPlugin('chromecast', chromecast);
	} else {
	  cov_279kbuek1j.b[6][1]++;
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

}(QUnit, sinon, videojs, videojs));
