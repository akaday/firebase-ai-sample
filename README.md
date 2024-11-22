# Firebase AI Sample

This project is a sample application demonstrating the integration of Firebase with AI capabilities.

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/akaday/firebase-ai-sample.git
   cd firebase-ai-sample
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure Firebase:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Copy the Firebase configuration object from the Firebase Console and replace the placeholder values in `firebase-init.js`.

4. Run the application:
   ```sh
   npm start
   ```

## Usage Examples

1. User Authentication:
   - Users can sign up and log in using their email and password.
   - Firebase Authentication handles user management and authentication.

2. Firestore Database:
   - The application uses Firestore to store and retrieve data.
   - Example: Storing user profiles and retrieving them for display.

3. AI Integration:
   - The application integrates AI capabilities using Firebase ML Kit.
   - Example: Image recognition and text translation.
