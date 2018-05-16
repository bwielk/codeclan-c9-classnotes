package com.codeclan.example.rockpaperscissorslizardspock;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

/**
 * Created by sandy on 20/10/2016.
 */
public class GameActivity extends AppCompatActivity {

    Game game;
    TextView androidChoiceText;
    TextView userChoiceText;
    TextView resultText;
    TextView userScoreText;
    TextView androidScoreText;
    Button buttonRock;
    Button buttonPaper;
    Button buttonScissors;
    Button buttonLizard;
    Button buttonSpock;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        game = new Game();

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        androidChoiceText = (TextView)findViewById(R.id.android_choice_text);
        userChoiceText = (TextView)findViewById(R.id.user_choice_text);
        resultText = (TextView)findViewById(R.id.result_text);
        buttonRock = (Button)findViewById(R.id.btnRock);
        buttonPaper = (Button)findViewById(R.id.btnPaper);
        buttonScissors = (Button)findViewById(R.id.btnScissors);
        buttonLizard = (Button)findViewById(R.id.btnLizard);
        buttonSpock = (Button)findViewById(R.id.btnSpock);
        userScoreText = (TextView)findViewById(R.id.user_score);
        androidScoreText = (TextView)findViewById(R.id.android_score);

    }

    public void onRockButtonClick(View view) {
        Log.d("RockPaperScissors", "Rock selected");
        play(Selection.ROCK);
    }

    public void onPaperButtonClick(View view) {
        Log.d("RockPaperScissors", "Paper selected");
        play(Selection.PAPER);
    }

    public void onScissorButtonClick(View view) {
        Log.d("RockPaperScissors", "Scissors selected");
        play(Selection.SCISSORS);
    }

    public void onLizardButtonClick(View view) {
        Log.d("RockPaperScissors", "Lizard selected");
        play(Selection.LIZARD);
    }

    public void onSpockButtonClick(View view) {
        Log.d("RockPaperScissors", "Spock selected");
        play(Selection.SPOCK);
    }

    private void play(Selection user) {
        Selection android = game.getComputerSelection();
        String androidChoice = choice(android);
        String userChoice = choice(user);

        userChoiceText.setText("You chose " + userChoice);
        androidChoiceText.setText("Android chose " + androidChoice);

        Winner winner = game.getWinner(user, android);


        String winnerTxt = winner(winner);

        resultText.setText(winnerTxt);
        int userWins = game.getUserNumWins();
        int androidWins = game.getAndroidNumWins();
        String userScore = new Integer(userWins).toString();
        String androidScore = new Integer(androidWins).toString();

        userScoreText.setText("You : " + userScore);
        androidScoreText.setText("Android : " + androidScore);

    }

    private String choice(Selection selection) {
        switch (selection) {
            case ROCK:
                return "Rock";
            case PAPER:
                return "Paper";
            case SCISSORS:
                return "Scissors";
            case LIZARD:
                return "Lizard";
            case SPOCK:
                return "Spock";
        }
        return "Not a valid choice";
    }

    private String winner(Winner winner) {
        switch (winner) {
            case USER:
                return "You win!!";
            case ANDROID:
                return "Android Wins!!";
            case DRAW:
                return "It's a draw!";
        }
        return "It's a draw!!!!!";
    }
}
