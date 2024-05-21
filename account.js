var accInfo = [];
var str = "";
//account type
function validateID(inp, msg) {
  var id = document.getElementById(inp).value;
  if (id.trim().length === 0) {
    document.getElementById(msg).innerHTML = "ID Required";
    return false;
  }
  document.getElementById(msg).innerHTML = "";
  return true;
}

//account number
function validateAccount(inp, msg) {
  var acc = parseInt(document.getElementById(inp).value);
  let accstr = acc.toString();
  let length = accstr.length;
  if (isNaN(acc) || length < 6) {
    document.getElementById(msg).innerHTML = "Minimum six digits require";
    return false;
  }
  document.getElementById(msg).innerHTML = "";
  return true;
}

//account type --- select
function validateType(inp, msg) {
  var selected = document.getElementById(inp).value;
  if (selected !== "select menu") {
    document.getElementById(msg).innerHTML = "";
    return true;
  }
  document.getElementById(msg).innerHTML = "Account Type Required";
  return false;
}

//account balance
function validateBalance(inp, msg) {
  var bal = parseFloat(document.getElementById(inp).value);
  if (isNaN(bal) || bal < 6000) {
    document.getElementById(msg).innerHTML = "Minimum Balance 6000 required";
    return false;
  }
  document.getElementById(msg).innerHTML = "";
  return true;
}

//date of opening
function validateDate(inp, msg) {
  var dt = new Date(document.getElementById(inp).value);
  if (isNaN(dt) || dt === null) {
    document.getElementById(msg).innerHTML = "Date Required";
    return false;
  } else {
    document.getElementById(msg).innerHTML = "";
    return true;
  }
}

function addObject() {
  var id = document.getElementById("id").value;
  var acc = parseInt(document.getElementById("account").value);
  var selected = document.getElementById("type").value;
  var bal = parseFloat(document.getElementById("balance").value);
  var dt = document.getElementById("date").value;
  let obj = {
    accid: id,
    accno: acc,
    acctype: selected,
    accbal: bal,
    opedate: dt,
  };
  console.log(obj);
  accInfo.push(obj);
}

function validateInputs(e) {
  e.preventDefault();
  var id = validateID("id", "iderr");
  var acc = validateAccount("account", "accounterr");
  var type = validateType("type", "typeerr");
  var bal = validateBalance("balance", "balanceerr");
  var date = validateDate("date", "dateerr");
  if (id && acc && type && bal && date) {
    addObject();
    return true;
  } else {
    return false;
  }
}

//display for button acc info
function display() {
  str = "";
  str += `<h2>Account Info</h2>`;
  for (let i = 0; i < accInfo.length; i++) {
    str += `<p><strong>Account ID:</strong> ${accInfo[i].accid}</p>`;
    str += `<p><strong>Account Number:</strong> ${accInfo[i].accno}</p>`;
    str += `<p><strong>Account Type:</strong> ${accInfo[i].acctype}</p>`;
    str += `<p><strong>Account Balance:</strong> ${accInfo[i].accbal}</p>`;
    str += `<p><strong>Date of Opening:</strong> ${accInfo[i].opedate}</p><br>`;
  }
  document.getElementById("result").innerHTML = str;
}
