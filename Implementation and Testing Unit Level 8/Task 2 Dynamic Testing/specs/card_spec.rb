require 'minitest/autorun'
require 'minitest/rg'
require_relative '../card'
require_relative '../cardgame'

class CardTest < Minitest::Test

  def setup
    @card = Card.new "Spades", 1, "Ace"
  end

  def test_suit
    assert_equal "Spades", @card.suit
  end

  def test_value
    assert_equal 1, @card.value
  end

  def test_name
    assert_equal "Ace", @card.name
  end

end
