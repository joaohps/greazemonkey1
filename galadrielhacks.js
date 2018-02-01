// ==UserScript==
// @name         Galandriel Hacks
// @namespace    galandriel-scripts
// @version      0.1
// @description  try to take over the world!
// @author       joaoda
// @match        http://hayageek.com/greasemonkey-tutorial/
// @include      /^https?://galadrielservice*
// @grant        GM.xmlHttpRequest
// ==/UserScript==

var accountid = document.getElementById("account-id").value;
var theDiv = document.getElementById("qs-users");

var iamroles = document.createElement("iamroles");
iamroles.className = "infolink";
iamroles.text = "iam-roles";
iamroles.href = "https://iam-tools.amazon.com/accounts/show/"+accountid;
theDiv.appendChild(iamroles);