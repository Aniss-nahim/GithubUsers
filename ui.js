/**
 * @author Nahime Aniss 
 * @license Ensias
 * @version 1.0
 * 
 *  UI templet
 */

 class UI{
     // grab the profile container
     constructor(){
        this.profileContainer = document.getElementById('profileContainer');
        this.reposContainer = document.getElementById('reposContainer');
     }

     load(){
        const spinner = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        </div>`;
        this.profileContainer.className ='card card-body mb-3';
        this.reposContainer.className = 'card card-body mb-3';
        this.profileContainer.innerHTML = spinner;
        this.reposContainer.innerHTML = spinner;
     }

     showProfile(user){
        this.profileContainer.innerHTML = `
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" class="img-fluid mb-2"/>
                    <h3 class="text-center">${user.name} </h3>
                    <a hrf="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4 text-white"> View profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary"> Public Repose: ${user.public_repos} </span>
                    <span class="badge badge-secondary"> Public Gists: ${user.public_gists} </span>
                    <span class="badge badge-success">Followers: ${user.followers} </span>
                    <span class="badge badge-info">Following: ${user.following} </span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company : ${user.company}</li>
                        <li class="list-group-item">Website/Blog : ${user.blog}</li>
                        <li class="list-group-item">Location : ${user.location}</li>
                        <li class="list-group-item">Member Since : ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        `
     }

     showRepos(repos){
         let results = '<h3 class="mb-3" >Lastest Repositories </h3>';
         repos.forEach((repo) => {
            results += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_black">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars : ${repo.stargazers_count} </span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count} </span>
                            <span class="badge badge-success">Forks: ${repo.forms_count} </span>
                        </div>
                    </div>
                </div>
            `
         });
         // display results
         this.reposContainer.innerHTML = results;
     }

     profileNotFound(message){
         this.profileContainer.innerHTML =`
         <div class="alert alert-danger" role="alert">
            ${message}
         </div>`
     }

     reposNotFound(){
         this.reposContainer.innerHTML = `
         <div class="alert alert-danger" role="alert">
            this user has 0 repositoris !
        </div>`
     }

     clearProfile(){
         this.profileContainer.innerHTML = '';
         this.profileContainer.className = '';
         this.reposContainer.innerHTML = '';
         this.reposContainer.className = '';
     }
 }