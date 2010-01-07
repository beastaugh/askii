/**
 * Askii is a small library to make dealing with ASCII characters simpler and
 * more natural.
 */
var Askii = {
    CONTROL_CHARACTERS: [
        'NUL', // Null character
        'SOH', // Start of Header
        'STX', // Start of Text
        'ETX', // End of Text
        'EOT', // End of Transmission
        'ENQ', // Enquiry
        'ACK', // Acknowledgment
        'BEL', // Bell
        'BS',  // Backspace
        'HT',  // Horizontal tab
        'LF',  // Line feed
        'VT',  // Vertical tab
        'CR',  // Carriage return
        'SO',  // Shift Out
        'SI',  // Shift In
        'DLE', // Data Link Escape
        'DC1', // Device Control 1 (oft. XON)
        'DC2', // Device Control 2
        'DC3', // Device Control 3 (oft. XOFF)
        'DC4', // Device Control 4
        'NAK', // Negative Acknowledgement
        'SYN', // Synchronous Idle
        'ETB', // End of Trans. Block
        'CAN', // Cancel
        'EM',  // End of Medium
        'SUB', // Substitute
        'ESC', // Escape
        'FS',  // File Separator
        'GS',  // Group Separator
        'RS',  // Record Separator
        'US',  // Unit Separator
        'DEL'  // Delete
    ],
    
    /**
     * Convert an integer to an ASCII character.
     */
    intToChar: function(n) {
        if (n > 127) {
            throw new Error(n + ' does not correspond to any ASCII character.');
        }
        
        return String.fromCharCode(n);
    },
    
    /**
     * Convert an ASCII character to its integer equivalent.
     */
    charToInt: function(chr) {
        var num = chr.charCodeAt(0);
        
        if (num > 127) {
            throw new Error(chr + ' is not an ASCII character.');
        }
        
        return num;
    },
    
    /**
     * Determine whether a given character is an ASCII control character.
     */
    isControlChar: function(chr) {
        if (typeof chr === 'string') {
            chr = chr.charCodeAt(0);
        }
        
        return chr < 32 || chr === 127;
    },
    
    /**
     * Get the integer value of a given control key name.
     *
     * All ASCII control characters have an decimal value of less than 32,
     * except for DEL (delete), which is the last ASCII character, with a
     * decimal value of 127---because of this it's handled as a special case.
     */
    getControlInt: function(key) {
        return key === 'DEL' ? 127 : this.CONTROL_CHARACTERS.indexOf(key);
    }
};
