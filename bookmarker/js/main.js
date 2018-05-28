document.getElementById('myForm').addEventListener('submit',saveBookmarks);


function saveBookmarks(e){

    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark ={
        name : siteName,
        url : siteUrl
    };

    if(localStorage.getItem('bookmarks')===null){

        var bookmarks =[];
        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }else{

        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }

  
    fetchBookmarks();
    
   

    e.preventDefault();
}
function deleteBookmark(url){

    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for(var i=0;i<bookmarks.length;i++){

        if(bookmarks[i].url === url){
            bookmarks.splice(i,1);
            break;
        }
    }

    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

    fetchBookmarks();
    
}
function fetchBookmarks(){
    document.getElementById('siteName').value="";
    
    document.getElementById('siteUrl').value ="";

    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //shows how many elements are currently there in the array...
    console.log(bookmarks);
    var bookmarkResults = document.getElementById('bookmarksResults');

    bookmarkResults.innerHTML='';
   // bookmarks.length=0;
   // localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    for(var i=0;i<bookmarks.length;i++){

        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarkResults.innerHTML += '<div class="well">'+'<h3>'+name
                                    +'<a class="btn btn-default" target="_blank" href = "'+url+'">Visit</a>'
                                    +'<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger pull-right" href="#">Delete</a>'
                                    +'</h3>'+'</div>';

        
    }
    
}