# Project Overview

## Paloma App
https://compassionate-allen-e27455.netlify.app/
An app for bartenders! Search through a comprehensive list of cocktail recipes or add your own! Eventual training capacity with information and quizzes!

## Wireframes

https://imgur.com/g6asTls

## Component Hierarchy

```
App
I___Header
I  I___NavBar
I  I___Logo
I  I___Recipes
I  I___Create Recipe
I  I___Training
I  I___Login
I___Card
I  I___Random Recipe
I  I___Cocktail
I  I___Img
I  I___Info
I___Search Bar
I___Input field
I___Submit
```

## API and Data Sample

```
EXAMPLE RESPONSE
{
    "records": [
        {
            "id": "recUfbjBAJ31TaUBS",
            "fields": {
                "name": "Last Word",
                "ingredients": "0.75 oz Gin\n0.75 oz Lime\n0.75 oz Green Chartreuse\n0.75 oz Maraschino",
                "garnish": "false",
                "glassware": "Coupe",
                "instructions": "Combine ingredients with ice, shake and strain through hawthrone and tea strainer into cocktail glass.",
                "history": "In Ted Saucier's 1962 book, \"Bottoms Up\" the Last Word was listed as a recipe originating from Detroit's Athletic Club in 1917",
                "category": "Classic",
                "flavorProfile": "citrusy, herbaceous, bittersweet"
            },
            "createdTime": "2020-10-09T13:14:39.000Z"
        },
        {
            "id": "recXQG91Z5RGD8a7d",
            "fields": {},
            "createdTime": "2020-10-09T13:22:15.000Z"
        },
        {
            "id": "recfyM5HyudkTjpCD",
            "fields": {},
            "createdTime": "2020-10-09T13:14:39.000Z"
        }
    ],
    "offset": "recfyM5HyudkTjpCD"
}
```

## MVP

- Build Airtable Database
- Access Database, generate components based on results.
- Add and update Database.

## PostMVP

- Training section: Multichoice and fill in the blank quizzes based on reading.
- Login / Sign Up. Create a second database to store user info.
- Mark favorites or menu items

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day        | Deliverable                                        | Status     |
| ---------- | -------------------------------------------------- | ---------- |
| July 10-12 | Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete |
| July 13    | Project Approval                                   | Incomplete |
| July 13    | Core Application Structure (HTML, CSS, etc.)       | Incomplete |
| July 14    | Pseudocode / actual code                           | Incomplete |
| July 15    | Initial Clickable Model                            | Incomplete |
| July 16    | MVP                                                | Incomplete |
| July 17    | Presentations                                      | Incomplete |

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component                       | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Building Database (DB)          |    H     |     5 hrs      |     0 hrs     |    0 hrs    |
| Access DB                       |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Creating component for DB items |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Get Random from DB              |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Post to Database & Update       |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Add delete button to cards      |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Links and Routes                |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Basic styling                   |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Building a theme                |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Advanced Styling                |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Building Styled Components      |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Animated transitions            |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Total                           |    H     |      6hrs      |     5hrs      |    5hrs     |

## SWOT Analysis

### Strengths:

Experience working with API in class.

### Weaknesses:

Not experienced in styled components and themes.

### Opportunities:

Lots of information to work with!

### Threats:

Time! Lots to do, hope I don't get stuck.
