class Team

  attr_reader :team_name, :players, :points
  attr_accessor :coach

  def initialize(team_name, players, coach_name)
    @team_name = team_name
    @players = players
    @coach = coach_name
    @points = 0
  end

  def add_player(new_player)
    @players << new_player
  end

  def has_player(player)
    return @players.include?(player)
  end

  def play_game(result)
    if result.downcase == "win"
      @points += 3
    end
  end

end