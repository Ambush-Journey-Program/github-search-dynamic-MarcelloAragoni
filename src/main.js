import { handleError,handleTextContentChange,handleFormatDate,handleHrefChange,handleSrcChange } from './utilities.js';
import { inputEl } from './consts.js';


async function handleFetch(username) {
  // return await fetch(`https://api.github.com/users/${username}`).catch(handleError);

  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    handleError("User not found");
  }

  return await response.json();
}

function handleResponse(data) {
  handleTextContentChange("#username", data.name);
  handleTextContentChange("#usertag", `@${data.login}`);
  handleFormatDate(data.created_at)
  handleTextContentChange("#userbio", data.bio);
  handleTextContentChange("#userrepositories", data.public_repos);
  handleTextContentChange("#userfollowers", data.followers);
  handleTextContentChange("#userfollowing", data.following);
  handleTextContentChange("#usercity", data.location);
  handleTextContentChange("#userlink", data.login);
  handleHrefChange("#userlink", data.blog);
  handleTextContentChange("#usertwitter", data.twitter_username);
  handleHrefChange("#usertwitter", `https://twitter.com/${data.twitter_username}`);
  handleTextContentChange("#userbusiness", data.company);
  handleSrcChange("#useravatar", data.avatar_url);
}

async function handleSubmit(event) {
  event.preventDefault();
  const response = await handleFetch(event.target[0].value);
  handleResponse(response);
}

inputEl.addEventListener("submit", handleSubmit);

// function handleChange(event) {
//   event.preventDefault()
//   fetch('https://api.github.com/users/'+event.target[0].value)
//   .then((response)=> {
//     if (!response.ok) {
//       throw new Error('User not found: 404');
//     }
//     return response.json();
//   })
//   .then((data)=>{
//     const date = new Date(data.created_at);
//     const day = date.getDate();
//     const year = date.getFullYear();
//     const monthName = months[date.getMonth()];
//     const formatted = `${day} ${monthName} ${year}`;

//     document.querySelector("#username").textContent=data.name;
//     document.querySelector("#usertag").textContent=('@'+data.login);
//     document.querySelector("#userjoined").textContent=('Joined '+ formatted);
//     document.querySelector("#userbio").textContent=data.bio;
//     document.querySelector("#userrepositories").textContent=data.public_repos;
//     document.querySelector("#userfollowers").textContent=data.followers;
//     document.querySelector("#userfollowing").textContent=data.following;
//     document.querySelector("#usercity").textContent=data.location;
//     document.querySelector("#userlink").textContent=data.login;
//     document.querySelector("#userlink").href=data.blog;
//     document.querySelector("#usertwitter").textContent=data.twitter_username;
//     document.querySelector("#usertwitter").href='https://twitter.com/'+data.twitter_username;
//     document.querySelector("#userbusiness").textContent=data.company;
//     document.querySelector("#useravatar").src=data.avatar_url;
//   })
//   .catch((error) =>{
//     console.error('Response returned empty ', error);
//     window.alert('Response returned empty '+ error);
//   });
// }
