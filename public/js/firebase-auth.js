// firebaseAuth.js

const firebaseAuth = {
    async signUp(username, email, password, confirmPassword) {
      try {
        // Use Firebase Authentication to create a new user
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('User created:', userCredential.user);
  
        // Optionally, you can update user profile with username
        await userCredential.user.updateProfile({ displayName: username });
  
        // Return the user object or any other data you need
        return userCredential.user;
      } catch (error) {
        console.error('Error signing up:', error.message);
        throw error;
      }
    },
  };
  
  export default firebaseAuth;
  