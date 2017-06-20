# Auth0 Node Passwordless Sample

This sample will demonstrate how to use passwordless authentication within a Node.js Regular Web App.

## Key Features

Passwordless scenarios on this Regular Page App samples include:

* Login with a **one time code** via **sms** using **Lock**
* Login with a **one time code** via **email** using **Lock**
* Login with a **magic link** via **email** using **Lock**
* Login with a **one time code** via **sms** using your **custom UI and auth0.js**
* Login with a **one time code** via **email** using your **custom UI and auth0.js**
* Login with a **magic link** via **email** using your **custom UI and auth0.js**

You can read more about Passwordless Authentication in our [Passwordless documentation](/connections/passwordless), where you will find, among other examples, the complete Regular Web App tutorials for the following scenarios:

* [Authenticate users with a one time code via SMS](/connections/passwordless/regular-web-app-sms)
* [Authenticate users with a one time code via Email](/connections/passwordless/regular-web-app-email-code)
* [Authenticate users with a magic link via Email](/connections/passwordless/regular-web-app-email-link)

## Install Locally

In order to run this example locally you would need to:

1. Add a .env file containing your Auth0 credentials. You can use the `sample.env` as template. You can get the `clientId`, `clientSecret` and `domain` from the [Auth0 Dashboard](https://manage.auth0.com).
2. Add `http://localhost:3000/callback` to your App's list of **Allowed Callback URLs** within the [Auth0 Dashboard](${manage_url}). While in the Manage Dashboard, also ensure that the client you intend to use has a Passwordless Email connection enabled, and an SMS one (along with a provider like Twilio) if you intend to try SMS passwordless.
3. Install Node.js v4.x
4. Run:

	```
	npm install 
	npm run start
	```

5. Go to `http://localhost:3000` and you should see the app running.

## Usage

Go to `http://localhost:3000` and press the button that corresponds to the feature you want to try. Then follow the login instructions. Once you are logged in, you will see your profile details, and you can logout using the link on the top right corner.
