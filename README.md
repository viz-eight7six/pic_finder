# Picture Finder

[Pic Finder live][heroku]

[heroku]: https://pic-finder.herokuapp.com/

Pic Finder is a full-stack web application similar to google images using Getty Images API. This web-app uses a React framework that connects to a PostgreSQL DB with Ruby on Rails.

## Features & Implementation

### Image Search

  A user can input any search term into the bar, on the front end, the words will automatically be lowercased and any symbols removed.

  It will be sent to the backend using rails to check if the word exists in the dictionary database. If the word exists, it will just be returned. Else we will manipulate the vowels to find a word. If the dictionary can find no matching term, the input term will be used to search.

  We only check for 2 vowel swaps. Just to avoid recursion hell, since the dictionary is pretty big

```Ruby
def self.check_vowels(word)
  return word if Dictionary.find_by_word(word)
  new_word = self.replace_vowel(word)
  return new_word if new_word
  new_word = self.replace_vowel2(word)
end
```

## Future Implementations

### Spell Checking

  Actually this is already implemented in the backend with a 2 replace or 1 insertion algorithm, we can simply swap the methods in the search and it will work. However in this project we will keep it simple.

### Adding to Dictionary

  Allow for users to add words that are not in the dictionary to be there and let them search for those pictures.

### Downloading Images

  let users click on images to download using the Getty Image API
