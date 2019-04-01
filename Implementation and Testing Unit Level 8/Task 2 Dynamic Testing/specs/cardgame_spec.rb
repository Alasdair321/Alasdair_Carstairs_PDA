require 'minitest/autorun'
require 'minitest/rg'
require_relative '../card'
require_relative '../cardgame'

class CardGameTest < Minitest::Test

  def setup
    @card_ace = Card.new "Spades", 1, "Ace"
    @card_two = Card.new "Hearts", 2, "Two"
    @card_three = Card.new "Clubs", 3, "Three"
    @cards = [@card_ace, @card_two, @card_three]
  end

  def test_check_for_Ace_true
    result = CardGame.check_for_Ace @card_ace
    assert_equal true, result
  end

  def test_check_for_Ace_false
    result = CardGame.check_for_Ace @card_two
    assert_equal false, result
  end

  def test_highest_card_card2
    result = CardGame.highest_card @card_ace, @card_two
    assert_equal "Two", result
  end

  def test_highest_card_card1
    result = CardGame.highest_card @card_three, @card_two
    assert_equal "Three", result
  end

  def test_highest_card_same
    result = CardGame.highest_card @card_ace, @card_ace
    assert_equal "Same value", result
  end

  def test_cards_total
    result = CardGame.cards_total @cards
    assert_equal "You have a total of 6", result
  end



end
