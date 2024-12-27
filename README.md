# List of Ideas/Bullet Points to Test:

    Functional:
        Verify user registration and login functionality.
        Ensure search filters (e.g., animal type, breed, location) return correct results.
        Test navigation through different pages (e.g., homepage, search results, pet details).
        Validate the adoption application process.
        Test API endpoints for fetching data.
    UI:
        Verify page responsiveness across devices.
        Check alignment and readability of elements.
        Test forms for validation (e.g., mandatory fields, email format).
        Ensure images and videos load properly.
    Performance:
        Measure page load times.
        Test the app under heavy traffic.

# Prioritization:

    High Priority:
        Registration/Login.
        Search filters functionality.
        Page load times.
        Security validations.
    Medium Priority:
        Form validations.
        Navigation between pages.
    Low Priority:
        Aesthetic issues (e.g., alignment, colors).

# Defects

<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Reproduce Steps</th>
      <th>Expected Result</th>
      <th>Actual Result</th>
      <th>Attachments</th>
      <th>Severity</th>
      <th>Priority</th>
      <th>Environment</th>
    </tr>
  </thead>
  <tbody>
      <tr>
      <td>Incorrect Filtering of Dogs by Gender in the "Dogs Available for Adoption" Section</td>
      <td>
        <p> 1- Open the browser and navigate to Petfinder website. <br> 2- Click on the dogs tile. <br> 3- Use the "Gender" filter and select Male. <br> 4- Observe the results - some female dogs appear in the filtered list.
      </td>
      <td>The gender filter should correctly display only dogs matching the selected gender.</td>
      <td>The gender filter incorrectly includes dogs of the opposite gender in the results.</td>
      <td>
          <a href="./images/1.jpeg"  target="_blank"> attachment </a>
      </td>
      <td>Critical</td>
      <td>High</td>
      <td>Website Desktop</td>
    </tr>
    <tr>
      <td>Misalignment or Clipping of Buttons in the "Planning to Adopt a Pet?" Section</td>
      <td>
        <p> 1- Open the browser and navigate to Petfinder website. <br> 2- Scroll down to the "Planning to Adopt a Pet?" section. <br> 3- Observe the layout of the text under each subheading
      </td>
      <td>The text in this section should align correctly, without any clipping or misplacement.</td>
      <td>The layout appears misaligned or visually clipped (refer to the attached screenshot for reference).</td>
      <td>
          <a href="./images/2.jpeg"  target="_blank"> attachment </a>
      </td>
      <td>Low</td>
      <td>Low</td>
      <td>Website Desktop</td>
    </tr>
    <tr>
      <td>Images are cut off in the "Mobile App Download" section</td>
      <td>
        <p> 1- Open the browser and navigate to Petfinder website. <br> 2- Click on "Mobile App Download" in the footer. <br> 3- Scroll down to the "DOWNLOAD OUR APP" section
      </td>
      <td>The App Store and Google Play images should be displayed fully and without any cropping.</td>
      <td>The images are partially cut off and not fully visible.</td>
      <td>
          <a href="./images/3.jpeg"  target="_blank"> attachment </a>
      </td>
      <td>Low</td>
      <td>Medium</td>
      <td>Website Desktop</td>
    </tr>
    <tr>
      <td>The cookie consent button overlaps with other web elements</td>
      <td>
        <p> 1- Open the browser and navigate to Petfinder website. <br> 2- Click on the "Dogs" tile. <br> 3- Click on "Filter" button
      </td>
      <td>The page layout should display properly and remain well-organized.</td>
      <td>The cookie consent button overlaps with the "Reset" button.</td>
      <td>
          <a href="./images/4.jpeg"  target="_blank"> attachment </a>
      </td>
      <td>Medium</td>
      <td>Medium</td>
      <td>Website Mobile</td>
    </tr>
    <tr>
      <td>The share button does not respond when clicked</td>
      <td>
        <p> 1- Open the browser and navigate to Petfinder website. <br> 2- Click on the "Dogs" tile. <br> 3- Scroll down to "save search" and "share" button. <br> 4- Click on the "share" button
      </td>
      <td>The button should be functional and display share search options when clicked.</td>
      <td>No action occurs upon clicking the button.</td>
      <td>
          <a href="./images/5.jpeg"  target="_blank"> attachment </a>
      </td>
      <td>High</td>
      <td>High</td>
      <td>Website Mobile</td>
    </tr>
    <tr>
      <td>Empty First Name and Last Name Allowed</td>
      <td>
        <p> 1- Navigate to the registration form on the website. <br> 2- Leave the "First Name" and "Last Name" fields white space in each. <br> 3- Fill in other required fields (e.g., ZIP Code, number of pets). <br> 4- Click the "Continue" button
      </td>
      <td>The form should not allow submission if "First Name" or "Last Name" is empty or contains only white spaces and should display an error message.</td>
      <td>The form submits successfully even when "First Name" and "Last Name" fields are left blank.</td>
      <td>
          <a href="./images/6.jpeg"  target="_blank"> attachment </a>
      </td>
      <td>Medium</td>
      <td>High</td>
      <td>Website Desktop</td>
    </tr>
    <tr>
      <td>Dropdown Menus Reset on Back Button Press</td>
      <td>
        <p> 1- Navigate to the registration form on the website. <br> 2- Fill in all the fields, including selecting values for the dropdown menus (# of dogs, # of cats). <br> 3- Click the "Continue" button to proceed to the next step. <br> 4- Press the back button.
      </td>
      <td>Dropdown menu values should persist when navigating back to the form. The form should validate that dropdown values are selected before allowing the user to proceed.</td>
      <td>Dropdown menu values reset, and the form allows submission without selecting dropdown options.</td>
      <td>
          <a href="./images/7.jpeg"  target="_blank"> attachment </a>
      </td>
      <td>High</td>
      <td>Medium</td>
      <td>Website Desktop</td>
    <tr>
      <td>Email Validation Missing on Client-Side Submission</td>
      <td>
        <p> 1- Navigate to the login form. <br> 2- Enter an invalid or non-existent email in the "Email or Phone number" field. <br> 3- Enter a password in the "Password" field. <br> 4- Click the "Sign in" button.
      </td>
      <td>The client-side should validate the email format before submission.</td>
      <td>The form allows submission with invalid or non-existent email input.</td>
      <td>
          <a href="./images/8.jpeg"  target="_blank"> attachment </a>
      </td>
      <td>Medium</td>
      <td>High</td>
      <td>Website Desktop</td>
    </tr>
    </tr>
  </tbody>
</table>
