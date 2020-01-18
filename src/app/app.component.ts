import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variables
  title = 'Markdown Editor';
  defaultText: string = "";
  newArrayOfAsterisks: string[] = [];
  newArrayOfSlashes: string[] = [];
  newArrayOfUrls: string[] = [];
  finalString="";
  substring1 : string ="";
  substring2 : string = "";
  substring3: string = "";

  // This method is called when the input value is changed. This method converts markdown syntax into HTML output. 
  onValueChange($event){
    let inputString = $event.target.value;  
    if(inputString != " " && inputString != null && inputString != undefined){
      // if(inputString.match("\*{2}([a-z])\*{2}")){
      //   finalString = inputString.bold();
      // }
      
      // Local variables 
      var arrStrings = inputString.split(" ");
      var arraySize = arrStrings.length;
      var newString: string = "";
      var newString2: string = "";
      var finalArray: string[] = [];
      var blueStr: string = "";
        
        for(let count=0;count<arraySize;count++){
          this.substring1 = "";
          this.substring2 = "";
          this.substring3 = "";

          if(arrStrings[count].startsWith("**") && arrStrings[count].endsWith("**")){
            this.substring1  = this.substring1 + (arrStrings[count].substring(2,arrStrings[count].length-2));
          }
          else if(arrStrings[count].startsWith("//") && arrStrings[count].endsWith("//")){    
            this.substring2= this.substring2 + (arrStrings[count].substring(2,arrStrings[count].length-2));
          }
          else if(arrStrings[count].startsWith("[[") && arrStrings[count].endsWith("]]")){
            this.substring3 = this.substring3 + (arrStrings[count].substring(2,arrStrings[count].length-2));
          }
          if(this.substring1 != ""){
            this.newArrayOfAsterisks.push(this.substring1.bold());
          } 
          else if(this.substring2 != ""){            
            this.newArrayOfSlashes.push(this.substring2.italics());
          }
          else if(this.substring3 != ""){
            //var temp = this.getUrl(this.substring3);
            if(this.substring3.indexOf("|") > 0){
              blueStr = blueStr + this.substring3.substring(this.substring3.indexOf("|")+2,this.substring3.length-2)
            }
            else{
              blueStr= this.substring3;
            }

            var anchorText = this.substring3.substring(2,this.substring3.indexOf("|")-1);
            console.log("anchorText and blueStr",anchorText +" "+blueStr);
            this.newArrayOfUrls.push(anchorText +" "+blueStr);
          }          
        }
        
        for(let i=0;i<arraySize;i++){
          newString = "";
          newString2= "";
          if(arrStrings[i].startsWith("*") && arrStrings[i].endsWith("*")){            
            for(var j=0; j< this.newArrayOfAsterisks.length;j++){
              if((arrStrings[i].substring(2,arrStrings[i].length-2)) == this.newArrayOfAsterisks[j].substring(3,this.newArrayOfAsterisks[j].length-4)){                
                newString = this.newArrayOfAsterisks[j];
              }
            }
          }
        else if(arrStrings[i].startsWith("//") && arrStrings[i].endsWith("//")){
          for(var j=0; j< this.newArrayOfSlashes.length;j++){            
            if((arrStrings[i].substring(2,arrStrings[i].length-2)) == this.newArrayOfSlashes[j].substring(3,this.newArrayOfSlashes[j].length-4)){                
              newString2 = this.newArrayOfSlashes[j];
            }
          }
        }
        if(newString != ""){
          finalArray.push(newString);
        } 
        else if(newString2 != ""){            
          finalArray.push(newString2);
        }  
        else{
          finalArray.push(arrStrings[i]);
        }
      }
      this.finalString = finalArray.join(' ');   
  }
  }

  //getUrl(url){
    // var urlRegex = /(https?:\/\/[^\s]+)/g;
    // var newtemp = text.replace(urlRegex, function(url) {
    //     return '<a href="' + url + '">' + url + '</a>';
    // });
    // console.log("temp1",newtemp)
    // return newtemp;

//     var hostname;
//     //find & remove protocol (http, ftp, etc.) and get hostname

//     if (url.indexOf("//") > -1) {
//         hostname = url.split('/')[2];
//     }
//     else {
//         hostname = url.split('/')[0];
//     }

//     //find & remove port number
//     hostname = hostname.split(':')[0];
//     //find & remove "?"
//     hostname = hostname.split('?')[0];
// console.log("hostname",hostname);
//     return hostname;
//}

}
