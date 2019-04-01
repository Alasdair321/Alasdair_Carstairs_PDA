### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  #no initialization therefore non class level functions cannot be called

  def checkforAce(card) #inconsistent function definition naming - suggest "check_for_Ace"
    if card.value = 1 # is equal to ( == )
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #define function by "def", separate arguments by " , "
  if card1.value > card2.value
    return card.name #undefined method name, and undefined variable "card"
  else
    card2 #will return card2 if both cards have same value
  end
end
end # end in wrong place, thus excludes function below from class

def self.cards_total(cards)
  total #undefined variable
  for card in cards
    total += card.value
    return "You have a total of" + total #return is in the for loop so will return the value of the first card in array
  end
end


```
