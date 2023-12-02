![Logo](docs/logo.JPG)

# Bee-Aware

Welcome to pollinator awareness website.

This page offers free tools to help you understand more about our many pollinators and what you can do to support them, along with details about our activities and campaigns.

Users can subscribe to newsletter and contact campaign managers directly.

![Responsive Displays](docs/different-displays.JPG)

# Contents

# User Experience - UX

## User Goals

- Valuable and trustworthy content.
- User-friendly navigation.
- Visually attractive images and layout.
- Contact form for content manager.
- List of events.
- Newsletter subscription.

## User Stories

- As a user, I want the information to be resented in a easy to follow format.
- As a user, I want navigation to be intuitive.
- As a user, I want to be able to use website on range of devices.
- As a user, I want the information on the website to be factual and purposeful.
- As a user, I want to be able to use the website a resource for ideas regarding the pollinators.
- As a user, I want the images to be relevant to the content of the website.
- As a user, I want to be able to subscribe to a monthly newsletter with actions I can take that month.
- As a user, I want to be able to easily contact content creators for feedback or changes.
- As a user, I want to be able to connect on social media to spread awareness.

## Website Goals and Objectives

- Raise pollinator awareness amongst the general public.
- Provide useful and accurate information that entices user to spend time on website.
- Present ideas easy to implement for pollinator welfare.
- Up-to-date events and action according to the season.
- Offer option to contact the content manager.
- Increase overall website traffic by increasing rankings on search engine.
- Increase newsletter subscribers.
- Acknowledge subscriptions and contact forms submissions.
- Open social media links in new tabs.
- Invite users to engage in social media activities.

[Back to top](#contents)

## Design Choices

### Typography

- The font family chosen for Bee-Aware was 'Libre Franklin'. This font has a high readability and makes the design look clean and simple.

### Colour Scheme

- The color scheme was used based on pollinator and plant colours. Neutral pale red was chosen for backgrounds. Main accent color is saffron yellow and together with liquerish brown represent the bee. The combination of green and yellow used throughout the website in various shades for more nature inspired looks.

![Nature colour scheme](docs/nature-color-scheme.png)

- I have also used contrast-grid.eightshapes.com to get inspiration for possible colour combination to make the website visually attractive.

![Contrast Grid](docs/contrast-grid.png)

- CSS HEX
  --saffron: #ecba04ff;
  --tea-rose-red: #efbeb7ff;
  --dark-moss-green: #606c38ff;
  --licorice: #271a16ff;

### Logo and Images

### Structure

- My website will be responsiveto different layouts depending on the size of the viewport have been included in the CSS media queries. the breakpoints I am using are from Bootstrap.
  ![Breakpoints](docs/media-queries.png)

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

# Features

- Bee-Aware aims to simplify information availability for users as much as possible. Layout  is easy to use and adhere to best practices in formatting and styling. The site's flow and appearance will be recognizable to users. Browsing of the entire website is encouraged by the relatable and easy to understand material.

## Existing Features

### Navigation Bar

- This webpage has navigation bar which is responsive to different screen sizes. It includes the logo of the bee which leads back to the home page.

* Desktop (>=992px)

![Navigation bar large screen](docs/navbar-full-screen.png)

- The navigation bar is spread out the full width of the device with all link to different sections of the webpage. Navigation bar is fixed so it is present while browsing the page. It also has a shade of liquorish brown for :hover effect to improve user experience.

![Navigation bar large screen](docs/navbar-full-screen-hover.png)

- Small devices (<768px)
  - For small devices, the desktop navigation bar is not user friendly. For this reason, it is coded to wrap into hamburger style icon. Once user clicks on the icon, the navigation options spread across the screen of the mobile device.

![Navigation bar mobile screen](docs/navbar-mobile-device.png)

- Once user taps on the icon, the navigation options spread across the screen of the mobile device.

![Navigation bar mobile screen](docs/navbar-mobile-device-tap.png)

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

### Landing Page

- Bee-Aware landing page serves as a primary homepage. The landing page's objectives are to explain to the visitor the aim of the website in one sentence. Also it invites them to explore the site further using the navigation bar. The background image was taken by me. The image has a faint overlay as it makes introductory paragraph legible for better UX.

![Home Page Background Image](docs/home-page-background-image.png)

- The second part of the home page is the list of pollinators under the background imagae. The content layout is very simple and self explanatory. This part intends to educate the user and encourage them to continue reading other parts of the webpage.

![Home Page Second Part](docs/home-page-part-two.png)

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

### About Section

- This section contains information about the importance and issues pollinators face. The images chosen reflect the contents of the section. On the larger screens (>=992px), About section has two columns. On the right side, there is an eye catching image and on the left side I have included a consolidated version of the value pollinators provide to humans and nature. I kept the information as brief as possible in order to keep the end-users attention. Content is broken down into small paragraphs so the user can understand it better.

![About Section](docs/about-first-row.png)

- The second row of the About section has the opposite layout for visual and contextual purposes. I aimed to highlight the Importance vs Issues using the flexbox layout of the section.

![About Section] (docs/about-second-row.png)

- For the smaller screen sizes (<992px), side by side image and text layout does not work so I have changed flex direction from row to column. It displays image first and text under which allows the content to be spaced out better to fit smaller screen sizes without looking too crowded.

![About Section Tablet View](docs/about-tablet-view.png)

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

### Intitiatives

- Logical layout is one of my design goals for this website. After outlining importance and issues to the end user, I am now suggesting action in the Initiatives section. I have only included four actions/initiatives with relevant images and explanations in order not to overwhelm the end user with excessive information.

  - On the larger screens (>=992px), the Initiatives section is displayed using grid in two columns. Each inititiave has a saffron yellow border to match the theme of the website. If end user is only browsing the website, inititive has an h3 heading to summarise the main point.

[Initiatives Desktop View](docs/initiatives-desktop-view.png)

- To continue with the consistent appearance of the webpage, the initiative boxes a displayed in one column. The inside of each card has the same layout as in the larger screen.

[Initiatives Smaller Screen](docs/initiatives-small-screen-view.png)

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

### Events

- This section contains the vents throughout the year end-user may be interested take part in. The colours are used in the layout are yellow and green to represent the pollinators and nature.

  _Large and Medium devices_ have the title of the event displayed on the left and details on the right using grid view.

[Events Large and Medium Screen](docs/events-ml-screen-view.png)

_Small Screen devices_ have title and details displayed in one column just like other sections. The details part would have been illegible otherwise.

[Events Small Screen](docs/events-small-screen-view.png)

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;
