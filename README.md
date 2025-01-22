![Firebase Workshop](https://cdn.iconscout.com/icon/free/png-512/free-firebase-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-3-pack-logos-icons-2944871.png?f=webp&w=256)

# Firebase Workshop

On Wednesday January 22nd, 2025, our group of developers met to analyze the different characteristics of Firebase as productivity tool.

Since it offers a good amount of tools as the cloud service it is, we considered worth researching.

## Introduction

### Background

> Firebase is Google's mobile and web application development platform that helps to build, improve, and grow an app.
> It offers a suite of cloud-based services, including databases, authentication, analytics, and hosting, enabling developers to create high-quality applications efficiently.

It is important to acknowledge the fact that, behind the scenes, all the Firebase services run on Google Cloud Platform.

### Prerequisites

- A Google account to work with.
    - It will be important to have a billing account linked to the Google account, as Firebase Functions require users to be in the Blaze (pay as you go) plan.

- A Firebase project
    - Log in to the [Firebase Console](https://console.firebase.google.com/u/0/) using your existing Google account.
    - Click on "Create a project".
    - Add a name (Firebase will assess the availability of the name) and click Continue.
    - The addition of Google Analytics is not mandatory, nor will we focus on it during this workshop.

- NodeJS or Node Version Manager

- Firebase CLI
    - Install it by executing ```npm install -g firebase-tools``` in the Command Prompt

- Python (optional)

## First steps

### Setup the Firebase project locally

- Execute ```firebase init```

- As services, select (by moving around with the arrows and marking with spacebar): 
    - Firestore
    - Functions
    - Hosting
    - Emulators
    - Storage   

- Either selecting to use a new project or an existing one works. For this workshop, we'll use the one we created before.

- Use the default values for the upcoming questions. When prompted for a language, select as desired. In this case, Typescript will be the preferred option.

- It is optional to use ESLint, and it is recommended to install dependencies right away.

- For the upcoming questions:

    - **What do you want to use as your public directory?** (recomended to leave it as public)
    - **Configure as a single-page app (rewrite all urls to /index.html)?** (in this particular case, yes)
    - **Set up automatic builds and deploys with GitHub?** (in this particular case, yes)
    - **Set up the workflow to run a build script before every deploy?** Yes
    - **What script should be run before every deploy?** (use default)
    - **Set up automatic deployment to your site's live channel when a PR is merged?** Yes
    - **What is the name of the GitHub branch associated with your site's live channel?** (use default)
    - **What file should be used for Storage Rules?** (use default)
    - **Which Firebase emulators do you want to set up?** Press Space to select emulators, then Enter to confirm your choices. Select Functions, Firestore and Storage.
    - **Emulators ports** (use default)
    - **Enable emulators UI** (optional)
    - **Would you like to download the emulators now?** Yes

### Create Firebase Functions

In order to create Firebase Functions (Cloud functions), it is required to write their code in the index file (index.ts in this case), describing what each of them will do. Keep in mind the current version is Gen2.

After completing the coding, ```npm run build``` must be executed in the functions folder.

With that, the functions will eventually become available in the emulators.

Upon executing ```firebase emulators:start```, they will become available to request via Postman.