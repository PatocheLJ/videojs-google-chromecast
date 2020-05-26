/*! @name videojs-google-chromecast @version 0.0.8 @license UNLICENSED */
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
	      hash = '318e5a9bb37090decc5b365b9ef0e37345aa6de4',
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
	          line: 106,
	          column: 50
	        }
	      },
	      '55': {
	        start: {
	          line: 108,
	          column: 25
	        },
	        end: {
	          line: 108,
	          column: 57
	        }
	      },
	      '56': {
	        start: {
	          line: 110,
	          column: 12
	        },
	        end: {
	          line: 115,
	          column: 14
	        }
	      },
	      '57': {
	        start: {
	          line: 111,
	          column: 16
	        },
	        end: {
	          line: 114,
	          column: 17
	        }
	      },
	      '58': {
	        start: {
	          line: 112,
	          column: 20
	        },
	        end: {
	          line: 112,
	          column: 48
	        }
	      },
	      '59': {
	        start: {
	          line: 113,
	          column: 20
	        },
	        end: {
	          line: 113,
	          column: 227
	        }
	      },
	      '60': {
	        start: {
	          line: 117,
	          column: 12
	        },
	        end: {
	          line: 117,
	          column: 52
	        }
	      },
	      '61': {
	        start: {
	          line: 119,
	          column: 12
	        },
	        end: {
	          line: 119,
	          column: 31
	        }
	      },
	      '62': {
	        start: {
	          line: 121,
	          column: 16
	        },
	        end: {
	          line: 135,
	          column: 17
	        }
	      },
	      '63': {
	        start: {
	          line: 122,
	          column: 20
	        },
	        end: {
	          line: 132,
	          column: 21
	        }
	      },
	      '64': {
	        start: {
	          line: 123,
	          column: 24
	        },
	        end: {
	          line: 123,
	          column: 78
	        }
	      },
	      '65': {
	        start: {
	          line: 124,
	          column: 24
	        },
	        end: {
	          line: 124,
	          column: 116
	        }
	      },
	      '66': {
	        start: {
	          line: 126,
	          column: 24
	        },
	        end: {
	          line: 126,
	          column: 51
	        }
	      },
	      '67': {
	        start: {
	          line: 128,
	          column: 24
	        },
	        end: {
	          line: 128,
	          column: 74
	        }
	      },
	      '68': {
	        start: {
	          line: 130,
	          column: 24
	        },
	        end: {
	          line: 130,
	          column: 36
	        }
	      },
	      '69': {
	        start: {
	          line: 131,
	          column: 24
	        },
	        end: {
	          line: 131,
	          column: 93
	        }
	      },
	      '70': {
	        start: {
	          line: 134,
	          column: 20
	        },
	        end: {
	          line: 134,
	          column: 54
	        }
	      },
	      '71': {
	        start: {
	          line: 138,
	          column: 12
	        },
	        end: {
	          line: 138,
	          column: 65
	        }
	      },
	      '72': {
	        start: {
	          line: 139,
	          column: 12
	        },
	        end: {
	          line: 139,
	          column: 102
	        }
	      },
	      '73': {
	        start: {
	          line: 140,
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
	          column: 71
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
	          column: 71
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
	          column: 20
	        },
	        end: {
	          line: 310,
	          column: 24
	        }
	      },
	      '165': {
	        start: {
	          line: 311,
	          column: 27
	        },
	        end: {
	          line: 311,
	          column: 77
	        }
	      },
	      '166': {
	        start: {
	          line: 312,
	          column: 8
	        },
	        end: {
	          line: 336,
	          column: 9
	        }
	      },
	      '167': {
	        start: {
	          line: 313,
	          column: 32
	        },
	        end: {
	          line: 313,
	          column: 64
	        }
	      },
	      '168': {
	        start: {
	          line: 314,
	          column: 12
	        },
	        end: {
	          line: 314,
	          column: 100
	        }
	      },
	      '169': {
	        start: {
	          line: 315,
	          column: 12
	        },
	        end: {
	          line: 315,
	          column: 56
	        }
	      },
	      '170': {
	        start: {
	          line: 316,
	          column: 12
	        },
	        end: {
	          line: 329,
	          column: 14
	        }
	      },
	      '171': {
	        start: {
	          line: 317,
	          column: 16
	        },
	        end: {
	          line: 317,
	          column: 35
	        }
	      },
	      '172': {
	        start: {
	          line: 318,
	          column: 16
	        },
	        end: {
	          line: 328,
	          column: 18
	        }
	      },
	      '173': {
	        start: {
	          line: 319,
	          column: 20
	        },
	        end: {
	          line: 319,
	          column: 62
	        }
	      },
	      '174': {
	        start: {
	          line: 320,
	          column: 20
	        },
	        end: {
	          line: 320,
	          column: 100
	        }
	      },
	      '175': {
	        start: {
	          line: 321,
	          column: 20
	        },
	        end: {
	          line: 321,
	          column: 114
	        }
	      },
	      '176': {
	        start: {
	          line: 322,
	          column: 40
	        },
	        end: {
	          line: 322,
	          column: 85
	        }
	      },
	      '177': {
	        start: {
	          line: 323,
	          column: 20
	        },
	        end: {
	          line: 327,
	          column: 21
	        }
	      },
	      '178': {
	        start: {
	          line: 324,
	          column: 24
	        },
	        end: {
	          line: 326,
	          column: 29
	        }
	      },
	      '179': {
	        start: {
	          line: 325,
	          column: 28
	        },
	        end: {
	          line: 325,
	          column: 104
	        }
	      },
	      '180': {
	        start: {
	          line: 331,
	          column: 12
	        },
	        end: {
	          line: 335,
	          column: 13
	        }
	      },
	      '181': {
	        start: {
	          line: 332,
	          column: 16
	        },
	        end: {
	          line: 332,
	          column: 58
	        }
	      },
	      '182': {
	        start: {
	          line: 333,
	          column: 33
	        },
	        end: {
	          line: 333,
	          column: 94
	        }
	      },
	      '183': {
	        start: {
	          line: 334,
	          column: 16
	        },
	        end: {
	          line: 334,
	          column: 840
	        }
	      },
	      '184': {
	        start: {
	          line: 340,
	          column: 17
	        },
	        end: {
	          line: 340,
	          column: 58
	        }
	      },
	      '185': {
	        start: {
	          line: 341,
	          column: 21
	        },
	        end: {
	          line: 341,
	          column: 39
	        }
	      },
	      '186': {
	        start: {
	          line: 342,
	          column: 8
	        },
	        end: {
	          line: 342,
	          column: 46
	        }
	      },
	      '187': {
	        start: {
	          line: 343,
	          column: 8
	        },
	        end: {
	          line: 343,
	          column: 41
	        }
	      },
	      '188': {
	        start: {
	          line: 347,
	          column: 8
	        },
	        end: {
	          line: 349,
	          column: 9
	        }
	      },
	      '189': {
	        start: {
	          line: 348,
	          column: 12
	        },
	        end: {
	          line: 348,
	          column: 80
	        }
	      },
	      '190': {
	        start: {
	          line: 353,
	          column: 21
	        },
	        end: {
	          line: 353,
	          column: 32
	        }
	      },
	      '191': {
	        start: {
	          line: 354,
	          column: 20
	        },
	        end: {
	          line: 354,
	          column: 24
	        }
	      },
	      '192': {
	        start: {
	          line: 356,
	          column: 16
	        },
	        end: {
	          line: 356,
	          column: 58
	        }
	      },
	      '193': {
	        start: {
	          line: 357,
	          column: 8
	        },
	        end: {
	          line: 359,
	          column: 9
	        }
	      },
	      '194': {
	        start: {
	          line: 358,
	          column: 12
	        },
	        end: {
	          line: 358,
	          column: 34
	        }
	      },
	      '195': {
	        start: {
	          line: 361,
	          column: 8
	        },
	        end: {
	          line: 365,
	          column: 9
	        }
	      },
	      '196': {
	        start: {
	          line: 362,
	          column: 12
	        },
	        end: {
	          line: 364,
	          column: 13
	        }
	      },
	      '197': {
	        start: {
	          line: 363,
	          column: 16
	        },
	        end: {
	          line: 363,
	          column: 55
	        }
	      },
	      '198': {
	        start: {
	          line: 366,
	          column: 8
	        },
	        end: {
	          line: 387,
	          column: 9
	        }
	      },
	      '199': {
	        start: {
	          line: 367,
	          column: 12
	        },
	        end: {
	          line: 367,
	          column: 35
	        }
	      },
	      '200': {
	        start: {
	          line: 368,
	          column: 12
	        },
	        end: {
	          line: 368,
	          column: 38
	        }
	      },
	      '201': {
	        start: {
	          line: 369,
	          column: 12
	        },
	        end: {
	          line: 386,
	          column: 14
	        }
	      },
	      '202': {
	        start: {
	          line: 370,
	          column: 16
	        },
	        end: {
	          line: 385,
	          column: 17
	        }
	      },
	      '203': {
	        start: {
	          line: 371,
	          column: 20
	        },
	        end: {
	          line: 371,
	          column: 36
	        }
	      },
	      '204': {
	        start: {
	          line: 373,
	          column: 20
	        },
	        end: {
	          line: 376,
	          column: 21
	        }
	      },
	      '205': {
	        start: {
	          line: 374,
	          column: 24
	        },
	        end: {
	          line: 374,
	          column: 46
	        }
	      },
	      '206': {
	        start: {
	          line: 375,
	          column: 24
	        },
	        end: {
	          line: 375,
	          column: 116
	        }
	      },
	      '207': {
	        start: {
	          line: 377,
	          column: 20
	        },
	        end: {
	          line: 377,
	          column: 45
	        }
	      },
	      '208': {
	        start: {
	          line: 378,
	          column: 20
	        },
	        end: {
	          line: 382,
	          column: 23
	        }
	      },
	      '209': {
	        start: {
	          line: 383,
	          column: 20
	        },
	        end: {
	          line: 383,
	          column: 38
	        }
	      },
	      '210': {
	        start: {
	          line: 384,
	          column: 20
	        },
	        end: {
	          line: 384,
	          column: 39
	        }
	      },
	      '211': {
	        start: {
	          line: 391,
	          column: 8
	        },
	        end: {
	          line: 391,
	          column: 20
	        }
	      },
	      '212': {
	        start: {
	          line: 393,
	          column: 25
	        },
	        end: {
	          line: 393,
	          column: 81
	        }
	      },
	      '213': {
	        start: {
	          line: 394,
	          column: 8
	        },
	        end: {
	          line: 396,
	          column: 9
	        }
	      },
	      '214': {
	        start: {
	          line: 395,
	          column: 12
	        },
	        end: {
	          line: 395,
	          column: 48
	        }
	      },
	      '215': {
	        start: {
	          line: 398,
	          column: 8
	        },
	        end: {
	          line: 403,
	          column: 9
	        }
	      },
	      '216': {
	        start: {
	          line: 399,
	          column: 12
	        },
	        end: {
	          line: 399,
	          column: 86
	        }
	      },
	      '217': {
	        start: {
	          line: 400,
	          column: 12
	        },
	        end: {
	          line: 402,
	          column: 13
	        }
	      },
	      '218': {
	        start: {
	          line: 401,
	          column: 16
	        },
	        end: {
	          line: 401,
	          column: 52
	        }
	      },
	      '219': {
	        start: {
	          line: 407,
	          column: 8
	        },
	        end: {
	          line: 407,
	          column: 20
	        }
	      },
	      '220': {
	        start: {
	          line: 409,
	          column: 25
	        },
	        end: {
	          line: 409,
	          column: 29
	        }
	      },
	      '221': {
	        start: {
	          line: 410,
	          column: 8
	        },
	        end: {
	          line: 414,
	          column: 9
	        }
	      },
	      '222': {
	        start: {
	          line: 411,
	          column: 12
	        },
	        end: {
	          line: 411,
	          column: 86
	        }
	      },
	      '223': {
	        start: {
	          line: 413,
	          column: 12
	        },
	        end: {
	          line: 413,
	          column: 81
	        }
	      },
	      '224': {
	        start: {
	          line: 416,
	          column: 8
	        },
	        end: {
	          line: 418,
	          column: 9
	        }
	      },
	      '225': {
	        start: {
	          line: 417,
	          column: 12
	        },
	        end: {
	          line: 417,
	          column: 49
	        }
	      },
	      '226': {
	        start: {
	          line: 422,
	          column: 8
	        },
	        end: {
	          line: 424,
	          column: 9
	        }
	      },
	      '227': {
	        start: {
	          line: 423,
	          column: 12
	        },
	        end: {
	          line: 423,
	          column: 76
	        }
	      },
	      '228': {
	        start: {
	          line: 425,
	          column: 8
	        },
	        end: {
	          line: 425,
	          column: 67
	        }
	      },
	      '229': {
	        start: {
	          line: 429,
	          column: 8
	        },
	        end: {
	          line: 429,
	          column: 37
	        }
	      },
	      '230': {
	        start: {
	          line: 429,
	          column: 29
	        },
	        end: {
	          line: 429,
	          column: 35
	        }
	      },
	      '231': {
	        start: {
	          line: 431,
	          column: 8
	        },
	        end: {
	          line: 433,
	          column: 9
	        }
	      },
	      '232': {
	        start: {
	          line: 432,
	          column: 12
	        },
	        end: {
	          line: 432,
	          column: 30
	        }
	      },
	      '233': {
	        start: {
	          line: 434,
	          column: 8
	        },
	        end: {
	          line: 434,
	          column: 26
	        }
	      },
	      '234': {
	        start: {
	          line: 438,
	          column: 21
	        },
	        end: {
	          line: 438,
	          column: 25
	        }
	      },
	      '235': {
	        start: {
	          line: 439,
	          column: 8
	        },
	        end: {
	          line: 449,
	          column: 9
	        }
	      },
	      '236': {
	        start: {
	          line: 440,
	          column: 12
	        },
	        end: {
	          line: 446,
	          column: 13
	        }
	      },
	      '237': {
	        start: {
	          line: 441,
	          column: 16
	        },
	        end: {
	          line: 443,
	          column: 17
	        }
	      },
	      '238': {
	        start: {
	          line: 442,
	          column: 20
	        },
	        end: {
	          line: 442,
	          column: 54
	        }
	      },
	      '239': {
	        start: {
	          line: 448,
	          column: 12
	        },
	        end: {
	          line: 448,
	          column: 49
	        }
	      },
	      '240': {
	        start: {
	          line: 450,
	          column: 8
	        },
	        end: {
	          line: 450,
	          column: 29
	        }
	      },
	      '241': {
	        start: {
	          line: 452,
	          column: 8
	        },
	        end: {
	          line: 452,
	          column: 27
	        }
	      },
	      '242': {
	        start: {
	          line: 456,
	          column: 8
	        },
	        end: {
	          line: 456,
	          column: 55
	        }
	      },
	      '243': {
	        start: {
	          line: 458,
	          column: 8
	        },
	        end: {
	          line: 469,
	          column: 9
	        }
	      },
	      '244': {
	        start: {
	          line: 459,
	          column: 12
	        },
	        end: {
	          line: 466,
	          column: 25
	        }
	      },
	      '245': {
	        start: {
	          line: 460,
	          column: 16
	        },
	        end: {
	          line: 465,
	          column: 17
	        }
	      },
	      '246': {
	        start: {
	          line: 461,
	          column: 20
	        },
	        end: {
	          line: 461,
	          column: 46
	        }
	      },
	      '247': {
	        start: {
	          line: 462,
	          column: 20
	        },
	        end: {
	          line: 462,
	          column: 44
	        }
	      },
	      '248': {
	        start: {
	          line: 464,
	          column: 20
	        },
	        end: {
	          line: 464,
	          column: 43
	        }
	      },
	      '249': {
	        start: {
	          line: 468,
	          column: 12
	        },
	        end: {
	          line: 468,
	          column: 70
	        }
	      },
	      '250': {
	        start: {
	          line: 477,
	          column: 8
	        },
	        end: {
	          line: 504,
	          column: 9
	        }
	      },
	      '251': {
	        start: {
	          line: 480,
	          column: 32
	        },
	        end: {
	          line: 480,
	          column: 92
	        }
	      },
	      '252': {
	        start: {
	          line: 481,
	          column: 16
	        },
	        end: {
	          line: 485,
	          column: 17
	        }
	      },
	      '253': {
	        start: {
	          line: 482,
	          column: 20
	        },
	        end: {
	          line: 482,
	          column: 41
	        }
	      },
	      '254': {
	        start: {
	          line: 483,
	          column: 20
	        },
	        end: {
	          line: 483,
	          column: 54
	        }
	      },
	      '255': {
	        start: {
	          line: 484,
	          column: 20
	        },
	        end: {
	          line: 484,
	          column: 26
	        }
	      },
	      '256': {
	        start: {
	          line: 487,
	          column: 30
	        },
	        end: {
	          line: 487,
	          column: 55
	        }
	      },
	      '257': {
	        start: {
	          line: 488,
	          column: 16
	        },
	        end: {
	          line: 492,
	          column: 17
	        }
	      },
	      '258': {
	        start: {
	          line: 489,
	          column: 20
	        },
	        end: {
	          line: 489,
	          column: 41
	        }
	      },
	      '259': {
	        start: {
	          line: 490,
	          column: 20
	        },
	        end: {
	          line: 490,
	          column: 54
	        }
	      },
	      '260': {
	        start: {
	          line: 491,
	          column: 20
	        },
	        end: {
	          line: 491,
	          column: 26
	        }
	      },
	      '261': {
	        start: {
	          line: 494,
	          column: 16
	        },
	        end: {
	          line: 494,
	          column: 41
	        }
	      },
	      '262': {
	        start: {
	          line: 496,
	          column: 16
	        },
	        end: {
	          line: 496,
	          column: 44
	        }
	      },
	      '263': {
	        start: {
	          line: 498,
	          column: 16
	        },
	        end: {
	          line: 500,
	          column: 17
	        }
	      },
	      '264': {
	        start: {
	          line: 499,
	          column: 20
	        },
	        end: {
	          line: 499,
	          column: 54
	        }
	      },
	      '265': {
	        start: {
	          line: 502,
	          column: 16
	        },
	        end: {
	          line: 502,
	          column: 50
	        }
	      },
	      '266': {
	        start: {
	          line: 506,
	          column: 8
	        },
	        end: {
	          line: 511,
	          column: 9
	        }
	      },
	      '267': {
	        start: {
	          line: 513,
	          column: 8
	        },
	        end: {
	          line: 522,
	          column: 9
	        }
	      },
	      '268': {
	        start: {
	          line: 516,
	          column: 16
	        },
	        end: {
	          line: 520,
	          column: 17
	        }
	      },
	      '269': {
	        start: {
	          line: 517,
	          column: 20
	        },
	        end: {
	          line: 517,
	          column: 46
	        }
	      },
	      '270': {
	        start: {
	          line: 518,
	          column: 23
	        },
	        end: {
	          line: 520,
	          column: 17
	        }
	      },
	      '271': {
	        start: {
	          line: 519,
	          column: 20
	        },
	        end: {
	          line: 519,
	          column: 45
	        }
	      },
	      '272': {
	        start: {
	          line: 524,
	          column: 8
	        },
	        end: {
	          line: 533,
	          column: 9
	        }
	      },
	      '273': {
	        start: {
	          line: 527,
	          column: 16
	        },
	        end: {
	          line: 531,
	          column: 17
	        }
	      },
	      '274': {
	        start: {
	          line: 528,
	          column: 20
	        },
	        end: {
	          line: 528,
	          column: 45
	        }
	      },
	      '275': {
	        start: {
	          line: 530,
	          column: 20
	        },
	        end: {
	          line: 530,
	          column: 47
	        }
	      },
	      '276': {
	        start: {
	          line: 535,
	          column: 8
	        },
	        end: {
	          line: 541,
	          column: 9
	        }
	      },
	      '277': {
	        start: {
	          line: 538,
	          column: 32
	        },
	        end: {
	          line: 538,
	          column: 61
	        }
	      },
	      '278': {
	        start: {
	          line: 539,
	          column: 16
	        },
	        end: {
	          line: 539,
	          column: 49
	        }
	      },
	      '279': {
	        start: {
	          line: 543,
	          column: 8
	        },
	        end: {
	          line: 548,
	          column: 9
	        }
	      },
	      '280': {
	        start: {
	          line: 546,
	          column: 16
	        },
	        end: {
	          line: 546,
	          column: 48
	        }
	      },
	      '281': {
	        start: {
	          line: 550,
	          column: 8
	        },
	        end: {
	          line: 555,
	          column: 9
	        }
	      },
	      '282': {
	        start: {
	          line: 553,
	          column: 16
	        },
	        end: {
	          line: 553,
	          column: 56
	        }
	      },
	      '283': {
	        start: {
	          line: 557,
	          column: 8
	        },
	        end: {
	          line: 562,
	          column: 9
	        }
	      },
	      '284': {
	        start: {
	          line: 560,
	          column: 16
	        },
	        end: {
	          line: 560,
	          column: 63
	        }
	      },
	      '285': {
	        start: {
	          line: 564,
	          column: 8
	        },
	        end: {
	          line: 569,
	          column: 9
	        }
	      },
	      '286': {
	        start: {
	          line: 567,
	          column: 16
	        },
	        end: {
	          line: 567,
	          column: 54
	        }
	      },
	      '287': {
	        start: {
	          line: 571,
	          column: 8
	        },
	        end: {
	          line: 577,
	          column: 9
	        }
	      },
	      '288': {
	        start: {
	          line: 574,
	          column: 16
	        },
	        end: {
	          line: 574,
	          column: 58
	        }
	      },
	      '289': {
	        start: {
	          line: 575,
	          column: 16
	        },
	        end: {
	          line: 575,
	          column: 52
	        }
	      },
	      '290': {
	        start: {
	          line: 582,
	          column: 27
	        },
	        end: {
	          line: 582,
	          column: 29
	        }
	      },
	      '291': {
	        start: {
	          line: 584,
	          column: 8
	        },
	        end: {
	          line: 589,
	          column: 20
	        }
	      },
	      '292': {
	        start: {
	          line: 585,
	          column: 12
	        },
	        end: {
	          line: 588,
	          column: 13
	        }
	      },
	      '293': {
	        start: {
	          line: 586,
	          column: 16
	        },
	        end: {
	          line: 586,
	          column: 57
	        }
	      },
	      '294': {
	        start: {
	          line: 587,
	          column: 16
	        },
	        end: {
	          line: 587,
	          column: 35
	        }
	      },
	      '295': {
	        start: {
	          line: 591,
	          column: 8
	        },
	        end: {
	          line: 596,
	          column: 20
	        }
	      },
	      '296': {
	        start: {
	          line: 592,
	          column: 12
	        },
	        end: {
	          line: 595,
	          column: 13
	        }
	      },
	      '297': {
	        start: {
	          line: 593,
	          column: 16
	        },
	        end: {
	          line: 593,
	          column: 57
	        }
	      },
	      '298': {
	        start: {
	          line: 594,
	          column: 16
	        },
	        end: {
	          line: 594,
	          column: 36
	        }
	      },
	      '299': {
	        start: {
	          line: 598,
	          column: 8
	        },
	        end: {
	          line: 600,
	          column: 20
	        }
	      },
	      '300': {
	        start: {
	          line: 599,
	          column: 12
	        },
	        end: {
	          line: 599,
	          column: 46
	        }
	      },
	      '301': {
	        start: {
	          line: 603,
	          column: 8
	        },
	        end: {
	          line: 629,
	          column: 9
	        }
	      },
	      '302': {
	        start: {
	          line: 604,
	          column: 12
	        },
	        end: {
	          line: 604,
	          column: 30
	        }
	      },
	      '303': {
	        start: {
	          line: 605,
	          column: 12
	        },
	        end: {
	          line: 628,
	          column: 25
	        }
	      },
	      '304': {
	        start: {
	          line: 606,
	          column: 16
	        },
	        end: {
	          line: 606,
	          column: 73
	        }
	      },
	      '305': {
	        start: {
	          line: 608,
	          column: 32
	        },
	        end: {
	          line: 608,
	          column: 81
	        }
	      },
	      '306': {
	        start: {
	          line: 609,
	          column: 16
	        },
	        end: {
	          line: 609,
	          column: 59
	        }
	      },
	      '307': {
	        start: {
	          line: 611,
	          column: 16
	        },
	        end: {
	          line: 615,
	          column: 17
	        }
	      },
	      '308': {
	        start: {
	          line: 612,
	          column: 20
	        },
	        end: {
	          line: 612,
	          column: 44
	        }
	      },
	      '309': {
	        start: {
	          line: 614,
	          column: 20
	        },
	        end: {
	          line: 614,
	          column: 43
	        }
	      },
	      '310': {
	        start: {
	          line: 617,
	          column: 16
	        },
	        end: {
	          line: 627,
	          column: 17
	        }
	      },
	      '311': {
	        start: {
	          line: 619,
	          column: 24
	        },
	        end: {
	          line: 619,
	          column: 43
	        }
	      },
	      '312': {
	        start: {
	          line: 620,
	          column: 24
	        },
	        end: {
	          line: 620,
	          column: 58
	        }
	      },
	      '313': {
	        start: {
	          line: 623,
	          column: 24
	        },
	        end: {
	          line: 623,
	          column: 60
	        }
	      },
	      '314': {
	        start: {
	          line: 624,
	          column: 24
	        },
	        end: {
	          line: 624,
	          column: 98
	        }
	      },
	      '315': {
	        start: {
	          line: 625,
	          column: 24
	        },
	        end: {
	          line: 625,
	          column: 58
	        }
	      },
	      '316': {
	        start: {
	          line: 631,
	          column: 8
	        },
	        end: {
	          line: 646,
	          column: 20
	        }
	      },
	      '317': {
	        start: {
	          line: 632,
	          column: 28
	        },
	        end: {
	          line: 632,
	          column: 88
	        }
	      },
	      '318': {
	        start: {
	          line: 633,
	          column: 12
	        },
	        end: {
	          line: 633,
	          column: 38
	        }
	      },
	      '319': {
	        start: {
	          line: 633,
	          column: 26
	        },
	        end: {
	          line: 633,
	          column: 38
	        }
	      },
	      '320': {
	        start: {
	          line: 635,
	          column: 26
	        },
	        end: {
	          line: 635,
	          column: 51
	        }
	      },
	      '321': {
	        start: {
	          line: 636,
	          column: 12
	        },
	        end: {
	          line: 636,
	          column: 36
	        }
	      },
	      '322': {
	        start: {
	          line: 636,
	          column: 24
	        },
	        end: {
	          line: 636,
	          column: 36
	        }
	      },
	      '323': {
	        start: {
	          line: 638,
	          column: 12
	        },
	        end: {
	          line: 640,
	          column: 13
	        }
	      },
	      '324': {
	        start: {
	          line: 639,
	          column: 16
	        },
	        end: {
	          line: 639,
	          column: 28
	        }
	      },
	      '325': {
	        start: {
	          line: 642,
	          column: 12
	        },
	        end: {
	          line: 642,
	          column: 37
	        }
	      },
	      '326': {
	        start: {
	          line: 645,
	          column: 12
	        },
	        end: {
	          line: 645,
	          column: 23
	        }
	      },
	      '327': {
	        start: {
	          line: 652,
	          column: 8
	        },
	        end: {
	          line: 654,
	          column: 20
	        }
	      },
	      '328': {
	        start: {
	          line: 653,
	          column: 12
	        },
	        end: {
	          line: 653,
	          column: 48
	        }
	      },
	      '329': {
	        start: {
	          line: 660,
	          column: 8
	        },
	        end: {
	          line: 662,
	          column: 20
	        }
	      },
	      '330': {
	        start: {
	          line: 661,
	          column: 12
	        },
	        end: {
	          line: 661,
	          column: 45
	        }
	      },
	      '331': {
	        start: {
	          line: 664,
	          column: 8
	        },
	        end: {
	          line: 696,
	          column: 20
	        }
	      },
	      '332': {
	        start: {
	          line: 665,
	          column: 32
	        },
	        end: {
	          line: 665,
	          column: 92
	        }
	      },
	      '333': {
	        start: {
	          line: 666,
	          column: 12
	        },
	        end: {
	          line: 695,
	          column: 13
	        }
	      },
	      '334': {
	        start: {
	          line: 667,
	          column: 30
	        },
	        end: {
	          line: 667,
	          column: 59
	        }
	      },
	      '335': {
	        start: {
	          line: 668,
	          column: 34
	        },
	        end: {
	          line: 668,
	          column: 45
	        }
	      },
	      '336': {
	        start: {
	          line: 670,
	          column: 16
	        },
	        end: {
	          line: 677,
	          column: 17
	        }
	      },
	      '337': {
	        start: {
	          line: 671,
	          column: 37
	        },
	        end: {
	          line: 671,
	          column: 61
	        }
	      },
	      '338': {
	        start: {
	          line: 672,
	          column: 46
	        },
	        end: {
	          line: 672,
	          column: 77
	        }
	      },
	      '339': {
	        start: {
	          line: 673,
	          column: 20
	        },
	        end: {
	          line: 673,
	          column: 103
	        }
	      },
	      '340': {
	        start: {
	          line: 674,
	          column: 20
	        },
	        end: {
	          line: 674,
	          column: 69
	        }
	      },
	      '341': {
	        start: {
	          line: 675,
	          column: 40
	        },
	        end: {
	          line: 675,
	          column: 67
	        }
	      },
	      '342': {
	        start: {
	          line: 676,
	          column: 20
	        },
	        end: {
	          line: 676,
	          column: 78
	        }
	      },
	      '343': {
	        start: {
	          line: 681,
	          column: 16
	        },
	        end: {
	          line: 681,
	          column: 42
	        }
	      },
	      '344': {
	        start: {
	          line: 683,
	          column: 16
	        },
	        end: {
	          line: 683,
	          column: 36
	        }
	      },
	      '345': {
	        start: {
	          line: 684,
	          column: 29
	        },
	        end: {
	          line: 684,
	          column: 55
	        }
	      },
	      '346': {
	        start: {
	          line: 685,
	          column: 16
	        },
	        end: {
	          line: 685,
	          column: 45
	        }
	      },
	      '347': {
	        start: {
	          line: 686,
	          column: 16
	        },
	        end: {
	          line: 686,
	          column: 63
	        }
	      },
	      '348': {
	        start: {
	          line: 687,
	          column: 16
	        },
	        end: {
	          line: 691,
	          column: 17
	        }
	      },
	      '349': {
	        start: {
	          line: 688,
	          column: 20
	        },
	        end: {
	          line: 690,
	          column: 22
	        }
	      },
	      '350': {
	        start: {
	          line: 689,
	          column: 24
	        },
	        end: {
	          line: 689,
	          column: 50
	        }
	      },
	      '351': {
	        start: {
	          line: 692,
	          column: 16
	        },
	        end: {
	          line: 692,
	          column: 46
	        }
	      },
	      '352': {
	        start: {
	          line: 693,
	          column: 16
	        },
	        end: {
	          line: 693,
	          column: 80
	        }
	      },
	      '353': {
	        start: {
	          line: 698,
	          column: 8
	        },
	        end: {
	          line: 700,
	          column: 20
	        }
	      },
	      '354': {
	        start: {
	          line: 699,
	          column: 12
	        },
	        end: {
	          line: 699,
	          column: 86
	        }
	      },
	      '355': {
	        start: {
	          line: 702,
	          column: 8
	        },
	        end: {
	          line: 704,
	          column: 20
	        }
	      },
	      '356': {
	        start: {
	          line: 703,
	          column: 12
	        },
	        end: {
	          line: 703,
	          column: 83
	        }
	      },
	      '357': {
	        start: {
	          line: 706,
	          column: 8
	        },
	        end: {
	          line: 714,
	          column: 20
	        }
	      },
	      '358': {
	        start: {
	          line: 707,
	          column: 38
	        },
	        end: {
	          line: 707,
	          column: 67
	        }
	      },
	      '359': {
	        start: {
	          line: 708,
	          column: 12
	        },
	        end: {
	          line: 713,
	          column: 13
	        }
	      },
	      '360': {
	        start: {
	          line: 716,
	          column: 8
	        },
	        end: {
	          line: 726,
	          column: 20
	        }
	      },
	      '361': {
	        start: {
	          line: 717,
	          column: 32
	        },
	        end: {
	          line: 717,
	          column: 61
	        }
	      },
	      '362': {
	        start: {
	          line: 718,
	          column: 12
	        },
	        end: {
	          line: 722,
	          column: 13
	        }
	      },
	      '363': {
	        start: {
	          line: 719,
	          column: 16
	        },
	        end: {
	          line: 719,
	          column: 33
	        }
	      },
	      '364': {
	        start: {
	          line: 721,
	          column: 16
	        },
	        end: {
	          line: 721,
	          column: 46
	        }
	      },
	      '365': {
	        start: {
	          line: 724,
	          column: 12
	        },
	        end: {
	          line: 724,
	          column: 57
	        }
	      },
	      '366': {
	        start: {
	          line: 725,
	          column: 12
	        },
	        end: {
	          line: 725,
	          column: 56
	        }
	      },
	      '367': {
	        start: {
	          line: 728,
	          column: 8
	        },
	        end: {
	          line: 732,
	          column: 20
	        }
	      },
	      '368': {
	        start: {
	          line: 729,
	          column: 12
	        },
	        end: {
	          line: 731,
	          column: 13
	        }
	      },
	      '369': {
	        start: {
	          line: 730,
	          column: 16
	        },
	        end: {
	          line: 730,
	          column: 58
	        }
	      },
	      '370': {
	        start: {
	          line: 734,
	          column: 8
	        },
	        end: {
	          line: 738,
	          column: 20
	        }
	      },
	      '371': {
	        start: {
	          line: 735,
	          column: 12
	        },
	        end: {
	          line: 737,
	          column: 13
	        }
	      },
	      '372': {
	        start: {
	          line: 736,
	          column: 16
	        },
	        end: {
	          line: 736,
	          column: 58
	        }
	      },
	      '373': {
	        start: {
	          line: 740,
	          column: 8
	        },
	        end: {
	          line: 742,
	          column: 20
	        }
	      },
	      '374': {
	        start: {
	          line: 741,
	          column: 12
	        },
	        end: {
	          line: 741,
	          column: 44
	        }
	      },
	      '375': {
	        start: {
	          line: 744,
	          column: 8
	        },
	        end: {
	          line: 747,
	          column: 20
	        }
	      },
	      '376': {
	        start: {
	          line: 745,
	          column: 12
	        },
	        end: {
	          line: 745,
	          column: 48
	        }
	      },
	      '377': {
	        start: {
	          line: 746,
	          column: 12
	        },
	        end: {
	          line: 746,
	          column: 46
	        }
	      },
	      '378': {
	        start: {
	          line: 749,
	          column: 8
	        },
	        end: {
	          line: 749,
	          column: 50
	        }
	      },
	      '379': {
	        start: {
	          line: 752,
	          column: 8
	        },
	        end: {
	          line: 754,
	          column: 9
	        }
	      },
	      '380': {
	        start: {
	          line: 753,
	          column: 12
	        },
	        end: {
	          line: 753,
	          column: 37
	        }
	      },
	      '381': {
	        start: {
	          line: 761,
	          column: 8
	        },
	        end: {
	          line: 761,
	          column: 86
	        }
	      },
	      '382': {
	        start: {
	          line: 762,
	          column: 8
	        },
	        end: {
	          line: 766,
	          column: 10
	        }
	      },
	      '383': {
	        start: {
	          line: 769,
	          column: 8
	        },
	        end: {
	          line: 773,
	          column: 9
	        }
	      },
	      '384': {
	        start: {
	          line: 770,
	          column: 12
	        },
	        end: {
	          line: 770,
	          column: 46
	        }
	      },
	      '385': {
	        start: {
	          line: 772,
	          column: 12
	        },
	        end: {
	          line: 772,
	          column: 37
	        }
	      },
	      '386': {
	        start: {
	          line: 778,
	          column: 27
	        },
	        end: {
	          line: 778,
	          column: 29
	        }
	      },
	      '387': {
	        start: {
	          line: 779,
	          column: 20
	        },
	        end: {
	          line: 779,
	          column: 24
	        }
	      },
	      '388': {
	        start: {
	          line: 781,
	          column: 8
	        },
	        end: {
	          line: 783,
	          column: 9
	        }
	      },
	      '389': {
	        start: {
	          line: 782,
	          column: 12
	        },
	        end: {
	          line: 782,
	          column: 44
	        }
	      },
	      '390': {
	        start: {
	          line: 785,
	          column: 8
	        },
	        end: {
	          line: 787,
	          column: 9
	        }
	      },
	      '391': {
	        start: {
	          line: 786,
	          column: 12
	        },
	        end: {
	          line: 786,
	          column: 45
	        }
	      },
	      '392': {
	        start: {
	          line: 789,
	          column: 8
	        },
	        end: {
	          line: 791,
	          column: 9
	        }
	      },
	      '393': {
	        start: {
	          line: 790,
	          column: 12
	        },
	        end: {
	          line: 790,
	          column: 44
	        }
	      },
	      '394': {
	        start: {
	          line: 793,
	          column: 8
	        },
	        end: {
	          line: 795,
	          column: 9
	        }
	      },
	      '395': {
	        start: {
	          line: 794,
	          column: 12
	        },
	        end: {
	          line: 794,
	          column: 44
	        }
	      },
	      '396': {
	        start: {
	          line: 797,
	          column: 8
	        },
	        end: {
	          line: 803,
	          column: 20
	        }
	      },
	      '397': {
	        start: {
	          line: 798,
	          column: 12
	        },
	        end: {
	          line: 798,
	          column: 30
	        }
	      },
	      '398': {
	        start: {
	          line: 799,
	          column: 12
	        },
	        end: {
	          line: 801,
	          column: 13
	        }
	      },
	      '399': {
	        start: {
	          line: 800,
	          column: 16
	        },
	        end: {
	          line: 800,
	          column: 28
	        }
	      },
	      '400': {
	        start: {
	          line: 802,
	          column: 12
	        },
	        end: {
	          line: 802,
	          column: 23
	        }
	      },
	      '401': {
	        start: {
	          line: 805,
	          column: 8
	        },
	        end: {
	          line: 812,
	          column: 9
	        }
	      },
	      '402': {
	        start: {
	          line: 806,
	          column: 12
	        },
	        end: {
	          line: 810,
	          column: 13
	        }
	      },
	      '403': {
	        start: {
	          line: 807,
	          column: 16
	        },
	        end: {
	          line: 807,
	          column: 49
	        }
	      },
	      '404': {
	        start: {
	          line: 808,
	          column: 19
	        },
	        end: {
	          line: 810,
	          column: 13
	        }
	      },
	      '405': {
	        start: {
	          line: 809,
	          column: 16
	        },
	        end: {
	          line: 809,
	          column: 50
	        }
	      },
	      '406': {
	        start: {
	          line: 811,
	          column: 12
	        },
	        end: {
	          line: 811,
	          column: 20
	        }
	      },
	      '407': {
	        start: {
	          line: 814,
	          column: 8
	        },
	        end: {
	          line: 821,
	          column: 9
	        }
	      },
	      '408': {
	        start: {
	          line: 815,
	          column: 12
	        },
	        end: {
	          line: 819,
	          column: 13
	        }
	      },
	      '409': {
	        start: {
	          line: 816,
	          column: 16
	        },
	        end: {
	          line: 816,
	          column: 46
	        }
	      },
	      '410': {
	        start: {
	          line: 817,
	          column: 19
	        },
	        end: {
	          line: 819,
	          column: 13
	        }
	      },
	      '411': {
	        start: {
	          line: 818,
	          column: 16
	        },
	        end: {
	          line: 818,
	          column: 47
	        }
	      },
	      '412': {
	        start: {
	          line: 820,
	          column: 12
	        },
	        end: {
	          line: 820,
	          column: 20
	        }
	      },
	      '413': {
	        start: {
	          line: 823,
	          column: 8
	        },
	        end: {
	          line: 825,
	          column: 9
	        }
	      },
	      '414': {
	        start: {
	          line: 827,
	          column: 8
	        },
	        end: {
	          line: 831,
	          column: 20
	        }
	      },
	      '415': {
	        start: {
	          line: 829,
	          column: 12
	        },
	        end: {
	          line: 829,
	          column: 38
	        }
	      },
	      '416': {
	        start: {
	          line: 830,
	          column: 12
	        },
	        end: {
	          line: 830,
	          column: 67
	        }
	      },
	      '417': {
	        start: {
	          line: 833,
	          column: 8
	        },
	        end: {
	          line: 835,
	          column: 20
	        }
	      },
	      '418': {
	        start: {
	          line: 834,
	          column: 12
	        },
	        end: {
	          line: 834,
	          column: 64
	        }
	      },
	      '419': {
	        start: {
	          line: 837,
	          column: 8
	        },
	        end: {
	          line: 845,
	          column: 20
	        }
	      },
	      '420': {
	        start: {
	          line: 838,
	          column: 38
	        },
	        end: {
	          line: 838,
	          column: 67
	        }
	      },
	      '421': {
	        start: {
	          line: 839,
	          column: 12
	        },
	        end: {
	          line: 844,
	          column: 13
	        }
	      },
	      '422': {
	        start: {
	          line: 847,
	          column: 8
	        },
	        end: {
	          line: 853,
	          column: 9
	        }
	      },
	      '423': {
	        start: {
	          line: 848,
	          column: 12
	        },
	        end: {
	          line: 852,
	          column: 13
	        }
	      },
	      '424': {
	        start: {
	          line: 849,
	          column: 16
	        },
	        end: {
	          line: 849,
	          column: 58
	        }
	      },
	      '425': {
	        start: {
	          line: 850,
	          column: 19
	        },
	        end: {
	          line: 852,
	          column: 13
	        }
	      },
	      '426': {
	        start: {
	          line: 851,
	          column: 16
	        },
	        end: {
	          line: 851,
	          column: 59
	        }
	      },
	      '427': {
	        start: {
	          line: 855,
	          column: 8
	        },
	        end: {
	          line: 861,
	          column: 9
	        }
	      },
	      '428': {
	        start: {
	          line: 856,
	          column: 12
	        },
	        end: {
	          line: 860,
	          column: 13
	        }
	      },
	      '429': {
	        start: {
	          line: 857,
	          column: 16
	        },
	        end: {
	          line: 857,
	          column: 46
	        }
	      },
	      '430': {
	        start: {
	          line: 858,
	          column: 19
	        },
	        end: {
	          line: 860,
	          column: 13
	        }
	      },
	      '431': {
	        start: {
	          line: 859,
	          column: 16
	        },
	        end: {
	          line: 859,
	          column: 47
	        }
	      },
	      '432': {
	        start: {
	          line: 863,
	          column: 8
	        },
	        end: {
	          line: 869,
	          column: 9
	        }
	      },
	      '433': {
	        start: {
	          line: 864,
	          column: 12
	        },
	        end: {
	          line: 868,
	          column: 13
	        }
	      },
	      '434': {
	        start: {
	          line: 865,
	          column: 16
	        },
	        end: {
	          line: 865,
	          column: 47
	        }
	      },
	      '435': {
	        start: {
	          line: 866,
	          column: 19
	        },
	        end: {
	          line: 868,
	          column: 13
	        }
	      },
	      '436': {
	        start: {
	          line: 867,
	          column: 16
	        },
	        end: {
	          line: 867,
	          column: 48
	        }
	      },
	      '437': {
	        start: {
	          line: 871,
	          column: 8
	        },
	        end: {
	          line: 877,
	          column: 9
	        }
	      },
	      '438': {
	        start: {
	          line: 872,
	          column: 12
	        },
	        end: {
	          line: 876,
	          column: 13
	        }
	      },
	      '439': {
	        start: {
	          line: 873,
	          column: 16
	        },
	        end: {
	          line: 873,
	          column: 42
	        }
	      },
	      '440': {
	        start: {
	          line: 874,
	          column: 19
	        },
	        end: {
	          line: 876,
	          column: 13
	        }
	      },
	      '441': {
	        start: {
	          line: 875,
	          column: 16
	        },
	        end: {
	          line: 875,
	          column: 43
	        }
	      },
	      '442': {
	        start: {
	          line: 879,
	          column: 8
	        },
	        end: {
	          line: 885,
	          column: 9
	        }
	      },
	      '443': {
	        start: {
	          line: 880,
	          column: 12
	        },
	        end: {
	          line: 884,
	          column: 13
	        }
	      },
	      '444': {
	        start: {
	          line: 881,
	          column: 16
	        },
	        end: {
	          line: 881,
	          column: 53
	        }
	      },
	      '445': {
	        start: {
	          line: 882,
	          column: 19
	        },
	        end: {
	          line: 884,
	          column: 13
	        }
	      },
	      '446': {
	        start: {
	          line: 883,
	          column: 16
	        },
	        end: {
	          line: 883,
	          column: 54
	        }
	      },
	      '447': {
	        start: {
	          line: 887,
	          column: 8
	        },
	        end: {
	          line: 887,
	          column: 50
	        }
	      },
	      '448': {
	        start: {
	          line: 889,
	          column: 8
	        },
	        end: {
	          line: 889,
	          column: 73
	        }
	      },
	      '449': {
	        start: {
	          line: 891,
	          column: 8
	        },
	        end: {
	          line: 894,
	          column: 9
	        }
	      },
	      '450': {
	        start: {
	          line: 892,
	          column: 12
	        },
	        end: {
	          line: 892,
	          column: 37
	        }
	      },
	      '451': {
	        start: {
	          line: 893,
	          column: 12
	        },
	        end: {
	          line: 893,
	          column: 37
	        }
	      },
	      '452': {
	        start: {
	          line: 898,
	          column: 8
	        },
	        end: {
	          line: 898,
	          column: 93
	        }
	      },
	      '453': {
	        start: {
	          line: 899,
	          column: 8
	        },
	        end: {
	          line: 899,
	          column: 73
	        }
	      },
	      '454': {
	        start: {
	          line: 900,
	          column: 8
	        },
	        end: {
	          line: 900,
	          column: 77
	        }
	      },
	      '455': {
	        start: {
	          line: 901,
	          column: 8
	        },
	        end: {
	          line: 901,
	          column: 42
	        }
	      },
	      '456': {
	        start: {
	          line: 902,
	          column: 8
	        },
	        end: {
	          line: 902,
	          column: 45
	        }
	      },
	      '457': {
	        start: {
	          line: 903,
	          column: 8
	        },
	        end: {
	          line: 905,
	          column: 9
	        }
	      },
	      '458': {
	        start: {
	          line: 904,
	          column: 12
	        },
	        end: {
	          line: 904,
	          column: 38
	        }
	      },
	      '459': {
	        start: {
	          line: 906,
	          column: 8
	        },
	        end: {
	          line: 918,
	          column: 9
	        }
	      },
	      '460': {
	        start: {
	          line: 907,
	          column: 12
	        },
	        end: {
	          line: 907,
	          column: 71
	        }
	      },
	      '461': {
	        start: {
	          line: 909,
	          column: 29
	        },
	        end: {
	          line: 909,
	          column: 80
	        }
	      },
	      '462': {
	        start: {
	          line: 910,
	          column: 12
	        },
	        end: {
	          line: 917,
	          column: 13
	        }
	      },
	      '463': {
	        start: {
	          line: 911,
	          column: 16
	        },
	        end: {
	          line: 916,
	          column: 17
	        }
	      },
	      '464': {
	        start: {
	          line: 912,
	          column: 36
	        },
	        end: {
	          line: 912,
	          column: 87
	        }
	      },
	      '465': {
	        start: {
	          line: 913,
	          column: 20
	        },
	        end: {
	          line: 915,
	          column: 21
	        }
	      },
	      '466': {
	        start: {
	          line: 914,
	          column: 24
	        },
	        end: {
	          line: 914,
	          column: 78
	        }
	      },
	      '467': {
	        start: {
	          line: 919,
	          column: 8
	        },
	        end: {
	          line: 931,
	          column: 9
	        }
	      },
	      '468': {
	        start: {
	          line: 920,
	          column: 12
	        },
	        end: {
	          line: 920,
	          column: 77
	        }
	      },
	      '469': {
	        start: {
	          line: 922,
	          column: 29
	        },
	        end: {
	          line: 922,
	          column: 80
	        }
	      },
	      '470': {
	        start: {
	          line: 923,
	          column: 12
	        },
	        end: {
	          line: 930,
	          column: 13
	        }
	      },
	      '471': {
	        start: {
	          line: 924,
	          column: 16
	        },
	        end: {
	          line: 929,
	          column: 17
	        }
	      },
	      '472': {
	        start: {
	          line: 925,
	          column: 39
	        },
	        end: {
	          line: 925,
	          column: 91
	        }
	      },
	      '473': {
	        start: {
	          line: 926,
	          column: 20
	        },
	        end: {
	          line: 928,
	          column: 21
	        }
	      },
	      '474': {
	        start: {
	          line: 927,
	          column: 24
	        },
	        end: {
	          line: 927,
	          column: 84
	        }
	      },
	      '475': {
	        start: {
	          line: 933,
	          column: 23
	        },
	        end: {
	          line: 933,
	          column: 44
	        }
	      },
	      '476': {
	        start: {
	          line: 934,
	          column: 8
	        },
	        end: {
	          line: 939,
	          column: 9
	        }
	      },
	      '477': {
	        start: {
	          line: 935,
	          column: 24
	        },
	        end: {
	          line: 935,
	          column: 53
	        }
	      },
	      '478': {
	        start: {
	          line: 936,
	          column: 12
	        },
	        end: {
	          line: 938,
	          column: 14
	        }
	      },
	      '479': {
	        start: {
	          line: 940,
	          column: 8
	        },
	        end: {
	          line: 940,
	          column: 49
	        }
	      },
	      '480': {
	        start: {
	          line: 941,
	          column: 8
	        },
	        end: {
	          line: 941,
	          column: 37
	        }
	      },
	      '481': {
	        start: {
	          line: 942,
	          column: 8
	        },
	        end: {
	          line: 942,
	          column: 70
	        }
	      },
	      '482': {
	        start: {
	          line: 943,
	          column: 8
	        },
	        end: {
	          line: 943,
	          column: 45
	        }
	      },
	      '483': {
	        start: {
	          line: 945,
	          column: 8
	        },
	        end: {
	          line: 945,
	          column: 18
	        }
	      },
	      '484': {
	        start: {
	          line: 949,
	          column: 8
	        },
	        end: {
	          line: 949,
	          column: 55
	        }
	      },
	      '485': {
	        start: {
	          line: 950,
	          column: 8
	        },
	        end: {
	          line: 950,
	          column: 42
	        }
	      },
	      '486': {
	        start: {
	          line: 954,
	          column: 8
	        },
	        end: {
	          line: 957,
	          column: 9
	        }
	      },
	      '487': {
	        start: {
	          line: 955,
	          column: 12
	        },
	        end: {
	          line: 955,
	          column: 47
	        }
	      },
	      '488': {
	        start: {
	          line: 956,
	          column: 12
	        },
	        end: {
	          line: 956,
	          column: 18
	        }
	      },
	      '489': {
	        start: {
	          line: 959,
	          column: 8
	        },
	        end: {
	          line: 961,
	          column: 9
	        }
	      },
	      '490': {
	        start: {
	          line: 960,
	          column: 12
	        },
	        end: {
	          line: 960,
	          column: 44
	        }
	      },
	      '491': {
	        start: {
	          line: 963,
	          column: 8
	        },
	        end: {
	          line: 963,
	          column: 43
	        }
	      },
	      '492': {
	        start: {
	          line: 967,
	          column: 8
	        },
	        end: {
	          line: 986,
	          column: 9
	        }
	      },
	      '493': {
	        start: {
	          line: 969,
	          column: 16
	        },
	        end: {
	          line: 969,
	          column: 106
	        }
	      },
	      '494': {
	        start: {
	          line: 971,
	          column: 16
	        },
	        end: {
	          line: 971,
	          column: 117
	        }
	      },
	      '495': {
	        start: {
	          line: 973,
	          column: 16
	        },
	        end: {
	          line: 973,
	          column: 122
	        }
	      },
	      '496': {
	        start: {
	          line: 975,
	          column: 16
	        },
	        end: {
	          line: 975,
	          column: 115
	        }
	      },
	      '497': {
	        start: {
	          line: 977,
	          column: 16
	        },
	        end: {
	          line: 977,
	          column: 126
	        }
	      },
	      '498': {
	        start: {
	          line: 979,
	          column: 16
	        },
	        end: {
	          line: 979,
	          column: 131
	        }
	      },
	      '499': {
	        start: {
	          line: 981,
	          column: 16
	        },
	        end: {
	          line: 981,
	          column: 136
	        }
	      },
	      '500': {
	        start: {
	          line: 983,
	          column: 16
	        },
	        end: {
	          line: 983,
	          column: 103
	        }
	      },
	      '501': {
	        start: {
	          line: 985,
	          column: 16
	        },
	        end: {
	          line: 985,
	          column: 28
	        }
	      },
	      '502': {
	        start: {
	          line: 990,
	          column: 8
	        },
	        end: {
	          line: 990,
	          column: 33
	        }
	      },
	      '503': {
	        start: {
	          line: 991,
	          column: 8
	        },
	        end: {
	          line: 991,
	          column: 44
	        }
	      },
	      '504': {
	        start: {
	          line: 992,
	          column: 8
	        },
	        end: {
	          line: 992,
	          column: 33
	        }
	      },
	      '505': {
	        start: {
	          line: 996,
	          column: 8
	        },
	        end: {
	          line: 998,
	          column: 9
	        }
	      },
	      '506': {
	        start: {
	          line: 997,
	          column: 12
	        },
	        end: {
	          line: 997,
	          column: 23
	        }
	      },
	      '507': {
	        start: {
	          line: 1000,
	          column: 25
	        },
	        end: {
	          line: 1000,
	          column: 30
	        }
	      },
	      '508': {
	        start: {
	          line: 1001,
	          column: 8
	        },
	        end: {
	          line: 1004,
	          column: 9
	        }
	      },
	      '509': {
	        start: {
	          line: 1002,
	          column: 12
	        },
	        end: {
	          line: 1002,
	          column: 29
	        }
	      },
	      '510': {
	        start: {
	          line: 1003,
	          column: 12
	        },
	        end: {
	          line: 1003,
	          column: 27
	        }
	      },
	      '511': {
	        start: {
	          line: 1006,
	          column: 20
	        },
	        end: {
	          line: 1006,
	          column: 48
	        }
	      },
	      '512': {
	        start: {
	          line: 1007,
	          column: 22
	        },
	        end: {
	          line: 1007,
	          column: 67
	        }
	      },
	      '513': {
	        start: {
	          line: 1008,
	          column: 22
	        },
	        end: {
	          line: 1008,
	          column: 77
	        }
	      },
	      '514': {
	        start: {
	          line: 1010,
	          column: 8
	        },
	        end: {
	          line: 1010,
	          column: 43
	        }
	      },
	      '515': {
	        start: {
	          line: 1010,
	          column: 24
	        },
	        end: {
	          line: 1010,
	          column: 43
	        }
	      },
	      '516': {
	        start: {
	          line: 1011,
	          column: 8
	        },
	        end: {
	          line: 1011,
	          column: 49
	        }
	      },
	      '517': {
	        start: {
	          line: 1011,
	          column: 26
	        },
	        end: {
	          line: 1011,
	          column: 49
	        }
	      },
	      '518': {
	        start: {
	          line: 1012,
	          column: 8
	        },
	        end: {
	          line: 1012,
	          column: 49
	        }
	      },
	      '519': {
	        start: {
	          line: 1012,
	          column: 26
	        },
	        end: {
	          line: 1012,
	          column: 49
	        }
	      },
	      '520': {
	        start: {
	          line: 1014,
	          column: 8
	        },
	        end: {
	          line: 1014,
	          column: 78
	        }
	      },
	      '521': {
	        start: {
	          line: 1019,
	          column: 8
	        },
	        end: {
	          line: 1019,
	          column: 72
	        }
	      },
	      '522': {
	        start: {
	          line: 1020,
	          column: 8
	        },
	        end: {
	          line: 1020,
	          column: 66
	        }
	      },
	      '523': {
	        start: {
	          line: 1022,
	          column: 8
	        },
	        end: {
	          line: 1022,
	          column: 50
	        }
	      },
	      '524': {
	        start: {
	          line: 1024,
	          column: 8
	        },
	        end: {
	          line: 1028,
	          column: 9
	        }
	      },
	      '525': {
	        start: {
	          line: 1025,
	          column: 12
	        },
	        end: {
	          line: 1025,
	          column: 57
	        }
	      },
	      '526': {
	        start: {
	          line: 1026,
	          column: 15
	        },
	        end: {
	          line: 1028,
	          column: 9
	        }
	      },
	      '527': {
	        start: {
	          line: 1027,
	          column: 12
	        },
	        end: {
	          line: 1027,
	          column: 30
	        }
	      },
	      '528': {
	        start: {
	          line: 1032,
	          column: 0
	        },
	        end: {
	          line: 1032,
	          column: 54
	        }
	      },
	      '529': {
	        start: {
	          line: 1033,
	          column: 0
	        },
	        end: {
	          line: 1033,
	          column: 119
	        }
	      },
	      '530': {
	        start: {
	          line: 1035,
	          column: 0
	        },
	        end: {
	          line: 1037,
	          column: 1
	        }
	      },
	      '531': {
	        start: {
	          line: 1036,
	          column: 4
	        },
	        end: {
	          line: 1036,
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
	            line: 110,
	            column: 37
	          },
	          end: {
	            line: 110,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 110,
	            column: 55
	          },
	          end: {
	            line: 115,
	            column: 13
	          }
	        },
	        line: 110
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 117,
	            column: 37
	          },
	          end: {
	            line: 117,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 117,
	            column: 49
	          },
	          end: {
	            line: 117,
	            column: 51
	          }
	        },
	        line: 117
	      },
	      '4': {
	        name: 'hasFinishedSearch',
	        decl: {
	          start: {
	            line: 120,
	            column: 21
	          },
	          end: {
	            line: 120,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 120,
	            column: 42
	          },
	          end: {
	            line: 136,
	            column: 13
	          }
	        },
	        line: 120
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 142,
	            column: 16
	          },
	          end: {
	            line: 142,
	            column: 17
	          }
	        },
	        loc: {
	          start: {
	            line: 142,
	            column: 29
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
	            line: 337,
	            column: 5
	          }
	        },
	        line: 309
	      },
	      '29': {
	        name: '(anonymous_29)',
	        decl: {
	          start: {
	            line: 316,
	            column: 52
	          },
	          end: {
	            line: 316,
	            column: 53
	          }
	        },
	        loc: {
	          start: {
	            line: 316,
	            column: 64
	          },
	          end: {
	            line: 329,
	            column: 13
	          }
	        },
	        line: 316
	      },
	      '30': {
	        name: '(anonymous_30)',
	        decl: {
	          start: {
	            line: 318,
	            column: 42
	          },
	          end: {
	            line: 318,
	            column: 43
	          }
	        },
	        loc: {
	          start: {
	            line: 318,
	            column: 54
	          },
	          end: {
	            line: 328,
	            column: 17
	          }
	        },
	        line: 318
	      },
	      '31': {
	        name: '(anonymous_31)',
	        decl: {
	          start: {
	            line: 324,
	            column: 25
	          },
	          end: {
	            line: 324,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 324,
	            column: 42
	          },
	          end: {
	            line: 326,
	            column: 25
	          }
	        },
	        line: 324
	      },
	      '32': {
	        name: '(anonymous_32)',
	        decl: {
	          start: {
	            line: 339,
	            column: 4
	          },
	          end: {
	            line: 339,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 339,
	            column: 19
	          },
	          end: {
	            line: 344,
	            column: 5
	          }
	        },
	        line: 339
	      },
	      '33': {
	        name: '(anonymous_33)',
	        decl: {
	          start: {
	            line: 346,
	            column: 4
	          },
	          end: {
	            line: 346,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 346,
	            column: 27
	          },
	          end: {
	            line: 350,
	            column: 5
	          }
	        },
	        line: 346
	      },
	      '34': {
	        name: '(anonymous_34)',
	        decl: {
	          start: {
	            line: 352,
	            column: 4
	          },
	          end: {
	            line: 352,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 352,
	            column: 19
	          },
	          end: {
	            line: 388,
	            column: 5
	          }
	        },
	        line: 352
	      },
	      '35': {
	        name: '(anonymous_35)',
	        decl: {
	          start: {
	            line: 369,
	            column: 57
	          },
	          end: {
	            line: 369,
	            column: 58
	          }
	        },
	        loc: {
	          start: {
	            line: 369,
	            column: 66
	          },
	          end: {
	            line: 386,
	            column: 13
	          }
	        },
	        line: 369
	      },
	      '36': {
	        name: '(anonymous_36)',
	        decl: {
	          start: {
	            line: 390,
	            column: 4
	          },
	          end: {
	            line: 390,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 390,
	            column: 12
	          },
	          end: {
	            line: 404,
	            column: 5
	          }
	        },
	        line: 390
	      },
	      '37': {
	        name: '(anonymous_37)',
	        decl: {
	          start: {
	            line: 406,
	            column: 4
	          },
	          end: {
	            line: 406,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 406,
	            column: 12
	          },
	          end: {
	            line: 419,
	            column: 5
	          }
	        },
	        line: 406
	      },
	      '38': {
	        name: '(anonymous_38)',
	        decl: {
	          start: {
	            line: 421,
	            column: 4
	          },
	          end: {
	            line: 421,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 421,
	            column: 21
	          },
	          end: {
	            line: 426,
	            column: 5
	          }
	        },
	        line: 421
	      },
	      '39': {
	        name: '(anonymous_39)',
	        decl: {
	          start: {
	            line: 428,
	            column: 4
	          },
	          end: {
	            line: 428,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 428,
	            column: 36
	          },
	          end: {
	            line: 435,
	            column: 5
	          }
	        },
	        line: 428
	      },
	      '40': {
	        name: '(anonymous_40)',
	        decl: {
	          start: {
	            line: 437,
	            column: 4
	          },
	          end: {
	            line: 437,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 437,
	            column: 19
	          },
	          end: {
	            line: 453,
	            column: 5
	          }
	        },
	        line: 437
	      },
	      '41': {
	        name: '(anonymous_41)',
	        decl: {
	          start: {
	            line: 455,
	            column: 4
	          },
	          end: {
	            line: 455,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 455,
	            column: 25
	          },
	          end: {
	            line: 470,
	            column: 5
	          }
	        },
	        line: 455
	      },
	      '42': {
	        name: '(anonymous_42)',
	        decl: {
	          start: {
	            line: 459,
	            column: 37
	          },
	          end: {
	            line: 459,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 459,
	            column: 49
	          },
	          end: {
	            line: 466,
	            column: 13
	          }
	        },
	        line: 459
	      },
	      '43': {
	        name: '(anonymous_43)',
	        decl: {
	          start: {
	            line: 475,
	            column: 4
	          },
	          end: {
	            line: 475,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 475,
	            column: 25
	          },
	          end: {
	            line: 774,
	            column: 5
	          }
	        },
	        line: 475
	      },
	      '44': {
	        name: '(anonymous_44)',
	        decl: {
	          start: {
	            line: 479,
	            column: 12
	          },
	          end: {
	            line: 479,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 479,
	            column: 29
	          },
	          end: {
	            line: 503,
	            column: 13
	          }
	        },
	        line: 479
	      },
	      '45': {
	        name: '(anonymous_45)',
	        decl: {
	          start: {
	            line: 508,
	            column: 12
	          },
	          end: {
	            line: 508,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 508,
	            column: 29
	          },
	          end: {
	            line: 510,
	            column: 13
	          }
	        },
	        line: 508
	      },
	      '46': {
	        name: '(anonymous_46)',
	        decl: {
	          start: {
	            line: 515,
	            column: 12
	          },
	          end: {
	            line: 515,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 515,
	            column: 24
	          },
	          end: {
	            line: 521,
	            column: 13
	          }
	        },
	        line: 515
	      },
	      '47': {
	        name: '(anonymous_47)',
	        decl: {
	          start: {
	            line: 526,
	            column: 12
	          },
	          end: {
	            line: 526,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 526,
	            column: 24
	          },
	          end: {
	            line: 532,
	            column: 13
	          }
	        },
	        line: 526
	      },
	      '48': {
	        name: '(anonymous_48)',
	        decl: {
	          start: {
	            line: 537,
	            column: 12
	          },
	          end: {
	            line: 537,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 537,
	            column: 24
	          },
	          end: {
	            line: 540,
	            column: 13
	          }
	        },
	        line: 537
	      },
	      '49': {
	        name: '(anonymous_49)',
	        decl: {
	          start: {
	            line: 545,
	            column: 12
	          },
	          end: {
	            line: 545,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 545,
	            column: 29
	          },
	          end: {
	            line: 547,
	            column: 13
	          }
	        },
	        line: 545
	      },
	      '50': {
	        name: '(anonymous_50)',
	        decl: {
	          start: {
	            line: 552,
	            column: 12
	          },
	          end: {
	            line: 552,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 552,
	            column: 29
	          },
	          end: {
	            line: 554,
	            column: 13
	          }
	        },
	        line: 552
	      },
	      '51': {
	        name: '(anonymous_51)',
	        decl: {
	          start: {
	            line: 559,
	            column: 12
	          },
	          end: {
	            line: 559,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 559,
	            column: 29
	          },
	          end: {
	            line: 561,
	            column: 13
	          }
	        },
	        line: 559
	      },
	      '52': {
	        name: '(anonymous_52)',
	        decl: {
	          start: {
	            line: 566,
	            column: 12
	          },
	          end: {
	            line: 566,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 566,
	            column: 29
	          },
	          end: {
	            line: 568,
	            column: 13
	          }
	        },
	        line: 566
	      },
	      '53': {
	        name: '(anonymous_53)',
	        decl: {
	          start: {
	            line: 573,
	            column: 12
	          },
	          end: {
	            line: 573,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 573,
	            column: 29
	          },
	          end: {
	            line: 576,
	            column: 13
	          }
	        },
	        line: 573
	      },
	      '54': {
	        name: '(anonymous_54)',
	        decl: {
	          start: {
	            line: 584,
	            column: 28
	          },
	          end: {
	            line: 584,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 584,
	            column: 40
	          },
	          end: {
	            line: 589,
	            column: 9
	          }
	        },
	        line: 584
	      },
	      '55': {
	        name: '(anonymous_55)',
	        decl: {
	          start: {
	            line: 591,
	            column: 29
	          },
	          end: {
	            line: 591,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 591,
	            column: 41
	          },
	          end: {
	            line: 596,
	            column: 9
	          }
	        },
	        line: 591
	      },
	      '56': {
	        name: '(anonymous_56)',
	        decl: {
	          start: {
	            line: 598,
	            column: 28
	          },
	          end: {
	            line: 598,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 598,
	            column: 40
	          },
	          end: {
	            line: 600,
	            column: 9
	          }
	        },
	        line: 598
	      },
	      '57': {
	        name: '(anonymous_57)',
	        decl: {
	          start: {
	            line: 603,
	            column: 28
	          },
	          end: {
	            line: 603,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 603,
	            column: 40
	          },
	          end: {
	            line: 629,
	            column: 9
	          }
	        },
	        line: 603
	      },
	      '58': {
	        name: '(anonymous_58)',
	        decl: {
	          start: {
	            line: 605,
	            column: 37
	          },
	          end: {
	            line: 605,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 605,
	            column: 49
	          },
	          end: {
	            line: 628,
	            column: 13
	          }
	        },
	        line: 605
	      },
	      '59': {
	        name: '(anonymous_59)',
	        decl: {
	          start: {
	            line: 618,
	            column: 20
	          },
	          end: {
	            line: 618,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 618,
	            column: 32
	          },
	          end: {
	            line: 621,
	            column: 21
	          }
	        },
	        line: 618
	      },
	      '60': {
	        name: '(anonymous_60)',
	        decl: {
	          start: {
	            line: 622,
	            column: 20
	          },
	          end: {
	            line: 622,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 622,
	            column: 41
	          },
	          end: {
	            line: 626,
	            column: 21
	          }
	        },
	        line: 622
	      },
	      '61': {
	        name: '(anonymous_61)',
	        decl: {
	          start: {
	            line: 631,
	            column: 37
	          },
	          end: {
	            line: 631,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 631,
	            column: 49
	          },
	          end: {
	            line: 646,
	            column: 9
	          }
	        },
	        line: 631
	      },
	      '62': {
	        name: '(anonymous_62)',
	        decl: {
	          start: {
	            line: 652,
	            column: 43
	          },
	          end: {
	            line: 652,
	            column: 44
	          }
	        },
	        loc: {
	          start: {
	            line: 652,
	            column: 55
	          },
	          end: {
	            line: 654,
	            column: 9
	          }
	        },
	        line: 652
	      },
	      '63': {
	        name: '(anonymous_63)',
	        decl: {
	          start: {
	            line: 660,
	            column: 40
	          },
	          end: {
	            line: 660,
	            column: 41
	          }
	        },
	        loc: {
	          start: {
	            line: 660,
	            column: 52
	          },
	          end: {
	            line: 662,
	            column: 9
	          }
	        },
	        line: 660
	      },
	      '64': {
	        name: '(anonymous_64)',
	        decl: {
	          start: {
	            line: 664,
	            column: 37
	          },
	          end: {
	            line: 664,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 664,
	            column: 49
	          },
	          end: {
	            line: 696,
	            column: 9
	          }
	        },
	        line: 664
	      },
	      '65': {
	        name: '(anonymous_65)',
	        decl: {
	          start: {
	            line: 688,
	            column: 47
	          },
	          end: {
	            line: 688,
	            column: 48
	          }
	        },
	        loc: {
	          start: {
	            line: 688,
	            column: 59
	          },
	          end: {
	            line: 690,
	            column: 21
	          }
	        },
	        line: 688
	      },
	      '66': {
	        name: '(anonymous_66)',
	        decl: {
	          start: {
	            line: 698,
	            column: 48
	          },
	          end: {
	            line: 698,
	            column: 49
	          }
	        },
	        loc: {
	          start: {
	            line: 698,
	            column: 60
	          },
	          end: {
	            line: 700,
	            column: 9
	          }
	        },
	        line: 698
	      },
	      '67': {
	        name: '(anonymous_67)',
	        decl: {
	          start: {
	            line: 702,
	            column: 45
	          },
	          end: {
	            line: 702,
	            column: 46
	          }
	        },
	        loc: {
	          start: {
	            line: 702,
	            column: 57
	          },
	          end: {
	            line: 704,
	            column: 9
	          }
	        },
	        line: 702
	      },
	      '68': {
	        name: '(anonymous_68)',
	        decl: {
	          start: {
	            line: 706,
	            column: 37
	          },
	          end: {
	            line: 706,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 706,
	            column: 53
	          },
	          end: {
	            line: 714,
	            column: 9
	          }
	        },
	        line: 706
	      },
	      '69': {
	        name: '(anonymous_69)',
	        decl: {
	          start: {
	            line: 716,
	            column: 33
	          },
	          end: {
	            line: 716,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 716,
	            column: 59
	          },
	          end: {
	            line: 726,
	            column: 9
	          }
	        },
	        line: 716
	      },
	      '70': {
	        name: '(anonymous_70)',
	        decl: {
	          start: {
	            line: 728,
	            column: 28
	          },
	          end: {
	            line: 728,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 728,
	            column: 40
	          },
	          end: {
	            line: 732,
	            column: 9
	          }
	        },
	        line: 728
	      },
	      '71': {
	        name: '(anonymous_71)',
	        decl: {
	          start: {
	            line: 734,
	            column: 30
	          },
	          end: {
	            line: 734,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 734,
	            column: 42
	          },
	          end: {
	            line: 738,
	            column: 9
	          }
	        },
	        line: 734
	      },
	      '72': {
	        name: '(anonymous_72)',
	        decl: {
	          start: {
	            line: 740,
	            column: 31
	          },
	          end: {
	            line: 740,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 740,
	            column: 43
	          },
	          end: {
	            line: 742,
	            column: 9
	          }
	        },
	        line: 740
	      },
	      '73': {
	        name: '(anonymous_73)',
	        decl: {
	          start: {
	            line: 744,
	            column: 30
	          },
	          end: {
	            line: 744,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 744,
	            column: 46
	          },
	          end: {
	            line: 747,
	            column: 9
	          }
	        },
	        line: 744
	      },
	      '74': {
	        name: '(anonymous_74)',
	        decl: {
	          start: {
	            line: 776,
	            column: 4
	          },
	          end: {
	            line: 776,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 776,
	            column: 24
	          },
	          end: {
	            line: 895,
	            column: 5
	          }
	        },
	        line: 776
	      },
	      '75': {
	        name: '(anonymous_75)',
	        decl: {
	          start: {
	            line: 781,
	            column: 28
	          },
	          end: {
	            line: 781,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 781,
	            column: 40
	          },
	          end: {
	            line: 783,
	            column: 9
	          }
	        },
	        line: 781
	      },
	      '76': {
	        name: '(anonymous_76)',
	        decl: {
	          start: {
	            line: 785,
	            column: 29
	          },
	          end: {
	            line: 785,
	            column: 30
	          }
	        },
	        loc: {
	          start: {
	            line: 785,
	            column: 41
	          },
	          end: {
	            line: 787,
	            column: 9
	          }
	        },
	        line: 785
	      },
	      '77': {
	        name: '(anonymous_77)',
	        decl: {
	          start: {
	            line: 789,
	            column: 28
	          },
	          end: {
	            line: 789,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 789,
	            column: 40
	          },
	          end: {
	            line: 791,
	            column: 9
	          }
	        },
	        line: 789
	      },
	      '78': {
	        name: '(anonymous_78)',
	        decl: {
	          start: {
	            line: 793,
	            column: 28
	          },
	          end: {
	            line: 793,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 793,
	            column: 40
	          },
	          end: {
	            line: 795,
	            column: 9
	          }
	        },
	        line: 793
	      },
	      '79': {
	        name: '(anonymous_79)',
	        decl: {
	          start: {
	            line: 797,
	            column: 37
	          },
	          end: {
	            line: 797,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 797,
	            column: 49
	          },
	          end: {
	            line: 803,
	            column: 9
	          }
	        },
	        line: 797
	      },
	      '80': {
	        name: '(anonymous_80)',
	        decl: {
	          start: {
	            line: 805,
	            column: 43
	          },
	          end: {
	            line: 805,
	            column: 44
	          }
	        },
	        loc: {
	          start: {
	            line: 805,
	            column: 55
	          },
	          end: {
	            line: 812,
	            column: 9
	          }
	        },
	        line: 805
	      },
	      '81': {
	        name: '(anonymous_81)',
	        decl: {
	          start: {
	            line: 814,
	            column: 40
	          },
	          end: {
	            line: 814,
	            column: 41
	          }
	        },
	        loc: {
	          start: {
	            line: 814,
	            column: 52
	          },
	          end: {
	            line: 821,
	            column: 9
	          }
	        },
	        line: 814
	      },
	      '82': {
	        name: '(anonymous_82)',
	        decl: {
	          start: {
	            line: 823,
	            column: 37
	          },
	          end: {
	            line: 823,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 823,
	            column: 49
	          },
	          end: {
	            line: 825,
	            column: 9
	          }
	        },
	        line: 823
	      },
	      '83': {
	        name: '(anonymous_83)',
	        decl: {
	          start: {
	            line: 827,
	            column: 48
	          },
	          end: {
	            line: 827,
	            column: 49
	          }
	        },
	        loc: {
	          start: {
	            line: 827,
	            column: 60
	          },
	          end: {
	            line: 831,
	            column: 9
	          }
	        },
	        line: 827
	      },
	      '84': {
	        name: '(anonymous_84)',
	        decl: {
	          start: {
	            line: 833,
	            column: 45
	          },
	          end: {
	            line: 833,
	            column: 46
	          }
	        },
	        loc: {
	          start: {
	            line: 833,
	            column: 57
	          },
	          end: {
	            line: 835,
	            column: 9
	          }
	        },
	        line: 833
	      },
	      '85': {
	        name: '(anonymous_85)',
	        decl: {
	          start: {
	            line: 837,
	            column: 37
	          },
	          end: {
	            line: 837,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 837,
	            column: 53
	          },
	          end: {
	            line: 845,
	            column: 9
	          }
	        },
	        line: 837
	      },
	      '86': {
	        name: '(anonymous_86)',
	        decl: {
	          start: {
	            line: 847,
	            column: 33
	          },
	          end: {
	            line: 847,
	            column: 34
	          }
	        },
	        loc: {
	          start: {
	            line: 847,
	            column: 59
	          },
	          end: {
	            line: 853,
	            column: 9
	          }
	        },
	        line: 847
	      },
	      '87': {
	        name: '(anonymous_87)',
	        decl: {
	          start: {
	            line: 855,
	            column: 28
	          },
	          end: {
	            line: 855,
	            column: 29
	          }
	        },
	        loc: {
	          start: {
	            line: 855,
	            column: 40
	          },
	          end: {
	            line: 861,
	            column: 9
	          }
	        },
	        line: 855
	      },
	      '88': {
	        name: '(anonymous_88)',
	        decl: {
	          start: {
	            line: 863,
	            column: 30
	          },
	          end: {
	            line: 863,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 863,
	            column: 42
	          },
	          end: {
	            line: 869,
	            column: 9
	          }
	        },
	        line: 863
	      },
	      '89': {
	        name: '(anonymous_89)',
	        decl: {
	          start: {
	            line: 871,
	            column: 31
	          },
	          end: {
	            line: 871,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 871,
	            column: 43
	          },
	          end: {
	            line: 877,
	            column: 9
	          }
	        },
	        line: 871
	      },
	      '90': {
	        name: '(anonymous_90)',
	        decl: {
	          start: {
	            line: 879,
	            column: 30
	          },
	          end: {
	            line: 879,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 879,
	            column: 46
	          },
	          end: {
	            line: 885,
	            column: 9
	          }
	        },
	        line: 879
	      },
	      '91': {
	        name: '(anonymous_91)',
	        decl: {
	          start: {
	            line: 897,
	            column: 4
	          },
	          end: {
	            line: 897,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 897,
	            column: 35
	          },
	          end: {
	            line: 946,
	            column: 5
	          }
	        },
	        line: 897
	      },
	      '92': {
	        name: '(anonymous_92)',
	        decl: {
	          start: {
	            line: 948,
	            column: 4
	          },
	          end: {
	            line: 948,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 948,
	            column: 28
	          },
	          end: {
	            line: 951,
	            column: 5
	          }
	        },
	        line: 948
	      },
	      '93': {
	        name: '(anonymous_93)',
	        decl: {
	          start: {
	            line: 953,
	            column: 4
	          },
	          end: {
	            line: 953,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 953,
	            column: 25
	          },
	          end: {
	            line: 964,
	            column: 5
	          }
	        },
	        line: 953
	      },
	      '94': {
	        name: '(anonymous_94)',
	        decl: {
	          start: {
	            line: 966,
	            column: 4
	          },
	          end: {
	            line: 966,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 966,
	            column: 28
	          },
	          end: {
	            line: 987,
	            column: 5
	          }
	        },
	        line: 966
	      },
	      '95': {
	        name: '(anonymous_95)',
	        decl: {
	          start: {
	            line: 989,
	            column: 4
	          },
	          end: {
	            line: 989,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 989,
	            column: 19
	          },
	          end: {
	            line: 993,
	            column: 5
	          }
	        },
	        line: 989
	      },
	      '96': {
	        name: '(anonymous_96)',
	        decl: {
	          start: {
	            line: 995,
	            column: 4
	          },
	          end: {
	            line: 995,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 995,
	            column: 35
	          },
	          end: {
	            line: 1015,
	            column: 5
	          }
	        },
	        line: 995
	      },
	      '97': {
	        name: '(anonymous_97)',
	        decl: {
	          start: {
	            line: 1017,
	            column: 4
	          },
	          end: {
	            line: 1017,
	            column: 5
	          }
	        },
	        loc: {
	          start: {
	            line: 1017,
	            column: 26
	          },
	          end: {
	            line: 1029,
	            column: 5
	          }
	        },
	        line: 1017
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
	            line: 111,
	            column: 16
	          },
	          end: {
	            line: 114,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 111,
	            column: 16
	          },
	          end: {
	            line: 114,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 111,
	            column: 16
	          },
	          end: {
	            line: 114,
	            column: 17
	          }
	        }],
	        line: 111
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 121,
	            column: 16
	          },
	          end: {
	            line: 135,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 121,
	            column: 16
	          },
	          end: {
	            line: 135,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 121,
	            column: 16
	          },
	          end: {
	            line: 135,
	            column: 17
	          }
	        }],
	        line: 121
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 122,
	            column: 20
	          },
	          end: {
	            line: 132,
	            column: 21
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 122,
	            column: 20
	          },
	          end: {
	            line: 132,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 122,
	            column: 20
	          },
	          end: {
	            line: 132,
	            column: 21
	          }
	        }],
	        line: 122
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
	            line: 312,
	            column: 8
	          },
	          end: {
	            line: 336,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 312,
	            column: 8
	          },
	          end: {
	            line: 336,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 312,
	            column: 8
	          },
	          end: {
	            line: 336,
	            column: 9
	          }
	        }],
	        line: 312
	      },
	      '27': {
	        loc: {
	          start: {
	            line: 331,
	            column: 12
	          },
	          end: {
	            line: 335,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 331,
	            column: 12
	          },
	          end: {
	            line: 335,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 331,
	            column: 12
	          },
	          end: {
	            line: 335,
	            column: 13
	          }
	        }],
	        line: 331
	      },
	      '28': {
	        loc: {
	          start: {
	            line: 347,
	            column: 8
	          },
	          end: {
	            line: 349,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 347,
	            column: 8
	          },
	          end: {
	            line: 349,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 347,
	            column: 8
	          },
	          end: {
	            line: 349,
	            column: 9
	          }
	        }],
	        line: 347
	      },
	      '29': {
	        loc: {
	          start: {
	            line: 357,
	            column: 8
	          },
	          end: {
	            line: 359,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 357,
	            column: 8
	          },
	          end: {
	            line: 359,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 357,
	            column: 8
	          },
	          end: {
	            line: 359,
	            column: 9
	          }
	        }],
	        line: 357
	      },
	      '30': {
	        loc: {
	          start: {
	            line: 362,
	            column: 12
	          },
	          end: {
	            line: 364,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 362,
	            column: 12
	          },
	          end: {
	            line: 364,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 362,
	            column: 12
	          },
	          end: {
	            line: 364,
	            column: 13
	          }
	        }],
	        line: 362
	      },
	      '31': {
	        loc: {
	          start: {
	            line: 366,
	            column: 8
	          },
	          end: {
	            line: 387,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 366,
	            column: 8
	          },
	          end: {
	            line: 387,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 366,
	            column: 8
	          },
	          end: {
	            line: 387,
	            column: 9
	          }
	        }],
	        line: 366
	      },
	      '32': {
	        loc: {
	          start: {
	            line: 370,
	            column: 16
	          },
	          end: {
	            line: 385,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 370,
	            column: 16
	          },
	          end: {
	            line: 385,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 370,
	            column: 16
	          },
	          end: {
	            line: 385,
	            column: 17
	          }
	        }],
	        line: 370
	      },
	      '33': {
	        loc: {
	          start: {
	            line: 373,
	            column: 20
	          },
	          end: {
	            line: 376,
	            column: 21
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 373,
	            column: 20
	          },
	          end: {
	            line: 376,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 373,
	            column: 20
	          },
	          end: {
	            line: 376,
	            column: 21
	          }
	        }],
	        line: 373
	      },
	      '34': {
	        loc: {
	          start: {
	            line: 394,
	            column: 8
	          },
	          end: {
	            line: 396,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 394,
	            column: 8
	          },
	          end: {
	            line: 396,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 394,
	            column: 8
	          },
	          end: {
	            line: 396,
	            column: 9
	          }
	        }],
	        line: 394
	      },
	      '35': {
	        loc: {
	          start: {
	            line: 398,
	            column: 8
	          },
	          end: {
	            line: 403,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 398,
	            column: 8
	          },
	          end: {
	            line: 403,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 398,
	            column: 8
	          },
	          end: {
	            line: 403,
	            column: 9
	          }
	        }],
	        line: 398
	      },
	      '36': {
	        loc: {
	          start: {
	            line: 400,
	            column: 12
	          },
	          end: {
	            line: 402,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 400,
	            column: 12
	          },
	          end: {
	            line: 402,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 400,
	            column: 12
	          },
	          end: {
	            line: 402,
	            column: 13
	          }
	        }],
	        line: 400
	      },
	      '37': {
	        loc: {
	          start: {
	            line: 410,
	            column: 8
	          },
	          end: {
	            line: 414,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 410,
	            column: 8
	          },
	          end: {
	            line: 414,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 410,
	            column: 8
	          },
	          end: {
	            line: 414,
	            column: 9
	          }
	        }],
	        line: 410
	      },
	      '38': {
	        loc: {
	          start: {
	            line: 416,
	            column: 8
	          },
	          end: {
	            line: 418,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 416,
	            column: 8
	          },
	          end: {
	            line: 418,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 416,
	            column: 8
	          },
	          end: {
	            line: 418,
	            column: 9
	          }
	        }],
	        line: 416
	      },
	      '39': {
	        loc: {
	          start: {
	            line: 422,
	            column: 8
	          },
	          end: {
	            line: 424,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 422,
	            column: 8
	          },
	          end: {
	            line: 424,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 422,
	            column: 8
	          },
	          end: {
	            line: 424,
	            column: 9
	          }
	        }],
	        line: 422
	      },
	      '40': {
	        loc: {
	          start: {
	            line: 429,
	            column: 8
	          },
	          end: {
	            line: 429,
	            column: 37
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 429,
	            column: 8
	          },
	          end: {
	            line: 429,
	            column: 37
	          }
	        }, {
	          start: {
	            line: 429,
	            column: 8
	          },
	          end: {
	            line: 429,
	            column: 37
	          }
	        }],
	        line: 429
	      },
	      '41': {
	        loc: {
	          start: {
	            line: 431,
	            column: 8
	          },
	          end: {
	            line: 433,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 431,
	            column: 8
	          },
	          end: {
	            line: 433,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 431,
	            column: 8
	          },
	          end: {
	            line: 433,
	            column: 9
	          }
	        }],
	        line: 431
	      },
	      '42': {
	        loc: {
	          start: {
	            line: 439,
	            column: 8
	          },
	          end: {
	            line: 449,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 439,
	            column: 8
	          },
	          end: {
	            line: 449,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 439,
	            column: 8
	          },
	          end: {
	            line: 449,
	            column: 9
	          }
	        }],
	        line: 439
	      },
	      '43': {
	        loc: {
	          start: {
	            line: 440,
	            column: 12
	          },
	          end: {
	            line: 446,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 440,
	            column: 12
	          },
	          end: {
	            line: 446,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 440,
	            column: 12
	          },
	          end: {
	            line: 446,
	            column: 13
	          }
	        }],
	        line: 440
	      },
	      '44': {
	        loc: {
	          start: {
	            line: 441,
	            column: 16
	          },
	          end: {
	            line: 443,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 441,
	            column: 16
	          },
	          end: {
	            line: 443,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 441,
	            column: 16
	          },
	          end: {
	            line: 443,
	            column: 17
	          }
	        }],
	        line: 441
	      },
	      '45': {
	        loc: {
	          start: {
	            line: 458,
	            column: 8
	          },
	          end: {
	            line: 469,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 458,
	            column: 8
	          },
	          end: {
	            line: 469,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 458,
	            column: 8
	          },
	          end: {
	            line: 469,
	            column: 9
	          }
	        }],
	        line: 458
	      },
	      '46': {
	        loc: {
	          start: {
	            line: 460,
	            column: 16
	          },
	          end: {
	            line: 465,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 460,
	            column: 16
	          },
	          end: {
	            line: 465,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 460,
	            column: 16
	          },
	          end: {
	            line: 465,
	            column: 17
	          }
	        }],
	        line: 460
	      },
	      '47': {
	        loc: {
	          start: {
	            line: 460,
	            column: 20
	          },
	          end: {
	            line: 460,
	            column: 75
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 460,
	            column: 20
	          },
	          end: {
	            line: 460,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 460,
	            column: 28
	          },
	          end: {
	            line: 460,
	            column: 42
	          }
	        }, {
	          start: {
	            line: 460,
	            column: 46
	          },
	          end: {
	            line: 460,
	            column: 75
	          }
	        }],
	        line: 460
	      },
	      '48': {
	        loc: {
	          start: {
	            line: 481,
	            column: 16
	          },
	          end: {
	            line: 485,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 481,
	            column: 16
	          },
	          end: {
	            line: 485,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 481,
	            column: 16
	          },
	          end: {
	            line: 485,
	            column: 17
	          }
	        }],
	        line: 481
	      },
	      '49': {
	        loc: {
	          start: {
	            line: 488,
	            column: 16
	          },
	          end: {
	            line: 492,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 488,
	            column: 16
	          },
	          end: {
	            line: 492,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 488,
	            column: 16
	          },
	          end: {
	            line: 492,
	            column: 17
	          }
	        }],
	        line: 488
	      },
	      '50': {
	        loc: {
	          start: {
	            line: 498,
	            column: 16
	          },
	          end: {
	            line: 500,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 498,
	            column: 16
	          },
	          end: {
	            line: 500,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 498,
	            column: 16
	          },
	          end: {
	            line: 500,
	            column: 17
	          }
	        }],
	        line: 498
	      },
	      '51': {
	        loc: {
	          start: {
	            line: 498,
	            column: 20
	          },
	          end: {
	            line: 498,
	            column: 107
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 498,
	            column: 20
	          },
	          end: {
	            line: 498,
	            column: 62
	          }
	        }, {
	          start: {
	            line: 498,
	            column: 66
	          },
	          end: {
	            line: 498,
	            column: 107
	          }
	        }],
	        line: 498
	      },
	      '52': {
	        loc: {
	          start: {
	            line: 516,
	            column: 16
	          },
	          end: {
	            line: 520,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 516,
	            column: 16
	          },
	          end: {
	            line: 520,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 516,
	            column: 16
	          },
	          end: {
	            line: 520,
	            column: 17
	          }
	        }],
	        line: 516
	      },
	      '53': {
	        loc: {
	          start: {
	            line: 518,
	            column: 23
	          },
	          end: {
	            line: 520,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 518,
	            column: 23
	          },
	          end: {
	            line: 520,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 518,
	            column: 23
	          },
	          end: {
	            line: 520,
	            column: 17
	          }
	        }],
	        line: 518
	      },
	      '54': {
	        loc: {
	          start: {
	            line: 527,
	            column: 16
	          },
	          end: {
	            line: 531,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 527,
	            column: 16
	          },
	          end: {
	            line: 531,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 527,
	            column: 16
	          },
	          end: {
	            line: 531,
	            column: 17
	          }
	        }],
	        line: 527
	      },
	      '55': {
	        loc: {
	          start: {
	            line: 585,
	            column: 12
	          },
	          end: {
	            line: 588,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 585,
	            column: 12
	          },
	          end: {
	            line: 588,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 585,
	            column: 12
	          },
	          end: {
	            line: 588,
	            column: 13
	          }
	        }],
	        line: 585
	      },
	      '56': {
	        loc: {
	          start: {
	            line: 592,
	            column: 12
	          },
	          end: {
	            line: 595,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 592,
	            column: 12
	          },
	          end: {
	            line: 595,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 592,
	            column: 12
	          },
	          end: {
	            line: 595,
	            column: 13
	          }
	        }],
	        line: 592
	      },
	      '57': {
	        loc: {
	          start: {
	            line: 611,
	            column: 16
	          },
	          end: {
	            line: 615,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 611,
	            column: 16
	          },
	          end: {
	            line: 615,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 611,
	            column: 16
	          },
	          end: {
	            line: 615,
	            column: 17
	          }
	        }],
	        line: 611
	      },
	      '58': {
	        loc: {
	          start: {
	            line: 611,
	            column: 20
	          },
	          end: {
	            line: 611,
	            column: 105
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 611,
	            column: 20
	          },
	          end: {
	            line: 611,
	            column: 49
	          }
	        }, {
	          start: {
	            line: 611,
	            column: 53
	          },
	          end: {
	            line: 611,
	            column: 105
	          }
	        }],
	        line: 611
	      },
	      '59': {
	        loc: {
	          start: {
	            line: 633,
	            column: 12
	          },
	          end: {
	            line: 633,
	            column: 38
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 633,
	            column: 12
	          },
	          end: {
	            line: 633,
	            column: 38
	          }
	        }, {
	          start: {
	            line: 633,
	            column: 12
	          },
	          end: {
	            line: 633,
	            column: 38
	          }
	        }],
	        line: 633
	      },
	      '60': {
	        loc: {
	          start: {
	            line: 636,
	            column: 12
	          },
	          end: {
	            line: 636,
	            column: 36
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 636,
	            column: 12
	          },
	          end: {
	            line: 636,
	            column: 36
	          }
	        }, {
	          start: {
	            line: 636,
	            column: 12
	          },
	          end: {
	            line: 636,
	            column: 36
	          }
	        }],
	        line: 636
	      },
	      '61': {
	        loc: {
	          start: {
	            line: 638,
	            column: 12
	          },
	          end: {
	            line: 640,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 638,
	            column: 12
	          },
	          end: {
	            line: 640,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 638,
	            column: 12
	          },
	          end: {
	            line: 640,
	            column: 13
	          }
	        }],
	        line: 638
	      },
	      '62': {
	        loc: {
	          start: {
	            line: 666,
	            column: 12
	          },
	          end: {
	            line: 695,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 666,
	            column: 12
	          },
	          end: {
	            line: 695,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 666,
	            column: 12
	          },
	          end: {
	            line: 695,
	            column: 13
	          }
	        }],
	        line: 666
	      },
	      '63': {
	        loc: {
	          start: {
	            line: 666,
	            column: 16
	          },
	          end: {
	            line: 666,
	            column: 99
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 666,
	            column: 16
	          },
	          end: {
	            line: 666,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 666,
	            column: 31
	          },
	          end: {
	            line: 666,
	            column: 60
	          }
	        }, {
	          start: {
	            line: 666,
	            column: 64
	          },
	          end: {
	            line: 666,
	            column: 99
	          }
	        }],
	        line: 666
	      },
	      '64': {
	        loc: {
	          start: {
	            line: 670,
	            column: 16
	          },
	          end: {
	            line: 677,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 670,
	            column: 16
	          },
	          end: {
	            line: 677,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 670,
	            column: 16
	          },
	          end: {
	            line: 677,
	            column: 17
	          }
	        }],
	        line: 670
	      },
	      '65': {
	        loc: {
	          start: {
	            line: 673,
	            column: 33
	          },
	          end: {
	            line: 673,
	            column: 103
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 673,
	            column: 53
	          },
	          end: {
	            line: 673,
	            column: 90
	          }
	        }, {
	          start: {
	            line: 673,
	            column: 93
	          },
	          end: {
	            line: 673,
	            column: 103
	          }
	        }],
	        line: 673
	      },
	      '66': {
	        loc: {
	          start: {
	            line: 674,
	            column: 33
	          },
	          end: {
	            line: 674,
	            column: 69
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 674,
	            column: 48
	          },
	          end: {
	            line: 674,
	            column: 64
	          }
	        }, {
	          start: {
	            line: 674,
	            column: 67
	          },
	          end: {
	            line: 674,
	            column: 69
	          }
	        }],
	        line: 674
	      },
	      '67': {
	        loc: {
	          start: {
	            line: 676,
	            column: 36
	          },
	          end: {
	            line: 676,
	            column: 78
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 676,
	            column: 54
	          },
	          end: {
	            line: 676,
	            column: 73
	          }
	        }, {
	          start: {
	            line: 676,
	            column: 76
	          },
	          end: {
	            line: 676,
	            column: 78
	          }
	        }],
	        line: 676
	      },
	      '68': {
	        loc: {
	          start: {
	            line: 687,
	            column: 16
	          },
	          end: {
	            line: 691,
	            column: 17
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 687,
	            column: 16
	          },
	          end: {
	            line: 691,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 687,
	            column: 16
	          },
	          end: {
	            line: 691,
	            column: 17
	          }
	        }],
	        line: 687
	      },
	      '69': {
	        loc: {
	          start: {
	            line: 708,
	            column: 12
	          },
	          end: {
	            line: 713,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 708,
	            column: 12
	          },
	          end: {
	            line: 713,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 708,
	            column: 12
	          },
	          end: {
	            line: 713,
	            column: 13
	          }
	        }],
	        line: 708
	      },
	      '70': {
	        loc: {
	          start: {
	            line: 718,
	            column: 12
	          },
	          end: {
	            line: 722,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 718,
	            column: 12
	          },
	          end: {
	            line: 722,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 718,
	            column: 12
	          },
	          end: {
	            line: 722,
	            column: 13
	          }
	        }],
	        line: 718
	      },
	      '71': {
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
	      '72': {
	        loc: {
	          start: {
	            line: 735,
	            column: 12
	          },
	          end: {
	            line: 737,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 735,
	            column: 12
	          },
	          end: {
	            line: 737,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 735,
	            column: 12
	          },
	          end: {
	            line: 737,
	            column: 13
	          }
	        }],
	        line: 735
	      },
	      '73': {
	        loc: {
	          start: {
	            line: 752,
	            column: 8
	          },
	          end: {
	            line: 754,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 752,
	            column: 8
	          },
	          end: {
	            line: 754,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 752,
	            column: 8
	          },
	          end: {
	            line: 754,
	            column: 9
	          }
	        }],
	        line: 752
	      },
	      '74': {
	        loc: {
	          start: {
	            line: 769,
	            column: 8
	          },
	          end: {
	            line: 773,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 769,
	            column: 8
	          },
	          end: {
	            line: 773,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 769,
	            column: 8
	          },
	          end: {
	            line: 773,
	            column: 9
	          }
	        }],
	        line: 769
	      },
	      '75': {
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
	      '76': {
	        loc: {
	          start: {
	            line: 806,
	            column: 12
	          },
	          end: {
	            line: 810,
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
	            line: 810,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 806,
	            column: 12
	          },
	          end: {
	            line: 810,
	            column: 13
	          }
	        }],
	        line: 806
	      },
	      '77': {
	        loc: {
	          start: {
	            line: 808,
	            column: 19
	          },
	          end: {
	            line: 810,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 808,
	            column: 19
	          },
	          end: {
	            line: 810,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 808,
	            column: 19
	          },
	          end: {
	            line: 810,
	            column: 13
	          }
	        }],
	        line: 808
	      },
	      '78': {
	        loc: {
	          start: {
	            line: 815,
	            column: 12
	          },
	          end: {
	            line: 819,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 815,
	            column: 12
	          },
	          end: {
	            line: 819,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 815,
	            column: 12
	          },
	          end: {
	            line: 819,
	            column: 13
	          }
	        }],
	        line: 815
	      },
	      '79': {
	        loc: {
	          start: {
	            line: 817,
	            column: 19
	          },
	          end: {
	            line: 819,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 817,
	            column: 19
	          },
	          end: {
	            line: 819,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 817,
	            column: 19
	          },
	          end: {
	            line: 819,
	            column: 13
	          }
	        }],
	        line: 817
	      },
	      '80': {
	        loc: {
	          start: {
	            line: 839,
	            column: 12
	          },
	          end: {
	            line: 844,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 839,
	            column: 12
	          },
	          end: {
	            line: 844,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 839,
	            column: 12
	          },
	          end: {
	            line: 844,
	            column: 13
	          }
	        }],
	        line: 839
	      },
	      '81': {
	        loc: {
	          start: {
	            line: 848,
	            column: 12
	          },
	          end: {
	            line: 852,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 848,
	            column: 12
	          },
	          end: {
	            line: 852,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 848,
	            column: 12
	          },
	          end: {
	            line: 852,
	            column: 13
	          }
	        }],
	        line: 848
	      },
	      '82': {
	        loc: {
	          start: {
	            line: 850,
	            column: 19
	          },
	          end: {
	            line: 852,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 850,
	            column: 19
	          },
	          end: {
	            line: 852,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 850,
	            column: 19
	          },
	          end: {
	            line: 852,
	            column: 13
	          }
	        }],
	        line: 850
	      },
	      '83': {
	        loc: {
	          start: {
	            line: 856,
	            column: 12
	          },
	          end: {
	            line: 860,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 856,
	            column: 12
	          },
	          end: {
	            line: 860,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 856,
	            column: 12
	          },
	          end: {
	            line: 860,
	            column: 13
	          }
	        }],
	        line: 856
	      },
	      '84': {
	        loc: {
	          start: {
	            line: 858,
	            column: 19
	          },
	          end: {
	            line: 860,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 858,
	            column: 19
	          },
	          end: {
	            line: 860,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 858,
	            column: 19
	          },
	          end: {
	            line: 860,
	            column: 13
	          }
	        }],
	        line: 858
	      },
	      '85': {
	        loc: {
	          start: {
	            line: 864,
	            column: 12
	          },
	          end: {
	            line: 868,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 864,
	            column: 12
	          },
	          end: {
	            line: 868,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 864,
	            column: 12
	          },
	          end: {
	            line: 868,
	            column: 13
	          }
	        }],
	        line: 864
	      },
	      '86': {
	        loc: {
	          start: {
	            line: 866,
	            column: 19
	          },
	          end: {
	            line: 868,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 866,
	            column: 19
	          },
	          end: {
	            line: 868,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 866,
	            column: 19
	          },
	          end: {
	            line: 868,
	            column: 13
	          }
	        }],
	        line: 866
	      },
	      '87': {
	        loc: {
	          start: {
	            line: 872,
	            column: 12
	          },
	          end: {
	            line: 876,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 872,
	            column: 12
	          },
	          end: {
	            line: 876,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 872,
	            column: 12
	          },
	          end: {
	            line: 876,
	            column: 13
	          }
	        }],
	        line: 872
	      },
	      '88': {
	        loc: {
	          start: {
	            line: 874,
	            column: 19
	          },
	          end: {
	            line: 876,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 874,
	            column: 19
	          },
	          end: {
	            line: 876,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 874,
	            column: 19
	          },
	          end: {
	            line: 876,
	            column: 13
	          }
	        }],
	        line: 874
	      },
	      '89': {
	        loc: {
	          start: {
	            line: 880,
	            column: 12
	          },
	          end: {
	            line: 884,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 880,
	            column: 12
	          },
	          end: {
	            line: 884,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 880,
	            column: 12
	          },
	          end: {
	            line: 884,
	            column: 13
	          }
	        }],
	        line: 880
	      },
	      '90': {
	        loc: {
	          start: {
	            line: 882,
	            column: 19
	          },
	          end: {
	            line: 884,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 882,
	            column: 19
	          },
	          end: {
	            line: 884,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 882,
	            column: 19
	          },
	          end: {
	            line: 884,
	            column: 13
	          }
	        }],
	        line: 882
	      },
	      '91': {
	        loc: {
	          start: {
	            line: 891,
	            column: 8
	          },
	          end: {
	            line: 894,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 891,
	            column: 8
	          },
	          end: {
	            line: 894,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 891,
	            column: 8
	          },
	          end: {
	            line: 894,
	            column: 9
	          }
	        }],
	        line: 891
	      },
	      '92': {
	        loc: {
	          start: {
	            line: 903,
	            column: 8
	          },
	          end: {
	            line: 905,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 903,
	            column: 8
	          },
	          end: {
	            line: 905,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 903,
	            column: 8
	          },
	          end: {
	            line: 905,
	            column: 9
	          }
	        }],
	        line: 903
	      },
	      '93': {
	        loc: {
	          start: {
	            line: 906,
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
	            line: 906,
	            column: 8
	          },
	          end: {
	            line: 918,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 906,
	            column: 8
	          },
	          end: {
	            line: 918,
	            column: 9
	          }
	        }],
	        line: 906
	      },
	      '94': {
	        loc: {
	          start: {
	            line: 906,
	            column: 12
	          },
	          end: {
	            line: 906,
	            column: 91
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 906,
	            column: 12
	          },
	          end: {
	            line: 906,
	            column: 53
	          }
	        }, {
	          start: {
	            line: 906,
	            column: 57
	          },
	          end: {
	            line: 906,
	            column: 91
	          }
	        }],
	        line: 906
	      },
	      '95': {
	        loc: {
	          start: {
	            line: 910,
	            column: 12
	          },
	          end: {
	            line: 917,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 910,
	            column: 12
	          },
	          end: {
	            line: 917,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 910,
	            column: 12
	          },
	          end: {
	            line: 917,
	            column: 13
	          }
	        }],
	        line: 910
	      },
	      '96': {
	        loc: {
	          start: {
	            line: 913,
	            column: 20
	          },
	          end: {
	            line: 915,
	            column: 21
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 913,
	            column: 20
	          },
	          end: {
	            line: 915,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 913,
	            column: 20
	          },
	          end: {
	            line: 915,
	            column: 21
	          }
	        }],
	        line: 913
	      },
	      '97': {
	        loc: {
	          start: {
	            line: 919,
	            column: 8
	          },
	          end: {
	            line: 931,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 919,
	            column: 8
	          },
	          end: {
	            line: 931,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 919,
	            column: 8
	          },
	          end: {
	            line: 931,
	            column: 9
	          }
	        }],
	        line: 919
	      },
	      '98': {
	        loc: {
	          start: {
	            line: 919,
	            column: 12
	          },
	          end: {
	            line: 919,
	            column: 97
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 919,
	            column: 12
	          },
	          end: {
	            line: 919,
	            column: 56
	          }
	        }, {
	          start: {
	            line: 919,
	            column: 60
	          },
	          end: {
	            line: 919,
	            column: 97
	          }
	        }],
	        line: 919
	      },
	      '99': {
	        loc: {
	          start: {
	            line: 923,
	            column: 12
	          },
	          end: {
	            line: 930,
	            column: 13
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 923,
	            column: 12
	          },
	          end: {
	            line: 930,
	            column: 13
	          }
	        }, {
	          start: {
	            line: 923,
	            column: 12
	          },
	          end: {
	            line: 930,
	            column: 13
	          }
	        }],
	        line: 923
	      },
	      '100': {
	        loc: {
	          start: {
	            line: 926,
	            column: 20
	          },
	          end: {
	            line: 928,
	            column: 21
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 926,
	            column: 20
	          },
	          end: {
	            line: 928,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 926,
	            column: 20
	          },
	          end: {
	            line: 928,
	            column: 21
	          }
	        }],
	        line: 926
	      },
	      '101': {
	        loc: {
	          start: {
	            line: 934,
	            column: 8
	          },
	          end: {
	            line: 939,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 934,
	            column: 8
	          },
	          end: {
	            line: 939,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 934,
	            column: 8
	          },
	          end: {
	            line: 939,
	            column: 9
	          }
	        }],
	        line: 934
	      },
	      '102': {
	        loc: {
	          start: {
	            line: 954,
	            column: 8
	          },
	          end: {
	            line: 957,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 954,
	            column: 8
	          },
	          end: {
	            line: 957,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 954,
	            column: 8
	          },
	          end: {
	            line: 957,
	            column: 9
	          }
	        }],
	        line: 954
	      },
	      '103': {
	        loc: {
	          start: {
	            line: 954,
	            column: 12
	          },
	          end: {
	            line: 954,
	            column: 135
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 954,
	            column: 12
	          },
	          end: {
	            line: 954,
	            column: 39
	          }
	        }, {
	          start: {
	            line: 954,
	            column: 44
	          },
	          end: {
	            line: 954,
	            column: 104
	          }
	        }, {
	          start: {
	            line: 954,
	            column: 108
	          },
	          end: {
	            line: 954,
	            column: 134
	          }
	        }],
	        line: 954
	      },
	      '104': {
	        loc: {
	          start: {
	            line: 959,
	            column: 8
	          },
	          end: {
	            line: 961,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 959,
	            column: 8
	          },
	          end: {
	            line: 961,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 959,
	            column: 8
	          },
	          end: {
	            line: 961,
	            column: 9
	          }
	        }],
	        line: 959
	      },
	      '105': {
	        loc: {
	          start: {
	            line: 959,
	            column: 12
	          },
	          end: {
	            line: 959,
	            column: 97
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 959,
	            column: 12
	          },
	          end: {
	            line: 959,
	            column: 53
	          }
	        }, {
	          start: {
	            line: 959,
	            column: 57
	          },
	          end: {
	            line: 959,
	            column: 97
	          }
	        }],
	        line: 959
	      },
	      '106': {
	        loc: {
	          start: {
	            line: 967,
	            column: 8
	          },
	          end: {
	            line: 986,
	            column: 9
	          }
	        },
	        type: 'switch',
	        locations: [{
	          start: {
	            line: 968,
	            column: 12
	          },
	          end: {
	            line: 969,
	            column: 106
	          }
	        }, {
	          start: {
	            line: 970,
	            column: 12
	          },
	          end: {
	            line: 971,
	            column: 117
	          }
	        }, {
	          start: {
	            line: 972,
	            column: 12
	          },
	          end: {
	            line: 973,
	            column: 122
	          }
	        }, {
	          start: {
	            line: 974,
	            column: 12
	          },
	          end: {
	            line: 975,
	            column: 115
	          }
	        }, {
	          start: {
	            line: 976,
	            column: 12
	          },
	          end: {
	            line: 977,
	            column: 126
	          }
	        }, {
	          start: {
	            line: 978,
	            column: 12
	          },
	          end: {
	            line: 979,
	            column: 131
	          }
	        }, {
	          start: {
	            line: 980,
	            column: 12
	          },
	          end: {
	            line: 981,
	            column: 136
	          }
	        }, {
	          start: {
	            line: 982,
	            column: 12
	          },
	          end: {
	            line: 983,
	            column: 103
	          }
	        }, {
	          start: {
	            line: 984,
	            column: 12
	          },
	          end: {
	            line: 985,
	            column: 28
	          }
	        }],
	        line: 967
	      },
	      '107': {
	        loc: {
	          start: {
	            line: 969,
	            column: 56
	          },
	          end: {
	            line: 969,
	            column: 105
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 969,
	            column: 76
	          },
	          end: {
	            line: 969,
	            column: 100
	          }
	        }, {
	          start: {
	            line: 969,
	            column: 103
	          },
	          end: {
	            line: 969,
	            column: 105
	          }
	        }],
	        line: 969
	      },
	      '108': {
	        loc: {
	          start: {
	            line: 971,
	            column: 67
	          },
	          end: {
	            line: 971,
	            column: 116
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 971,
	            column: 87
	          },
	          end: {
	            line: 971,
	            column: 111
	          }
	        }, {
	          start: {
	            line: 971,
	            column: 114
	          },
	          end: {
	            line: 971,
	            column: 116
	          }
	        }],
	        line: 971
	      },
	      '109': {
	        loc: {
	          start: {
	            line: 973,
	            column: 72
	          },
	          end: {
	            line: 973,
	            column: 121
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 973,
	            column: 92
	          },
	          end: {
	            line: 973,
	            column: 116
	          }
	        }, {
	          start: {
	            line: 973,
	            column: 119
	          },
	          end: {
	            line: 973,
	            column: 121
	          }
	        }],
	        line: 973
	      },
	      '110': {
	        loc: {
	          start: {
	            line: 975,
	            column: 65
	          },
	          end: {
	            line: 975,
	            column: 114
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 975,
	            column: 85
	          },
	          end: {
	            line: 975,
	            column: 109
	          }
	        }, {
	          start: {
	            line: 975,
	            column: 112
	          },
	          end: {
	            line: 975,
	            column: 114
	          }
	        }],
	        line: 975
	      },
	      '111': {
	        loc: {
	          start: {
	            line: 977,
	            column: 76
	          },
	          end: {
	            line: 977,
	            column: 125
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 977,
	            column: 96
	          },
	          end: {
	            line: 977,
	            column: 120
	          }
	        }, {
	          start: {
	            line: 977,
	            column: 123
	          },
	          end: {
	            line: 977,
	            column: 125
	          }
	        }],
	        line: 977
	      },
	      '112': {
	        loc: {
	          start: {
	            line: 979,
	            column: 81
	          },
	          end: {
	            line: 979,
	            column: 130
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 979,
	            column: 101
	          },
	          end: {
	            line: 979,
	            column: 125
	          }
	        }, {
	          start: {
	            line: 979,
	            column: 128
	          },
	          end: {
	            line: 979,
	            column: 130
	          }
	        }],
	        line: 979
	      },
	      '113': {
	        loc: {
	          start: {
	            line: 981,
	            column: 86
	          },
	          end: {
	            line: 981,
	            column: 135
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 981,
	            column: 106
	          },
	          end: {
	            line: 981,
	            column: 130
	          }
	        }, {
	          start: {
	            line: 981,
	            column: 133
	          },
	          end: {
	            line: 981,
	            column: 135
	          }
	        }],
	        line: 981
	      },
	      '114': {
	        loc: {
	          start: {
	            line: 983,
	            column: 53
	          },
	          end: {
	            line: 983,
	            column: 102
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 983,
	            column: 73
	          },
	          end: {
	            line: 983,
	            column: 97
	          }
	        }, {
	          start: {
	            line: 983,
	            column: 100
	          },
	          end: {
	            line: 983,
	            column: 102
	          }
	        }],
	        line: 983
	      },
	      '115': {
	        loc: {
	          start: {
	            line: 996,
	            column: 8
	          },
	          end: {
	            line: 998,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 996,
	            column: 8
	          },
	          end: {
	            line: 998,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 996,
	            column: 8
	          },
	          end: {
	            line: 998,
	            column: 9
	          }
	        }],
	        line: 996
	      },
	      '116': {
	        loc: {
	          start: {
	            line: 996,
	            column: 12
	          },
	          end: {
	            line: 996,
	            column: 57
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 996,
	            column: 12
	          },
	          end: {
	            line: 996,
	            column: 35
	          }
	        }, {
	          start: {
	            line: 996,
	            column: 39
	          },
	          end: {
	            line: 996,
	            column: 57
	          }
	        }],
	        line: 996
	      },
	      '117': {
	        loc: {
	          start: {
	            line: 1001,
	            column: 8
	          },
	          end: {
	            line: 1004,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 1001,
	            column: 8
	          },
	          end: {
	            line: 1004,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 1001,
	            column: 8
	          },
	          end: {
	            line: 1004,
	            column: 9
	          }
	        }],
	        line: 1001
	      },
	      '118': {
	        loc: {
	          start: {
	            line: 1010,
	            column: 8
	          },
	          end: {
	            line: 1010,
	            column: 43
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 1010,
	            column: 8
	          },
	          end: {
	            line: 1010,
	            column: 43
	          }
	        }, {
	          start: {
	            line: 1010,
	            column: 8
	          },
	          end: {
	            line: 1010,
	            column: 43
	          }
	        }],
	        line: 1010
	      },
	      '119': {
	        loc: {
	          start: {
	            line: 1011,
	            column: 8
	          },
	          end: {
	            line: 1011,
	            column: 49
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 1011,
	            column: 8
	          },
	          end: {
	            line: 1011,
	            column: 49
	          }
	        }, {
	          start: {
	            line: 1011,
	            column: 8
	          },
	          end: {
	            line: 1011,
	            column: 49
	          }
	        }],
	        line: 1011
	      },
	      '120': {
	        loc: {
	          start: {
	            line: 1012,
	            column: 8
	          },
	          end: {
	            line: 1012,
	            column: 49
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 1012,
	            column: 8
	          },
	          end: {
	            line: 1012,
	            column: 49
	          }
	        }, {
	          start: {
	            line: 1012,
	            column: 8
	          },
	          end: {
	            line: 1012,
	            column: 49
	          }
	        }],
	        line: 1012
	      },
	      '121': {
	        loc: {
	          start: {
	            line: 1014,
	            column: 16
	          },
	          end: {
	            line: 1014,
	            column: 37
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 1014,
	            column: 29
	          },
	          end: {
	            line: 1014,
	            column: 32
	          }
	        }, {
	          start: {
	            line: 1014,
	            column: 35
	          },
	          end: {
	            line: 1014,
	            column: 37
	          }
	        }],
	        line: 1014
	      },
	      '122': {
	        loc: {
	          start: {
	            line: 1024,
	            column: 8
	          },
	          end: {
	            line: 1028,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 1024,
	            column: 8
	          },
	          end: {
	            line: 1028,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 1024,
	            column: 8
	          },
	          end: {
	            line: 1028,
	            column: 9
	          }
	        }],
	        line: 1024
	      },
	      '123': {
	        loc: {
	          start: {
	            line: 1024,
	            column: 12
	          },
	          end: {
	            line: 1024,
	            column: 85
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 1024,
	            column: 12
	          },
	          end: {
	            line: 1024,
	            column: 39
	          }
	        }, {
	          start: {
	            line: 1024,
	            column: 43
	          },
	          end: {
	            line: 1024,
	            column: 85
	          }
	        }],
	        line: 1024
	      },
	      '124': {
	        loc: {
	          start: {
	            line: 1026,
	            column: 15
	          },
	          end: {
	            line: 1028,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 1026,
	            column: 15
	          },
	          end: {
	            line: 1028,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 1026,
	            column: 15
	          },
	          end: {
	            line: 1028,
	            column: 9
	          }
	        }],
	        line: 1026
	      },
	      '125': {
	        loc: {
	          start: {
	            line: 1035,
	            column: 0
	          },
	          end: {
	            line: 1037,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 1035,
	            column: 0
	          },
	          end: {
	            line: 1037,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 1035,
	            column: 0
	          },
	          end: {
	            line: 1037,
	            column: 1
	          }
	        }],
	        line: 1035
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
	      '518': 0,
	      '519': 0,
	      '520': 0,
	      '521': 0,
	      '522': 0,
	      '523': 0,
	      '524': 0,
	      '525': 0,
	      '526': 0,
	      '527': 0,
	      '528': 0,
	      '529': 0,
	      '530': 0,
	      '531': 0
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
	      '97': 0
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
	      '63': [0, 0, 0],
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
	      '97': [0, 0],
	      '98': [0, 0],
	      '99': [0, 0],
	      '100': [0, 0],
	      '101': [0, 0],
	      '102': [0, 0],
	      '103': [0, 0, 0],
	      '104': [0, 0],
	      '105': [0, 0],
	      '106': [0, 0, 0, 0, 0, 0, 0, 0, 0],
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
	      '120': [0, 0],
	      '121': [0, 0],
	      '122': [0, 0],
	      '123': [0, 0],
	      '124': [0, 0],
	      '125': [0, 0]
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
	      this.contentModal = '' + '<div id="chromecastModal" class="ReactModal__Overlay ReactModal__Overlay--after-open modal-overlay chromecastModal" tabIndex="-1" role="dialog">' + '<section class="card">' + '<button id="closeCast" class="button button--close closeCast" type="button">' + '<span class="button__content">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon--X"><g><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></g></svg>' + '</span>' + '</button>' + '<div class="card__header--between">' + '<div class="card__section--flex">' + '<div>' + '<h2 className="card__title">Cast to...</h2>' + '</div>' + '</div>' + '<div></div>' + '</div>' + '<div class="card__main-actions">';
	      var loader = (cov_1iiyehkoov.s[55]++, '<div class="castLoader"></div>');
	      cov_1iiyehkoov.s[56]++;
	      this.client.on('device', function (device) {
	        cov_1iiyehkoov.f[2]++;
	        cov_1iiyehkoov.s[57]++;

	        if (device !== undefined) {
	          cov_1iiyehkoov.b[12][0]++;
	          cov_1iiyehkoov.s[58]++;

	          _this.receivers.push(device);

	          cov_1iiyehkoov.s[59]++;
	          _this.contentModal += '<fieldset-section id="' + device.name + '" class="selectCast"><div id="' + device.name + '" class="castFriendlyName">' + device.friendlyName + '</div>' + loader + '</fieldset-section>';
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
	        this.switchPlayer(e.value);
	      }.bind(this));
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
	        this.contentModal += '</div>' + '</section>' + '</div>';
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
	        this.contentModal += '</div>' + '</section>' + '</div>';
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
	    cov_1iiyehkoov.f[28]++;

	    var _this = (cov_1iiyehkoov.s[164]++, this);

	    var jsControlBar = (cov_1iiyehkoov.s[165]++, document.getElementsByClassName('vjs-control-bar'));
	    cov_1iiyehkoov.s[166]++;

	    if (document.getElementsByClassName('vjs-chromecast-button-mdns').length <= 0) {
	      cov_1iiyehkoov.b[26][0]++;
	      var castComponent = (cov_1iiyehkoov.s[167]++, document.createElement('button'));
	      cov_1iiyehkoov.s[168]++;
	      castComponent.setAttribute('class', 'vjs-chromecast-button-mdns vjs-control vjs-button');
	      cov_1iiyehkoov.s[169]++;
	      castComponent.setAttribute('type', 'button');
	      cov_1iiyehkoov.s[170]++;
	      castComponent.addEventListener('click', function () {
	        cov_1iiyehkoov.f[29]++;
	        cov_1iiyehkoov.s[171]++;

	        _this.findSources();

	        cov_1iiyehkoov.s[172]++;

	        _this.prepareMediaForCast(function () {
	          cov_1iiyehkoov.f[30]++;
	          cov_1iiyehkoov.s[173]++;
	          document.body.appendChild(_this.container);
	          cov_1iiyehkoov.s[174]++;
	          document.getElementById('closeCast').addEventListener('click', _this.closeModal);
	          cov_1iiyehkoov.s[175]++;
	          document.getElementById('chromecastModal').addEventListener('click', _this.closeModalFromBack);
	          var castSelection = (cov_1iiyehkoov.s[176]++, document.getElementsByClassName('selectCast'));
	          cov_1iiyehkoov.s[177]++;

	          for (var i = 0; i < castSelection.length; i++) {
	            cov_1iiyehkoov.s[178]++;

	            (function (index) {
	              cov_1iiyehkoov.f[31]++;
	              cov_1iiyehkoov.s[179]++;
	              castSelection[index].addEventListener('click', _this.selectCast.bind(_this));
	            })(i);
	          }
	        });
	      });
	      cov_1iiyehkoov.s[180]++;

	      if (jsControlBar.length > 0) {
	        cov_1iiyehkoov.b[27][0]++;
	        cov_1iiyehkoov.s[181]++;
	        jsControlBar[0].appendChild(castComponent);
	        var getCastBtn = (cov_1iiyehkoov.s[182]++, document.getElementsByClassName('vjs-chromecast-button-mdns'));
	        cov_1iiyehkoov.s[183]++;
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
	    var el = (cov_1iiyehkoov.s[184]++, document.getElementById('containerModal'));
	    var cloned = (cov_1iiyehkoov.s[185]++, el.cloneNode(true));
	    cov_1iiyehkoov.s[186]++;
	    el.parentNode.replaceChild(cloned, el);
	    cov_1iiyehkoov.s[187]++;
	    document.body.removeChild(cloned);
	  };

	  _proto.closeModalFromBack = function closeModalFromBack(e) {
	    cov_1iiyehkoov.f[33]++;
	    cov_1iiyehkoov.s[188]++;

	    if (e.target === document.getElementById('chromecastModal')) {
	      cov_1iiyehkoov.b[28][0]++;
	      cov_1iiyehkoov.s[189]++;
	      document.body.removeChild(document.getElementById('containerModal'));
	    } else {
	      cov_1iiyehkoov.b[28][1]++;
	    }
	  };

	  _proto.selectCast = function selectCast(e) {
	    var _this3 = this;

	    cov_1iiyehkoov.f[34]++;
	    var castId = (cov_1iiyehkoov.s[190]++, e.target.id);

	    var _this = (cov_1iiyehkoov.s[191]++, this);

	    var c = (cov_1iiyehkoov.s[192]++, document.getElementById(castId).childNodes);
	    cov_1iiyehkoov.s[193]++;

	    if (c.length > 0) {
	      cov_1iiyehkoov.b[29][0]++;
	      cov_1iiyehkoov.s[194]++;
	      c[1].style.opacity = 1;
	    } else {
	      cov_1iiyehkoov.b[29][1]++;
	    }

	    cov_1iiyehkoov.s[195]++;

	    for (var i = 0; i < this.receivers.length; i++) {
	      cov_1iiyehkoov.s[196]++;

	      if (this.receivers[i].name === castId) {
	        cov_1iiyehkoov.b[30][0]++;
	        cov_1iiyehkoov.s[197]++;
	        this.selectedDevice = this.receivers[i];
	      } else {
	        cov_1iiyehkoov.b[30][1]++;
	      }
	    }

	    cov_1iiyehkoov.s[198]++;

	    if (this.selectedDevice != null) {
	      cov_1iiyehkoov.b[31][0]++;
	      cov_1iiyehkoov.s[199]++;
	      this.setupLocalPlayer();
	      cov_1iiyehkoov.s[200]++;
	      this.playerHandler.pause();
	      cov_1iiyehkoov.s[201]++;
	      this.selectedDevice.play(this.mediaInfoMDNS, function (err) {
	        cov_1iiyehkoov.f[35]++;
	        cov_1iiyehkoov.s[202]++;

	        if (err) {
	          cov_1iiyehkoov.b[32][0]++;
	          cov_1iiyehkoov.s[203]++;
	          videojs$1.log(err);
	        } else {
	          cov_1iiyehkoov.b[32][1]++;
	          cov_1iiyehkoov.s[204]++;

	          if (c.length > 0) {
	            cov_1iiyehkoov.b[33][0]++;
	            cov_1iiyehkoov.s[205]++;
	            c[1].style.opacity = 0;
	            cov_1iiyehkoov.s[206]++;
	            document.getElementsByClassName("vjs-chromecast-button-mdns")[0].classList.add("connected");
	          } else {
	            cov_1iiyehkoov.b[33][1]++;
	          }

	          cov_1iiyehkoov.s[207]++;

	          _this3.playerHandler.load();

	          cov_1iiyehkoov.s[208]++;

	          _this3.player_.loadTech_('ChromecastTech', {
	            type: 'cast',
	            cast_: _this3,
	            apiSession: _this3.apiSession
	          });

	          cov_1iiyehkoov.s[209]++;

	          _this3.closeModal(e);

	          cov_1iiyehkoov.s[210]++;
	          _this3.casting = true;
	        }
	      });
	    } else {
	      cov_1iiyehkoov.b[31][1]++;
	    }
	  };

	  _proto.hide = function hide() {
	    cov_1iiyehkoov.f[36]++;
	    cov_1iiyehkoov.s[211]++;

	    _Button.prototype.hide.call(this);

	    var castButton = (cov_1iiyehkoov.s[212]++, document.getElementsByClassName('vjs-chromecast-button'));
	    cov_1iiyehkoov.s[213]++;

	    if (castButton.length > 0) {
	      cov_1iiyehkoov.b[34][0]++;
	      cov_1iiyehkoov.s[214]++;
	      castButton[0].style.display = 'none';
	    } else {
	      cov_1iiyehkoov.b[34][1]++;
	    }

	    cov_1iiyehkoov.s[215]++;

	    if (this.mDNS) {
	      cov_1iiyehkoov.b[35][0]++;
	      cov_1iiyehkoov.s[216]++;
	      castButton = document.getElementsByClassName('vjs-chromecast-button-mdns');
	      cov_1iiyehkoov.s[217]++;

	      if (castButton.length > 0) {
	        cov_1iiyehkoov.b[36][0]++;
	        cov_1iiyehkoov.s[218]++;
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
	    cov_1iiyehkoov.s[219]++;

	    _Button.prototype.show.call(this);

	    var castButton = (cov_1iiyehkoov.s[220]++, null);
	    cov_1iiyehkoov.s[221]++;

	    if (this.mDNS) {
	      cov_1iiyehkoov.b[37][0]++;
	      cov_1iiyehkoov.s[222]++;
	      castButton = document.getElementsByClassName('vjs-chromecast-button-mdns');
	    } else {
	      cov_1iiyehkoov.b[37][1]++;
	      cov_1iiyehkoov.s[223]++;
	      castButton = document.getElementsByClassName('vjs-chromecast-button');
	    }

	    cov_1iiyehkoov.s[224]++;

	    if (castButton.length > 0) {
	      cov_1iiyehkoov.b[38][0]++;
	      cov_1iiyehkoov.s[225]++;
	      castButton[0].style.display = 'block';
	    } else {
	      cov_1iiyehkoov.b[38][1]++;
	    }
	  };

	  _proto.buildCSSClass = function buildCSSClass() {
	    cov_1iiyehkoov.f[38]++;
	    cov_1iiyehkoov.s[226]++;

	    if (this.mDNS) {
	      cov_1iiyehkoov.b[39][0]++;
	      cov_1iiyehkoov.s[227]++;
	      return "vjs-chromecast-button-mdns " + _Button.prototype.buildCSSClass.call(this, this);
	    } else {
	      cov_1iiyehkoov.b[39][1]++;
	    }

	    cov_1iiyehkoov.s[228]++;
	    return "vjs-chromecast-button " + _Button.prototype.buildCSSClass.call(this, this);
	  };

	  _proto.receiverListener = function receiverListener(availability) {
	    cov_1iiyehkoov.f[39]++;
	    cov_1iiyehkoov.s[229]++;

	    if (this.disposed) {
	      cov_1iiyehkoov.b[40][0]++;
	      cov_1iiyehkoov.s[230]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[40][1]++;
	    }

	    cov_1iiyehkoov.s[231]++;

	    if (availability === 'available') {
	      cov_1iiyehkoov.b[41][0]++;
	      cov_1iiyehkoov.s[232]++;
	      return this.show();
	    } else {
	      cov_1iiyehkoov.b[41][1]++;
	    }

	    cov_1iiyehkoov.s[233]++;
	    return this.hide();
	  };

	  _proto.findSources = function findSources() {
	    cov_1iiyehkoov.f[40]++;
	    var source = (cov_1iiyehkoov.s[234]++, null);
	    cov_1iiyehkoov.s[235]++;

	    if (this.player_ === null) {
	      cov_1iiyehkoov.b[42][0]++;
	      cov_1iiyehkoov.s[236]++;

	      if (this.player.cache_ !== undefined) {
	        cov_1iiyehkoov.b[43][0]++;
	        cov_1iiyehkoov.s[237]++;

	        if (this.player.cache_.source !== undefined) {
	          cov_1iiyehkoov.b[44][0]++;
	          cov_1iiyehkoov.s[238]++;
	          source = this.player.cache_.source;
	        } else {
	          cov_1iiyehkoov.b[44][1]++;
	        }
	      } else {
	        cov_1iiyehkoov.b[43][1]++;
	      }
	    } else {
	      cov_1iiyehkoov.b[42][1]++;
	      cov_1iiyehkoov.s[239]++;
	      source = this.player_.currentSource();
	    }

	    cov_1iiyehkoov.s[240]++;
	    this.sources = source;
	    cov_1iiyehkoov.s[241]++;
	    return this.sources;
	  };

	  _proto.switchPlayer = function switchPlayer(value) {
	    cov_1iiyehkoov.f[41]++;
	    cov_1iiyehkoov.s[242]++;
	    this.playerStateBeforeSwitch = this.playerState;
	    cov_1iiyehkoov.s[243]++;

	    if (value) {
	      cov_1iiyehkoov.b[45][0]++;
	      cov_1iiyehkoov.s[244]++;
	      this.prepareMediaForCast(function () {
	        cov_1iiyehkoov.f[42]++;
	        cov_1iiyehkoov.s[245]++;

	        if ((cov_1iiyehkoov.b[47][0]++, cast) && (cov_1iiyehkoov.b[47][1]++, cast.framework) && (cov_1iiyehkoov.b[47][2]++, this.remotePlayer.isConnected)) {
	          cov_1iiyehkoov.b[46][0]++;
	          cov_1iiyehkoov.s[246]++;
	          this.playerHandler.pause();
	          cov_1iiyehkoov.s[247]++;
	          this.setupRemotePlayer();
	        } else {
	          cov_1iiyehkoov.b[46][1]++;
	          cov_1iiyehkoov.s[248]++;
	          this.setupLocalPlayer();
	        }
	      }.bind(this));
	    } else {
	      cov_1iiyehkoov.b[45][1]++;
	      cov_1iiyehkoov.s[249]++;
	      this.prepareMediaForCast(this.setupLocalPlayer.bind(this));
	    }
	  };

	  _proto.setupRemotePlayer = function setupRemotePlayer() {
	    cov_1iiyehkoov.f[43]++;
	    cov_1iiyehkoov.s[250]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.MEDIA_INFO_CHANGED, function (event) {
	      cov_1iiyehkoov.f[44]++;
	      var session = (cov_1iiyehkoov.s[251]++, cast.framework.CastContext.getInstance().getCurrentSession());
	      cov_1iiyehkoov.s[252]++;

	      if (!session) {
	        cov_1iiyehkoov.b[48][0]++;
	        cov_1iiyehkoov.s[253]++;
	        this.mediaInfo = null;
	        cov_1iiyehkoov.s[254]++;
	        this.playerHandler.updateDisplay();
	        cov_1iiyehkoov.s[255]++;
	        return;
	      } else {
	        cov_1iiyehkoov.b[48][1]++;
	      }

	      var media = (cov_1iiyehkoov.s[256]++, session.getMediaSession());
	      cov_1iiyehkoov.s[257]++;

	      if (!media) {
	        cov_1iiyehkoov.b[49][0]++;
	        cov_1iiyehkoov.s[258]++;
	        this.mediaInfo = null;
	        cov_1iiyehkoov.s[259]++;
	        this.playerHandler.updateDisplay();
	        cov_1iiyehkoov.s[260]++;
	        return;
	      } else {
	        cov_1iiyehkoov.b[49][1]++;
	      }

	      cov_1iiyehkoov.s[261]++;
	      this.apiSession = session;
	      cov_1iiyehkoov.s[262]++;
	      this.mediaInfo = media.media;
	      cov_1iiyehkoov.s[263]++;

	      if ((cov_1iiyehkoov.b[51][0]++, media.playerState === PLAYER_STATE.PLAYING) && (cov_1iiyehkoov.b[51][1]++, this.playerState !== PLAYER_STATE.PLAYING)) {
	        cov_1iiyehkoov.b[50][0]++;
	        cov_1iiyehkoov.s[264]++;
	        this.playerHandler.prepareToPlay();
	      } else {
	        cov_1iiyehkoov.b[50][1]++;
	      }

	      cov_1iiyehkoov.s[265]++;
	      this.playerHandler.updateDisplay();
	    }.bind(this));
	    cov_1iiyehkoov.s[266]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.CAN_SEEK_CHANGED, function (event) {
	      cov_1iiyehkoov.f[45]++;
	    });
	    cov_1iiyehkoov.s[267]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED, function () {
	      cov_1iiyehkoov.f[46]++;
	      cov_1iiyehkoov.s[268]++;

	      if (this.remotePlayer.isPaused) {
	        cov_1iiyehkoov.b[52][0]++;
	        cov_1iiyehkoov.s[269]++;
	        this.playerHandler.pause();
	      } else {
	        cov_1iiyehkoov.b[52][1]++;
	        cov_1iiyehkoov.s[270]++;

	        if (this.playerState !== PLAYER_STATE.PLAYING) {
	          cov_1iiyehkoov.b[53][0]++;
	          cov_1iiyehkoov.s[271]++;
	          this.playerHandler.play();
	        } else {
	          cov_1iiyehkoov.b[53][1]++;
	        }
	      }
	    }.bind(this));
	    cov_1iiyehkoov.s[272]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED, function () {
	      cov_1iiyehkoov.f[47]++;
	      cov_1iiyehkoov.s[273]++;

	      if (this.remotePlayer.isMuted) {
	        cov_1iiyehkoov.b[54][0]++;
	        cov_1iiyehkoov.s[274]++;
	        this.playerHandler.mute();
	      } else {
	        cov_1iiyehkoov.b[54][1]++;
	        cov_1iiyehkoov.s[275]++;
	        this.playerHandler.unMute();
	      }
	    }.bind(this));
	    cov_1iiyehkoov.s[276]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, function () {
	      cov_1iiyehkoov.f[48]++;
	      var newVolume = (cov_1iiyehkoov.s[277]++, this.remotePlayer.volumeLevel);
	      cov_1iiyehkoov.s[278]++;
	      this.player_.setVolume(newVolume);
	    }.bind(this));
	    cov_1iiyehkoov.s[279]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.IS_PLAYING_BREAK_CHANGED, function (event) {
	      cov_1iiyehkoov.f[49]++;
	      cov_1iiyehkoov.s[280]++;
	      this.isPlayingBreak(event.value);
	    }.bind(this));
	    cov_1iiyehkoov.s[281]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.WHEN_SKIPPABLE_CHANGED, function (event) {
	      cov_1iiyehkoov.f[50]++;
	      cov_1iiyehkoov.s[282]++;
	      this.onWhenSkippableChanged(event.value);
	    }.bind(this));
	    cov_1iiyehkoov.s[283]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.CURRENT_BREAK_CLIP_TIME_CHANGED, function (event) {
	      cov_1iiyehkoov.f[51]++;
	      cov_1iiyehkoov.s[284]++;
	      this.onCurrentBreakClipTimeChanged(event.value);
	    }.bind(this));
	    cov_1iiyehkoov.s[285]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.BREAK_CLIP_ID_CHANGED, function (event) {
	      cov_1iiyehkoov.f[52]++;
	      cov_1iiyehkoov.s[286]++;
	      this.onBreakClipIdChanged(event.value);
	    }.bind(this));
	    cov_1iiyehkoov.s[287]++;
	    this.remotePlayerController.addEventListener(cast.framework.RemotePlayerEventType.LIVE_SEEKABLE_RANGE_CHANGED, function (event) {
	      cov_1iiyehkoov.f[53]++;
	      cov_1iiyehkoov.s[288]++;
	      videojs$1.log('LIVE_SEEKABLE_RANGE_CHANGED');
	      cov_1iiyehkoov.s[289]++;
	      this.liveSeekableRange = event.value;
	    }.bind(this));
	    var playerTarget = (cov_1iiyehkoov.s[290]++, {});
	    cov_1iiyehkoov.s[291]++;

	    playerTarget.play = function () {
	      cov_1iiyehkoov.f[54]++;
	      cov_1iiyehkoov.s[292]++;

	      if (this.remotePlayer.isPaused) {
	        cov_1iiyehkoov.b[55][0]++;
	        cov_1iiyehkoov.s[293]++;
	        this.remotePlayerController.playOrPause();
	        cov_1iiyehkoov.s[294]++;
	        this.player_.play();
	      } else {
	        cov_1iiyehkoov.b[55][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[295]++;

	    playerTarget.pause = function () {
	      cov_1iiyehkoov.f[55]++;
	      cov_1iiyehkoov.s[296]++;

	      if (!this.remotePlayer.isPaused) {
	        cov_1iiyehkoov.b[56][0]++;
	        cov_1iiyehkoov.s[297]++;
	        this.remotePlayerController.playOrPause();
	        cov_1iiyehkoov.s[298]++;
	        this.player_.pause();
	      } else {
	        cov_1iiyehkoov.b[56][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[299]++;

	    playerTarget.stop = function () {
	      cov_1iiyehkoov.f[56]++;
	      cov_1iiyehkoov.s[300]++;
	      this.remotePlayerController.stop();
	    }.bind(this);

	    cov_1iiyehkoov.s[301]++;

	    playerTarget.load = function () {
	      cov_1iiyehkoov.f[57]++;
	      cov_1iiyehkoov.s[302]++;
	      this.findSources();
	      cov_1iiyehkoov.s[303]++;
	      this.prepareMediaForCast(function () {
	        cov_1iiyehkoov.f[58]++;
	        cov_1iiyehkoov.s[304]++;
	        videojs$1.log('Loading...' + this.mediaInfo.metadata.title);
	        var request = (cov_1iiyehkoov.s[305]++, new chrome.cast.media.LoadRequest(this.mediaInfo));
	        cov_1iiyehkoov.s[306]++;
	        request.currentTime = this.currentMediaTime;
	        cov_1iiyehkoov.s[307]++;

	        if ((cov_1iiyehkoov.b[58][0]++, !this.playerStateBeforeSwitch) || (cov_1iiyehkoov.b[58][1]++, this.playerStateBeforeSwitch === PLAYER_STATE.PAUSED)) {
	          cov_1iiyehkoov.b[57][0]++;
	          cov_1iiyehkoov.s[308]++;
	          request.autoplay = false;
	        } else {
	          cov_1iiyehkoov.b[57][1]++;
	          cov_1iiyehkoov.s[309]++;
	          request.autoplay = true;
	        }

	        cov_1iiyehkoov.s[310]++;
	        cast.framework.CastContext.getInstance().getCurrentSession().loadMedia(request).then(function () {
	          cov_1iiyehkoov.f[59]++;
	          cov_1iiyehkoov.s[311]++;
	          this.casting = true;
	          cov_1iiyehkoov.s[312]++;
	          videojs$1.log('Remote media loaded');
	        }.bind(this), function (errorCode) {
	          cov_1iiyehkoov.f[60]++;
	          cov_1iiyehkoov.s[313]++;
	          this.playerState = PLAYER_STATE.IDLE;
	          cov_1iiyehkoov.s[314]++;
	          videojs$1.log('Remote media load error: ' + this.getErrorMessage(errorCode));
	          cov_1iiyehkoov.s[315]++;
	          this.playerHandler.updateDisplay();
	        }.bind(this));
	      }.bind(this));
	    };

	    cov_1iiyehkoov.s[316]++;

	    playerTarget.isMediaLoaded = function () {
	      cov_1iiyehkoov.f[61]++;
	      var session = (cov_1iiyehkoov.s[317]++, cast.framework.CastContext.getInstance().getCurrentSession());
	      cov_1iiyehkoov.s[318]++;

	      if (!session) {
	        cov_1iiyehkoov.b[59][0]++;
	        cov_1iiyehkoov.s[319]++;
	        return false;
	      } else {
	        cov_1iiyehkoov.b[59][1]++;
	      }

	      var media = (cov_1iiyehkoov.s[320]++, session.getMediaSession());
	      cov_1iiyehkoov.s[321]++;

	      if (!media) {
	        cov_1iiyehkoov.b[60][0]++;
	        cov_1iiyehkoov.s[322]++;
	        return false;
	      } else {
	        cov_1iiyehkoov.b[60][1]++;
	      }

	      cov_1iiyehkoov.s[323]++;

	      if (media.playerState === PLAYER_STATE.IDLE) {
	        cov_1iiyehkoov.b[61][0]++;
	        cov_1iiyehkoov.s[324]++;
	        return false;
	      } else {
	        cov_1iiyehkoov.b[61][1]++;
	      }

	      cov_1iiyehkoov.s[325]++;
	      this.apiSession = session;
	      cov_1iiyehkoov.s[326]++;
	      return true;
	    }.bind(this);

	    cov_1iiyehkoov.s[327]++;

	    playerTarget.getCurrentMediaTime = function () {
	      cov_1iiyehkoov.f[62]++;
	      cov_1iiyehkoov.s[328]++;
	      return this.remotePlayer.currentTime;
	    }.bind(this);

	    cov_1iiyehkoov.s[329]++;

	    playerTarget.getMediaDuration = function () {
	      cov_1iiyehkoov.f[63]++;
	      cov_1iiyehkoov.s[330]++;
	      return this.remotePlayer.duration;
	    }.bind(this);

	    cov_1iiyehkoov.s[331]++;

	    playerTarget.updateDisplay = function () {
	      cov_1iiyehkoov.f[64]++;
	      var castSession = (cov_1iiyehkoov.s[332]++, cast.framework.CastContext.getInstance().getCurrentSession());
	      cov_1iiyehkoov.s[333]++;

	      if ((cov_1iiyehkoov.b[63][0]++, castSession) && (cov_1iiyehkoov.b[63][1]++, castSession.getMediaSession()) && (cov_1iiyehkoov.b[63][2]++, castSession.getMediaSession().media)) {
	        cov_1iiyehkoov.b[62][0]++;
	        var media = (cov_1iiyehkoov.s[334]++, castSession.getMediaSession());
	        var mediaInfo = (cov_1iiyehkoov.s[335]++, media.media);
	        cov_1iiyehkoov.s[336]++;

	        if (mediaInfo.metadata) {
	          cov_1iiyehkoov.b[64][0]++;
	          var mediaTitle = (cov_1iiyehkoov.s[337]++, mediaInfo.metadata.title);
	          var mediaEpisodeTitle = (cov_1iiyehkoov.s[338]++, mediaInfo.metadata.episodeTitle);
	          cov_1iiyehkoov.s[339]++;
	          mediaTitle = mediaEpisodeTitle ? (cov_1iiyehkoov.b[65][0]++, mediaTitle + ': ' + mediaEpisodeTitle) : (cov_1iiyehkoov.b[65][1]++, mediaTitle);
	          cov_1iiyehkoov.s[340]++;
	          mediaTitle = mediaTitle ? (cov_1iiyehkoov.b[66][0]++, mediaTitle + ' ') : (cov_1iiyehkoov.b[66][1]++, '');
	          var mediaSubtitle = (cov_1iiyehkoov.s[341]++, mediaInfo.metadata.subtitle);
	          cov_1iiyehkoov.s[342]++;
	          mediaSubtitle = mediaSubtitle ? (cov_1iiyehkoov.b[67][0]++, mediaSubtitle + ' ') : (cov_1iiyehkoov.b[67][1]++, '');
	        } else {
	          cov_1iiyehkoov.b[64][1]++;
	        }
	      } else {
	        cov_1iiyehkoov.b[62][1]++;
	        cov_1iiyehkoov.s[343]++;
	        this.currentTech.dispose();
	        cov_1iiyehkoov.s[344]++;
	        this.casting = false;
	        var time = (cov_1iiyehkoov.s[345]++, this.player_.currentTime());
	        cov_1iiyehkoov.s[346]++;
	        this.removeClass('connected');
	        cov_1iiyehkoov.s[347]++;
	        this.player_.src(this.player_.options_.sources);
	        cov_1iiyehkoov.s[348]++;

	        if (!this.player_.paused()) {
	          cov_1iiyehkoov.b[68][0]++;
	          cov_1iiyehkoov.s[349]++;
	          this.player_.one('seeked', function () {
	            cov_1iiyehkoov.f[65]++;
	            cov_1iiyehkoov.s[350]++;
	            return this.player_.play();
	          });
	        } else {
	          cov_1iiyehkoov.b[68][1]++;
	        }

	        cov_1iiyehkoov.s[351]++;
	        this.player_.currentTime(time);
	        cov_1iiyehkoov.s[352]++;
	        this.player_.options_.inactivityTimeout = this.inactivityTimeout;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[353]++;

	    playerTarget.updateCurrentTimeDisplay = function () {
	      cov_1iiyehkoov.f[66]++;
	      cov_1iiyehkoov.s[354]++;
	      this.playerHandler.setTimeString(this.playerHandler.getCurrentMediaTime());
	    }.bind(this);

	    cov_1iiyehkoov.s[355]++;

	    playerTarget.updateDurationDisplay = function () {
	      cov_1iiyehkoov.f[67]++;
	      cov_1iiyehkoov.s[356]++;
	      this.playerHandler.setTimeString(this.playerHandler.getMediaDuration());
	    }.bind(this);

	    cov_1iiyehkoov.s[357]++;

	    playerTarget.setTimeString = function (time) {
	      cov_1iiyehkoov.f[68]++;
	      var currentTimeString = (cov_1iiyehkoov.s[358]++, this.getMediaTimeString(time));
	      cov_1iiyehkoov.s[359]++;

	      if (currentTimeString !== null) {
	        cov_1iiyehkoov.b[69][0]++;
	      } else {
	        cov_1iiyehkoov.b[69][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[360]++;

	    playerTarget.setVolume = function (volumePosition) {
	      cov_1iiyehkoov.f[69]++;
	      var currentVolume = (cov_1iiyehkoov.s[361]++, this.remotePlayer.volumeLevel);
	      cov_1iiyehkoov.s[362]++;

	      if (volumePosition > 1) {
	        cov_1iiyehkoov.b[70][0]++;
	        cov_1iiyehkoov.s[363]++;
	        currentVolume = 1;
	      } else {
	        cov_1iiyehkoov.b[70][1]++;
	        cov_1iiyehkoov.s[364]++;
	        currentVolume = volumePosition;
	      }

	      cov_1iiyehkoov.s[365]++;
	      this.remotePlayer.volumeLevel = currentVolume;
	      cov_1iiyehkoov.s[366]++;
	      this.remotePlayerController.setVolumeLevel();
	    }.bind(this);

	    cov_1iiyehkoov.s[367]++;

	    playerTarget.mute = function () {
	      cov_1iiyehkoov.f[70]++;
	      cov_1iiyehkoov.s[368]++;

	      if (!this.remotePlayer.isMuted) {
	        cov_1iiyehkoov.b[71][0]++;
	        cov_1iiyehkoov.s[369]++;
	        this.remotePlayerController.muteOrUnmute();
	      } else {
	        cov_1iiyehkoov.b[71][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[370]++;

	    playerTarget.unMute = function () {
	      cov_1iiyehkoov.f[71]++;
	      cov_1iiyehkoov.s[371]++;

	      if (this.remotePlayer.isMuted) {
	        cov_1iiyehkoov.b[72][0]++;
	        cov_1iiyehkoov.s[372]++;
	        this.remotePlayerController.muteOrUnmute();
	      } else {
	        cov_1iiyehkoov.b[72][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[373]++;

	    playerTarget.isMuted = function () {
	      cov_1iiyehkoov.f[72]++;
	      cov_1iiyehkoov.s[374]++;
	      return this.remotePlayer.isMuted;
	    }.bind(this);

	    cov_1iiyehkoov.s[375]++;

	    playerTarget.seekTo = function (time) {
	      cov_1iiyehkoov.f[73]++;
	      cov_1iiyehkoov.s[376]++;
	      this.remotePlayer.currentTime = time;
	      cov_1iiyehkoov.s[377]++;
	      this.remotePlayerController.seek();
	    }.bind(this);

	    cov_1iiyehkoov.s[378]++;
	    this.playerHandler.setTarget(playerTarget);
	    cov_1iiyehkoov.s[379]++;

	    if (this.remotePlayer.isMuted) {
	      cov_1iiyehkoov.b[73][0]++;
	      cov_1iiyehkoov.s[380]++;
	      this.playerHandler.mute();
	    } else {
	      cov_1iiyehkoov.b[73][1]++;
	    }

	    cov_1iiyehkoov.s[381]++;
	    this.apiSession = cast.framework.CastContext.getInstance().getCurrentSession();
	    cov_1iiyehkoov.s[382]++;
	    this.player_.loadTech_('ChromecastTech', {
	      type: 'cast',
	      cast_: this,
	      apiSession: this.apiSession
	    });
	    cov_1iiyehkoov.s[383]++;

	    if (this.apiSession === cast.framework.SessionState.SESSION_RESUMED) {
	      cov_1iiyehkoov.b[74][0]++;
	      cov_1iiyehkoov.s[384]++;
	      this.playerHandler.prepareToPlay();
	    } else {
	      cov_1iiyehkoov.b[74][1]++;
	      cov_1iiyehkoov.s[385]++;
	      this.playerHandler.load();
	    }
	  };

	  _proto.setupLocalPlayer = function setupLocalPlayer() {
	    cov_1iiyehkoov.f[74]++;
	    var playerTarget = (cov_1iiyehkoov.s[386]++, {});

	    var _this = (cov_1iiyehkoov.s[387]++, this);

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
	        cov_1iiyehkoov.b[75][0]++;
	        cov_1iiyehkoov.s[399]++;
	        return false;
	      } else {
	        cov_1iiyehkoov.b[75][1]++;
	      }

	      cov_1iiyehkoov.s[400]++;
	      return true;
	    }.bind(this);

	    cov_1iiyehkoov.s[401]++;

	    playerTarget.getCurrentMediaTime = function () {
	      cov_1iiyehkoov.f[80]++;
	      cov_1iiyehkoov.s[402]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[76][0]++;
	        cov_1iiyehkoov.s[403]++;
	        return this.player_.currentTime();
	      } else {
	        cov_1iiyehkoov.b[76][1]++;
	        cov_1iiyehkoov.s[404]++;

	        if (_this.player_ !== undefined) {
	          cov_1iiyehkoov.b[77][0]++;
	          cov_1iiyehkoov.s[405]++;
	          return _this.player_.currentTime();
	        } else {
	          cov_1iiyehkoov.b[77][1]++;
	        }
	      }

	      cov_1iiyehkoov.s[406]++;
	      return 0;
	    };

	    cov_1iiyehkoov.s[407]++;

	    playerTarget.getMediaDuration = function () {
	      cov_1iiyehkoov.f[81]++;
	      cov_1iiyehkoov.s[408]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[78][0]++;
	        cov_1iiyehkoov.s[409]++;
	        return this.player_.duration();
	      } else {
	        cov_1iiyehkoov.b[78][1]++;
	        cov_1iiyehkoov.s[410]++;

	        if (_this.player_ !== undefined) {
	          cov_1iiyehkoov.b[79][0]++;
	          cov_1iiyehkoov.s[411]++;
	          return _this.player_.duration();
	        } else {
	          cov_1iiyehkoov.b[79][1]++;
	        }
	      }

	      cov_1iiyehkoov.s[412]++;
	      return 0;
	    };

	    cov_1iiyehkoov.s[413]++;

	    playerTarget.updateDisplay = function () {
	      cov_1iiyehkoov.f[82]++;
	    };

	    cov_1iiyehkoov.s[414]++;

	    playerTarget.updateCurrentTimeDisplay = function () {
	      cov_1iiyehkoov.f[83]++;
	      cov_1iiyehkoov.s[415]++;
	      this.currentMediaTime += 1;
	      cov_1iiyehkoov.s[416]++;
	      this.playerHandler.setTimeString(this.currentMediaTime);
	    }.bind(this);

	    cov_1iiyehkoov.s[417]++;

	    playerTarget.updateDurationDisplay = function () {
	      cov_1iiyehkoov.f[84]++;
	      cov_1iiyehkoov.s[418]++;
	      this.playerHandler.setTimeString(this.mediaDuration);
	    }.bind(this);

	    cov_1iiyehkoov.s[419]++;

	    playerTarget.setTimeString = function (time) {
	      cov_1iiyehkoov.f[85]++;
	      var currentTimeString = (cov_1iiyehkoov.s[420]++, this.getMediaTimeString(time));
	      cov_1iiyehkoov.s[421]++;

	      if (currentTimeString !== null) {
	        cov_1iiyehkoov.b[80][0]++;
	      } else {
	        cov_1iiyehkoov.b[80][1]++;
	      }
	    }.bind(this);

	    cov_1iiyehkoov.s[422]++;

	    playerTarget.setVolume = function (volumePosition) {
	      cov_1iiyehkoov.f[86]++;
	      cov_1iiyehkoov.s[423]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[81][0]++;
	        cov_1iiyehkoov.s[424]++;
	        return this.player_.volume(volumePosition);
	      } else {
	        cov_1iiyehkoov.b[81][1]++;
	        cov_1iiyehkoov.s[425]++;

	        if (_this.player_ !== undefined) {
	          cov_1iiyehkoov.b[82][0]++;
	          cov_1iiyehkoov.s[426]++;
	          return _this.player_.volume(volumePosition);
	        } else {
	          cov_1iiyehkoov.b[82][1]++;
	        }
	      }
	    };

	    cov_1iiyehkoov.s[427]++;

	    playerTarget.mute = function () {
	      cov_1iiyehkoov.f[87]++;
	      cov_1iiyehkoov.s[428]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[83][0]++;
	        cov_1iiyehkoov.s[429]++;
	        return this.player_.mute(true);
	      } else {
	        cov_1iiyehkoov.b[83][1]++;
	        cov_1iiyehkoov.s[430]++;

	        if (_this.player_ !== undefined) {
	          cov_1iiyehkoov.b[84][0]++;
	          cov_1iiyehkoov.s[431]++;
	          return _this.player_.mute(true);
	        } else {
	          cov_1iiyehkoov.b[84][1]++;
	        }
	      }
	    };

	    cov_1iiyehkoov.s[432]++;

	    playerTarget.unMute = function () {
	      cov_1iiyehkoov.f[88]++;
	      cov_1iiyehkoov.s[433]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[85][0]++;
	        cov_1iiyehkoov.s[434]++;
	        return this.player_.mute(false);
	      } else {
	        cov_1iiyehkoov.b[85][1]++;
	        cov_1iiyehkoov.s[435]++;

	        if (_this.player_ !== undefined) {
	          cov_1iiyehkoov.b[86][0]++;
	          cov_1iiyehkoov.s[436]++;
	          return _this.player_.mute(false);
	        } else {
	          cov_1iiyehkoov.b[86][1]++;
	        }
	      }
	    };

	    cov_1iiyehkoov.s[437]++;

	    playerTarget.isMuted = function () {
	      cov_1iiyehkoov.f[89]++;
	      cov_1iiyehkoov.s[438]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[87][0]++;
	        cov_1iiyehkoov.s[439]++;
	        return this.player_.mute();
	      } else {
	        cov_1iiyehkoov.b[87][1]++;
	        cov_1iiyehkoov.s[440]++;

	        if (_this.player_ !== undefined) {
	          cov_1iiyehkoov.b[88][0]++;
	          cov_1iiyehkoov.s[441]++;
	          return _this.player_.mute();
	        } else {
	          cov_1iiyehkoov.b[88][1]++;
	        }
	      }
	    };

	    cov_1iiyehkoov.s[442]++;

	    playerTarget.seekTo = function (time) {
	      cov_1iiyehkoov.f[90]++;
	      cov_1iiyehkoov.s[443]++;

	      if (this.player_ !== undefined) {
	        cov_1iiyehkoov.b[89][0]++;
	        cov_1iiyehkoov.s[444]++;
	        return this.player_.currentTime(time);
	      } else {
	        cov_1iiyehkoov.b[89][1]++;
	        cov_1iiyehkoov.s[445]++;

	        if (_this.player_ !== undefined) {
	          cov_1iiyehkoov.b[90][0]++;
	          cov_1iiyehkoov.s[446]++;
	          return _this.player_.currentTime(time);
	        } else {
	          cov_1iiyehkoov.b[90][1]++;
	        }
	      }
	    };

	    cov_1iiyehkoov.s[447]++;
	    this.playerHandler.setTarget(playerTarget);
	    cov_1iiyehkoov.s[448]++;
	    this.playerHandler.setVolume(DEFAULT_VOLUME * FULL_VOLUME_HEIGHT);
	    cov_1iiyehkoov.s[449]++;

	    if (this.currentMediaTime > 0) {
	      cov_1iiyehkoov.b[91][0]++;
	      cov_1iiyehkoov.s[450]++;
	      this.playerHandler.load();
	      cov_1iiyehkoov.s[451]++;
	      this.playerHandler.play();
	    } else {
	      cov_1iiyehkoov.b[91][1]++;
	    }
	  };

	  _proto.prepareMediaForCast = function prepareMediaForCast(callback) {
	    cov_1iiyehkoov.f[91]++;
	    cov_1iiyehkoov.s[452]++;
	    this.mediaInfo = new chrome.cast.media.MediaInfo(this.sources.src, this.sources.type);
	    cov_1iiyehkoov.s[453]++;
	    this.mediaInfo.streamType = chrome.cast.media.StreamType.BUFFERED;
	    cov_1iiyehkoov.s[454]++;
	    this.mediaInfo.metadata = new chrome.cast.media.TvShowMediaMetadata();
	    cov_1iiyehkoov.s[455]++;
	    this.mediaInfo.metadata.title = '';
	    cov_1iiyehkoov.s[456]++;
	    this.mediaInfo.metadata.subtitle = '';
	    cov_1iiyehkoov.s[457]++;

	    if (this.options.metadata === undefined) {
	      cov_1iiyehkoov.b[92][0]++;
	      cov_1iiyehkoov.s[458]++;
	      this.options.metadata = {};
	    } else {
	      cov_1iiyehkoov.b[92][1]++;
	    }

	    cov_1iiyehkoov.s[459]++;

	    if ((cov_1iiyehkoov.b[94][0]++, this.options.metadata.title !== undefined) && (cov_1iiyehkoov.b[94][1]++, this.options.metadata.title !== '')) {
	      cov_1iiyehkoov.b[93][0]++;
	      cov_1iiyehkoov.s[460]++;
	      this.mediaInfo.metadata.title = this.options.metadata.title;
	    } else {
	      cov_1iiyehkoov.b[93][1]++;
	      var filepages1 = (cov_1iiyehkoov.s[461]++, document.getElementsByClassName('file-page__video'));
	      cov_1iiyehkoov.s[462]++;

	      if (filepages1.length > 0) {
	        cov_1iiyehkoov.b[95][0]++;
	        cov_1iiyehkoov.s[463]++;

	        for (var t = 0; t < filepages1.length; t++) {
	          var getTitles = (cov_1iiyehkoov.s[464]++, filepages1[t].getElementsByClassName('card__title'));
	          cov_1iiyehkoov.s[465]++;

	          if (getTitles.length > 0) {
	            cov_1iiyehkoov.b[96][0]++;
	            cov_1iiyehkoov.s[466]++;
	            this.mediaInfo.metadata.title = getTitles[0].innerText;
	          } else {
	            cov_1iiyehkoov.b[96][1]++;
	          }
	        }
	      } else {
	        cov_1iiyehkoov.b[95][1]++;
	      }
	    }

	    cov_1iiyehkoov.s[467]++;

	    if ((cov_1iiyehkoov.b[98][0]++, this.options.metadata.subtitle !== undefined) && (cov_1iiyehkoov.b[98][1]++, this.options.metadata.subtitle !== '')) {
	      cov_1iiyehkoov.b[97][0]++;
	      cov_1iiyehkoov.s[468]++;
	      this.mediaInfo.metadata.subtitle = this.options.metadata.subtitle;
	    } else {
	      cov_1iiyehkoov.b[97][1]++;
	      var filepages2 = (cov_1iiyehkoov.s[469]++, document.getElementsByClassName('file-page__video'));
	      cov_1iiyehkoov.s[470]++;

	      if (filepages2.length > 0) {
	        cov_1iiyehkoov.b[99][0]++;
	        cov_1iiyehkoov.s[471]++;

	        for (var c = 0; c < filepages2.length; c++) {
	          var getSubTitles = (cov_1iiyehkoov.s[472]++, filepages2[c].getElementsByClassName('channel-name'));
	          cov_1iiyehkoov.s[473]++;

	          if (getSubTitles.length > 0) {
	            cov_1iiyehkoov.b[100][0]++;
	            cov_1iiyehkoov.s[474]++;
	            this.mediaInfo.metadata.subtitle = getSubTitles[0].innerText;
	          } else {
	            cov_1iiyehkoov.b[100][1]++;
	          }
	        }
	      } else {
	        cov_1iiyehkoov.b[99][1]++;
	      }
	    }

	    var poster = (cov_1iiyehkoov.s[475]++, this.player_.poster());
	    cov_1iiyehkoov.s[476]++;

	    if (poster) {
	      cov_1iiyehkoov.b[101][0]++;
	      var image = (cov_1iiyehkoov.s[477]++, new chrome.cast.Image(poster));
	      cov_1iiyehkoov.s[478]++;
	      this.mediaInfo.metadata.images = [{
	        url: image
	      }];
	    } else {
	      cov_1iiyehkoov.b[101][1]++;
	    }

	    cov_1iiyehkoov.s[479]++;
	    this.mediaInfoMDNS.url = this.sources.src;
	    cov_1iiyehkoov.s[480]++;
	    this.mediaInfoMDNS.cover = {};
	    cov_1iiyehkoov.s[481]++;
	    this.mediaInfoMDNS.cover.title = this.mediaInfo.metadata.title;
	    cov_1iiyehkoov.s[482]++;
	    this.mediaInfoMDNS.cover.url = poster;
	    cov_1iiyehkoov.s[483]++;
	    callback();
	  };

	  _proto.onMediaLoadedLocally = function onMediaLoadedLocally() {
	    cov_1iiyehkoov.f[92]++;
	    cov_1iiyehkoov.s[484]++;
	    this.player_.currentTime(this.currentMediaTime);
	    cov_1iiyehkoov.s[485]++;
	    this.playerHandler.prepareToPlay();
	  };

	  _proto.seekMedia = function seekMedia(seekTime) {
	    cov_1iiyehkoov.f[93]++;
	    cov_1iiyehkoov.s[486]++;

	    if ((cov_1iiyehkoov.b[103][0]++, this.mediaDuration === null) || (cov_1iiyehkoov.b[103][1]++, cast.framework.CastContext.getInstance().getCurrentSession()) && (cov_1iiyehkoov.b[103][2]++, !this.remotePlayer.canSeek)) {
	      cov_1iiyehkoov.b[102][0]++;
	      cov_1iiyehkoov.s[487]++;
	      videojs$1.log('Error - Not seekable');
	      cov_1iiyehkoov.s[488]++;
	      return;
	    } else {
	      cov_1iiyehkoov.b[102][1]++;
	    }

	    cov_1iiyehkoov.s[489]++;

	    if ((cov_1iiyehkoov.b[105][0]++, this.playerState === PLAYER_STATE.PLAYING) || (cov_1iiyehkoov.b[105][1]++, this.playerState === PLAYER_STATE.PAUSED)) {
	      cov_1iiyehkoov.b[104][0]++;
	      cov_1iiyehkoov.s[490]++;
	      this.currentMediaTime = seekTime;
	    } else {
	      cov_1iiyehkoov.b[104][1]++;
	    }

	    cov_1iiyehkoov.s[491]++;
	    this.playerHandler.seekTo(seekTime);
	  };

	  _proto.getErrorMessage = function getErrorMessage(error) {
	    cov_1iiyehkoov.f[94]++;
	    cov_1iiyehkoov.s[492]++;

	    switch (error.code) {
	      case chrome.cast.ErrorCode.API_NOT_INITIALIZED:
	        cov_1iiyehkoov.b[106][0]++;
	        cov_1iiyehkoov.s[493]++;
	        return 'The API is not initialized.' + (error.description ? (cov_1iiyehkoov.b[107][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[107][1]++, ''));

	      case chrome.cast.ErrorCode.CANCEL:
	        cov_1iiyehkoov.b[106][1]++;
	        cov_1iiyehkoov.s[494]++;
	        return 'The operation was canceled by the user' + (error.description ? (cov_1iiyehkoov.b[108][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[108][1]++, ''));

	      case chrome.cast.ErrorCode.CHANNEL_ERROR:
	        cov_1iiyehkoov.b[106][2]++;
	        cov_1iiyehkoov.s[495]++;
	        return 'A channel to the receiver is not available.' + (error.description ? (cov_1iiyehkoov.b[109][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[109][1]++, ''));

	      case chrome.cast.ErrorCode.EXTENSION_MISSING:
	        cov_1iiyehkoov.b[106][3]++;
	        cov_1iiyehkoov.s[496]++;
	        return 'The Cast extension is not available.' + (error.description ? (cov_1iiyehkoov.b[110][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[110][1]++, ''));

	      case chrome.cast.ErrorCode.INVALID_PARAMETER:
	        cov_1iiyehkoov.b[106][4]++;
	        cov_1iiyehkoov.s[497]++;
	        return 'The parameters to the operation were not valid.' + (error.description ? (cov_1iiyehkoov.b[111][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[111][1]++, ''));

	      case chrome.cast.ErrorCode.RECEIVER_UNAVAILABLE:
	        cov_1iiyehkoov.b[106][5]++;
	        cov_1iiyehkoov.s[498]++;
	        return 'No receiver was compatible with the session request.' + (error.description ? (cov_1iiyehkoov.b[112][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[112][1]++, ''));

	      case chrome.cast.ErrorCode.SESSION_ERROR:
	        cov_1iiyehkoov.b[106][6]++;
	        cov_1iiyehkoov.s[499]++;
	        return 'A session could not be created, or a session was invalid.' + (error.description ? (cov_1iiyehkoov.b[113][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[113][1]++, ''));

	      case chrome.cast.ErrorCode.TIMEOUT:
	        cov_1iiyehkoov.b[106][7]++;
	        cov_1iiyehkoov.s[500]++;
	        return 'The operation timed out.' + (error.description ? (cov_1iiyehkoov.b[114][0]++, ' :' + error.description) : (cov_1iiyehkoov.b[114][1]++, ''));

	      default:
	        cov_1iiyehkoov.b[106][8]++;
	        cov_1iiyehkoov.s[501]++;
	        return error;
	    }
	  };

	  _proto.endPlayback = function endPlayback() {
	    cov_1iiyehkoov.f[95]++;
	    cov_1iiyehkoov.s[502]++;
	    this.currentMediaTime = 0;
	    cov_1iiyehkoov.s[503]++;
	    this.playerState = PLAYER_STATE.IDLE;
	    cov_1iiyehkoov.s[504]++;
	    this.this.updateDisplay();
	  };

	  _proto.getMediaTimeString = function getMediaTimeString(timestamp) {
	    cov_1iiyehkoov.f[96]++;
	    cov_1iiyehkoov.s[505]++;

	    if ((cov_1iiyehkoov.b[116][0]++, timestamp === undefined) || (cov_1iiyehkoov.b[116][1]++, timestamp === null)) {
	      cov_1iiyehkoov.b[115][0]++;
	      cov_1iiyehkoov.s[506]++;
	      return null;
	    } else {
	      cov_1iiyehkoov.b[115][1]++;
	    }

	    var isNegative = (cov_1iiyehkoov.s[507]++, false);
	    cov_1iiyehkoov.s[508]++;

	    if (timestamp < 0) {
	      cov_1iiyehkoov.b[117][0]++;
	      cov_1iiyehkoov.s[509]++;
	      isNegative = true;
	      cov_1iiyehkoov.s[510]++;
	      timestamp *= -1;
	    } else {
	      cov_1iiyehkoov.b[117][1]++;
	    }

	    var hours = (cov_1iiyehkoov.s[511]++, Math.floor(timestamp / 3600));
	    var minutes = (cov_1iiyehkoov.s[512]++, Math.floor((timestamp - hours * 3600) / 60));
	    var seconds = (cov_1iiyehkoov.s[513]++, Math.floor(timestamp - hours * 3600 - minutes * 60));
	    cov_1iiyehkoov.s[514]++;

	    if (hours < 10) {
	      cov_1iiyehkoov.b[118][0]++;
	      cov_1iiyehkoov.s[515]++;
	      hours = '0' + hours;
	    } else {
	      cov_1iiyehkoov.b[118][1]++;
	    }

	    cov_1iiyehkoov.s[516]++;

	    if (minutes < 10) {
	      cov_1iiyehkoov.b[119][0]++;
	      cov_1iiyehkoov.s[517]++;
	      minutes = '0' + minutes;
	    } else {
	      cov_1iiyehkoov.b[119][1]++;
	    }

	    cov_1iiyehkoov.s[518]++;

	    if (seconds < 10) {
	      cov_1iiyehkoov.b[120][0]++;
	      cov_1iiyehkoov.s[519]++;
	      seconds = '0' + seconds;
	    } else {
	      cov_1iiyehkoov.b[120][1]++;
	    }

	    cov_1iiyehkoov.s[520]++;
	    return (isNegative ? (cov_1iiyehkoov.b[121][0]++, '-') : (cov_1iiyehkoov.b[121][1]++, '')) + hours + ':' + minutes + ':' + seconds;
	  };

	  _proto.incrementMediaTime = function incrementMediaTime() {
	    cov_1iiyehkoov.f[97]++;
	    cov_1iiyehkoov.s[521]++;
	    this.currentMediaTime = this.playerHandler.getCurrentMediaTime();
	    cov_1iiyehkoov.s[522]++;
	    this.mediaDuration = this.playerHandler.getMediaDuration();
	    cov_1iiyehkoov.s[523]++;
	    this.playerHandler.updateDurationDisplay();
	    cov_1iiyehkoov.s[524]++;

	    if ((cov_1iiyehkoov.b[123][0]++, this.mediaDuration === null) || (cov_1iiyehkoov.b[123][1]++, this.currentMediaTime < this.mediaDuration)) {
	      cov_1iiyehkoov.b[122][0]++;
	      cov_1iiyehkoov.s[525]++;
	      this.playerHandler.updateCurrentTimeDisplay();
	    } else {
	      cov_1iiyehkoov.b[122][1]++;
	      cov_1iiyehkoov.s[526]++;

	      if (this.mediaDuration > 0) {
	        cov_1iiyehkoov.b[124][0]++;
	        cov_1iiyehkoov.s[527]++;
	        this.endPlayback();
	      } else {
	        cov_1iiyehkoov.b[124][1]++;
	      }
	    }
	  };

	  return ChromecastButton;
	}(Button);

	cov_1iiyehkoov.s[528]++;
	ChromecastButton.prototype.controlText_ = 'Chromecast';
	cov_1iiyehkoov.s[529]++;
	ControlBar.prototype.options_.children.splice(ControlBar.prototype.options_.children.length - 1, 0, 'chromeCastButton');
	cov_1iiyehkoov.s[530]++;

	if (typeof videojs$1.getComponent('ChromecastButton') === 'undefined') {
	  cov_1iiyehkoov.b[125][0]++;
	  cov_1iiyehkoov.s[531]++;
	  videojs$1.registerComponent('ChromecastButton', ChromecastButton);
	} else {
	  cov_1iiyehkoov.b[125][1]++;
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

	var version = "0.0.8";

	var cov_279kbuek1j = function () {
	  var path = '/Users/plo/Blockchain.nosync/LBRY/App/plugins/videojs-google-chromecast/src/plugin.js',
	      hash = '5fda12e96ef92816393725d60c125c04cc45d651',
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
	          line: 40,
	          column: 1
	        }
	      },
	      '1': {
	        start: {
	          line: 14,
	          column: 17
	        },
	        end: {
	          line: 14,
	          column: 21
	        }
	      },
	      '2': {
	        start: {
	          line: 16,
	          column: 2
	        },
	        end: {
	          line: 18,
	          column: 3
	        }
	      },
	      '3': {
	        start: {
	          line: 17,
	          column: 4
	        },
	        end: {
	          line: 17,
	          column: 10
	        }
	      },
	      '4': {
	        start: {
	          line: 20,
	          column: 23
	        },
	        end: {
	          line: 20,
	          column: 114
	        }
	      },
	      '5': {
	        start: {
	          line: 21,
	          column: 2
	        },
	        end: {
	          line: 31,
	          column: 4
	        }
	      },
	      '6': {
	        start: {
	          line: 22,
	          column: 4
	        },
	        end: {
	          line: 24,
	          column: 5
	        }
	      },
	      '7': {
	        start: {
	          line: 23,
	          column: 6
	        },
	        end: {
	          line: 23,
	          column: 37
	        }
	      },
	      '8': {
	        start: {
	          line: 26,
	          column: 4
	        },
	        end: {
	          line: 30,
	          column: 5
	        }
	      },
	      '9': {
	        start: {
	          line: 27,
	          column: 6
	        },
	        end: {
	          line: 27,
	          column: 23
	        }
	      },
	      '10': {
	        start: {
	          line: 29,
	          column: 6
	        },
	        end: {
	          line: 29,
	          column: 52
	        }
	      },
	      '11': {
	        start: {
	          line: 33,
	          column: 2
	        },
	        end: {
	          line: 39,
	          column: 3
	        }
	      },
	      '12': {
	        start: {
	          line: 34,
	          column: 20
	        },
	        end: {
	          line: 34,
	          column: 35
	        }
	      },
	      '13': {
	        start: {
	          line: 35,
	          column: 29
	        },
	        end: {
	          line: 35,
	          column: 79
	        }
	      },
	      '14': {
	        start: {
	          line: 37,
	          column: 29
	        },
	        end: {
	          line: 37,
	          column: 60
	        }
	      },
	      '15': {
	        start: {
	          line: 42,
	          column: 23
	        },
	        end: {
	          line: 42,
	          column: 63
	        }
	      },
	      '16': {
	        start: {
	          line: 44,
	          column: 0
	        },
	        end: {
	          line: 46,
	          column: 1
	        }
	      },
	      '17': {
	        start: {
	          line: 45,
	          column: 2
	        },
	        end: {
	          line: 45,
	          column: 42
	        }
	      },
	      '18': {
	        start: {
	          line: 48,
	          column: 0
	        },
	        end: {
	          line: 48,
	          column: 28
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 13,
	            column: 19
	          },
	          end: {
	            line: 13,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 13,
	            column: 38
	          },
	          end: {
	            line: 40,
	            column: 1
	          }
	        },
	        line: 13
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 21,
	            column: 25
	          },
	          end: {
	            line: 21,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 21,
	            column: 40
	          },
	          end: {
	            line: 31,
	            column: 3
	          }
	        },
	        line: 21
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 16,
	            column: 2
	          },
	          end: {
	            line: 18,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 16,
	            column: 2
	          },
	          end: {
	            line: 18,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 16,
	            column: 2
	          },
	          end: {
	            line: 18,
	            column: 3
	          }
	        }],
	        line: 16
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 16,
	            column: 6
	          },
	          end: {
	            line: 16,
	            column: 65
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 16,
	            column: 6
	          },
	          end: {
	            line: 16,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 16,
	            column: 28
	          },
	          end: {
	            line: 16,
	            column: 35
	          }
	        }, {
	          start: {
	            line: 16,
	            column: 39
	          },
	          end: {
	            line: 16,
	            column: 64
	          }
	        }],
	        line: 16
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 22,
	            column: 4
	          },
	          end: {
	            line: 24,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 22,
	            column: 4
	          },
	          end: {
	            line: 24,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 22,
	            column: 4
	          },
	          end: {
	            line: 24,
	            column: 5
	          }
	        }],
	        line: 22
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 26,
	            column: 4
	          },
	          end: {
	            line: 30,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 26,
	            column: 4
	          },
	          end: {
	            line: 30,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 26,
	            column: 4
	          },
	          end: {
	            line: 30,
	            column: 5
	          }
	        }],
	        line: 26
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 33,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 33,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 33,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        }],
	        line: 33
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 42,
	            column: 23
	          },
	          end: {
	            line: 42,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 42,
	            column: 23
	          },
	          end: {
	            line: 42,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 42,
	            column: 49
	          },
	          end: {
	            line: 42,
	            column: 63
	          }
	        }],
	        line: 42
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 44,
	            column: 0
	          },
	          end: {
	            line: 46,
	            column: 1
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 44,
	            column: 0
	          },
	          end: {
	            line: 46,
	            column: 1
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 0
	          },
	          end: {
	            line: 46,
	            column: 1
	          }
	        }],
	        line: 44
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
	      '18': 0
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
	  }
	};

	var registerPlugin = (cov_279kbuek1j.s[15]++, (cov_279kbuek1j.b[5][0]++, videojs$1.registerPlugin) || (cov_279kbuek1j.b[5][1]++, videojs$1.plugin));
	cov_279kbuek1j.s[16]++;

	if (typeof videojs$1.getPlugin('chromecast') === 'undefined') {
	  cov_279kbuek1j.b[6][0]++;
	  cov_279kbuek1j.s[17]++;
	  registerPlugin('chromecast', chromecast);
	} else {
	  cov_279kbuek1j.b[6][1]++;
	}

	cov_279kbuek1j.s[18]++;
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
