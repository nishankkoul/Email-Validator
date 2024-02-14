let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "nishankkoulpet",
    "email": "nishankkoulpet@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

let inputBox = document.getElementById("inputBox");
let validBtn = document.getElementById("validBtn");

async function validateEmail(email)
{
    const apiUrl = "https://api.emailvalidation.io/v1/info?apikey=ema_live_TrCh0SegZnchrX7MWpgHir7V15CQWwQh1QhciklO&email=";
    let resultCont = document.getElementById("resultCont");
    let response = await fetch(apiUrl + email);
    result = await response.json();
    let str = ``;
    for (const key in result) {
        str = str + `<div>${key} : ${result[key]}</div>`;
    }
    console.log(str);
    resultCont.innerHTML = str;
}

validBtn.addEventListener("click" , ()=>{
    validateEmail(inputBox.value);
})

