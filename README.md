![Logo](docs/logo.png)

# Bee-Aware

[Link to Bee-Aware Website](https://indre-v.github.io/bee-aware/)

Welcome to pollinator awareness website.

This page offers free information to help you understand more about our many pollinators and what you can do to support them, along with details about our activities and campaigns. This website is for educational purposes.

Users can subscribe to newsletter and contact campaign managers directly.

![Bee-Aware](docs/bee-aware-responsive-display.png)

# Contents

- [Bee-Aware](#bee-aware)
- [Contents](#contents)
  - [User Goals](#user-goals)
  - [User Stories](#user-stories)
  - [Website Goals and Objectives](#website-goals-and-objectives)
  - [Wireframes](#wireframes)
    - [Mobile and Desktop Wireframes](#mobile-and-desktop-wireframes)
  - [Design Choices](#design-choices)
    - [Typography](#typography)
    - [Colour Scheme](#colour-scheme)
    - [Logo and Images](#logo-and-images)
    - [Structure](#structure)
- [Features](#features)
  - [Existing Features](#existing-features)
    - [Navigation Bar](#navigation-bar)
    - [Landing Page](#landing-page)
    - [About Section](#about-section)
    - [Initiatives](#initiatives)
    - [Events](#events)
    - [Contact](#contact)
    - [Footer](#footer)
  - [Future Enhancements](#future-enhancements)
- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Libraries \& Framework](#libraries--framework)
  - [Tools](#tools)
- [Testing](#testing)
  - [Responsiveness Tests](#responsiveness-tests)
  - [Code Validation](#code-validation)
    - [HTML](#html)
    - [CSS](#css)
  - [Accessibility Testing](#accessibility-testing)
  - [User Story Testing](#user-story-testing)
- [Deployment](#deployment)
- [Credits](#credits)

## User Goals

- Valuable and trustworthy content.
- User-friendly navigation.
- Visually attractive images and layout.
- List of events.
- Contact form for content manager.
- Newsletter subscription.

## User Stories

- As a user, I want the information to be presented in a easy to follow format.
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

## Wireframes

Wireframes for the website were made using Balsamiq tool. Keeping in mind mobile first approach, wireframe for mobile was designed first. Naturally there is some deviation from wireframes in the live version of the website to accommodate the content. I have removed the logo for the mobile version and added a background image. As the information is laid out in a logical sequence, the decision was made to have one-page website to enhance the end user experience.

### [Mobile and Desktop Wireframes](docs/mobile-desktop-wireframes.pdf "Mobile and Desktop Wireframes")

## Design Choices

### Typography

- The font family chosen for Bee-Aware was 'Libre Franklin'. This font has a high readability and makes the design look clean and simple.

### Colour Scheme

- The colour scheme was used based on pollinator and plant colours. Neutral soft pale pink was chosen for backgrounds. Main accent colour is saffron yellow and together with licorice brown represent the bee. The combination of green and yellow used throughout the website in various shades for more nature inspired looks. All the box shadows are combined of green and yellow and are the same size throughout the website.

![Nature colour scheme](docs/nature-color-scheme.png)

- I have also used ![Contrast Grid](https://contrast-grid.eightshapes.com/ "Contrast Grid") to get inspiration for possible colour combination to make the website visually attractive.

![Contrast Grid](docs/contrast-grid.png)

- CSS HEX

  --saffron: #ecba04ff;

  --tea-rose-red: #efbeb7;

  --dark-moss-green: #606c38;

  --licorice: #271a16;

### Logo and Images

Website logo is Microsoft Emoji of the bee. Other images were used from the internet to compliment the information on the website. All images have alt tags to comply with accessibility guidelines. I have also compressed larger images to optimise website performance.

### Structure

- My website will be responsive to different layouts depending on the size of the viewport have been included in the CSS media queries. the breakpoints I am using are from Bootstrap.
  ![Breakpoints](docs/media-queries.png)

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

# Features

- Bee-Aware aims to simplify information availability for users as much as possible. Layout is easy to use and adheres to best practices in formatting and styling. The site's flow and appearance will be recognizable to users. Browsing of the entire website is encouraged by the relatable and easy to understand material.

## Existing Features

### Navigation Bar

- This webpage has navigation bar which is responsive to different screen sizes. It includes the logo of the bee which leads back to the home page.

  - Desktop (>=992px)

![Navigation bar large screen](docs/navbar-full-screen.png)

- The navigation bar is spread out the full width of the device with all link to different sections of the webpage. Navigation bar is fixed so it is present while browsing the page. It also has a shade of rose pink for :hover effect to improve user experience.

![Navigation bar large screen](docs/navbar-full-screen-hover.png)

- Small devices (<576px)
  - For small devices, the desktop navigation bar is not user friendly. For this reason, it is coded to wrap into hamburger style icon located on the left. Once user clicks on the icon, the navigation dropdown options float on left screen of the mobile device.

![Navigation bar mobile screen](docs/navbar-mobile-device.png)

- Once user taps on the icon, the navigation options float on left of the screen of the mobile device.

![Navigation bar mobile screen](docs/navbar-mobile-device-tap.png)

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

### Landing Page

- Bee-Aware landing page serves as a primary homepage. The landing page's objectives are to explain to the visitor the aim of the website in one sentence. Also it invites them to explore the site further using the navigation bar. The image has a faint overlay with the box for the hero text as it makes introductory paragraph legible for better UX.

![Home Page Background Image](docs/home-page-background-image.png)

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

### About Section

- The first part of the about section is the list of pollinators with the soft background colour. The content layout is very simple and self explanatory. This part intends to educate the user and encourage them to continue reading other parts of the webpage. I have used emojis to generate the characters instead of writing.

![Home Page Second Part](docs/about-part-one.png)

- This section also contains information about the importance and issues pollinators face. The images chosen reflect the contents of the section. On the larger screens (>=992px), About section has two columns. On the right side, there is an eye catching image and on the left side I have included a consolidated version of the value pollinators provide to humans and nature. I kept the information as brief as possible in order to keep the end-users attention. Content is broken down into small paragraphs so the user can understand it better.
- The second row of the About section has the opposite layout for visual and contextual purposes. I aimed to highlight the Importance vs Issues using the flexbox layout of the section.

![About Section](docs/about-desktop-view.png)

- For the smaller screen sizes (<992px), side by side image and text layout does not work so I have changed flex direction from row to column. It displays image first and text under which allows the content to be spaced out better to fit smaller screen sizes without looking too crowded.

![About Section Tablet View](docs/about-tablet-view.png)

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

### Initiatives

- Logical layout is one of my design goals for this website. After outlining importance and issues to the end user, I am now suggesting action in the Initiatives section. I have only included four actions/initiatives with relevant images and explanations not to overwhelm the end user with excessive information.

  - On the larger screens (>=992px), the Initiatives section is displayed using grid in two columns. Each initiative has a saffron yellow border and tea rose background to match the theme of the website. If end user is only browsing the website, every initiative has a heading to summarise the main point.

![Initiatives Desktop View](docs/initiatives-desktop-view.png)

- To continue with the consistent appearance of the webpage, the initiative boxes a displayed in one column on the smaller screens. The inside of each card has the same layout as the larger screen.

![Initiatives Smaller Screen](docs/initiatives-small-screen-view.png)

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

### Events

- This section contains events throughout the year end-user may be interested take part in. The colours are used in the layout are yellow and green to represent pollinators and nature. The border shadow colours are the same as in the previous section.

  _Large and Medium devices_ have title of the event displayed on the box with light shadow with heading at the top and details below.

![Events Medium and Large Screen](docs/events-ml-screen-view.png)

_Small Screen devices_ have title and details displayed in one column just like other sections. The box is spread accross the screen for better legibility.

![Events Small Screen](docs/events-small-screen-view.png)

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

### Contact

- The contact section has two parts in one box. For visual purposes, same shadow style is coded around the border as in other sections. The end-user can subscribe to newsletter or send a message. All text fields are required and would not all user to subscribe or send otherwise. The email field is validated as well. Larger view screen has subscription and message parts display the the same row. For small screens, they are displayed in one column just like other all the other sections on small screen display. Hidden labels are added to the input fields for accessibility.

![Contact Medium and Large Screen](docs/contact-ml-screen-view.png)
![Contact Small Screen](docs/contact-small-screen-view.png)

- When end-user clicks the button to either join or send, the applicable page for one of two actions is displayed. Both pages contain a thank you message with the bee logo for large screens and home icon in moss green and turns saffron yellow when hovered which brings the user back to the homepage.

![Contact Email Thank You](docs/contact-email-tku.png)
![Contact Newsletter Thank You](docs/contact-newsletter-tku.png)

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

### Footer

- Moss green colour is used throughout the elements of the webpage is continued to the footer as a background. Footer includes the links to social media which are coded to open in a separate tab. The three links are spread across the bottom of the page. A saffron yellow hover effect is added to the social media icons. THe hover colour is consistent with the Contact section buttons.

![Footer with Hover](docs/footer-hover.png)

## Future Enhancements

- An e-commerce element where users may buy pesticides and seeds that are friendly to pollinators could be added.
- A separate blog page or the entire blog could be added on navigation bar. It would be beneficial to provide users with up-to-date news. Additional content, such as articles and videos, may be shown here.
- It would be beneficial to have embedded maps for each event that don't require off-page navigation, since this would facilitate finding the events nearby and improve user experience.
- A gallery of end user pollinator friendly gardens.

# Technologies Used

## Languages

- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5 "HTML")
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS")

## Libraries & Framework

- [Google Fonts](https://fonts.google.com/ "Google Fonts")
- [Font Awesome library](https://fontawesome.com/ "Font Awesome")

## Tools

- [Codeanywhere](https://app.codeanywhere.com/ "Codeanywhere")
- [GitHub](https://github.com/ "GitHub")
- [Balsamiq](https://balsamiq.com/wireframes/ "Balsamiq")
- [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML")
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS")
- [Bootstrap](https://getbootstrap.com "Bootstrap")
- [TOC Generator](https://ecotrust-canada.github.io/markdown-toc/ "TOC Generator")
- [Am I Responsive](https://ui.dev/amiresponsive "Am I responsive")
- [Responsive Design Checker](https://responsivedesignchecker.com/ "Responsive Design Checker")
- [WAVE Accessibility Tool](https://wave.webaim.org/ "WAVE Accessibility Tool")
- [Image Resize](https://www.iloveimg.com/ "iLoveIMG")

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

# Testing

## Responsiveness Tests

- I have deployed the project a very early stage in order to test the responsivenes. I have used mobile first approach and checked all my changes on Microsoft Edge and Google Chrome browser DevTools. External website - [Responsive Design Checker](https://responsivedesignchecker.com/ "Responsive Design Checker") was used to test deployed versions. Another external source used was [Am I Responsive](https://ui.dev/amiresponsive "Am I responsive") website to get a single view of various device breakpoints.

## Code Validation

- Bee-Aware has been validated via W3C HTML Validator and the W3C CSS Validation.

### HTML

- I have used [W3C HTML Validation Service](https://validator.w3.org/ "W3C HTML"). I have tested 3 html files. They all came back without errors.
  ![W3C HTML Validator](docs/html-validator-index.png "W3C HTML Validator index.html")

![W3C HTML Validator](docs/html-validator-email-thanks.png "W3C HTML Validator email-thanks.html")
![W3C HTML Validator](docs/html-validator-newsletter-thanks.png "W3C HTML Validator newsletter-thanks.html")

### CSS

- CSS code for the webpage was validated on [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ "W3C CSS Validator"). It has returned no errors.

  ![W3C CSS Validator](docs/css-validator-results.png "W3C CSS Validator results")

## Accessibility Testing

I have used web accessibility evaluation tool [WAVE Tool](https://wave.webaim.org/) which helps to determine if web content is accessible to individuals with disabilities. It highlighted the issue in the code with label id which I rectified and passed passed the test.

![WAVE](docs/wave-report.png "WAVE Results")

## User Story Testing

| User Story                                                                                            | Result                                                              | Pass |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---- |
| As a user, I want the information to be resented in a easy to follow format.                          | Website is on one page and easy to scroll or use the navigation tab | Yes  |
| As a user, I want navigation to be intuitive.                                                         | Navigation bar has logical options                                  | Yes  |
| As a user, I want to be able to use website on range of devices.                                      | All features available on all size screens and browsers             | Yes  |
| As a user, I want the information on the website to be factual and purposeful.                        | The information is verified and obtained from reliable sources      | Yes  |
| As a user, I want to be able to use the website a resource for ideas regarding the pollinators.       | Initiatives section has actions for the user                        | Yes  |
| As a user, I want the images to be relevant to the content of the website.                            | Images summarize the content for visual learners                    | Yes  |
| As a user, I want to be able to subscribe to a monthly newsletter with actions I can take that month. | Subscription option available in contact section                    | Yes  |
| As a user, I want to be able to easily contact content creators for feedback or changes.              | Contact box available for users to contact creators                 | Yes  |
| As a user, I want to be able to connect on social media to spread awareness                           | Social Media link available at the bottom of the page               | Yes  |

# Deployment

Bee-Aware was deployed early in the process to GitHub pages via the following steps:

- Navigate to the repository on GitHub and click on **Settings**

- In the side navigation and select **Pages**

- In the **None** dropdown and choose **main**

- Click on the **Save** button.

- The website is now live at `https://indre-v.github.io/bee-aware/`

_Any changes required to the website, they can be made, commited and pushed to GitHub._

\
&nbsp;
[Back to Top](#contents)
\
&nbsp;

# Credits

- Feedback, advice and support:

  - [Simen Daehlin](https://github.com/Eventyret "Simen Daehlin")

- Code inspiration and learning content:

  - [Flexbox and Grid Tutorials by Kevin Powell](https://www.youtube.com/user/KepowOb "Kevin Powell")

  * [Project Portfolio-1 channel on Slack](https://slack.com/intl/en-ie/ "Slack")

  - [Love Running Project](https://codeinstitute.net "Love Running Project")
  - [W3C Schools](https://www.w3schools.com/ "W3C Schools")
  - [MUO](https://www.makeuseof.com/ "MUO")

* Visual content:

  - [Coolors](https://coolors.co/ "Coolors")
  - [Contrast Grid](https://contrast-grid.eightshapes.com/ "Contrast Grid")

* Images:

  - Hero image [Bee Friendly Apiary](https://beefriendlyapiary.com/gallery/614zdfmyfmsa4mlwu84vvmz6epn7at"Bee Friendly Apiary")
  - Bee Logo [Gencraft](https://gencraft.com/generate/ "Gencraft")
  - Image of selection of fruit and veg [Homestead and Chill](https://homesteadandchill.com/benefits-mycorrhizae-garden "Homestead and Chill")
  - Image of tractor spraying the field [Archi Media](https://archimediatrust.org/ "Archi Media")
  - Image of small vegetable garden [Arum Jiwa](https://urbanpollinators.blogspot.com/ "Arum Jiwa")
  - Image of wildflower meadow [Nature Images](https://all-free-download.com/free-photos/nature-images.html "Nature Images")
  - Image of a meadow with a sign [Seed Guide](https://www.seed.ab.ca/innovative-program-targets-native-bee-habitat/ "Seed Guide")
  - Image of spread the word sign [DreamsTime](https://www.dreamstime.com/spread-word-round-ribbon-isolated-label-sign-sticker-image192985031 "DreamsTime")
  - Image in the thank you note [Bay Nature](https://baynature.org/event/planting-for-pollinators/ "Bay Nature")
  - Image for mobile top navigation [Shutterstock](https://www.shutterstock.com/ "Shutterstock")

_Bee-Aware webpage provides free information only. It is not intented for monetary gains_
