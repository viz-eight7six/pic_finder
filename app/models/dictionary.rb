class Dictionary < ApplicationRecord

  LETTERS = ('a'..'z').to_a

  def self.check_word(word)
    return word if Dictionary.find_by_word(word)
    new_word = self.edit1(word)
    return new_word
  end

  def self.edit1(word)
    new_word = self.replace_letter(word)
    return new_word if new_word
    new_word = self.insert_letter(word)
    return new_word if new_word
    new_word = self.edit2(word)
  end

  def self.edit2(word)
    LETTERS.each do |letter|
      # assume first letter is correct
      for i in 1...word.length do
        new_word = word[0...i] + letter + word[i+1..-1]
        new_word_2 = self.replace_letter(new_word)
        return new_word_2 if new_word_2
      end
    end
    false
  end

  def self.replace_letter(word)
    LETTERS.each do |letter|
      # assume first letter is correct
      for i in 1...word.length do
        new_word = word[0...i] + letter + word[i+1..-1]
        return new_word if Dictionary.find_by_word(new_word)
      end
    end
    false
  end

  def self.insert_letter(word)
    LETTERS.each do |letter|
      for i in 0...word.length do
        new_word = word[0..i] + letter + word[i+1..-1]
        return new_word if Dictionary.find_by_word(new_word)
      end
    end
    false
  end

end
