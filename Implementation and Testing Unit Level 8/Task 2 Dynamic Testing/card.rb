class Card

  attr_reader :suit, :value, :name

  def initialize suit, value, name
    @suit = suit
    @value = value
    @name = name
  end

end
