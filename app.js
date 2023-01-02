// @ts-ignore
var resultField = $( "#result" )

function insertNumber( number ) {
    var existingNum = resultField.val()
    resultField.val( existingNum + number )
}

function clearResult() {
    resultField.val( '' )
}

function calculate() {
    var result = eval( resultField.val() )
    resultField.val( result )
}

function deleteNum() {
    var nums = resultField.val()
    if ( nums != '' ) {
        resultField.val( resultField.val().slice( 0, -1 ) )
    }
}