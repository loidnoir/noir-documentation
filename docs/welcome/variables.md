---
title: Message variables
description: Welcome message variables
slug: editor-variables
---

You can use variables in your welcome messages to provide additional dynamic information such as server name, joined user name.

Here is the list of all available variables.

- `{{remove value}}` Removes input

#### Guild variables

- `{{guild name}}` Server name
- `{{guild icon}}` Server icon URL
- `{{guild members}}` Server member count
- `{{guild createdAt}}` Server creation date `Format DD/MM/YYYY`
- `{{guild created}}` Server creation date `Format X years ago`

#### Client variables

- `{{client name}}` Bot name `Noir`
- `{{client avatar}}` Bot avatar URL `Noir's avatar`

#### User variables

- `{{user name}}` Joined user name
- `{{user avatar}}` Joined user avatar URL
- `{{user id}}` Joined user id
- `{{user createdAt}}` Joined user account creation date `Format DD/MM/YYYY`
- `{{user created}}` Joined user account creation date `Format X years ago`
- `{{user joinedAt}}` Joined user joining date `Format DD/MM/YYYY`
- `{{user joined}}` Joined user joining date `Format X years ago`
