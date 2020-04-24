/**
 * 
 * @author Nahime Aniss 
 * @license Ensias
 * @version 1.0
 * 
 * Github class for fetching Github api
 * 
 */

class Github{
    // Github resource api
    static githubUrl = 'https://api.github.com';
    // config results
    static repos_count = 5;
    static repos_sort = 'created: desc'; 

    // verify credentials
    constructor(){
        this.clientId = '317bcc603717f2be9c9e';
        this.clientSecret = '39aec29999841a865fdb380155cd7f44282aa4c7';  
    }

    async getUser(userName){
        // user deatails promise
        let userPromises = [];

        // create promise for each async call 
        const profile = this.getProfile(userName); userPromises.push(profile); // add promise to array
        const repos = this.getRepos(userName); userPromises.push(repos); // add promise to array
        
        // wait for all promises to resolve or reject
        const user = await Promise.all(userPromises);

        return {
            profile : user[0],
            repos : user[1]
        }
    }

    async getProfile(userName){
         // fetch user profile
         const responseProfile = await fetch(Github.getProfileUrl(userName,this.clientId,this.clientSecret));

         // fond userProfile
         if(responseProfile.status === 200){
             const profile = await responseProfile.json();
             // profile returned
             return profile;
         }
         // not found user profile
         return Promise.reject('User not found !');
    }

    async getRepos(userName){
         // fetch user reposetory
         const responseRepos = await fetch(Github.getRepoUrl(userName,this.clientId,this.clientSecret));

         // fond user repos
         if(responseRepos.status === 200){
             const repos = await responseRepos.json();
             // repos returned
             return repos;
         }
         // not found user repos
         return Promise.resolve('No repository found !');
    }

    static getProfileUrl(userName, clientId, clientSecret){
        return `${Github.githubUrl}/users/${userName}?client_id=${clientId}&client_secret=${clientSecret}`;
    }

    static getRepoUrl(userName, clientId, clientSecret){
        return `${Github.githubUrl}/users/${userName}/repos?per_page=${Github.repos_count}&sort=${Github.repos_sort}&client_id=${clientId}&client_secret=${clientSecret}`;
    }
    
}