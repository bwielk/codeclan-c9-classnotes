package com.example.sandy.eightball;

import java.util.ArrayList;
import java.util.Random;

/**
 * Created by sandy on 06/11/2016.
 */

public class Answers implements Answerable {

    private ArrayList<String> answers;

    public Answers() {
        answers = new ArrayList<String>();
        setupAnswers();
    }

    public Answers(ArrayList<String> someAnswers) {
        answers = new ArrayList<String>(someAnswers);
    }

    public ArrayList<String> getAnswers() {
        return new ArrayList<String>(answers);
    }

    public void add(String answer) {
        answers.add(answer);
    }

    public int getLength() {
        return answers.size();
    }

    public String getAnswerAtIndex(int index) {
        return answers.get(index);
    }

    public String getAnswer() {
        Random rand = new Random();
        int listSize = getLength();
        int index = rand.nextInt(listSize);
        String answer = getAnswerAtIndex(index);
        return answer;
    }

    private void setupAnswers() {
        String[] answersToAdd = {
                "Yes!",
                "That would be an ecumenical matter!"
        };

        for(String answer : answersToAdd) {
            add(answer);
        }
    }
}
