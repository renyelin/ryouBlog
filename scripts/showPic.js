function showPic(whichPic){
                var source=whichPic.getAttribute("href");
                var placeholder=document.getElementById("placeholder");
                placeholder.setAttribute("src",source);//DOM方法：placeholder.src=source;(老办法)
                var text=whichPic.getAttribute("title");
                var description=document.getElementById("description");
                description.firstChild.nodeValue=text;
                
            }