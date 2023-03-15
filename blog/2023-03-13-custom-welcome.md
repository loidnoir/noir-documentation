---
title: Customize welcome
slug: customize-welcome
authors: [loid]
tags: [guide, welcome message]
hide_table_of_contents: false
---

## Welcome message

Noir has an advanced welcome message editor. If you haven't played with it consider to do. This is a quick guide how to make a nice looking message for your server.

![Customize welcome messages](../static/img/blog/customize-messages.svg)

<!--truncate-->

### Where to start

Let's start with running the command `/settings` and go to `welcome` section. You should see button `Message editor`, click and open the editor. Editor has every option to setup embed or simple message. It also has variables you can use to showcase information about user or server.

First if the buttons aren't working you need to turn on the system, in order to do that click on `Enable features` button. Now all buttons are working. Some options are only available with premium.

![Embed settings showcase](https://i.imgur.com/4rldWkI.png)

Click on `Embed settings` and it will open fancy modal with some options. First field consider the embed color. Noir has many color options built in but you can always use your custom color with **hex code**.

:::tip
Use Google's color picker to generate hex code for your color.
:::

In my case I will use built in lime color, just type `lime` in the color field. Let's also add description for the embed, type `{{user name}} joined {{guild name}}` in the description field.

![User join message](https://i.imgur.com/EkpHmM3.png)

You may ask what is `{{user name}}`. Noir uses this syntax to identify variables. It stands for new joined user name and the same goes for `{{guild name}}`, it stands for server name. To learn more about message variables [check out welcome editor resources](../welcome/editor-variables.md)

To preview the message go back to the main editor and click `Example message` button. It will show message example how it will look like in the action.

Play around with other fields and add everything you need for your perfect server. When you are done remember to click `Save` button. Noir does not change settings unless you save changes so any time you changed something unfavorable you can just click `Refresh` button to restore last changes.
