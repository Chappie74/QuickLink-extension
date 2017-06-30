$(function(){
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) { //grab url from active tab
        var url = tabs[0].url; //store it in a variable
        
        if(url){ //check if query has completed execution
            $("#link").val(url); //set url
        }else{
            
            $("#dummy").text("ERROR: Could not load QR CODE.");
        }
    });
    
    $(function(){
        var frm = document.getElementById('post_form'); //submit form to google charts
        if (frm) {
            frm.submit();
        }
    });
    
});
