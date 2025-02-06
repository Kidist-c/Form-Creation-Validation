async function fetchUserData(){
    const apiUrl='https://jsonplaceholder.typicode.com/users';
    const dataContainer=document.getElementById('api-data');
    try{ 
        const response=await fetch(apiUrl);
        const users=await response.json();
        dataContainer.innerHTML=" ";
        const userList=document.createElement('ul');
        users.foreach(user=>{const list=document.createElement('li')
            list.textcontent=user.name;
            userList.append(list);
        })
    }
    catch{
        dataContainer.innerHTML=" ";
        dataContainer='Failed to load user data.';
    }

   
}
document.addEventListener(DOMCotentLoaded,fetchUserData);