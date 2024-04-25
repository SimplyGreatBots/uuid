## What it is
A simply great integration to generate unique IDs within your bot. Generate IDs for users, organizations, or any other variable you need a unique identifier for.

## How it works
This integration uses the [UUID library](https://www.npmjs.com/package/uuid) to generate a unique ID.

## Tutorial
1. Add the 'Generate Id' card to a node in your Botpress bot.
2. Type in either V1 (Uses a Timestamp) or V4 (Uses Random Number Generation) into the version field.
3. Create a name for the output object (e.g., 'generatedId').
4. Access the id by using generated id string (e.g., generatedId.id).

#### Botpress Setup
1. Click `Install` on the top right and select your bot.
2. Click the popup that appears to configure your integration.
3. Enable and save the integration.
