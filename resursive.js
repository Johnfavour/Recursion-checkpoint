function isPalindrome(word) {
    // Convert the word to lowercase and remove any non-alphanumeric characters
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    function isPalindrome(word) {
        // Convert the word to lowercase and remove any non-alphanumeric characters
        const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
      
        // Base case: an empty word or a word containing a single character is a palindrome
        if (cleanWord.length <= 1) {
          return true;
        }
      
        // Compare characters at the ends of the word
        if (cleanWord[0] === cleanWord[cleanWord.length - 1]) {
          // Recursively test the rest of the word
          return isPalindrome(cleanWord.slice(1, cleanWord.length - 1));
        } else {
          // Characters are different, not a palindrome
          return false;
        }
      }
      
      // Test the function
      const word1 = "gag";
      const word2 = "kayak";
      const word3 = "php";
      const word4 = "radar";
      const word5 = "hello";
      
      console.log(isPalindrome(word1)); 
      console.log(isPalindrome(word2)); 
      console.log(isPalindrome(word3)); 
      console.log(isPalindrome(word4)); 
      console.log(isPalindrome(word5)); 
    if (cleanWord.length <= 1) {
      return true;
    }
  
    
    if (cleanWord[0] === cleanWord[cleanWord.length - 1]) {
      
      return isPalindrome(cleanWord.slice(1, cleanWord.length - 1));
    } else {
      
      return false;
    }
  }
  
 
  const word1 = "gag";
  const word2 = "kayak";
  const word3 = "php";
  const word4 = "radar";
  const word5 = "hello";
  
  console.log(isPalindrome(word1)); 
  console.log(isPalindrome(word2)); 
  console.log(isPalindrome(word3)); 
  console.log(isPalindrome(word4)); 
  console.log(isPalindrome(word5)); 
  