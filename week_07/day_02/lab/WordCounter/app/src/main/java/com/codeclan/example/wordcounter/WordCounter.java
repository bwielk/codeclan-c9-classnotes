package com.codeclan.example.wordcounter;

/**
 * Created by sandy on 13/12/2016.
 */

public class WordCounter {
    public WordCounter() {

    }

    public int getCount(String text) {
        String[] wordArray = text.split(" ");
        return wordArray.length;
    }
}
