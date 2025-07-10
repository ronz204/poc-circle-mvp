### Circle Features

****

**FE-01:** Create and Join Circles.

**Description:** Allows users to start new groups of goal racers or request to join existing circles. When creating a circle, the user can define a name, a description and set whether the circle is public (visible to all) or private (accessible by invitation only).

**Details:** Invitation to private circles will initially be made via a unique link or a code shared by the circle creator.

****

**FE-02:** Goal Setting and Visualization.

**Description:** Within each circle, users may define a main goal for the group or individual goals that are part of the collective goal. Goals should include a name, a description and, optionally, a deadline. It must be possible to clearly visualize the goal within the circle.

**Details:** Goals will initially be of type “yes/no” (completed/not completed) or a simple numeric value (e.g. “gain 5 kg”, “read 10 books”). Tracking complexity (e.g. goals with multiple milestones or subtasks) will be added in future iterations.

****

**FE-03:** Progress Updates.

**Description:** Allows circle members to post updates on their progress towards the finish line. These updates can be text updates (e.g. “I ran 5 km today”), and attach an optional image (e.g. a photo of the race log). Each update will be associated with the corresponding goal.

**Details:** Registration will be done through a simple “post” entry. There will be no automatic tracking or integration with other applications at this time.

****

**FE-04:** Comments and Reactions.

**Description:** Circle members will be able to comment on other users' progress updates and react to them (e.g. a “Like” or a “Cheers!”). This will encourage support and interaction within the group.

**Details:** Interaction will be basic: text comments only and a simple reaction type. No complex threads or multiple reactions are contemplated.

****

**FE-05**: User Registration.

**Description:** This feature allows new users to create an account by providing a unique username and password. The system will validate credentials and prepare the account for immediate use.

**Details:** The system will handle username availability checks and enforce password complexity rules. User data will be securely stored, typically involving hashing and salting of passwords.

****

**FE-06**: User Authentication.

**Description:** This feature enables registered users to securely log in to their accounts using their established username and password. Successful authentication grants access to personalized application features.

**Details:** This involves credential validation against stored hashes and session management (e.g., JWTs or server-side sessions) to maintain user state upon successful login.

****

**FE-07:** Profile Creation.

**Description:** This feature provides authenticated users with a concise view of their profile, including their username, an optional picture, their circles, and goals. It's designed for quick information retrieval, not extensive customization.

**Details:** The profile will be minimal: username, maybe a profile picture and a list of your active circles. There will be no advanced customization options or detailed statistics for now.