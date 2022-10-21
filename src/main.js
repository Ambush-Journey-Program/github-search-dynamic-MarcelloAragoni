const inputEl = document.querySelector('#searchForm');
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

function handleChange(event) {
  event.preventDefault()
  fetch('https://api.github.com/users/'+event.target[0].value)
  .then((response)=> {
    if (!response.ok) {
      throw new Error('User not found: 404');
    }
    return response.json();
  })
  .then((data)=>{
    const date = new Date(data.created_at);
    const day = date.getDate();
    const year = date.getFullYear();
    const monthName = months[date.getMonth()];
    const formatted = `${day} ${monthName} ${year}`;

    document.querySelector("#username").textContent=data.name;
    document.querySelector("#usertag").textContent=('@'+data.login);
    document.querySelector("#userjoined").textContent=('Joined '+ formatted);
    document.querySelector("#userbio").textContent=data.bio;
    document.querySelector("#userrepositories").textContent=data.public_repos;
    document.querySelector("#userfollowers").textContent=data.followers;
    document.querySelector("#userfollowing").textContent=data.following;
    document.querySelector("#usercity").textContent=data.location;
    document.querySelector("#userlink").textContent=data.login;
    document.querySelector("#userlink").href=data.blog;
    document.querySelector("#usertwitter").textContent=data.twitter_username;
    document.querySelector("#usertwitter").href='https://twitter.com/'+data.twitter_username;
    document.querySelector("#userbusiness").textContent=data.company;
    document.querySelector("#useravatar").src=data.avatar_url;
  })
  .catch((error) =>{
    console.error('Response returned empty ', error);
    window.alert('Response returned empty '+ error);
  });
}

inputEl.addEventListener("submit", handleChange)
