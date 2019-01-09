$(document).ready(function()
$("button").click(function() {

    $.get("https://ofhwk42qe9.execute-api.us-east-1.amazonaws.com/prod/question-collection", function(data,status){
        $("p#question1").text(data[0].question) && $("p#id1").text(data[0].id);
        $("p#question2").text(data[1].question) && $("p#id2").text(data[1].id);
        $("p#question3").text(data[2].question) && $("p#id3").text(data[2].id);
       
});
});


(function() {
                document.getElementById("message_form").onsubmit = function() {
                  myFunction11();
                   return false;
                }
            })
            ();

           
    function myFunction11() {

       
       debugger;
       
       var lname= document.getElementById("lname").value;
       var fname=document.getElementById("fname").value;
       var adrs=document.getElementById("adrs").value;
       var phn=document.getElementById("phn").value;
       var github=document.getElementById("githublink").value;

       var selectedFile = document.getElementById("inputFile").files;
                if (selectedFile.length > 0) {
                var fileToLoad = selectedFile[0];
                var fileReader = new FileReader();
                var base64;
                
                fileReader.onload = function(fileLoadedEvent) {
                    base64 = fileLoadedEvent.target.result;
                   
                    
                   
                   console.log(base64);
                   var xhr = new XMLHttpRequest();
                    var params = JSON.stringify({
                    Records:{
                        Firstname: fname,
                        Lastname: lname,
                        Address: adrs,
                        Phonenumber:phn,
                        file: base64,
                        github:github
                        }          
             });
                    // xhr.open("POST", "https://ofhwk42qe9.execute-api.us-east-1.amazonaws.com/prod/carer_genese_personal_info_uploadtos3", true);

                    //xhr.open("POST", " https://9imnp726u7.execute-api.us-east-1.amazonaws.com/prod/carer-genese-question-answer", true);
                    
                    //xhr.open("POST", " https://758o96yct6.execute-api.us-east-1.amazonaws.com/prod/carrer-genese-github-upload", true);
                    
                    xhr.open("POST", "https://758o96yct6.execute-api.us-east-1.amazonaws.com/prod/carrer-genese-github-upload", true);

                   
                    xhr.setRequestHeader("Content-type", "application/json");
                    xhr.send(params);
                    xhr.onreadystatechange = function(){
                    // console.log("readystate value "+ xhr.readyState);
                    if(xhr.readyState === 4){
                        if(xhr.status === 200){
                            a = xhr.responseText;
                            b = JSON.parse(a);
                            console.log(b);
                            alert(b);
                           }
                        else{
                            alert("unable to send your data. Please check errors.");
                        }
                    }
                };
               return false;
            }
                fileReader.readAsDataURL(fileToLoad); 
                }
            }
                