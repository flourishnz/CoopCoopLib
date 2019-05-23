// CODE
//

function say(obj){
  Logger.log(JSON.stringify(obj, null, 4))
}

function log(arg){
  var arr = (arg.constructor === Array) && arg || [arg]
  arr.unshift(new Date())
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RunLog") ||
               SpreadsheetApp.getActiveSpreadsheet().insertSheet('RunLog').hideSheet()
  sheet.appendRow(arr)
}

function isValidId(id) {
  return /^\d{4}$/.test(id)
}


function isDry() {
  var re = /Dry/i;
  return re.test(SpreadsheetApp.getActiveSpreadsheet().getName())  
}

function isFresh() {
  var re = /Fresh/i;
  return re.test(SpreadsheetApp.getActiveSpreadsheet().getName())
}
                
                
             
                  
      