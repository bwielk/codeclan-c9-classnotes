package com.codeclan.example.rockpaperscissors;

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
    Button buttonRock;
    Button buttonPaper;
    Button buttonScissors;

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

    }

    public void onRockButtonClick(View view) {
        Log.d("RockPaperScissors", "Rock selected");
        play(Selection.ROCK);
    }

    public void onPaperButtonClick(View view) {
        Log.d("RockPaperScissors", "Paper selected");
        play(Selection.PAPER);
    }

    public void onScissorsButtonClick(View view) {
        Log.d("RockPaperScissors", "Scissors selected");
        play(Selection.SCISSORS);
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

    }

    private String choice(Selection selection) {
        switch (selection) {
            case ROCK:
                return "Rock";
            case PAPER:
                return "Paper";
            case SCISSORS:
                return "Scissors";
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
