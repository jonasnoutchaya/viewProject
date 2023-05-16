Skip to content
DEV Community 👩‍💻👨‍💻
Search...

Log in
Create account

11
Like
1
Jump to Comments
21
Save

Cover image for Integrate PayPal with Vue Application
Kevin Odongo
Kevin Odongo
Posted on 13 janv. 2021

Integrate PayPal with Vue Application
#
javascript
#
vue
#
tutorial
#
webdev
For a startup, there are so many things to consider while designing an application. What framework to use, Typescript or Javascript for logic, what backend to use pretty much a torn of products. One factor that really got me going during my learning process is with startup finance is an issue and cost-saving is a great factor to keep in mind. You want to start low and grow, keeping in mind we can always refactor or change a product.

Slack Payment is great but for an African startup this will be a challenge and Paypal will come as a great starting point. The question is why? With PayPal, you don't need an initial fee you just need a business account and you can integrate your application. To register a business account here is a link https://www.paypal.com/ke/webapps/mpp/country-worldwide
Choose your country that will allow you to register your business within your region. Once you have a business account then you ready to go.

First, let's set up a Vue project.

  vue create paypal-app
  > Manually select features
  > Babel, Router, Linter, (Vuex, CSS Pre-processors, Unit Testing and E2E testing are always ideal according to your preference)
  > Eslint + Prettier
With that, we will have two things in place that we need to integrate a Vue project and Paypal. Now let's have some components to separate our application. We will have the following components and assemble everything once we are done.

(Views Directory)
Views/
  Home.vue
  Profile.vue

(Components Directory)
Components/
  Payment.vue
  Header.vue
  Upgrade.vue
  Cancel.vue
  Suspend.vue
  Activate.vue

// This will hold our environmental variables. Our secret and client ID
.env 
In our application, we need a user to be able to make the following events:

Select a subscription
Make payment
Cancel or Suspend subscription
Re-Activate a subscription
Upgrade subscription
With the above events, we will have a complete circle for a user in our application. For CSS purposes will be using https://vuetifyjs.com/.

  vue add vuetify
  > Default (recommended)

  // we will be using the following in our application
   yarn add sweetalert2  // alert us when payment is successful
   yarn add axios // to fetch user information
Let's create our application then get our client id and secret id from Paypal thereafter. We'll code each step

Home.vue
This will display all our subscription:
<template>
  <!-- Home Component-->
  <div class="home">
    <Header />
    <v-container>
      <!--Snackbar-->
      <v-snackbar color="info" text v-model="snackbar">
        You have selected <span>{{ selected.title }}</span>
      </v-snackbar>
      <v-row>
        <v-col cols="12" md="4" v-for="(item, index) in items" :key="index">
          <v-radio-group v-model="selected" row @change="selectedsubscription">
            <v-card elevation="5" tile>
              <v-card-text>
                <div class="mb-2 primary--text body-1">{{ item.title }}</div>
                <div class="title black--text">
                  <span>USD</span> {{ item.amount }}
                </div>
                <div>{{ item.text }}</div>
                <v-radio class="mt-4" :value="item"></v-radio>
              </v-card-text>
            </v-card>
          </v-radio-group>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Home",
  components: { Header },
  data() {
    return {
      snackbar: false,
      selected: {},
      items: [
        {
          title: "Basic",
          amount: "5.50",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam quasi doloremque eos iure iste, quo nostrum ipsum, hic adipisci soluta cum voluptate perspiciatis accusamus quidem non error ratione temporibus.",
          plan_id: "" // plan id
        },
        {
          title: "Essential",
          amount: "6.50",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam quasi doloremque eos iure iste, quo nostrum ipsum, hic adipisci soluta cum voluptate perspiciatis accusamus quidem non error ratione temporibus.",
          plan_id: "" // plan id
        },
        {
          title: "Premium",
          amount: "7.50",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam quasi doloremque eos iure iste, quo nostrum ipsum, hic adipisci soluta cum voluptate perspiciatis accusamus quidem non error ratione temporibus.",
          plan_id: "" // plan id
        }
      ]
    };
  },
  methods: {
    // selected subscription function
    selectedsubscription() {
      // check if we are creating a new subscrption or upgrading
      const response = localStorage.getItem("@upgradesubscrption");
      // temporarily save your plan on local storage or use vuex
      // you only need the plan id
      // lets use local storage for beginer purposes
      localStorage.setItem("@selectedpackage", JSON.stringify(this.selected));
      // From here redirect for payment
      // set a timeout so user can see the package they hase selected
      // we can add a snackbar
      this.snackbar = true;
      // You can use one component and write the logic for both upgrade and payment. In my case I have separated them to two components (Payment and Upgrade)
      // Both payment and upgrade requires the user consent
      setTimeout(() => {
        if (response === true) {
          // upgrade
          this.$router.push("/upgrade-payment");
        } else {
          // new subscription
          this.$router.push("/subscription-payment");
        }
      }, 1000);
      // end
    }
  }
};
</script>

Ensure you replace the plan id with your subscription plan id from your Paypal business account. Ensure you turn them on before testing on the sandbox and going live.

Alt text of image

Profile.vue
This will be user sample profile page. You can display for them their payment details by fetching from Paypal.
<template>
  <div class="profile">
    <Header />
    <div class="content">
      <v-navigation-drawer app v-model="drawer">
        <v-card-text class="text-center">
          <v-avatar color="indigo" size="100" class="mb-3"> </v-avatar>
          <Cancel class="mb-2" />
          <Suspend class="mb-2" />
          <Activate class="mb-2" />
          <v-btn
            color="secondary"
            dark
            block
            tile
            @click="upgradesubscription"
            class="pl-5 pr-5"
          >
            <span style="text-transform: capitalize">Upgrade</span>
          </v-btn>
        </v-card-text>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Cancel from "../components/Cancel";
import Suspend from "../components/Suspend";
import Activate from "../components/Activate";
export default {
  name: "Profile",
  components: { Header, Suspend, Cancel, Activate },
  data() {
    return {
      drawer: true,
      saving: false
    };
  },
  methods: {
    // upgrade subscrption
    upgradesubscription() {
      // 1. Let's save an upgrade request and subscription id
      let subscription_id = "" // user subscription id
      localStorage.setItem("@upgradesubscrption", true);
      localStorage.setItem("@subscriptionid", JSON.stringify(subscription_id)
      // 2. Send back to select a new package
      this.$router.push("/");
      // end
    }
  }
};
</script>

The user options have been displayed in the profile page as shown below:

Alt text of image

Header.vue
<template>
  <div class="header">
    <v-app-bar app color="grey lighten-5" flat>
      <v-card-title>
        PAYPAL APP
      </v-card-title>
    </v-app-bar>
    <v-divider></v-divider>
  </div>
</template>

Activate.vue
Activate user subscription
<template>
  <div class="activate">
    <v-btn
      :loading="saving"
      color="primary"
      dark
      block
      tile
      @click="activatesubscription"
      class="pl-5 pr-5 mb-2"
    >
      <span style="text-transform: capitalize">Activate</span>
    </v-btn>
  </div>
</template>

<script>
import { activateusersubscription } from "./script";
export default {
  name: "Activate",
  data() {
    return {
      saving: false
    };
  },
  methods: {
    // activate subscription
    async activatesubscription() {
      this.saving = true;
      let subscription_id = ""; //  user subscription id
      activateusersubscription(subscription_id);
      setTimeout(() => {
        this.saving = false;
      }, 1000);
      // end
    }
  }
};
</script>

Ensure you supply user subscription ID while calling this function.

Suspend.vue
Suspend user subscription
<template>
  <!-- Suspend Component-->
  <div class="suspend-subscription">
    <v-btn
      :loading="saving"
      color="warning"
      dark
      tile
      block
      @click="suspendsubscription"
      class="pl-5 pr-5"
    >
      <span style="text-transform: capitalize">suspend</span>
    </v-btn>
  </div>
</template>

<script>
import { suspendusersubscription } from "./script";
export default {
  name: "Suspend",
  data() {
    return {
      saving: false
    };
  },
  methods: {
    // suspend subscription
    async suspendsubscription() {
      this.saving = true;
      let subscription_id = ""; //  user subscription id
      await suspendusersubscription(subscription_id);
      setTimeout(() => {
        this.saving = false;
      }, 1000);
      // end
    }
  }
};
</script>

Ensure you supply user subscription ID while calling this function.

Cancel.vue
Cancel user subscription
<template>
  <!-- Cancel Component-->
  <div class="cancel-subscription">
    <v-btn
      :loading="saving"
      color="red darken-1"
      dark
      tile
      block
      @click="cancelsubscription"
      class="pl-5 pr-5"
    >
      <span style="text-transform: capitalize">Cancel</span>
    </v-btn>
  </div>
</template>

<script>
import { cancelusersubscription } from "./script";
export default {
  name: "Cancel",
  data() {
    return {
      saving: false
    };
  },
  methods: {
    // cancel subscription
    async cancelsubscription() {
      this.saving = true;
      let subscription_id = ""; //  user subscription id
      await cancelusersubscription(subscription_id);
      setTimeout(() => {
        this.saving = false;
      }, 1000);
      // end
    }
  }
};
</script>

Ensure you supply user subscription ID while calling this function.

Payment.vue
This component allows users to buy a new subscription. For payment/purchase and upgrade they both require a user to log in and make consent.
<template>
  <!-- Payment Component-->
  <div class="payment">
    <v-sheet height="100vh">
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12">
          <div style="display: flex; justify-content: center">
            <div class="sheet-container">
              <v-card-text>
                <div class="paypal-title">{{ packageselect.title }}</div>
                <div class="paypal-text">
                  <span>Total Amount (USD) </span>
                  <span>${{ packageselect.amount }}</span>
                </div>
                <v-divider class="mt-4 mb-4"></v-divider>
                <div id="paypal-button-container"></div>
              </v-card-text>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Payment",
  data() {
    return {
      item: {},
      packageselect: ""
    };
  },
  // mounted
  async mounted() {
    // 1. get the selected package
    const package_response = localStorage.getItem("@selectedpackage");
    const package_results = JSON.parse(package_response);
    // 2. Mount paypal button
    if (package_results) {
      this.packageselect = package_results;
      await this.mountpaypalbutton();
    }
    // end
  },
  // methods
  methods: {
    // Mount paypal button
    mountpaypalbutton() {
      // eslint-disable-next-line no-undef
      paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "blue",
            layout: "vertical",
            label: "paypal",
            size: "medium"
          },
          createSubscription: async function(data, actions) {
            // 1. get the selected package
            const package_response = await localStorage.getItem(
              "@selectedpackage"
            );
            const package_results = JSON.parse(package_response);
            let plan_ID = package_results.plan_id; // user plan id
            // 2. Create a subscription
            return actions.subscription.create({
              plan_id: plan_ID
            });
          },
          // eslint-disable-next-line no-unused-vars
          onApprove: async function(data, actions) {
            /**
             * NOTE
             * - Save the subscription id in your Database
             * - This is important to ensure you can always
             * - Check on the status when user logs in or wants
             * - to make payment
             */

            // 2. Save payment subscription id
            //let subscrption_id = data.subscriptionID;

            // 4. Remove the selected package from the local storage

            localStorage.removeItem("@selectedpackage");

            // 5. Lets use swal to give us an alert once transcation is completed
            Swal.fire({
              icon: "success",
              title: "Congratulations",
              text: "Your payment has successfully been proccessed!",
              confirmButtonText: "Complete",
              showLoaderOnConfirm: true,
              preConfirm: () => {
                // redirect user to dashboard or login
                location.assign("http://localhost:8080/profile");
              },
              allowOutsideClick: false
            });
          }
        })
        .render("#paypal-button-container");
    }
  }
};
</script>

<style scooped lang="css">
@media only screen and (max-width: 600px) {
  .sheet-container {
    border: 1px solid #e0e0e0;
    width: 300px;
    border-radius: 5px;
  }
}
@media only screen and (min-width: 600px) and (max-width: 960px) {
  .sheet-container {
    border: 1px solid #e0e0e0;
    width: 350px;
    border-radius: 5px;
  }
}
@media only screen and (min-width: 960px) {
  .sheet-container {
    border: 1px solid #e0e0e0;
    width: 400px;
    border-radius: 5px;
  }
}
.paypal-title {
  -webkit-font-smoothing: antialiased;
  color: black;
  text-transform: uppercase;
  font-size: 1.1em;
  margin-bottom: 5px;
}
.paypal-text {
  -webkit-font-smoothing: antialiased;
  color: black;
  font-size: 1.2em;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

Alt text of image

Upgrade.vue
Upgrade or downgrade subscription requires a user to make consent of the upgrade or downgrade. The new changes will take effect in the next billing.
<template>
  <!-- Upgrade Component-->
  <div class="upgrade">
    <v-sheet height="100vh">
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12">
          <div style="display: flex; justify-content: center">
            <div class="sheet-container">
              <v-card-text>
                <div class="paypal-title">{{ packageselect.title }}</div>
                <div class="paypal-text">
                  <span>Total Amount (USD) </span>
                  <span>${{ packageselect.amount }}</span>
                </div>
                <v-divider class="mt-4 mb-4"></v-divider>
                <div id="paypal-button-container"></div>
              </v-card-text>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Upgrade",
  data() {
    return {
      item: {},
      packageselect: ""
    };
  },
  // mounted
  async mounted() {
    // 1. get the selected package
    const package_response = localStorage.getItem("@selectedpackage");
    const package_results = JSON.parse(package_response);
    // 2. Mount paypal button
    if (package_results) {
      this.packageselect = package_results;
      await this.mountpaypalbutton();
    }
    // end
  },
  // methods
  methods: {
    // Mount paypal button
    mountpaypalbutton() {
      // eslint-disable-next-line no-undef
      paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "gold",
            layout: "vertical",
            label: "paypal",
            size: "medium"
          },
          createSubscription: async function(data, actions) {
            // 1. get the selected package
            const package_response = await localStorage.getItem(
              "@selectedpackage"
            );
            const package_results = JSON.parse(package_response);
  // 2. get subscription id
            const subscription_response = await localStorage.getItem(
              "@subscriptionid"
            );
            let subscription_id = JSON.parse(subscription_response)
            let plan_ID = package_results.plan_id;
            // 2. Revise a subscription
            return actions.subscription.revise(subscription_id,{
              plan_id: plan_ID
            });
          },
          // eslint-disable-next-line no-unused-vars
          onApprove: async function(data, actions) {

            // 4. Remove the selected package from the local storage

            localStorage.removeItem("@selectedpackage");

            // 5. Lets use swal to give us an alert once transcation is completed
            Swal.fire({
              icon: "success",
              title: "Congratulations",
              text: "Your upgrade was succesfull",
              confirmButtonText: "Complete",
              showLoaderOnConfirm: true,
              preConfirm: () => {
                // redirect user to dashboard or login
                location.assign("http://localhost:8080/profile");
              },
              allowOutsideClick: false
            });
          }
        })
        .render("#paypal-button-container");
    }
  }
};
</script>

<style scooped lang="css">
@media only screen and (max-width: 600px) {
  .sheet-container {
    border: 1px solid #e0e0e0;
    width: 300px;
    border-radius: 5px;
  }
}
@media only screen and (min-width: 600px) and (max-width: 960px) {
  .sheet-container {
    border: 1px solid #e0e0e0;
    width: 350px;
    border-radius: 5px;
  }
}
@media only screen and (min-width: 960px) {
  .sheet-container {
    border: 1px solid #e0e0e0;
    width: 400px;
    border-radius: 5px;
  }
}
.paypal-title {
  -webkit-font-smoothing: antialiased;
  color: black;
  text-transform: uppercase;
  font-size: 1.1em;
  margin-bottom: 5px;
}
.paypal-text {
  -webkit-font-smoothing: antialiased;
  color: black;
  font-size: 1.2em;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

NOTE
You can only upgrade on subscription within the same product so when you are creating your plans ensure they are all in the same product

Alt text of image

Script.js
These are our functions to cancel, suspend, activate, and retrieve user information from Paypal.
import axios from "axios";
const client_id = process.env.VUE_APP_PAYPAL_CLIENT_ID;
const client_secret = process.env.VUE_APP_PAYPAL_CLIENT_SECRET_ID;

/**
 * If you find challege then concat the url with + instead of html integral
 * "https://api-m.sandbox.paypal.com/v1/billing/subscriptions/" + subscriptionID + "/suspend"
 * =========================================================================================
 */

// retirive user subscription details
export async function retriveuserinformation(subscriptionID) {
  // 1. Call PayPal to get a token
  const auth = await axios({
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    method: "post",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    params: {
      grant_type: "client_credentials"
    }
  });
  // 2. Call PayPal to get the subscription details
  const user_subscription_details = await axios({
    url: `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}`,
    method: "get",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${auth.data.access_token}`
    }
  });
  return user_subscription_details;
  // end
}

// suspend user subscription
export async function suspendusersubscription(subscriptionID) {
  // 1. Call PayPal to get a token
  const auth = await axios({
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    method: "post",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    params: {
      grant_type: "client_credentials"
    }
  });
  // 2. Call PayPal to get the subscription details
  const user_subscription_details = await axios({
    url: `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}/suspend`,
    method: "post",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${auth.data.access_token}`
    },
    data: {
      reason: "Customer-requested pause" // reason
    }
  });
  return user_subscription_details;
  // end
}

// suspend user subscription
export async function cancelusersubscription(subscriptionID) {
  // 1. Call PayPal to get a token
  const auth = await axios({
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    method: "post",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    params: {
      grant_type: "client_credentials"
    }
  });
  // 2. Call PayPal to get the subscription details
  const user_subscription_details = await axios({
    url: `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}/cancel`,
    method: "post",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${auth.data.access_token}`
    },
    data: {
      reason: "Customer-requested pause" // reason
    }
  });
  return user_subscription_details;
  // end
}

// activate user subscription
export async function activateusersubscription(subscriptionID) {
  // 1. Call PayPal to get a token
  const auth = await axios({
    url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    method: "post",
    headers: {
      Accept: "application/json",
      "Accept-Language": "en_US",
      "content-type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    params: {
      grant_type: "client_credentials"
    }
  });
  // 2. Call PayPal to get the subscription details
  const user_subscription_details = await axios({
    url: `https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${subscriptionID}/activate`,
    method: "post",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${auth.data.access_token}`
    },
    data: {
      reason: "Reactivating on customer request"
    }
  });
  return user_subscription_details;
  // end
}

With that, we have all sections up and running. Here is the Github repo in case you want to use it https://github.com/kevinodongo/paypal-app.git

Now let's go back to Paypal and get what we need to complete the integration and test our application. We need to create an app in the developer section of Paypal you can log in here https://developer.paypal.com/developer/applications/.

Once you have created an app click on the app and you will retrieve your credentials. You need the following:

Client ID
Secret
Once we have that we need to go back to our application in the index.html which is located in the public folder.
// Replace the client id with your app client id.
  <script
    src="https://www.paypal.com/sdk/js?client-id=${CLIENT ID}"
    data-sdk-integration-source="button-factory"
  ></script>
We are now done you can run your application

  yarn serve || yarn run serve
NEXT STEP
Testing our integration to ensure we are getting the right communication. We will test on a sandbox before replacing our sandbox URL with the live URL.

In your Paypal developer dashboard go to my accounts and create business and personal accounts.

Use the business to create sandbox plans and use those subscription plan ids during testing.

There you have it, integration of PayPal and Vue. Our next article will be on the above will be using Lambda AWS and Paypal webhooks.

Top comments (1)

Subscribe
pic
Add to the discussion
 
 
celfonica profile image
Abraham Felix
•
24 oct. 21 • Edited on 2 nov.

Hello Kevin Odongo, I hope you are doing good, this looks awesome!, I have been trying to run the script tag file inside the index HTML, but unfortunately i am having some trouble seems like our configuration is the same from what i check on GitHub repo, and i have all set in place but i get this error, do you have an idea on how i can fix this error :

Error: Child compilation failed:
Module build failed (from ./node_modules/html-webpack-plugin/lib/loader.js):
SyntaxError: Unexpected identifier

I actually think is this line:

src="paypal.com/sdk/js?client-id=${CLIENT ID}" data-sdk-integration-source="button-factory"

in the script tag on index that is causing the problem

solution: i was not putting in my App Client ID in the "${CLIENT ID}" part, LOL.

Another issue i found regarding paypal update is that we need to pass in this in the script tag:
src="https://www.paypal.com/sdk/js?client-id=${process.env.VUE_APP_PAYPAL_CLIENT_ID}&components=buttons&vault=true&intent=subscription" data-sdk-integration-source="button-factory"

solution: the vault=true and the intent=susbcription to get 2 warnings out of the way ( also added the env variable for the credential )

Thanks a lot for the tutorial

how can i Save the subscription id in my Database ?


1
 like
Like
Reply
Code of Conduct • Report abuse
🌚 Browsing with dark mode makes you a better developer.
It's a scientific fact.

Read next
jstats profile image
A Complete Beginner’s Guide to Big O Notation
Jason Stathopulos - Oct 13

orlandov14 profile image
How to create SBOMs for free
Orlandov14 - Oct 3

eelayoubi profile image
Switching between multiple Terraform versions
eelayoubi - Oct 3

necatiozmen profile image
React 18 Upgrade Guide and New Features
Necati Özmen - Oct 11


Kevin Odongo
Follow
I am here to learn. Technology evolves every day and my passion is to learn and create applications that can change and make human day to day activity simple and organized.
LOCATION
Nairobi
WORK
Senior Solutions Architect - Founders Factory
JOINED
13 janv. 2021
More from Kevin Odongo
AWS Cognito Passwordless Implementation: For Bonus, add Hasura Claims in the Token.
#javascript #beginners #tutorial #devops
Getting started with AWS CDK
#javascript #aws #tutorial #beginners
Working with AWS CloudFormation - Part 2
#javascript #webdev #tutorial #programming
<template>
  <!-- Upgrade Component-->
  <div class="upgrade">
    <v-sheet height="100vh">
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12">
          <div style="display: flex; justify-content: center">
            <div class="sheet-container">
              <v-card-text>
                <div class="paypal-title">{{ packageselect.title }}</div>
                <div class="paypal-text">
                  <span>Total Amount (USD) </span>
                  <span>${{ packageselect.amount }}</span>
                </div>
                <v-divider class="mt-4 mb-4"></v-divider>
                <div id="paypal-button-container"></div>
              </v-card-text>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Upgrade",
  data() {
    return {
      item: {},
      packageselect: ""
    };
  },
  // mounted
  async mounted() {
    // 1. get the selected package
    const package_response = localStorage.getItem("@selectedpackage");
    const package_results = JSON.parse(package_response);
    // 2. Mount paypal button
    if (package_results) {
      this.packageselect = package_results;
      await this.mountpaypalbutton();
    }
    // end
  },
  // methods
  methods: {
    // Mount paypal button
    mountpaypalbutton() {
      // eslint-disable-next-line no-undef
      paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "gold",
            layout: "vertical",
            label: "paypal",
            size: "medium"
          },
          createSubscription: async function(data, actions) {
            // 1. get the selected package
            const package_response = await localStorage.getItem(
              "@selectedpackage"
            );
            const package_results = JSON.parse(package_response);
  // 2. get subscription id
            const subscription_response = await localStorage.getItem(
              "@subscriptionid"
            );
            let subscription_id = JSON.parse(subscription_response)
            let plan_ID = package_results.plan_id;
            // 2. Revise a subscription
            return actions.subscription.revise(subscription_id,{
              plan_id: plan_ID
            });
          },
          // eslint-disable-next-line no-unused-vars
          onApprove: async function(data, actions) {

            // 4. Remove the selected package from the local storage

            localStorage.removeItem("@selectedpackage");

            // 5. Lets use swal to give us an alert once transcation is completed
            Swal.fire({
              icon: "success",
              title: "Congratulations",
              text: "Your upgrade was succesfull",
              confirmButtonText: "Complete",
              showLoaderOnConfirm: true,
              preConfirm: () => {
                // redirect user to dashboard or login
                location.assign("http://localhost:8080/profile");
              },
              allowOutsideClick: false
            });
          }
        })
        .render("#paypal-button-container");
    }
  }
};
</script>

<style scooped lang="css">
@media only screen and (max-width: 600px) {
  .sheet-container {
    border: 1px solid #e0e0e0;
    width: 300px;
    border-radius: 5px;
  }
}
@media only screen and (min-width: 600px) and (max-width: 960px) {
  .sheet-container {
    border: 1px solid #e0e0e0;
    width: 350px;
    border-radius: 5px;
  }
}
@media only screen and (min-width: 960px) {
  .sheet-container {
    border: 1px solid #e0e0e0;
    width: 400px;
    border-radius: 5px;
  }
}
.paypal-title {
  -webkit-font-smoothing: antialiased;
  color: black;
  text-transform: uppercase;
  font-size: 1.1em;
  margin-bottom: 5px;
}
.paypal-text {
  -webkit-font-smoothing: antialiased;
  color: black;
  font-size: 1.2em;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2022.