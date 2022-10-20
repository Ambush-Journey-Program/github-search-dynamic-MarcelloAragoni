# GitHub user search app [Dynamic]

## Description

- Author: @guilhermekuni
- Repository name: `github-user-search-app/javascript`
- Tags: `JavaScript`, `REST API`
- Achievements:
  - JavaScript basics
  - API integration

---

## The Challenge

### Briefing

- [Frontend Mentor Basis](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6)
- Your challenge is to implement a Github user search. For that, you can use the UI built in the challenge [GitHub user search app [Static]](https://www.notion.so/GitHub-user-search-app-Static-2596dd0410284d01abe26b12ef9e1dd7).

- Using the same UI, now your goal is to make an external API call to retrieve the Github user information when the user clicks in the search button and then fill all the information on the card. So now, the information should not be static anymore and should change according to the user search.

- You'll need to use JavaScript to add the dynamic behavior and consume the external Github API (check the Resources section).

- While you’re doing that we’ll create new `branches` for each new piece of your website, then send it to GitHub when the code is done, and open **Code Review.** The goal is to get used to the development cycle.

### Acceptance Criteria

- [ ] UI should match Figma file.
- [ ] User should be able to search for a Github user using the search input and clicking in the search button.
- [ ] The card should show the information related to the searched user instead of static information as before.
- [ ] BONUS: show error message when the searched user doesn't exists.

### Tips

- Use the JavaScript [Fetch method](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to implement the request.
- Fetch the [https://api.github.com/users/{username}](https://api.github.com/users/guilhermekuni) endpoint to retrieve the user information.
  - Since this is a public GET endpoint, you can copy and paste the URL in the browser to test and see the results.

---

## Resources

### Links

- [Frontend Mentor Basis](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6)
- [JavaScript](https://www.notion.so/JavaScript-82853e990c65478a9792e9f733b539fe)
- [Github REST API](https://docs.github.com/en/rest/overview/resources-in-the-rest-api)
