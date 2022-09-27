/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
let companyName = 'Workflow Automation Solutions';

document.addEventListener("DOMContentLoaded", function () {

    let companyNameSection = document.getElementsByClassName('navbar-brand')[0];
    companyNameSection.innerHTML = companyName;
    console.log('companyName: ' + companyNameSection.innerHTML);

});