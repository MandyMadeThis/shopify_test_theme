# WorldVision Shopify Theme

## Setup

1. Copy `config_SAMPLE.json` and create a new file named `config.json`
1. Log into https://worldvision-3.myshopify.com/admin (the login info should be in 1Password)
1. Click on "App" > "Private App" > "Local Theme"
1. Copy and paste the API Key and Password into the `config.json` file
1. Click on "Online Store" > "Themes"
1. Click "Upload Theme" and upload the "Branch Starter.zip" file
1. Rename the theme to "Jane's Branch" (using your name)
1. Click "Customize Theme"
1. In the URL copy the theme ID `...myshopify.com/admin/themes/THEME_ID/editor`
1. Paste the THEME_ID value into `config.json`
1. run `npm start`
1. Visit https://worldvision-3.myshopify.com/pages/styleguide
