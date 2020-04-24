// Github instance
const github = new Github;
// UI instance 
const ui = new UI; 
// search Input
const searchInput = document.getElementById('searchUser');

// searchInput event litener
searchInput.addEventListener('keyup', () => {
    // get the userName
    const userName = searchInput.value;
    
    // userName not empty
    if(userName !== ''){
        // fetch for the user profile
        github.getUser(userName)
            .then(data => {
                    ui.showProfile(data.profile); 
                    if(data.repos.length === 0){
                        ui.reposNotFound();
                    }else{
                        ui.showRepos(data.repos);
                    }
            })
            .catch(message => ui.profileNotFound(message));
        ui.load();
    }else{
        // clear profile
        ui.clearProfile();
    }
});