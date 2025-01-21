[Firebase Workshop](https://www.gstatic.com/devrel-devsite/prod/vda41147226ae308b24384f785d31d739107d2716272d99cd11c490ff3892954d/firebase/images/lockup.svg)

# Firebase Workshop

On Wednesday January 22nd, 2025, the our group of developers met to analyze the different characteristics of Firebase as productivity tool.

Since it offers a good amount of tools as the cloud service it is, we considered worth researching.

## Introduction

### Background

> Firebase is Google's mobile and web application development platform that helps to build, improve, and grow an app.
> It offers a suite of cloud-based services, including databases, authentication, analytics, and hosting, enabling developers to create high-quality applications efficiently.

It is important to acknowledge the fact that, behind the scenes, all the Firebase services run on Google Cloud Platform.

### Prerequisites

- A Google account to work with

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