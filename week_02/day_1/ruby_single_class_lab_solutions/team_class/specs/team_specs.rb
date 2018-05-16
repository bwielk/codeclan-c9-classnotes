require('MiniTest/autorun')
require('MiniTest/rg')
require_relative('../team')

class TeamTest < MiniTest::Test

  def setup()
    players = ["Beth", "Craig", "Matt", "Rick"]
    @team = Team.new("CodeClan Crusaders", players, "Val Dryden")
  end

  def test_team_has_name()
    assert_equal("CodeClan Crusaders", @team.team_name())
  end

  def test_team_has_players()
    assert_equal(4, @team.players().count())
  end

  def test_team_has_coach()
    assert_equal("Val Dryden", @team.coach())
  end

  def test_coach_can_be_updated()
    @team.coach = "Keith"
    assert_equal("Keith", @team.coach())
  end

  def test_new_player_can_be_added()
    new_player = "Jeff"
    @team.add_player("Jeff")
    assert_equal(5, @team.players().count())
  end

  def test_check_player_in_team()
    assert_equal(true, @team.has_player("Beth"))
  end

  def test_check_team_has_points()
    assert_equal(0, @team.points())
  end

  def test_if_team_wins()
    @team.play_game("win")
    assert_equal(3, @team.points())
  end

  def test_if_team_loses()
    @team.play_game("lost")
    assert_equal(0, @team.points())
  end

end