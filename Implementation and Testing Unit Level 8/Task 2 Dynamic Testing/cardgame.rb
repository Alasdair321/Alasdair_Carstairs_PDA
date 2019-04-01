require_relative 'card.rb'

class CardGame

  def self.check_for_Ace card
    if card.value == 1
      return true
    else
      return false
    end
  end

  def self.highest_card card1, card2
    if card1.value > card2.value
      card1.name
    elsif card2.value > card1.value
      card2.name
    else
      "Same value"
    end
  end


  def self.cards_total cards
    total = 0
    for card in cards
      total += card.value
    end
    return "You have a total of #{total}"
  end
end
